import React from "react";
import "./details.css";

function Details({ name, post_id, timestamp, sex, date_of_birth, date_found, location_found, 
    skin_color, hair_color, hair_length, description}) {
  return (
    <div className="post">
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {name}{" "}
              <span className="post__headerSpecial">
                {post_id}
              </span>
            </h3>
          </div>
          <div className="post__information">
              <p className='detail-info'>Gender: {sex}</p>
              <p className='detail-info'>Date of Birth: {date_of_birth}</p>
              <p className='detail-info'>Date Found: {date_found}</p>
              <p className='detail-info'>Location Found: {location_found}</p>
              <p className='detail-info'>Skin Color: {skin_color}</p>
              <p className='detail-info'>Hair Color: {hair_color}</p>
              <p className='detail-info'>Hair Length: {hair_length}</p>
          </div>
        </div>
        <div className="post__description">
            <p className='detail-info'>Description: </p>
            <p className='detail-info'>{description}</p>
        </div>
        <div className="post__footer">
          <h5>{timestamp}</h5>
        </div>
      </div>
    </div>
  );
}

export default Details;