import React from "react"
// @ts-ignore
import GraphiQL from "graphiql"
import "graphiql/graphiql.css"
import "./skills.css"
import { Link } from "gatsby"

GraphiQL.Logo = () => (
  <Link className={"h-full"} to="/">
    <button style={{ border: "none", height: "100%", background: "none" }}
            className="docExplorerShow">
      back
    </button>
  </Link>
)

// TODO replace this with a proper fetcher
const fetcher = async (graphQLParams: any) => {
  const data = await fetch(
    "https://swapi-graphql.netlify.com/.netlify/functions/index",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphQLParams),
      credentials: "same-origin",
    },
  )
  return data.json().catch(() => data.text())
}

const SkillsPage = () => {
  return (
    <div className="h-screen w-screen">
      <GraphiQL style={{ height: "100vh" }} query='' fetcher={fetcher} />
    </div>
  )
}

export default SkillsPage

