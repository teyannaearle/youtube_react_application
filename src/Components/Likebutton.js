import Like from "../Assets/youtube-like-png-39121.png";

function LikeBtn(props) {
  const { likes } = props;

  return (
    <button>
      <img src={Like} alt="like" />
      <br />
      ❤️{likes} {likes === 1 ? "like" : "likes" }
    </button>
  );
}

export default LikeBtn;
