import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

const Wrapper: any = tw.div`bg-gray-900 h-screen w-screen`

const ResumePage = () => (
  <Wrapper>
    <div tw="text-white text-center">
      <Link tw="block underline text-blue-500" to="/">Go back to the homepage</Link>
    </div>
    <iframe style={{ maxWidth: "9in" }} tw="min-h-screen mx-auto w-full"
            src={process.env.RESUME_PDF_URL} />
  </Wrapper>
)

export default ResumePage
