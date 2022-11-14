import React, { Fragment } from "react";
const Footer = () => {
  return (
    <>
      <div className="attribution flex justify-center pb-8 md:flex-col md:items-center">
        <p className="mr-2">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{" "}
          <a href="https://luztherose.github.io/portfolio/">Luz De La Rosa</a>.
        </p>
      </div>
    </>
  );
};

export default Footer;
