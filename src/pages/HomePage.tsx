import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="Raasta"
      description="Real Estate With Purpose. Your partner in finding high-value property in Dubai. আপনার স্বপ্নের ঠিকানা এখন দুবাইতে."
      primaryButton={{
        text: "Consult With Alif",
        href: "https://wa.me/971558766369",
      }}
      secondaryButton={{
        text: "Browse Properties",
        href: "/properties",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/woman-charging-electro-car-by-her-house_1303-18609.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="trust" data-section="trust">
    <SectionErrorBoundary name="trust">
          <MetricsFeatureCards
      tag="Why Raasta"
      title="Expertise That Matters"
      description="We specialize in Bangladeshi-first consulting with global standards."
      metrics={[
        {
          value: "20/80",
          title: "Payment Plans",
          features: [
            "Flexible structure",
            "Minimal cash outflow",
            "Direct developer rates",
          ],
        },
        {
          value: "100%",
          title: "Transparent",
          features: [
            "No hidden costs",
            "Full legal support",
            "End-to-end service",
          ],
        },
        {
          value: "24/7",
          title: "Consulting",
          features: [
            "Direct access to Alif",
            "Real-time updates",
            "Dedicated support",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="featured" data-section="featured">
    <SectionErrorBoundary name="featured">
          <FeaturesBentoGrid
      tag="Featured Projects"
      title="Handpicked Luxury Assets"
      description="Selected properties that promise growth and lifestyle."
      features={[
        {
          title: "Downtown Dubai Views",
          description: "Iconic luxury apartments.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-work-ethnicity-concept-dark-skinned-manager-tries-complete-marketing-task_273609-18023.jpg",
        },
        {
          title: "Palm Jumeirah Villas",
          description: "Beachfront elite residences.",
          imageSrc: "http://img.b2bpic.net/free-photo/china-city-river-business-view_1417-23.jpg",
        },
        {
          title: "Business Bay Hub",
          description: "High yield rental investment.",
          imageSrc: "http://img.b2bpic.net/free-photo/executives-planning-business-strategy_1098-615.jpg",
        },
        {
          title: "Off-Plan Opportunities",
          description: "Early bird capital appreciation.",
          imageSrc: "http://img.b2bpic.net/free-photo/dining-set-modern-luxury-dining-room_105762-1797.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Clients"
      title="Built on Trust"
      description="Stories from our global community of investors."
      testimonials={[
        {
          name: "Rahim Uddin",
          role: "Investor",
          quote: "Alif made the entire Dubai process seamless and transparent.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-face-successful-woman_329181-13508.jpg",
        },
        {
          name: "Sara Ahmed",
          role: "Homeowner",
          quote: "I found my dream villa with Raasta’s professional guidance.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-couple-signing-document-while-having-meeting-with-real-estate-agent-office-focus-is-man_637285-2814.jpg",
        },
        {
          name: "John Doe",
          role: "International Investor",
          quote: "Professional, reliable, and deeply knowledgeable about the market.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg",
        },
        {
          name: "Fahad Khan",
          role: "Entrepreneur",
          quote: "The 20/80 plan helped me secure my first asset.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",
        },
        {
          name: "Mariam Begum",
          role: "Investor",
          quote: "Unbeatable support throughout the acquisition phase.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-businesswoman-showing-winning-gesture_1262-4730.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready?"
      text="Start your real estate journey in Dubai with purpose."
      primaryButton={{
        text: "Talk to Alif on WhatsApp",
        href: "https://wa.me/971558766369",
      }}
      secondaryButton={{
        text: "Email Enquiry",
        href: "mailto:alifh4466@gmail.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
