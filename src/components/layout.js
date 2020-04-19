/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `1rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{textAlign: `center`, background: `#11C4D4`, padding: `3rem`,  width: `100%`}}>
          © {new Date().getFullYear()}, this site is a work in progress.
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
