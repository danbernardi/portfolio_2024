'use client';

import { useState, createContext, type ReactNode, useContext } from 'react';
import { useMediaQuery, type Options, type UseMediaQueryReturnType } from '@dbernardi/use-media-query';

type Props = {
  children: ReactNode;
  options?: Options;
};

type AppState = {
  hash: string;
}

export type AppContextType = {
  appState: AppState;
  mediaQuery: UseMediaQueryReturnType;
  onSetAppState:  (appState: AppState) => void;
};

const initialState: AppState = {
  hash: ''
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppContextProvider({ children, options }: Props) {
  const [appState, setAppState] = useState<AppState>(initialState);
  const mediaQuery = useMediaQuery(options ?? {});

  const onSetAppState = (state: Partial<AppState>) => {
    setAppState({
      ...appState,
      ...state
    })
  }

  return (
    <AppContext.Provider value={ { appState, onSetAppState, mediaQuery } }>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext<AppContextType>(AppContext);
