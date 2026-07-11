import { createFileRoute } from "@tanstack/react-router";
import heroMountains from "@/assets/hero-mountains.jpg";
import cabinWorkspace from "@/assets/cabin-workspace.jpg";
import projectRag from "@/assets/project-rag.jpg";
import projectVoice from "@/assets/project-voice.jpg";
import worldMap from "@/assets/world-map.jpg";
import trailHiker from "@/assets/trail-hiker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kripesh Nihure — AI Engineer, Traveler, Mountain Lover" },
      {
        name: "description",
        content:
          "AI Engineer building production LLM, RAG and Voice AI systems from the Himalayas. A portfolio and field journal by Kripesh Nihure.",
      },
      { property: "og:title", content: "Kripesh Nihure — AI Engineer & Mountain Lover" },
      {
        property: "og:description",
        content:
          "Production AI systems built from mountain villages. RAG platforms, Voice-to-Voice pipelines, and a life of intentional movement.",
      },
    ],
  }),
  component: Index,
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
    problem: "Enterprises want AI assistants grounded in their own knowledge — without leaking data or hallucinating.",
    solution:
      "A configurable SaaS layer over hybrid retrieval: semantic + BM25 + reranking + knowledge graphs, with per-tenant prompts and workflows.",
    stack: ["Python", "PyTorch", "VectorDB", "AWS", "Kubernetes"],
  },
  {
    image: projectVoice,
    tag: "02 — Real-time Voice",
    title: "Voice-to-Voice AI",
    problem: "Automating high-volume phone conversations without the robotic, half-second-late feel of legacy IVR.",
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

const philosophy = [
  {
    title: "Simple systems scale.",
    body: "Complexity is a debt paid later. If a heuristic works, don't reach for a model. If a monolith ships, don't invent microservices.",
  },
  {
    title: "Automation is freedom.",
    body: "I build machines so I don't have to be one. Every manual task is a minute stolen from the trail.",
  },
  {
    title: "Measure before you optimize.",
    body: "Understand the data distribution before choosing the transformer. Benchmarks beat gut feelings.",
  },
  {
    title: "Fundamentals compound.",
    body: "Frameworks turn over every year. Linear algebra, information theory and Unix don't.",
  },
  {
    title: "Ship before you polish.",
    body: "A rough thing in production teaches more than a perfect thing in a branch.",
  },
  {
    title: "Curiosity beats credentials.",
    body: "Read the papers. Rewrite the tutorial. Break your own assumptions weekly.",
  },
];

const stack = [
  { name: "Python", why: "The shortest distance between an ML idea and a working prototype." },
  { name: "PyTorch", why: "Because research code and production code should look the same." },
  { name: "Transformers", why: "Language is becoming software — this is the compiler." },
  { name: "Docker", why: "Reproducibility is respect for your future self." },
  { name: "Kubernetes", why: "So the infrastructure fades into the background and the work stays foregrounded." },
  { name: "AWS", why: "Scalable infrastructure should be boring, like a well-marked trail." },
];

const journeys = [
  {
    place: "Manang, Nepal",
    coords: "28.66° N, 84.02° E",
    entry:
      "Coding the reranker rewrite in the shadow of Annapurna. Cold air keeps thermals honest and thinking sharp.",
  },
  {
    place: "Namche Bazaar, Nepal",
    coords: "27.80° N, 86.71° E",
    entry:
      "Cutting V2V latency by 180ms while looking at Ama Dablam. Turns out ridge-line internet is better than expected.",
  },
  {
    place: "Pokhara, Nepal",
    coords: "28.20° N, 83.98° E",
    entry:
      "Lakeside prototyping session for the NLP-to-SQL grounding layer. Paragliders as background rendering.",
  },
];

function Index() {
  return (
    <div className="bg-mist font-body text-pine selection:bg-clay/40">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="font-display text-sm font-bold tracking-tight">
            Kripesh Nihure
          </a>
          <div className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.25em] text-pine/70 md:flex">
            <a href="#story" className="hover:text-pine">Story</a>
            <a href="#trail" className="hover:text-pine">Trail</a>
            <a href="#work" className="hover:text-pine">Work</a>
            <a href="#thinking" className="hover:text-pine">Thinking</a>
            <a href="#journal" className="hover:text-pine">Journal</a>
          </div>
          <a
            href="mailto:nihure.kripesh@gmail.com"
            className="hidden rounded-full border border-pine/20 bg-mist/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] backdrop-blur-md hover:bg-mist md:inline-block"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex h-screen min-h-[720px] flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroMountains}
            alt="Himalayan peaks at dawn"
            width={1920}
            height={1080}
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-linear-to-b from-mist/40 via-mist/10 to-mist" />
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-1/2 bg-linear-to-b from-white/40 to-transparent blur-3xl animate-fog" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center animate-fade-up">
          <span className="mb-8 inline-block rounded-full border border-pine/15 bg-mist/60 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-pine/70 backdrop-blur-md">
            Lalitpur, Nepal · 27.67° N
          </span>
          <h1 className="text-balance font-display text-4xl font-light leading-[1.05] tracking-tight text-pine md:text-6xl lg:text-7xl">
            Building AI that gives people more time.
            <br />
            <span className="font-bold">Building a life that gives me more freedom.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-pretty font-body text-lg italic text-slate md:text-xl">
            "I build production AI systems so I can work from places that remind me how small the world really is."
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.25em] text-pine/60">
            <span>AI Engineer</span>
            <span className="opacity-30">/</span>
            <span>Traveler</span>
            <span className="opacity-30">/</span>
            <span>Mountain Lover</span>
            <span className="opacity-30">/</span>
            <span>Builder of intelligent systems</span>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#story"
              className="rounded-full bg-pine px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-mist transition-colors hover:bg-forest"
            >
              Explore my journey
            </a>
            <a
              href="#work"
              className="rounded-full border border-pine/25 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-pine transition-colors hover:bg-clay/20"
            >
              View projects
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.35em] text-pine/50">Scroll to descend</span>
          <div className="h-14 w-px bg-pine/25" />
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate">Identity</h2>
            <h3 className="mb-10 font-display text-3xl font-light leading-[1.15] tracking-tight md:text-4xl">
              Technology is not my identity. <span className="italic">Freedom is.</span>
            </h3>
            <div className="space-y-6 text-pretty text-lg leading-relaxed text-slate">
              <p>
                Ever since childhood, mountains have felt like home. My dream was never to work in a
                skyscraper — it was to wake up in a quiet village, drink tea while looking at snow, open a
                laptop, and build intelligent systems for people around the world.
              </p>
              <p>
                I don't travel because I want vacations. I travel because movement makes me feel alive. AI
                engineering is the craft I've chosen to finance that life — enterprise RAG platforms,
                hybrid retrieval pipelines, voice-to-voice systems, cloud-deployed models — the kind of
                work that pays for a hike at 4pm.
              </p>
              <p>
                Curiosity brought me here. Papers, transformers, cloud architecture, the way a well-tuned
                retriever quietly changes what software can do. But the goal was never the code. The goal
                is the life the code makes possible.
              </p>
            </div>
          </div>
          <figure className="relative">
            <img
              src={cabinWorkspace}
              alt="Wooden cabin workspace overlooking snowy peaks"
              width={1000}
              height={1250}
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover shadow-[0_30px_80px_-40px_oklch(0.28_0.02_160/0.4)]"
            />
            <figcaption className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-slate/70">
              The workspace — wherever the ridge is
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Cinematic mid-transition */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <img
          src={trailHiker}
          alt="Hiker on a mountain ridge at sunrise"
          width={1200}
          height={1600}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-pine/70 via-pine/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-16 mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl font-light italic leading-relaxed text-mist md:text-4xl">
            "Every system I ship is a down payment on another hour of trail time."
          </p>
        </div>
      </section>

      {/* Trail — Experience */}
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
                  <p className="mt-1 text-sm text-mist/60">{exp.role} · {exp.location}</p>
                </div>
                <div
                  className={`absolute left-0 top-2 hidden size-4 rounded-full ring-8 ring-pine md:left-1/2 md:block md:-translate-x-1/2 ${
                    exp.active ? "bg-clay" : "bg-forest border border-clay/40"
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

      {/* Projects */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-32 md:py-40">
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
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-pine/50">{p.tag}</span>
              </div>
              <h4 className="mt-3 font-display text-2xl font-medium">{p.title}</h4>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate">
                <p><span className="font-semibold text-pine">Problem. </span>{p.problem}</p>
                <p><span className="font-semibold text-pine">Solution. </span>{p.solution}</p>
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

      {/* Philosophy */}
      <section id="thinking" className="border-y border-clay/25 bg-snow py-32 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate">
              How I think
            </h2>
            <h3 className="font-display text-4xl font-light tracking-tight md:text-5xl">
              A short field guide.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-clay/25 md:grid-cols-3">
            {philosophy.map((p) => (
              <div key={p.title} className="bg-snow p-10 md:p-12">
                <h5 className="mb-4 font-display text-lg font-bold">{p.title}</h5>
                <p className="text-sm leading-relaxed text-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map / Journal */}
      <section id="journal" className="mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate">
              Field journal
            </h2>
            <h3 className="mb-8 font-display text-4xl font-light tracking-tight md:text-5xl">
              The world, pinned by working days.
            </h3>
            <div className="relative overflow-hidden rounded-2xl bg-pine">
              <img
                src={worldMap}
                alt="Stylized world map with visited locations"
                width={1400}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover opacity-95"
              />
              <div className="absolute left-[70%] top-[46%]">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay/60" />
                  <span className="relative inline-flex size-3 rounded-full bg-clay" />
                </span>
              </div>
              <div className="absolute left-[24%] top-[38%] size-2 rounded-full bg-clay/70" />
              <div className="absolute left-[52%] top-[36%] size-2 rounded-full bg-clay/70" />
              <div className="absolute left-[82%] top-[64%] size-2 rounded-full bg-clay/70" />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-slate/70">
              Currently pinned · Lalitpur, Nepal
            </p>
          </div>

          <div className="lg:col-span-2">
            <ul className="space-y-4">
              {journeys.map((j) => (
                <li
                  key={j.place}
                  className="rounded-2xl border border-clay/40 bg-mist/60 p-6 transition-colors hover:bg-mist"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-lg font-medium">{j.place}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate/70">
                      {j.coords}
                    </span>
                  </div>
                  <p className="mt-3 text-sm italic leading-relaxed text-slate">{j.entry}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate/70">
              This map grows every trip. Each pin opens photos, notes on internet quality, coffee shops,
              and whatever engineering thought the trail pulled loose.
            </p>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-clay/25 bg-mist py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-light tracking-tight md:text-4xl">
              Tools I reach for, and why.
            </h2>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate">
              Stack
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
            {stack.map((s) => (
              <div key={s.name}>
                <h4 className="mb-2 font-display text-lg font-bold">{s.name}</h4>
                <p className="text-sm leading-relaxed text-slate">{s.why}</p>
              </div>
            ))}
          </div>
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
              <a href="#" className="hover:text-clay">GitHub</a>
              <a href="#journal" className="hover:text-clay">Journal</a>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-mist/40">
                Location
              </span>
              <span>Lalitpur-10, Nepal</span>
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
