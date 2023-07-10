import React from "react";
import { useState } from "react";
import { Children } from "react/cjs/react.production.min";

export const Todo = ({children}) => {

  return (
    <div className="card" style="width: 80%">
      <div className="card-body">
        <h4 className="card-title">ToDo</h4>
        <ol className="list-group">
          <li className="list-item">{children}</li>
        </ol>
      </div>
    </div>
  );
};
