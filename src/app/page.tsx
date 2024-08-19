import Sidenav from "@/views/Sidenav";
import About from "@/views/About";
import Experience from "@/views/Experience";
import Projects from "@/views/Projects";

export default function Home() {
  return (
    <div className="grid grid-cols-[4fr,2fr,6fr] min-h-screen px-24 max-w-[1280px] mx-auto relative">
      <Sidenav />
      {/* Grid spacer */}
      <div />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
