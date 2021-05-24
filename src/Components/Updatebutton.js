import React, { useState} from "react";


export default function UpdateBtn(props) {
    const [editable, updateEditable] = useState(false)
  const { commentId, text, handleChange } = props;
  
  function submitUpdate(e) {
    e.preventDefault()
    props.handleUpdate(commentId)
    updateEditable(!editable)
}
  return (
    <div>
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
            onChange={handleChange}
            value={text}
            className="input-field"
          />{" "}
          <button>Submit</button>{" "}
        </form>
      ) : null}
    </div>
  );
}
