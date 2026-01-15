"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  details: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", details: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (state: FormState) => {
    const nextErrors: Partial<FormState> = {};
    if (!state.name.trim()) nextErrors.name = "Please enter your name";
    if (!state.email.trim()) {
      nextErrors.email = "Please enter your email";
    } else {
      const emailOk = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/i.test(state.email);
      if (!emailOk) nextErrors.email = "Enter a valid email address";
    }
    if (!state.details.trim() || state.details.trim().length < 20) {
      nextErrors.details = "Tell us more (at least 20 characters)";
    }
    return nextErrors;
  };

  const onChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...form, [key]: e.target.value };
    setForm(next);
    setErrors(validate(next));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      setForm({ name: "", email: "", details: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Start Your Next Project
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          We design and build high-end digital experiences that scale. Tell us about your goals and we’ll craft a path forward.
        </motion.p>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 opacity-20 blur-xl pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={onChange("name")}
              className="w-full bg-muted/60 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="Jane Doe"
            />
            {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={onChange("email")}
              className="w-full bg-muted/60 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="jane@company.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
          </div>
        </div>

        <div className="mt-6 relative z-10">
          <label htmlFor="details" className="block text-sm font-medium mb-2">
            Project details
          </label>
          <textarea
            id="details"
            value={form.details}
            onChange={onChange("details")}
            className="w-full bg-muted/60 border border-white/10 rounded-xl px-4 py-3 min-h-[160px] focus:outline-none focus:border-primary transition-colors"
            placeholder="What are you building? Timelines, budget, target users, and desired outcomes."
          />
          {errors.details && <p className="text-red-400 text-xs mt-2">{errors.details}</p>}
        </div>

        <div className="mt-8 relative z-10">
          <button
            type="submit"
            disabled={submitting}
            className="w-full text-black font-bold py-4 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-opacity glow"
          >
            {submitting ? "Submitting..." : "Request Proposal"}
          </button>
        </div>
      </motion.form>
    </section>
  );
}
