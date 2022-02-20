import React from "react";
import "../styles/cube.css";
import { Link } from "gatsby";

// links for research, about, partners, events,
function Cube({ size, nav, position, left, top, onClick }) {
  const navigation = (page) => {
    console.log("clicked");
    return <Link to={page}></Link>;
  };

  let cssProperty = {
    "--size": size,
    position: position,
    left: left,
    top: top,
  };

  if (!nav) {
    return (
      <div id="wrapper" style={cssProperty}>
        <div class="box-area">
          <Link to="/Research" id="box-front" class="box">
            <h2> Research </h2>
          </Link>
          <Link to="/About" id="box-right" class="box">
            <h2> About </h2>
          </Link>
          <Link to="/Partners" id="box-back" class="box">
            <h2> Partners </h2>
          </Link>
          <Link to="/Events" id="box-left" class="box">
            <h2> Events </h2>
          </Link>
          <Link to="/Images" id="box-top" class="box">
            <h2> Gallery </h2>
          </Link>
          <Link to="/ContactUs" id="box-bottom" class="box">
            <h2> Contact Us </h2>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div id="wrapper" style={cssProperty} onClick={onClick}>
        <div class="box-area">
          <div id="box-front" class="box"></div>
          <div id="box-right" class="box"></div>
          <div id="box-back" class="box"></div>
          <div id="box-left" class="box"></div>
          <div id="box-top" class="box"></div>
          <div id="box-bottom" class="box"></div>
        </div>
      </div>
    );
  }
}

export default Cube;