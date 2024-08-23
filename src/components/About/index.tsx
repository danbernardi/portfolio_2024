import Anchor from "@/components/ui/Anchor";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Anchor id="about" />
      <div className="lg:min-h-[100svh] pt-10 mb-10 md:pt-24 md:mb-24 relative">
        <div className="w-[80px] h-2 bg-yellow mb-10" />
        <h2 className="text-2xl font-extrabold uppercase mb-2">Who am I?</h2>

        <p>I began my journey in web development at an early age, assisting my mom with her local web design business in the San Francisco Bay Area. From the start, I discovered a natural affinity for creating intuitive, engaging websites, a passion I&apos;ve nurtured throughout my career. My formal education in design at Los Medanos College in Pittsburg, CA, combined with a self-driven quest to master front-end technologies, has been pivotal in my professional growth.</p>
        <p className="mt-4">Early in my career, I worked with various design and development agencies across the Bay Area, crafting websites for both large corporations and small businesses. This diverse experience exposed me to a wide array of projects—from marketing sites and e-commerce platforms to SAAS web applications, design systems, component libraries, and CMS-powered brochure sites. Notably, I contributed to projects for Kaiser Permanente and Netflix, where I played key roles in delivering impactful user experiences.</p>
        <p className="mt-4">Transitioning to the startup world, I joined Teespring, a creator-commerce platform, where I led front-end strategy company-wide. I collaborated closely with the design team to develop a React-based component library and design system, and was a key developer on the White Label Stores project, which became a major growth driver for the company. At Netlify, I started on the Growth team, where I built MVPs and used data-driven experimentation to identify and A/B test growth opportunities. Later, I moved to the enterprise experience team, where I focused on enhancing the value proposition of Netlify&apos;s product for our enterprise customers.</p>
        <p className="mt-4">When I&apos;m not in front of my computer, you&apos;ll likely find me hiking around the Pacific Northwest with my wife and dog, or working through an extensive backlog of retro video games.</p>

        <Image
          src="/about.jpg"
          alt="Daniel Bernardi"
          width={1200}
          height={673}
          className="rounded mt-6 mb-16 md:mt-6 md:mb-6"
        />
      </div>
    </>
  );
}

export default About;