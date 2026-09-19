"use client"

import { useEffect, useRef, useState } from "react"

const SEGMENT_COLORS = ["#F59E0B", "#334155"]
const TEXT_COLORS = ["#0B0F17", "#FFFFFF"]

export function SpinWheel({
  labels,
  onResult,
  disabled,
}: {
  labels: string[]
  onResult: (winnerIndex: number) => void
  disabled?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const angleRef = useRef(0)
  const [spinning, setSpinning] = useState(false)
  const size = 300

  function draw(angle: number) {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const radius = size / 2 - 6
    const n = labels.length
    const seg = (Math.PI * 2) / n

    ctx.clearRect(0, 0, size, size)

    for (let i = 0; i < n; i++) {
      const start = angle + i * seg
      const end = start + seg
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, radius, start, end)
      ctx.closePath()
      ctx.fillStyle = SEGMENT_COLORS[i % SEGMENT_COLORS.length]
      ctx.fill()

      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(start + seg / 2)
      ctx.fillStyle = TEXT_COLORS[i % TEXT_COLORS.length]
      ctx.font = "bold 18px system-ui, sans-serif"
      ctx.textAlign = "right"
      ctx.textBaseline = "middle"
      ctx.fillText(labels[i].slice(0, 14) || `Player ${i + 1}`, radius - 20, 0)
      ctx.restore()
    }

    // hub
    ctx.beginPath()
    ctx.arc(cx, cy, 26, 0, Math.PI * 2)
    ctx.fillStyle = "#0B0F17"
    ctx.fill()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#F59E0B"
    ctx.stroke()

    // rim
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.lineWidth = 6
    ctx.strokeStyle = "#1E293B"
    ctx.stroke()
  }

  useEffect(() => {
    draw(angleRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels.join("|")])

  function spin() {
    if (spinning || disabled) return
    setSpinning(true)

    const n = labels.length
    const seg = (Math.PI * 2) / n
    const winner = Math.floor(Math.random() * n)
    const spins = 5 + Math.random() * 2
    const start = angleRef.current
    // Pointer is at the top (-PI/2). Land the winner's center under the pointer.
    const targetForWinner = -Math.PI / 2 - (winner * seg + seg / 2)
    const normalizedStart = start % (Math.PI * 2)
    const end = start - normalizedStart + spins * Math.PI * 2 + targetForWinner

    const duration = 4200
    const startTime = performance.now()

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    function frame(now: number) {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = easeOut(t)
      const current = start + (end - start) * eased
      angleRef.current = current
      draw(current)
      if (t < 1) {
        requestAnimationFrame(frame)
      } else {
        setSpinning(false)
        onResult(winner)
      }
    }
    requestAnimationFrame(frame)
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative" style={{ width: size, height: size }}>
        <div
          className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1"
          aria-hidden="true"
          style={{
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderTop: "24px solid #F59E0B",
          }}
        />
        <canvas ref={canvasRef} style={{ width: size, height: size }} className="drop-shadow-xl" />
      </div>
      <button
        type="button"
        onClick={spin}
        disabled={spinning || disabled}
        className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-3 text-base font-bold text-slate-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {spinning ? "Spinning…" : "Spin Wheel"}
      </button>
    </div>
  )
}
