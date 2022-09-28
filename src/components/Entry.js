import React from "react";
import "./Entry.css";
import PropTypes from "prop-types";




export default function Entry(props) {
  return (
    <>     
      <div className="box">

        <div className="grid">

          <div className="grid-1">

            <img
              className="card-image"
              width={"100px"}
              src={props.link}
              alt=""
            />


          </div>

          <div className="grid-2">

            <h1>{props.name}</h1>

            <div className="box-line">
              <hr className="box-line" />           
            </div>

            <p props="content">{props.content}</p>

            <ul className="card-list">
              <li>{props.phoneno}</li>
              <li >{props.email}</li>
            </ul>

<button className="card-button">View Details</button>

          </div>
        </div>
      </div>
    </>
  );
}

Entry.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  phoneno: PropTypes.string,
  email: PropTypes.string
};
