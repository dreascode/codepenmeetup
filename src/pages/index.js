import React from "react"
import "../scss/main.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "./sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Codepen Meetup Twin Cites, MN" />
    <div className="container container-squeeze">
      <div className="row">
        <div className="col col-main">
          <article className="article">
            <section className="section section-border">
              <h1 className="hdg hdg-2">Upcoming meetup details</h1>

              <p>
                Join the virtual CodePen meetup via Zoom hosted by Andrea
                Edstrom. This meetup is for anyone who is interested in design
                or development. Pick up a ticket by clicking the link below.
                Zoom invite information is emailed after you get your ticket.
              </p>
      
              <div className="event">
                <p>
                  <strong>
                    Sunday, June 14, 2020 from 11:00 AM – 12:00 PM CDT
                  </strong>
                </p>
                <p>
                  <strong>
                    <a
                      href="https://www.eventbrite.com/e/june-online-codepen-meetup-tickets-104975450398"
                      className="link link-btn"
                    >
                      Get a ticket
                    </a>
                  </strong>
                </p>
              </div>
              <div className="event">
                <p>
                  <strong>
                    Sunday, July 19, 2020 from 11:00 AM – 12:00 PM CDT
                  </strong>
                </p>
                <p>
                  <strong>
                    <a
                      href="https://www.eventbrite.com/e/july-online-codepen-meetup-tickets-104976658010"
                      className="link link-btn"
                    >
                      Get a ticket
                    </a>
                  </strong>
                </p>
              </div>
            </section>

            <section className="section">
              <h2 className="hdg hdg-3">About this event</h2>
              <p>
                This meetup is for anyone who is interested in design or
                development who enjoy CodePen. It is also for those who want to
                learn how to code. All skill levels are welcome. This event is
                open and free to all the local community. This event will be a
                Show & Tell of CodePen projects. The pen doesn't have to be your
                own, it can be a pen you admire.
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
                Show us something you did/found/inspired you on CodePen! If you
                are in need of inspiration checkout the{" "}
                <a href="https://codepen.io/picks/pens/">CodePen picks</a> or{" "}
                <a href="https://codepen.io/challenges/">CodePen challenges</a>.
                We would love to have you join!
              </p>

              <p>Please RVSP and tell your friends and coworkers!</p>
            </section>
          </article>
        </div>
        <div className="col col-sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
