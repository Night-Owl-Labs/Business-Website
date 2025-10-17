/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import faviconIco from "../images/favicon.ico"
import appleIcon from "../images/home-icon.png"
import favicon96 from "../images/favicon-96x96.png"
import favicon192 from "../images/favicon-192x192.png"
import favicon512 from "../images/favicon-512x512.png"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content="/images/company/nol-banner_social.png"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content="/images/company/nol-banner_social.png"
      />
      <meta name="msapplication-TileColor" content="#0E2F00" />
      <meta name="theme-color" content="#0E2F00" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      {/* Favicon icons */}
      <link rel="icon" type="image/x-icon" href={faviconIco} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
      <link rel="icon" type="image/png" sizes="192x192" href={favicon192} />
      <link rel="icon" type="image/png" sizes="512x512" href={favicon512} />

      {/* App install (not a favicon) */}
      <link rel="apple-touch-icon" href={appleIcon} />

      {children}
    </Helmet>
  )
}

export default Seo
