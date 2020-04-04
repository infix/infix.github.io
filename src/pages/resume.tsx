import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { AppTheme, Layout } from "../components/Layout"
import { ThemeSwitcher } from "../components/ThemeSwitcher"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const Wrapper: any = styled.div`
  ${tw`h-screen w-screen`}
  
  ${(props: any) => css`background: ${props.theme.theme.colors.bg}`}
 `

// TODO style the back button
const ResumePage = () => {
  const { theme } = useTheme<AppTheme>()

  return (
    <Wrapper>
      <ThemeSwitcher />
      <div tw="m-4 fixed left-0 top-0">
        <Link tw="block font-bold" style={{ color: theme.colors.primary }} to="/">
          {"<"} back
        </Link>
      </div>
      <div tw="pt-12 h-full mx-auto w-full shadow-2xl">
        <iframe tw="h-full mx-auto w-full shadow-2xl"
                style={{ maxWidth: "9in" }}
                src={process.env.RESUME_PDF_URL} />
      </div>
    </Wrapper>
  )
}

export default () => <Layout title={"Resume"}><ResumePage /></Layout>
