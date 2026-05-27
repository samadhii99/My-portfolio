import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Samadhi Wijekoon · Built with care.
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/samadhii99", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/samadhi-wijekoon-b82496210", label: "LinkedIn" },
            { icon: Mail, href: "mailto:samadhiwijekoon31@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg glass hover:scale-110 transition">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
