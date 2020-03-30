import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className={"bg-gray-900 h-screen w-screen"}>
    <SEO title="Home" />

    <div className={"mx-auto container text-center text-gray-100"}>
      <div>Links:</div>
      <Link to="/page-2/">Go to the other page</Link>
    </div>
  </div>
)

export default IndexPage
