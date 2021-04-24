import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/Programming-bro.svg"
      width={500}
      alt="programing"
    />
    <h3>home page</h3>
  </Layout>
)

export default IndexPage
