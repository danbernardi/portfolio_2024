import { Github, Linkedin, Package } from "lucide-react";
import SidenavLink from "./SidenavLink";

const links = [
  {
    href: "#about",
    children: "About",
    color: 'yellow'
  },
  {
    href: "#experience",
    children: "Experience",
    color: 'green'
  },
  {
    href: "#projects",
    children: "Projects",
    color: 'pink'
  },
  {
    href: "#blog",
    children: "Blog",
    color: 'blue'
  }
]

const Sidenav = () => {
  return (
    <aside className="py-24 flex flex-col h-screen justify-between sticky top-0">
      <div>
        <div className="w-[160px] h-2 bg-blue mb-10" />
        <p className="text-sm mb-2">Hi, my name is</p>
        <h1 className="text-6xl font-extrabold uppercase mb-6">Daniel Bernardi<span className="text-blue">.</span></h1>
        <p className="text-grey-light">I design and develop things on the web. Some of those things are pretty neat.</p>

        <ul className="my-24 flex flex-col">
          {links.map((link) => (
            <SidenavLink
              key={link.href}
              {...link}
            />
          ))}
        </ul>
      </div>

      <ul className="flex gap-6 text-grey-light">
        <li>
          <a
            className="hover:text-blue inline-flex items-center"
            href="https://www.linkedin.com/in/dan-bernardi/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="mr-2" size={16} /> LinkedIn
          </a>
        </li>
        <li>
          <a
            className="hover:text-green inline-flex items-center"
            href="https://github.com/danbernardi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="mr-2" size={16} /> Github
          </a>
        </li>
        <li>
          <a
            className="hover:text-pink inline-flex items-center"
            href="https://www.npmjs.com/~dbernardi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Package className="mr-2" size={16} /> NPM
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidenav;