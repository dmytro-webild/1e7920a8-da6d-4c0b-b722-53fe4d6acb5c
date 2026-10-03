import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "/"
  },
  {
    "name": "Properties",
    "href": "/properties"
  },
  {
    "name": "Payment",
    "href": "/payment"
  },
  {
    "name": "About",
    "href": "/about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Trust",
    "href": "#trust"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Raasta"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Talk to Alif",
        href: "https://wa.me/971558766369",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Raasta – Real Estate With Purpose"
      copyright="© 2024 Raasta. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com/alifrealtydxb",
        },
        {
          icon: Facebook,
          href: "https://www.facebook.com/share/1KVcz8cfAx/",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
