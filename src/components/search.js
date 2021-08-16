import React from 'react'
import Video from './Video'
export default function Search({video}) {
    return (
        <div >
            {video.map((vid)=>{
                return (
                  <Video
                    key={vid.id.videoId}
                    title={vid.snippet.title}
                    dateAdded={vid.snippet.publishedAt}
                    channel={vid.snippet.channelTitle}
                    thumbnail={vid.snippet.thumbnails.medium}
                    description={vid.snippet.description}
                    id={vid.id.videoId}
                  />
                );
            })}
        </div>
    )
}
