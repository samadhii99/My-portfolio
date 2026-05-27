import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="gradient-text">foundation</span></>}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-start"
      >
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-brand text-primary-foreground shadow-glow">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-mono text-muted-foreground">Undergraduate · Present</div>
          <h3 className="mt-1 text-2xl font-semibold">South Eastern University of Sri Lanka</h3>
          <p className="mt-2 text-muted-foreground">
            BICT (Hons) in Software Technologies — coursework spanning software engineering,
            networking, databases, and modern application development.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
