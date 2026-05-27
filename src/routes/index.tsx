import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { Particles } from "@/components/portfolio/Particles";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Samadhi Wijekoon — Junior QA Engineer & Automation Tester" },
      {
        name: "description",
        content:
          "Portfolio of Samadhi Wijekoon, Junior Quality Assurance Engineer from Sri Lanka — manual & automation testing with Playwright, Selenium, Appium, Maestro.",
      },
      { property: "og:title", content: "Samadhi Wijekoon — Junior QA Engineer" },
      { property: "og:description", content: "Manual & automation QA portfolio — Playwright, Selenium, Appium, Maestro." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Samadhi Wijekoon",
          jobTitle: "Junior Quality Assurance Engineer",
          address: { "@type": "PostalAddress", addressLocality: "Bandarawela", addressCountry: "LK" },
          knowsAbout: ["Software Testing", "Automation Testing", "Playwright", "Selenium", "Appium", "Maestro"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
