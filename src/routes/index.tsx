import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/meowlet-hero.png";
import vaultImg from "@/assets/airdrop-vault.jpg";
import miniImg from "@/assets/meowlet-mini.png";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meowlet — An Ecosystem of Products for Our Massive Community" },
      {
        name: "description",
        content:
          "Join Meowlet, the official Telegram Mini App of Magic Kitties Club. Tap, complete tasks, invite friends, compete on monthly leaderboards, and build toward what comes next.",
      },
      { property: "og:title", content: "Meowlet — Magic Kitties Club" },
      {
        property: "og:description",
        content:
          "Tap, earn and compete with a community that shows up every day. Real USDT rewards. Monthly leaderboards.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const TG = "#telegram-link-placeholder";
const X_URL = "https://x.com/meowletofficial";
const TT_URL = "https://www.tiktok.com/@meowletofficial";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Rewards", href: "#rewards" },
  { label: "Why Meowlet", href: "#why" },
  { label: "Airdrop", href: "#airdrop" },
  { label: "Community", href: "#community" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient shadow-glow">
        <PawIcon className="h-5 w-5 text-[oklch(0.15_0.03_60)]" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-cream">
        Meow<span className="text-gold-gradient">let</span>
      </span>
    </a>
  );
}

function PawIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="6" cy="9" rx="2" ry="2.6" />
      <ellipse cx="10.5" cy="6" rx="2" ry="2.6" />
      <ellipse cx="15" cy="6" rx="2" ry="2.6" />
      <ellipse cx="19" cy="9" rx="2" ry="2.6" />
      <path d="M12.5 11c-3.2 0-5.5 2.6-5.5 5.2 0 1.8 1.4 2.8 3 2.8 1.2 0 1.6-.6 2.5-.6s1.3.6 2.5.6c1.6 0 3-1 3-2.8 0-2.6-2.3-5.2-5.5-5.2z" />
    </svg>
  );
}

function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "ghost" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gold-gradient text-[oklch(0.15_0.03_60)] shadow-glow hover:scale-[1.03] hover:shadow-[0_0_80px_-10px_oklch(0.82_0.16_75/0.8)]"
      : "border border-[oklch(0.85_0.13_80/0.3)] text-cream hover:border-[oklch(0.85_0.13_80/0.6)] hover:bg-[oklch(0.85_0.13_80/0.05)]";
  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl border border-[oklch(0.85_0.13_80/0.16)] px-4 py-3 backdrop-blur-xl transition-all ${
            scrolled
              ? "bg-[oklch(0.13_0.02_60/0.85)] shadow-card"
              : "bg-[oklch(0.13_0.02_60/0.4)]"
          }`}
        >
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-cream transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on X"
              className="grid h-9 w-9 place-items-center rounded-full border border-[oklch(0.85_0.13_80/0.2)] text-cream hover:bg-[oklch(0.85_0.13_80/0.08)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.78l-5.31-6.94L3.6 22H1l7.02-8.02L1.5 2h6.96l4.79 6.34L18.244 2zm-1.19 18h1.88L7.06 4H5.05l12.004 16z"/></svg>
            </a>
            <Button href={TG} target="_blank" rel="noreferrer">Start Playing</Button>
          </div>
          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-[oklch(0.85_0.13_80/0.2)] text-cream"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden mt-2 rounded-2xl surface-card p-4 animate-fade-in">
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-cream hover:bg-[oklch(0.85_0.13_80/0.08)]"
                >
                  {n.label}
                </a>
              ))}
              <Button href={TG} className="mt-3 w-full" target="_blank" rel="noreferrer">
                Start Playing
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 lg:pt-40 pb-20">
      {/* ambient lights */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[10%] h-[520px] w-[520px] rounded-full bg-[oklch(0.45_0.2_295/0.35)] blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-[oklch(0.7_0.19_50/0.25)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(oklch(1_0_0/0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.85_0.13_80/0.25)] bg-[oklch(0.17_0.025_65/0.6)] px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
            <span className="text-[11px] font-semibold tracking-[0.18em] text-cream/90">
              OFFICIAL TELEGRAM MINI APP · MAGIC KITTIES CLUB
            </span>
          </div>
          <h1 className="mt-6 text-[44px] leading-[1.02] sm:text-6xl lg:text-7xl font-bold text-cream">
            This Is Not Just a Game.{" "}
            <span className="text-gold-gradient">It's an Elite Experience.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tap, earn, and compete with a community that shows up every single day.
            Real USDT rewards. Monthly leaderboards. And something massive on the horizon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={TG} target="_blank" rel="noreferrer">
              <PawIcon className="h-4 w-4" />
              Start Playing
            </Button>
            <Button href="#how" variant="ghost">
              How It Works
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="text-cream">Tap.</span> Complete tasks.{" "}
            <span className="text-cream">Invite friends.</span> Climb the leaderboard.
          </p>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-square max-w-[600px] mx-auto">
            {/* halo */}
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.82_0.16_75/0.35),transparent_60%)] blur-2xl animate-pulse-glow" />
            <div className="absolute inset-[18%] rounded-full border border-[oklch(0.82_0.16_75/0.25)] animate-spin-slow" />
            <div className="absolute inset-[6%] rounded-full border border-[oklch(0.82_0.16_75/0.1)]" />

            <img
              src={heroImg}
              alt="Meowlet character with golden coins"
              width={1024}
              height={1024}
              className="relative z-10 h-full w-full object-contain animate-float drop-shadow-[0_30px_60px_oklch(0.82_0.16_75/0.35)]"
            />

            {/* floating card: USDT rewards */}
            <div className="absolute left-0 bottom-10 z-20 surface-card rounded-2xl p-3 pr-4 flex items-center gap-3 shadow-card animate-float-slow">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-[oklch(0.15_0.03_60)] font-bold text-sm">
                $
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">USDT Rewards</div>
                <div className="text-cream font-semibold text-sm">Monthly payouts</div>
              </div>
            </div>

            {/* floating card: leaderboard */}
            <div className="absolute right-0 top-10 z-20 surface-card rounded-2xl p-3 w-[180px] shadow-card animate-float">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Leaderboard</div>
              {[
                { r: 1, n: "CatKing", v: "248k" },
                { r: 2, n: "Pawster", v: "201k" },
                { r: 3, n: "Whiskr", v: "187k" },
              ].map((p) => (
                <div key={p.r} className="flex items-center justify-between py-1 text-xs">
                  <span className="flex items-center gap-2">
                    <span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold ${p.r === 1 ? "bg-gold-gradient text-[oklch(0.15_0.03_60)]" : "bg-[oklch(0.25_0.03_65)] text-cream"}`}>
                      {p.r}
                    </span>
                    <span className="text-cream">{p.n}</span>
                  </span>
                  <span className="text-gold font-semibold" style={{ color: "var(--gold)" }}>{p.v}</span>
                </div>
              ))}
            </div>

            {/* points counter */}
            <div className="absolute right-6 bottom-0 z-20 surface-card rounded-full px-4 py-2 flex items-center gap-2 shadow-card animate-float-slow">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse-glow" style={{ background: "var(--gold)" }} />
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="text-cream font-bold tabular-nums">+1,248</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "[Placeholder]", l: "Total Players" },
    { v: "[Placeholder]", l: "Active Users" },
    { v: "[Placeholder]", l: "Monthly Rewards" },
    { v: "Monthly", l: "Leaderboard Resets" },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-20">
      <div className="surface-card rounded-3xl p-6 sm:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[oklch(0.85_0.13_80/0.12)]">
          {items.map((s, i) => (
            <div key={i} className="px-2 lg:px-6 pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-bold font-display text-gold-gradient">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.85_0.13_80/0.25)] bg-[oklch(0.17_0.025_65/0.6)] px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-gradient" />
      <span className="text-[11px] font-semibold tracking-[0.18em] text-cream/90">{children}</span>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Join & Tap",
      d: "Open Meowlet in Telegram and start tapping instantly. No barriers, no complexity.",
    },
    {
      n: "02",
      t: "Stack Your Points",
      d: "Complete tasks, invite friends, and rack up points every single day.",
    },
    {
      n: "03",
      t: "Earn & Win",
      d: "Monthly leaderboards reset and top players walk away with real USDT rewards.",
    },
  ];
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-cream">
            Three steps. One leaderboard.{" "}
            <span className="text-gold-gradient">Real competition.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start inside Telegram, build your points every day, and compete with the Meowlet community.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.16_75/0.4)] to-transparent" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="surface-card rounded-3xl p-7 relative transition-transform hover:-translate-y-1 hover:glow-border"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-[oklch(0.15_0.03_60)] font-display font-bold text-xl shadow-glow">
                  {s.n}
                </div>
                <PawIcon className="h-8 w-8 text-[oklch(0.82_0.16_75/0.4)]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-cream">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
              {i === 0 && (
                <div className="mt-6 rounded-2xl border border-[oklch(0.85_0.13_80/0.15)] bg-[oklch(0.1_0.02_60/0.6)] p-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.18_140)]" /> Telegram · Meowlet bot
                  </div>
                  <div className="mt-2 text-cream text-sm">Tap to earn → <span className="text-gold-gradient font-bold">+12</span></div>
                </div>
              )}
              {i === 1 && (
                <div className="mt-6 space-y-2">
                  {["Daily check-in", "Invite a friend", "Join community"].map((t) => (
                    <div key={t} className="flex items-center justify-between rounded-xl border border-[oklch(0.85_0.13_80/0.15)] px-3 py-2 text-sm">
                      <span className="text-cream">{t}</span>
                      <span className="text-gold-gradient font-semibold">+50</span>
                    </div>
                  ))}
                </div>
              )}
              {i === 2 && (
                <div className="mt-6 rounded-2xl border border-[oklch(0.85_0.13_80/0.15)] bg-[oklch(0.1_0.02_60/0.6)] p-3 space-y-1.5">
                  {[
                    ["🥇", "Top 1", "USDT"],
                    ["🥈", "Top 2", "USDT"],
                    ["🥉", "Top 3", "USDT"],
                  ].map(([e, l, v]) => (
                    <div key={l} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-cream">
                        <span>{e}</span>{l}
                      </span>
                      <span className="text-gold-gradient font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rewards() {
  const items = [
    { t: "Daily Activity", d: "Show up, tap, and continue building your score.", icon: "🔥" },
    { t: "Tasks", d: "Complete available missions and collect additional points.", icon: "✦" },
    { t: "Referrals", d: "Invite friends and grow together with the community.", icon: "♟" },
    { t: "Monthly Leaderboards", d: "Top eligible players can receive real USDT rewards when each season ends.", icon: "♛" },
  ];
  return (
    <section id="rewards" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6">
            <SectionLabel>COMMUNITY REWARDS</SectionLabel>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-cream">
              Every action moves you{" "}
              <span className="text-gold-gradient">closer to the top.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 text-muted-foreground">
            Tapping is only the beginning. Complete tasks, grow the community, invite friends, and compete for a place on the monthly leaderboard.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="surface-card rounded-3xl p-6 relative overflow-hidden group transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[oklch(0.82_0.16_75/0.18)] blur-2xl group-hover:bg-[oklch(0.82_0.16_75/0.35)] transition-colors" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-2xl text-[oklch(0.15_0.03_60)]">
                {it.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-cream">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      t: "Cat-Powered Community",
      d: "Built for and by a massive, passionate community.",
      visual: (
        <div className="flex -space-x-3">
          {[0,1,2,3,4].map(i => (
            <div key={i} className="h-10 w-10 rounded-full border-2 border-[oklch(0.17_0.025_65)] bg-gold-gradient grid place-items-center text-[oklch(0.15_0.03_60)]">
              <PawIcon className="h-5 w-5" />
            </div>
          ))}
        </div>
      ),
    },
    {
      t: "Play & Earn",
      d: "Tap your way to real rewards in a fun, gamified experience.",
      visual: (
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-[oklch(0.15_0.03_60)] font-bold text-2xl shadow-glow animate-pulse-glow">
            TAP
          </div>
          <div className="text-cream">
            <div className="text-2xl font-bold tabular-nums">+1,248</div>
            <div className="text-xs text-muted-foreground">points earned</div>
          </div>
        </div>
      ),
    },
    {
      t: "Ecosystem of Products",
      d: "Meowlet is just the beginning. More is coming.",
      visual: (
        <div className="relative h-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-2xl bg-gold-gradient grid place-items-center shadow-glow">
            <PawIcon className="h-6 w-6 text-[oklch(0.15_0.03_60)]" />
          </div>
          {[-1, 1].map((d) => (
            <div key={d} className="absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl border border-dashed border-[oklch(0.85_0.13_80/0.3)] grid place-items-center text-muted-foreground text-[10px]" style={{ left: `calc(50% + ${d*70}px - 20px)` }}>
              SOON
            </div>
          ))}
        </div>
      ),
    },
    {
      t: "Transparent & Rewarding",
      d: "Fair systems built to keep the community winning.",
      visual: (
        <div className="space-y-1.5">
          {[["Season ends","31d"],["Tasks","Daily"],["Rules","Public"]].map(([l,v]) => (
            <div key={l} className="flex items-center justify-between rounded-lg border border-[oklch(0.85_0.13_80/0.15)] px-3 py-1.5 text-xs">
              <span className="text-muted-foreground">{l}</span>
              <span className="text-cream font-medium">{v}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>WHY MEOWLET</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-cream">
            Built for the community that{" "}
            <span className="text-gold-gradient">keeps showing up.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.t} className="surface-card rounded-3xl p-7 transition-transform hover:-translate-y-1">
              <div className="min-h-[80px] flex items-center">{it.visual}</div>
              <h3 className="mt-6 text-xl font-bold text-cream">{it.t}</h3>
              <p className="mt-2 text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Airdrop() {
  return (
    <section id="airdrop" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative surface-card rounded-[36px] overflow-hidden">
          <img
            src={vaultImg}
            alt="Mysterious glowing vault"
            width={1280}
            height={960}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.02_60)] via-[oklch(0.1_0.02_60/0.6)] to-transparent" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-14 lg:p-20 items-center">
            <div>
              <SectionLabel>SOMETHING BIG IS BUILDING</SectionLabel>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-[1.05]">
                The Kind of Airdrop That{" "}
                <span className="text-gold-gradient">Makes People Wish</span>{" "}
                They Started Sooner.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                Every tap, every task, every referral is building toward something massive. The elite already know. The clock is ticking. 👀⏳
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={X_URL} target="_blank" rel="noreferrer">Follow Us on X</Button>
                <Button href={TG} variant="ghost" target="_blank" rel="noreferrer">Start Playing</Button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground max-w-md">
                Eligibility, timing, reward amounts, and distribution terms will be announced through official Meowlet channels.
              </p>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="community" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative surface-card rounded-[36px] p-10 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.16_75/0.25),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-x-0 -bottom-10 -z-0 select-none text-[20vw] font-display font-bold text-gold-gradient opacity-[0.07] leading-none">
            MEOWLET
          </div>
          <img
            src={miniImg}
            alt="Meowlet kitten holding a paw coin"
            width={320}
            height={320}
            loading="lazy"
            className="relative z-10 mx-auto h-40 w-40 object-contain animate-float drop-shadow-[0_20px_40px_oklch(0.82_0.16_75/0.4)]"
          />
          <h2 className="relative z-10 mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-cream max-w-3xl mx-auto leading-tight">
            Ready to Enter the{" "}
            <span className="text-gold-gradient">Meowlet Ecosystem?</span>
          </h2>
          <p className="relative z-10 mt-5 text-muted-foreground max-w-xl mx-auto">
            Start tapping, complete tasks, climb the leaderboard, and become part of what comes next.
          </p>
          <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">
            <Button href={TG} target="_blank" rel="noreferrer">Start Playing</Button>
            <Button href={X_URL} variant="ghost" target="_blank" rel="noreferrer">Follow Meowlet on X</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[oklch(0.85_0.13_80/0.12)] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Magic Kitties Club · An Ecosystem of Products for Our Massive Community.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { label: "X", href: X_URL, svg: <path d="M18.244 2H21l-6.52 7.45L22 22h-6.78l-5.31-6.94L3.6 22H1l7.02-8.02L1.5 2h6.96l4.79 6.34L18.244 2z" /> },
                { label: "TikTok", href: TT_URL, svg: <path d="M16.5 3v2.7a5 5 0 0 0 4 1.9V10a7.7 7.7 0 0 1-4-1.2v6.5a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3a2.6 2.6 0 1 0 1.8 2.5V3h2.8z"/> },
                { label: "Telegram", href: "#", svg: <path d="M21.8 3.4 2.6 10.8c-1 .4-1 1.8.1 2.1l4.5 1.4 1.7 5.4c.2.7 1.1.9 1.6.3l2.5-2.9 4.6 3.4c.7.5 1.7.1 1.9-.7l3.2-14.5c.2-1-.8-1.9-1.9-1.5z"/> },
                { label: "Discord", href: "#", svg: <path d="M20 5a17 17 0 0 0-4.3-1.3l-.2.4a13 13 0 0 0-7 0l-.2-.4A17 17 0 0 0 4 5C1.4 8.8.7 12.5 1 16.1A17 17 0 0 0 6.2 19l.7-1a12 12 0 0 1-2-1c.2-.1.4-.3.5-.4 4.1 1.9 8.5 1.9 12.5 0l.6.4-2 1 .7 1A17 17 0 0 0 23 16c.4-4.2-.6-7.8-3-11zM9 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[oklch(0.85_0.13_80/0.2)] text-cream hover:bg-[oklch(0.85_0.13_80/0.08)]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">{s.svg}</svg>
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.slice(1).map((n) => (
                <li key={n.href}><a href={n.href} className="text-cream/80 hover:text-cream">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Resources</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-cream/80 hover:text-cream">Documentation</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Community Page</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Reward Rules</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Terms</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Privacy</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-3xl">
          Participation and rewards may be subject to eligibility requirements, regional restrictions, official campaign rules, and verification. Digital assets may carry financial and regulatory risks.
        </p>

        <div className="mt-8 pt-6 border-t border-[oklch(0.85_0.13_80/0.12)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 Meowlet. All rights reserved.</span>
          <span>Made for the Magic Kitties Club community.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip text-cream">
      <WaveDecor />
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <Rewards />
      <Why />
      <Airdrop />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function WaveDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute -top-10 left-0 w-[140%] opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="w1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="oklch(0.78 0.15 220)" />
            <stop offset="0.5" stopColor="oklch(0.55 0.25 300)" />
            <stop offset="1" stopColor="oklch(0.65 0.27 350)" />
          </linearGradient>
        </defs>
        <path fill="url(#w1)" fillOpacity="0.35" d="M0,160 C240,260 480,60 720,140 C960,220 1200,80 1440,160 L1440,320 L0,320 Z" />
      </svg>
      <svg className="absolute top-[55%] -left-10 w-[140%] opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="w2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="oklch(0.65 0.27 350)" />
            <stop offset="0.5" stopColor="oklch(0.78 0.22 40)" />
            <stop offset="1" stopColor="oklch(0.55 0.25 300)" />
          </linearGradient>
        </defs>
        <path fill="url(#w2)" fillOpacity="0.3" d="M0,200 C360,80 720,260 1080,160 C1260,110 1380,180 1440,200 L1440,320 L0,320 Z" />
      </svg>
      <svg className="absolute bottom-[-40px] left-0 w-[140%] opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="w3" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="oklch(0.78 0.22 40)" />
            <stop offset="1" stopColor="oklch(0.65 0.27 350)" />
          </linearGradient>
        </defs>
        <path fill="url(#w3)" fillOpacity="0.35" d="M0,180 C300,300 600,60 960,160 C1200,230 1320,140 1440,180 L1440,320 L0,320 Z" />
      </svg>
      {/* stars */}
      <div className="absolute inset-0 bg-[radial-gradient(oklch(1_0_0/0.4)_1px,transparent_1px)] [background-size:120px_120px] opacity-20" />
    </div>
  );
}
