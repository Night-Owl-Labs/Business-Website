import React from "react"
import Layout from "../components/layout"

export default function Services() {
  return (
    <Layout>
      <h1 className="title-header-large">Services</h1>

      <p>
        <b>Early Bird Labs</b> helps small teams ship sooner with clear scopes,
        friendly UX, and pragmatic engineering. Pick a lane or mix and match.
      </p>

      <ul>
        <li>
          <b>Product Sprints</b>
          <ul>
            <li>2–4 week builds to prove an idea</li>
            <li>Scope → prototype → demo → iterate</li>
          </ul>
        </li>

        <li>
          <b>App Prototyping</b>
          <ul>
            <li>Clickable flows, real data, zero fluff</li>
            <li>Design handoff or keep building with us</li>
          </ul>
        </li>

        <li>
          <b>UI/UX & Design Systems</b>
          <ul>
            <li>Design tokens, components, themes</li>
            <li>Accessibility baked in (WCAG-minded)</li>
          </ul>
        </li>

        <li>
          <b>APIs & Integrations</b>
          <ul>
            <li>REST/GraphQL, webhooks, auth</li>
            <li>Third-party services wired cleanly</li>
          </ul>
        </li>

        <li>
          <b>Performance & Accessibility</b>
          <ul>
            <li>Speed audits, Core Web Vitals fixes</li>
            <li>Keyboard paths, focus states, ARIA</li>
          </ul>
        </li>

        <li>
          <b>Dev Experience</b>
          <ul>
            <li>CI templates, lint/format/test setup</li>
            <li>Docs that humans will actually read</li>
          </ul>
        </li>

        <li>
          <b>Advisory Sessions</b>
          <ul>
            <li>Roadmap reviews and scope shaping</li>
            <li>Architecture sanity checks</li>
          </ul>
        </li>
      </ul>

      <p>
        Have something specific in mind?{" "}
        <a className="regular-link" href="/contact">Contact</a> us with a brief,
        and we’ll suggest a right-sized path to launch.
      </p>
    </Layout>
  )
}
