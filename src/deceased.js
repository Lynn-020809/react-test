import React from "react";
import './App.css';
import {
    Card,
    CardSubtitle,
    CardText,
    CardBody,
  } from "reactstrap";
  

class Deceased extends React.Component
{
    constructor(){
        super();
        this.state = [
            {
                name: "Apple",
                sex: "Male",
                post_id: "#000001",
                timestamp: "9 Jun",
                date_of_birth: "1972/05/05",
                date_found: "2022/05/28",
                location_found: "Solokhi",
            },
            {
                name: "Banana",
                sex: "Male",
                post_id: "#000002",
                timestamp: "12 Jun",
                date_of_birth: "1992/05/19",
                date_found: "2022/06/12",
                location_found: "Solokhi",
            },
            {
                name: "NA",
                sex: "Female",
                post_id: "#000003",
                timestamp: "13 Jun",
                date_of_birth: "NA",
                date_found: "2022/05/28",
                location_found: "Solokhi",
            }
        ];
    }


    render(){
        return (
            this.state.map((post, index) => {
                return(
                <Card key={index}>
                    <CardBody>
                        <div className="post-top">
                            <div className="card-top">
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {post.name}
                                </CardSubtitle>
                            </div>
                            <div className="card-body">
                                <CardText className="basic-info">
                                    Gender: {post.sex}
                                </CardText>
                                <CardText className="basic-info">
                                    Date of Birth: {post.date_of_birth}
                                </CardText>
                                <CardText className="basic-info">
                                    Date Found: {post.date_found}
                                </CardText>
                                <CardText className="basic-info">
                                    Location Found: {post.location_found}
                                </CardText>
                                <CardText>
                                    <small className="text-muted text-bold">
                                        Post id: {post.post_id}
                                    </small>
                                </CardText>
                                <CardText>
                                    <small className="text-muted text-bold">
                                        {post.timestamp}
                                    </small>
                                </CardText>
                            </div>
                        </div>
                    </CardBody>
                </Card>);
            })
        );
    }

} export default Deceased;
