import React from "react";
import "../styles/Franchising.css";
import sparkle_1 from "../assets/home/sparkle_1.png";
import sparkle_2 from "../assets/home/sparkle_2.png";
import useBreakpoints from "../customHooks/useBreakpoints";
import { Link } from "react-router-dom";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { useState } from "react";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => <></>);

  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{
        color: "#0d3b66",
        fontWeight: "600",
        fontSize: "20px",
        backgroundColor: "#FAF7F5",
        cursor: "pointer",
        color: "#000",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={() => {
        decoratedOnClick();
        setClicked(!clicked);
      }}
      className="small-text-above-content"
    >
      {children}
      {clicked ? (
        <svg style={{ width: "24px" }} viewBox="0 0 24 24">
          <path fill="#ee3c2f" d="M19,13H5V11H19V13Z" />
        </svg>
      ) : (
        <svg style={{ width: "24px" }} viewBox="0 0 24 24">
          <path fill="#ee3c2f" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      )}
    </div>
  );
}

const Franchising = () => {
  const { isMd, isTm, isSm, isXs } = useBreakpoints();

  const FAQarr = [
    {
      title: `How do you ship ice cream?`,
      ans: `Our ice creams are packed in an insulated box with enough dry ice to keep them perfectly frozen (at -109.3°F to be exact) well into the evening of the delivery date. We’ve been shipping for 14 years. We’ve got this. Guaranteed.`,
    },
    {
      title: `How do you ship ice cream?`,
      ans: `Our ice creams are packed in an insulated box with enough dry ice to keep them perfectly frozen (at -109.3°F to be exact) well into the evening of the delivery date. We’ve been shipping for 14 years. We’ve got this. Guaranteed.`,
    },
    {
      title: `How do you ship ice cream?`,
      ans: `Our ice creams are packed in an insulated box with enough dry ice to keep them perfectly frozen (at -109.3°F to be exact) well into the evening of the delivery date. We’ve been shipping for 14 years. We’ve got this. Guaranteed.`,
    },
    {
      title: `How do you ship ice cream?`,
      ans: `Our ice creams are packed in an insulated box with enough dry ice to keep them perfectly frozen (at -109.3°F to be exact) well into the evening of the delivery date. We’ve been shipping for 14 years. We’ve got this. Guaranteed.`,
    },
  ];

  return (
    <div className="row p-0">
      <div
        className="location_row1 py-5 mobile-section2"
        style={{ backgroundColor: "#F6E8DF" }}
      >
        <h2 className="fw-bolder">Franchising</h2>
      </div>
      <div className="home-section-2 py-5 mt-5 mx-auto col-xxl-6 col-xl-6 col-lg-6 col-md-11 col-sm-11 col-11">
        <div className="d-flex justify-content-between align-items-start mobile-section2">
          <img src={sparkle_1} alt="sparkle_image" />
          <h2 className="fw-bold text-center mobile-title-text ">
            NO MATTER THE EVENT, JENI’S IS THE PERFECT WAY TO CELEBRATE.
          </h2>
          <img src={sparkle_2} alt="sparkle_image" />
        </div>
        <h3
          className="my-4 mb-5 fs-6 text-center col-xxl-10 col-xl-10 col-lg-10 col-md-11 col-sm-12 col-12 mx-auto"
          style={{ lineHeight: "22px" }}
        >
          Our Events & Catering menu features Street Treats—our best-selling ice
          creams, plus dairy-free and gluten-free flavors—in single-serving cups
          with a spoon under the lid. Translation: Easy serving and flavors for
          everyone. <br />
          <br />
          Please note, the order minimum is three cases of{" "}
          <span style={{ color: "#FF4612", cursor: "pointer" }}>
            Street Treats
          </span>{" "}
          (for a total of 36 single-serving cups). Each case must have the same
          flavor.
          <br />
          <br /> For orders, contact us at 614-488-3224 or{" "}
          <span style={{ color: "#FF4612", cursor: "pointer" }}>
            events@jenis.com {""}
          </span>
          and include your name, shipping address, flavors, and event date.
          We’ll respond back with a quote. Once approved, please allow up to 2
          weeks for processing before your order(s) ships.
        </h3>
      </div>
      <div className="w-100 mx-auto d-flex justify-content-between flex-xxl-row flex-xl-row flex-lg-row flex-column flex-md-column flex-sm-column">
        <img
          src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/22-4_LandingPage_Catering_1_1200.jpg?v=1649950975"
          alt=""
          loading="lazy"
          className={`img-fluid  ${
            isMd || isTm || isSm || isXs ? "w-100" : "w-50 me-3"
          }`}
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0592/5476/7822/files/22-4_LandingPage_Catering_2_1200.jpg?v=1649950988"
          alt=""
          loading="lazy"
          className={`img-fluid  ${
            isMd || isTm || isSm || isXs ? "w-100 mt-3" : "w-50"
          }`}
        />
      </div>
      <div className="my-4 mx-auto col-xxl-6 col-xl-6 col-lg-6 col-md-11 col-sm-12 col-12">
        <h2 className="fw-bold text-center my-5 mobile-title-text">FRANCHISING FAQS</h2>
        <div className="mx-auto col-xxl-10 col-xl-10 col-lg-12 col-md-11 col-sm-11 col-11">
          {FAQarr.map((curr, index) => (
            <div className="mt-3">
              <Accordion>
                <Card
                  style={{
                    border: "none",
                    backgroundColor: "#FAF7F5",
                    padding: "5px",
                  }}
                >
                  <Card.Header
                    style={{ backgroundColor: "#FAF7F5", border: "none" }}
                  >
                    <CustomToggle eventKey="0">
                      <h6
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          letterSpacing: "1.5px",
                          textShadow: "0 0 0 #000",
                        }}
                        className="mobile-accordion-text"
                      >
                        {curr.title}
                      </h6>{" "}
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body
                      style={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "400",
                        letterSpacing: "1.5px",
                        textShadow: "0 0 0 #000",
                      }}
                      className="d-flex flex-column"
                    >
                      <div className="mobile-accordion-text">{curr.ans}</div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Franchising;
