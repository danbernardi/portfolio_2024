'use client';

import { type ReactNode, useContext, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAppContext } from "@/lib/AppContext";


type Props = {
  color: string;
  href: string;
  children: ReactNode;
};

const variants = {
  hovered: { width: '25px', marginRight: '0.5rem' },
  blurred: { width: '0%', marginRight: '0rem' },
}

const SidenavLink = ({ color, href, children }: Props) => {
  const [hover, setHover] = useState(false);
  const {appState: {hash}, onSetAppState} = useAppContext();
  const active = useMemo(() => hash === href, [hash, href]);

  return (
    <li>
      <Link
        href={href}
        onClick={() => onSetAppState({hash: href})}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="font-bold uppercase inline-flex items-center py-1 pr-2"
      >
        <motion.div
          initial="blurred"
          animate={hover || active ? 'hovered' : 'blurred'}
          variants={variants}
          className={`bg-${color} h-2`}
        />
        {children}
      </Link>
    </li>
  );
};

export default SidenavLink;
