import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "../styles/footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()}, Built with
      {`   `}
      <a href="https://www.gatsbyjs.com">
        <StaticImage src="../images/gatsby.svg" width={30} alt="gatsby" />
      </a>
      <a href="https://www.gatsbyjs.com">
        <StaticImage src="../images/netlify.svg" width={30} alt="netlify" />
      </a>
      <a href="https://www.gatsbyjs.com">
        <StaticImage src="../images/github.svg" width={30} alt="github" />
      </a>
    </div>
  )
}
