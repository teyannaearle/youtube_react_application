import React, { useState} from "react";
import "./Videos.css"


export default function UpdateBtn(props) {
    const [editable, updateEditable] = useState(false)
  
  function submitUpdate(e) {
    e.preventDefault()
    props.handleUpdate(props.commentId)
    updateEditable(!editable)
}
  return (
    <div className="update-buttons">
      <button
        onClick={() => {
         updateEditable(!editable);
        }}
      >
        Update
      </button>
      {editable ? (
        <form onSubmit={submitUpdate}>
          {" "}
          <textarea
            type="text"
            id="comment"
            name="comment"
            placeholder="Update your comment here"
            onChange={props.handleChange}
            value={props.text}
            className="input-field"
          />{" "}
          <button>Submit</button>{" "}
        </form>
      ) : null}
    </div>
  );
}
