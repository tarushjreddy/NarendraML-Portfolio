import React from "react";
import loader from "./pre.svg";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img src={loader} />
        <div style={{ marginTop: "50px", fontWeight: "bold" }}>
          DeveloperKing.co
        </div>
      </div>
    </div>
  );
}

export default Pre;
