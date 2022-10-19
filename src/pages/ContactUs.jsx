import React, { useState, useEffect } from "react";
import "../styles/ContactUs.css";
import useBreakpoints from "../customHooks/useBreakpoints";

const ContactUs = () => {
  const [activeTopic, setActiveTopic] = useState("General Inquiries");

  let contentArr = [
    {
      topic: "General Inquiries",
      content: (
        <>
          <h4 style={{ textTransform: "uppercase", fontWeight: "600" }}>
            General Inquiries
          </h4>
          <br />
          <p>
            If you’re an existing wholesale customer looking to place an order,
            please contact your sales coordinator at 614-407-1400. Support is
            available Monday through Friday, between 9:00 a.m. and 5:00 p.m.
            (EST).
          </p>
          <br />
          <span>
            Please be advised our offices will be closed on the following dates:
          </span>
          <p>
            <span>7/4 Independence Day</span> <br />
            <span>9/5 Labor Day</span> <br />
            <span>11/24 Thanksgiving</span> <br />
            <span>11/25 Day after Thanksgiving</span> <br />
            <span>12/23 Christmas Eve</span> <br />
            <span>12/26 Christmas Day</span>
          </p>
          <br />
          <p>
            Orders placed online during closed hours will be processed on the
            next open business day.
          </p>
          <br />
          <span className="fw-bold">Address</span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            401 N Front St Ste 300
          </span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            Columbus, OH 43215
          </span>
          <br />
          <br />
          <span className="fw-bold">Phone</span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            614.488.3224
          </span>
          <br />
          <br />
          <span className="fw-bold">Email</span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            contact@jenis.com
          </span>
          <br />
          <br />
        </>
      ),
    },
    // {
    //   topic: "Wholesale",
    //   content: (
    //     <>
    //       <h4 style={{ textTransform: "uppercase", fontWeight: "600" }}>
    //         Wholesale
    //       </h4>
    //       <br />
    //       <p>
    //         For customer service related to online home delivery orders or other
    //         general inquires, please contact us using one of the methods below.
    //         Support is available Monday through Friday, between 9:00 a.m. and
    //         5:00 p.m. (EST).
    //       </p>
    //       <br />
    //       <p>
    //         If you’re interested in carrying Jeni’s at your retail location,
    //         please connect with us through the email address below.
    //       </p>
    //       <br />
    //       <span>Phone</span>
    //       <br />
    //       <span style={{ color: "#ee3900", cursor: "pointer" }}>
    //         614.407.1400
    //       </span>
    //       <br />
    //       <br />
    //       <span>Email</span>
    //       <br />
    //       <span style={{ color: "#ee3900", cursor: "pointer" }}>
    //         wholesale@jenis.com
    //       </span>
    //       <br />
    //       <br />
    //     </>
    //   ),
    // },
    // {
    //   topic: "Events & Catering",
    //   content: (
    //     <>
    //       <h4 style={{ textTransform: "uppercase", fontWeight: "600" }}>
    //         Events & Catering
    //       </h4>
    //       <br />
    //       <h6 style={{ textTransform: "uppercase" }} className="fw-bold">
    //         events
    //       </h6>
    //       <p>
    //         Are you looking to partner with Jeni’s for a large-scale or major
    //         event, such as a festival, fundraiser, gala, or company gathering?
    //         Please reach out to us at{" "}
    //         <span style={{ color: "#ee3900", cursor: "pointer" }}>
    //           events@jenis.com
    //         </span>
    //         . A Jeni’s representative will follow up with you within 1-3 days of
    //         your request.
    //       </p>
    //       <br />
    //       <h6 style={{ textTransform: "uppercase" }} className="fw-bold">
    //         catering
    //       </h6>
    //       <p>
    //         Weddings, birthdays, anniversaries, holidays, garden parties,
    //         bachelorette outings, cocktail-hour meet-and-greets. From
    //         not-on-our-shop-menu items to party packages with our Street Treats,
    //         we have you covered. If you’re interested in having Jeni’s at your
    //         event, please reach out to us at{" "}
    //         <span style={{ color: "#ee3900", cursor: "pointer" }}>
    //           catering@jenis.com
    //         </span>
    //         . We’ll be in touch within 1-3 days.
    //       </p>
    //       <br />
    //     </>
    //   ),
    // },
    // {
    //   topic: "Donations",
    //   content: (
    //     <>
    //       <h4 style={{ textTransform: "uppercase", fontWeight: "600" }}>
    //         Donations
    //       </h4>
    //       <br />
    //       <p>
    //         Jeni’s has a long history of supporting causes that are dear to our
    //         company and our communities. In order to create the most impact with
    //         our funding, we have committed to supporting three broad initiatives
    //         that align with our company mission: building stronger communities,
    //         creating a resilient healthy food system, and protecting Earth’s
    //         splendor and resources. To be considered for a donation, you must be
    //         a 501(c)(3) or other qualified charitable organization.
    //       </p>
    //       <br />
    //       <span style={{ color: "#ee3900", cursor: "pointer" }}>
    //         Click here for the donation request form.{" "}
    //       </span>
    //       <br />
    //     </>
    //   ),
    // },
    // {
    //   topic: "Employment",
    //   content: (
    //     <>
    //       <h4 style={{ textTransform: "uppercase", fontWeight: "600" }}>
    //         Employment
    //       </h4>
    //       <br />
    //       <p>
    //         Everything it takes to run an ice cream company, we do it ourselves,
    //         in-house: making ice creams, designing and installing store decor,
    //         photography, producing videos, writing, and graphic design. We don’t
    //         always have spots to fill, but we’re always on the lookout for
    //         talent, hustle, and guts. Think you have what it takes?
    //       </p>
    //       <br />
    //       <span style={{ color: "#ee3900", cursor: "pointer" }}>
    //         View our current openings{" "}
    //       </span>
    //       <br />
    //     </>
    //   ),
    // },
    // {
    //   topic: "Fundraising",
    //   content: (
    //     <>
    //       <h4 style={{ textTransform: "uppercase", fontWeight: "600" }}>
    //         Fundraising
    //       </h4>
    //       <br />
    //       <em>Let’s host a fundraiser together</em>
    //       <p className="my-2">
    //         Our company is a community devoted to making the finest ice creams
    //         the world has ever known.
    //       </p>
    //       <p className="my-2">
    //         We make flavors that tell stories. Of the hundreds of growers,
    //         makers, and producers with whom we work. Of place, history, and
    //         tradition. Of art and pop culture. And we do it in a way that brings
    //         people together and celebrates our community.{" "}
    //       </p>
    //       <p>
    //         Let’s conspire and bring our communities together over ice cream at
    //         your neighborhood scoop shop. We’ve got a variety of ways to
    //         fundraise for your organization:{" "}
    //       </p>
    //       <p>• Host an ice cream social. </p>
    //       <p>• Schedule a pint drive fundraiser</p>
    //       <p>• Auction off a Jeni’s Fully Loaded Traveler Bag</p>
    //       <p>
    //         Reach out to your{" "}
    //         <span style={{ color: "#ee3900", cursor: "pointer" }}>
    //           neighborhood shop{" "}
    //         </span>{" "}
    //         for more details!
    //       </p>

    //       <br />
    //     </>
    //   ),
    // },
    {
      topic: "Home Office",
      content: (
        <>
          <h4 style={{ textTransform: "uppercase", fontWeight: "600" }}>
            Home Office{" "}
          </h4>
          <br />
          <span className="fw-bold">Address</span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            401 N Front St Ste 300
          </span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            Columbus, OH 43215
          </span>
          <br />
          <br />
          <span className="fw-bold">Phone</span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            614.488.3224
          </span>
          <br />
          <br />
          <span className="fw-bold">Customer Service</span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            contact@jenis.com
          </span>
          <br />
          <br />
          <span className="fw-bold">Media Inquiries</span>
          <br />
          <span style={{ color: "#ee3900", cursor: "pointer" }}>
            press@jenis.com
          </span>
          <br />
        </>
      ),
    },
  ];

  const { isMd } = useBreakpoints();

  return (
    <>
      <br />
      <div
        className="location_row1 py-5 mb-5"
        style={{ backgroundColor: "#F6E8DF" }}
      >
        <h2 className="fw-bolder">CONTACT US</h2>
      </div>
      <div className="row container mx-auto">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-11 col-sm-10 col-11">
          {isMd ? (
            <>
              <select
                selected={activeTopic}
                onChange={(e) => setActiveTopic(e.target.value)}
                className="form-select mb-5"
              >
                {contentArr.map((curr) => (
                  <option value={curr.topic}>{curr.topic}</option>
                ))}
              </select>
            </>
          ) : (
            <>
              {contentArr.map((curr) => (
                <p
                  onClick={() => setActiveTopic(curr.topic)}
                  className="contactus_content"
                >
                  {activeTopic === curr.topic ? (
                    <span className="fw-bolder" style={{ cursor: "pointer" }}>
                      <span style={{ color: "#ee3900", fontSize: "20px" }}>
                        •&nbsp;&nbsp;
                      </span>
                      {curr.topic}
                    </span>
                  ) : (
                    <span style={{ cursor: "pointer" }}>{curr.topic}</span>
                  )}
                </p>
              ))}
            </>
          )}          
        </div>
        <div className="col-xxl-7 col-xl-9 col-lg-9 col-md-12 col-sm-11 col-12 mb-5">
          {contentArr.map(
            (curr) =>
              curr.topic === activeTopic && (
                <p className="contactus_content col-xxl-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                  {curr.content}
                </p>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
