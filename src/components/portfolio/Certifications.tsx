import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { name: "CCNA: Introduction to Networks", issuer: "Cisco" },
  { name: "CCNAv7: Switching, Routing & Wireless Essentials", issuer: "Cisco" },
  { name: "Programming Essentials in C (CLA)", issuer: "C++ Institute" },
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Verified <span className="gradient-text">credentials</span></>}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative glass rounded-2xl p-5 overflow-hidden flex items-center gap-4 hover:border-primary/40 transition"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-brand opacity-10 group-hover:opacity-25 transition" />
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-brand text-primary-foreground shadow-glow">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold leading-tight">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground font-mono">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
