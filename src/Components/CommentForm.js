import "./Videos.css";

import React from "react";

function CommentForm(props) {
  const {
    handleSubmit,
    handleChange,
    avatar,
    author,
    showAvatarMenu,
    dropDown,
    invalidInput,
    text,
    showAvatars,
  } = props;
  
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="comment-form">
        <span className="form-field">
          <input
            type="text"
            name="username"
            id="username"
            value={author}
            onChange={handleChange}
            placeholder="Your Name"
            className="input-field"
          />
        </span>
        <span className="form-field">
          <textarea
            type="text"
            name="comment"
            id="comment"
            value={text}
            onChange={handleChange}
            placeholder="Add your comment here"
            className="input-field"
          />
        </span>
        <span className="form-buttons">
          <span>
            {avatar ? (
              <img src={avatar} className="chosen-avatar" alt={"avatar"} />
            ) : null}
            <button className="dropbtn" onClick={showAvatarMenu}>
              Choose Your Avatar (Optional)
            </button>
          </span>
          {showAvatars ? <div className="avatar-menu">{dropDown}</div> : null}

          <input type="submit" value="Submit" className="submit-comment" />
        </span>
      </form>
      {invalidInput ? (
        <h4 className="error">Please enter both your name and a comment.</h4>
      ) : null}
    </>
  );
}

export default CommentForm;
