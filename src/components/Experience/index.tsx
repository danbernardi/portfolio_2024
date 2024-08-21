import Anchor from "@/components/ui/Anchor";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  stack: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Netlify",
    location: "Remote",
    startDate: "Jul 2022",
    endDate: "May 2024",
    description: "Deserunt alias reprehenderit perspiciatis nihil ut reprehenderit eum. Ducimus iste et atque commodi sed aut sed voluptates.",
    stack: ["React", "TypeScript", "TailwindCSS", 'Redux', 'Highcharts'],
  },
  {
    id: 2,
    title: "Principal Software Engineer",
    company: "Teespring",
    location: "San Francisco, CA",
    startDate: "May 2019",
    endDate: "Jul 2022",
    description: "Et veniam alias fuga corrupti expedita nobis in hic. Tenetur sed aut fuga eum qui qui voluptatum eum nemo asperiores beatae.",
    stack: ["React", "Sass", 'Storybook', 'Redux', 'Rails', 'Framer Motion'],
  },
  {
    id: 3,
    title: "Senior Frontend Developer",
    company: "Redshift Digital, Inc. | Blink UX",
    location: "San Francisco, CA",
    startDate: "May 2015",
    endDate: "Apr 2019",
    description: "Inventore vel possimus minus voluptatum debitis unde et nulla sit. Praesentium ad est porro non ab natus tenetur aut nulla. Labore ut cum sunt provident voluptate cumque minima.",
    stack: ["React", 'JavaScript', "Sass", 'Redux', 'GSAP', 'D3.js', 'React Native'],
  },
  {
    id: 4,
    title: "Front End Developer / Web Designer",
    company: "Zen Den Web Design",
    location: "San Francisco, CA",
    startDate: "Sep 2013",
    endDate: "Apr 2015",
    description: "Autem ab animi sint iste similique quo sint. Asperiores adipisci enim hic deserunt molestias et nemo dolor provident. Eos impedit ducimus rerum hic tempora qui quod blanditiis voluptatem nobis. Nisi qui facilis eum aliquam commodi nobis.",
    stack: ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    id: 5,
    title: "Front End Developer / Web Designer",
    company: "Bernardi Web Design",
    location: "Antioch, CA",
    startDate: "Aug 2010",
    endDate: "Sep 2013",
    description: "Et veniam alias fuga corrupti expedita nobis in hic. Tenetur sed aut fuga eum qui qui voluptatum eum nemo asperiores beatae.",
    stack: ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'PHP'],
  }
];

const Experience = () => {
  return (
    <>
      <Anchor id="experience" />
      <div className="min-h-screen pt-24 mb-24 relative">
        <div className="w-[80px] h-2 bg-green mb-10" />
        <h2 className="text-2xl font-extrabold uppercase mb-2">What have I been up to?</h2>
        <p className="text-grey-light text-sm max-w-[460px] mb-2">I&apos;ve had the opportunity to work with some amazing companies and teams over the years.</p>

        {jobs.map((job) => (
          <div key={job.id} className="grid grid-cols-[180px,1fr] my-10"> 
            <div className="text-sm uppercase font-bold text-grey-light top-[1px] relative">
              {job.startDate} — {job.endDate}
            </div> 

            <div className="border-b-[1px] border-b-grey pb-4">
              <h3 className="font-extrabold uppercase mb-3">{job.title} —<br /><span className="text-sm text-grey-light">{job.company}</span></h3>            
              <p className="text-sm">{job.description}</p>
              <ul className='flex flex-wrap my-2 gap-1 text-green'>
                {job.stack.map((stack, index) => (
                  <li key={stack} className="text-xs gap-1 flex">
                    {stack}
                    <span>{index !== job.stack.length - 1 && '—'}</span>
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

export default Experience;