import { motion } from "framer-motion";
import { Section } from "./Section";
import { Bug, Bot, Code2, Wrench } from "lucide-react";

const groups = [
  {
    icon: Bug,
    title: "QA & Testing",
    items: ["Manual Testing", "Functional", "Regression", "UI Testing", "API Testing", "Test Case Writing", "Bug Reporting"],
  },
  {
    icon: Bot,
    title: "Automation Tools",
    items: ["Playwright", "Selenium", "Appium", "Maestro Studio", "Postman"],
  },
  {
    icon: Code2,
    title: "Development",
    items: ["React", "React Native", "JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java", "C#"],
  },
  {
    icon: Wrench,
    title: "Platforms & Tools",
    items: ["Jira", "TestLink", "Git & GitHub", "Firebase", "MongoDB", "Docker", "AWS", "Azure"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={<>The stack I <span className="gradient-text">test & build</span> with</>}
      subtitle="A focused, growing toolkit covering manual testing, automation, and the surrounding engineering surface."
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08 }}
            className="glass rounded-2xl p-6 hover:shadow-glow transition"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-primary-foreground">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
