'use client';

import { useAppContext } from "@/lib/AppContext";
import type { ReactNode } from "react";
import { Waypoint } from "react-waypoint";

type Props = {
  id: string;
  children?: ReactNode;
  offset?: number;
};

const Anchor = ({id, children, offset}: Props) => {
  const {onSetAppState, mediaQuery: {bpIsGT}} = useAppContext();
  

  return (
    <div id={id}>
      <Waypoint
        onEnter={() => bpIsGT('tabletLg') && onSetAppState({ hash: `#${id}` })}
        // topOffset={offset ?? '100px'}
        // bottomOffset={offset ?? '100px'}
      >{children}</Waypoint>
    </div>
  );
};

export default Anchor;