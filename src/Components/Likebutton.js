import React, { useState } from "react";
import Like from "../Assets/youtube-like-png-39121.png";

function LikeBtn() {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}><img src={Like} alt="like" /><br />{likes} likes</button>;
}

export default LikeBtn;