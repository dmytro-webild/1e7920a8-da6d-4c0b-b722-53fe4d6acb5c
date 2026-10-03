import ContactCta from '@/components/sections/contact/ContactCta';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ContactPage() {
  return (
    <>
  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Connect"
      text="Ready to buy? Let's talk strategy."
      primaryButton={{
        text: "WhatsApp Alif",
        href: "https://wa.me/971558766369",
      }}
      secondaryButton={{
        text: "Email Direct",
        href: "mailto:alifh4466@gmail.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Office"
      title="Visit Us"
      description="Find us in the heart of the Dubai property district."
      metrics={[
        {
          value: "UAE",
          title: "Headquarters",
          features: [
            "Business Bay",
            "Central",
          ],
        },
        {
          value: "BD",
          title: "Support Desk",
          features: [
            "Consultations",
            "Local support",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
