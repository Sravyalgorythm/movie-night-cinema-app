"use client"

import { useMemo, useState } from "react"
import { Search, Sparkles, RotateCcw } from "lucide-react"
import { MOVIES, MOOD_CHIPS, RATING_FILTERS, byId, searchMovies, type Movie } from "@/lib/movies"
import { MovieCard } from "@/components/movie-card"

function pickFrom(ids: string[], exclude?: string): Movie {
  const pool = ids.filter((id) => id !== exclude)
  const source = pool.length ? pool : ids
  const id = source[Math.floor(Math.random() * source.length)]
  return byId(id)
}

export function SoloOracle({
  onWatchTrailer,
}: {
  onWatchTrailer: (movie: Movie) => void
}) {
  const [query, setQuery] = useState("")
  const [activeChip, setActiveChip] = useState<string | null>(null)
  const [pickPool, setPickPool] = useState<string[] | null>(null)
  const [ratingFilter, setRatingFilter] = useState<string>("All Ratings")
  const [result, setResult] = useState<Movie | null>(null)
  const [noMatch, setNoMatch] = useState(false)

  // Movies allowed by the active age-rating pill.
  const ratedMovies = useMemo(() => {
    const filter = RATING_FILTERS.find((f) => f.label === ratingFilter)
    if (!filter || !filter.ratings) return MOVIES
    return MOVIES.filter((m) => filter.ratings!.includes(m.rating))
  }, [ratingFilter])

  // The pool "Find My Movie" draws from, after rating filter + chip/search.
  const currentPool = useMemo(() => {
    const ratedIds = ratedMovies.map((m) => m.id)
    if (pickPool) return pickPool.filter((id) => ratedIds.includes(id))
    const searched = searchMovies(query, ratedMovies)
    return searched.length ? searched : ratedIds
  }, [pickPool, query, ratedMovies])

  function handleFind() {
    const searched = query.trim() && !pickPool ? searchMovies(query, ratedMovies) : null
    if ((searched && searched.length === 0) || currentPool.length === 0) {
      setNoMatch(true)
      setResult(null)
      return
    }
    setNoMatch(false)
    // Search results are sorted best-first; lead with the top match.
    setResult(searched && searched.length ? byId(searched[0]) : pickFrom(currentPool))
  }

  function handleChip(chip: (typeof MOOD_CHIPS)[number]) {
    setActiveChip(chip.label)
    setQuery("")
    setPickPool(chip.ids)
    const ratedIds = ratedMovies.map((m) => m.id)
    const scoped = chip.ids.filter((id) => ratedIds.includes(id))
    setNoMatch(scoped.length === 0)
    setResult(scoped.length ? pickFrom(scoped) : null)
  }

  function handleResetFilters() {
    setQuery("")
    setActiveChip(null)
    setPickPool(null)
    setRatingFilter("All Ratings")
    setNoMatch(false)
    setResult(null)
  }

  function handleReroll() {
    if (currentPool.length === 0) return
    setResult(pickFrom(currentPool, result?.id))
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-slate-400">Age rating:</span>
          {RATING_FILTERS.map((f) => (
            <button
              key={f.label}
              type="button"
              onClick={() => {
                setRatingFilter(f.label)
                setNoMatch(false)
              }}
              aria-pressed={ratingFilter === f.label}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                ratingFilter === f.label
                  ? "border-amber-500 bg-amber-500/15 text-amber-300"
                  : "border-slate-600 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

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
              setNoMatch(false)
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
      ) : noMatch ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/30 p-12 text-center">
          <Search className="mx-auto mb-3 h-8 w-8 text-slate-600" />
          <p className="text-lg font-semibold text-slate-200">Sorry, no matches found.</p>
          <p className="mt-1 text-sm text-slate-500">
            Try tweaking your vibe or switching to a broader age rating.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-500 hover:text-amber-300"
          >
            <RotateCcw className="h-4 w-4" />
            Reset Filters
          </button>
        </div>
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
