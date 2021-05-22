import React, { Component } from "react";
import YouTube from "react-youtube";
import PostedComment from "./PostedComment";
import YoutubeApi from "./YoutubeApi";
import "./Videos.css";

export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      comments: {},
      countLike: 0,
      countDislike: 0,
      title: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim() && e.target[1].value.trim()) {
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
    }

    e.target.reset();
  };

  deleteComment = (index) => {
    const comments = this.state.comments;
    delete comments[index];
    this.setState({
      comments,
    });
  };

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

  renderComment = (key) => {
    return (
      <li key={key}>
        <PostedComment
          key={key}
          index={key}
          comment={this.state.comments[key]}
          deleteComment={this.deleteComment}
          handleCountLike={this.handleCountLike}
          handleCountDislike={this.handleCountDislike}
          countLike={this.state.countLike}
          countDislike={this.state.countDislike}
        />
      </li>
    );
  };

  async componentDidMount() {
    this.sendLocation();
    const results = await YoutubeApi.getVideo(this.props.match.params.id);
    const title = results[0].snippet.title;
    this.setState({
      title,
    });
  }

  sendLocation = () => {
    this.props.getLocation(this.props.match.params.id);
  };

  render() {
    const { author, text, comments, title } = this.state;
    const { invalid } = this.props;
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
        {invalid ? (
          <h3 className="error">Invalid search. Please try again.</h3>
        ) : null}
        <div className="video-page">
          <h1 className="h1">{title}</h1>
          <div className="video">
            <YouTube
              videoId={id}
              opts={opts}
              onReady={this._onReady}
              className="video-player"
            />
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
    //console.log(event)
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}
