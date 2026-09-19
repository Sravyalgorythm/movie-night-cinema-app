"use client"

import { useMemo, useState } from "react"
import { Search, Sparkles } from "lucide-react"
import { MOVIES, MOOD_CHIPS, byId, type Movie } from "@/lib/movies"
import { MovieCard } from "@/components/movie-card"

function pickFrom(ids: string[], exclude?: string): Movie {
  const pool = ids.filter((id) => id !== exclude)
  const source = pool.length ? pool : ids
  const id = source[Math.floor(Math.random() * source.length)]
  return byId(id)
}

function searchMovies(query: string): string[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/)
  const matches = MOVIES.filter((m) => {
    const haystack = [m.title, ...m.genres, ...m.tags].join(" ").toLowerCase()
    return terms.some((t) => haystack.includes(t))
  })
  return matches.map((m) => m.id)
}

export function SoloOracle({
  onWatchTrailer,
}: {
  onWatchTrailer: (movie: Movie) => void
}) {
  const [query, setQuery] = useState("")
  const [activeChip, setActiveChip] = useState<string | null>(null)
  const [pickPool, setPickPool] = useState<string[] | null>(null)
  const [result, setResult] = useState<Movie | null>(null)

  const currentPool = useMemo(() => {
    if (pickPool) return pickPool
    const searched = searchMovies(query)
    return searched.length ? searched : MOVIES.map((m) => m.id)
  }, [pickPool, query])

  function handleFind() {
    setResult(pickFrom(currentPool))
  }

  function handleChip(chip: (typeof MOOD_CHIPS)[number]) {
    setActiveChip(chip.label)
    setQuery("")
    setPickPool(chip.ids)
    setResult(pickFrom(chip.ids))
  }

  function handleReroll() {
    setResult(pickFrom(currentPool, result?.id))
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 sm:p-6">
        <label htmlFor="vibe-search" className="sr-only">
          What vibe are you craving tonight?
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <input
            id="vibe-search"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPickPool(null)
              setActiveChip(null)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) handleFind()
            }}
            placeholder="What vibe are you craving tonight?"
            className="w-full rounded-xl border border-slate-600 bg-slate-900 py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {MOOD_CHIPS.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => handleChip(chip)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeChip === chip.label
                  ? "border-amber-500 bg-amber-500/15 text-amber-300"
                  : "border-slate-600 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleFind}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-bold text-slate-950 transition-colors hover:bg-amber-400 sm:w-auto"
        >
          <Sparkles className="h-5 w-5" />
          Find My Movie
        </button>
      </div>

      {result ? (
        <MovieCard movie={result} onWatchTrailer={() => onWatchTrailer(result)} onReroll={handleReroll} />
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/30 p-12 text-center">
          <Sparkles className="mx-auto mb-3 h-8 w-8 text-slate-600" />
          <p className="text-slate-400">
            Pick a vibe or hit <span className="font-semibold text-amber-400">Find My Movie</span> to reveal your one
            pick for tonight.
          </p>
        </div>
      )}
    </div>
  )
}
