import ContactCta from '@/components/sections/contact/ContactCta';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function PaymentPage() {
  return (
    <>
  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Financials"
      title="Simple Investment Plans"
      description="Investing in Dubai has never been more accessible."
      metrics={[
        {
          value: "20%",
          title: "Down Payment",
          features: [
            "Easy entry",
            "Developer flexible",
          ],
        },
        {
          value: "80%",
          title: "Post-Handover",
          features: [
            "Growth friendly",
            "Rental coverage",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Calculator"
      text="Want a custom breakdown? Talk to Alif."
      primaryButton={{
        text: "Ask For Plans",
        href: "https://wa.me/971558766369",
      }}
      secondaryButton={{
        text: "Email Me",
        href: "mailto:alifh4466@gmail.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
