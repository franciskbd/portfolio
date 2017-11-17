import React from "react";
import "./Profile.css";

let Profile = (props) => (
  <div className="col-md-4">
  <div className="profile" style={{
    backgroundImage: `url("${props.image}")`
  }}>



  </div>
</div>

)

export default Profile;
