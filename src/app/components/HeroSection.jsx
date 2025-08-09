import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiCplusplus, SiFastapi } from 'react-icons/si';

export default function HeroSection() {
  return (
    <section className="bg-[#02111B] text-white py-20">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
        
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#30292F] shadow-lg transition-transform duration-300 hover:scale-105 relative">
          <Image
            src="/me.PNG"
            alt="Adil Hussain"
            fill
            className="object-cover object-[90%_40%] scale-150"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-sans">
          Hi, I'm Adil Hussain
        </h1>

        <p className="text-2xl md:text-3xl font-medium leading-snug tracking-wide font-sans">
          Full Stack JavaScript Developer • Next.js Enthusiast • Educator
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-2xl">
          {[FaJs, SiTypescript, FaReact, SiNextdotjs, FaNodeJs, SiTailwindcss,FaPython,SiFastapi, FaGitAlt, SiCplusplus].map((Icon, index) => (
            <div
              key={index}
              className="bg-[#3F4045] text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            >
              <Icon />
            </div>
          ))}
        </div>

        <Button variant="default" className="bg-[#30292F] hover:bg-[#1f1b1e] text-white text-lg px-6 py-4 mt-4">
          View My Work ↓
        </Button>
      </div>
    </section>
  );
}
