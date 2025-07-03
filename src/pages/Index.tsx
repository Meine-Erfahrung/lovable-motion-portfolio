import Navigation from "@/components/Layout/Navigation";
import AnimatedBackground from "@/components/Layout/AnimatedBackground";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Projects from "@/components/Sections/Projects";
import Resume from "@/components/Sections/Resume";
import CodingProfiles from "@/components/Sections/CodingProfiles";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
