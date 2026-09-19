"use client"

import { Play, RotateCcw, Clock, Star } from "lucide-react"
import type { Movie } from "@/lib/movies"
import { formatRuntime } from "@/lib/movies"
import { StreamingBadges } from "@/components/streaming-badges"

export function MovieCard({
  movie,
  onWatchTrailer,
  onReroll,
  rerollLabel = "Reroll / Try Another",
}: {
  movie: Movie
  onWatchTrailer: () => void
  onReroll?: () => void
  rerollLabel?: string
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-xl">
      <div className="grid gap-6 md:grid-cols-[minmax(0,320px)_1fr]">
        <div className="relative aspect-[2/3] w-full bg-slate-900 md:aspect-auto">
          <img
            src={movie.poster || "/placeholder.svg"}
            alt={`${movie.title} movie poster`}
            crossOrigin="anonymous"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-5 p-6 md:py-8 md:pr-8">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {movie.genres.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-slate-700/60 px-2.5 py-0.5 text-xs font-medium text-slate-300"
                >
                  {g}
                </span>
              ))}
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {movie.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span>{movie.year}</span>
            <span className="rounded border border-slate-600 px-1.5 py-0.5 text-xs font-semibold text-slate-200">
              {movie.rating}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4 text-slate-400" />
              {formatRuntime(movie.runtime)}
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {movie.rt}% match
            </span>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-500">
              Why you&apos;ll love this tonight
            </p>
            <p className="text-pretty leading-relaxed text-slate-200">{movie.why}</p>
          </div>

          <StreamingBadges streaming={movie.streaming} />

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={onWatchTrailer}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-amber-400"
            >
              <Play className="h-4 w-4 fill-slate-950" />
              Watch Trailer
            </button>
            {onReroll && (
              <button
                type="button"
                onClick={onReroll}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700/50"
              >
                <RotateCcw className="h-4 w-4" />
                {rerollLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
