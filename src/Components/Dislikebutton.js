import React, { useState } from "react";
import Dislike from "../Assets/youtube-dislike-png-45967.png";

function DislikeBtn() {
  const [dislikes, setDislikes] = useState(0);

  return (
    <button onClick={() => setDislikes(dislikes + 1)}>
      <img src={Dislike} alt="dislike" />
      <br />
      {dislikes} dislikes
    </button>
  );
}

export default DislikeBtn;
