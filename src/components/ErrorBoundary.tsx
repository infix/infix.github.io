import React, { ErrorInfo } from "react"

interface Props {
  onError: (error: Error, info: ErrorInfo) => any
}

export class ErrorBoundary extends React.Component<Props> {
  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError(error, info)
  }

  render() {
    return this.props.children
  }
}
