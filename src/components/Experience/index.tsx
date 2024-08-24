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
    description: "Developed and maintained scalable, high-performance user interfaces for the Netlify app, focusing on enterprise clients, while contributing to architectural decisions, code reviews, automated testing, and developer tools.",
    stack: ["React", "TypeScript", "TailwindCSS", 'Redux', 'Highcharts'],
  },
  {
    id: 2,
    title: "Principal Software Engineer",
    company: "Teespring",
    location: "San Francisco, CA",
    startDate: "May 2019",
    endDate: "Jul 2022",
    description: "Oversaw front end strategy, made architectural decisions, developed front end tooling, and lead impactful projects like White Label Stores which became a major growth driver for the company.",
    stack: ["React", "Sass", 'Storybook', 'Redux', 'Rails', 'Framer Motion'],
  },
  {
    id: 3,
    title: "Senior Frontend Developer",
    company: "Redshift Digital, Inc. | Blink UX",
    location: "San Francisco, CA",
    startDate: "May 2015",
    endDate: "Apr 2019",
    description: "Led the development of scalable design systems and full-scale web and mobile apps in React and React Native, collaborating closely with design and research teams for clients like Kaiser Permanente, Netflix, and One Medical.",
    stack: ["React", 'JavaScript', "Sass", 'Redux', 'GSAP', 'D3.js', 'React Native', 'UX Design'],
  },
  {
    id: 4,
    title: "Front End Developer / UX Designer",
    company: "Zen Den Web Design",
    location: "San Francisco, CA",
    startDate: "Sep 2013",
    endDate: "Apr 2015",
    description: "Led end-to-end web projects for local businesses in SF, specializing in designing and developing custom WordPress sites, as well as creating logos, brochures, and other branding materials while managing client relationships and integrating feedback to deliver successful, purpose-built websites.",
    stack: ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'PHP', 'UX Design'],
  },
  {
    id: 5,
    title: "Front End Developer / UX Designer",
    company: "Bernardi Web Design",
    location: "Antioch, CA",
    startDate: "Aug 2010",
    endDate: "Sep 2013",
    description: "Working for my family's local web design business, I began my career by building and maintaining custom WordPress themes for local businesses, developing a strong passion for front-end design and development that continues to drive my work today.",
    stack: ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'PHP', 'UX Design'],
  }
];

const Experience = () => {
  return (
    <>
      <Anchor id="experience" />
      <div className="lg:min-h-screen pt-10 mb-10 md:pt-24 md:mb-24 relative @container">
        <div className="w-[80px] h-2 bg-green mb-10" />
        <h2 className="text-2xl font-extrabold uppercase mb-2">What have I been up to?</h2>
        <p className="text-grey-light text-sm max-w-[460px] mb-2">I&apos;ve had the opportunity to work with some amazing companies and teams over the years.</p>

        {jobs.map((job) => (
          <div key={job.id} className="grid grid-cols-1 @lg:grid-cols-[180px,1fr] my-10"> 
            <div className="text-sm uppercase font-bold text-grey-light top-[1px] relative mb-4">
              {job.startDate} — {job.endDate}
            </div> 

            <div className="border-b-[1px] border-b-grey pb-4">
              <h3 className="font-extrabold uppercase mb-3">{job.title} —<br /><span className="text-sm text-grey-light">{job.company}</span></h3>            
              <p className="text-sm mb-4">{job.description}</p>
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