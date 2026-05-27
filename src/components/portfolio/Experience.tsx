import { motion } from "framer-motion";
import { Section } from "./Section";
import { Building2 } from "lucide-react";

const jobs = [
  {
    role: "Junior Quality Assurance Engineer",
    company: "Ceydigital Technology Pvt Ltd",
    period: "Present",
    points: [
      "Tested the Tripsygo platform — User App, Service Provider App, Admin and Super Admin systems.",
      "Performed functional, UI, and regression testing across multiple releases.",
      "Authored and executed detailed test cases; tracked defects through resolution.",
      "Collaborated closely with developers to reproduce, isolate, and verify issues.",
      "Tested the Worklenz mobile application — improved reliability and UX.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Ceydigital Technology Pvt Ltd",
    period: "6 Months",
    points: [
      "Developed User, Admin, and Super Admin web interfaces.",
      "Worked with modern frontend frameworks and reusable UI components.",
      "Integrated REST APIs and handled responsive web layouts.",
      "Used Git for version control and team collaboration workflows.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've <span className="gradient-text">shipped quality</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <div className="space-y-10">
          {jobs.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 ${i % 2 ? "" : ""}`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 grid h-3 w-3 place-items-center rounded-full gradient-brand shadow-glow" />
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:order-2" : "sm:text-right"}`}>
                <div className="text-xs font-mono text-muted-foreground">{job.period}</div>
                <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
                <div className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5" /> {job.company}
                </div>
              </div>
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:order-1" : ""}`}>
                <ul className="glass rounded-2xl p-5 space-y-2 text-sm text-muted-foreground">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full gradient-brand" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
