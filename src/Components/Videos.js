import React, { Component } from "react";
import YouTube from "react-youtube";

export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
        showComments: false,
        comments: [
          {id: 0, author: "", text: ""},
          
        ]
      };
  
  }

  handleSubmit = (e) => {
    e.preventDefault();
     //console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    console.log(e.target[0].name)
    console.log("form is submitted");
    const author = e.target[0].value.trim();
    const text = e.target[1].value.trim();
    const commentObj = {}
    //const commentObj = { author, text }
    //console.log(author, text)
    if (!author || !text) {
      return;
    }


    this.setState({
        comments: {
            ...this.state.comments, author: author,
        }
        
    }
    




    //     prevState => {
    //     return {
    //         comments: prevState.comments.concat(commentObj)
    //     }
    // }
        
    //     {
    //   comments: {
    //     author: [...this.state.author, author],
    //     text: [...this.state.text, text],
    //   },
    // }
    );
    // console.log(author, text);
    console.log(this.state.comments.author);
    console.log(this.state.comments.text);
  };

  handleName = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  handleComment = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { author, text, comments } = this.state;
    const { videoId } = this.props;

    const postedComments = Object.keys(comments).map((comment) => (
      <li>
        {" "}
        {comments.author} SAID {comments.text}{" "}
      </li>
    ));
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div>
        <div>
          <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
        </div>

        <div className="comments">
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="username">Name: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={author}
              onChange={this.handleName}
            />

            <label htmlFor="comment">Comment: </label>
            <input
              type="text"
              name="comment"
              id="comment"
              value={text}
              onChange={this.handleComment}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="commentList">{postedComments}</div>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
