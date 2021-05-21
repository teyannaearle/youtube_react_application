import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Videos.css";
import firebase from "./firebase.js";
import person from "../Assets/person-icon-1682.png";
import Like from "../Assets/youtube-like-png-39121.png";
import Dislike from "../Assets/youtube-dislike-png-45967.png";
import "./PostedComment.css";

export default class VideoFirebase extends Component {
  constructor() {
    super();
    this.state = {
      countLike: 0,
      countDislike: 0,
      username: "",
      comment: "",
      postedComments: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const commentsRef = firebase.database().ref("comments");
    const comment = {
      username: this.state.username,
      commentBody: this.state.comment,
    };
    commentsRef.push(comment);
    this.setState({
      comment: "",
      username: "",
    });
    e.target.reset();
  }
  componentDidMount() {
    const commentsRef = firebase.database().ref("comments");
    commentsRef.on("value", (snapshot) => {
      let comments = snapshot.val();
      let newState = [];
      for (let comment in comments) {
        newState.push({
          id: comment,
          username: comments[comment].username,
          commentBody: comments[comment].commentBody,
        });
      }
      this.setState({
        postedComments: newState,
      });
    });
  }

  removeComment(commentId) {
    const commentRef = firebase.database().ref(`/comments/${commentId}`);
    commentRef.remove();
  }

  handleCountLike = (num) => {
    console.log("count like");
    this.setState({
      countLike: this.state.countLike + num,
    });
  };

  handleCountDislike = (num) => {
    console.log("count dislike");
    this.setState({
      countDislike: this.state.countDislike + num,
    });
  };

  render() {
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

    const { author, text, postedComments, countDislike, countLike } =
      this.state;
    const { videoTitle, invalid } = this.props;
    const { id } = this.props.match.params;
    // const postedComments = Object.keys(comments).map(this.renderComment);

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <>
        {invalid ? (
          <h3 className="error">Invalid search. Please try again.</h3>
        ) : null}
        <div className="video-page">
          <h1 className="h1">{videoTitle}</h1>
          <div>
            <YouTube videoId={id} opts={opts} onReady={this._onReady} />
          </div>

          <div className="comments">
            <h3>Leave a Comment</h3>
            <form
              action=""
              onSubmit={this.handleSubmit}
              className="comment-form"
            >
              <label htmlFor="username">Name: </label>
              <input
                type="text"
                name="username"
                id="username"
                value={author}
                onChange={this.handleChange}
                placeholder="Your Name"
              />

              <label htmlFor="comment">Comment: </label>
              <input
                type="text"
                name="comment"
                id="comment"
                value={text}
                onChange={this.handleChange}
                placeholder="Add your comment here"
              />
              <input type="submit" value="Submit" />
            </form>

            {/* <div className="comment-list">{postedComments}</div> */}

            <section className="comment-list">
              <div className="wrapper">
                <ul>
                  {postedComments.map((comment) => {
                    return (
                      <li key={comment.id}>
                        <div className="comment-user">
                          <div className="comment-user-avatar">
                            <img
                              src={person}
                              className="comment-avatar"
                              alt="user avatar"
                            />
                          </div>
                          <div className="comment-text">
                            <span className="comment-username">
                              {comment.username}
                            </span>
                            <p>{comment.commentBody}</p>
                          </div>
                          <time className="block-comment-time">
                            {getTime()}
                          </time>
                          <span className="delete-button">
                            {" "}
                            <button
                              onClick={() => this.removeComment(comment.id)}
                            >
                              Delete
                            </button>

                            
                          </span>

                          <span className="like-button">
                            <button onClick={() => this.handleCountLike(1)}>
                              <img src={Like} alt="like" />
                            </button>
                            {"     "}
                            <p>{countLike ? countLike : null}</p>
                            <button onClick={() => this.handleCountDislike(1)}>
                              <img src={Dislike} alt="dislike" />
                            </button>
                            {"     "}
                            <p>{countDislike ? countDislike : null}</p>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
  _onReady(event) {
    //console.log(event)
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}
