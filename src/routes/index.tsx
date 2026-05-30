import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { AboutStrip } from "@/components/site/AboutStrip";
import { VisionMission } from "@/components/site/VisionMission";
import { CoreValues } from "@/components/site/CoreValues";
import { Businesses } from "@/components/site/Businesses";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { TimelineDeck } from "@/components/site/TimelineDeck";
import { Statistics } from "@/components/site/Statistics";
import { Leadership } from "@/components/site/Leadership";
import { Sustainability } from "@/components/site/Sustainability";
import { Careers } from "@/components/site/Careers";
import { ClosingBanner } from "@/components/site/ClosingBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arshith Group | Growth is Value" },
      {
        name: "description",
        content:
          "Arshith Group is a diversified Indian enterprise across e-commerce, technology and consulting — building trust and shaping a future driven by progress.",
      },
      { property: "og:title", content: "Arshith Group | Growth is Value" },
      {
        property: "og:description",
        content:
          "Diversified verticals across Arshith Fresh, ArshithInfoTech, Suntech Solutions and the multi-seller marketplace.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Nav />
      <Hero />
      <AboutStrip />
      <VisionMission />
      <CoreValues />
      <Businesses />
      <WhyChooseUs />
      <TimelineDeck />
      <Statistics />
      <Leadership />
      <Sustainability />
      <Careers />
      <ClosingBanner />
      <Footer />
    </main>
  );
}
