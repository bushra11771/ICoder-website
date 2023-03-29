import React from "react";
import Img1 from "../Img/1.jpg";
import Img2 from "../Img/2.jpg";
import Img3 from "../Img/3.jpg";
import WelcomeButton from "./WelcomeButton";

function Header() {
  return (
    <div>
      {/* Login Modal */}
      {/* <div
        className="modal fade"
        id="ligineModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} height="500" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome To ICoder</h2>
              <p>Technology News, Development & Trends</p>
              <WelcomeButton />
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img2} height="500" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>The Best Coding Blog</h2>
              <p>Technology News, Development & Trends</p>
              <WelcomeButton />
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img3} height="500" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Award wining Blog</h2>
              <p>Technology News, Development & Trends</p>
              <WelcomeButton />
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
