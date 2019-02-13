import React, { Component } from "react";
import Alejandro from "../img/staffImg/alejandro.png"
import Alex from "../img/staffImg/alex.png"
import Dani from "../img/staffImg/dani.png"
import Marcelo from "../../public/geekstaff/marcelo.png"

class Staff extends Component {
  render() {
    const props = this.props;
    console.log(Alejandro);
    const people = {
        Alejandro,
        Alex,
        Dani,
        Marcelo
    };
    return (
        <div className="row mt-4">
            <div className="col-12 d-flex flex-wrap justify-content-between">
                <div style={{color:"yellow"}} className="mb-4">
                    <h1>The Team</h1>
                    <p style={{color:"yellow", font:"11px"}}>Our team is devoted to deliver a “premium” program experience. In order to be part of our team, each person must have a passion to educate, a passion for coding, and an innate desire to help all of our students develop their skills. At 4Geeks Academy, we thrive on both the power of education and the importance of coding.</p>
                </div>
                
            {
            props.staff.map((data, key)=>{
                return (
                    <div className="col-5 p-0" key={key}>
                        <img style={{borderRadius:"50%"}} src={people[data.image]} />
                        <h2 className="mb-1" style={{color:"#7D7C7D"}}>{data.name}</h2>
                        <p>{data.description}</p>
                    </div>
                );
            })
                
                
            }
            </div>
        </div>
            
        
    );
  }
}

export default Staff;