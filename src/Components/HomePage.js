import React from "react";
import { useLocation } from "react-router-dom"
import "./HomePage.css";
import GrabLocation from "./GrabLocation"

function Homepage({ randomVideos, searchedVideos, getLocation, input}) {
  const point = useLocation()
  GrabLocation(getLocation, point)

  const listItems = (video, id) => {
    return (
      <li key={id}>
        <a href={`https://www.youtube.com/watch?v=${id}`}>
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
  };

  const randVids = randomVideos.map((video) => {
    let id  = video.id
    return listItems(video, id);
  });

  const searchedResults = searchedVideos.map((video) => {
    let id = video.id.videoId
    return listItems(video, id);
  });

  return searchedVideos.length !== 0 ? (
    <div className="home">
      <h2>Search results for: {input}</h2>
      <hr />
      <ul className="displayed-vids">{searchedResults}</ul>
    </div>
  ) : (
    <div className="home">
      <h1>Recommended</h1>
      <hr />
      <ul className="displayed-vids">{randVids}</ul>
    </div>
  );
}

export default Homepage;
