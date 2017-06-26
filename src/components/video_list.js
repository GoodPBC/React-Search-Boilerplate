import React from 'react';
import VideoListItem from '.video_list_item'

const VideoList = (props) => {
  return(

  <ul  className="collection">
    {props.videos.map}
  </ul>
  )
}

export default VideoList;
