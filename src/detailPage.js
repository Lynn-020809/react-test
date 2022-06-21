import React, { useState } from "react";
import "./detailPage.css";
import Details from "./details.js";


function Feed() {
  const post = {
  name: "Apple",
  post_id: "#000001",
  timestamp: "3 days ago",
  sex: "Male",
  date_of_birth: "1972/05/05",
  date_found: "2022/05/28",
  location_found: "Solokhi",
  skin_color: "Light",
  hair_color: "Black",
  hair_length: "Long",
  description: "We get it. Learning the meaning of the many words that make up the English language can seem overwhelming. Take away the nerves and make it simple and easy to understand with the use of our sentence maker.YourDictionary strives to make learning as stress-free as possible, no matter what your age or understanding is. And our sentence examples are no different.We understand that sometimes the best way to truly understand a new concept is to see it used in an example. With the help of our useful tool, you can be one step ahead with grasping the complexity and workings of English vocabulary.With an increased understanding of how words can be used, you can make your writing come to life with an arsenal of words of varying difficulties and meanings.Simply type the word into the sentence generator and we’ll do the rest."};


  return (
    <div className="feed">
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