import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function PropertiesPage() {
  return (
    <>
  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Collection"
      title="Exclusive Listings"
      description="Explore our curated portfolio of premium Dubai real estate."
      features={[
        {
          title: "Luxury Marina",
          description: "High-end waterfront living.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-luxurious-villa-with-modern-architectural-design_23-2151694041.jpg",
        },
        {
          title: "City Center",
          description: "Urban convenience redefined.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-exterior-urban-view_23-2149091989.jpg",
        },
        {
          title: "Downtown Penthouse",
          description: "Panoramic skyline views and ultra-luxury finishes.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-luxurious-villa-with-modern-architectural-design_23-2151694041.jpg",
        },
        {
          title: "Palm Jumeirah Villa",
          description: "Private beachfront sanctuary with exclusive amenities.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-exterior-urban-view_23-2149091989.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Inquiry"
      text="Get the latest property brochure today."
      primaryButton={{
        text: "WhatsApp Now",
        href: "https://wa.me/971558766369",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "mailto:alifh4466@gmail.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
