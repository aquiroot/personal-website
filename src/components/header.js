import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/header.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <div className="navBar">
      <div className="logo">
        <StaticImage src="../images/day39-pc.png" width={50} alt="logo" />
        <Link to="/">
          <h1>ION</h1>
        </Link>
      </div>

      <nav className="navBar__menu">
        <Link to="/about">
          <h4>Sobre mi</h4>
        </Link>
        <Link to="/projects">
          <h4>Proyectos</h4>
        </Link>
        <Link to="/contact">
          <h4>Contacto</h4>
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
