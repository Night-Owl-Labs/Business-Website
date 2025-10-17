import React, { useEffect } from "react"
import "../components/layout.css"

export default function ComingSoon() {
  useEffect(() => {
    // Store the original body background color
    const originalBackgroundColor = document.body.style.backgroundColor

    // Set the body background color to yellow
    document.body.style.backgroundColor = "#FCDB3A"

    // Cleanup function to revert the body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor
    }
  }, [])

  return (
    <div className="coming-soon-container">
      <h1>Application Coming Soon!</h1>
      <img
        src="/images/company/nol-icon-transparent-no-edge.png"
        alt="Company Logo"
        style={{ maxWidth: "250px", marginBottom: "20px" }}
      />
      <h2>
        Whoa!
        <br />
        Are you as excited as we are for our new software drop?!
      </h2>
      <h3>
        Let's be honest, probably not...
        <br />
        Regardless! Check back soon to see what it is!
      </h3>
      <p>
        <i>
          <b>- Team Early Bird Labs</b>
        </i>
      </p>
      <p>
        In the meantime, explore our{" "}
        <a className="coming-soon-link" href="/products">
          current product list!
        </a>
      </p>
    </div>
  )
}
