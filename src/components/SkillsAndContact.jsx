import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Mail, Send, Terminal } from 'lucide-react';
import { useState } from 'react';
import { PROFILE, RESUMES, SKILL_GROUPS } from '../data/portfolioData';
import Reveal from './Reveal';

export default function SkillsAndContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botField: '' });
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'fallback'
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill out your name, email, and message.');
      return;
    }

    setSubmitState('submitting');

    try {
      const payload = new URLSearchParams({
        'form-name': 'contact',
        'bot-field': formData.botField,
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (res.ok) {
        setSubmitState('success');
        setFormData({ name: '', email: '', message: '', botField: '' });
      } else {
        setSubmitState('fallback');
      }
    } catch {
      setSubmitState('fallback');
    }
  };

  return (
    <>
      <section id="skills" className="border-b border-[var(--border-hairline)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Technical &amp; Domain Toolkit
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Stacks across Engineering, Product &amp; Quant Finance
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group, idx) => (
              <Reveal key={group.title} delay={idx * 65}>
                <div className="surface-card h-full rounded-2xl p-5 shadow-xs transition-colors hover:border-[var(--text-muted)]">
                  <h3 className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/75 px-2.5 py-1 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <footer id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Get In Touch
              </h2>
              <div className="mx-auto mt-2.5 h-[3px] w-16 rounded-full bg-emerald-500" />
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Interested in working together on Software, Product, or Finance—or have a question? Feel free to reach
                out!
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mx-auto mt-8 max-w-lg space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden" aria-hidden="true">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{' '}
                  <input
                    name="bot-field"
                    value={formData.botField}
                    onChange={(e) => setFormData((prev) => ({ ...prev, botField: e.target.value }))}
                  />
                </label>
              </p>

              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full resize-y rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {errorMsg && <p className="text-xs font-medium text-rose-500">{errorMsg}</p>}

              {submitState === 'success' && (
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  Message sent! Thanks for reaching out—I&apos;ll get back to you shortly.
                </div>
              )}

              {submitState === 'fallback' && (
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center text-xs text-[var(--text-secondary)]">
                  Form endpoint unavailable in this preview.{' '}
                  <button
                    type="button"
                    onClick={openMailtoFallback}
                    className="cursor-pointer font-semibold text-[var(--accent-primary)] underline"
                  >
                    Send directly via your email app
                  </button>
                  .
                </div>
              )}

              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-emerald-400 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>{submitState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          {/* Direct Links & Role Resumes Bar */}
          <div className="mt-14 border-t border-[var(--border-hairline)] pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {RESUMES.map((res) => (
                  <a
                    key={res.id}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:border-emerald-500"
                  >
                    <FileText className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{res.shortLabel}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-70" />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-3 py-1.5 font-mono-code text-xs font-medium text-[var(--text-primary)] hover:border-emerald-500"
                >
                  {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Mail className="h-3.5 w-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : PROFILE.email}</span>
                  {!copiedEmail && <Copy className="h-3 w-3 opacity-70" />}
                </button>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PROFILE.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Codeforces</span>
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-[var(--text-muted)] sm:flex-row">
              <p>© 2026 {PROFILE.name} · IIT Kanpur</p>
              <p className="font-mono-code">Press / or ⌘K for Quick Jump · React 19, Vite &amp; Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
