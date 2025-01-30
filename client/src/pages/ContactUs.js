import React from "react";
import "./contact.css"
const handlesubmit = () => {
    alert("Form submitted successfully!");
};
const ContactUs = () => {
  return (
    <div>
      <div
        className="contact2"
        style={{
          backgroundImage:
            "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)",
        }}
        id="contact"
      >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>
                      <form>
                        <div className="row">
                          {[
                            { placeholder: "Name", type: "text" },
                            { placeholder: "Email", type: "email" },
                            { placeholder: "Phone", type: "text" },
                            { placeholder: "Location", type: "text" },
                            { placeholder: "Message", type: "text", fullWidth: true },
                          ].map((field, index) => (
                            <div
                              className={`col-lg-${field.fullWidth ? "12" : "6"}`}
                              key={index}
                            >
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  type={field.type}
                                  placeholder={field.placeholder}
                                />
                              </div>
                            </div>
                          ))}
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                            >
                              <button onClick={handlesubmit} className="btn btn-danger-gradiant  text-white border-0 py-2 px-3">
                                SUBMIT NOW <i className="ti-arrow-right"></i>
                              </button>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image"
                    style={{
                      backgroundImage:
                        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                    }}
                  >
                    <div className="detail-box p-4">
                      <h5 className="text-white font-weight-light mb-3">
                        ADDRESS
                      </h5>
                      <p className="text-white op-7">
                        601 Sherwood Ave.
                        <br /> San Bernandino
                      </p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">
                        CALL US
                      </h5>
                      <p className="text-white op-7">
                        251 546 9442
                        <br /> 630 446 8851
                      </p>
                      <div className="round-social light">
                        <a
                          href="#!"
                          className="ml-0 text-decoration-none text-white border border-white rounded-circle"
                        >
                          <i className="icon-social-facebook"></i>
                        </a>
                        <a
                          href="#!"
                          className="text-decoration-none text-white border border-white rounded-circle"
                        >
                          <i className="icon-social-twitter"></i>
                        </a>
                        <a
                          href="#!"
                          className="text-decoration-none text-white border border-white rounded-circle"
                        >
                          <i className="icon-social-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
