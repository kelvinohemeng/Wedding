import React from "react";

export const FormSection = () => {
  return (
    <section className="form-section">
      <div className="container">
        <form className="form">
          <h1 className="titles">Send a Wish</h1>
          <div className="name-email">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className=" flex-1 border-b-2 bg-transparent border-gray-400 px-5 py-3 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
              className=" flex-1 border-b-2 bg-transparent border-gray-400 px-5 py-3 focus:outline-none"
            />
          </div>
          <div className=" textarea-submit">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="2"
              placeholder="Your message"
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="form-img"></div>
      </div>
    </section>
  );
};
