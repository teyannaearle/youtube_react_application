import React from "react";
import person from "../Assets/person-icon-1682.png";
import "./PostedComment.css";

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

export default function PostedComment({ index, key, comment, deleteComment }) {
  console.log(comment);

  return (
    <div className="comment-user">
      <div className="comment-user-avatar">
        <img
          src={person}
          className="comment-avatar"
          alt="user avatar"
          // style={{ height: "50px", width: "50px" }}
        />
      </div>

   

      <div className="comment-text">
        <span className="comment-username">{comment.commentName}</span>
        <p>{comment.commentBody}</p>
      {/* <p>key {index}</p> */}
      </div>
      <time className="block-comment-time">{getTime()}</time>
      <br />
      <span className="delete-button">
        {" "}
        <button onClick={() => deleteComment(index)}> Delete Comment</button>
      </span>
    </div>
  );
}
