import { ThemeProvider as NextThemesProvider } from "next-themes";

function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="engineeros-theme"
    >
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;
