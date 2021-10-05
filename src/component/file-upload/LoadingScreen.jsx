import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/BeatLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading (props){
 
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={15}
          color={"#000000"}
          loading={props.value}
        />
      </div>
    );

}

export default Loading