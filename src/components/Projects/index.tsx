import Anchor from "@/components/ui/Anchor";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  repoUrl: string;
  siteUrl: string;
  description: string;
  stack: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gamesalmanac",
    repoUrl: "https://github.com/danbernardi/gamesalmanac",
    siteUrl: "https://gamesalmanac.com",
    imageUrl: "/gamesalmanac_preview.jpg",
    description: "A web app for tracking upcoming video game releases. Data is sourced from the IGDB.com API.",
    stack: ["React", "TypeScript", "TailwindCSS", 'NextJS', 'shadcn/ui'],
  },
  {
    id: 3,
    title: "Tetrift",
    repoUrl: "https://github.com/danbernardi/tetrift-2024",
    siteUrl: "https://tetrift.vercel.app",
    imageUrl: "/tetrift_preview.jpg",
    description: "Tetris clone built with React. This was originally a hackathon project from my days at Redshift Digital. I recently rebuilt it to work with modern build tools.",
    stack: ["React", "Sass"],
  },
  {
    id: 4,
    title: "useMediaQuery",
    repoUrl: "https://github.com/danbernardi/use-media-query",
    siteUrl: "https://www.npmjs.com/package/@dbernardi/use-media-query",
    imageUrl: "/usemediaquery_preview.jpg",
    description: "A custom react hook for managing media queries in a React environment. Deployed as an npm package.",
    stack: ["React", "TypeScript", 'Vite', 'NPM'],
  },
  // {
  //   id: 5,
  //   title: "Income Tax Calculator",
  //   repoUrl: '',
  //   siteUrl: '',
  //   description: "A web app for calculating state income taxes. Built using React, NextJS and the Nivo charting library.",
  //   stack: ["React", "TypeScript", 'NextJS', 'Nivo'],
  // },
  {
    id: 6,
    repoUrl: "https://github.com/danbernardi/portfolio_2024",
    siteUrl: "https://www.danbernardi.work",
    imageUrl: "/portfolio_2024_preview.jpg",
    title: "Portfolio 2024",
    description: "This site that you're on right now. It's a simple portfolio site to showcase my work and experience, and also an excuse to play with framer motion.",
    stack: ["React", "TypeScript", 'NextJS', 'Framer Motion'],
  },
  {
    id: 2,
    title: "Buttery UI — Work in progress",
    repoUrl: "https://github.com/danbernardi/buttery-ui",
    siteUrl: "https://buttery-ui.vercel.app",
    imageUrl: "/buttery_ui_preview.jpg",
    description: "A smooth ass react based component library. Built with TypeScript, Storybook and TailwindCSS.",
    stack: ["React", "TypeScript", "TailwindCSS", 'Storybook', 'NPM'],
  },
];

const Projects = () => {
  return (
    <>
      <Anchor id="projects" />
      <div className="lg:min-h-[100svh] pt-10 mb-10 md:pt-24 md:mb-24 relative @container">
        <div className="w-[80px] h-2 bg-pink mb-10" />
        <h2 className="text-2xl font-extrabold uppercase mb-2">Some cool stuff I&apos;ve built</h2>
        <p className="text-grey-light text-sm max-w-[460px] mb-2">Here&apos;s a handful of personal projects I&apos;ve been working on recently.</p>

        {projects.map((project) => (
          <div key={project.id} className="grid grid-cols-1 @lg:grid-cols-[180px,1fr] my-10"> 
            <div className="mr-6 mb-4">
              {project.imageUrl
                ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={960}
                    height={530}
                    className="rounded border-[6px] border-grey"
                  />
                )
                : (
                  <div className="bg-grey rounded w-full h-[120px]" />
                )}
            </div> 

            <div className="border-b-[1px] border-b-grey pb-4">
              <h3 className="font-extrabold uppercase mb-3">
                {project.title} —
                <div className="flex gap-4 mt-1">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-grey-light hover:text-pink"
                  >
                    View repository <ArrowUpRight size={16} className="ml-1" />
                  </a>
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-grey-light hover:text-pink"
                  >
                    View site <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </h3>            
              <p className="text-sm mb-4">{project.description}</p>
              <ul className='flex flex-wrap gap-1 my-2 text-pink'>
                {project.stack.map((stack, index) => (
                  <li key={stack} className="text-xs gap-1 flex">
                    {stack}
                    <span>{index !== project.stack.length - 1 && '—'}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;