import React from "react";
import DeceasedTemplate from "./deceasedTemplate.js";
  

class Deceased extends React.Component
{
    constructor(){
        super();
        this.state = [
            {
                name: "Apple",
                sex: "Male",
                post_id: "#000001",
                timestamp: "3 hours ago",
                date_of_birth: "1972/05/05",
                date_found: "2022/05/28",
                location_found: "Solokhi",
            },
            {
                name: "Banana",
                sex: "Male",
                post_id: "#000002",
                timestamp: "12 hours ago",
                date_of_birth: "1992/05/19",
                date_found: "2022/06/12",
                location_found: "Solokhi",
            },
            {
                name: "Unknown",
                sex: "Female",
                post_id: "#000003",
                timestamp: "1 day ago",
                date_of_birth: "Unknown",
                date_found: "2022/05/28",
                location_found: "Solokhi",
            },
            {
                name: "Unknown",
                sex: "Female",
                post_id: "#000003",
                timestamp: "1 day ago",
                date_of_birth: "Unknown",
                date_found: "2022/05/28",
                location_found: "Solokhi",
            },
            {
                name: "Unknown",
                sex: "Female",
                post_id: "#000003",
                timestamp: "1 day ago",
                date_of_birth: "Unknown",
                date_found: "2022/05/28",
                location_found: "Solokhi",
            },
            {
                name: "Unknown",
                sex: "Female",
                post_id: "#000003",
                timestamp: "1 day ago",
                date_of_birth: "Unknown",
                date_found: "2022/05/28",
                location_found: "Solokhi",
            }
        ];
    }


    render(){
        return (
            this.state.map((post, index) => {
                return(
                    <DeceasedTemplate {...post} key={index} ></DeceasedTemplate>
                );
            })
        )
    }

} export default Deceased;
