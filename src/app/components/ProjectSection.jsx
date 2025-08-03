'use client';

const projects = [
  {
    title: 'Rollers AI',
    description:
      'Upload an image of your car and receive an AI-generated rolling shot with custom parameters like time of day, ambiance, setting, and lighting.',
    link: 'https://rollers-ai.vercel.app/',
    github: 'https://github.com/adilh621/rollers-ai',
  },
  {
    title: 'Cars N Poké',
    description:
      "Upload a photo of your car and add your favorite Pokémon into the scene with realistic lighting, scale, and shadows using AI.",
    link: 'https://carsnpoke.vercel.app/',
    github: 'https://github.com/adilh621/carsnpoke',
  },
  {
    title: 'NeuroPlay (CNN Visualizer)',
    description:
      'Animated CNN visualizer that shows how a model learns through gradient descent, updating filters step-by-step to match target output.',
    link: 'https://neuro-play.vercel.app/',
    github: 'https://github.com/adilh621/NeuroPlay',
  },
  {
    title: 'AirBnb (clone)',
    description: 'An AirBnb clone built with Next.js and Tailwind CSS.',
    link: 'https://air-bnb-indol.vercel.app/',
    github: 'https://github.com/adilh621/airBnb',
  },
];

export default function ProjectSection() {
  return (
    <section className="bg-white text-[#2274A5] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#FFBF00] rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-base mb-6">{project.description}</p>
              </div>
              <div className="flex justify-center gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#E83F6F] text-white font-semibold rounded-full hover:bg-[#c52b5b] transition"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-[#E83F6F] text-[#E83F6F] font-semibold rounded-full hover:bg-[#E83F6F] hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
