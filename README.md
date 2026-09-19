# 🎬 Movie Night: Skip the Scrolling
>*We'll scroll. You watch.*

Most streaming services are built to keep you browsing their catalog. **Movie Night** does the opposite: it cuts through the debate, handles household disagreement, and serves up **exactly one movie** to watch.

---

## 🔗 Links
- **Live App:** [movie-night-skip-the-scrolling.vercel.app](https://movie-night-skip-the-scrolling.vercel.app)
- **GitHub Repository:** [github.com/Sravyalgorythm/movie-night-cinema-app](https://github.com/Sravyalgorythm/movie-night-cinema-app)
- **Event:** Hack Devengers 2.0

---

## ⚡ What It Does

### 1. 🔮 Solo Oracle (Single Viewer)
- **Natural Vibe Search:** Type how you feel (e.g. *"school"*, *"rainy night"*, *"something hilarious"*). The search understands context and synonyms instead of requiring exact title matches.
- **Rating Filter:** Toggle between *All*, *Family (G/PG)*, *Teens (PG-13)*, or *Mature (R)* before searching.
- **Quick Mood Chips:** One-click presets for common moods like *Late Night Neo-Noir*, *Zero-Brain Comfort*, *Popcorn Action*, and *90s Nostalgia*.
- **Everything You Need on One Card:** Displays verified poster art, Rotten Tomatoes score, runtime, streaming platforms (Netflix, Prime Video, Disney+), a quick rationale, and an embedded trailer pop-up.

### 2. ⚔️ Couples Showdown (Two Viewers)
- **Compromise Engine:** Enter what each person wants to watch. The engine finds a crossover title that blends both tastes and displays the percentage split.
- **Sudden Death Wheel:** Can't agree? Put both names on the canvas wheel, spin it, and let physics decide the winner.

### 3. 👨‍👩‍👧‍👦 Family Night (Group Voting)
- **Veto Roulette:** Loads a handpicked pool of family-friendly movies. Each person gets to hit **VETO** on titles they don't want. The last movie standing is tonight's pick.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS (Dark cinema theme)
- **Icons & Visuals:** Lucide React, HTML5 Canvas, Canvas-Confetti
- **Audio:** Web Audio API (lightweight procedural sounds for UI clicks, wheel spins, and wins)
- **Media:** TMDB CDN for verified artwork, YouTube Embed API for trailers

---

## 💻 Run Locally

```bash
git clone [https://github.com/Sravyalgorythm/movie-night-cinema-app.git](https://github.com/Sravyalgorythm/movie-night-cinema-app.git)
cd movie-night-cinema-app
npm install
npm run dev
