# 🎬 Movie Night: Skip the Scrolling
> *"We'll scroll. You watch."*

Stop debating what to watch. **Movie Night** cures decision fatigue by delivering algorithmic clarity: **exactly ONE tailored movie pick** per session, eliminating endless scrolling across fragmented streaming libraries.

---

## 🚀 Live Demo & Submission Links
- **Live Deployment:** [movie-night-skip-the-scrolling.vercel.app](https://movie-night-skip-the-scrolling.vercel.app)
- **Source Code Repository:** [github.com/Sravyalgorythm/movie-night-cinema-app](https://github.com/Sravyalgorythm/movie-night-cinema-app)
- **Built for:** Hack Devengers 2.0

---

## ⚡ Key Features

### 1. 🔮 Solo Oracle ("One & Done")
- **Weighted Synset Intent Matching:** Freeform search input powered by keyword expansion (e.g., searching *"school"* maps intelligently to high-school classics rather than falling back to default lists).
- **Maturity Filter Controls:** Dedicated age-rating toggle (*All*, *Family G/PG*, *Teens PG-13*, *Mature R*) ensuring demographic-safe matches.
- **Instant Mood Chips:** 1-click curated mood profiles (*🌧️ Late Night Neo-Noir*, *🛋️ Zero-Brain Comfort*, *🍿 Popcorn Action*, *✨ 90s Nostalgia*).
- **Comprehensive Metadata & Preview:** Renders verified studio posters, RT scores, runtime, streaming availability (Netflix, Prime Video, Disney+), match rationale, and embedded modal trailers.

### 2. ⚔️ Couples Showdown
- **Compromise Engine:** Evaluates divergent tastes from both partners and computes a percentage-weighted crossover pick bridging both genres.
- **Sudden Death Wheel:** Interactive HTML5 Canvas physics wheel for deadlocked debates with realistic deceleration, tick feedback, and celebratory confetti.

### 3. 👨‍👩‍👧‍👦 Family Night
- **Veto Roulette (Democracy Mode):** Displays a curated four-title pool of family-safe titles where members cast vetoes until exactly one unanimous survivor remains.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router) & React 19** | Server-driven routing with reactive client state |
| **Language** | **TypeScript** | Strict type definitions across movie schemas and scoring engines |
| **Styling** | **Tailwind CSS** | Custom A24/Apple TV-inspired dark cinema design system |
| **Icons** | **Lucide React** | Lightweight SVG iconography |
| **Graphics & FX** | **HTML5 Canvas & Canvas-Confetti** | 60 FPS wheel rotation physics and particle celebrations |
| **Audio Engine** | **Web Audio API** | Procedurally synthesized oscillators (zero external MP3 assets) |
| **Media Pipeline** | **TMDB CDN & YouTube Embed API** | High-definition studio key art and privacy-enhanced video playback |

---

## 💻 Local Development Setup

Clone and launch locally in under 2 minutes:

```bash
# 1. Clone the repository
git clone [https://github.com/Sravyalgorythm/movie-night-cinema-app.git](https://github.com/Sravyalgorythm/movie-night-cinema-app.git)

# 2. Enter project folder
cd movie-night-cinema-app

# 3. Install dependencies
npm install
# or
pnpm install

# 4. Start local development server
npm run dev
