import * as React from "react";
import "../styles/gallary.css";
//import { graphql, useStaticQuery } from "gatsby";
//import Img from "gatsby-plugin-image";
import Navigation from "../components/Navigation";
const Gallary = () => {
  
  return (
    <>
      <Navigation></Navigation>
      <br />
      <br />
      <br />
      <div className="gallery">
        {/* {data.allFile.edges.map((image, key) => {
        return (
          <div className="gallery__column" key={key}>
            <a
              href="https://unsplash.com/@jeka_fe"
              target="_blank"
              className="gallery__link"
            >
              <Img
                className="gallery__image"
                fluid={image.node.childImageSharp.fluid}
                alt="Hot Ivan Having his Tea in the garden"
              />
            </a>
          </div>
        );
      })} */}
        <div className="gallery__column">
          <a href="images/12.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/12.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/1.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/1.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/2.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/2.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/3.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/3.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
        </div>
        <div className="gallery__column">
          <a href="images/4.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/4.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/5.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/5.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/6.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/6.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
        </div>
        <div className="gallery__column">
          <a href="images/7.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/7.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/8.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/8.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/9.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/9.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
        </div>
        <div className="gallery__column">
          <a href="images/10.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/10.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
          <a href="images/11.jpg" className="gallery__link">
            <img
              className="gallery__image"
              src="images/11.jpg"
              alt="Hot Ivan Having his Tea in the garden"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Gallary;
