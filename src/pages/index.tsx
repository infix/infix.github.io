import React from "react"
import { Link } from "gatsby"
import { AppTheme, Layout } from "../components/Layout"
import { useTheme } from "emotion-theming"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { SwitchingTextComponent } from "../components/SwitchingTextComponent"
import { css } from "@emotion/core"
import { ThemeSwitcher } from "../components/ThemeSwitcher"


const strings = [
  "And I'm a software engineer",
  "And I'm a computer engineer",
  "And I'm a person",
  "And I'm a student",
  "And I'm secretly 3 kids in a trench coat pretending to be an adult",
  "And I'm sample text",
  "And I'm a functional programming enthusiast",
  "And I'm a wannabe compiler engineer",
  "And I'm an avid manga reader",
  "And I'm in love with NixOS",
  "And I secretly think that OCaml is cool",
  "And Amr is short for Adaptive Multi-Rate audio codec",
  "And we don't support your browser for best viewing experience we recommend you use internet explorer 3",
  "And that skills page took a depressing amount of time to make 😭",
]


const Wrapper: any = styled.div`
  ${tw`h-screen w-screen flex`}
  
  ${(props: any) => css`background: ${props.theme.theme.colors.bg}`}
 `

const IndexPage = () => {
  const { theme } = useTheme<AppTheme>()
  const { primary, fg } = theme.colors
  return (
    <Wrapper>
      <ThemeSwitcher />

      <div tw="flex flex-col m-auto">
        <h1 tw="text-center" style={{ color: fg }}>
          <span tw="block text-4xl mb-3">Hi, I'm Amr</span>
          <SwitchingTextComponent strings={strings} duration={10} />
        </h1>

        <div tw="mt-3 mx-auto text-center text-gray-100">
          <Link tw="block underline" style={{ color: primary }}
                to="/resume/">Resume</Link>
          <Link tw="block underline" style={{ color: primary }}
                to="/skills/">Skills</Link>
          <Link tw="block underline" style={{ color: primary }}
                to="/resume/">Projects</Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default () => <Layout title="home"><IndexPage /></Layout>
