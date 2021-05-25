import Dislike from "../Assets/youtube-dislike-png-45967.png";

function DislikeBtn(props) {
  const { dislikes } = props;

  return (
    <button>
      <img src={Dislike} alt="dislike" />
      <br />
      💔{dislikes} {dislikes === 1 ? "dislike " : "dislikes"}     
    </button>
  );
}

export default DislikeBtn;
