import React from "react";
import Img1 from "../Img/about1.jpeg";
import Img2 from "../Img/about2.jpg";
import Img3 from "../Img/about3.jpg";

function About() {
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="row featurette d-flex justify-content align-items-center">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                It all started with ICoder's ideas{" "}
                <span className="text-muted"></span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                src={Img1}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row featurette d-flex justify-content align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              I started ICoding in 2022<span className="text-muted"></span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-2">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={Img2}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="row featurette d-flex justify-content align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={Img3}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default About;
