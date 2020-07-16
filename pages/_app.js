import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../css/theme";
import { GlobalStyles } from "../css/globalStyles";
import ThemeToggle from "../components/ThemeToggle";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeToggle theme={theme} toggleTheme={themeToggler} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
