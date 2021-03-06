import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const getRandom = async () => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${apiKey}&part=snippet&maxResults=24`
  );
  return data.items;
};

const getSearch = async (input) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=48&q=${input}`
  );
  return data.items;
};

const getVideo = async (id) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${apiKey}`
  )
  return data.items
}

const defaults = {
  getRandom,
  getSearch,
  getVideo
};

export default defaults;
