import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, GraduationCap, Sparkles, Target } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Completed", value: "12+" },
  { label: "Automation Projects", value: "4" },
  { label: "Technologies Learned", value: "25+" },
];

const cards = [
  {
    icon: Briefcase,
    title: "Current Role",
    text: "Junior QA Engineer at Ceydigital Technology Pvt Ltd — testing web & mobile apps across multiple roles and platforms.",
  },
  {
    icon: Target,
    title: "Background",
    text: "Started as a Software Developer Intern at Ceydigital, building UIs and APIs before moving into full-time QA.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "BICT (Hons) Software Technologies undergraduate at South Eastern University of Sri Lanka.",
  },
  {
    icon: Sparkles,
    title: "Passion",
    text: "AI engineering, automation testing, and shipping software that actually feels solid in users' hands.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={<>Quality is a <span className="gradient-text">discipline</span>.</>}
      subtitle="I bring engineering rigor to every release — from test design and automation to bug triage and collaboration with developers."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {cards.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-primary/40 transition group"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-brand text-primary-foreground group-hover:scale-110 transition">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{c.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-strong rounded-2xl p-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold gradient-text font-display">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
