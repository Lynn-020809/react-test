import React from "react";
import "./details.css";

function Details({ name, post_id, timestamp, sex, date_of_birth, date_found, location_found, 
    skin_color, hair_color, hair_length, description}) {
  return (
    <div className="post">
      <div className="post-body">
        <div className="post-header">
            {name}{" "}
          <span className="post-time">
            {timestamp}
          </span>     
        </div>
  
      <div className="post-information">
          <div className="basic-info">
            Basic Information:
            <div className="detail-title">Gender:  
              <span className='detail-info'>{sex}</span></div>

            <div className="detail-title">Date of Birth:  
              <span className='detail-info'>{date_of_birth}</span></div>

            <div className="detail-title">Date Found:  
              <span className='detail-info'>{date_found}</span></div>
            
            <div className="detail-title">Location Found:  
              <span className='detail-info'>{location_found}</span></div>
          </div>
          <div className="features">
            Features:
            <div className="detail-title">Skin Color: 
              <span className='detail-info'>{skin_color}</span></div>
            <div className="detail-title">Hair Color: 
              <span className='detail-info'>{hair_color}</span></div>
            <div className="detail-title">Hair Length: 
              <span className='detail-info'>{hair_length}</span></div>
          </div>
          <div className="description">
            Description: 
            <div className='detail-title'>{description}</div>
          </div>
      </div>
      <div className="post-id">
            post id: {post_id}
      </div>
    </div>
  </div>
  );
}

export default Details;