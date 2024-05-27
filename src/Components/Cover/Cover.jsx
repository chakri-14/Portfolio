import React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="container py-5 mb-5 my-5" id="home">
      <div className="row align-items-center my-5 py-5">
        <div className="col-lg-7 py-5 order-2 order-lg-1 px-4">
          <h4 className="font-weight-bold">Hey There !!</h4>
          <h2 className="font-weight-bold">I'm Chakri Mulaparthi</h2>
          <h4 className="font-weight-bold mb-4 pb-2">
             <span>Web Developer</span>
          </h4>
          <p className="font-weight-normal">
            I'm a Student. Insterested in Web Development and Freelancing
          </p>

          <div className="social-media py-3">
            <a
              href="https://www.linkedin.com/in/mulaparthi-chakralikith-74b11526a/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/chakri-14/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/chakri._14/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <button
            href="Add your Resume"
            target="_blank"
            download
            className="button my-3"
          >
            Download Resume🫠
          </button>
        </div>
        <div className="col-12 col-lg-4 offset-lg-1 text-center order-1 order-lg-2 py-5">
          <img
            src="../public/assets/chakri-modified.png"
            alt="chakri"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
