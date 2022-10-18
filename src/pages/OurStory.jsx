import React from "react";
import "../styles/OurStory.css";
import story_1 from '../assets/story_1.jpg'

const OurStory = () => {
  return (
    <div className="ot_container">
      <div className="ot_row1">
        <img
          src={story_1}
          alt=""
          className="img-fluid"
        />
        <div className="ot_row1_content">
          <h2>Who we are</h2>
          <p>
            We are a creative-led, community-spirited company on a mission to
            make better ice creams and bring people together.
          </p>
        </div>
      </div>
      <div className="ot_row2">
        <div className="ot_row2_head">
          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/Cone.png?v=1646848392"
            alt=""
          />
          <h3>A NEW STANDARD IN ICE CREAM</h3>
          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/Cone.png?v=1646848392"
            alt=""
          />
        </div>
        <div className="ot_row2_content">
          <p>
            We build ice creams completely from scratch using a unique recipe
            honed and perfected over more than 20 years by our founder, Jeni
            Britton. Our ice creams have a uniquely smooth texture and
            buttercream body, with bright flavor and clean finish. We’re here to
            set new standards for ice cream classics and to create our own. At
            Jeni’s, you’ll find flavors inspired by our curiosities—art,
            history, pop culture, and beyond—that simply don’t exist anywhere
            else.
          </p>
          <span>EXPLORE FLAVORS</span>
        </div>
      </div>
      <div className="ot_row3">
        <div className="ot_row3_image">
          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/AboutUs_Jeni_1500x.jpg?v=1649873287"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="ot_row3_content">
          <h2>Meet Jeni</h2>
          <p>
            Our founder literally wrote the book on ice cream—and she has the
            James Beard Award to prove it. With her ahead-of-the-trend vision,
            Jeni revolutionized the ice cream industry, forever changing the way
            ice cream is made.
          </p>
          <button>THE JENI'S STORY</button>
        </div>
      </div>
      <div className="ot_row4">
        <h3>A FORCE FOR GOOD</h3>
        <p>
          We're proud to be a Certified B Corp endorsed by the international
          nonprofit B Lab as a company that meets rigorous standards of social
          and environmental performance, accountability, and transparency. It
          means we're an evolving company—pushing forward to be better tomorrow
          than we are today. Using Direct Trade ingredients, employing a diverse
          team of people, working to improve our environmental and social
          impact—it's all part of how we operate and an important part of our
          company culture.
        </p>
      </div>
      <div className="ot_row3 ot_row5">
        <div className="ot_row3_image">
          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/Rectangle_810_de77b1d9-469d-4d6e-919d-d0e5efb0fa7f_1500x.jpg?v=1647542658"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="ot_row3_content">
          <h2>THE FELLOWSHIP MODEL</h2>
          <p>
            We make ice cream to bring people together. It’s our reason for
            being and we operate as a community—in partnership with the growers,
            makers, and producers who supply us with ingredients.
          </p>
          <button> Meet our partners</button>
        </div>
      </div>
      <div className="ot_row3 ot_row6">
        <div className="ot_row3_image">
          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/JENIS_FUNDRAISING_SOCIAL_750x.jpg?v=1655493911"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="ot_row3_content">
          <h2>Join our team</h2>
          <p>
            It takes a community to make and share ice creams the way we do. We
            truly believe our differences are our strengths. It’s about each of
            us bringing our awesomeness in — our whole selves. And together we
            make something greater than the sum of our parts.
          </p>
          <button>See openings</button>
        </div>
      </div>
      <div className="ot_row7">
        <h4>Jeni's Community</h4>
        <p>
          <a href="https://www.instagram.com/jenisicecreams/">
            @jenisicecreams
          </a>
        </p>
        <div className="ot_row7_images">
          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/Rectangle_988_400x.png?v=1648157117"
            alt=""
            className="img-fluid"
          />

          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/Rectangle_987_400x.png?v=1648157034"
            alt=""
            className="img-fluid"
          />

          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/Rectangle_990_400x.png?v=1648157062"
            alt=""
            className="img-fluid"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/Rectangle_990_400x.jpg?v=1646345525"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
