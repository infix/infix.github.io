import React, { useEffect, useState } from "react"
import { useTheme } from "emotion-theming"
import { AppTheme } from "./Layout"
import tw from "twin.macro"

function randomElement<T>(array: readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

type Props = {
  readonly duration?: number,
  readonly strings: string[]
}

const Wrapper: any = tw.div`text-2xl mx-auto sm:max-w-full`

export const SwitchingTextComponent: React.FC<Props> = ({ duration = 5, strings }) => {
  const [text, setText] = useState(randomElement(strings))
  const { theme } = useTheme<AppTheme>()

  useEffect(() => {
    const interval = setInterval(() => {
      // reduce likelihood of duplicate elements
      const str = randomElement(strings)
      setText(text => str == text ? randomElement(strings) : str)
    }, duration * 1000)

    return () => clearInterval(interval)
  })

  return (<Wrapper style={{ color: theme.colors.textSubtitle }}> {text} </Wrapper>)
}
