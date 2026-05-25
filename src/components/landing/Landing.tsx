import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Flame,
  Shield,
  Trophy,
  Users,
  Zap,
  ChevronRight,
  MapPin,
  Clock,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";

/* ===== Icons ===== */

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);
const WhatsAppIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 1.8.8 2.6.8 3.5.7.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2" />
  </svg>
);

import heroImg from "@/assets/hero-fighter.jpg";
import aboutImg from "@/assets/about-gloves.jpg";
import masterImg from "@/assets/master-real.jpg";
import logoCT from "@/assets/logo-ct.png";
import mMuay from "@/assets/modality-muaythai.jpg";
import mKick from "@/assets/modality-kickboxing.jpg";
import mCond from "@/assets/modality-condition.jpg";
import mPerf from "@/assets/modality-perf.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import ctaImg from "@/assets/cta-athlete.jpg";

const WA_LINK = "https://wa.me/5511977504274";
const IG_LINK = "https://instagram.com/erick.nascimento23";

/* ===== Reusable Bits ===== */

const Reveal = ({
  children,
  delay = 0,
  y = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <div className="mb-6 flex items-center gap-3 text-xs font-display tracking-[0.3em] text-primary">
    <span className="text-metal">{n}</span>
    <span className="h-px w-10 bg-primary/60" />
    <span>{children}</span>
  </div>
);

const RedButton = ({
  children,
  primary = false,
  href = "#",
}: {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
}) => (
  <a
    href={href}
    className={`group relative inline-flex items-center gap-3 overflow-hidden px-7 py-4 font-display text-sm tracking-[0.25em] uppercase transition-all duration-300 ${
      primary
        ? "bg-blood text-primary-foreground shadow-glow-sm hover:shadow-glow"
        : "border border-primary/40 text-foreground hover:border-primary"
    } clip-slash`}
  >
    <span className="relative z-10">{children}</span>
    <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
    {!primary && (
      <span className="absolute inset-0 -translate-x-full bg-blood transition-transform duration-500 group-hover:translate-x-0" />
    )}
  </a>
);

/* ===== Nav ===== */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navItems = ["SOBRE", "MODALIDADES", "MESTRE", "GALERIA", "CONTATO"];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="CT Josuel Nascimento — Início"
        >
          <div className="relative h-12 w-12 shrink-0">
            <div className="absolute inset-0 rounded-full bg-blood opacity-40 blur-md transition-opacity group-hover:opacity-70" />
            <img
              src={logoCT}
              alt="Logo CT Josuel Nascimento"
              className="relative h-12 w-12 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base tracking-[0.2em]">CT JOSUEL</div>
            <div className="text-[9px] tracking-[0.35em] text-primary">FAMÍLIA FURACÃO</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden gap-8 text-xs font-display tracking-[0.25em] md:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="group relative">
              {i}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp: 11 97750-4274"
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-blood px-5 py-3 font-display text-xs tracking-[0.25em] text-primary-foreground shadow-glow-sm transition-all hover:shadow-glow clip-slash"
          >
            <WhatsAppIcon className="relative z-10 h-4 w-4" />
            <span className="relative z-10 hidden sm:inline">11 97750-4274</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          aria-label="Menu mobile"
        >
          <div className="flex flex-col px-6 py-4 gap-5">
            {navItems.map((i) => (
              <a
                key={i}
                href={`#${i.toLowerCase()}`}
                className="font-display text-sm tracking-[0.25em] text-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {i}
              </a>
            ))}
          </div>
        </nav>
      )}
    </motion.header>
  );
}

/* ===== Hero ===== */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Reduced particle count for better mobile performance
  const particles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section id="top" ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* BG image w/ parallax zoom */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Lutador de Muay Thai em treino"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
      <div className="absolute inset-0 bg-radial-red opacity-70" />
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-scan absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>
      {/* Particles — reduced to 8 */}
      <div aria-hidden="true">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [-20, -200], opacity: [0, 1, 0] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity: op }}
        className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32"
      >
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-14 bg-primary" />
            <span className="font-display text-xs tracking-[0.4em] text-primary">
              FAMÍLIA FURACÃO • DESDE 2008
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,11vw,10rem)] leading-[0.85] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 80, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block text-shadow-blood"
            >
              FORJANDO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block text-blood italic"
            >
              GUERREIROS
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 max-w-xl text-sm md:text-base tracking-[0.25em] text-muted-foreground font-display"
          >
            MUAY THAI <span className="text-primary">/</span> JIU JITSU{" "}
            <span className="text-primary">/</span> MMA <span className="text-primary">/</span> BOXE
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-blood px-7 py-4 font-display text-sm tracking-[0.25em] uppercase text-primary-foreground shadow-glow-sm transition-all hover:shadow-glow clip-slash"
            >
              <WhatsAppIcon className="relative z-10 h-5 w-5" />
              <span className="relative z-10">Falar no WhatsApp · 11 97750-4274</span>
            </a>
            <RedButton href="#sobre">Fazer parte do CT</RedButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom marquee */}
      <div
        className="absolute bottom-0 inset-x-0 z-10 overflow-hidden border-y border-border bg-background/70 backdrop-blur-sm"
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap py-3 animate-marquee">
          {[0, 1].map((k) => (
            <div
              key={k}
              className="flex shrink-0 items-center gap-12 px-6 font-display text-xs tracking-[0.4em] text-muted-foreground"
            >
              {[
                "DISCIPLINA",
                "★",
                "HONRA",
                "★",
                "SUPERAÇÃO",
                "★",
                "PERFORMANCE",
                "★",
                "FAMÍLIA",
                "★",
                "TRADIÇÃO",
                "★",
              ].map((w, i) => (
                <span key={i} className={w === "★" ? "text-primary" : ""}>
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== About ===== */

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div
        className="absolute -left-40 top-0 h-[500px] w-[500px] bg-radial-red animate-pulse-red"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-blood opacity-30 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden clip-slash shadow-brutal">
              <img
                src={aboutImg}
                alt="Luvas de Muay Thai"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="border border-primary/40 bg-background/90 px-6 py-4 backdrop-blur">
                <div className="font-display text-4xl text-blood">15+</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  ANOS FORMANDO ATLETAS
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel n="01">SOBRE O CT</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              MAIS QUE UMA ACADEMIA. <span className="text-blood italic">UMA TRIBO.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              O CT Josuel Nascimento é território de quem busca evolução real. Sob a bandeira da
              Família Furacão, cultivamos disciplina, honra e respeito desde o primeiro soco. Aqui o
              ringue é escola — e cada gota de suor escreve sua história.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { i: Shield, t: "DISCIPLINA", d: "Rotina forja caráter." },
                { i: Flame, t: "HONRA", d: "Respeito antes da força." },
                { i: Zap, t: "PERFORMANCE", d: "Físico e mente no limite." },
                { i: Users, t: "FAMÍLIA", d: "Crescer junto, sempre." },
              ].map(({ i: Icon, t, d }) => (
                <div
                  key={t}
                  className="group border border-border bg-card/40 p-5 backdrop-blur transition-all hover:border-primary/60 hover:bg-card"
                >
                  <Icon
                    className="h-6 w-6 text-primary transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <div className="mt-3 font-display tracking-[0.2em] text-sm">{t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===== Modalities ===== */

const modalities = [
  {
    img: mMuay,
    title: "MUAY THAI",
    desc: "A arte das oito armas. Tradição milenar, técnica brutal.",
    tag: "SEG · QUA · SEX",
  },
  {
    img: mPerf,
    title: "JIU JITSU",
    desc: "Solo, controle e finalização. A arte suave que dobra gigantes.",
    tag: "TER · QUI",
  },
  {
    img: mKick,
    title: "MMA",
    desc: "Todas as artes em uma só. O combate em sua forma mais completa.",
    tag: "MIXED MARTIAL ARTS",
  },
  {
    img: mCond,
    title: "BOXE",
    desc: "Punhos afiados, footwork preciso. A nobre arte da defesa pessoal.",
    tag: "STAND-UP",
  },
];

function Modalities() {
  return (
    <section id="modalidades" className="relative py-32">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute right-0 top-1/3 h-[600px] w-[600px] bg-radial-red opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel n="02">MODALIDADES</SectionLabel>
        </Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] max-w-3xl">
              ESCOLHA SEU <span className="text-blood italic">CAMPO DE BATALHA.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-foreground">
              Quatro frentes de treino. Um objetivo: transformar quem entra em quem sai.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modalities.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <article className="group relative h-[440px] overflow-hidden border border-border bg-card">
                <img
                  src={m.img}
                  alt={m.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 60%, oklch(0.58 0.24 27 / 0.4), transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 ring-0 ring-primary/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-primary/50 group-hover:shadow-glow-sm"
                  aria-hidden="true"
                />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="border border-primary/50 bg-background/60 px-3 py-1 text-[9px] tracking-[0.3em] font-display text-primary backdrop-blur">
                    {m.tag}
                  </span>
                  <span className="font-display text-3xl text-metal opacity-50" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl tracking-wide transition-transform duration-500 group-hover:-translate-y-1">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {m.desc}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-2 text-xs font-display tracking-[0.2em] text-primary"
                    aria-hidden="true"
                  >
                    DESCOBRIR <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal delay={modalities.length * 0.08}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-[440px] flex-col items-start justify-between overflow-hidden border border-primary/40 bg-blood p-6 text-primary-foreground transition-all hover:shadow-glow"
              aria-label="Falar com o Mestre Josuel no WhatsApp para se inscrever"
            >
              <div className="absolute inset-0 bg-noise opacity-20" aria-hidden="true" />
              <div className="relative">
                <div className="font-display text-3xl">PRONTO PARA ENTRAR?</div>
                <p className="mt-3 text-sm opacity-90">
                  Fale direto com o Mestre Josuel no WhatsApp.
                </p>
              </div>
              <div className="relative flex items-center gap-2 font-display tracking-[0.25em] text-sm">
                <WhatsAppIcon className="h-5 w-5" /> WHATSAPP{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===== Master ===== */

function Master() {
  return (
    <section id="mestre" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-dark" />
      <img
        src={masterImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 bg-blood opacity-40 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 h-24 w-24 border-t-2 border-l-2 border-primary"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-primary"
                aria-hidden="true"
              />
              <img
                src={masterImg}
                alt="Mestre Josuel Nascimento"
                loading="lazy"
                className="relative aspect-[4/5] w-full object-cover grayscale-[20%] contrast-110 shadow-brutal"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel n="03">O MESTRE</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
              JOSUEL <br />
              <span className="text-blood italic">NASCIMENTO</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Black Prajied", "Família Furacão", "Faixa Preta", "+50 Atletas Formados"].map(
                (b) => (
                  <span
                    key={b}
                    className="border border-primary/40 bg-card/60 px-3 py-1 text-[10px] tracking-[0.2em] font-display text-primary"
                  >
                    {b}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Mais de duas décadas dedicadas às artes marciais. Discípulo da tradição, Josuel
              carrega no DNA o peso da Família Furacão — uma das equipes mais respeitadas do país.
              Forma atletas. Forma caráter. Forma campeões.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <blockquote className="mt-8 border-l-2 border-primary pl-6">
              <Quote className="h-6 w-6 text-primary mb-3" aria-hidden="true" />
              <p className="font-display text-xl italic leading-relaxed">
                "Não treino lutadores. Treino guerreiros para a vida."
              </p>
              <footer className="mt-3 text-xs tracking-[0.3em] text-muted-foreground">
                — MESTRE JOSUEL
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===== Gallery ===== */

function Gallery() {
  const imgs = [g1, g2, g3, g4, mMuay, mKick];
  const alts = [
    "Treino no CT Josuel 01",
    "Treino no CT Josuel 02",
    "Treino no CT Josuel 03",
    "Treino no CT Josuel 04",
    "Aula de Muay Thai",
    "Aula de Kickboxing",
  ];

  return (
    <section id="galeria" className="relative py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionLabel n="04">GALERIA</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
                DENTRO DO <span className="text-blood italic">RINGUE.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:[grid-auto-flow:dense]">
          {imgs.map((src, i) => {
            const span = i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:col-span-2" : "";
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`group relative overflow-hidden ${span}`}>
                  <img
                    src={src}
                    alt={alts[i]}
                    loading="lazy"
                    className="aspect-square h-full w-full object-cover transition-all duration-[1.2s] group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-background/40 transition-opacity duration-500 group-hover:bg-background/10"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(45deg, oklch(0.58 0.24 27 / 0.3), transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <span className="font-display text-xs tracking-[0.3em] text-primary">
                      CT JOSUEL · 0{i + 1}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===== Testimonials ===== */

const testimonials = [
  {
    name: "Rafael Lima",
    role: "Atleta Profissional",
    t: "O CT mudou minha vida. Encontrei foco, força e uma família. Cada treino é uma evolução real.",
  },
  {
    name: "Marina Souza",
    role: "Aluna há 3 anos",
    t: "Cheguei sem condicionamento. Hoje subo no ringue. O Mestre Josuel ensina muito além da luta.",
  },
  {
    name: "Eduardo Reis",
    role: "Competidor",
    t: "Disciplina absurda. Aqui você descobre limites que nem sabia que tinha — e os ultrapassa.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-32" aria-label="Depoimentos">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-radial-red opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel n="05">DEPOIMENTOS</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] max-w-3xl">
            VOZES DE QUEM <span className="text-blood italic">EVOLUIU.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <blockquote className="group relative h-full overflow-hidden border border-border bg-card/40 p-8 backdrop-blur-xl transition-all hover:border-primary/50 hover:shadow-glow-sm">
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blood opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  aria-hidden="true"
                />
                <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                <p className="mt-6 text-foreground/90 leading-relaxed">"{t.t}"</p>
                <div className="mt-6 flex items-center gap-2" aria-label="5 estrelas">
                  {[...Array(5)].map((_, k) => (
                    <Star
                      key={k}
                      className="h-3 w-3 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <footer className="mt-6 border-t border-border pt-4">
                  <cite className="not-italic">
                    <div className="font-display tracking-wider">{t.name}</div>
                    <div className="text-xs text-muted-foreground tracking-[0.2em]">{t.role}</div>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CTA ===== */

function FinalCTA() {
  return (
    <section id="contato" className="relative min-h-[90vh] overflow-hidden">
      <img
        src={ctaImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-radial-red opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <Reveal>
          <div
            className="mb-6 flex items-center gap-3 text-xs font-display tracking-[0.4em] text-primary"
            aria-hidden="true"
          >
            <Trophy className="h-4 w-4" />
            <span>SUA HORA É AGORA</span>
            <Trophy className="h-4 w-4" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.85] tracking-tight">
            VOCÊ ESTÁ PRONTO <br />
            <span className="text-blood italic">PARA EVOLUIR?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Reserve sua primeira aula. Sem compromisso. Sinta a energia do CT, conheça a equipe e
            descubra o atleta dentro de você.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 overflow-hidden bg-blood px-12 py-6 font-display text-lg md:text-xl tracking-[0.3em] text-primary-foreground shadow-glow transition-all hover:shadow-glow hover:scale-[1.02] clip-slash"
            >
              <WhatsAppIcon className="relative z-10 h-6 w-6" />
              <span className="relative z-10">FALAR COM O MESTRE</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===== Footer ===== */

function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-16">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0">
              <div
                className="absolute inset-0 rounded-full bg-blood opacity-40 blur-md"
                aria-hidden="true"
              />
              <img
                src={logoCT}
                alt="CT Josuel Nascimento"
                className="relative h-16 w-16 object-contain"
              />
            </div>
            <div>
              <div className="font-display text-xl tracking-[0.2em]">CT JOSUEL NASCIMENTO</div>
              <div className="text-[10px] tracking-[0.35em] text-primary">FAMÍLIA FURACÃO</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            Centro de treinamento de alta performance em artes marciais. Disciplina, honra e
            superação.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do CT Josuel Nascimento"
              className="group flex h-11 w-11 items-center justify-center border border-border transition-all hover:border-primary hover:bg-blood"
            >
              <InstagramIcon className="h-4 w-4 transition-colors group-hover:text-white" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do CT Josuel Nascimento"
              className="group flex h-11 w-11 items-center justify-center border border-border transition-all hover:border-primary hover:bg-blood"
            >
              <WhatsAppIcon className="h-4 w-4 transition-colors group-hover:text-white" />
            </a>
          </div>
          <p className="mt-4 text-xs tracking-[0.2em] text-muted-foreground">+55 11 97750-4274</p>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-[0.3em] text-primary">LOCALIZAÇÃO</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Arquiteto+Vilanova+Artigas%2C+45+-+Jardim+Tiete%2C+S%C3%A3o+Paulo+-+SP%2C+03947-060"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Ver endereço no Google Maps"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              Av. Arquiteto Vilanova Artigas, 45
              <br />
              Jardim Tietê
              <br />
              São Paulo · SP
              <br />
              CEP 03947-060
            </span>
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-[0.3em] text-primary">HORÁRIOS</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <div className="flex items-center gap-2 font-display text-xs tracking-[0.3em] text-foreground">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" /> MUAY THAI
              </div>
              <div className="ml-6 mt-1 text-xs">
                Seg · Qua · Sex
                <br />
                <span className="text-foreground">18h00 · 20h30</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 font-display text-xs tracking-[0.3em] text-foreground">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" /> JIU JITSU
              </div>
              <div className="ml-6 mt-1 text-xs">
                Ter · Qui
                <br />
                <span className="text-foreground">20h30</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] tracking-[0.3em] text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} CT JOSUEL NASCIMENTO · FORJADO COM HONRA.</p>
          <p>
            FAMÍLIA <span className="text-primary">FURACÃO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ===== Page ===== */

export default function Landing() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <About />
        <Modalities />
        <Master />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
