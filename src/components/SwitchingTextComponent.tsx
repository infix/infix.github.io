import React, { useEffect, useState } from "react"

function randomElement<T>(array: readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

type Props = {
  readonly duration?: number,
  readonly strings: string[]
}

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

  return (
    <div className="text-2xl mx-auto text-gray-300 max-w-10 sm:max-w-full">
      {text}
    </div>
  )
}
