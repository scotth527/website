import React, { Component } from "react";

class Facts extends Component {
  render() {
    const props = this.props;
    return (
        
            <div className="col-12 mx-auto pl-0 mt-5 mb-5 d-flex flex-column justify-content-start">
                
            {
                    
                    props.info.map((data, key)=>{
                    console.log(data);
                return (
                   <div className="d-flex col-9 mr-auto border border-left-0 border-right-0" key={key}>
                    <span className="col-6 mt-1 facts">{data.header}</span>
                    <span className="col-6 mt-4 text-light noun"> {data.fact} </span>
                  </div>
                );
            })
                
                
            }
                
                
        </div>
    );
  }
}

export default Facts;