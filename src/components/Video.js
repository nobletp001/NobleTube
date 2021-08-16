import React from 'react'
import '../components/Video.css'
import {  Link } from "react-router-dom";

export default function Video({ title, channel, dateAdded, thumbnail, description,id }) {
  return (
    <Link to={`/watch/${id}`} className="link">
      <div className="CardContent">
        <div className="CardImageBody">
          <img className="cardImage" src={thumbnail.url} alt={title} />
        </div>

        <div className="cardBody">
          <div className="cardTitle">{title}</div>
          <div className="cardChannel">{channel}</div>
          <div className="cardDescrip">{description}</div>
          <p className="cardDate">{dateAdded}</p>
        </div>
      </div>
    </Link>
  );

}
