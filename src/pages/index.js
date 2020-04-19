import React from "react"
import "../scss/main.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300;400;500&display=swap" rel="stylesheet" />

    <SEO title="Home | Codepen Meetup Twin Cites, MN" />
    <h1 className="hdg hdg-3">Upcoming Online CodePen Meetup Details</h1>
    <article className="article">
    <section className="section">
      <p><strong>Sunday, May 17, 2020 from 11:00 AM – 1:00 PM CDT</strong></p>
      <p>
      Join the CodePen meetup via Zoom hosted by Andrea Edstrom. This meetup is for anyone who is interested in design or development. Pick up a ticket by clicking the link below. Zoom invite information is emailed after you get your ticket.</p>
      <p><strong><a href="https://www.eventbrite.com/e/online-codepen-meetup-tickets-103074263898" className="link link-btn">Get your ticket here!</a></strong></p>
  
      </section>
      <section className="section">
      <h2 className="hdg hdg-3">About this Event</h2>
      <p>
      This meetup is for anyone who is interested in design or development who enjoy CodePen. It is also for those who want to learn how to code. All skill levels are welcome. This event is open and free to all the local community. This event will be a Show & Tell of CodePen projects. The pen doesn't have to be your own, it can be a pen you admire.
      </p>
      <p>
      There will be:

      <ul>
        <li>CodePen show-and-tell demos from attendees via Zoom</li>
        <li>Laughter</li>
        <li>Fun</li>
        </ul>
      </p>

        <p>
      Show us something you did/found/inspired you on CodePen! If you are in need of inspiration checkout the <a href="https://codepen.io/picks/pens/">CodePen picks</a> or <a href="https://codepen.io/challenges/" >CodePen challenges</a>. We would love to have you join!
      </p>

      <p>
      Please RVSP and tell your friends and coworkers!
      </p>
      </section>

      <section className="section">
      <h2 className="hdg hdg-3">Sponsor Shoutout</h2>
      <p>
      This event is hosted by Andrea Edstrom, she has no affiliation with CodePen. This event is sponsored by Minnesota Public Radio. Thank you to Minnesota Public Radio for providing the pro Zoom account.
      </p>
      </section>
      <section className="section">
      <h2 className="hdg hdg-3">Code of Conduct</h2>
      <p>
      Please review the <a href="https://blog.codepen.io/documentation/code-conduct/">CodePen.io Code of Conduct</a> before attending.</p>
      </section>
      </article>
  </Layout>
)

export default IndexPage
