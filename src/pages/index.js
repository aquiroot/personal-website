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
          Hola! Soy <span>Damian Colaneri.</span>
        </h3>
        <p>
          Creé ION para compartir mi experiencia y aprender más en el camino.
          Estoy interesado en proyectos open source y todo lo relacionado con el
          trabajo en comunidad.
        </p>
        <p>
          Seguro te estarás preguntando ¿porqué <span>ION</span>? Bueno, porque
          es corto, fácil de recordar y estaba disponible! 🤟️
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
