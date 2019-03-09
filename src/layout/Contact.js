import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid" style={backgroundBody}>
      <h2
        className="h1-responsive text-center my-5"
        style={{ color: "#0099CC" }}
      >
        CONTACT
      </h2>
      <p className="text-center w-responsive mx-auto pb-5" />
      <div className="row">
        <div className="col-md-9 md-0 mb-5">
          <form>
            <div className="row">
              <div className="col" md="6">
                <div className="md-form mb-0">
                  <input type="text" id="contact-name" label="Your name" />
                </div>
              </div>
              <div className="col" md="6">
                <div className="md-form mb-0">
                  <input type="text" id="contact-email" label="Your email" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" md="12">
                <div className="md-form mb-0">
                  <input type="text" id="contact-subject" label="Subject" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" md="12">
                <div className="md-form mb-0">
                  <input
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="text-center text-md-left">
            <button color="primary" size="md">
              Send
            </button>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <icon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Atlanta, GA, USA</p>
            </li>
            <li>
              <icon icon="phone" size="2x" className="blue-text mt-4" />
              <br />
              <a href="tel:+1-404-729-7574">404-729-7574</a>
            </li>
            <li>
              <icon icon="envelope" size="2x" className="blue-text mt-4" />
              <br />
              <a href="mailto:kamaria.inman@gmail.com">
                kamaria.inman@gmail.com
              </a>
            </li>
            <li className="list-inline-item">
              <br />
              <p>LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/kamariapm/"
                className="p-2 fa-lg w-ic"
              >
                <icon fab icon="linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const backgroundBody = {
  background: "#eceff1"
};

export default Contact;
