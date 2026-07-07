import React from "react";

/**
 * Noventra Group — modern trucking one-page site (copy-paste ready)
 *
 * This file is intentionally self-contained and preview-friendly.
 * Pure JSX (TypeScript annotations removed) so it runs in any React setup:
 * Next.js, Vite, CRA, or an online preview — no build errors.
 */

// ✅ Noventra logo — embedded directly in the code (base64), so it displays
// everywhere with no file setup. To use a file instead, place your PNG in
// /public and change this back to "/noventra_112-removebg-preview.png".
const LOGO_URL = "data:image/png;base64,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";

// ✅ Trucking imagery — ORIGINAL BUILT-IN ILLUSTRATIONS (no downloads needed).
//
// Every visual below is an original vector illustration drawn in the site's own
// cyan/navy palette. They are embedded in this file, load instantly, and stay
// razor-sharp at any screen size. Nothing to download, nothing to configure.
//
// BONUS: if you ever add real photos to /public/images/ using the file names
// below, the site automatically upgrades to your photos — illustrations remain
// the fallback. Best of both worlds.
const IMAGES = {
  heroTruck:     { local: "/images/hero-truck.jpg",     art: "hero",     label: "Hero truck" },
  truckClose:    { local: "/images/truck-close.jpg",    art: "close",    label: "Truck close-up" },
  highwayNight:  { local: "/images/highway-night.jpg",  art: "night",    label: "Highway at night" },
  opsDash:       { local: "/images/ops-dash.jpg",       art: "ops",      label: "Operations dashboard" },
  safetyOps:     { local: "/images/safety-ops.jpg",     art: "safety",   label: "Safety operations" },
  fleetAerial:   { local: "/images/fleet-aerial.jpg",   art: "aerial",   label: "Fleet operations" },
  truckMountain: { local: "/images/truck-mountain.jpg", art: "mountain", label: "Long-haul routes" },
  truckDesert:   { local: "/images/truck-desert.jpg",   art: "desert",   label: "Coast to coast" },
};

// ---- Reusable illustrated semi truck (side view) ----
function TruckSide({ x = 400, y = 360, scale = 1, tint = "#22d3ee", body = "#eaf6fc" }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="-110" cy="46" rx="250" ry="12" fill="#000" opacity="0.35" />
      <rect x="-330" y="-150" width="250" height="118" rx="10" fill={body} />
      <rect x="-330" y="-150" width="250" height="16" rx="8" fill="#ffffff" opacity="0.55" />
      <rect x="-322" y="-96" width="234" height="3" fill="#c3dbe8" opacity="0.8" />
      <rect x="-330" y="-40" width="250" height="10" fill="#0d1330" />
      <path d="M -262 -118 L -238 -72 L -222 -100 L -202 -72 L -190 -118" fill="none" stroke={tint} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <rect x="-86" y="-48" width="34" height="20" fill="#0d1330" />
      <rect x="-70" y="-152" width="9" height="124" rx="4" fill="#0d1330" />
      <path d="M -58 -28 L -58 -130 Q -58 -142 -46 -142 L -4 -142 Q 20 -142 30 -119 L 52 -70 Q 58 -58 58 -46 L 58 -28 Z" fill={tint} />
      <path d="M -58 -68 L 58 -68 L 58 -28 L -58 -28 Z" fill="#0891b2" opacity="0.5" />
      <path d="M -2 -130 Q 13 -130 21 -111 L 33 -84 L -2 -84 Z" fill="#0b1023" />
      <line x1="-16" y1="-126" x2="-16" y2="-34" stroke="#0b1023" strokeWidth="3" opacity="0.45" />
      <rect x="-44" y="-84" width="17" height="5" rx="2.5" fill="#0b1023" opacity="0.55" />
      <rect x="50" y="-60" width="9" height="13" rx="3" fill="#fff3bf" />
      <rect x="-60" y="-30" width="122" height="11" rx="5.5" fill="#0d1330" />
      {[-292, -226, -28, 28].map((wx) => (
        <g key={wx}>
          <circle cx={wx} cy="20" r="26" fill="#0b1023" stroke="#1e2a55" strokeWidth="4" />
          <circle cx={wx} cy="20" r="10" fill="#233461" />
          <circle cx={wx} cy="20" r="4" fill={tint} />
        </g>
      ))}
    </g>
  );
}

const Star = ({ x, y, r, d = 0 }) => (
  <circle className="nv-tw" style={{ animationDelay: `${d}s` }} cx={x} cy={y} r={r} fill="#cdeffb" />
);

function Road({ y = 404, dash = true }) {
  return (
    <g>
      <rect x="0" y={y} width="800" height={500 - y} fill="#0d1330" />
      <rect x="0" y={y} width="800" height="4" fill="#1e2a55" />
      {dash ? (
        <line x1="0" y1={y + 42} x2="800" y2={y + 42} stroke="#67e8f9" strokeWidth="4" strokeDasharray="30 36" className="nv-svg-dash" opacity="0.65" />
      ) : null}
    </g>
  );
}

function SceneSvg({ uid, label, className, top = "#070A13", bottom = "#101a44", children }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} className={className} style={{ display: "block" }}>
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={bottom} />
        </linearGradient>
        <radialGradient id={`glow-${uid}`}>
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#sky-${uid})`} />
      {children}
    </svg>
  );
}

// ---- The eight scenes ----
function HeroArt({ className }) {
  return (
    <SceneSvg uid="hero" label="Illustration of a Noventra semi truck on a highway at dusk" className={className}>
      <circle cx="600" cy="170" r="150" fill="url(#glow-hero)" />
      <circle cx="600" cy="170" r="42" fill="#67e8f9" opacity="0.85" />
      <Star x={90} y={60} r={2} /> <Star x={200} y={110} r={1.6} d={0.6} /> <Star x={320} y={50} r={2.2} d={1.2} />
      <Star x={470} y={90} r={1.5} d={1.8} /> <Star x={730} y={60} r={1.8} d={2.4} /> <Star x={160} y={170} r={1.4} d={0.9} />
      <path d="M0 340 L120 300 L260 335 L400 295 L560 330 L700 302 L800 325 L800 420 L0 420 Z" fill="#101a44" opacity="0.9" />
      <path d="M0 375 L180 340 L340 372 L520 338 L680 368 L800 348 L800 430 L0 430 Z" fill="#0d1330" />
      <Road />
      <g stroke="#67e8f9" strokeLinecap="round" opacity="0.5">
        <line x1="30" y1="270" x2="130" y2="270" strokeWidth="5" />
        <line x1="10" y1="300" x2="90" y2="300" strokeWidth="4" />
        <line x1="55" y1="330" x2="175" y2="330" strokeWidth="5" />
      </g>
      <TruckSide x={430} y={358} scale={1.12} />
    </SceneSvg>
  );
}

function TruckCloseArt({ className }) {
  return (
    <SceneSvg uid="close" label="Close-up illustration of a Noventra semi truck" className={className} top="#101a44" bottom="#070A13">
      <circle cx="240" cy="140" r="180" fill="url(#glow-close)" />
      <Star x={640} y={70} r={2} /> <Star x={700} y={140} r={1.5} d={1} /> <Star x={560} y={50} r={1.7} d={2} />
      <Road y={410} />
      <TruckSide x={520} y={340} scale={1.75} />
    </SceneSvg>
  );
}

function HighwayNightArt({ className }) {
  return (
    <SceneSvg uid="night" label="Illustration of a semi truck driving the highway at night" className={className} top="#05070f" bottom="#0b1023">
      <circle cx="670" cy="90" r="34" fill="#e8f4fb" opacity="0.9" />
      <circle cx="658" cy="82" r="30" fill="#05070f" />
      <Star x={80} y={50} r={2} /> <Star x={150} y={120} r={1.5} d={0.6} /> <Star x={260} y={70} r={2} d={1.2} />
      <Star x={360} y={140} r={1.4} d={1.8} /> <Star x={450} y={60} r={1.8} d={2.4} /> <Star x={540} y={130} r={1.5} d={0.3} />
      <Star x={90} y={200} r={1.3} d={0.9} /> <Star x={300} y={210} r={1.5} d={1.5} /> <Star x={500} y={220} r={1.2} d={2.1} />
      <path d="M0 330 L60 330 L60 300 L100 300 L100 330 L150 330 L150 285 L185 285 L185 330 L250 330 L250 305 L300 305 L300 330 L800 330 L800 420 L0 420 Z" fill="#0d1330" opacity="0.85" />
      <g fill="#67e8f9" opacity="0.5">
        <rect x="66" y="306" width="5" height="5" /> <rect x="80" y="306" width="5" height="5" />
        <rect x="158" y="292" width="5" height="5" /> <rect x="170" y="304" width="5" height="5" />
        <rect x="258" y="311" width="5" height="5" />
      </g>
      <Road />
      <g strokeLinecap="round">
        <line x1="80" y1="470" x2="300" y2="470" stroke="#67e8f9" strokeWidth="6" opacity="0.55" />
        <line x1="140" y1="484" x2="380" y2="484" stroke="#6366f1" strokeWidth="5" opacity="0.5" />
        <line x1="520" y1="476" x2="760" y2="476" stroke="#67e8f9" strokeWidth="5" opacity="0.35" />
      </g>
      <polygon points="512,308 800,268 800,360 512,332" fill="#fff3bf" opacity="0.10" />
      <TruckSide x={460} y={358} scale={1.05} tint="#155e75" body="#22304f" />
    </SceneSvg>
  );
}

function OpsDashArt({ className }) {
  return (
    <SceneSvg uid="ops" label="Illustration of a fleet operations analytics dashboard" className={className} bottom="#0c1236">
      {Array.from({ length: 96 }).map((_, i) => (
        <circle key={i} cx={40 + (i % 16) * 48} cy={40 + Math.floor(i / 16) * 76} r="1.6" fill="#ffffff" opacity="0.08" />
      ))}
      <circle cx="680" cy="80" r="130" fill="url(#glow-ops)" />
      <g>
        <rect x="70" y="90" width="300" height="190" rx="18" fill="#0d1330" stroke="#233461" strokeWidth="2" />
        <rect x="94" y="116" width="90" height="10" rx="5" fill="#233461" />
        <polyline points="94,236 140,208 186,222 232,182 278,166 324,140" fill="none" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="324" cy="140" r="7" fill="#67e8f9" />
      </g>
      <g>
        <rect x="410" y="140" width="240" height="180" rx="18" fill="#0d1330" stroke="#233461" strokeWidth="2" />
        <rect x="434" y="164" width="70" height="9" rx="4.5" fill="#233461" />
        <rect x="434" y="252" width="26" height="48" rx="6" fill="#67e8f9" opacity="0.5" />
        <rect x="472" y="232" width="26" height="68" rx="6" fill="#67e8f9" opacity="0.65" />
        <rect x="510" y="212" width="26" height="88" rx="6" fill="#67e8f9" opacity="0.8" />
        <rect x="548" y="190" width="26" height="110" rx="6" fill="#67e8f9" />
      </g>
      <g>
        <rect x="170" y="316" width="230" height="130" rx="18" fill="#0d1330" stroke="#233461" strokeWidth="2" />
        <circle cx="240" cy="381" r="38" fill="none" stroke="#233461" strokeWidth="11" />
        <circle cx="240" cy="381" r="38" fill="none" stroke="#67e8f9" strokeWidth="11" strokeLinecap="round" strokeDasharray="205 239" transform="rotate(-90 240 381)" />
        <rect x="300" y="356" width="76" height="9" rx="4.5" fill="#233461" />
        <rect x="300" y="378" width="56" height="9" rx="4.5" fill="#233461" />
        <rect x="300" y="400" width="66" height="9" rx="4.5" fill="#67e8f9" opacity="0.6" />
      </g>
      <g>
        <rect x="470" y="352" width="200" height="94" rx="16" fill="#0d1330" stroke="#233461" strokeWidth="2" />
        <circle cx="506" cy="399" r="16" fill="#67e8f9" opacity="0.85" />
        <path d="M 499 399 L 504 405 L 514 392" fill="none" stroke="#0b1023" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="536" y="384" width="106" height="9" rx="4.5" fill="#233461" />
        <rect x="536" y="404" width="76" height="9" rx="4.5" fill="#233461" />
      </g>
    </SceneSvg>
  );
}

function SafetyOpsArt({ className }) {
  return (
    <SceneSvg uid="safety" label="Illustration of a safety shield protecting a fleet truck" className={className}>
      <circle cx="250" cy="210" r="170" fill="url(#glow-safety)" />
      <circle className="nv-ring" cx="250" cy="210" r="120" fill="none" stroke="#67e8f9" strokeWidth="2" opacity="0.4" />
      <circle className="nv-ring" style={{ animationDelay: "1.4s" }} cx="250" cy="210" r="120" fill="none" stroke="#67e8f9" strokeWidth="2" opacity="0.4" />
      <path d="M250 96 L354 134 L354 226 Q354 310 250 352 Q146 310 146 226 L146 134 Z" fill="#0d1330" stroke="#67e8f9" strokeWidth="6" />
      <path d="M250 116 L336 148 L336 224 Q336 294 250 330 Q164 294 164 224 L164 148 Z" fill="#101a44" />
      <path d="M206 222 L238 256 L300 182" fill="none" stroke="#67e8f9" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <Road y={430} dash={false} />
      <TruckSide x={610} y={392} scale={0.82} />
    </SceneSvg>
  );
}

function FleetAerialArt({ className }) {
  const hot = new Set(["1-1", "1-4", "2-2"]);
  return (
    <SceneSvg uid="aerial" label="Aerial illustration of a fleet yard with trucks" className={className} top="#070A13" bottom="#070A13">
      <rect x="30" y="40" width="740" height="330" rx="14" fill="#0d1330" />
      <g stroke="#2b3a6b" strokeWidth="2" opacity="0.7">
        <line x1="55" y1="150" x2="745" y2="150" />
        <line x1="55" y1="260" x2="745" y2="260" />
      </g>
      {Array.from({ length: 18 }).map((_, i) => {
        const r = Math.floor(i / 6);
        const c = i % 6;
        const x = 70 + c * 120;
        const y = 70 + r * 110;
        const isHot = hot.has(`${r}-${c}`);
        return (
          <g key={i}>
            <rect x={x} y={y} width="86" height="34" rx="6" fill={isHot ? "#67e8f9" : "#233461"} opacity={isHot ? 0.9 : 1} />
            <rect x={x + 86} y={y + 5} width="16" height="24" rx="4" fill="#0d1330" stroke="#2b3a6b" strokeWidth="2" />
          </g>
        );
      })}
      <rect x="30" y="400" width="740" height="60" rx="10" fill="#101a44" />
      <line x1="50" y1="430" x2="750" y2="430" stroke="#67e8f9" strokeWidth="4" strokeDasharray="30 36" className="nv-svg-dash" opacity="0.7" />
      <g transform="translate(560 430) scale(0.5)">
        <TruckSide x={0} y={0} scale={1} />
      </g>
    </SceneSvg>
  );
}

function TruckMountainArt({ className }) {
  return (
    <SceneSvg uid="mountain" label="Illustration of a semi truck on a mountain highway" className={className}>
      <circle cx="170" cy="130" r="130" fill="url(#glow-mountain)" />
      <Star x={430} y={60} r={1.8} /> <Star x={560} y={90} r={1.5} d={0.8} /> <Star x={660} y={50} r={2} d={1.6} /> <Star x={740} y={140} r={1.5} d={2.2} />
      <path d="M60 400 L240 160 L330 290 L420 190 L560 400 Z" fill="#101a44" />
      <path d="M240 160 L282 216 L262 214 L240 236 L221 212 L204 218 Z" fill="#e8f4fb" opacity="0.85" />
      <path d="M340 400 L520 120 L700 400 Z" fill="#0d1330" />
      <path d="M520 120 L556 176 L536 172 L520 196 L502 170 L486 178 Z" fill="#e8f4fb" opacity="0.9" />
      <path d="M560 400 L680 250 L800 400 Z" fill="#101a44" opacity="0.8" />
      <Road />
      <TruckSide x={400} y={358} scale={1.0} />
    </SceneSvg>
  );
}

function TruckDesertArt({ className }) {
  return (
    <SceneSvg uid="desert" label="Illustration of a semi truck crossing the desert" className={className} top="#0c1236">
      <circle cx="560" cy="220" r="170" fill="url(#glow-desert)" />
      <circle cx="560" cy="220" r="60" fill="#67e8f9" opacity="0.75" />
      <Star x={120} y={70} r={2} /> <Star x={240} y={50} r={1.5} d={1} /> <Star x={700} y={60} r={1.8} d={2} />
      <path d="M0 350 Q200 300 420 348 T800 340 L800 430 L0 430 Z" fill="#101a44" />
      <path d="M0 385 Q260 340 520 386 T800 378 L800 440 L0 440 Z" fill="#0d1330" />
      <g stroke="#67e8f9" opacity="0.25" strokeWidth="3" strokeLinecap="round">
        <line x1="120" y1="330" x2="180" y2="330" /> <line x1="620" y1="318" x2="690" y2="318" />
      </g>
      <Road />
      <TruckSide x={390} y={358} scale={1.05} />
    </SceneSvg>
  );
}

const ART = {
  hero: HeroArt,
  close: TruckCloseArt,
  night: HighwayNightArt,
  ops: OpsDashArt,
  safety: SafetyOpsArt,
  aerial: FleetAerialArt,
  mountain: TruckMountainArt,
  desert: TruckDesertArt,
};

// Smart image: shows the built-in illustration instantly; silently upgrades to a
// real photo if a matching file exists in /public/images/. Never a broken frame.
function SmartImg({ image, alt, className = "", eager = false }) {
  const [hasLocal, setHasLocal] = React.useState(false);
  React.useEffect(() => {
    if (!image.local) return;
    const probe = new Image();
    probe.onload = () => setHasLocal(true);
    probe.src = image.local;
  }, [image.local]);
  if (hasLocal) {
    return <img src={image.local} alt={alt} className={className} loading={eager ? "eager" : "lazy"} />;
  }
  const Art = ART[image.art];
  return <Art className={className} />;
}

const DATA = {
  brandName: "Noventra Group",
  tagline: "Modern solutions for safer, smarter trucking operations.",
  heroText:
    "Noventra Group helps trucking companies run safer, smoother, and more profitably—through operational support, insurance guidance, finance solutions, and AI-powered products.",
  primaryCta: { label: "Request a Quote", href: "#contact" },
  secondaryCta: { label: "Explore Services", href: "#services" },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Book a Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { label: "Industry focus", value: "Trucking" },
    { label: "Divisions", value: "4" },
    { label: "Mindset", value: "Ops-first" },
    { label: "Tools", value: "AI + Playbooks" },
  ],
  services: [
    {
      title: "Noventra Trucking",
      description:
        "Operational support for trucking businesses—process improvements, compliance-focused guidance, and hands-on help to keep fleets moving.",
      bullets: [
        "Safety support & compliance guidance",
        "FMCSA audit readiness",
        "Operations process improvement",
      ],
    },
    {
      title: "Noventra Insurance",
      description:
        "Insurance guidance and support to help you make informed coverage decisions and reduce risk exposure.",
      bullets: [
        "Coverage review & recommendations",
        "Risk reduction approach",
        "Claims-awareness best practices",
      ],
    },
    {
      title: "Noventra Finance",
      description:
        "Finance consulting that supports stronger planning, cleaner reporting, and better decision-making.",
      bullets: [
        "Budgeting & planning support",
        "Expense structure insights",
        "Operational finance dashboards",
      ],
    },
    {
      title: "Noventra AI",
      description:
        "AI products and automations designed for fleet operations—visibility, safety, recruiting, and performance workflows.",
      bullets: ["Workflow automation", "Operations intelligence", "Tools for dispatch & safety"],
    },
  ],
  products: [
    {
      title: "Safe24",
      badge: "Available",
      description: "Telematic camera integration to improve safety visibility and operational control.",
      points: [
        "Improved incident visibility",
        "Faster coaching feedback loops",
        "Better safety posture over time",
      ],
    },
    {
      title: "NovaFleet",
      badge: "Upcoming",
      description: "Fleet performance and workflow tools designed to simplify day-to-day operations.",
      points: ["Operations overview", "Driver workflows", "Performance insights"],
    },
    {
      title: "Nova Safety",
      badge: "Upcoming",
      description: "Safety management tools to support compliance processes and reduce preventable risk.",
      points: ["Compliance workflows", "Coaching tools", "Audit readiness"],
    },
    {
      title: "Nova Recruit",
      badge: "Upcoming",
      description: "Recruiting support tools to streamline hiring and keep your driver pipeline healthy.",
      points: ["Pipeline visibility", "Faster screening", "Hiring consistency"],
    },
  ],
  pricing: [
    { item: "Safe24", detail: "Get a quote" },
    { item: "NovaFleet", detail: "Upcoming" },
    { item: "Nova Safety", detail: "Upcoming" },
    { item: "Nova Recruit", detail: "Upcoming" },
  ],
  about: {
    title: "About Noventra Group",
    paragraphs: [
      "Noventra Group is a multi-division consulting and solutions company focused on the trucking industry and adjacent services.",
      "We combine operational know-how with finance, insurance guidance, and AI-driven tools to help companies improve safety, reduce friction, and scale with confidence.",
    ],
  },
  testimonials: [
    {
      quote:
        "Noventra helped us tighten our safety workflow and standardize processes. The team understands trucking operations and speaks our language.",
      name: "Operations Manager",
      company: "Mid-size Carrier",
    },
    {
      quote:
        "Clear guidance, quick turnaround, and practical recommendations we could implement immediately. It improved our day-to-day execution.",
      name: "Owner",
      company: "Regional Fleet",
    },
    {
      quote:
        "The Safe24 approach gave us better visibility and a stronger coaching loop. We're excited for the upcoming Nova tools.",
      name: "Safety Director",
      company: "Transportation Company",
    },
  ],
  contact: {
    title: "Contact",
    subtitle: "Tell us what you need and we'll respond ASAP (typically within 1 business day).",
    phone: "585-360-5170",
    email: "info@noventragroupinc.com",
    address: "5830 E 2ND ST, STE 7000 #27843, CASPER, WY 82609",
  },
  footerNote: `© ${new Date().getFullYear()} Noventra Group. All rights reserved.`,
};

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

// Background animation styles (drifting gradient blobs + moving highway lines).
// Respects prefers-reduced-motion: animations switch off for users who opt out.
function AnimationStyles() {
  return (
    <style>{`
      @keyframes nv-drift-a {
        0%, 100% { transform: translate(-50%, 0) scale(1); }
        50%      { transform: translate(-42%, 26px) scale(1.08); }
      }
      @keyframes nv-drift-b {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50%      { transform: translate(-40px, -30px) scale(1.12); }
      }
      @keyframes nv-drift-c {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: .8; }
        50%      { transform: translate(46px, -22px) scale(1.06); opacity: 1; }
      }
      @keyframes nv-road-move {
        from { background-position-x: 0; }
        to   { background-position-x: -160px; }
      }
      @keyframes nv-float {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-8px); }
      }
      .nv-blob-a { animation: nv-drift-a 16s ease-in-out infinite; }
      .nv-blob-b { animation: nv-drift-b 20s ease-in-out infinite; }
      .nv-blob-c { animation: nv-drift-c 24s ease-in-out infinite; }
      .nv-float  { animation: nv-float 7s ease-in-out infinite; }
      .nv-road {
        height: 3px;
        background-image: linear-gradient(90deg, rgba(103,232,249,.45) 0 56px, transparent 56px 160px);
        background-size: 160px 3px;
        background-repeat: repeat-x;
        animation: nv-road-move 3.5s linear infinite;
      }
      .nv-road--slow { opacity: .4; animation-duration: 6s; }
      /* Slow cinematic zoom on the hero photo */
      @keyframes nv-kenburns {
        0%   { transform: scale(1) translate(0, 0); }
        100% { transform: scale(1.12) translate(-1.5%, -1%); }
      }
      .nv-kenburns { animation: nv-kenburns 24s ease-in-out infinite alternate; will-change: transform; }

      /* Scroll-triggered reveal: cards fade & rise as they enter the viewport */
      .nv-reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s ease, transform .7s ease; }
      .nv-reveal.nv-in { opacity: 1; transform: none; }

      /* Light sweep across the primary buttons */
      .nv-shine { position: relative; overflow: hidden; }
      .nv-shine::after {
        content: ""; position: absolute; top: 0; bottom: 0; left: -80%; width: 45%;
        background: linear-gradient(105deg, transparent, rgba(255,255,255,.5), transparent);
        transform: skewX(-20deg);
        animation: nv-shine 5s ease-in-out infinite;
      }
      @keyframes nv-shine { 0% { left: -80%; } 55% { left: 130%; } 100% { left: 130%; } }

      /* Charts animate when their card scrolls into view */
      .nv-reveal .nv-line { stroke-dasharray: 1; stroke-dashoffset: 1; }
      .nv-reveal.nv-in .nv-line { animation: nv-draw 1.8s .25s ease forwards; }
      @keyframes nv-draw { to { stroke-dashoffset: 0; } }
      .nv-reveal .nv-line-fill { opacity: 0; }
      .nv-reveal.nv-in .nv-line-fill { animation: nv-fadein 1s 1.4s ease forwards; }
      @keyframes nv-fadein { to { opacity: 1; } }
      .nv-reveal .nv-bar { transform-box: fill-box; transform-origin: bottom; transform: scaleY(0); }
      .nv-reveal.nv-in .nv-bar { animation: nv-rise .9s ease forwards; }
      @keyframes nv-rise { to { transform: scaleY(1); } }

      /* Illustration life: moving lane dashes, twinkling stars, radar rings */
      .nv-svg-dash { animation: nv-dashmove 2.4s linear infinite; }
      @keyframes nv-dashmove { to { stroke-dashoffset: -132; } }
      .nv-tw { animation: nv-tw 3s ease-in-out infinite alternate; }
      @keyframes nv-tw { from { opacity: .15; } to { opacity: .9; } }
      .nv-ring { transform-box: fill-box; transform-origin: center; animation: nv-ringpulse 3.2s ease-out infinite; }
      @keyframes nv-ringpulse { 0% { transform: scale(.55); opacity: .8; } 100% { transform: scale(1.3); opacity: 0; } }

      @media (prefers-reduced-motion: reduce) {
        .nv-blob-a, .nv-blob-b, .nv-blob-c, .nv-float, .nv-road, .nv-road--slow,
        .nv-kenburns, .nv-shine::after, .nv-svg-dash, .nv-tw, .nv-ring {
          animation: none;
        }
        .nv-reveal { opacity: 1; transform: none; transition: none; }
        .nv-reveal .nv-line { stroke-dashoffset: 0; }
        .nv-reveal .nv-line-fill { opacity: 1; }
        .nv-reveal .nv-bar { transform: scaleY(1); }
      }

      /* ---------- Light theme ----------
         Activated by the sun/moon toggle in the header, which puts .nv-light
         on <html>. The markup keeps its dark-palette utility classes; the
         rules below remap them, so both themes live in one set of markup. */
      html.nv-light body { background-color: #f2f6fb; }

      html.nv-light .bg-\\[\\#070A13\\] { background-color: #f2f6fb; }
      html.nv-light .bg-\\[\\#070A13\\]\\/70 { background-color: rgba(242,246,251,.8); }
      html.nv-light .bg-\\[\\#070A13\\]\\/65 { background-color: rgba(255,255,255,.78); }
      html.nv-light .bg-\\[\\#070A13\\]\\/60 { background-color: rgba(255,255,255,.75); }
      html.nv-light .bg-\\[\\#0B1023\\] { background-color: #e9eef7; }

      html.nv-light .bg-white\\/5 { background-color: rgba(11,16,35,.045); }
      html.nv-light .bg-white\\/10 { background-color: rgba(11,16,35,.08); }
      html.nv-light .hover\\:bg-white\\/10:hover { background-color: rgba(11,16,35,.09); }
      html.nv-light .hover\\:bg-white\\/\\[0\\.07\\]:hover { background-color: rgba(11,16,35,.07); }
      html.nv-light .disabled\\:hover\\:bg-white\\/5:hover:disabled,
      html.nv-light .disabled\\:hover\\:bg-white\\/5:disabled:hover { background-color: rgba(11,16,35,.045); }

      html.nv-light .text-white { color: #0b1023; }
      html.nv-light .text-white\\/90 { color: rgba(11,16,35,.92); }
      html.nv-light .text-white\\/85 { color: rgba(11,16,35,.88); }
      html.nv-light .text-white\\/80 { color: rgba(11,16,35,.84); }
      html.nv-light .text-white\\/70 { color: rgba(11,16,35,.74); }
      html.nv-light .text-white\\/60 { color: rgba(11,16,35,.64); }
      html.nv-light .text-white\\/50 { color: rgba(11,16,35,.55); }
      html.nv-light .text-white\\/40 { color: rgba(11,16,35,.45); }
      html.nv-light .text-white\\/20 { color: rgba(11,16,35,.25); }
      html.nv-light .hover\\:text-white:hover { color: #0b1023; }
      html.nv-light .placeholder\\:text-white\\/40::placeholder { color: rgba(11,16,35,.45); }

      html.nv-light .text-cyan-300, html.nv-light .text-cyan-200 { color: #0e7490; }
      html.nv-light .text-cyan-300\\/90 { color: rgba(14,116,144,.92); }
      html.nv-light .hover\\:text-cyan-300:hover { color: #0e7490; }

      html.nv-light .border-white\\/10 { border-color: rgba(11,16,35,.12); }
      html.nv-light .border-white\\/20,
      html.nv-light .hover\\:border-white\\/20:hover { border-color: rgba(11,16,35,.22); }
      html.nv-light .ring-white\\/10 { --tw-ring-color: rgba(11,16,35,.12); }

      html.nv-light .border-cyan-300 { border-color: #0891b2; }
      html.nv-light .border-cyan-300\\/50,
      html.nv-light .focus\\:border-cyan-300\\/50:focus { border-color: rgba(8,145,178,.55); }
      html.nv-light .border-cyan-300\\/40,
      html.nv-light .hover\\:border-cyan-300\\/40:hover { border-color: rgba(8,145,178,.45); }
      html.nv-light .ring-cyan-300\\/20 { --tw-ring-color: rgba(8,145,178,.25); }
      html.nv-light .ring-cyan-300\\/30,
      html.nv-light .focus\\:ring-cyan-300\\/30:focus { --tw-ring-color: rgba(8,145,178,.35); }
      html.nv-light .ring-cyan-300\\/60,
      html.nv-light .focus-visible\\:ring-cyan-300\\/60:focus-visible { --tw-ring-color: rgba(8,145,178,.6); }
      html.nv-light .focus-visible\\:ring-offset-\\[\\#070A13\\]:focus-visible { --tw-ring-offset-color: #f2f6fb; }

      html.nv-light .from-\\[\\#070A13\\]\\/70 { --tw-gradient-from: rgba(242,246,251,.85); }
      html.nv-light .from-\\[\\#070A13\\]\\/80 { --tw-gradient-from: rgba(242,246,251,.9); }
      html.nv-light .via-\\[\\#070A13\\]\\/20 { --tw-gradient-stops: var(--tw-gradient-from), rgba(242,246,251,.25), var(--tw-gradient-to); }
      html.nv-light .to-\\[\\#0B1023\\] { --tw-gradient-to: #e9eef7; }

      /* The navy logo no longer needs the white inversion on a light page */
      html.nv-light .brightness-0.invert { filter: none; }

      /* Charts: darker cyan + dark gridlines for contrast on light cards */
      html.nv-light .nv-line { stroke: #0891b2; }
      html.nv-light .nv-bar { fill: rgba(8,145,178,.55); stroke: rgba(8,145,178,.85); }
      html.nv-light [stroke="rgba(255,255,255,0.10)"] { stroke: rgba(11,16,35,.12); }
      html.nv-light [stroke="rgb(103,232,249)"] { stroke: #0891b2; }
      html.nv-light [fill="rgb(103,232,249)"] { fill: #0891b2; }

      /* Decorative pieces tuned down for the light background */
      html.nv-light .nv-blob-a, html.nv-light .nv-blob-b, html.nv-light .nv-blob-c { opacity: .55; }
      html.nv-light .nv-road { background-image: linear-gradient(90deg, rgba(8,145,178,.4) 0 56px, transparent 56px 160px); }
      html.nv-light .nv-shine::after { background: linear-gradient(105deg, transparent, rgba(255,255,255,.7), transparent); }
    `}</style>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function Gradient() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="nv-blob-a pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="nv-blob-b pointer-events-none absolute top-48 right-[-160px] h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="nv-blob-c pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-3xl" />
      {/* Animated highway lines along the bottom of the hero */}
      <div className="pointer-events-none absolute bottom-10 left-0 right-0">
        <div className="nv-road" />
        <div className="nv-road nv-road--slow mt-3" />
      </div>
    </div>
  );
}

// Subtle drifting glow reused behind the darker sections
function SectionGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="nv-blob-b absolute -top-32 right-[-140px] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="nv-blob-c absolute bottom-[-160px] left-[-140px] h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A13]";
  const styles =
    variant === "primary"
      ? "nv-shine bg-cyan-300 text-black hover:opacity-90 active:opacity-80"
      : "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-200 hover:border-white/20 hover:bg-white/[0.07] ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children, tone = "neutral" }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold";
  const styles = tone === "good" ? "bg-cyan-300 text-black" : "bg-white/10 text-white";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div>
      {kicker ? (
        <div className="text-xs font-semibold tracking-wider uppercase text-cyan-300/90">{kicker}</div>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-2 text-sm text-white/70">{desc}</p> : null}
    </div>
  );
}

function MiniLogoRow() {
  const logos = ["FleetOne", "RoadLink", "AxleOps", "NorthStar", "BlueRoute"];
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {logos.map((l) => (
        <div
          key={l}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
        >
          {l}
        </div>
      ))}
    </div>
  );
}

// --- Modern charts (SVG, no external libs) ---
function LineChart({ data = [78, 82, 80, 86, 89, 92, 94] }) {
  const w = 320;
  const h = 120;
  const pad = 10;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const xStep = (w - pad * 2) / (data.length - 1);
  const scaleY = (v) => {
    if (max === min) return h / 2;
    return pad + (h - pad * 2) * (1 - (v - min) / (max - min));
  };
  const d = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${pad + i * xStep} ${scaleY(v)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Line chart showing an upward performance trend">
      <defs>
        <linearGradient id="lc" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(103,232,249)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="rgb(103,232,249)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.2, 0.5, 0.8].map((t) => (
        <line
          key={t}
          x1={pad}
          x2={w - pad}
          y1={pad + (h - pad * 2) * t}
          y2={pad + (h - pad * 2) * t}
          stroke="rgba(255,255,255,0.10)"
        />
      ))}
      <path
        className="nv-line-fill"
        d={`${d} L ${pad + (data.length - 1) * xStep} ${h - pad} L ${pad} ${h - pad} Z`}
        fill="url(#lc)"
      />
      <path className="nv-line" pathLength={1} d={d} fill="none" stroke="rgb(103,232,249)" strokeWidth={2.5} />
      {data.map((v, i) => (
        <circle key={i} cx={pad + i * xStep} cy={scaleY(v)} r={2.5} fill="rgb(103,232,249)" />
      ))}
    </svg>
  );
}

function BarChart({ data = [12, 10, 9, 7, 6, 5] }) {
  const w = 320;
  const h = 120;
  const pad = 10;
  const max = Math.max(...data);
  const bw = (w - pad * 2) / data.length;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Bar chart showing incidents declining month over month">
      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1={pad}
          x2={w - pad}
          y1={pad + (h - pad * 2) * t}
          y2={pad + (h - pad * 2) * t}
          stroke="rgba(255,255,255,0.10)"
        />
      ))}
      {data.map((v, i) => {
        const bh = ((h - pad * 2) * v) / max;
        return (
          <rect
            key={i}
            className="nv-bar"
            style={{ animationDelay: `${i * 110}ms` }}
            x={pad + i * bw + bw * 0.18}
            y={h - pad - bh}
            width={bw * 0.64}
            height={bh}
            rx={8}
            fill="rgba(103,232,249,0.55)"
            stroke="rgba(103,232,249,0.85)"
            strokeWidth={1}
          />
        );
      })}
    </svg>
  );
}

function Donut({ value = 86 }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="h-24 w-24" role="img" aria-label={`Donut chart showing ${pct} percent utilization`}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth={10} />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="rgb(103,232,249)"
          strokeWidth={10}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div>
        <div className="text-2xl font-bold text-white">{pct}%</div>
        <div className="text-xs text-white/60">Utilization</div>
      </div>
    </div>
  );
}


// ---- Quick Demo scheduler: pick a date on the calendar, choose a time, book. ----
// Fully client-side. Confirming opens an email to Noventra with all details
// pre-filled. Swap the mailto for Calendly/Cal.com or your own API when ready.
const DEMO_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

// ---- Live demo scheduler: interactive calendar + time slots (no backend needed) ----
const DEMO_TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW_LABELS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function DemoScheduler() {
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const [cursor, setCursor] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [sent, setSent] = React.useState(false);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const canGoPrev = year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth());

  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isDisabled = (d) => {
    const date = new Date(year, month, d);
    const dow = date.getDay();
    return date < todayStart || dow === 0 || dow === 6; // past days & weekends
  };
  const isSelected = (d) =>
    selectedDate &&
    selectedDate.getFullYear() === year &&
    selectedDate.getMonth() === month &&
    selectedDate.getDate() === d;

  const pickDay = (d) => {
    if (isDisabled(d)) return;
    setSelectedDate(new Date(year, month, d));
    setSelectedTime(null);
    setSent(false);
  };

  const fmtDate = (date) =>
    date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  const confirm = (e) => {
    e.preventDefault();
    const f = e.target;
    if (!f.reportValidity() || !selectedDate || !selectedTime) return;
    const fd = new FormData(f);
    const subject = encodeURIComponent(
      `Demo request — ${fmtDate(selectedDate)} at ${selectedTime}`
    );
    const body = encodeURIComponent(
      `Requested demo slot: ${fmtDate(selectedDate)} at ${selectedTime} (my local time)\n\n` +
        `Name: ${fd.get("name") || ""}\n` +
        `Company: ${fd.get("company") || ""}\n` +
        `Email: ${fd.get("email") || ""}\n` +
        `Fleet size: ${fd.get("fleet") || "—"}\n\n` +
        `Interested in: ${fd.get("interest") || "—"}`
    );
    // Build a calendar invite (.ics) for the chosen slot and download it,
    // so the demo lands directly on the visitor's calendar.
    const slotHours = { "9:00 AM": 9, "10:00 AM": 10, "11:00 AM": 11, "1:00 PM": 13, "2:00 PM": 14, "3:00 PM": 15, "4:00 PM": 16 };
    const start = new Date(selectedDate);
    start.setHours(slotHours[selectedTime] ?? 10, 0, 0, 0);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    const stamp = (dt) =>
      `${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(2, "0")}${String(dt.getDate()).padStart(2, "0")}T` +
      `${String(dt.getHours()).padStart(2, "0")}${String(dt.getMinutes()).padStart(2, "0")}00`;
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Noventra Group//Demo Scheduler//EN",
      "BEGIN:VEVENT",
      `UID:noventra-demo-${Date.now()}@noventragroupinc.com`,
      `DTSTAMP:${stamp(new Date())}`,
      `DTSTART:${stamp(start)}`,
      `DTEND:${stamp(end)}`,
      "SUMMARY:Noventra Group — Product Demo",
      `DESCRIPTION:Demo walkthrough with Noventra Group (Safe24 + fleet solutions).\\nRequested by: ${fd.get("name") || ""} — ${fd.get("company") || ""}\\nContact: ${DATA.contact.phone} / ${DATA.contact.email}`,
      "LOCATION:Video call (link will be confirmed by email)",
      "STATUS:TENTATIVE",
      "BEGIN:VALARM",
      "TRIGGER:-PT15M",
      "ACTION:DISPLAY",
      "DESCRIPTION:Noventra Group demo in 15 minutes",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "noventra-demo.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);

    window.location.href = `mailto:${DATA.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {/* Calendar + time slots */}
      <Card>
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-white">Pick a day</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => canGoPrev && setCursor(new Date(year, month - 1, 1))}
              disabled={!canGoPrev}
              aria-label="Previous month"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
            >
              ‹
            </button>
            <div className="min-w-[130px] text-center text-sm font-semibold text-cyan-300">
              {MONTH_NAMES[month]} {year}
            </div>
            <button
              type="button"
              onClick={() => setCursor(new Date(year, month + 1, 1))}
              aria-label="Next month"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1 text-center">
          {DOW_LABELS.map((d) => (
            <div key={d} className="py-1 text-xs font-semibold uppercase tracking-wider text-white/40">
              {d}
            </div>
          ))}
          {cells.map((d, i) =>
            d === null ? (
              <div key={`b${i}`} />
            ) : (
              <button
                key={d}
                type="button"
                onClick={() => pickDay(d)}
                disabled={isDisabled(d)}
                aria-pressed={isSelected(d)}
                className={`flex h-10 items-center justify-center rounded-xl text-sm font-semibold transition ${
                  isSelected(d)
                    ? "bg-cyan-300 text-black"
                    : isDisabled(d)
                    ? "text-white/20"
                    : "text-white/85 hover:bg-white/10"
                }`}
              >
                {d}
              </button>
            )
          )}
        </div>

        <div className="mt-5 border-t border-white/10 pt-5">
          <div className="text-sm font-semibold text-white">
            {selectedDate ? `Available times — ${fmtDate(selectedDate)}` : "Select a weekday to see times"}
          </div>
          {selectedDate ? (
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {DEMO_TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => { setSelectedTime(t); setSent(false); }}
                  aria-pressed={selectedTime === t}
                  className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition ${
                    selectedTime === t
                      ? "border-cyan-300 bg-cyan-300 text-black"
                      : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </Card>

      {/* Details + confirmation */}
      <Card className="flex flex-col">
        <div className="text-sm font-semibold text-white">Your details</div>
        <p className="mt-2 text-sm text-white/70">
          A 20-minute walkthrough of Safe24 and the Noventra approach — tailored to your fleet.
        </p>
        <form className="mt-5 grid flex-1 gap-3" onSubmit={confirm}>
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="name" required autoComplete="name" placeholder="Full name"
              className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30" />
            <input name="company" placeholder="Company"
              className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="email" type="email" required autoComplete="email" placeholder="Work email"
              className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30" />
            <select name="fleet" defaultValue=""
              className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30">
              <option value="" disabled>Fleet size</option>
              <option value="1-5 trucks" className="text-black">1–5 trucks</option>
              <option value="6-25 trucks" className="text-black">6–25 trucks</option>
              <option value="26-100 trucks" className="text-black">26–100 trucks</option>
              <option value="100+ trucks" className="text-black">100+ trucks</option>
            </select>
          </div>
          <input name="interest" placeholder="What would you like to see? (Safe24, safety workflows, finance...)"
            className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30" />

          <div className="mt-auto space-y-3 pt-2">
            <div className={`rounded-xl border px-4 py-3 text-sm ${
              selectedDate && selectedTime
                ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200"
                : "border-white/10 bg-white/5 text-white/50"
            }`}>
              {selectedDate && selectedTime
                ? `Selected: ${fmtDate(selectedDate)} at ${selectedTime}`
                : "Pick a day and time on the calendar to continue"}
            </div>
            <button
              type="submit"
              disabled={!selectedDate || !selectedTime}
              className="h-11 w-full rounded-2xl bg-cyan-300 px-5 text-sm font-semibold text-black transition hover:opacity-90 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A13]"
            >
              Confirm demo request
            </button>
            {sent ? (
              <div className="rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-200">
                ✓ Booked! A calendar invite (noventra-demo.ics) was downloaded — open it to add the demo to your calendar. Your email app also opened with the request: hit send and we'll confirm within one business day.
              </div>
            ) : (
              <p className="text-xs text-white/50">Confirming downloads a calendar invite for your slot and opens your email app with the booking pre-filled. We reply within one business day.</p>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}

export default function NoventraGroupWebsiteModern() {
  // Theme: dark (brand default) or light. First visit follows the visitor's
  // system preference; the sun/moon toggle in the header overrides it and the
  // choice is remembered in localStorage.
  const [theme, setTheme] = React.useState(() => {
    try {
      const saved = window.localStorage.getItem("nv-theme");
      if (saved === "light" || saved === "dark") return saved;
      if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
    } catch (e) { /* private mode etc. — fall through to dark */ }
    return "dark";
  });
  React.useEffect(() => {
    document.documentElement.classList.toggle("nv-light", theme === "light");
    document.body.style.backgroundColor = theme === "light" ? "#f2f6fb" : "#070A13";
    try {
      window.localStorage.setItem("nv-theme", theme);
    } catch (e) { /* ignore */ }
  }, [theme]);

  // ✅ FIX for the "everything is white" issue:
  // All styling on this page uses Tailwind CSS classes. If Tailwind is not
  // installed in the project, the page renders unstyled (a white page).
  // This effect detects whether Tailwind is active and, if not, loads it
  // automatically from the official CDN — so the site looks right anywhere.
  React.useEffect(() => {
    const probe = document.createElement("div");
    probe.className = "hidden";
    document.body.appendChild(probe);
    const tailwindActive = window.getComputedStyle(probe).display === "none";
    document.body.removeChild(probe);

    if (!tailwindActive && !document.getElementById("tailwind-cdn")) {
      const script = document.createElement("script");
      script.id = "tailwind-cdn";
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
    // (The body background is managed by the theme effect above, so the page
    // keeps the right color even before Tailwind finishes loading.)
  }, []);

  // Smooth scrolling for the in-page anchor navigation
  React.useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  // Scroll-reveal: cards and image blocks fade in as they enter the viewport,
  // with a subtle stagger. Skipped entirely for users who prefer reduced motion.
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll("main .rounded-2xl, main .rounded-3xl"));
    els.forEach((el) => {
      el.classList.add("nv-reveal");
      const siblings = Array.from(el.parentElement.children).filter((c) =>
        c.classList.contains("nv-reveal")
      );
      const i = siblings.indexOf(el);
      if (i > 0) el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`;
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("nv-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Contact form → opens the visitor's email app with the message pre-filled.
  // Swap this for a POST to email, Google Sheets, or a CRM when ready.
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    const subject = encodeURIComponent(`Website request — ${fd.get("name") || "New inquiry"}`);
    const body = encodeURIComponent(
      `Full name: ${fd.get("name") || ""}\n` +
        `Phone or email: ${fd.get("contact") || ""}\n\n` +
        `${fd.get("message") || ""}`
    );
    window.location.href = `mailto:${DATA.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="min-h-screen bg-[#070A13] text-white antialiased"
      style={{
        minHeight: "100vh",
        backgroundColor: theme === "light" ? "#f2f6fb" : "#070A13",
        color: theme === "light" ? "#0b1023" : "#ffffff",
      }}
    >
      <AnimationStyles />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A13]/70 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a
              href="#top"
              className="flex items-center gap-3 font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 rounded-lg"
            >
              {/* brightness-0 invert renders the navy logo in white so it stays visible on the dark background */}
              <img src={LOGO_URL} alt="Noventra Group logo" className="h-9 w-9 object-contain brightness-0 invert" />
              <span>{DATA.brandName}</span>
            </a>
            <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
              {DATA.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </button>
              <Button href={DATA.primaryCta.href}>{DATA.primaryCta.label}</Button>
            </div>
          </div>
        </Container>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <Gradient />
          <Container>
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative">
                <div className="flex items-center gap-3">
                  <img src={LOGO_URL} alt="Noventra Group logo" className="h-10 w-10 object-contain brightness-0 invert" />
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                    Trucking • Insurance • Finance • AI
                  </div>
                </div>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">{DATA.tagline}</h1>
                <p className="mt-4 text-base leading-7 text-white/70">{DATA.heroText}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="#demo">Book a Demo</Button>
                  <Button href={DATA.primaryCta.href} variant="secondary">{DATA.primaryCta.label}</Button>
                  <Button href={DATA.secondaryCta.href} variant="secondary">
                    {DATA.secondaryCta.label}
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {DATA.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20"
                    >
                      <div className="text-sm font-bold text-white">{s.value}</div>
                      <div className="mt-1 text-xs text-white/60">{s.label}</div>
                    </div>
                  ))}
                </div>

                <MiniLogoRow />
              </div>

              <div className="relative">
                <div className="nv-float relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                  <SmartImg image={IMAGES.heroTruck} alt="Semi truck" className="nv-kenburns h-[420px] w-full object-cover" eager />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A13]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-[#070A13]/60 p-4 backdrop-blur">
                        <div className="text-xs text-white/60">Featured product</div>
                        <div className="mt-1 text-sm font-semibold text-white">Safe24</div>
                        <div className="mt-1 text-xs text-white/70">Telematic camera integration</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-[#070A13]/60 p-4 backdrop-blur">
                        <div className="text-xs text-white/60">Response time</div>
                        <div className="mt-1 text-sm font-semibold text-white">1 business day</div>
                        <div className="mt-1 text-xs text-white/70">Typical reply window</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Card>
                    <div className="text-xs text-white/60">Outcome-driven</div>
                    <div className="mt-1 text-sm font-semibold">Practical improvements</div>
                  </Card>
                  <Card>
                    <div className="text-xs text-white/60">Compliance-aware</div>
                    <div className="mt-1 text-sm font-semibold">Safety & readiness</div>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 relative overflow-hidden border-t border-white/10 bg-[#0B1023] py-14">
          <SectionGlow />
          <Container>
            <SectionTitle
              kicker="Services"
              title="A complete support stack for trucking businesses"
              desc="Four divisions designed to reduce risk, remove bottlenecks, and strengthen operations."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {DATA.services.map((s) => (
                <Card key={s.title}>
                  <h3 className="text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{s.description}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-white/70">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Products */}
        <section id="products" className="scroll-mt-16 border-t border-white/10 py-14">
          <Container>
            <SectionTitle
              kicker="Products"
              title="Tools built for real fleet workflows"
              desc="From safety visibility today to operational intelligence tomorrow."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {DATA.products.map((p) => (
                <Card key={p.title}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-white">{p.title}</h3>
                    <Badge tone={p.badge === "Available" ? "good" : "neutral"}>{p.badge}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">{p.description}</p>
                  <div className="mt-4 grid gap-2 text-sm text-white/70 sm:grid-cols-3">
                    {p.points.map((pt) => (
                      <div key={pt} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                        {pt}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300/90">Built for trucking</div>
                  <h3 className="mt-2 text-xl font-bold text-white">Professional, modern design</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">Clean layout with trucking visuals—ideal for a modern solutions brand.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href="#contact">Talk to us</Button>
                    <Button href="#pricing" variant="secondary">See pricing</Button>
                  </div>
                </div>
                <div className="relative min-h-[240px]">
                  <SmartImg image={IMAGES.truckClose} alt="Truck" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B1023]" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Dashboard */}
        <section id="dashboard" className="scroll-mt-16 border-t border-white/10 py-14">
          <Container>
            <SectionTitle
              kicker="Efficiency & Safety"
              title="A modern operational view"
              desc="Visualize performance, improve coaching loops, and keep compliance workflows organized."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/60">On-time trend</div>
                    <div className="mt-1 text-sm font-semibold text-white">Delivery performance</div>
                  </div>
                  <div className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-300/20">+6 pts</div>
                </div>
                <div className="mt-4">
                  <LineChart />
                </div>
                <div className="mt-3 text-xs text-white/60">Example visualization for the website.</div>
              </Card>

              <Card>
                <div className="text-xs text-white/60">Safety signals</div>
                <div className="mt-1 text-sm font-semibold text-white">Incidents per month</div>
                <div className="mt-4">
                  <BarChart />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="font-semibold text-white">Coaching</div>
                    <div className="mt-1 text-white/60">Faster loops</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="font-semibold text-white">Visibility</div>
                    <div className="mt-1 text-white/60">Clear events</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="font-semibold text-white">Compliance</div>
                    <div className="mt-1 text-white/60">Audit-ready</div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="text-xs text-white/60">Efficiency index</div>
                <div className="mt-1 text-sm font-semibold text-white">Fleet utilization</div>
                <div className="mt-4">
                  <Donut value={86} />
                </div>
                <div className="mt-4 grid gap-2 text-sm text-white/70">
                  <div className="flex items-center justify-between"><span>Empty miles</span><span className="font-semibold text-white">↓</span></div>
                  <div className="flex items-center justify-between"><span>Driver consistency</span><span className="font-semibold text-white">↑</span></div>
                  <div className="flex items-center justify-between"><span>Cycle time</span><span className="font-semibold text-white">↓</span></div>
                </div>
              </Card>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <SmartImg image={IMAGES.opsDash} alt="Operational efficiency" className="h-[340px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13]/80 via-[#070A13]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/10 bg-[#070A13]/65 p-5 backdrop-blur">
                    <div className="text-xs text-white/60">Efficiency</div>
                    <div className="mt-1 text-sm font-semibold text-white">Reduce friction in dispatch</div>
                    <div className="mt-2 text-xs text-white/70">Standardized playbooks + tools.</div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <SmartImg image={IMAGES.safetyOps} alt="Safety operations" className="h-[340px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13]/80 via-[#070A13]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/10 bg-[#070A13]/65 p-5 backdrop-blur">
                    <div className="text-xs text-white/60">Safety</div>
                    <div className="mt-1 text-sm font-semibold text-white">Stronger coaching loops</div>
                    <div className="mt-2 text-xs text-white/70">Visibility + process = safer ops.</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Integrations — works with your existing stack */}
        <section id="integrations" className="scroll-mt-16 border-t border-white/10 py-14">
          <Container>
            <SectionTitle
              kicker="Integrations"
              title="Works with the tools your fleet already runs on"
              desc="No rip-and-replace. Noventra's guidance and products plug into your existing stack so data moves once and your team stops double-keying."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["ELD & Telematics", "Dash Cameras", "Load Boards", "Accounting Software", "Fuel Cards", "Factoring", "Maintenance Systems", "Driver Apps"].map((tool) => (
                <div
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-cyan-300/40 hover:text-white"
                >
                  {tool}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/60">
              Using something we haven't listed? <a href="#contact" className="font-semibold text-cyan-300 hover:underline">Tell us about your setup</a> — we'll map how it fits.
            </p>
          </Container>
        </section>

        {/* Book a demo — interactive scheduler */}
        <section id="demo" className="scroll-mt-16 relative overflow-hidden border-t border-white/10 bg-[#0B1023] py-14">
          <SectionGlow />
          <Container>
            <SectionTitle
              kicker="Book a Demo"
              title="See Noventra in action"
              desc="Pick a day and time that works for you — we'll walk you through Safe24 and how our divisions support your fleet."
            />
            <DemoScheduler />

            {/* How a demo turns into results */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <div className="text-2xl font-bold text-cyan-300">01</div>
                <div className="mt-2 text-sm font-semibold text-white">Live walkthrough</div>
                <p className="mt-1 text-sm text-white/70">A 20-minute demo focused on your fleet's size, lanes, and goals.</p>
              </Card>
              <Card>
                <div className="text-2xl font-bold text-cyan-300">02</div>
                <div className="mt-2 text-sm font-semibold text-white">Ops &amp; safety review</div>
                <p className="mt-1 text-sm text-white/70">We assess your current workflows, compliance posture, and risk exposure.</p>
              </Card>
              <Card>
                <div className="text-2xl font-bold text-cyan-300">03</div>
                <div className="mt-2 text-sm font-semibold text-white">Tailored playbook</div>
                <p className="mt-1 text-sm text-white/70">You get a practical plan — tools, coverage guidance, and process fixes.</p>
              </Card>
              <Card>
                <div className="text-2xl font-bold text-cyan-300">04</div>
                <div className="mt-2 text-sm font-semibold text-white">Rollout &amp; support</div>
                <p className="mt-1 text-sm text-white/70">Implementation with ongoing support as your operation scales.</p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-16 border-t border-white/10 bg-[#0B1023] py-14">
          <Container>
            <SectionTitle kicker="Pricing" title="Simple, transparent availability" desc="Safe24 is available now. Nova products are launching soon." />
            <div className="mt-8 grid gap-4">
              {DATA.pricing.map((row) => (
                <Card key={row.item}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm font-semibold text-white">{row.item}</div>
                    <div className="text-sm text-white/70">{row.detail}</div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 border-t border-white/10 py-14">
          <Container>
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <SectionTitle kicker="About" title={DATA.about.title} desc="A multi-division group built to help fleets operate at a higher standard." />
                {DATA.about.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-sm leading-7 text-white/70">{p}</p>
                ))}
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <SmartImg image={IMAGES.highwayNight} alt="Highway at night" className="h-[380px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#070A13]/60 p-4 backdrop-blur">
                    <div className="text-xs text-white/60">What we optimize</div>
                    <div className="mt-1 text-sm font-semibold text-white">Safety + Execution</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#070A13]/60 p-4 backdrop-blur">
                    <div className="text-xs text-white/60">How we deliver</div>
                    <div className="mt-1 text-sm font-semibold text-white">Playbooks + Tools</div>
                  </div>
                </div>
              </div>
            </div>

            {/* On the road — trucking industry gallery */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <SmartImg image={IMAGES.fleetAerial} alt="Aerial view of a freight truck yard" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/90">Fleet operations</div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <SmartImg image={IMAGES.truckMountain} alt="Semi truck driving a mountain highway" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/90">Long-haul routes</div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <SmartImg image={IMAGES.truckDesert} alt="Semi truck crossing open desert highway" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/90">Coast to coast</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="scroll-mt-16 relative overflow-hidden border-t border-white/10 bg-[#0B1023] py-14">
          <SectionGlow />
          <Container>
            <SectionTitle kicker="Testimonials" title="Trusted by operators who value execution" desc="Examples of the kind of feedback we aim to earn." />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {DATA.testimonials.map((t, idx) => (
                <Card key={idx} className="h-full">
                  <p className="text-sm leading-7 text-white/80">"{t.quote}"</p>
                  <div className="mt-5 text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/60">{t.company}</div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 border-t border-white/10 py-14">
          <Container>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <SectionTitle kicker="Contact" title={DATA.contact.title} desc={DATA.contact.subtitle} />
                <div className="mt-6 grid gap-4">
                  <Card>
                    <div className="text-xs text-white/60">Phone</div>
                    <a
                      className="mt-1 block text-sm font-semibold text-white transition hover:text-cyan-300"
                      href={`tel:+1${DATA.contact.phone.replace(/-/g, "")}`}
                    >
                      {DATA.contact.phone}
                    </a>
                  </Card>
                  <Card>
                    <div className="text-xs text-white/60">Email</div>
                    <a
                      className="mt-1 block text-sm font-semibold text-white transition hover:text-cyan-300"
                      href={`mailto:${DATA.contact.email}`}
                    >
                      {DATA.contact.email}
                    </a>
                  </Card>
                  <Card>
                    <div className="text-xs text-white/60">Address</div>
                    <div className="mt-1 text-sm font-semibold text-white">{DATA.contact.address}</div>
                  </Card>
                </div>
              </div>

              <Card className="p-7">
                <div className="text-sm font-semibold text-white">Send a quick request</div>
                <p className="mt-2 text-sm text-white/70">Submitting opens your email app with the message pre-filled. I can connect it to email, Google Sheets, or a CRM.</p>
                <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
                  <label className="sr-only" htmlFor="nv-name">Full name</label>
                  <input
                    id="nv-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30"
                    placeholder="Full name"
                  />
                  <label className="sr-only" htmlFor="nv-contact">Phone or email</label>
                  <input
                    id="nv-contact"
                    name="contact"
                    required
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30"
                    placeholder="Phone or email"
                  />
                  <label className="sr-only" htmlFor="nv-message">Message</label>
                  <textarea
                    id="nv-message"
                    name="message"
                    required
                    className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/30"
                    placeholder="What do you need help with? (fleet size, goals, timeline)"
                  />
                  <button
                    type="submit"
                    className="h-11 rounded-2xl bg-cyan-300 px-5 text-sm font-semibold text-black transition hover:opacity-90 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A13]"
                  >
                    Send request
                  </button>
                  <p className="text-xs text-white/50">By submitting, you agree to be contacted.</p>
                </form>
              </Card>
            </div>
          </Container>
        </section>
      </main>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0B1023] py-16">
        <SectionGlow />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300/90">Ready when you are</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Run a safer, smarter fleet.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Less friction, more hauling. See how Noventra's divisions and tools fit your operation — in one quick conversation.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href="#demo">Book a Demo</Button>
              <Button href="#contact" variant="secondary">Request a Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Noventra Group logo"
                className="h-9 w-9 rounded-xl object-contain bg-white/5 ring-1 ring-white/10 brightness-0 invert"
              />
              <div className="text-sm font-semibold text-white">{DATA.brandName}</div>
            </div>
            <div className="text-xs text-white/60">{DATA.footerNote}</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
