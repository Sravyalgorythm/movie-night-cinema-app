"use client"

import { useState } from "react"
import { Clapperboard, User, Users, Home } from "lucide-react"
import type { Movie } from "@/lib/movies"
import { SoloOracle } from "@/components/solo-oracle"
import { CouplesShowdown } from "@/components/couples-showdown"
import { FamilyNight } from "@/components/family-night"
import { TrailerModal } from "@/components/trailer-modal"

type Tab = "solo" | "couples" | "family"

const TABS: { id: Tab; label: string; icon: typeof User }[] = [
  { id: "solo", label: "Solo Oracle", icon: User },
  { id: "couples", label: "Couples Showdown", icon: Users },
  { id: "family", label: "Family Night", icon: Home },
]

export default function Page() {
  const [tab, setTab] = useState<Tab>("solo")
  const [trailer, setTrailer] = useState<Movie | null>(null)

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <header className="border-b border-slate-800 bg-[#0B0F17]/95 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500">
              <Clapperboard className="h-6 w-6 text-slate-950" />
            </span>
            <div>
              <h1 className="text-xl font-black leading-none tracking-tight sm:text-2xl">
                Movie Night: Skip the Scrolling
              </h1>
              <p className="text-sm font-medium text-amber-400">We&apos;ll scroll. You watch.</p>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-pretty text-slate-400">
            Stop debating what to watch. Pick exactly ONE movie and start your night.
          </p>

          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Movie night modes">
            {TABS.map((t) => {
              const Icon = t.icon
              const active = tab === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-amber-500 text-slate-950"
                      : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {tab === "solo" && <SoloOracle onWatchTrailer={setTrailer} />}
        {tab === "couples" && <CouplesShowdown onWatchTrailer={setTrailer} />}
        {tab === "family" && <FamilyNight onWatchTrailer={setTrailer} />}
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 pt-4 text-center text-xs text-slate-600 sm:px-6">
        Made for indecisive movie nights. One pick, no scrolling.
      </footer>

      {trailer && (
        <TrailerModal trailerId={trailer.trailerId} title={trailer.title} onClose={() => setTrailer(null)} />
      )}
    </div>
  )
}
