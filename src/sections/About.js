import React from "react";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="names">
          <h1 className="titles">Manuel</h1>
          <h1 className="titles">&</h1>
          <h1 className="titles">Natasha</h1>
        </div>
        <div className="image-context">
          <div className="img-contain">
            <div className="male-image"></div>
            <p>
              Singer, writter, chef. Love music, reading and cooking. "Love
              isn't something you find. Love is something that finds you."
            </p>
          </div>
          <div className="img-contain">
            <div className="female-image"></div>
            <p>
              Singer, writter, chef. Love music, reading and cooking. "Love
              isn't something you find. Love is something that finds you."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
