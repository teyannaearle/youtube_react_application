// import React, { useState } from "react";
import Dislike from "../Assets/youtube-dislike-png-45967.png";

function DislikeBtn(props) {
  // const [dislikes, setDislikes] = useState(0);
  const { dislikes } = props;

  return (
    // onClick={() => setDislikes(dislikes + 1)}
    <button>
      <img src={Dislike} alt="dislike" />
      <br />
      {dislikes} {dislikes === 1 ? "dislike" : "dislikes"}
    </button>
  );
}

export default DislikeBtn;
