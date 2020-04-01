import React, { useEffect, useRef } from "react"
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

const fetcher = async (graphQLParams: any) => {
  const data = await fetch(
    process.env.GRAPHQL_API!,
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

const query = `{
  me {
    name
    email
    location
    phone
    jobs {
      position
      startDate
      endDate
      description
      company
    }
    skills(top: 5) {
      name
      proficiency
    }
    projects {
      name
      description
      technologies
      link
    }
  }
}
`

const SkillsPage = () => {
  const graphiqlRef = useRef<typeof GraphiQL>()
  const prettifyRef = useRef<HTMLDivElement>()

  const handleClickPrettifyButton = () => {
    const editor = graphiqlRef.current.getQueryEditor()
    const currentText = editor.getValue()
    const { parse, print } = require("graphql")
    const prettyText = print(parse(currentText))
    editor.setValue(prettyText)
  }

  useEffect(() => {
    const editor = document.querySelector("#gatsby-focus-wrapper div.queryWrap")!

    // @ts-ignore ignoring since typescript as of this moment doesn't have
    const resizeObserver: any = new ResizeObserver(() => {
      if (!prettifyRef || !prettifyRef.current)
        return

      const prettifyBtnWidth = prettifyRef.current!.getBoundingClientRect().width
      const editorWidth = editor.getBoundingClientRect().width
      const padding = 10
      prettifyRef.current!.style.left = `${editorWidth - prettifyBtnWidth - padding}px`
    })

    resizeObserver.observe(editor)

    return resizeObserver.disconnect
  }, [prettifyRef])

  return (
    <div className="h-screen w-screen">
      <GraphiQL ref={graphiqlRef} style={{ height: "100vh" }} query={query} fetcher={fetcher}>
        <GraphiQL.Toolbar>
          <div ref={prettifyRef as any} className="custom-prettify-button">
            <GraphiQL.Button
              onClick={handleClickPrettifyButton}
              label="{ } Prettify"
              title="Prettify Query (Shift-Ctrl-P)"
            />
          </div>
        </GraphiQL.Toolbar>
      </GraphiQL>
    </div>
  )
}

export default SkillsPage

