import Anchor from "@/components/ui/Anchor";

type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gamesalmanac",
    description: "A web app for tracking upcoming video game releases. Data is sourced from the IGDB.com API.",
    stack: ["React", "TypeScript", "TailwindCSS", 'NextJS'],
  },
  {
    id: 2,
    title: "Buttery UI",
    description: "A smooth ass react based component library. Built with TypeScript, Storybook and TailwindCSS.",
    stack: ["React", "TypeScript", "TailwindCSS", 'Storybook', 'NPM'],
  },
  {
    id: 3,
    title: "Tetrift",
    description: "Tetris clone built with React. This was originally a hackathon project from my days at Redshift Digital. I recently rebuilt it to work with the latest version of react.",
    stack: ["React", "Sass"],
  },
  {
    id: 4,
    title: "useMediaQuery",
    description: "A custom react hook for managing media queries in a React environment. Deployed as an npm package.",
    stack: ["React", "TypeScript", 'Vite', 'NPM'],
  },
  {
    id: 5,
    title: "Income Tax Calculator",
    description: "A web app for calculating state income taxes. Built using React, NextJS and the Nivo charting library.",
    stack: ["React", "TypeScript", 'NextJS', 'Nivo'],
  },
];

const Projects = () => {
  return (
    <>
      <Anchor id="projects" />
      <div className="min-h-screen pt-24 mb-24 relative">
        <div className="w-[80px] h-2 bg-pink mb-10" />
        <h2 className="text-2xl font-extrabold uppercase mb-2">Some cool stuff I&apos;ve built</h2>
        <p className="text-grey-light text-sm max-w-[460px] mb-2">Here's a handful of personal projects I've been working on recently.</p>


        {projects.map((project) => (
          <div key={project.id} className="grid grid-cols-[180px,1fr] my-10"> 
            <div className="mr-6">
              <div className="bg-grey rounded w-full h-[120px]" />
            </div> 

            <div className="border-b-[1px] border-b-grey pb-4">
              <h3 className="font-extrabold uppercase mb-3">{project.title} —</h3>            
              <p className="text-sm">{project.description}</p>
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