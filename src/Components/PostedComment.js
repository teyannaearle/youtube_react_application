import React from "react";
import person from "../Assets/person-icon-1682.png";
import Like from "../Assets/youtube-like-png-39121.png";
import Dislike from "../Assets/youtube-dislike-png-45967.png";
// import "./PostedComment.css";

const getTime = () => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  const mon = month[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();
  const dateAll = mon + " " + day + ", " + year;
  return dateAll;
};

export default function PostedComment({
  index,
  comment,
  deleteComment,
  handleCountLike,
  handleCountDislike,
  countLike,
  countDislike,
}) {
  return (
    <div className="comment-user">
      <div className="comment-user-avatar">
        <img src={person} className="comment-avatar" alt="user avatar" />
      </div>

      <div className="comment-text">
        <span className="comment-username">{comment.commentName}</span>
        <p>{comment.commentBody}</p>
      </div>
      <time className="block-comment-time">{getTime()}</time>
      <br />
      <span className="delete-button">
        {" "}
        <button onClick={() => deleteComment(index)}> Delete Comment</button>
      </span>
      <span className="like-button">
        <button onClick={() => handleCountLike(1)}>
          <img src={Like} alt="like" />
        </button>{"     "}
        <p>{countLike ? countLike : null}</p>
        <button onClick={() => handleCountDislike(1)}>
          <img src={Dislike} alt="dislike" />
        </button>{"     "}
        <p>{countDislike ? countDislike : null}</p>
      </span>
      
        
       
    
    </div>
  );
}
