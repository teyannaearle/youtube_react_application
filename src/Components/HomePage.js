import React from "react";
import "./HomePage.css";

function Homepage({ randomVideos }) {
  const videos = randomVideos.map((video) => {
    return (
      <li key={video.id}>
        <a href={`https://www.youtube.com/watch?v=${video.id}`}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </a>
        <br />
        <p className="title">{video.snippet.title}</p>
        <p className="channel">{video.snippet.channelTitle}</p>
      </li>
    );
  });

  return (
    <div className="home">
      <h1>Recommended</h1>
      <hr />
      <div className="displayed-vids">{videos}</div>
    </div>
  );
}

export default Homepage;
