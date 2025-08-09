import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import TeachingSection from "./components/TeachingSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <ProjectSection/>
      <TeachingSection signupUrl="https://tutoring.adilh.co/"/>
    </main>
  );
}
