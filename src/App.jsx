const LOGO = "/assets/logo.svg";
const DEMO_URL = "https://app.callturtle.com";

const steps = [
  {
    n: "01",
    title: "Geofence triggers",
    body: "A customer enters a competitor's location. CallTurtle knows they're about to spend elsewhere.",
  },
  {
    n: "02",
    title: "Offer computed",
    body: "Dynamic pricing from location, visit history, and live objections — personalized in milliseconds.",
  },
  {
    n: "03",
    title: "AI calls them",
    body: "No coupon to hunt down. CallTurtle places an outbound voice call with a warm, local pitch.",
  },
  {
    n: "04",
    title: "Deal closes",
    body: "Negotiate in real time, bump the offer on price objections, and lock a redemption code.",
  },
];

const features = [
  {
    title: "Voice-first conversion",
    body: "Static email blasts get ignored. A phone call in the moment of intent changes behavior.",
    accent: "text-emerald-400",
  },
  {
    title: "Geo-targeted precision",
    body: "Trigger only when a high-intent buyer is physically at a rival — not random blast radius.",
    accent: "text-sky-400",
  },
  {
    title: "Live negotiation",
    body: "The AI bumps offers when customers hesitate, up to your cap — like a human closer.",
    accent: "text-violet-400",
  },
  {
    title: "Merchant analytics",
    body: "Every trigger, bump, and redeem syncs to your GTM stack so you learn what actually converts.",
    accent: "text-amber-400",
  },
];

function Nav() {
  return (
    <nav className="sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-zinc-800/80 bg-zinc-950/80 px-5 py-2.5 backdrop-blur-xl">
      <a href="#" className="flex items-center gap-2.5">
        <img src={LOGO} alt="" className="h-10 w-10" />
        <span className="font-serif-display text-3xl leading-none text-white">
          Call<span className="not-italic text-orange-500">Turtle</span>
        </span>
      </a>
      <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
        <a href="#how" className="hover:text-white">
          How it works
        </a>
        <a href="#features" className="hover:text-white">
          Features
        </a>
        <a
          href={DEMO_URL}
          className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-400"
        >
          Try demo
        </a>
      </div>
    </nav>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute inset-0 rounded-[2.5rem] bg-orange-500/20 blur-3xl breathe" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-700 bg-zinc-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3 text-xs text-zinc-500">
          <span>9:41</span>
          <span className="text-orange-400">● Incoming</span>
        </div>
        <div className="space-y-4 px-5 py-8 text-center">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-orange-500/40 ring-pulse" />
            <img src={LOGO} alt="" className="h-16 w-16" />
          </div>
          <p className="text-lg font-semibold text-white">CallTurtle</p>
          <p className="text-sm text-zinc-400">Mobile · now</p>
          <p className="rounded-2xl bg-zinc-900/80 p-4 text-left text-sm leading-relaxed text-zinc-300">
            &ldquo;Hey — I see you&apos;re near Blue Bottle. Philz is two minutes away and I can
            offer you <span className="font-semibold text-emerald-400">30% off</span> any drink.
            Want me to lock it in?&rdquo;
          </p>
          <div className="flex gap-3 pt-2">
            <div className="flex-1 rounded-full bg-red-500/20 py-3 text-sm font-medium text-red-300">
              Decline
            </div>
            <div className="flex-1 rounded-full bg-emerald-500 py-3 text-sm font-semibold text-white">
              Accept
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="dots-bg min-h-screen">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-6">
        <Nav />

        <header className="fade-up mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Voice AI · Local commerce
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
              Deals that{" "}
              <span className="font-serif-display text-orange-400">call you</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
              When a customer walks up to your competitor, CallTurtle computes a personalized
              discount and delivers it with an outbound AI voice call — before they pay somewhere
              else.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={DEMO_URL}
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-110"
              >
                Launch demo
              </a>
              <a
                href="#how"
                className="rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Everyone else emails the same coupon. You call with theirs.
            </p>
          </div>
          <PhoneMockup />
        </header>

        <section id="how" className="fade-up mt-32" style={{ animationDelay: "0.1s" }}>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">How CallTurtle works</h2>
            <p className="mt-4 text-zinc-400">
              From geofence hit to redeemed deal in under a minute — orchestrated by Convex,
              delivered by Vapi voice AI.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.n}
                className="warm-panel rounded-2xl border border-zinc-800 p-6 transition hover:border-zinc-700"
              >
                <span className="font-mono text-sm text-orange-500">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="features"
          className="fade-up mt-32 rounded-3xl border border-zinc-800 bg-zinc-950/50 p-8 sm:p-12"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Built for merchants who compete</h2>
              <p className="mt-3 max-w-xl text-zinc-400">
                Steal high-intent buyers seconds before they pay a rival — with voice, not
                vouchers.
              </p>
            </div>
            <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              Up to 35% dynamic offers
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h3 className={`text-lg font-semibold ${f.accent}`}>{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-up mt-32 text-center" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-serif-display text-4xl text-white sm:text-5xl">
            Ready to call your next customer?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Try the live demo — simulate a geofence event, answer the AI call, and watch the deal
            close in real time.
          </p>
          <a
            href={DEMO_URL}
            className="mt-8 inline-flex rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Get started →
          </a>
        </section>

        <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={LOGO} alt="" className="h-6 w-6 opacity-80" />
            <span>CallTurtle</span>
          </div>
          <p>© {new Date().getFullYear()} CallTurtle. Deals that call you.</p>
        </footer>
      </div>
    </div>
  );
}
