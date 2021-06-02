import React from "react";
// import "./About.css";
// import "./me.jpg";
import Avatar from "../../assets/me.jpg";

function Bio() {
  return (
    <div className=" bio">
      <div className="row">
        {/* <div className="chat">
          <figure className="chat-head">
            <img src={Avatar} alt=" " />
          </figure>
          <p className="msg">Hi there!</p>
          <p className="msg">
            <strong>Riccardo here. 👋</strong>
          </p>
          <p className="msg">
            I'm a Product Designer with a focus on <br /> Product Management
            with 10+ years of experience.
          </p>
        </div> */}
      </div>
      <div className="row">
        <div className="intro">
          <figure className="intro--medium avatar">
            <img src={Avatar} alt=" " />
          </figure>
          <div className="intro--content">
            <p className="">
              Hi there! 👋 I'm Riccardo, Product Designer with a focus on
              Product Management, driving impact, and making cute doodles.
            </p>
            <ul className="styled-list">
              <li className="styled-list--item styled-list--item__role">
                Senior Product Designer at Spotify, based in London.
              </li>
              <li className="styled-list--item styled-list--item__contacts">
                Interested in collaborating? Email me or write me on Linkedin.
              </li>
            </ul>
          </div>
          {/* <p className="intro--content"> */}

          {/* </p> */}
        </div>
      </div>
      <div className="row">
        {/* <figure className="avatar">
          <img src={Avatar} alt=" " />
        </figure>
        <p>
          Hi there! 👋 I'm Riccardo, Product Designer with a focus on Product
          Management.
        </p> */}
        {/* <p>Hi there! Riccardo here. 👋</p> */}
        {/* Hi there! Riccardo here. 👋 <br /> */}
        {/* <p>
          Product Designer with a focus on Product Management with 10+ years of
          experience. I often draw, write sometimes, and start new projects in
          the night.
        </p> */}
        {/* </div> */}
        {/* <div className="row"> */}
        {/* <div className="chat">
        <figure className="chat-head">
          <img src={Avatar} alt=" " />
        </figure>
        <p className="msg">Hi there!</p>
        <p className="msg">
          <strong>Riccardo here. 👋</strong>
        </p>
        <p className="msg">
          I'm a Product Designer with a focus on <br /> Product Management with
          10+ years of experience.
        </p>
      </div> */}
        {/* <p>
          Design and Product are my daily bread and butter. I like coding and
          prototyping, doodling, and I am passionate about all things strategy,
          industries of the future, and your good old upcoming OKR planning
          session (you know it's coming!).
        </p> */}
        {/* <ul className="styled-list">
          <li className="styled-list--item styled-list--item__role">
            Senior Product Designer at Spotify, based in London.
          </li>
          <li className="styled-list--item styled-list--item__contacts">
            Interested in collaborating? Email me or write me on Linkedin.
          </li>
        </ul> */}
      </div>
      <div className="row hide">
        <h2>About me</h2>
        <p>
          Creative Agency, 4-people start-up, hypergrowth company, 14K+
          employees corporation, freelance Product consultant. Kind of tried
          them all here!
        </p>
        <p>
          Like many millenials I enjoy travel, and I've grown to appreaciate
          brunch (my parents still can't understand the allure of it).
        </p>
        <p>
          What I enjoy the most though is the boring stuff. Meeting friends for
          long walks, read, draw, import Italian biscotti and other nonna goods
          whenever I can. 🍪
        </p>
        <p>
          2020 goals: read more books, get some decent exercise done, and launch
          at least two side-projects I've been cooking up for too long make it
          sanely out of a global pandemic. 😅
        </p>
      </div>
    </div>
  );
}

export default Bio;
