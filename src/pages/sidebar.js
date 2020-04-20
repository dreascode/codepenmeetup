import React from "react"
import IconTwitter from "../components/iconTwitter"

const Sidebar = () => (
    <aside className="aside">
      <section className="section">
        <h2 className="hdg hdg-4">Sponsor shoutout</h2>
        <p>
        This event is hosted by Andrea Edstrom, she has no affiliation with CodePen. This event is sponsored by Minnesota Public Radio. Thank you to Minnesota Public Radio for providing the pro Zoom account.
        </p>
      </section>
      <section className="section">
        <h2 className="hdg hdg-4">Code of conduct</h2>
        <p>
        Please review the <a href="https://blog.codepen.io/documentation/code-conduct/">CodePen.io Code of Conduct</a> before attending.</p>
      </section>
      <section className="section">
        <h2 className="hdg hdg-4">Receive meetup updates</h2>
        <p>
        Follow codepenmeetup on Twitter to receive meetup dates and other meetup news.</p>
        <p>
        <a href="https://twitter.com/codepenmeetup" className="link link-btn small">
        <IconTwitter/> @codepenmeetup </a> </p>
      </section>
    </aside>
)

export default Sidebar
