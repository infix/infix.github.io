import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="bg-gray-900 h-screen w-screen">
    <SEO title="Home" />

    <div className="container">
      <h1 className="text-white text-center text-4xl">
        Hi, I'm Amr
      </h1>

      <div className="mx-auto text-center text-gray-100">
        <Link className="block underline text-blue-500" to="/resume/">Resume</Link>
        <Link className="block underline text-blue-500" to="/resume/">Skills</Link>
        <Link className="block underline text-blue-500" to="/resume/">Projects</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
