import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "../styles/footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()}, Realizado con...
      {`   `}
      <a href="https://www.gatsbyjs.com" rel="noreferrer" target="_blank">
        <StaticImage src="../images/gatsby.svg" width={30} alt="gatsby" />
      </a>
      <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
        <StaticImage src="../images/netlify.svg" width={30} alt="netlify" />
      </a>
      <a
        href="https://github.com/aquiroot/personal-website"
        rel="noreferrer"
        target="_blank"
      >
        <StaticImage src="../images/github.svg" width={34} alt="github" />
      </a>
      <a href="https://storyset.com/" rel="noreferrer" target="_blank">
        <StaticImage src="../images/storyset.svg" width={80} alt="storyset" />
      </a>
    </div>
  )
}
