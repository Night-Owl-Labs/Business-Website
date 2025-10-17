import React from "react"
import { CONFIG } from "./config.js"
import Icon from "../components/icons/icon.js"

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links-footer">
            <a href="#" onClick={e => e.preventDefault()} rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" onClick={e => e.preventDefault()} rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" onClick={e => e.preventDefault()} rel="noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" onClick={e => e.preventDefault()} rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/scottgriv/Business-Website"
              rel="noreferrer"
              target="_blank"
              style={{ display: "inline-flex", width: 23, height: 23 }}
            >
              <Icon name="Fork" />
            </a>
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2025-{new Date().getFullYear()} Early Bird Labs, LLC. -
          All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
