import React from "react";
import useTitle from "../../hooks/useTitle";
import { Container } from "react-bootstrap";

const About = () => {
  useTitle("About - The British Lad");
  return (
    <Container className="my-4">
      <h4 className="fw-bold text-start">About Me</h4>
      <h5 className="text-start">
        I’ve escaped London — though it does call me back occasionally. After a
        lovely childhood in Albany and four years studying and working in
        Oxford, I called quits on conventional and bought a one way ticket out
        of the country. I’ve since celebrated my one-year, two-year, and
        three-year travelversaries and with no end date in sight, I still feel
        like I’m on the ride of my life. There’s no end date, no itinerary, and
        no real backup plan. Just adventure, adrenaline, and a lifetime of
        globe-trotting daydreams to fulfill. Along the way I indulge my passions
        for photography, design, scuba diving, and squealing over small animals.
      </h5>
      <img
        src="https://cdn.shopify.com/s/files/1/0198/7684/files/David_Gandy_Hawkins_Shepherd_Cashmere_Coat_2048x2048.jpg"
        alt=""
        className="w-100"
      />
      <br />
      <br />
      <h4 className="text-start fw-bold">SOME BACKGROUND…</h4>
      <h5 className="text-start">
        I started blogging to document my two month trip to Southeast Asia the
        summer of 2009. I cried the night before I left; terrified of eating
        dinner alone, getting lost in the airport, and having my camera stolen.
        That summer I fell head-over-flip-flops in love with the adrenaline of
        travel, realized there were people out there truly living this nomadic
        lifestyle that I thought only existed in my head, and discovered that
        the aimless yearning and restlessness I had been feeling for years was
        suddenly quieted and peaceful. I had loved every one of my previous
        trips abroad, but this one was different. I returned to New York
        determined to build a life of travel.
      </h5>
      <img
        src="https://www.davidgandywellwear.com/cdn/shop/files/GREEN_IS_THE_COLOUR_Hero.jpg?v=1677793916&width=1100"
        alt=""
        srcset=""
        className="w-100"
      />

      <h5 className="text-start">
        The next two years were a blur of art supplies, plane tickets, and
        juggling jobs as I finished up my fine arts degree. In 2011 I left New
        York to travel full time and have not had a permanent address since. In
        my early travel days I worked as a bartender and a babysitter, handed
        out flyers for three dollars an hour and returned cans for five cent
        deposits. Whatever it took to stay on the road! (By the way, here are
        some inspiring stories of how other travelers have found work abroad.)
        Want to see more of my work? Check out my portfolio page. Want to know
        where I’ve been? Check out my destinations page. Want to know something
        else? Check out my FAQ page!
      </h5>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default About;
