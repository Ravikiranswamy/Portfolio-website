/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Ravikiran', // shown in navbar, footer, hero, about
  pageTitle: 'Ravikiran – Aspiring Software Engineer', // browser tab title
  role: 'Computer Science Student', // footer subtitle
  email: 'ravikiranswamy550@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '916362452083',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'COMPUTER SCIENCE STUDENT • JAVA & SPRING BOOT',
  headline: 'RAVIKIRAN', // big text, use CAPS
  roles: ['ASPIRING SOFTWARE ENGINEER', 'BACKEND & FULL-STACK DEVELOPMENT'] as [string, string],
  tagline: "I'm a Computer Science student passionate about building practical applications with Java, Spring Boot, and modern web technologies. I enjoy solving problems and exploring AI-powered solutions.",
  primaryButton: 'VIEW MY PROJECTS',
  secondaryButton: 'GET IN TOUCH',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Ravikiran',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'I BUILD FULL-STACK APPLICATIONS AND EXPLORE AI-POWERED SOLUTIONS.',
  redWords: ['FULL-STACK', 'AI-POWERED'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Computer Science Student · Backend & Frontend Development',
  portrait: '/media/profile.jpg', // 4:5 portrait photo
  portraitAlt: 'Portrait of Ravikiran',
  portraitCaption: 'ASPIRING SOFTWARE ENGINEER', // small red text under the name on the photo
  paragraphs: [
    "I'm a Computer Science Engineering student at JSS Science and Technology University, Mysuru. I enjoy building end-to-end software applications, from designing user interfaces to developing reliable backend systems.",
    'My primary technologies include Java, Spring Boot, React, and PostgreSQL. I also work with Python and FastAPI and explore AI-powered applications. I enjoy developing full-stack projects, solving real-world problems, and continuously improving my software engineering skills.',
  ],
  technologies: ['Java', 'Spring Boot', 'React', 'JavaScript', 'HTML & CSS', 'PostgreSQL', 'REST APIs'],
  focus: [
    'Full-Stack Development',
    'Backend Development',
    'Frontend Development',
    'AI-Powered Applications',
    'Problem Solving',
  ],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Ravikiranswamy' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ravikiran-b9a664320/' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Programming Languages', category: 'Java · Python · C', level: 'Learning & Practicing' },
  { name: 'Backend Development', category: 'Java · Spring Boot · REST APIs · Hibernate', level: 'Hands-on Experience' },
  { name: 'Frontend Development', category: 'React.js · JavaScript · HTML · CSS', level: 'Hands-on Experience' },
  { name: 'Databases', category: 'PostgreSQL · MySQL · SQL', level: 'Hands-on Experience' },
  { name: 'AI & Integration', category: 'FastAPI · RAG · Gemini APIs', level: 'Project Experience' },
  { name: 'Developer Tools', category: 'Git · GitHub · IntelliJ IDEA · Postman · VS Code', level: 'Regular Usage' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Java',
  'Python',
  'C',
  'JavaScript',
  'React',
  'HTML5',
  'CSS3',
  'Spring Boot',
  'FastAPI',
  'Hibernate',
  'REST APIs',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  'pgvector',
  'Git',
  'Docker',
  'Gemini',
];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'traceguard-ai',
    kind: 'software',
    title: 'TraceGuard AI',
    subtitle: 'AML and mule network detection',
    category: 'AI · Fraud Detection',
    poster: '/assets/thumbnails/traceguard-ai.jpg',
    description:
      'I built an AI system that flags suspicious transactions and mule-account networks. It combines machine learning with Louvain graph analysis.',
    tags: ['Python', 'FastAPI', 'React', 'Machine Learning', 'Louvain'],
    liveUrl: 'https://traceguard-ai-black.vercel.app',
    repoUrl: 'https://github.com/Ravikiranswamy/TraceGuard-AI',
  },
  {
    id: 'claimledger',
    kind: 'software',
    title: 'ClaimLedger',
    subtitle: 'AI brand governance platform',
    category: 'AI · Brand Governance',
    poster: '/assets/thumbnails/claimledger.jpg',
    description:
      'I built a platform that checks marketing content against approved brand documents. It catches outdated pricing, unsupported claims, and inconsistencies with RAG and deterministic validation.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'pgvector', 'Gemini'],
    liveUrl: 'https://claimledger-india.vercel.app',
    repoUrl: 'https://github.com/Ravikiranswamy/ClaimLedger',
  },
  {
    id: 'campus-placement',
    kind: 'software',
    title: 'Campus Placement Management System',
    subtitle: 'College recruitment platform',
    category: 'Full-Stack · Campus',
    poster: '/assets/thumbnails/campus-placement.jpg',
    description:
      'I built a central platform for student profiles, company drives, eligibility, interview rounds, and placement statistics.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://campus-placement-management-system-dbms.vercel.app/',
    repoUrl: 'https://github.com/Ravikiranswamy/CampusPlacementManagementSystem',
  },
];

/* ───────────── 8. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 6, suffix: '', label: 'Projects Showcased' },
  { id: 'stat-2', value: 4, suffix: '', label: 'Live Deployments' },
  { id: 'stat-3', value: 15, suffix: '', label: 'Public Repositories' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
