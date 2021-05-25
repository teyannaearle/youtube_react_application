import LikeBtn from "./Likebutton";
import DislikeBtn from "./Dislikebutton";
import UpdateBtn from "./Updatebutton";
import "./Videos.css";

function CommentList(props) {
  const {
    postedComments,
    handleUpdate,
    handleChange,
    text,
    removeComment,
    handleCountDislike,
    handleCountLike,
  } = props;
  return (
    <>
      <section className="comment-list">
        <div className="wrapper">
          <ul>
            {postedComments.map((comment) => {
              return (
                <li key={comment.id} className="comment">
                  <div className="comment-user">
                    <div className="comment-user-avatar">
                      <img
                        src={comment.avatar}
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
                      {comment.datePosted}
                    </time>
                    <span className="delete-button">
                      {" "}
                      <button onClick={() => removeComment(comment.id)}>
                        Delete
                      </button>
                    </span>
                    <span className="update">
                      <UpdateBtn
                        handleUpdate={handleUpdate}
                        handleChange={handleChange}
                        text={text}
                        commentId={comment.id}
                      />
                    </span>

                    <span className="like-button">
                      <div onClick={() => handleCountLike(comment.id)}>
                        <LikeBtn likes={comment.likes} />{" "}
                      </div>
                      <div onClick={() => handleCountDislike(comment.id)}>
                        <DislikeBtn dislikes={comment.dislikes} />{" "}
                      </div>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CommentList;
