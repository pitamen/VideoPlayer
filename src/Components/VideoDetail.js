import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading....</div>
  }

  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/'+videoId;
  return(

    <div className="video-details">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div><h2>{video.snippet.title}</h2></div>
        <div><h4>{video.snippet.description}</h4></div>
      </div>
    </div>
  );
}

export default VideoDetail;
