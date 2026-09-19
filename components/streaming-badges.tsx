const STYLES: Record<string, string> = {
  Netflix: "bg-red-600/15 text-red-400 border-red-600/30",
  "Prime Video": "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "Disney+": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
}

export function StreamingBadges({ streaming }: { streaming: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs uppercase tracking-wide text-slate-500">Stream on</span>
      {streaming.map((s) => (
        <span
          key={s}
          className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${
            STYLES[s] ?? "bg-slate-700/40 text-slate-200 border-slate-600"
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  )
}
