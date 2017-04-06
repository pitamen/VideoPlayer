import React from 'react';
import VideoListItem from './VideoListItem';


const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return(
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
        />
    ) ;
  });
  return(
    <ul className="list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
