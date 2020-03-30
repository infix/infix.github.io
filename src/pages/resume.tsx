import React from "react"
import { Link } from "gatsby"

const ResumePage = () => (
  <div className="bg-gray-900 h-screen w-screen">
    <div className="text-white text-center">
      <Link className="block underline text-blue-500" to="/">Go back to the homepage</Link>
    </div>
    <iframe style={{ maxWidth: "9in" }} className="min-h-screen mx-auto w-full"
            src={process.env.RESUME_PDF_URL} />
  </div>
)

export default ResumePage
