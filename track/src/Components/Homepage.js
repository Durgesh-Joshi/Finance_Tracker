import React, { Component } from "react";


import Images from "../Images/Home.webp";
import c1 from "../Images/c1.webp";
import c2 from "../Images/c2.webp";
import c3 from "../Images/c3.jpg";

export default class Homepage extends Component {
  componentDidMount() {
    const carouselElement = document.querySelector("#carouselExampleDark");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 2000, // auto move every 2 seconds
        ride: "carousel",
        wrap: true, // infinite loop
        pause: false // never pause on hover
      });
    }
  }

  render() {
    return (
      <>
       
<div className="bg-light">
        {/* Carousel Section */}
        <div className="container py-3">
          <div
            id="carouselExampleDark"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner rounded shadow-sm overflow-hidden"
              style={{
                height: "350px",
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center"
              }}
            >
              <div className="carousel-item active">
                <img
                  src={c1}
                  className="d-block w-100"
                  alt="First slide"
                  style={{
                    height: "350px",
                    objectFit: "contain",
                    backgroundColor: "#000"
                  }}
                />
               
              </div>

              <div className="carousel-item">
                <img
                  src={c2}
                  className="d-block w-100"
                  alt="Second slide"
                  style={{
                    height: "350px",
                    objectFit: "contain",
                    backgroundColor: "#000"
                  }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src={c3}
                  className="d-block w-100"
                  alt="Third slide"
                  style={{
                    height: "350px",
                    objectFit: "contain",
                    backgroundColor: "#000"
                  }}
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src={Images}
                alt="Homepage banner showing main content area"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="mt-4 d-flex gap-3 justify-content-center">
                <button type="button" className="btn btn-primary">
                  Start Investment
                </button>
                <button type="button" className="btn btn-success">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <h1 className="fw-bold text-black">
                Today's Finance <br />
                <span className="text-primary">Makes Your Future Better</span>
              </h1>
              <p className="mt-3 fs-5" style={{ color: "#444" }}>
                Take charge of your money today, secure your dreams for
                tomorrow. With smart budgeting, clear insights, and powerful
                tools, we make managing your finances simple, stress-free, and
                rewarding.
              </p>
              <p className="fs-5" style={{ color: "#444" }}>
                Turn today’s decisions into tomorrow’s success—because your
                future deserves the best investment: you.
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
      
    );
  }
}
