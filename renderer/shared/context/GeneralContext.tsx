import { createContext, ReactNode, useContext, useState } from 'react';

type GeneralContextType = {
  theme: string;
  setTheme: (e: string) => void;
};

const contextDefaultValue: GeneralContextType = {
  theme: 'light',
  setTheme: () => {},
};

const GeneralContext = createContext<GeneralContextType>(contextDefaultValue);
export const useGeneralContext = () => useContext(GeneralContext);

interface Props {
  children: ReactNode;
}

export function GeneralProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>(contextDefaultValue.theme);

  const value = {
    theme,
    setTheme,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}
