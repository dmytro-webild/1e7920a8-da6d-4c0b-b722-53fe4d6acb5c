import HeroBrand from '@/components/sections/hero/HeroBrand';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function AboutPage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="Why Alif"
      description="Bridges between dreamers and properties. Expert advice in your language."
      primaryButton={{
        text: "Message Alif",
        href: "https://wa.me/971558766369",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "/about",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-happy-couple-going-through-their-housing-project-blueprint-meeting-with-real-estate-agent_637285-3816.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialQuoteCards
      tag="Journey"
      title="My Clients, My Success"
      description="Building long-term wealth for families and investors."
      testimonials={[
        {
          name: "Aman",
          role: "Investor",
          quote: "Reliable guidance.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-man-posing_158595-3050.jpg",
        },
        {
          name: "Sara",
          role: "Investor",
          quote: "Fast, clear, expert.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-with-crossed-arms-smiling_23-2148095677.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
