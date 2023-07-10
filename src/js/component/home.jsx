import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Todo } from "./todo";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
      <Todo>
        <form action="get">
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          ></input>
        </form>
      </Todo>
    </div>
  );
};

export default Home;
