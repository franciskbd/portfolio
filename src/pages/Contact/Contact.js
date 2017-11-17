import React from "react";
import "./Contact.css";

let Contact = () => (

  <div className="contact">
    <div className="contact-container">
      <h3>
        Lets Hear From You</h3>
      <input placeholder="First Name" className="form-control"/>
      <input placeholder="First Name" className="form-control"/>
      <input placeholder="e-mail" className="form-control"/>
      <textarea placeholder="Message" className="form-control" style={{
        height: "200px"
      }}></textarea>
      <button className="form-control">
        print</button>

    </div>

  </div>
)

export default Contact
