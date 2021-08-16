import { useParams } from "react-router-dom";
import React ,{useEffect, useState}  from 'react'
import axios from "axios";
import '../components/Watch.css'
import { Link } from "react-router-dom";

export default function Watch() {
    const [state, setstate] = useState({})
    const [loading, setLoading] = useState(true);

    let {id}=useParams() 
    useEffect(() => {
       axios
         .get(
           `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=AIzaSyCcMbGYhsuXkoMRaHwTafRid8TTPyTR1I0&id=${id}`
         )
         .then((res) => {
             const item =res.data.items[0]
           setstate({title:item.snippet.title, views:item.statistics.viewCount, description:item.snippet.description, channel:item.snippet.channelTitle, likes:item.statistics.likeCount, url:item.id})
           setLoading(false)
         })
         .catch((err) => {
           console.log(err);
         });
    }, [id])
    if (loading) {
      return <h1 style={{ paddingTop: "5rem" , color:'#ffff'}}>loading......</h1>;
    }
    return (
      <div style={{ paddingTop: "5rem" }}>
        <div className="watch-area">
          <div className="player">
            <iframe
              className="embed-responsive-item Video"
              src={`https://www.youtube.com/embed/${state.url}`}
              allowFullScreen
              frameBorder="0"
              allow="autoplay encrypted-media"
              title={state.title}
            />
          </div>
          <h1>{state.title}</h1>
          <div className="video-info">
            <div className="video-stats">
              <div className="views">{state.views} Views</div>
              <div className="likes">{state.likes} Likes</div>
            </div>
          </div>
          <div className="channel-name">{state.channel}</div>
          <p>{state.description}</p>
          <Link to="/">
            <div>Go Back</div>
          </Link>
        </div>
      </div>
    );
}
