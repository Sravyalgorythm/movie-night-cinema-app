export type Movie = {
  id: string
  title: string
  year: number
  rating: string
  runtime: number
  rt: number
  genres: string[]
  tags: string[]
  streaming: string[]
  familySafe: boolean
  why: string
  poster: string
  trailerId: string
}

export const MOVIES: Movie[] = [
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    rating: "PG-13",
    runtime: 148,
    rt: 87,
    genres: ["Sci-Fi", "Thriller"],
    tags: ["neo-noir", "action", "mind-bending"],
    streaming: ["Netflix", "Prime Video"],
    familySafe: false,
    why: "A heist inside layered dreams that rewards every ounce of attention. Christopher Nolan's tightest puzzle box.",
    poster: "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    trailerId: "cdx31ak4KbQ",
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    rating: "PG-13",
    runtime: 152,
    rt: 94,
    genres: ["Action", "Thriller"],
    tags: ["popcorn", "action", "crime"],
    streaming: ["Netflix"],
    familySafe: false,
    why: "Heath Ledger's chaotic Joker creates a gripping urban crime drama that transcends the genre.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailerId: "_PZpmTj1Q8Q",
  },
  {
    id: "knives-out",
    title: "Knives Out",
    year: 2019,
    rating: "PG-13",
    runtime: 130,
    rt: 97,
    genres: ["Comedy", "Thriller"],
    tags: ["comfort", "mystery", "cozy"],
    streaming: ["Prime Video"],
    familySafe: false,
    why: "A colorful modern whodunit with eccentric detective Benoit Blanc untangling a wealthy family's lies.",
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    trailerId: "qOg3AoRc4nI",
  },
  {
    id: "crazy-stupid-love",
    title: "Crazy, Stupid, Love",
    year: 2011,
    rating: "PG-13",
    runtime: 118,
    rt: 79,
    genres: ["Rom-Com", "Comedy"],
    tags: ["comfort", "rom-com", "funny"],
    streaming: ["Netflix"],
    familySafe: false,
    why: "Sharp, feel-good comedy with Ryan Gosling and Steve Carell at their most charismatic.",
    poster: "https://image.tmdb.org/t/p/w500/1b58C4o9p5B73yV5e4ZsmJdKk5p.jpg",
    trailerId: "8iCWtxJmvnk",
  },
  {
    id: "jurassic-park",
    title: "Jurassic Park",
    year: 1993,
    rating: "PG-13",
    runtime: 127,
    rt: 91,
    genres: ["Adventure", "Sci-Fi"],
    tags: ["popcorn", "90s", "adventure"],
    streaming: ["Netflix"],
    familySafe: true,
    why: "A masterclass in tension, groundbreaking practical effects, and John Williams' legendary score.",
    poster: "https://image.tmdb.org/t/p/w500/d9mtMGQDLANKieb9PbD3yK7xxzo.jpg",
    trailerId: "bx46tthKXmc",
  },
  {
    id: "spider-man-into-the-spider-verse",
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: "PG",
    runtime: 117,
    rt: 97,
    genres: ["Animation", "Action"],
    tags: ["action", "family", "superhero"],
    streaming: ["Netflix"],
    familySafe: true,
    why: "A visual comic-book feast with an inventive rhythm, heartfelt coming-of-age story, and dazzling soundtrack.",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    trailerId: "tg52up16eq0",
  },
  {
    id: "toy-story",
    title: "Toy Story",
    year: 1995,
    rating: "G",
    runtime: 81,
    rt: 100,
    genres: ["Animation", "Family"],
    tags: ["family", "90s", "comfort"],
    streaming: ["Disney+"],
    familySafe: true,
    why: "The pioneer of 3D animation featuring a timeless rivalry-turned-partnership between Woody and Buzz.",
    poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    trailerId: "CxwTLktovTU",
  },
  {
    id: "up",
    title: "Up",
    year: 2009,
    rating: "PG",
    runtime: 96,
    rt: 98,
    genres: ["Animation", "Family"],
    tags: ["family", "adventure", "comfort"],
    streaming: ["Disney+"],
    familySafe: true,
    why: "A poignant opening leads into an imaginative balloon-powered wilderness adventure.",
    poster: "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
    trailerId: "Ajcdb4FAL7A",
  },
  {
    id: "the-lion-king",
    title: "The Lion King",
    year: 1994,
    rating: "G",
    runtime: 88,
    rt: 93,
    genres: ["Animation", "Family"],
    tags: ["family", "90s", "adventure"],
    streaming: ["Disney+"],
    familySafe: true,
    why: "Iconic animation, unforgettable melodies, and an epic Shakespearean narrative across the savanna.",
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    trailerId: "UgjEj5mXLlk",
  },
  {
    id: "finding-nemo",
    title: "Finding Nemo",
    year: 2003,
    rating: "G",
    runtime: 100,
    rt: 99,
    genres: ["Animation", "Family"],
    tags: ["family", "adventure", "comfort"],
    streaming: ["Disney+"],
    familySafe: true,
    why: "A visually gorgeous underwater odyssey celebrating family perseverance and friendship.",
    poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    trailerId: "ZS_8btMjx2U",
  },
  {
    id: "mean-girls",
    title: "Mean Girls",
    year: 2004,
    rating: "PG-13",
    runtime: 97,
    rt: 84,
    genres: ["Comedy"],
    tags: ["school", "high school", "teen", "funny", "campus", "comfort"],
    streaming: ["Netflix", "Prime Video"],
    familySafe: false,
    why: "The defining 2000s high-school satire packed with iconic burn-book quotes and sharp wit.",
    poster: "https://image.tmdb.org/t/p/w500/fXm3YKXeE12IsOkviWj9WN21GQv.jpg",
    trailerId: "oDU84nmSDZY",
  },
  {
    id: "easy-a",
    title: "Easy A",
    year: 2010,
    rating: "PG-13",
    runtime: 92,
    rt: 85,
    genres: ["Comedy", "Rom-Com"],
    tags: ["school", "high school", "teen", "funny", "smart", "rumors"],
    streaming: ["Netflix", "Prime Video"],
    familySafe: false,
    why: "Emma Stone shines in this witty, charming high-school spin on The Scarlet Letter.",
    poster: "https://image.tmdb.org/t/p/w500/1XddB1c1BspY9441wOaU2e7D3H4.jpg",
    trailerId: "KNbHYcvVlog",
  },
  {
    id: "clueless",
    title: "Clueless",
    year: 1995,
    rating: "PG-13",
    runtime: 97,
    rt: 81,
    genres: ["Comedy", "Rom-Com"],
    tags: ["school", "high school", "teen", "fashion", "90s", "nostalgia"],
    streaming: ["Prime Video"],
    familySafe: false,
    why: "A razor-sharp high-school comedy wrapped in legendary 90s fashion and wit.",
    poster: "https://image.tmdb.org/t/p/w500/8AwVTcgpTnmeOs4TdTWqcFDXEsA.jpg",
    trailerId: "KeGqX4GVBZE",
  },
]

export const byId = (id: string) => MOVIES.find((m) => m.id === id)!

export const MOOD_CHIPS: { label: string; ids: string[] }[] = [
  { label: "🌧️ Late Night Neo-Noir", ids: ["inception", "the-dark-knight"] },
  { label: "🛋️ Zero-Brain Comfort", ids: ["crazy-stupid-love", "knives-out"] },
  { label: "🍿 Popcorn Action", ids: ["jurassic-park", "the-dark-knight"] },
  { label: "✨ 90s Nostalgia", ids: ["toy-story", "the-lion-king"] },
]

export function formatRuntime(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}h ${m}m`
}

// Maps user search intent to the movie tags/genres it should hit.
const SYNONYMS: { triggers: string[]; targets: string[] }[] = [
  {
    triggers: ["school", "high school", "highschool", "teen", "teens", "teenager", "college", "campus", "student", "students", "class", "classroom"],
    targets: ["teen", "school", "high school", "campus"],
  },
  {
    triggers: ["funny", "laugh", "laughs", "hilarious", "humor", "humour", "comedy", "lighthearted"],
    targets: ["comedy", "funny"],
  },
  {
    triggers: ["scary", "spooky", "creepy", "horror", "frightening", "terrifying"],
    targets: ["thriller", "horror", "dark"],
  },
  {
    triggers: ["grit", "gritty", "dark", "crime", "criminal", "noir"],
    targets: ["neo-noir", "crime", "dark", "thriller"],
  },
  {
    triggers: ["love", "date", "romance", "romantic", "relationship", "couple"],
    targets: ["rom-com", "romance"],
  },
]

// Cumulative: each tier allows everything up to and including its maturity.
export const RATING_FILTERS: { label: string; ratings: string[] | null }[] = [
  { label: "All Ratings", ratings: null },
  { label: "Family (G/PG)", ratings: ["G", "PG"] },
  { label: "Teens (PG-13)", ratings: ["G", "PG", "PG-13"] },
  { label: "Mature (R)", ratings: ["G", "PG", "PG-13", "R"] },
]

function scoreMovie(movie: Movie, terms: string[], synonymTargets: string[]): number {
  const title = movie.title.toLowerCase()
  const genres = movie.genres.map((g) => g.toLowerCase())
  const tags = movie.tags.map((t) => t.toLowerCase())
  const why = movie.why.toLowerCase()
  let score = 0

  for (const term of terms) {
    if (!term) continue
    if (title.includes(term)) score += 5
    if (genres.some((g) => g === term)) score += 4
    if (genres.some((g) => g.includes(term))) score += 2
    if (tags.some((t) => t === term)) score += 4
    if (tags.some((t) => t.includes(term))) score += 2
    if (why.includes(term)) score += 1
  }

  for (const target of synonymTargets) {
    if (genres.some((g) => g.includes(target))) score += 4
    if (tags.some((t) => t.includes(target))) score += 4
    if (title.includes(target)) score += 3
    if (why.includes(target)) score += 1
  }

  return score
}

/**
 * Scores a candidate pool against the query using direct term matching plus a
 * synonym dictionary. Returns ids sorted best-first, only including movies with
 * a score greater than 0 — no random animated fallback.
 */
export function searchMovies(query: string, pool: Movie[] = MOVIES): string[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const terms = q.split(/\s+/).filter(Boolean)

  const synonymTargets = new Set<string>()
  for (const entry of SYNONYMS) {
    const hit = entry.triggers.some((trigger) =>
      trigger.includes(" ") ? q.includes(trigger) : terms.includes(trigger),
    )
    if (hit) entry.targets.forEach((t) => synonymTargets.add(t))
  }
  const targets = [...synonymTargets]

  const scored = pool
    .map((m) => ({ id: m.id, score: scoreMovie(m, terms, targets) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.map((s) => s.id)
}
