import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function Homepage({
  randomVideos,
  searchedVideos,
  input,
  grabVideo,
  invalid,
  apiError
}) {

  const listItems = (video, id) => {
    return (
      <li key={id}>
        <Link to={`/video/${id}`}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            onClick={() => grabVideo()}
          />
          <br />
          <p className="title">{video.snippet.title}</p>
        </Link>
        <p className="channel">{video.snippet.channelTitle}</p>
      </li>
    );
  };

  const randVids = randomVideos.map((video) => {
    let id = video.id;
    return listItems(video, id);
  });

  const searchedResults = searchedVideos.map((video) => {
    let id = video.id.videoId;
    return listItems(video, id);
  });

  const homePage = searchedVideos.length !== 0 ? (
    <>
      {invalid ? (<h3 className="error">Invalid search. Please try again.</h3>) : null}
      <div className="home">
        <h2>Search results for: {input}</h2>
        <hr />
        <ul className="displayed-vids">{searchedResults}</ul>
      </div>
    </>
  ) : (
    <>
      {invalid ? (<h3 className="error">Invalid search. Please try again.</h3>) : null}
      <div className="home">
        <h1>Recommended</h1>
        <hr />
        <ul className="displayed-vids">{randVids}</ul>
      </div>
    </>
  );

  return apiError ? <h1 className="error">Looks like we've hit a snag. Refresh or come back later.</h1> : homePage
}

export default Homepage;
