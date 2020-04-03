import React, { useEffect, useState } from "react"
import tw from "twin.macro"

function randomElement<T>(array: readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

type Props = {
  readonly duration?: number,
  readonly strings: string[]
}

const Wrapper: any = tw.div`text-2xl mx-auto text-gray-300 sm:max-w-full`

export const SwitchingTextComponent: React.FC<Props> = ({ duration = 5, strings }) => {
  const [text, setText] = useState(randomElement(strings))

  useEffect(() => {
    const interval = setInterval(() => {
      // reduce likelihood of duplicate elements
      const str = randomElement(strings)
      setText(text => str == text ? randomElement(strings) : str)
    }, duration * 1000)

    return () => clearInterval(interval)
  })

  return (<Wrapper> {text} </Wrapper>)
}
