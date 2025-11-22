import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="title-header-small">
        🌤️ 🐦 Rise and shine from Early Bird Labs!
      </h1>

      <p>
        <b>Early Bird Labs</b> is a <i>fictional</i> creative tech collective
        that believes mornings are for making things. We build open-source
        software, tinker with ideas, and turn experiments into tools that help
        others launch faster and learn quicker.
      </p>

      <ul>
        <li>
          Check out our latest{" "}
          <a className="regular-link" href="/products">
            Products
          </a>{" "}
          — simple, joyful tools designed for everyday developers.
        </li>
        <li>
          Explore our growing library of{" "}
          <a className="regular-link" href="/products?section=open-source">
            Open-Source Projects
          </a>{" "}
          — from front-end frameworks to workflow utilities.
        </li>
        <li>
          Need insight or collaboration? We offer flexible{" "}
          <a className="regular-link" href="/services">
            Services
          </a>{" "}
          to guide teams toward clarity, scalability, and sustainable design.
        </li>
      </ul>

      <p>
        We care about fast apps, beautiful interfaces, and strong developer
        ergonomics. Each project starts with curiosity and ends with something
        we’d actually want to use ourselves.
      </p>

      <p>
        Our small, global team works remotely from sunrise to sunset —
        designing, prototyping, and refining ideas that make the web feel a
        little warmer and a lot more human.
      </p>

      <p>
        If you’re into creative coding, open collaboration, or just love the
        sound of a fresh commit in the morning, you’ll fit right in here.
      </p>

      <p>
        <b>
          <i>
            Let’s build tools that make the day start right — simple, sharp, and
            open to all.
          </i>
        </b>
      </p>

      <p>
        Want to collaborate?{" "}
        <a className="regular-link" href="/contact">
          Reach out
        </a>{" "}
        and let’s create something that helps others rise early and code happy.
      </p>
      <hr />
      <p>
        <i>
          <b>Note:</b> <b>Early Bird Labs</b> was created by{" "}
          <a
            className="regular-link"
            href="https://nightowllabs.io"
            target="_blank"
            rel="noreferrer"
          >
            <b>Night Owl Labs</b>
          </a>{" "}
          as a fictional company to demonstrate a real world example of this
          websites capabilities (which is open-source{" "}
          <a
            className="regular-link"
            href="https://github.com/Night-Owl-Labs/business-website"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          ).
        </i>
      </p>
    </Layout>
  )
}
