import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Copy, Check, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const EMAIL = "samadhiwijekoon31@gmail.com";
const PHONE = "+94 70 460 0395";
const WHATSAPP = "94704600395";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build <span className="gradient-text">quality</span> together</>}
      subtitle="Open to QA, automation, and SDET opportunities. I'll get back within 24 hours."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 space-y-3"
        >
          <button
            onClick={copyEmail}
            className="w-full flex items-center gap-3 rounded-xl border border-border p-4 hover:bg-secondary/60 transition text-left"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg gradient-brand text-primary-foreground"><Mail className="h-4 w-4" /></div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm font-medium">{EMAIL}</div>
            </div>
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
          </button>

          <a href={`tel:${PHONE}`} className="flex items-center gap-3 rounded-xl border border-border p-4 hover:bg-secondary/60 transition">
            <div className="grid h-10 w-10 place-items-center rounded-lg gradient-brand text-primary-foreground"><Phone className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="text-sm font-medium">{PHONE}</div>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-border p-4">
            <div className="grid h-10 w-10 place-items-center rounded-lg gradient-brand text-primary-foreground"><MapPin className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Location</div>
              <div className="text-sm font-medium">Bandarawela, Sri Lanka</div>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white p-4 font-medium transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                required
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                required
                className="input"
                placeholder="you@email.com"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              required
              rows={6}
              className="input resize-none"
              placeholder="Tell me about the role or project…"
            />
          </Field>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-brand text-primary-foreground p-4 font-medium shadow-glow hover:scale-[1.01] transition"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
        </motion.form>
      </div>
      <style>{`
        .input {
          width: 100%;
          background: color-mix(in oklab, var(--surface) 60%, transparent);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--ring);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--ring) 30%, transparent);
        }
      `}</style>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-mono text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
