import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import CourseMaterial from "@/components/layout/sections/courseMaterial";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import Merkanti from "@/components/layout/sections/merkanti";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import FloatingButton from "@/components/ui/FloatingButton";

export const metadata = {
  title: "Formation Sponsoring",
  description: "Formation Sponsoring Facebook",
  openGraph: {
    type: "website",
    // url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Formation Sponsoring",
    description: "Formation Sponsoring Tunisie",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Formation Sponsoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Formation Sponsoring",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <Merkanti />
      <FAQSection />
      <CourseMaterial />
      <PricingSection />
      <ContactSection />
      <FloatingButton />
    </>
  );
}
