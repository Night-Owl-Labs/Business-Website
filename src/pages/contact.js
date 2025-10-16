import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icons/icon"

export default function Contact() {
  return (
    <Layout>
      <h1 className="title-header-large">Contact Early Bird Labs</h1>

      <p>
        We'd love to hear from you! Whether you want to collaborate, ask a
        question, or simply say hello — you can reach us through the channels
        below.
      </p>

      <hr />
      <h2>Email Us</h2>
      <p>General inquiries:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        hello@example.com
      </a>

      <p>Support and technical questions:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        support@example.com
      </a>

      <p>Partnerships and media:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        press@example.com
      </a>

      <hr />
      <h2>Connect with Us</h2>
      <p>Follow our latest work and updates:</p>

      <p>
        <i className="fab fa-github"></i>&nbsp;
        <a
          className="regular-link"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>

      <p>
        <i className="fab fa-linkedin"></i>&nbsp;
        <a
          className="regular-link"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>

      <p>
        <i className="fa-brands fa-x-twitter"></i>&nbsp;
        <a
          className="regular-link"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>
      </p>

      <p>
        <i className="fa-brands fa-instagram"></i>&nbsp;
        <a
          className="regular-link"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </p>

      <hr />
      <h2>Share Our Work</h2>
      <p>
        Think someone might like what we’re doing? Share our site:
      </p>

      <div className="about-header-container">
        <div className="social-links-earlybird">
          <Icon name="EBL" />
        </div>
        <a
          className="regular-link"
          href="https://bizwebsite.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
      </div>

      <br />
      <hr />

      <div className="closing-wrapper">
        <p>
          Like this site? It’s open source!<br /><br />
          <i id="github-fork" className="fa-solid fa-code-fork fa-bounce"></i>&nbsp;
          <a
            className="regular-link"
            href="https://github.com/scottgriv/business-website"
            target="_blank"
            rel="noreferrer"
          >
            Fork and star it on GitHub
          </a>
          &nbsp;
          <i id="github-star" className="fa-solid fa-star fa-bounce"></i>
        </p>
      </div>
    </Layout>
  )
}
