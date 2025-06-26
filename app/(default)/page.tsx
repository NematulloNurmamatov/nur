export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/app/components/hero-home";
import BusinessCategories from "@/app/components/business-categories";
import FeaturesPlanet from "@/app/components/features-planet";
import LargeTestimonial from "@/app/components/large-testimonial";
import Cta from "@/app/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
