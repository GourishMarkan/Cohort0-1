// import React from 'react'
import "./Profile.css";
function Profile() {
  return (
    <>
      <div className="container">
        <div id="one"></div>
        <div className="profile"></div>

        <div id="two">
          <h4>Rita Correia</h4>
          <p>London</p>
        </div>
        <div id="three">
          <div className="">
            <h2>80K </h2>
            <p>followers</p>
          </div>
          <div className="">
            <h2>803K </h2>
            <p>likes</p>
          </div>
          <div className="">
            <h2>1.4k </h2>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
