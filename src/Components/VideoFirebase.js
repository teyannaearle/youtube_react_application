import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Videos.css";
import firebase from "./firebase.js";
import person from "../Assets/person-icon-1682.png";
import YoutubeApi from "./YoutubeApi";
import { AvatarGenerator } from "random-avatar-generator";
import uuid from "react-uuid";
import CommentForm from "./CommentForm.js";
import CommentList from "./CommentList.js";

export default class VideoFirebase extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
      postedComments: [],
      title: "",
      invalidInput: false,
      avatars: [],
      avatar: "",
      showAvatars: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      invalidInput: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username && this.state.comment) {
      const commentsRef = firebase.database().ref("comments");
      const comment = {
        username: this.state.username,
        commentBody: this.state.comment,
        likes: 0,
        dislikes: 0,
        datePosted: this.getTime(),
        avatar: this.state.avatar ? this.state.avatar : person,
        showAvatars: false,
      };
      commentsRef.push(comment);
      this.setState({
        comment: "",
        username: "",
        invalidInput: false,
        avatar: "",
      });
      e.target.reset();
    } else {
      this.setState({
        invalidInput: true,
      });
    }
  }

  async componentDidMount() {
    this.sendLocation();
    const commentsRef = firebase.database().ref("comments");
    commentsRef.on("value", (snapshot) => {
      let comments = snapshot.val();
      let newState = [];
      for (let comment in comments) {
        newState.push({
          id: comment,
          username: comments[comment].username,
          commentBody: comments[comment].commentBody,
          likes: comments[comment].likes,
          dislikes: comments[comment].dislikes,
          datePosted: comments[comment].datePosted,
          avatar: comments[comment].avatar,
        });
      }
      this.setState({
        postedComments: newState,
      });
      this.generateRandomAvatar();
    });

    try {
      const results = await YoutubeApi.getVideo(this.props.match.params.id);
      const title = results[0].snippet.title;
      this.setState({
        title,
      });
    } catch {
      this.setState({
        title: "",
      });
    }
  }

  removeComment(commentId) {
    const commentRef = firebase.database().ref(`/comments/${commentId}`);
    commentRef.remove();
  }

  handleCountLike = (id) => {
    firebase
      .database()
      .ref(`/comments/${id}/likes`)
      .set(firebase.database.ServerValue.increment(1));
  };

  handleCountDislike = (id) => {
    firebase
      .database()
      .ref(`/comments/${id}/dislikes`)
      .set(firebase.database.ServerValue.increment(1));
  };

  sendLocation = () => {
    this.props.getLocation(this.props.match.params.id);
  };

  handleUpdate = (commentId) => {
    const commentRef = firebase.database().ref(`/comments/${commentId}`);
    commentRef.update({
      commentBody: this.state.comment,
    });
  };

  getTime = () => {
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

  generateRandomAvatar = () => {
    const generator = new AvatarGenerator();
    const avatarArray = [];

    for (let i = 0; i < 12; i++) {
      avatarArray.push(generator.generateRandomAvatar());
    }
    this.setState({
      avatars: avatarArray,
    });
  };

  selectAvatar = (av) => {
    this.setState({
      avatar: av,
      showAvatars: false,
    });
  };

  showAvatarMenu = (e) => {
    e.preventDefault();
    this.setState({
      showAvatars: !this.state.showAvatars,
    });
  };

  render() {
    const {
      author,
      text,
      postedComments,
      title,
      invalidInput,
      avatars,
      avatar,
      showAvatars,
    } = this.state;
    const { invalid } = this.props;
    const { id } = this.props.match.params;

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

    const dropDown = avatars.map((av) => (
      <img
        value={av}
        onClick={() => this.selectAvatar(av)}
        src={av}
        alt={avatar}
        key={uuid()}
        className="avatar-images"
      />
    ));
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
            <CommentForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              avatar={avatar}
              author={author}
              showAvatarMenu={this.showAvatarMenu}
              dropDown={dropDown}
              invalidInput={invalidInput}
              text={text}
              showAvatars={showAvatars}
            />
            <CommentList
              handleUpdate={this.handleUpdate}
              handleChange={this.handleChange}
              text={text}
              removeComment={this.removeComment}
              handleCountDislike={this.handleCountDislike}
              handleCountLike={this.handleCountLike}
              postedComments={postedComments}
            />
          </div>
        </div>
      </>
    );
  }
  _onReady(event) {}
}
