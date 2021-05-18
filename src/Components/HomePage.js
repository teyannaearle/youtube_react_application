import React from "react";

function Homepage({ randomVideos }) {
  const videos = randomVideos.map((video) => {
    return (
      <li key={video.id}>
        <a href={`https://www.youtube.com/watch?v=${video.id}`}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </a>
        <br />
        {video.snippet.title}
      </li>
    );
  });

  return <div>{videos}</div>;
}

export default Homepage;
