import React from 'react'
import '../components/Video.css'
import {  Link } from "react-router-dom";

export default function Video({ title, channel, dateAdded, thumbnail, description,id }) {
  return (
    <Link to={`/watch/${id}`} className="link">
      <div className=" w-75 mx-auto ">
        <div className="card mb-2 rounded-3 shadow CardContent">
          <img
            src={thumbnail.url}
            className=" mg-responsive cardImage"
            alt={title}
          />
          <div className="card-body text-align-center">
            <div className="card-text  fs-2 cardTitle overflow-hidden">
              {title}
            </div>
            <div className="card-text fs-3 text-center cardChannel">
              {channel}
            </div>

            <div className="card-text cardDescrip">{description}</div>

            <p className="card-text cardDate text-end">{dateAdded}</p>
          </div>
        </div>
      </div>
    </Link>
  );

}
