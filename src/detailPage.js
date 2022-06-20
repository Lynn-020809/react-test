import React, { useState } from "react";
import "./detailPage.css";
import Details from "./details.js";


function Feed() {
  const post = {
  name: "Apple",
  post_id: "#000001",
  timestamp: "9 Jun",
  sex: "Male",
  date_of_birth: "1972/05/05",
  date_found: "2022/05/28",
  location_found: "Solokhi",
  skin_color: "Light",
  hair_color: "Black",
  hair_length: "Long",
  description: "He has an old black hat."};


  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Detailed Information</h2>
      </div>
    <Details
        name={post.name}
        post_id={post.post_id}
        timestamp={post.timestamp}
        sex={post.sex}
        date_of_birth={post.date_of_birth}
        date_found={post.date_found}
        location_found={post.location_found}
        skin_color={post.skin_color}
        hair_color={post.hair_color}
        hair_length={post.hair_length}
        description={post.description}
    />
    </div>
  );
}

export default Feed;