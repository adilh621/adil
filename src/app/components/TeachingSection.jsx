import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ExternalLink } from "lucide-react";

// Colors: 02111B (bg), 3F4045 (surface), 30292F (accent)
// Drop this component anywhere (e.g., below <HeroSection />) and pass a signupUrl if you have one.
// Example: <TeachingSection signupUrl="https://calendly.com/yourname/intro-class" />

const SKILLS = [
  "Scratch",
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React & Next.js",
  "Python & Pygame",
  "AP Java Prep",
  "Databases (SQL)",
  "Git & GitHub",
];

// Showcase sample projects across Scratch, Python, and Web Dev (HTML/CSS)
const SAMPLE_PROJECTS = [
  {
    category: "Scratch",
    blurb:
      "Block-based games that teach loops, events, collisions, and simple physics—great for absolute beginners.",
    items: [
      {
        title: "Sonic Striker Platformer",
        details: ["Sprite animation & clones", "Ring collectibles & health", "Parallax scrolling"],
        link: "https://scratch.mit.edu/projects/979665366/",
      },
      {
        title: "Math Racing",
        details: ["Randomized questions", "Win/lose states", "Difficulty scaling"],
        link: "https://scratch.mit.edu/projects/1009520620/",
      },
      {
        title: "Pikachu Clicker",
        details: ["Manipulating variables", "Broadcast Logic", "Updrades & shop system"],
        link: "https://scratch.mit.edu/projects/1125012506/",
      },
    ],
  },
  {
    category: "Python",
    blurb:
      "Text and game projects that build logic, problem‑solving, and fundamentals—perfect for middle school and up.",
    items: [
      {
        title: "Aim Master (Pygame)",
        details: ["Drag & launch physics", "Collision detection", "Spawn safety logic"],
        link: "https://replit.com/@adilhussain1/Aim-Master",
      },
      {
        title: "Sols RNG Remake",
        details: ["Weighted probabilities", "State machine UI", "Session stats"],
        link: "https://replit.com/@adilhussain1/Sols-RNG",
      },
      {
        title: "Turncopter",
        details: ["Platformer", "Camera Movement", "Classes & Inheritance"],
        link: "https://pixelpad.io/app/vpbjwannrgk/",
      },
    ],
  },
  {
    category: "Web Dev (HTML/CSS)",
    blurb:
      "Hands‑on pages that teach structure, layout, and accessibility before moving to JS and React.",
    items: [
      {
        title: "Pokédex (PokeAPI)",
        details: ["Fetch & render API data", "Pagination & search", "Accessible cards"],
        link: "https://replit.com/@adilhussain1/Pokedex",
      },
      {
        title: "GIF Search (GIPHY API)",
        details: ["Debounced search", "Async fetch + error states", "Keyboard navigation"],
        link: "https://replit.com/@adilhussain1/Giphy-app",
      },
      {
        title: "To‑Do List",
        details: ["CRUD interactions", "localStorage persistence", "Filter & accessibility"],
        link: "https://replit.com/@adilhussain1/todoList",
      },
    ],
  },
];

export default function TeachingSection({ signupUrl = "/signup" }) {
  return (
    <section id="coding-classes" className="bg-[#02111B] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 border border-[#30292F] rounded-2xl px-4 py-2 mb-4">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm tracking-wide">Teaching & Camps</span>
          </div>
          <h2 className="text-4xl font-extrabold">Learn to Code with Me</h2>
          <p className="mt-3 text-[#cbd5e1]">
            I teach project‑based coding—designed for clarity, creativity, and confidence.
          </p>
        </div>

        {/* What I Teach */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold mb-4">What I Teach</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Badge
                key={s}
                className="bg-[#3F4045] border border-[#30292F] text-white rounded-full px-3 py-1"
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sample Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Sample Projects</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {SAMPLE_PROJECTS.map((cat) => (
              <Card key={cat.category} className="text-white bg-[#3F4045] border border-[#30292F] rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">{cat.category}</CardTitle>
                  <p className="text-sm text-gray-300">{cat.blurb}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {cat.items.map((p) => (
                      <li key={p.title} className="rounded-xl text-white bg-[#2a2b2f] p-3 border border-[#30292F]">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold">{p.title}</p>
                            <ul className="list-disc list-inside text-gray-200 text-sm">
                              {p.details.map((d) => (
                                <li key={d}>{d}</li>
                              ))}
                            </ul>
                          </div>
                          {p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 inline-flex items-center text-sm text-gray-100 hover:underline"
                            >
                              View <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#3F4045] border border-[#30292F] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold">Ready to join a class?</h4>
            <p className="text-gray-200">Spots are limited. Reserve your seat or schedule a quick intro chat.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-[#30292F] hover:bg-[#1f1b1e]">
              <a href={signupUrl} target="_blank" rel="noopener noreferrer">Sign Up</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


