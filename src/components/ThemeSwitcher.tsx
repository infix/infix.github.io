import React, { useState } from "react"
import { useTheme } from "emotion-theming"
import { AppTheme, Theme } from "./Layout"

import tw from "twin.macro"

const Wrapper: any = tw.div`fixed right-0 top-0 p-4 flex flex-row`

export const ThemeSwitcher = () => {
  const [showThemes, setShowThemes] = useState(false)
  const { theme, setTheme, themes, themeName } = useTheme<AppTheme>()

  // @ts-ignore this is the correct type
  const themeNames: Theme[] = Object.keys(themes)

  return (
    <Wrapper onMouseLeave={() => setShowThemes(false)}>
      {showThemes && <div tw="mr-2 flex">
        {themeNames.map(t => (
          <div style={{ color: theme.colors.fg }} key={t} onClick={() => setTheme(t)}
               tw="select-none mx-4 capitalize opacity-50 hover:opacity-100 cursor-pointer">
            {t}</div>
        ))}
      </div>}
      <div style={{ color: theme.colors.primary, opacity: showThemes ? "100%" : "50%" }}
           tw="select-none capitalize font-bold"
           onMouseEnter={() => setShowThemes(true)}>
        {`${themeName} mode`}
      </div>
    </Wrapper>
  )
}
