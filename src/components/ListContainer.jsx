import PropTypes from "prop-types";
import React from "react";
import "./ListContainer.css";

function ListContainer() {
  const languagues = [
    "Dutch",
    "French",
    "German",
    "Italian",
    "Japanese",
    "Spanish",
  ];

  return (
    <div className="conatiner">
      <ul className="list list--border">
        {languagues.map((item) => (
          <li className="slot">{item}</li>
        ))}
      </ul>
      <button className="button">Add</button>
    </div>
  );
}

ListContainer.propTypes = {
  label: PropTypes.string,
};

export default ListContainer;
