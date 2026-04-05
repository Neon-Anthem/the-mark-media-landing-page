import { IconSparkles2Filled } from "@tabler/icons-react";
import { motion, useAnimate, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Card data (swap src/alt when real images are ready) ────────────────────
const CARDS = [
  { src: "/brand-logos/bastion-logo-tmm.png", alt: "Work 1" },
  { src: "/brand-logos/coco-logo-tmm.png", alt: "Work 2" },
  { src: "/brand-logos/escenza-logo-tmm.png", alt: "Work 3" },
  { src: "/brand-logos/nykaa-logo-tmm.png", alt: "Work 4" },
  { src: "/brand-logos/pheonix-pune-logo-tmm.png", alt: "Work 5" },
  { src: "/brand-logos/marrekesh-logo-tmm.png", alt: "Work 6" },
];

// Off-screen starting positions — one per card, spread across all edges
const CARD_STARTS: { x: number; y: number }[] = [
  { x: -900, y: -500 }, // top-left
  { x: 900, y: -400 }, // top-right
  { x: -1000, y: 100 }, // left
  { x: 1000, y: 200 }, // right
  { x: -700, y: 600 }, // bottom-left
  { x: 800, y: 700 }, // bottom-right
];

const ORBIT_RADIUS = 360;
const ORBIT_DURATION = 12; // seconds per revolution
const ORBIT_STEPS = 180; // keyframe resolution

// ─── Generates x/y keyframes for one full circular orbit ────────────────────
function generateOrbitFrames(
  radius: number,
  angleOffset: number,
  steps: number = ORBIT_STEPS,
): { x: number[]; y: number[] } {
  const x: number[] = [];
  const y: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const angle = angleOffset + (i / steps) * Math.PI * 2;
    x.push(Math.cos(angle) * radius);
    y.push(Math.sin(angle) * radius);
  }
  return { x, y };
}

type Phase = "hidden" | "fly-in" | "spread" | "orbit";

// ═══════════════════════════════════════════════════════════════════════════════
// Root
// ═══════════════════════════════════════════════════════════════════════════════
export default function FeaturedWorkSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative h-[300vh] w-full bg-black" ref={containerRef}>
      <div className="sticky top-0 left-0 right-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <Title containerRef={containerRef} />
        <Content containerRef={containerRef} />
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Title (existing scroll-scale animation preserved)
// ═══════════════════════════════════════════════════════════════════════════════
function Title({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["60%", "0%"]);

  const Icon = <IconSparkles2Filled className="text-brand-6 md:size-8" />;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 mx-auto w-[80%] justify-center mb-8 z-10"
      style={{ scale, translateY }}
    >
      <span>{Icon}</span>
      <motion.h3 className="text-4xl text-white text-center">
        Featured Work
      </motion.h3>
      <span className="-scale-x-100">{Icon}</span>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Content — orchestrates the 3-phase animation via state
// ═══════════════════════════════════════════════════════════════════════════════
function Content({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [phase, setPhase] = useState<Phase>("hidden");
  const flyInDone = useRef(0);
  const spreadDone = useRef(0);

  // ─── Scroll trigger — fire once when progress crosses 0.3 ─────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const check = () => {
      if (scrollYProgress.get() >= 0.3) {
        setPhase((prev) => (prev === "hidden" ? "fly-in" : prev));
      }
    };
    // Check immediately in case already scrolled past
    check();
    const unsub = scrollYProgress.on("change", check);
    return unsub;
  }, [scrollYProgress]);

  // ─── Phase transition callbacks ────────────────────────────────────────
  const onFlyInComplete = useCallback(() => {
    flyInDone.current += 1;
    if (flyInDone.current >= CARDS.length) {
      setPhase("spread");
    }
  }, []);

  const onSpreadComplete = useCallback(() => {
    spreadDone.current += 1;
    if (spreadDone.current >= CARDS.length) {
      setPhase("orbit");
    }
  }, []);

  return (
    <div className="relative w-full h-125">
      {CARDS.map((card, i) => (
        <AnimatedCard
          key={i}
          index={i}
          total={CARDS.length}
          src={card.src}
          alt={card.alt}
          initialPos={CARD_STARTS[i]}
          phase={phase}
          onFlyInComplete={onFlyInComplete}
          onSpreadComplete={onSpreadComplete}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// AnimatedCard — each card owns its own useAnimate hook
// ═══════════════════════════════════════════════════════════════════════════════
function AnimatedCard({
  index,
  total,
  src,
  alt,
  initialPos,
  phase,
  onFlyInComplete,
  onSpreadComplete,
}: {
  index: number;
  total: number;
  src: string;
  alt: string;
  initialPos: { x: number; y: number };
  phase: Phase;
  onFlyInComplete: () => void;
  onSpreadComplete: () => void;
}) {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  // Phase 1 — Fly-in: spring to center with stagger, bounce comes from low damping
  useEffect(() => {
    if (phase !== "fly-in") return;
    animate(
      scope.current,
      { x: 0, y: 0, opacity: [0, 1, 1] },
      { type: "spring", stiffness: 100, damping: 25, delay: index * 0.05 },
    ).then(onFlyInComplete);
  }, [phase, animate, scope, index, onFlyInComplete]);

  // Phase 2 — Spread: fan out to circle positions
  useEffect(() => {
    if (phase !== "spread") return;
    const angle = (index / total) * Math.PI * 2;
    const cx = Math.cos(angle) * ORBIT_RADIUS;
    const cy = Math.sin(angle) * ORBIT_RADIUS;
    animate(
      scope.current,
      { x: cx, y: cy },
      { type: "spring", stiffness: 100, damping: 14, delay: index * 0.06 },
    ).then(onSpreadComplete);
  }, [phase, animate, scope, index, total, onSpreadComplete]);

  // Phase 3 — Infinite orbit loop
  useEffect(() => {
    if (phase !== "orbit") return;
    const frames = generateOrbitFrames(
      ORBIT_RADIUS,
      (index / total) * Math.PI * 2,
    );
    animate(
      scope.current,
      { x: frames.x, y: frames.y },
      { duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" },
    );
  }, [phase, animate, scope, index, total]);

  return (
    <motion.div
      ref={scope}
      className="absolute top-1/2 left-1/2 z-20"
      style={{ marginLeft: -128, marginTop: -128 }}
      initial={{ x: initialPos.x, y: initialPos.y, opacity: 0 }}
    >
      <div className="relative border rounded-full shadow-md shadow-brand-6/40">
        {/* Disk */}
        <div className="absolute size-12 bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-6 bg-gray-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        {/* Disk */}

        <div className="size-64 rounded-full overflow-hidden shadow-lg shadow-black/40">
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            className="size-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
