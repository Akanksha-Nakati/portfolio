import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
