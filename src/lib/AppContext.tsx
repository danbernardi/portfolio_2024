'use client';

import { useState, createContext, type ReactNode, useContext } from 'react';

type Props = {
  children: ReactNode;
};

type AppState = {
  hash: string;
}

export type AppContextType = {
  appState: AppState;
  onSetAppState:  (appState: AppState) => void;
};

const initialState: AppState = {
  hash: ''
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppContextProvider({ children }: Props) {
  const [appState, setAppState] = useState<AppState>(initialState);

  const onSetAppState = (state: Partial<AppState>) => {
    setAppState({
      ...appState,
      ...state
    })
  }

  return (
    <AppContext.Provider value={ { appState, onSetAppState } }>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext<AppContextType>(AppContext);
