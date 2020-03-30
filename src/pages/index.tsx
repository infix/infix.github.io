import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { SwitchingTextComponent } from "../components/SwitchingTextComponent"

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
]

const IndexPage = () => (
  <div className="bg-gray-900 min-h-screen min-w-screen flex">
    <SEO title="Home" />

    <div className="flex flex-col m-auto">
      <h1 className="text-white text-center">
        <span className="block text-4xl">Hi, I'm Amr</span>
        <SwitchingTextComponent strings={strings} duration={2} />
      </h1>

      <div className="mt-3 mx-auto text-center text-gray-100">
        <Link className="block underline text-blue-500" to="/resume/">Resume</Link>
        <Link className="block underline text-blue-500" to="/skills/">Skills</Link>
        <Link className="block underline text-blue-500" to="/resume/">Projects</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
