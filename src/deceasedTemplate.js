import React from "react";
import "./deceasedTemplate.css";

function DeceasedTemplate(post) {
    return(
        <div className="post">
            <div className="post-body">
                <div className="subtitle">
                    {post.name}{' '}
                    <span className="timestamp">{post.timestamp}</span>
                </div>
                <div>
                    <div className="record-info">
                        Gender: 
                        <span className="basic-detail">{post.sex}</span>
                    </div>
                    <div className="record-info">
                        Date of Birth: 
                        <span className="basic-detail">{post.date_of_birth}</span> 
                    </div>
                    <div className="record-info">
                        Date Found:
                        <span className="basic-detail">{post.date_found}</span>
                    </div>
                    <div className="record-info">
                        Location Found:
                        <span className="basic-detail">{post.location_found}</span>
                    </div>
                </div>
               
            </div>

            <div className="post-id">
                {post.post_id}
            </div>
        </div>
        )
}

export default DeceasedTemplate;