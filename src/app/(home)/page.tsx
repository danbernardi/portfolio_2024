import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Anchor from "@/components/ui/Anchor";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";

export default function Home() {
  return (
    <>
      <BackgroundBeams className="fixed z-[-1]" />
      <div className="min-h-[100svh] py-14 my-10 relative rounded hidden lg:block">
        <Anchor id="" offset={0} />
        <ScrollDownIndicator />
      </div>
      <About />
      <Experience />
      <Projects />
      {/* <Blog /> */}
    </>
  );
}
