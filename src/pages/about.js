import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icons/icon"

export default function About() {
  return (
    <Layout>
      <header className="about-header-container">
        <h1 className="title-header-large">Meet the Early Birds</h1>
      </header>

      <p>
        <strong>Early Bird Labs</strong> started as a tiny studio that loved
        building small, useful tools and sharing them with the world. Today we
        remain a compact, nimble collective focused on open-source, good UX, and
        pragmatic engineering.
      </p>

      <hr />

      <section
        className="about-container"
        id="sam-sunrise"
        aria-labelledby="sam-name"
      >
        <div className="photo-container">
          <a href="#" rel="noreferrer" onClick={e => e.preventDefault()}>
            <img
              className="about-image"
              src="/images/brand/early_birb.png"
              alt="Sam Sunrise — Founder"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            className="regular-link"
            href="#"
            rel="noreferrer"
            onClick={e => e.preventDefault()}
          >
            <h2 id="sam-name">Sam Sunrise</h2>
          </a>
          <h3>Founder · Product · Front-end</h3>
          <p>
            Sam founded Early Bird Labs because they wanted to make tiny tools
            that delight. They design product flows, prototype fast, and help
            shape projects from idea to shipped feature. Sam loves clean
            interfaces and long morning walks with a laptop.
          </p>

          <div className="social-links">
            <a
              href="#"
              aria-label="Email Sam"
              onClick={e => e.preventDefault()}
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="#"
              aria-label="Sam's GitHub"
              onClick={e => e.preventDefault()}
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              aria-label="Sam's X"
              onClick={e => e.preventDefault()}
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </section>

      <section
        className="about-container-flipped"
        id="jo-jonquil"
        aria-labelledby="jo-name"
      >
        <div className="photo-container">
          <a href="#" onClick={e => e.preventDefault()} rel="noreferrer">
            <img
              className="about-image"
              src="/images/brand/early_birb.png"
              alt="Jo Jonquil — Design Lead"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            className="regular-link"
            href="#"
            onClick={e => e.preventDefault()}
            rel="noreferrer"
          >
            <h2 id="jo-name">Jo Jonquil</h2>
          </a>
          <h3>Design Lead · UX · Brand</h3>
          <p>
            Jo crafts the visual language for Early Bird Labs. From icons and
            micro-interactions to color systems, Jo makes sure our work is
            accessible, beautiful, and consistent. Jo also runs our design
            critique mornings (with biscuits).
          </p>

          <div className="social-links">
            <a
              href="#"
              aria-label="Jo's Instagram"
              onClick={e => e.preventDefault()}
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="Jo's LinkedIn"
              onClick={e => e.preventDefault()}
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <section
        className="about-container"
        id="ravi-roost"
        aria-labelledby="ravi-name"
      >
        <div className="photo-container">
          <a href="#" onClick={e => e.preventDefault()} rel="noreferrer">
            <img
              className="about-image"
              src="/images/brand/early_birb.png"
              alt="Ravi Roost — Platform Engineer"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            className="regular-link"
            href="#"
            onClick={e => e.preventDefault()}
            rel="noreferrer"
          >
            <h2 id="ravi-name">Ravi Roost</h2>
          </a>
          <h3>Platform · APIs · DevOps</h3>
          <p>
            Ravi keeps our infrastructure humming. He builds APIs, automates
            deployments, and is the person we ping when a cron job misbehaves.
            Ravi enjoys observability dashboards and strong coffee.
          </p>

          <div className="social-links">
            <a
              href="#"
              aria-label="Ravi's GitHub"
              onClick={e => e.preventDefault()}
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              aria-label="Ravi's Mastodon"
              onClick={e => e.preventDefault()}
              rel="noreferrer"
            >
              <i className="fab fa-mastodon"></i>
            </a>
          </div>
        </div>
      </section>

      <hr />

      <h2>Ready to join our Flock of Birds?</h2>
      <p>
        We deliberately keep the team small and focused. If you're excited by
        delightful tooling, thoughtful design, or open-source work, we'd love to
        hear from you — even if there's no active opening. Tell us what you love
        to build and how you'd like to contribute.
      </p>

      <p>
        <a className="regular-link" href="/contact">
          Contact
        </a>{" "}
        us and include a short note about projects you care about.
      </p>
    </Layout>
  )
}
