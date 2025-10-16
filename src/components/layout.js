import React, { useState, useEffect } from "react"
import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState(null)

  useEffect(() => {
    // Ensure that window is available before adding event listeners
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        // Get the maximum scroll value to prevent 'over-scrolling' effects
        const maxScroll = document.body.offsetHeight - window.innerHeight

        let scrolled = window.scrollY

        // Prevent parallax effect when 'over-scrolling' happens.
        scrolled = Math.max(0, Math.min(scrolled, maxScroll))

        // Parallax effect
        // Header logo        
        let parallaxAmount = 0.3
        let paddingOffset = 50
        let fadeStart = paddingOffset
        let fadeEnd = 250
        let opacity =
          1 - Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart))

        let headlogo = document.getElementById("headlogo")

        if (headlogo) {
          headlogo.style.transform = `translateY(${
            -scrolled * parallaxAmount
          }px)`
          headlogo.style.opacity = opacity
        }

        // Landing page logo
        let parallaxAmountLanding = 0.1;  // Different parallax amount for landing logo
        let fadeStartLanding = 15;
        let fadeEndLanding = 500;
        let opacityLanding =
          1 - Math.min(1, (scrolled - fadeStartLanding) / (fadeEndLanding - fadeStartLanding));
        let landinglogo = document.getElementById("landinglogo");

        if (landinglogo) {
          landinglogo.style.transform = `translateY(${-scrolled * parallaxAmountLanding}px)`; // Note the change here
          landinglogo.style.opacity = opacityLanding;
        }

        setShowScroll(scrolled > 500)

        // Up Scroll Arrow Configuration
        // Clear any existing timeouts to reset the timer
        if (scrollTimeout) clearTimeout(scrollTimeout)

        // Set a new timeout
        const newTimeout = setTimeout(() => {
          setShowScroll(false)
        }, 7000) // Hide button 7 seconds after scrolling stops
        setScrollTimeout(newTimeout)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
        if (scrollTimeout) clearTimeout(scrollTimeout)
      }
    }
  }, [scrollTimeout])

  const scrollTop = () => {
    // Check if window is available
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      // Reset scroll visibility and clear timeout
      setShowScroll(true)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }

  return (
    <>
      <Seo
        title="Early Bird Labs"
        description="Bright Ideas, Built Beautifully"
      />
      <div id="pagecontent">
        <header>
          <Header />
        </header>
        <div id="contentarea">
          <main>{children}</main>
        </div>
        <br />
        <footer>
          <Footer />
        </footer>

        <button
          onClick={scrollTop}
          className={`scroll-to-top ${showScroll ? "visible" : ""}`}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up fa-flip"></i>
        </button>
      </div>
    </>
  )
}

export default Layout
