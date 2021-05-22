import React, { useState } from "react";
import Like from "../Assets/youtube-like-png-39121.png";
<<<<<<< HEAD
// import Dislike from "../Assets/youtube-dislike-png-45967.png";
=======

>>>>>>> fa0d24364159af55d4e4a69454c50be1ca703cfd

function LikeBtn() {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}><img src={Like} alt="like" /><br />{likes} likes</button>;
}

export default LikeBtn;