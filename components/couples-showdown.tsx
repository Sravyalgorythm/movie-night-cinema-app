"use client"

import { useState } from "react"
import { Scale, Trophy, Play } from "lucide-react"
import { byId, type Movie } from "@/lib/movies"
import { SpinWheel } from "@/components/spin-wheel"
import { fireConfetti } from "@/lib/confetti"

// Crossover picks that bridge two tastes.
const CROSSOVER_IDS = ["knives-out", "crazy-stupid-love", "jurassic-park"]

function crossoverPick(a: string, b: string): Movie {
  const text = `${a} ${b}`.toLowerCase()
  const wantsAction = /action|thrill|fight|hero|dino|adventure/.test(text)
  const wantsComedy = /comedy|funny|laugh|rom|love|cozy|comfort/.test(text)
  if (wantsAction && wantsComedy) return byId("knives-out")
  if (wantsComedy) return byId("crazy-stupid-love")
  if (wantsAction) return byId("jurassic-park")
  const id = CROSSOVER_IDS[Math.floor(Math.random() * CROSSOVER_IDS.length)]
  return byId(id)
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-400">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
      />
    </label>
  )
}

export function CouplesShowdown({
  onWatchTrailer,
}: {
  onWatchTrailer: (movie: Movie) => void
}) {
  const [nameA, setNameA] = useState("")
  const [wantA, setWantA] = useState("")
  const [nameB, setNameB] = useState("")
  const [wantB, setWantB] = useState("")

  const [compromise, setCompromise] = useState<Movie | null>(null)
  const [winner, setWinner] = useState<{ name: string; movie: Movie } | null>(null)

  const labelA = nameA.trim() || "Partner A"
  const labelB = nameB.trim() || "Partner B"

  function runCompromise() {
    setCompromise(crossoverPick(wantA, wantB))
  }

  function handleWheelResult(index: number) {
    const name = index === 0 ? labelA : labelB
    const want = index === 0 ? wantA : wantB
    const movie = crossoverPick(want, want === "" ? "action comedy" : want)
    setWinner({ name, movie })
    fireConfetti()
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-amber-400">Partner A</h3>
          <div className="space-y-4">
            <Field label="Name" value={nameA} onChange={setNameA} placeholder="e.g. Alex" />
            <Field label="What they want to watch" value={wantA} onChange={setWantA} placeholder="e.g. mind-bending action" />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-sky-300">Partner B</h3>
          <div className="space-y-4">
            <Field label="Name" value={nameB} onChange={setNameB} placeholder="e.g. Sam" />
            <Field label="What they want to watch" value={wantB} onChange={setWantB} placeholder="e.g. cozy comedy" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Compromise Engine */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Scale className="h-5 w-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Compromise Engine</h3>
          </div>

          <div className="mb-4">
            <div className="mb-1.5 flex justify-between text-xs font-medium text-slate-400">
              <span>{labelA}</span>
              <span>{labelB}</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full">
              <div className="w-1/2 bg-amber-500" />
              <div className="w-1/2 bg-sky-400" />
            </div>
            <p className="mt-2 text-center text-xs text-slate-500">A perfect 50/50 crossover</p>
          </div>

          <button
            type="button"
            onClick={runCompromise}
            className="w-full rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-amber-400"
          >
            Find the Compromise
          </button>

          {compromise && (
            <div className="mt-5 flex gap-4 rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <img
                src={compromise.poster || "/placeholder.svg"}
                alt={`${compromise.title} poster`}
                crossOrigin="anonymous"
                className="h-32 w-[86px] flex-shrink-0 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <h4 className="font-bold text-white">{compromise.title}</h4>
                <p className="text-xs text-slate-400">
                  {compromise.year} · {compromise.genres.join(", ")}
                </p>
                <p className="mt-1 line-clamp-3 text-sm text-slate-300">{compromise.why}</p>
                <button
                  type="button"
                  onClick={() => onWatchTrailer(compromise)}
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-md bg-amber-500/15 px-3 py-1.5 text-sm font-semibold text-amber-300 transition-colors hover:bg-amber-500/25"
                >
                  <Play className="h-3.5 w-3.5 fill-amber-300" />
                  Watch Trailer
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sudden Death Wheel */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Sudden Death Wheel</h3>
          </div>

          <SpinWheel labels={[labelA, labelB]} onResult={handleWheelResult} />

          {winner && (
            <div className="mt-5 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-center">
              <p className="text-sm text-amber-300">
                🎉 <span className="font-bold">{winner.name}</span> wins the pick!
              </p>
              <div className="mt-3 flex items-center gap-4 text-left">
                <img
                  src={winner.movie.poster || "/placeholder.svg"}
                  alt={`${winner.movie.title} poster`}
                  crossOrigin="anonymous"
                  className="h-24 w-16 flex-shrink-0 rounded-md object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{winner.movie.title}</h4>
                  <p className="text-xs text-slate-400">
                    {winner.movie.year} · {winner.movie.rt}% match
                  </p>
                  <button
                    type="button"
                    onClick={() => onWatchTrailer(winner.movie)}
                    className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200"
                  >
                    <Play className="h-3.5 w-3.5 fill-amber-300" />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
