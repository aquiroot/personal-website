import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="content">
      <StaticImage
        src="../images/Programming-bro.svg"
        width={400}
        alt="programing"
      />
      <div>
        <h3>
          Hi! I'm <span>Damian Colaneri</span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
