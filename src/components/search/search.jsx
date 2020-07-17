import React from "react";
import { withRouter } from "react-router-dom";

const Result = (props) => {
  return (
    <div>
      {props.history.push(
        `${props.match.url}${props.groupId}${props.categoryId}`
      )}
    </div>
  );
};

export default withRouter(Result);
