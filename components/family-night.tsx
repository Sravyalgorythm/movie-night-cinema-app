"use client"

import { useEffect, useState } from "react"
import { Ban, Play, RotateCcw, Clock, Star } from "lucide-react"
import { byId, formatRuntime, type Movie } from "@/lib/movies"
import { fireConfetti } from "@/lib/confetti"

const FAMILY_IDS = ["toy-story", "up", "the-lion-king", "finding-nemo"]

export function FamilyNight({
  onWatchTrailer,
}: {
  onWatchTrailer: (movie: Movie) => void
}) {
  const movies = FAMILY_IDS.map(byId)
  const [vetoed, setVetoed] = useState<string[]>([])

  const survivors = movies.filter((m) => !vetoed.includes(m.id))
  const winner = vetoed.length === 3 && survivors.length === 1 ? survivors[0] : null

  useEffect(() => {
    if (winner) fireConfetti(2600)
  }, [winner])

  function veto(id: string) {
    if (winner) return
    setVetoed((prev) => (prev.includes(id) || prev.length >= 3 ? prev : [...prev, id]))
  }

  function reset() {
    setVetoed([])
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white">Veto Roulette</h3>
            <p className="text-sm text-slate-400">
              Democracy mode: veto movies one by one. The last one standing wins the night.
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700/50"
          >
            <RotateCcw className="h-4 w-4" />
            Reset Game
          </button>
        </div>
        <p className="mt-3 text-sm font-medium text-amber-400">{vetoed.length} / 3 vetoes used</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {movies.map((m) => {
          const isVetoed = vetoed.includes(m.id)
          const isWinner = winner?.id === m.id
          return (
            <div
              key={m.id}
              className={`relative overflow-hidden rounded-xl border transition-all ${
                isWinner
                  ? "border-amber-500 ring-2 ring-amber-500/50"
                  : isVetoed
                    ? "border-slate-800 opacity-40"
                    : "border-slate-700"
              }`}
            >
              <div className="relative aspect-[2/3] bg-slate-900">
                <img
                  src={m.poster || "/placeholder.svg"}
                  alt={`${m.title} poster`}
                  crossOrigin="anonymous"
                  className={`h-full w-full object-cover ${isVetoed ? "grayscale" : ""}`}
                />
                {isVetoed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50">
                    <span className="rotate-[-12deg] rounded border-2 border-red-500 px-3 py-1 text-lg font-black uppercase tracking-widest text-red-500">
                      Vetoed
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h4 className={`truncate font-semibold text-white ${isVetoed ? "line-through" : ""}`}>{m.title}</h4>
                <p className="text-xs text-slate-400">
                  {m.year} · {m.rating}
                </p>
                {!winner && (
                  <button
                    type="button"
                    onClick={() => veto(m.id)}
                    disabled={isVetoed}
                    className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-red-600/90 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Ban className="h-3.5 w-3.5" />
                    Veto
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {winner && (
        <div className="overflow-hidden rounded-2xl border border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-slate-800 p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">The Tribe Has Spoken</p>
          <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">Tonight&apos;s Movie!</h3>

          <div className="mx-auto mt-5 flex max-w-md flex-col items-center gap-4 sm:flex-row sm:text-left">
            <img
              src={winner.poster || "/placeholder.svg"}
              alt={`${winner.title} poster`}
              crossOrigin="anonymous"
              className="h-48 w-32 flex-shrink-0 rounded-lg object-cover shadow-xl"
            />
            <div>
              <h4 className="text-xl font-bold text-white">{winner.title}</h4>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300 sm:justify-start">
                <span>{winner.year}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4 text-slate-400" />
                  {formatRuntime(winner.runtime)}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {winner.rt}%
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{winner.why}</p>
              <button
                type="button"
                onClick={() => onWatchTrailer(winner)}
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-amber-400"
              >
                <Play className="h-4 w-4 fill-slate-950" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
