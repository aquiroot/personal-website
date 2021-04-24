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
        width={800}
        alt="programing"
      />
      <div>
        <h3>
          Hola! soy <span>Damian Colaneri</span>
        </h3>
        <p>
          Analista de sistemas, apasionado por la tecnologia. Mas de 15 años de
          experiencia en administracion de servidores, redes, AWS, y desarrollo.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
