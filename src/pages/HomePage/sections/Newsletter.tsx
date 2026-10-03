import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div id="newsletter" data-webild-section="newsletter">
      <SectionErrorBoundary name="newsletter">
        <section aria-label="Newsletter Subscription" className="py-16 md:py-24 bg-background border-t border-white/10 relative overflow-hidden">
          <div className="w-content-width mx-auto">
            <ScrollReveal variant="slide-up" className="relative p-8 md:p-14 rounded-2xl bg-card/60 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[var(--primary-cta)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="flex-1 text-center md:text-left space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-cta)]/10 border border-[var(--primary-cta)]/20 text-[var(--accent)] text-xs font-medium tracking-wide">
                    <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Exclusive Market Intelligence</span>
                  </div>
                  
                  <TextAnimation
                    text="Stay Ahead of the Dubai Market"
                    variant="slide-up"
                    gradientText={false}
                    tag="h2"
                    className="text-2xl md:text-4xl font-bold text-foreground tracking-tight"
                  />
                  
                  <p className="text-foreground/70 text-sm md:text-base max-w-xl">
                    Get early off-plan property alerts, ROI reports, and 20/80 payment plan breakdowns directly in your inbox.
                  </p>
                  
                  <p className="text-xs md:text-sm text-[var(--accent)] font-medium">
                    দুবাই প্রপার্টি মার্কেট ও স্পেশাল ইনভেস্টমেন্ট অফার মিস করবেন না।
                  </p>
                </div>

                <div className="w-full md:w-[420px] shrink-0">
                  {submitted ? (
                    <div className="flex items-center gap-3 p-5 rounded-xl bg-[var(--primary-cta)]/15 border border-[var(--primary-cta)]/30 text-foreground">
                      <CheckCircle2 className="w-6 h-6 text-[var(--accent)] shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">You&apos;re on the list!</p>
                        <p className="text-xs text-foreground/70 mt-0.5">Thank you. Expect exclusive Dubai property insights soon.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div className="relative flex items-center">
                        <Mail className="absolute left-4 w-5 h-5 text-foreground/40 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/80 border border-white/15 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[var(--primary-cta)] text-sm transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm primary-button text-primary-cta-text transition-all hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        <span>Get Investment Updates</span>
                      </button>
                      <p className="text-[11px] text-foreground/50 text-center">
                        No spam. Unsubscribe anytime with one click.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </SectionErrorBoundary>
    </div>
  );
}