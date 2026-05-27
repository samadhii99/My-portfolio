import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile.jpeg";

const roles = [
  "Junior QA Engineer",
  "Automation Tester",
  "Manual & API Testing",
  "Future SDET",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((v) => v + 1);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="gradient-text font-semibold">
      {text}
      <span className="inline-block w-[2px] h-[1em] -mb-1 ml-1 bg-primary animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for QA & SDET opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Samadhi <span className="gradient-text">Wijekoon</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-xl sm:text-2xl text-muted-foreground min-h-[2em]"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            Motivated and detail-oriented QA Engineer with experience in manual and automation
            testing for web and mobile applications. Passionate about software quality, automation,
            AI technologies, and delivering exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/cv-samadhi-wijekoon.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-secondary/60 transition"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium hover:bg-secondary/60 transition"
            >
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-3 text-muted-foreground"
          >
            {[
              { icon: Github, href: "https://github.com/samadhii99", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/samadhi-wijekoon-b82496210", label: "LinkedIn" },
              { icon: Mail, href: "mailto:samadhiwijekoon31@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-foreground hover:scale-110 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 gradient-brand rounded-3xl opacity-30 blur-2xl" />
          <div className="relative glass-strong rounded-3xl p-3 shadow-card animate-float">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={profile}
                alt="Samadhi Wijekoon"
                width={520}
                height={520}
                className="w-[320px] sm:w-[380px] aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-xs">
              <div className="text-muted-foreground">Currently at</div>
              <div className="font-semibold">Ceydigital Technology</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-xs">
              <div className="text-muted-foreground">Based in</div>
              <div className="font-semibold">Sri Lanka 🇱🇰</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
