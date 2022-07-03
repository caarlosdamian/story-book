import React from "react";
import ListContainer from "./ListContainer";
import './ListWrapper.css'
const ListWrapper = () => {
  return (
    <div className="wrapper">
        <h2>Add a language</h2>
        <span>Choose from one of the supported languages below:</span>
        <ListContainer />
    </div>
  );
};

export default ListWrapper;
