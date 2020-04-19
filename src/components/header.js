import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './logo'; 
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      borderTop: `4px solid #0C81E4`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

            
                <Logo/>
      <h1 style={{
  height: `1px`,
  overflow: `hidden`,
  position: `absolute`,
  whiteSpace: `nowrap`, /* added line */
  width: `1px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
