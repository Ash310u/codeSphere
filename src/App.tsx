import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Command,
  GitBranch,
  Github,
  Menu,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { event } from "./data/event";
import { Count, Reveal, Sphere } from "./components/Effects";
import Dialog from "./components/Dialog";
import GitWorkflow from "./components/GitWorkflow";

function HeroTerminal() {
  const [line, setLine] = useState(0);
  useEffect(() => {
    if (line >= 3) return;
    const timer = setTimeout(() => setLine((l) => l + 1), 850);
    return () => clearTimeout(timer);
  }, [line]);
  return (
    <div className="hero-terminal">
      <div className="terminal-header">
        <div className="traffic-lights">
          <i />
          <i />
          <i />
        </div>
        <span>~/codesphere</span>
        <Terminal size={12} />
      </div>
      <div className="terminal-body">
        <p>
          <span className="terminal-dollar">❯</span> git clone your-potential
        </p>
        <p className={line >= 1 ? "" : "terminal-hidden"}>
          <span className="muted">Cloning into</span>{" "}
          <span className="lavender">'your-next-chapter'</span>…
        </p>
        <p className={line >= 2 ? "" : "terminal-hidden"}>
          <Check size={12} />
          <span>Ready to build something great.</span>
        </p>
        <p className={line >= 3 ? "" : "terminal-hidden"}>
          <span className="terminal-dollar">❯</span>{" "}
          <span className="cursor-block" />
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [track, setTrack] = useState<(typeof event.tracks)[number] | null>(
    null,
  );
  const [faq, setFaq] = useState<number | null>(0);
  const nav = [
    { href: "#experience", title: "Experience" },
    { href: "#schedule", title: "Schedule" },
    { href: "#faq", title: "FAQs" },
  ];
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="site-shell">
        <header className="header">
          <a className="brand" href="#" aria-label="CodeSphere home">
            <span className="brand-symbol">
              <Command size={23} />
            </span>
            <span>
              code<span className="brand-light">sphere</span>
              <span className="brand-dot">.</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.title}
              </a>
            ))}
          </nav>
          <div className="header-right">
            <button
              className="icon-button mobile-menu-button"
              aria-label={menu ? "Close navigation" : "Open navigation"}
              aria-expanded={menu}
              aria-controls="mobile-nav"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
          {menu && (
            <nav
              id="mobile-nav"
              className="mobile-nav"
              aria-label="Mobile navigation"
            >
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenu(false)}>
                  {n.title}
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </nav>
          )}
        </header>
        <main id="main">
          <section
            className="hero"
            aria-labelledby="hero-title"
            onPointerMove={(e) => {
              if (
                e.pointerType !== "mouse" ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              )
                return;
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--spot-x",
                `${e.clientX - rect.left}px`,
              );
              e.currentTarget.style.setProperty(
                "--spot-y",
                `${e.clientY - rect.top}px`,
              );
            }}
          >
            <div className="hero-grid" />
            <div className="hero-spotlight" />
            <div className="hero-topline">
              <span className="edition mono">
                THE DEVELOPER EXPERIENCE / {event.year}
              </span>
              <span className="mono small hero-status">
                <span className="status-dot" /> YOUR NEXT COMMIT STARTS HERE
              </span>
            </div>
            <div className="hero-layout">
              <div className="hero-copy">
                <Reveal>
                  <div className="announcement">
                    <span className="status-dot" /> Learn. Collaborate. Level
                    up.
                    <span className="announcement-line" />
                    <span className="mono">v.2026</span>
                  </div>
                  <h1 id="hero-title">
                    CODE
                    <br />
                    <span>
                      SPHERE<span className="title-period">.</span>
                    </span>
                  </h1>
                  <div className="hero-tagline">
                    Build. Commit. <span className="lavender">Solve.</span>
                  </div>
                  <p className="hero-description">
                    Where curious minds become better developers.
                    <br className="desktop-break" /> A hands-on experience in
                    Git, GitHub, and the
                    <br className="desktop-break" /> art of solving what’s next.
                  </p>
                  <div className="hero-actions">
                    <a className="button button-primary" href="#experience">
                      Explore the experience <ArrowDown size={16} />
                    </a>
                  </div>
                  <div className="hero-meta">
                    <span>
                      <span className="tiny-square" /> ALL SKILL LEVELS WELCOME
                    </span>
                    <span>
                      <Code2 size={13} /> JUST BRING YOUR CURIOSITY
                    </span>
                  </div>
                </Reveal>
              </div>
              <div className="hero-art">
                <Sphere />
                <HeroTerminal />
              </div>
            </div>
            <div className="hero-bottom">
              <a href="#experience" className="scroll-hint">
                <span className="scroll-icon">
                  <ArrowDown size={13} />
                </span>
                <span>SCROLL TO DISCOVER</span>
              </a>
              <div className="hero-bottom-tags">
                <span>GIT & GITHUB</span>
                <span className="divider">/</span>
                <span>DATA STRUCTURES</span>
                <span className="divider">/</span>
                <span>REAL CONNECTIONS</span>
              </div>
              <span className="mono muted small">01 — 05</span>
            </div>
          </section>
          <div
            className="marquee"
            aria-label="Build, commit, collaborate, solve, repeat"
          >
            <div className="marquee-track" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span key={i}>
                  BUILD <span className="marquee-star">✳</span> COMMIT{" "}
                  <span className="marquee-star">✳</span> COLLABORATE{" "}
                  <span className="marquee-star">✳</span> SOLVE{" "}
                  <span className="marquee-star">✳</span> REPEAT{" "}
                  <span className="marquee-star">✳</span>{" "}
                </span>
              ))}
            </div>
          </div>
          <section className="section experience-section" id="experience">
            <Reveal>
              <div className="section-top">
                <div>
                  <p className="eyebrow">01 / THE EXPERIENCE</p>
                  <h2>
                    One sphere.
                    <br />
                    <span className="muted">Endless possibilities.</span>
                  </h2>
                </div>
                <p className="section-description">
                  Less watching. More doing.
                  <br />
                  Three experiences built to take you from
                  <br />
                  “I think I can” to “I just did.”
                </p>
              </div>
            </Reveal>
            <div className="track-grid">
              {event.tracks.map((t, i) => (
                <Reveal key={t.id} delay={i * 0.08}>
                  <button
                    className={`track-card track-${t.id}`}
                    onClick={() => setTrack(t)}
                  >
                    <div className="card-top">
                      <span className="mono muted">/{t.number}</span>
                      <ArrowUpRight size={19} />
                    </div>
                    <div className="track-art" aria-hidden="true">
                      {t.id === "git" ? (
                        <div className="mini-graph">
                          <svg viewBox="0 0 250 100">
                            <path d="M20 70H225 M75 70V40Q75 20 95 20H155Q175 20 175 40V70" />
                            <circle cx="35" cy="70" r="6" />
                            <circle cx="75" cy="70" r="6" />
                            <circle cx="115" cy="20" r="6" />
                            <circle cx="175" cy="70" r="6" />
                            <circle cx="220" cy="70" r="6" />
                          </svg>
                          <span className="mono">
                            main <span>← feature/you</span>
                          </span>
                        </div>
                      ) : t.id === "github" ? (
                        <div className="pr-visual">
                          <Github size={34} />
                          <span className="pr-pill">
                            <GitBranch size={13} /> Pull request{" "}
                            <span>#001</span>
                          </span>
                          <span className="merged">
                            <Check size={12} /> Ready to merge
                          </span>
                        </div>
                      ) : (
                        <div className="code-visual mono">
                          <span>
                            <i>01</i> <b>function</b> levelUp(you) {"{"}
                          </span>
                          <span>
                            <i>02</i> &nbsp; <b>return</b> you + <em>1</em>;
                          </span>
                          <span>
                            <i>03</i> {"}"}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="eyebrow">{t.category}</p>
                    <h3>{t.title}</h3>
                    <p className="track-description">{t.description}</p>
                    <div className="track-tags">
                      {t.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="card-command mono">
                      <span className="terminal-dollar">$</span> {t.command}
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="stats-row">
                {event.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <strong>
                      <Count value={s.value} suffix={s.suffix} />
                      <span className="stat-dot">.</span>
                    </strong>
                    <span className="mono">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>
          <GitWorkflow />
          <section className="section schedule-section" id="schedule">
            <Reveal>
              <div className="section-top">
                <div>
                  <p className="eyebrow">03 / THE GAME PLAN</p>
                  <h2>
                    A day worth
                    <br />
                    <span className="muted">committing to.</span>
                  </h2>
                </div>
                <div className="schedule-note">
                  <span className="badge">PROPOSED AGENDA</span>
                  <p className="section-description">
                    {event.date}.<br />
                    Final timings and venue coming soon.
                  </p>
                </div>
              </div>
              <div className="schedule-layout">
                <div className="schedule-intro">
                  <div className="branch-label mono">
                    <GitBranch size={16} /> your-next-chapter
                  </div>
                  <h3>
                    From <span className="lavender">hello world</span>
                    <br />
                    to what’s next.
                  </h3>
                  <p>
                    Every session builds on the last.
                    <br />
                    Learn something. Try something.
                    <br />
                    Leave with more than you came with.
                  </p>
                  <div className="schedule-art" aria-hidden="true">
                    <GitBranch strokeWidth={0.65} />
                  </div>
                  <p className="mono small muted">
                    // GOOD THINGS TAKE A FEW COMMITS
                  </p>
                </div>
                <div className="timeline">
                  {event.schedule.map((s, i) => (
                    <div className="timeline-row" key={s.command}>
                      <div className="timeline-dot" />
                      <span className="timeline-time mono">{s.time}</span>
                      <div>
                        <p className="timeline-command mono">{s.command}</p>
                        <h3>{s.title}</h3>
                        <p>{s.description}</p>
                      </div>
                      <span className="timeline-hash mono">
                        {
                          [
                            "a1b2c3d",
                            "e4f5a6b",
                            "c7d8e9f",
                            "b0a1c2d",
                            "f3e4d5c",
                            "a83f92d",
                          ][i]
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
          <section className="community-strip section">
            <Reveal>
              <div className="community-content">
                <div className="community-icon">
                  <Sparkles size={26} />
                </div>
                <div>
                  <p className="eyebrow">BUILT FOR CURIOUS PEOPLE</p>
                  <h3>Good code starts with great connections.</h3>
                  <p>
                    Find your people. Ask the questions. Build something
                    together.
                  </p>
                </div>
                <a className="text-button" href="#experience">
                  Find your track <ArrowUpRight size={17} />
                </a>
              </div>
            </Reveal>
          </section>
          <section className="section faq-section" id="faq">
            <Reveal>
              <div className="faq-layout">
                <div>
                  <p className="eyebrow">04 / A FEW THINGS TO KNOW</p>
                  <h2>
                    Questions?
                    <br />
                    <span className="muted">We’ve got you.</span>
                  </h2>
                  <p className="section-description">
                    A little clarity before your first commit.
                  </p>
                </div>
                <div className="faq-list">
                  {event.faqs.map((f, i) => (
                    <div
                      className={`faq-item ${faq === i ? "open" : ""}`}
                      key={f.q}
                    >
                      <h3>
                        <button
                          onClick={() => setFaq(faq === i ? null : i)}
                          aria-expanded={faq === i}
                          aria-controls={`faq-${i}`}
                        >
                          {f.q}
                          <ChevronDown size={18} />
                        </button>
                      </h3>
                      <div id={`faq-${i}`} hidden={faq !== i}>
                        <p>{f.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
          <section className="section cta-section">
            <Reveal>
              <div className="cta-panel">
                <div className="cta-grid" />
                <p className="eyebrow">
                  <span className="status-dot" /> 05 / YOUR NEXT CHAPTER
                </p>
                <h2>
                  Great things start
                  <br />
                  with a <span className="serif lavender">first commit.</span>
                </h2>
                <p>You bring the curiosity. We’ll bring the possibilities.</p>
                <a className="button button-primary" href="#schedule">
                  Explore the event schedule <ArrowUpRight size={18} />
                </a>
                <span className="mono cta-footnote">
                  GIT. GITHUB. DSA. YOU.
                </span>
              </div>
            </Reveal>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-top">
            <a className="brand" href="#">
              <span className="brand-symbol">
                <Command size={23} />
              </span>
              <span>
                code<span className="brand-light">sphere</span>
                <span className="brand-dot">.</span>
              </span>
            </a>
            <p className="mono">
              <span className="terminal-dollar">$</span> echo{" "}
              <span className="muted">"See you in the sphere."</span>
            </p>
            <a href="#main" className="text-button">
              Back to top <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {event.year} CodeSphere. Built for what’s next.</span>
            <div>
              <a href="#experience">Experience</a>
              <a href="#schedule">Schedule</a>
              <a href="#faq">FAQs</a>
            </div>
            <span className="mono">
              <span className="status-dot" /> ALWAYS BUILDING
            </span>
          </div>
        </footer>
      </div>
      {track && (
        <Dialog title={track.title} onClose={() => setTrack(null)}>
          <p className="eyebrow lavender">{track.category}</p>
          <p>{track.detail}</p>
          <div className="track-tags">
            {track.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className="button button-primary track-detail-link"
            href={track.id === "dsa" ? "#schedule" : "#workflow"}
            onClick={() => setTrack(null)}
          >
            {track.id === "dsa"
              ? "View the DSA session"
              : "Try the Git playground"}
            <ArrowRight size={17} />
          </a>
        </Dialog>
      )}
    </MotionConfig>
  );
}
