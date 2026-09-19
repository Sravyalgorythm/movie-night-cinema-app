const COLORS = ["#F59E0B", "#FBBF24", "#FCD34D", "#FFFFFF", "#38BDF8", "#F472B6"]

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  rotation: number
  vr: number
}

export function fireConfetti(durationMs = 2200) {
  if (typeof window === "undefined") return

  const canvas = document.createElement("canvas")
  canvas.style.position = "fixed"
  canvas.style.inset = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.style.pointerEvents = "none"
  canvas.style.zIndex = "9999"
  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  document.body.appendChild(canvas)

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    canvas.remove()
    return
  }
  ctx.scale(dpr, dpr)

  const w = window.innerWidth
  const h = window.innerHeight
  const count = 160
  const particles: Particle[] = []

  for (let i = 0; i < count; i++) {
    particles.push({
      x: w / 2 + (Math.random() - 0.5) * w * 0.3,
      y: h * 0.35,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 6,
      size: Math.random() * 8 + 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.3,
    })
  }

  const start = performance.now()
  const gravity = 0.35

  function frame(now: number) {
    const elapsed = now - start
    ctx!.clearRect(0, 0, w, h)

    for (const p of particles) {
      p.vy += gravity
      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.99
      p.rotation += p.vr

      ctx!.save()
      ctx!.translate(p.x, p.y)
      ctx!.rotate(p.rotation)
      ctx!.fillStyle = p.color
      ctx!.globalAlpha = Math.max(0, 1 - elapsed / durationMs)
      ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
      ctx!.restore()
    }

    if (elapsed < durationMs) {
      requestAnimationFrame(frame)
    } else {
      canvas.remove()
    }
  }

  requestAnimationFrame(frame)
}
