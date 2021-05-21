import React, { Component } from "react";
import YouTube from "react-youtube";
import PostedComment from "./PostedComment";
import "./Videos.css";

export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      comments: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      commentName: e.target[0].value.trim(),
      commentBody: e.target[1].value.trim(),
    };
    const timeStamp = new Date().getTime();
    const comments = this.state.comments;
    comments["comment-id" + timeStamp] = commentData;
    this.setState({
      comments: this.state.comments,
    });
    e.target.reset();
  };

  deleteComment = (index) => {
    const comments = this.state.comments;
    delete comments[index];
    this.setState({
      comments,
    });
  };

  renderComment = (key) => {
    return (
      <li key={key}>
        <PostedComment
          key={key}
          index={key}
          comment={this.state.comments[key]}
          deleteComment={this.deleteComment}
        />
      </li>
    );
  };

  render() {
    const { author, text, comments} = this.state;
    const { videoTitle, invalid } = this.props;
    const { id } = this.props.match.params;
    const postedComments = Object.keys(comments).map(this.renderComment);

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <>
        {invalid ? <h3 className="error">Invalid search. Please try again.</h3> : null }
        <div className="video-page">
          <h1 className="h1">{videoTitle}</h1>
          <div>
            <YouTube videoId={id} opts={opts} onReady={this._onReady} />
          </div>

          <div className="comments">
            <h3>Leave a Comment</h3>
            <form action="" onSubmit={this.handleSubmit} className="comment-form">
              <label htmlFor="username">Name: </label>
              <input
                type="text"
                name="username"
                id="username"
                value={author}
                onChange={this.handleName}
                placeholder="Your Name"
              />

              <label htmlFor="comment">Comment: </label>
              <input
                type="text"
                name="comment"
                id="comment"
                value={text}
                onChange={this.handleComment}
                placeholder="Add your comment here"
              />
              <input type="submit" value="Submit" />
            </form>

            <div className="comment-list">{postedComments}</div>
          </div>
        </div>
      </>
    );
  }
  _onReady(event) {
    console.log(event)
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
