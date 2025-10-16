import React from "react"
import Layout from "../components/layout"

export default function Company() {
  return (
    <Layout>
      <h1 className="title-header-large">Company</h1>

      <p>
        At <strong>Early Bird Labs</strong>, we believe bright ideas deserve an
        early start. We’re a small, independent software studio focused on
        creating tools that feel good to use — practical, approachable, and just
        a little bit joyful. While our roots are in technology, our purpose is
        in empowering creativity, learning, and connection through the products
        we build.
      </p>

      <p>
        We approach every project with curiosity and care. Our philosophy is
        simple: understand people first, build technology second. This mindset
        keeps our work grounded, ensuring that what we make isn’t just
        functional — it’s meaningful.
      </p>

      <hr />

      <h2>Our Story</h2>
      <p>
        <strong>Early Bird Labs</strong> was founded in 2025 by a small group of
        developers and designers who wanted to bring warmth and imagination to
        modern software. What started as a weekend experiment soon became a
        creative hub for open-source projects, small client collaborations, and
        community contributions. Nearly a decade later, our flock continues to
        grow — still guided by the same values of craftsmanship and curiosity
        that started it all.
      </p>

      <h2>Our Vision</h2>
      <blockquote className="block-quote">
        <p>
          “To create software that wakes people up — not with noise, but with
          possibility. We aim to make digital experiences that feel intuitive,
          purposeful, and human.”
        </p>
      </blockquote>

      <h2>Our Mission</h2>
      <blockquote className="block-quote">
        <p>
          “We design and build software that inspires creativity, simplifies
          complexity, and brings a sense of calm focus to the start of your
          day. Whether it’s an app, a tool, or a system, our mission is to help
          people do their best work with clarity and confidence.”
        </p>
      </blockquote>

      <hr />

      <p>
        Want to collaborate or learn more about what we’re building?
      </p>
      <p>
        <a className="regular-link" href="/contact">
          Get in touch
        </a>{" "}
        with us, or browse our{" "}
        <a className="regular-link" href="/products">
          Products
        </a>{" "}
        to see how we’re helping others bring their ideas to life.
      </p>
    </Layout>
  )
}
