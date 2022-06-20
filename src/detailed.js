import React from 'react';
import {useNavigate} from "react-router-dom";

class PostDetails extends React.Component
{
    constructor(){
        super();
        this.state = {
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
            description: "He has an old black hat."
        }
    }


    render(){
        return (
        <div>
            <div className="post-area">
              <h2 className='detail-header'>{this.state.name}</h2>
              <h6 className='post-info'>{this.state.timestamp}</h6>
              <h6 className='post-info'>{this.state.post_id}</h6>
              <h4 className='detail-info'>Gender: {this.state.sex}</h4>
              <h4 className='detail-info'>Date of Birth: {this.state.date_of_birth}</h4>
              <h4 className='detail-info'>Date Found: {this.state.date_found}</h4>
              <h4 className='detail-info'>Location Found: {this.state.location_found}</h4>
              <h4 className='detail-info'>Skin Color: {this.state.skin_color}</h4>
              <h4 className='detail-info'>Hair Color: {this.state.hair_color}</h4>
              <h4 className='detail-info'>Hair Length: {this.state.hair_length}</h4>
              <h4 className='detail-info'>Description: </h4>
              <h4 className='detail-info'>{this.state.description}</h4>
            </div>
            <button onClick={() => useNavigate(-1)}>Back</button>
        </div>
        )
    }
} export default PostDetails;

