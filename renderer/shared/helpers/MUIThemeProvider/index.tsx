import { FC, useEffect, useState } from 'react';

import { GlobalStyles, CssBaseline, ThemeProvider } from '@mui/material';
import { useTheme } from 'next-themes';

import { NorthDarkTheme } from '../../../styles/darkTheme';
import { globalStyles } from '../../../styles/globalStyles';
import { NorthLightTheme } from '../../../styles/lightTheme';

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(NorthDarkTheme);

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(NorthLightTheme)
      : setCurrentTheme(NorthDarkTheme);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
