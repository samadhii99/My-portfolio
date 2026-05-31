import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
  title: "Omi Game Appium Automation",
  repo: "https://github.com/samadhii99/omi-game-appium-automation", 
  desc: "Mobile automation framework for the Omi Game Android app — built with Appium, WebdriverIO & TypeScript, with Allure reporting integration.",
  tags: ["Appium", "WebdriverIO", "TypeScript", "Mocha"],
  accent: "from-purple-500/30 to-blue-500/30",
},
  {
    title: "Worklenz Mobile Automation",
    repo: "https://github.com/samadhii99/mobile-automation-maestro",
    desc: "Mobile automation tests for the Worklenz Android app built with Maestro Studio — flow-based scripting and CI-ready runs.",
    tags: ["Maestro Studio", "Mobile", "Android"],
    accent: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "AI-Powered Home Workout System",
    desc: "Real-time pose estimation and repetition counting workout assistant — guides users through exercises with computer vision.",
    tags: ["AI", "Pose Estimation", "Python"],
    accent: "from-fuchsia-500/30 to-purple-500/30",
  },
  {
    title: "E-Commerce Store",
    repo: "https://github.com/samadhii99/Shopping-Store",
    desc: "Multi-language e-commerce app with AI chatbot, Google reCAPTCHA auth, and dark/light mode — built with React & Vite.",
    tags: ["React", "Vite", "Redux", "i18next"],
    accent: "from-sky-500/30 to-indigo-500/30",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Projects that <span className="gradient-text">prove the craft</span></>}
      subtitle="A mix of automation suites, QA work, and engineering side-projects."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative glass rounded-3xl p-6 overflow-hidden hover:border-primary/40 transition"
          >
            <div className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition`} />

            {/* mockup */}
            <div className="relative rounded-2xl glass-strong p-4 mb-5 overflow-hidden">
              <div className="flex gap-1.5 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground space-y-1">
                <div><span className="text-emerald-400">✓</span> {p.title.toLowerCase().replace(/\s+/g, "_")}.spec</div>
                <div className="opacity-70">  → loaded test environment</div>
                <div className="opacity-70">  → executing {Math.floor(Math.random() * 30) + 10} scenarios</div>
                <div><span className="text-primary">●</span> {Math.floor(Math.random() * 100) + 30} passed · 0 failed</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs hover:bg-secondary/60 transition"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-lg gradient-brand text-primary-foreground px-3 py-2 text-xs hover:scale-[1.03] transition"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
