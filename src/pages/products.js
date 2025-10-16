import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"

// One placeholder image for all product cards
const PLACEHOLDER_IMG = "/images/brand/project_placeholder.png"

export default function Products() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const sectionFromURL = params.get("section")

  const [selectedSection, setSelectedSection] = useState(sectionFromURL || "published")


    useEffect(() => {
    navigate(`/products?section=${selectedSection}`, { replace: true })
  }, [selectedSection])

  return (
    <Layout>
      <h1 className="title-header-large">Products</h1>
      <p>
        <b>Early Bird Labs</b> builds small-but-mighty tools and open-source projects.
        Everything here is fictional demo content for an open-source website template.
        Explore our “published” apps, community repos, and a few extras coming soon.
      </p>

      <div className="products-container">
        {/* Sidebar Navigation */}
        <nav className="sidebar" aria-label="Products Sections">
          <ul>
            <li>
              <button
                className={selectedSection === "published" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("published")
                }}
              >
                <h3>Published</h3>
              </button>
            </li>
            <li>
              <button
                className={selectedSection === "open-source" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("open-source")
                }}
              >
                <h3>Open Source</h3>
              </button>
            </li>
            <li>
              <button
                className={selectedSection === "content" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("content")
                }}
              >
                <h3>Coming Soon</h3>
              </button>
            </li>
          </ul>
        </nav>

        {/* Content based on Selected Section */}
        <div className="content">
          {selectedSection === "published" && (
            <section className="product-section" aria-labelledby="published-software">
              <h2 id="published-software">Published Software</h2>
              <p>
                Fictional apps that showcase our typical style and stack. Links and
                imagery use placeholders so you can fork and fill with your own work.
              </p>
              <hr />

              {/* Project 1 */}
              <article className="project-card">
                <h3>
                  <a className="regular-link" href="#" onClick={e => e.preventDefault()}>
                    Dawn Notes
                  </a>
                </h3>
                <p>
                  A minimalist notes app for the first hour of your day — capture tasks,
                  ideas, and goals before distractions. Syncs later; feels instant now.
                </p>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img
                    className="projects-image"
                    src={PLACEHOLDER_IMG}
                    alt="Dawn Notes — placeholder product image"
                  />
                </a>
                <p><b>Category:</b> Mobile Application</p>
                <p><b>Technology:</b> iOS, SwiftUI, Core Data</p>
                <div className="social-links">
                  <a href="#" onClick={e => e.preventDefault()} aria-label="App Store">
                    <i className="fa-brands fa-app-store-ios"></i>
                  </a>
                  <a href="#" onClick={e => e.preventDefault()} aria-label="External link">
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                </div>
              </article>
              <hr />

              {/* Project 2 */}
              <article className="project-card">
                <h3>
                  <a className="regular-link" href="#" onClick={e => e.preventDefault()}>
                    Sunbeam Uploader
                  </a>
                </h3>
                <p>
                  Drag-and-drop uploads with instant previews, signed URLs, and one-line
                  embeds. Built for docs, blogs, and design handoffs.
                </p>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img
                    className="projects-image"
                    src={PLACEHOLDER_IMG}
                    alt="Sunbeam Uploader — placeholder product image"
                  />
                </a>
                <p><b>Category:</b> Web Application</p>
                <p><b>Technology:</b> React, Node, S3-compatible storage</p>
                <div className="social-links">
                  <a href="#" onClick={e => e.preventDefault()} aria-label="External link">
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                  <a href="#" onClick={e => e.preventDefault()} aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </article>
              <hr />

              {/* Project 3 */}
              <article className="project-card">
                <h3>
                  <a className="regular-link" href="#" onClick={e => e.preventDefault()}>
                    Morning Metrics
                  </a>
                </h3>
                <p>
                  A single-screen dashboard for daily pulse checks — traffic, sales,
                  signups, and support all in one calm view.
                </p>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img
                    className="projects-image"
                    src={PLACEHOLDER_IMG}
                    alt="Morning Metrics — placeholder product image"
                  />
                </a>
                <p><b>Category:</b> Web Application</p>
                <p><b>Technology:</b> Gatsby/Next, Serverless, Charts</p>
                <div className="social-links">
                  <a href="#" onClick={e => e.preventDefault()} aria-label="External link">
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                  <a href="#" onClick={e => e.preventDefault()} aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </article>
              <hr />
            </section>
          )}

          {selectedSection === "open-source" && (
            <section className="product-section" aria-labelledby="open-source-software">
              <h2 id="open-source-software">Open Source Software</h2>
              <p>
                Fictional repos that reflect our typical contributions: utilities,
                starter kits, and design tokens. Replace links with your real GitHub org.
              </p>
              <hr />

              {/* OSS 1 */}
              <article className="project-card">
                <h3>
                  <a className="regular-link" href="#" onClick={e => e.preventDefault()}>
                    ebl-design-tokens
                  </a>
                </h3>
                <p>
                  Cross-platform design tokens for color, type, and spacing — JSON first,
                  with build outputs for CSS variables, iOS, and Android.
                </p>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img
                    className="projects-image"
                    src={PLACEHOLDER_IMG}
                    alt="ebl-design-tokens — placeholder repository image"
                  />
                </a>
                <p><b>Category:</b> UI/UX, Theming</p>
                <p><b>Technology:</b> JSON, Style Dictionary, CSS</p>
                <div className="social-links">
                  <a href="#" onClick={e => e.preventDefault()} aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" onClick={e => e.preventDefault()} aria-label="Docs">
                    <i className="fa-solid fa-book"></i>
                  </a>
                </div>
              </article>
              <hr />

              {/* OSS 2 */}
              <article className="project-card">
                <h3>
                  <a className="regular-link" href="#" onClick={e => e.preventDefault()}>
                    sunrise-starter
                  </a>
                </h3>
                <p>
                  A batteries-included app starter with auth, theming, forms, routing,
                  and testing — so you can ship before lunch.
                </p>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img
                    className="projects-image"
                    src={PLACEHOLDER_IMG}
                    alt="sunrise-starter — placeholder repository image"
                  />
                </a>
                <p><b>Category:</b> Boilerplate, Starter Kit</p>
                <p><b>Technology:</b> React, Vite, Testing Library</p>
                <div className="social-links">
                  <a href="#" onClick={e => e.preventDefault()} aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" onClick={e => e.preventDefault()} aria-label="External link">
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                </div>
              </article>
              <hr />

              {/* OSS 3 */}
              <article className="project-card">
                <h3>
                  <a className="regular-link" href="#" onClick={e => e.preventDefault()}>
                    roost-cli
                  </a>
                </h3>
                <p>
                  A tiny CLI for generating opinionated project scaffolds — linted,
                  formatted, and ready to push.
                </p>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img
                    className="projects-image"
                    src={PLACEHOLDER_IMG}
                    alt="roost-cli — placeholder repository image"
                  />
                </a>
                <p><b>Category:</b> Developer Tools</p>
                <p><b>Technology:</b> Node.js, TypeScript</p>
                <div className="social-links">
                  <a href="#" onClick={e => e.preventDefault()} aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" onClick={e => e.preventDefault()} aria-label="NPM">
                    <i className="fa-brands fa-npm"></i>
                  </a>
                </div>
              </article>
              <hr />
            </section>
          )}

          {selectedSection === "content" && (
            <section className="product-section" aria-labelledby="upcoming-content">
              <h2 id="upcoming-content">Upcoming Content</h2>
              <p>
                <b>At Early Bird Labs</b>, we publish practical guides and templates
                for indie devs and small teams. What’s cooking:
              </p>
              <ul>
                <li>“Shipping Before Sunrise” — a series on tiny product launches</li>
                <li>Design tokens starter kit (with docs & examples)</li>
                <li>CI templates for web and mobile apps</li>
                <li>Case studies on performance and accessibility wins</li>
                <li>Short videos on developer ergonomics & UX patterns</li>
              </ul>
              <p><b>Stay tuned!</b> New posts drop with the first cup of coffee. ☕</p>
              <hr />
            </section>
          )}
        </div>
      </div>
    </Layout>
  )
}
