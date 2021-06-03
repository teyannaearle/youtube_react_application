import Like from "../Assets/youtube-like-png-39121.png";

// Great job making the 'Like' button a separate component! This makes it reusable, should you want to! Just a note though, component file names should be PascalCased, i.e. LikeButton.js instead of Likebutton.js

function LikeBtn(props) {
  const { likes } = props;

  return (
    <button>
      <img src={Like} alt="like" />
      <br />
      ❤️ {likes} {likes === 1 ? "like" : "likes" }
    </button>
  );
}

export default LikeBtn;
