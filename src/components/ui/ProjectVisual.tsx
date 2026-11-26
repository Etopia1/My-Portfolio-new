import type { ProjectCaseStudy } from "@/types/portfolio";

interface ProjectVisualProps {
  theme: ProjectCaseStudy["visualTheme"];
  title: string;
  compact?: boolean;
}

export function ProjectVisual({ theme, title, compact = false }: ProjectVisualProps) {
  const heightClass = compact ? "h-44" : "h-56 sm:h-64";
  const isDarkCard = theme === "assessment" || theme === "mobility";

  return (
    <div
      role="img"
      aria-label={`${title} architectural preview`}
      className={`relative w-full ${heightClass} overflow-hidden rounded-lg border select-none ${
        isDarkCard
          ? "border-neutral-800 bg-[#151817] text-stone-100"
          : "border-[#e3e2dc] bg-[#f4f3ee] text-[#1c1f1c]"
      }`}
    >
      {/* Top browser chrome */}
      <div
        className={`flex items-center justify-between border-b px-3.5 py-2 text-[10px] font-mono ${
          isDarkCard
            ? "border-white/10 bg-black/25 text-stone-400"
            : "border-black/10 bg-white/70 text-stone-500"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#5b6e5e]" />
          <span className="h-2 w-2 rounded-full bg-stone-400/60" />
          <span className="h-2 w-2 rounded-full bg-stone-400/40" />
        </div>
        <span className="truncate max-w-[70%]">{title}</span>
      </div>

      {/* Architectural preview content */}
      <div className="flex h-[calc(100%-32px)] items-center justify-center p-4">
        {theme === "pulse" && (
          <div className="grid w-full max-w-sm grid-cols-12 gap-2.5">
            <div className="col-span-4 rounded-md border border-black/10 bg-white p-2.5 space-y-2 shadow-xs">
              <div className="text-[9px] font-mono font-semibold text-[#5b6e5e]">
                ROOMS
              </div>
              <div className="h-2 w-full rounded bg-[#5b6e5e]/25" />
              <div className="h-2 w-4/5 rounded bg-stone-200" />
              <div className="h-2 w-3/5 rounded bg-stone-200" />
            </div>
            <div className="col-span-8 flex flex-col justify-between rounded-md border border-black/10 bg-white p-2.5 shadow-xs">
              <div className="space-y-1.5">
                <div className="ml-auto w-3/4 rounded bg-[#5b6e5e] px-2 py-1 text-[9px] font-mono text-white">
                  Socket.IO → Redis Pub/Sub
                </div>
                <div className="w-4/5 rounded bg-[#ecece6] px-2 py-1 text-[9px] font-mono text-[#1c1f1c]">
                  MongoDB Persisted · 200 OK
                </div>
              </div>
              <div className="text-[8px] font-mono text-stone-400">
                Zustand + Winston
              </div>
            </div>
          </div>
        )}

        {theme === "assessment" && (
          <div className="w-full max-w-sm space-y-2.5 rounded-md border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center justify-between text-[9px] font-mono">
              <span className="text-[#9ec0a4]">BLAZEFACE PROCTORING</span>
              <span className="rounded bg-[#5b6e5e]/30 px-1.5 py-0.5 text-[#c7decb]">
                SYNCED
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 2, 3, 4, 5].map((idx) => (
                <div
                  key={idx}
                  className={`rounded border py-1.5 text-center font-mono text-[9px] ${
                    idx <= 3
                      ? "border-[#7fa085]/50 bg-[#5b6e5e]/30 text-white"
                      : "border-white/15 bg-white/5 text-stone-400"
                  }`}
                >
                  Q{idx}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] font-mono text-stone-400">
              <span>Redux Persist</span>
              <span>jsPDF + XLSX Export</span>
            </div>
          </div>
        )}

        {theme === "housing" && (
          <div className="grid w-full max-w-sm grid-cols-12 gap-2">
            <div className="col-span-7 rounded-md border border-black/10 bg-white p-2.5 space-y-2 shadow-xs">
              <div className="text-[9px] font-mono font-semibold text-[#5b6e5e]">
                MAPBOX CAMPUS ZONE
              </div>
              <svg viewBox="0 0 180 56" className="w-full h-12">
                <rect width="180" height="56" rx="4" fill="#ecece6" />
                <path d="M10 44 L65 18 L120 34 L170 12" stroke="#5b6e5e" strokeWidth="2" fill="none" />
                <circle cx="65" cy="18" r="4" fill="#5b6e5e" />
                <circle cx="120" cy="34" r="4" fill="#1c1f1c" />
              </svg>
            </div>
            <div className="col-span-5 flex flex-col justify-between rounded-md border border-black/10 bg-white p-2.5 shadow-xs text-[8px] font-mono">
              <span className="text-[#5b6e5e] font-semibold">TYPESCRIPT</span>
              <span className="text-stone-600">Next.js 14</span>
              <span className="text-stone-400">Socket.IO Chat</span>
            </div>
          </div>
        )}

        {theme === "itinerary" && (
          <div className="w-full max-w-sm space-y-2 rounded-md border border-black/10 bg-white p-3 shadow-xs">
            <div className="flex items-center justify-between text-[9px] font-mono">
              <span className="font-semibold text-[#5b6e5e]">TRIP PLANNER</span>
              <span className="text-stone-400">DJANGO + MAPBOX</span>
            </div>
            <div className="rounded bg-[#ecece6] px-2.5 py-1.5 text-[9px] font-mono text-[#1c1f1c]">
              01 · Context &amp; Vector Retrieval
            </div>
            <div className="rounded bg-[#5b6e5e]/12 px-2.5 py-1.5 text-[9px] font-mono text-[#3d4d40]">
              02 · Route Map + QR &amp; jsPDF Export
            </div>
          </div>
        )}

        {theme === "commerce" && (
          <div className="grid w-full max-w-sm grid-cols-3 gap-2">
            <div className="col-span-2 rounded-md border border-black/10 bg-white p-2.5 space-y-2 shadow-xs">
              <div className="text-[9px] font-mono font-semibold text-[#5b6e5e]">
                SYDNEY COLLECTION
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="rounded bg-[#ecece6] p-1.5 text-[8px] font-mono">
                  Flash Sale
                </div>
                <div className="rounded bg-[#ecece6] p-1.5 text-[8px] font-mono">
                  OTP + Auth
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-between rounded-md bg-[#5b6e5e] p-2.5 text-[8px] font-mono text-white">
              <span>CLOUDINARY</span>
              <span className="font-semibold">VERIFIED</span>
            </div>
          </div>
        )}

        {theme === "mobility" && (
          <div className="w-full max-w-sm space-y-2 rounded-md border border-white/10 bg-white/[0.04] p-3">
            <div className="flex justify-between text-[9px] font-mono text-[#9ec0a4]">
              <span>DRIVEN EXPO + AMADEUS</span>
              <span>STRIPE + SOCKET.IO</span>
            </div>
            <svg viewBox="0 0 260 54" className="w-full h-12">
              <path
                d="M 14 42 Q 78 8, 136 30 T 246 14"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 14 42 Q 78 8, 136 30"
                fill="none"
                stroke="#7fa085"
                strokeWidth="2.5"
              />
              <circle cx="14" cy="42" r="4" fill="#7fa085" />
              <circle cx="136" cy="30" r="5" fill="#ffffff" />
              <circle cx="246" cy="14" r="4" fill="#9ec0a4" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
