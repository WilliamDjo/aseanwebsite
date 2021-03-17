import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyle from "./header.module.scss"

import image from "../images/inverted+uac.png"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <nav className={headerStyle.nav}>
        {/* <h1>
        <Link to="/" className={headerStyle.link}>
          {siteTitle}
        </Link>
      </h1> */}
        <Link to="/" className={headerStyle.link}>
          <img src={image} className={headerStyle.logo} alt="logo" />
        </Link>
        <ul className={headerStyle.nav_list}>
          <li className={headerStyle.nav_item}>
            <Link
              className={headerStyle.link}
              activeClassName={headerStyle.active_link}
              to="/"
            >
              Home
            </Link>
          </li>

          <li className={headerStyle.nav_item}>
            <Link
              activeClassName={headerStyle.active_link}
              to="/about"
              className={headerStyle.link}
            >
              About
            </Link>
          </li>
          <li className={headerStyle.nav_item}>
            <Link
              activeClassName={headerStyle.active_link}
              to="/team"
              className={headerStyle.link}
            >
              Our team
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
