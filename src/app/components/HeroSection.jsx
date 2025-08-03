import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiCplusplus } from 'react-icons/si';

export default function HeroSection() {
  return (
    <section className="bg-[#FFBF00] text-[#2274A5] py-20">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
        
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#E83F6F] shadow-lg transition-transform duration-300 hover:scale-105 relative">
          <Image
            src="/me.PNG"
            alt="Adil Hussain"
            fill
            className="object-cover object-[90%_40%] scale-125"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-sans">
          Hi, I'm Adil Hussain
        </h1>

        <p className="text-2xl md:text-3xl font-medium leading-snug tracking-wide font-sans">
          Full Stack JavaScript Developer • Next.js Enthusiast • Educator
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-2xl">
          {[FaHtml5, FaCss3Alt, FaJs, SiTypescript, FaReact, SiNextdotjs, FaNodeJs, SiTailwindcss, FaGitAlt, SiCplusplus].map((Icon, index) => (
            <div
              key={index}
              className="bg-white text-[#2274A5] p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            >
              <Icon />
            </div>
          ))}
        </div>

        <Button variant="default" className="bg-[#E83F6F] hover:bg-[#c52b5b] text-white text-lg px-6 py-4 mt-4">
          View My Work ↓
        </Button>
      </div>
    </section>
  );
}
