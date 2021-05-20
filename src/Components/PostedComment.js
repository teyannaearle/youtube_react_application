import React from "react";
import person from "../Assets/person-icon-1682.png";

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

export default function PostedComment({ comment }) {
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

      <span className="comment-username">{comment.commentName}</span>
      <br />
      <time className="block-comment-time">{getTime()}</time>

      <div className="comment-text">
        <p>{comment.commentBody}</p>
      </div>
    </div>
  );
}
