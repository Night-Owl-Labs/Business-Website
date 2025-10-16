import React from "react"
import { Link } from "gatsby" // comment out if not using, and set <Layout> to <></> below
import Layout from "../components/layout"

export default function LandingPage() {
  return (
    <Layout>
      <div id="landinglogo">
        <Link to="/">
          <br />
          <img
            src="/images/brand/banner_social.png"
            alt="Early Bird Labs"
            title="Early Bird Labs"
            className="landing-logo"
          />
        </Link>
      </div>
      <div className="landing-container">
        <h1 className="landing-title">Welcome to the Landing Page! 👋</h1>
        <h2 className="landing-subtitle">
          Add a subtitle for your landing page here!
        </h2>
        <p>This is where you can mention a new project/product release!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
          velit interdum, maximus nibh sit amet, auctor magna. Aliquam
          condimentum velit vitae lacus iaculis, eu efficitur nisi vehicula. Nam
          in nibh et eros tristique rhoncus ut nec lacus. Aliquam erat volutpat.
          Donec et pharetra dui, nec tempor arcu. Mauris ligula enim, tristique
          eget elit eu, interdum ultrices est. Nullam id velit et eros interdum
          auctor sed ac diam. Suspendisse aliquam viverra leo, ac malesuada nunc
          pulvinar id. Integer feugiat est malesuada mi blandit eleifend et vel
          libero. Curabitur maximus ac diam vel semper. Sed efficitur risus id
          vulputate porttitor. Praesent non erat et augue elementum cursus. Sed
          sodales lorem ac leo vehicula ornare. Donec pharetra dapibus tellus,
          id consectetur nisl laoreet id. Donec volutpat lorem ac odio
          tristique, in interdum sapien tempor. In eu sapien finibus, consequat
          eros nec, luctus urna. In euismod mauris id est semper consectetur.
          Morbi venenatis commodo metus. Curabitur condimentum tempor lectus ut
          eleifend. Nam sed finibus ex. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Donec volutpat
          sagittis porta. In quis quam vel lorem tristique interdum. Suspendisse
          accumsan non augue ut luctus. Vivamus at pharetra lectus. Maecenas eu
          cursus justo. Sed vestibulum sapien sapien, vel mattis mi vehicula id.
          Nunc dui augue, rhoncus quis nunc quis, placerat tempor risus.
          Vestibulum placerat elementum tincidunt. Nam consequat sagittis
          euismod. Sed a neque mi. Nullam placerat lacus luctus turpis
          condimentum suscipit. In condimentum augue vestibulum tincidunt
          tincidunt. Sed vitae felis facilisis, porttitor nisl sed, pharetra
          nunc. Nullam eget volutpat risus. Curabitur dapibus nibh ut porta
          tincidunt. Pellentesque fermentum lacinia diam, id viverra ante
          facilisis at. Mauris suscipit nunc libero, sit amet congue leo auctor
          ac. Suspendisse enim mauris, pharetra ut convallis non, sagittis in
          libero. Praesent scelerisque efficitur purus, bibendum rhoncus urna
          venenatis eget. Pellentesque eget sapien facilisis, vestibulum ex id,
          dictum libero. Duis vulputate semper lacus. Sed cursus vestibulum
          neque et dapibus. Pellentesque molestie dapibus nunc ac lacinia. Nunc
          commodo tortor non rhoncus sodales. Nullam vel enim quis nisl egestas
          pulvinar. Aliquam efficitur magna augue, nec dictum dolor rhoncus sit
          amet. Vivamus ac dignissim augue, quis euismod ante. Nulla tempus dui
          turpis, et dapibus nisl malesuada laoreet. Pellentesque id scelerisque
          est. Duis rutrum et nisl sed posuere. Pellentesque interdum ligula id
          quam aliquet, ut ultricies orci interdum. Donec dictum sollicitudin
          eleifend. Etiam non ullamcorper nisi. Sed venenatis arcu condimentum,
          accumsan eros et, ornare nisi. In hac habitasse platea dictumst.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Cras eu vulputate dui.
        </p>
      </div>
    </Layout>
  )
}
