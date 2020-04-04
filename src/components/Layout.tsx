import React, { useState } from "react"
import { ThemeProvider } from "emotion-theming"
import SEO from "./seo"

export const themes = {
  dark: {
    colors: {
      primary: "#4299e1",
      bg: "#1a202c",
      fg: "#f7fafc",
      textSubtitle: "#e2e8f0",
    },
  },
  light: {
    colors: {
      primary: "#4299e1",
      bg: "#f7fafc",
      fg: "#1a202c",
      textSubtitle: "#4a5568",
    },
  },
}

// Yikes this is so ugly
export type Theme = keyof typeof themes
export type CustomTheme = typeof themes[Theme];

export interface AppTheme {
  setTheme: (theme: Theme) => void;
  theme: CustomTheme;
  themes: typeof themes
  themeName: Theme
}

function isTheme(str: string): str is Theme {
  return themes.hasOwnProperty(str)
}

type Props = { title: string }

export const Layout: React.FC<Props> = ({ children, title }) => {
  const themeStr = localStorage.getItem("theme") || ""
  const currentTheme: Theme = isTheme(themeStr) ? themeStr : "dark"

  const [theme, setTheme] = useState<CustomTheme>(themes[currentTheme])
  const [themeName, setThemeName] = useState<Theme>(currentTheme)

  const handleSetTheme = (str: string) => {
    const themeStr = isTheme(str) ? str : "dark"
    setThemeName(themeStr)
    localStorage.setItem("theme", themeStr)
    setTheme(themes[themeStr])
  }

  const providedTheme: AppTheme = { theme, setTheme: handleSetTheme, themes, themeName }

  return (
    <ThemeProvider theme={providedTheme}>
      <SEO title={title} />
      {children}
    </ThemeProvider>
  )
}
