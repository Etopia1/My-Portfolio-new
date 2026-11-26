import fs from "node:fs";
import path from "node:path";

/**
 * Generates an ATS-friendly, multi-page standard software engineering CV PDF
 * at public/Andrew-Etopia-CV.pdf using crisp PDF 1.4 vector text & rules.
 */

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN_X = 48;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const BOTTOM_MARGIN = 52;

function escapePdfText(value) {
  return value
    .replace(/[^\x20-\x7E]/g, (ch) => {
      if (ch === "\u2013" || ch === "\u2014") return "-";
      if (ch === "\u2022") return "-";
      if (ch === "\u2019" || ch === "\u2018") return "'";
      if (ch === "\u201c" || ch === "\u201d") return '"';
      return " ";
    })
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

// Accurate Helvetica glyph width estimation in points
function estimateWidth(text, size, bold) {
  let units = 0;
  for (const ch of text) {
    if (ch === " " || ch === "i" || ch === "l" || ch === "I" || ch === "." || ch === "," || ch === ":" || ch === "|") {
      units += 0.28;
    } else if (ch === "f" || ch === "t" || ch === "r" || ch === "j" || ch === "-" || ch === "(" || ch === ")") {
      units += 0.34;
    } else if (ch === "m" || ch === "w" || ch === "M" || ch === "W") {
      units += 0.78;
    } else if (ch >= "A" && ch <= "Z") {
      units += bold ? 0.69 : 0.64;
    } else {
      units += bold ? 0.55 : 0.50;
    }
  }
  return units * size;
}

function wrapText(text, maxWidth, size, bold = false) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (estimateWidth(candidate, size, bold) <= maxWidth) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

class PdfDoc {
  constructor() {
    this.pages = [[]];
    this.y = PAGE_HEIGHT - 48;
  }

  currentOps() {
    return this.pages[this.pages.length - 1];
  }

  ensureSpace(neededHeight) {
    if (this.y - neededHeight < BOTTOM_MARGIN) {
      this.pages.push([]);
      this.y = PAGE_HEIGHT - 50;
    }
  }

  drawCentered(text, size, bold = false, rgb = [0.1, 0.12, 0.11], gapAfter = 14) {
    this.ensureSpace(gapAfter);
    const width = estimateWidth(text, size, bold);
    const x = Math.max(MARGIN_X, (PAGE_WIDTH - width) / 2);
    const font = bold ? "/F2" : "/F1";
    this.currentOps().push(
      `${rgb[0]} ${rgb[1]} ${rgb[2]} rg`,
      `BT ${font} ${size} Tf 1 0 0 1 ${x.toFixed(1)} ${this.y.toFixed(1)} Tm (${escapePdfText(text)}) Tj ET`
    );
    this.y -= gapAfter;
  }

  drawSection(title) {
    this.ensureSpace(28);
    this.y -= 5;
    this.currentOps().push(
      `0.12 0.14 0.13 rg`,
      `BT /F2 10.5 Tf 1 0 0 1 ${MARGIN_X} ${this.y.toFixed(1)} Tm (${escapePdfText(title.toUpperCase())}) Tj ET`
    );
    this.y -= 4;
    this.currentOps().push(
      `0.36 0.43 0.37 RG 0.9 w ${MARGIN_X} ${this.y.toFixed(1)} m ${(PAGE_WIDTH - MARGIN_X).toFixed(1)} ${this.y.toFixed(1)} l S`
    );
    this.y -= 13;
  }

  drawRoleHeader(leftText, rightText) {
    this.ensureSpace(20);
    this.currentOps().push(
      `0.1 0.12 0.11 rg`,
      `BT /F2 9.8 Tf 1 0 0 1 ${MARGIN_X} ${this.y.toFixed(1)} Tm (${escapePdfText(leftText)}) Tj ET`
    );
    if (rightText) {
      const rw = estimateWidth(rightText, 9.2, false);
      const rx = PAGE_WIDTH - MARGIN_X - rw;
      this.currentOps().push(
        `0.35 0.38 0.36 rg`,
        `BT /F1 9.2 Tf 1 0 0 1 ${rx.toFixed(1)} ${this.y.toFixed(1)} Tm (${escapePdfText(rightText)}) Tj ET`
      );
    }
    this.y -= 13;
  }

  drawParagraph(text, size = 9.2, bold = false, gapAfter = 5) {
    const lines = wrapText(text, CONTENT_WIDTH, size, bold);
    this.ensureSpace(lines.length * 12 + gapAfter);
    const font = bold ? "/F2" : "/F1";
    for (const line of lines) {
      this.currentOps().push(
        `0.2 0.23 0.21 rg`,
        `BT ${font} ${size} Tf 1 0 0 1 ${MARGIN_X} ${this.y.toFixed(1)} Tm (${escapePdfText(line)}) Tj ET`
      );
      this.y -= 12.2;
    }
    this.y -= gapAfter;
  }

  drawBullet(text, label = null) {
    const fullText = label ? `${label}: ${text}` : text;
    const bulletIndent = MARGIN_X + 12;
    const lines = wrapText(fullText, CONTENT_WIDTH - 14, 9.1, false);
    this.ensureSpace(lines.length * 12 + 3);

    this.currentOps().push(
      `0.36 0.43 0.37 rg`,
      `BT /F2 9.1 Tf 1 0 0 1 ${(MARGIN_X + 2).toFixed(1)} ${this.y.toFixed(1)} Tm (-) Tj ET`
    );

    lines.forEach((line, idx) => {
      let rendered = false;
      if (idx === 0 && label && line.startsWith(`${label}:`)) {
        const prefix = `${label}:`;
        const rest = line.slice(prefix.length).trimStart();
        this.currentOps().push(
          `0.1 0.12 0.11 rg`,
          `BT /F2 9.1 Tf 1 0 0 1 ${bulletIndent.toFixed(1)} ${this.y.toFixed(1)} Tm (${escapePdfText(prefix)}) Tj 0.22 0.25 0.23 rg /F1 9.1 Tf (${escapePdfText(" " + rest)}) Tj ET`
        );
        rendered = true;
      }
      if (!rendered) {
        this.currentOps().push(
          `0.22 0.25 0.23 rg`,
          `BT /F1 9.1 Tf 1 0 0 1 ${bulletIndent.toFixed(1)} ${this.y.toFixed(1)} Tm (${escapePdfText(line)}) Tj ET`
        );
      }
      this.y -= 12;
    });
    this.y -= 2;
  }

  buildBuffer() {
    // Add footer page labels to every page
    this.pages.forEach((ops, idx) => {
      const footer = `Andrew Etopia | Page ${idx + 1} of ${this.pages.length}`;
      const fw = estimateWidth(footer, 8.2, false);
      const fx = (PAGE_WIDTH - fw) / 2;
      ops.push(
        `0.45 0.48 0.46 rg`,
        `BT /F1 8.2 Tf 1 0 0 1 ${fx.toFixed(1)} 28 Tm (${escapePdfText(footer)}) Tj ET`
      );
    });

    const objects = [];
    const pageObjIds = [];
    const firstPageObjId = 5; // 1=Catalog, 2=Pages, 3=F1, 4=F2

    this.pages.forEach((_, idx) => {
      pageObjIds.push(firstPageObjId + idx * 2);
    });

    objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
    objects.push(
      `2 0 obj\n<< /Type /Pages /Kids [${pageObjIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjIds.length} >>\nendobj\n`
    );
    objects.push(`3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);
    objects.push(`4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

    this.pages.forEach((ops, idx) => {
      const pageId = firstPageObjId + idx * 2;
      const contentId = pageId + 1;
      const stream = ops.join("\n");
      objects.push(
        `${pageId} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`
      );
      objects.push(
        `${contentId} 0 obj\n<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream\nendobj\n`
      );
    });

    let pdf = "%PDF-1.4\n";
    const offsets = [0];
    for (const obj of objects) {
      offsets.push(Buffer.byteLength(pdf, "utf8"));
      pdf += obj;
    }

    const xrefOffset = Buffer.byteLength(pdf, "utf8");
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";
    for (let i = 1; i < offsets.length; i++) {
      pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
    return Buffer.from(pdf, "utf8");
  }
}

const doc = new PdfDoc();

// Header
doc.drawCentered("ANDREW ETOPIA", 19, true, [0.1, 0.12, 0.11], 16);
doc.drawCentered(
  "Full-Stack Software Engineer  |  AI Evaluation & QA Specialist",
  10.5,
  true,
  [0.36, 0.43, 0.37],
  14
);
doc.drawCentered(
  "Lagos, Nigeria (Remote Worldwide)  |  +234 907 460 6483  |  jolaetopia81@gmail.com",
  8.8,
  false,
  [0.3, 0.33, 0.31],
  12
);
doc.drawCentered(
  "GitHub: github.com/Etopia1 (45+ Repos)  |  LinkedIn: linkedin.com/in/etopia-anjolaoluwa-andrew-430721297",
  8.8,
  false,
  [0.3, 0.33, 0.31],
  14
);

// Summary
doc.drawSection("Professional Summary");
doc.drawParagraph(
  "Results-oriented Full-Stack Software Engineer and AI Evaluation / QA Specialist with 4+ years of hands-on experience designing, building, and deploying scalable web and mobile applications, decoupled REST/WebSocket backends, workflow automations, and evaluated AI systems. Maintains 45+ public GitHub repositories and 6 live production Vercel deployments spanning TypeScript, React, Next.js, Node.js/Express, Python/Django, PostgreSQL, MongoDB, Redis, Socket.IO, Mapbox GL, and Stripe/Paystack integrations."
);

// Core Competencies
doc.drawSection("Technical Skills & Core Competencies");
doc.drawBullet(
  "React, Next.js (App Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux Toolkit, Zustand, Three.js, Recharts/Chart.js.",
  "Frontend Engineering"
);
doc.drawBullet(
  "Node.js, Express 5, Python, Django REST Framework, REST APIs, Socket.IO real-time engines, JWT/OAuth/Google Auth, Joi validation, Cloudinary, Multer.",
  "Backend & Real-Time"
);
doc.drawBullet(
  "PostgreSQL, MongoDB (Mongoose), Redis (caching & pub/sub), MySQL, Supabase, schema modeling, CRUD indexing & query optimization.",
  "Databases & Caching"
);
doc.drawBullet(
  "OpenAI API, Google Generative AI, Pinecone vector search concepts, TensorFlow.js (BlazeFace webcam proctoring), LLM hallucination & rubric evaluation.",
  "AI, ML & Evaluation"
);
doc.drawBullet(
  "Git, GitHub, Docker, Vercel, Render, Postman, Mapbox GL JS, Leaflet, OpenRouteService, Stripe, Paystack, Amadeus API, n8n, GoHighLevel, WordPress/SEO.",
  "Tools, Maps & Automation"
);

// Experience
doc.drawSection("Professional Experience");
doc.drawRoleHeader(
  "Independent Software Engineer / Full-Stack Developer",
  "Remote  |  2019 - Present"
);
doc.drawBullet(
  "Architected and deployed 25+ full-stack applications and 45+ GitHub repositories with decoupled frontend clients and Express, TypeScript, and Django REST backends."
);
doc.drawBullet(
  "Engineered real-time communication, proctoring, and live GPS tracking channels using Socket.IO, Redis pub/sub, and persisted Redux/Zustand client stores."
);
doc.drawBullet(
  "Integrated Stripe, Paystack, Amadeus travel SDK, Cloudinary media pipelines, Mapbox GL JS geospatial routing, Resend/Nodemailer, and jsPDF/PDFKit reporting."
);
doc.drawBullet(
  "Built AI-enabled web applications and business automations using OpenAI APIs, Google Generative AI, TensorFlow.js BlazeFace, Python/Pandas, n8n, and GoHighLevel."
);
doc.drawBullet(
  "Improved application responsiveness and reliability via database indexing, Redis caching, lazy loading, code splitting, and Joi/express-validator payload hardening."
);

doc.drawRoleHeader(
  "Freelance Software QA Tester  -  uTest / Test.io / Testlio",
  "Remote  |  2024 - Present"
);
doc.drawBullet(
  "Executed structured test cases, exploratory QA, and regression suites across international web and mobile software releases."
);
doc.drawBullet(
  "Isolated functional, UI/UX, and API defects with reproducible step-by-step documentation, network evidence, and strict adherence to release SLAs."
);

doc.drawRoleHeader(
  "AI Evaluation & Data Contributor  -  OneForma / Outlier",
  "Remote  |  2024 - Present"
);
doc.drawBullet(
  "Evaluated LLM outputs across coding, reasoning, and instruction-following rubrics for factual accuracy, hallucination detection, and logical consistency."
);
doc.drawBullet(
  "Completed high-precision data annotation, labeling, transcription, and voice/dataset quality reviews under evolving technical guidelines."
);

// Selected Engineering Projects (with verified GitHub & Live URLs)
doc.drawSection("Selected Technical Projects (github.com/Etopia1)");
doc.drawBullet(
  "Decoupled Next.js 14 & Express TypeScript campus housing marketplace featuring Mapbox GL property discovery, Redux Toolkit persistence, Socket.IO real-time messaging, Cloudinary, and jsPDF receipts. (Live: futa-housing.vercel.app | Repos: FutaHousing-Frontend- & FutaHousing-Backend-)",
  "FUTA Housing Marketplace"
);
doc.drawBullet(
  "Proctored computer-based testing suite uniting Redux Persist exam state, TensorFlow.js BlazeFace webcam monitoring, Socket.IO live supervision, Stripe/PDFKit, and XLSX/CSV exports. (Live: ki-icc-cbt-frontend.vercel.app | Repos: KiICC-cbt-frontend & EduCBT-Pro-Backend-)",
  "KICC CBT & EduCBT Pro"
);
doc.drawBullet(
  "Cross-platform Expo React Native & Express 5 ride/travel app with live Mapbox GPS telemetry via Socket.IO, Amadeus travel APIs, Stripe checkout, Helmet security, and Expo push notifications. (Live: driven-nu.vercel.app | Repos: UberAppRactNative & UberAppBackend)",
  "Driven Ride & Travel Platform"
);
doc.drawBullet(
  "Low-latency messaging engine powered by React, Zustand, Socket.IO, Redis, MongoDB, JWT cookie auth, Cloudinary, and Winston logging. (Live: purlse-chat-front.vercel.app | Repos: PurlseChatFront & purslsechatback)",
  "PulseChat Real-Time Engine"
);
doc.drawBullet(
  "React 19 + Mapbox/Leaflet itinerary planner paired with a Python Django 5 REST backend, AI contextual recommendations, QR code sharing, and jsPDF export. (Live: trip-planner-front.vercel.app | Repos: TripPlannerFront & TripPytonBackend)",
  "Intelligent Trip Planner"
);
doc.drawBullet(
  "Buyer/merchant storefront featuring Google OAuth, OTP verification, Joi validation, Cloudinary media, flash sales, and Gemini AI support. (Live: sydney-collection.vercel.app | Repos: AndrewEcomerce & AndrewEcomerceBack)",
  "Sydney Collection E-Commerce"
);

// Education & Certifications
doc.drawSection("Education & Certifications");
doc.drawRoleHeader(
  "Brigham Young University-Idaho (BYU-Idaho)  -  via BYU-Pathway Worldwide",
  "Online  |  In Progress"
);
doc.drawParagraph(
  "B.S. in Software Development  |  Focus: web & computer programming, software engineering, databases, backend web services, testing, and full-stack architecture.",
  9.0,
  false,
  4
);
doc.drawRoleHeader(
  "Federal University of Technology Akure (FUTA)",
  "Ondo State, Nigeria  |  Expected 2029"
);
doc.drawParagraph(
  "B.Sc. in Statistics  |  Focus: probability, quantitative reasoning, statistical modeling, data analysis, and analytical problem solving.",
  9.0,
  false,
  5
);
doc.drawBullet("Software Development Certificate - BYU-Idaho / BYU-Pathway Worldwide (Online)");
doc.drawBullet("AI & Machine Learning Certificate - Great Learning (Online)");
doc.drawBullet("Data Science / Artificial Intelligence Certificate - Skill-Lync (Online)");

doc.drawSection("Target Roles & Remote Availability");
doc.drawBullet(
  "Full-Stack Software Engineer (React / Next.js / TypeScript / Node.js / Python & Django), Frontend Engineer, Backend & API Engineer, AI-Integrated Product Developer, Software QA Tester, and AI Evaluation Specialist.",
  "Target Roles"
);
doc.drawBullet(
  "Immediate availability for full-time remote roles, long-term contracts, and freelance product builds across international time zones. Experienced collaborating asynchronously with Git/GitHub, Jira/Trello workflows, Postman API documentation, and crisp written defect/architecture reports.",
  "Availability"
);

const outDir = path.join(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "Andrew-Etopia-CV.pdf");
fs.writeFileSync(outPath, doc.buildBuffer());
console.log(`Generated ${outPath} (${doc.pages.length} pages)`);
