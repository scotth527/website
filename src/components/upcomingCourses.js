import React, { Component } from "react";

class UpcomingCourses extends Component {
  render() {
    const props = this.props;
    return (
      <div className="col-xs-12 col-7 p-0 d-flex flex-column">
        {
          props.upcoming.map((data, key)=>{
                return (
                    <a className="d-flex justify-content-between mb-5" href="/fullstack" >
                      <div className="d-flex flex-column">
                        <div style={{fontSize:"35px"}}>{data.date}</div>
                        <div>{"Duration: " + data.duration}</div>
                      </div>
                      <div className="d-flex flex-column">
                          <div style={{fontSize:"35px"}}>{data.city}</div>
                          <div>{data.country}</div>
                      </div>
                    </a>
                );
            })
          
        }
        
      </div>
    );
  }
}

export default UpcomingCourses;