import React, { Component } from "react";
import YouTube from "react-youtube";
import PostedComment from "./PostedComment";
import "./Videos.css";
import firebase from "./firebase.js";

export default class VideoFirebase extends Component {
  constructor() {
    super();
    this.state = {
      //   comments: {},
      //   countLike: 0,
      //   countDislike: 0,
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
    e.target.reset()
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



  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (e.target[0].value.trim() && e.target[1].value.trim()) {
  //       const commentData = {
  //         commentName: e.target[0].value.trim(),
  //         commentBody: e.target[1].value.trim(),
  //       };
  //       const timeStamp = new Date().getTime();
  //       const comments = this.state.comments;
  //       comments["comment-id" + timeStamp] = commentData;
  //       this.setState({
  //         comments: this.state.comments,
  //       });
  //     }

  //     e.target.reset();
  //   };

  //   deleteComment = (index) => {
  //     const comments = this.state.comments;
  //     delete comments[index];
  //     this.setState({
  //       comments,
  //     });
  //   };

  //   handleCountLike = (num) => {
  //     console.log("count like")
  //     this.setState({
  //       countLike: this.state.countLike + num,
  //     })
  //   }

  //   handleCountDislike = (num) => {
  //     console.log("count dislike")
  //     this.setState({
  //       countDislike: this.state.countDislike + num
  //     })
  //   }

  //   renderComment = (key) => {
  //     return (
  //       <li key={key}>
  //         <PostedComment
  //           key={key}
  //           index={key}
  //           comment={this.state.comments[key]}
  //           deleteComment={this.deleteComment}
  //           handleCountLike={this.handleCountLike}
  //           handleCountDislike={this.handleCountDislike}
  //           countLike={this.state.countLike}
  //           countDislike={this.state.countDislike}
  //         />
  //       </li>
  //     );
  //   };

  render() {
    const { author, text, comments } = this.state;
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
                  {this.state.postedComments.map((comment) => {
                    return (
                      <li key={comment.id}>
                        <h3>{comment.commentBody}</h3>
                        <p>posted by: {comment.username}</p>
                        <button onClick={() => this.removeComment(comment.id)}>Remove Comment</button>
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
