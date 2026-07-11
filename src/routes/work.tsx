import { createFileRoute, Link } from "@tanstack/react-router";
import projectRag from "@/assets/project-rag.jpg";
import projectVoice from "@/assets/project-voice.jpg";
import trailHiker from "@/assets/trail-hiker.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work & Experience — Kripesh Nihure" },
      {
        name: "description",
        content:
          "Selected AI/ML projects, professional trail from Wiseyak to Code for Nepal, and a downloadable CV for Kripesh Nihure.",
      },
      { property: "og:title", content: "Work & Experience — Kripesh Nihure" },
      {
        property: "og:description",
        content:
          "RAG platforms, Voice AI, NLP-to-SQL, applied ML — the full engineering trail with a downloadable CV.",
      },
    ],
  }),
  component: WorkPage,
});

const experiences = [
  {
    period: "March 2026 — Present",
    company: "Wiseyak",
    role: "Artificial Intelligence Engineer",
    location: "Kathmandu",
    detail:
      "Architecting a multi-tenant Retrieval-Augmented Generation platform and engineering low-latency Voice-to-Voice conversational pipelines. Hybrid retrieval — semantic search, reranking, knowledge graphs — to keep enterprise assistants grounded and hallucination-free.",
    active: true,
  },
  {
    period: "May 2025 — Feb 2026",
    company: "108 Capital Pte. Ltd.",
    role: "Junior Data Scientist",
    location: "United States (Remote)",
    detail:
      "Domain-adaptive pretraining and fine-tuning of transformer models on a year of proprietary social-media data. Built LLM-assisted annotation pipelines and shipped models achieving up to 94% accuracy on downstream NLP tasks.",
  },
  {
    period: "Mar 2025 — Apr 2025",
    company: "Adex International",
    role: "Cloud Apprentice",
    location: "Kathmandu",
    detail:
      "AWS fundamentals and cloud architecture practice — compute, storage, networking — while preparing for the Solutions Architect Associate certification.",
  },
  {
    period: "May 2024 — Apr 2025",
    company: "Code for Nepal",
    role: "Data Science Fellow",
    location: "Nepal",
    detail:
      "Curated local datasets and contributed to data-literacy initiatives in the Nepalese tech community.",
  },
];

const projects = [
  {
    image: projectRag,
    tag: "01 — Multi-tenant RAG",
    title: "Enterprise RAG Platform",
    problem:
      "Enterprises want AI assistants grounded in their own knowledge — without leaking data or hallucinating.",
    solution:
      "A configurable SaaS layer over hybrid retrieval: semantic + BM25 + reranking + knowledge graphs, with per-tenant prompts and workflows.",
    stack: ["Python", "PyTorch", "VectorDB", "AWS", "Kubernetes"],
  },
  {
    image: projectVoice,
    tag: "02 — Real-time Voice",
    title: "Voice-to-Voice AI",
    problem:
      "Automating high-volume phone conversations without the robotic, half-second-late feel of legacy IVR.",
    solution:
      "Streaming STT/TTS with VAD, contextual memory and LLM orchestration — engineered for human-latency conversation over telephony.",
    stack: ["WebRTC", "Streaming STT", "LLM Orchestration", "FastAPI"],
  },
  {
    image: projectRag,
    tag: "03 — NLP → SQL",
    title: "NLP-to-SQL Analyst",
    problem: "Business teams shouldn't need to write joins to ask a question.",
    solution:
      "Schema-aware prompting and grounded generation that turns natural-language questions into verified SQL against production warehouses.",
    stack: ["Transformers", "Postgres", "LangChain"],
  },
  {
    image: projectVoice,
    tag: "04 — Applied ML",
    title: "Skin Disease Classifier",
    problem: "Access to dermatology is limited in rural Nepal.",
    solution:
      "An EfficientNet classifier trained on curated dermatology imagery, packaged for offline inference on modest hardware.",
    stack: ["EfficientNet", "PyTorch", "ONNX"],
  },
];

function WorkPage() {
  return (
    <div className="bg-mist font-body text-pine selection:bg-clay/40">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-clay/20 bg-mist/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-sm font-bold tracking-tight">
            Kripesh Nihure
          </Link>
          <div className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.25em] text-pine/70 md:flex">
            <Link to="/" hash="story" className="hover:text-pine">Story</Link>
            <Link to="/work" className="hover:text-pine">Work</Link>

          </div>
          <a
            href="/kripesh-nihure-cv.pdf"
            download
            className="hidden rounded-full border border-pine/20 bg-mist/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] backdrop-blur-md hover:bg-mist md:inline-block"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-slate hover:text-pine"
        >
          <span aria-hidden>←</span> Back to story
        </Link>
        <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.4em] text-slate">
          Work & Experience
        </span>
        <h1 className="max-w-4xl text-balance font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
          The engineering trail — <span className="italic">systems shipped,</span> stops learned from.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate">
          A closer look at the production systems I've built and the roles that shaped how I build them.
          If you'd rather have the one-pager, the CV is a click away.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/kripesh-nihure-cv.pdf"
            download
            className="inline-flex items-center gap-3 rounded-full bg-pine px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-mist transition-colors hover:bg-forest"
          >
            Download CV (PDF)
            <span aria-hidden>↓</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full border border-pine/25 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-pine transition-colors hover:bg-clay/20"
          >
            Jump to projects
          </a>
        </div>
      </header>

      {/* Trail */}
      <section id="trail" className="bg-pine px-6 py-32 text-mist md:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-clay/70">
              The engineering trail
            </h2>
            <h3 className="font-display text-4xl font-light tracking-tight md:text-5xl">
              Every stop taught me a system.
            </h3>
          </div>

          <div className="relative space-y-16 md:space-y-24">
            <div className="absolute left-[11px] top-2 bottom-2 hidden w-px bg-clay/15 md:left-1/2 md:block md:-translate-x-1/2" />

            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={i % 2 === 0 ? "md:text-right" : "md:text-left"}>
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-clay">
                    {exp.period}
                  </span>
                  <h4 className="font-display text-2xl font-medium">{exp.company}</h4>
                  <p className="mt-1 text-sm text-mist/60">
                    {exp.role} · {exp.location}
                  </p>
                </div>
                <div
                  className={`absolute left-0 top-2 hidden size-4 rounded-full ring-8 ring-pine md:left-1/2 md:block md:-translate-x-1/2 ${
                    exp.active ? "bg-clay" : "border border-clay/40 bg-forest"
                  }`}
                />
                <div className="rounded-2xl border border-mist/10 bg-forest/40 p-8">
                  <p className="text-pretty text-sm leading-relaxed text-mist/80">{exp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic bridge */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img
          src={trailHiker}
          alt="Hiker on a mountain ridge at sunrise"
          width={1200}
          height={1600}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-mist via-mist/20 to-transparent" />
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate">
              Production systems
            </h2>
            <h3 className="font-display text-4xl font-light tracking-tight md:text-5xl">
              Turning research into scalable, boring infrastructure.
            </h3>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate/60">
            Selected works · 2024 — 2026
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="relative mb-8 aspect-video overflow-hidden rounded-xl bg-clay/10 outline-1 -outline-offset-1 outline-black/5 transition-all group-hover:outline-pine/20">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-pine/50">
                  {p.tag}
                </span>
              </div>
              <h4 className="mt-3 font-display text-2xl font-medium">{p.title}</h4>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate">
                <p>
                  <span className="font-semibold text-pine">Problem. </span>
                  {p.problem}
                </p>
                <p>
                  <span className="font-semibold text-pine">Solution. </span>
                  {p.solution}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-pine/10 bg-clay/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-pine"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CV CTA */}
      <section className="border-t border-clay/25 bg-snow py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-3xl font-light tracking-tight md:text-4xl">
              Prefer it on paper?
            </h3>
            <p className="mt-3 max-w-lg text-slate">
              The full CV — experience, projects, skills, education and certifications — as a two-page PDF.
            </p>
          </div>
          <a
            href="/kripesh-nihure-cv.pdf"
            download
            className="inline-flex items-center gap-3 rounded-full bg-pine px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-mist transition-colors hover:bg-forest"
          >
            Download CV
            <span aria-hidden>↓</span>
          </a>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-pine px-6 py-24 text-mist">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-lg">
            <h2 className="mb-6 font-display text-4xl font-light leading-tight md:text-5xl">
              Let's build something that matters.
            </h2>
            <p className="mb-8 text-mist/60">
              Based in Kathmandu, working for the world. Open to remote AI/ML engineering roles,
              consulting on RAG and voice systems, and thoughtful collaborations.
            </p>
            <a
              href="mailto:nihure.kripesh@gmail.com"
              className="inline-block border-b border-clay/40 pb-2 font-display text-xl text-clay transition-colors hover:border-clay"
            >
              nihure.kripesh@gmail.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <div className="flex flex-col gap-3 text-sm tracking-wide">
              <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-mist/40">
                Elsewhere
              </span>
              <a
                href="https://www.linkedin.com/in/kripesh-nihure77"
                className="hover:text-clay"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com/WT-Kripesh" className="hover:text-clay" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <Link to="/work" className="hover:text-clay">
                Work & CV
              </Link>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-mist/40">
                Location
              </span>
              <span>Kathmandu, Nepal</span>
              <span>+977 9866431550</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-6xl flex-col justify-between gap-2 border-t border-mist/10 pt-8 text-[10px] uppercase tracking-[0.25em] text-mist/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Kripesh Nihure</span>
          <span>Built between hikes · 27.67° N, 85.32° E</span>
        </div>
      </footer>
    </div>
  );
}
