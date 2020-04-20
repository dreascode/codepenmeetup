import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './logo'; 
const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header_logo">
      <Logo/>
      <div className="invisible">
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
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
