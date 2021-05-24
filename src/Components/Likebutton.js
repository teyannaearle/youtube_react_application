// import React, { useEffect, useState } from "react";
import Like from "../Assets/youtube-like-png-39121.png";

function LikeBtn(props) {
  // const [likes, setLikes] = useState(0);
  const { likes } = props;

  return (
    // onClick={() => setLikes(likes + 1)}
    <button>
      <img src={Like} alt="like" />
      <br />
      ❤️{likes} {likes === 1 ? "like" : "likes" }
    </button>
  );
}

export default LikeBtn;
