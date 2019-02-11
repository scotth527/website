import React, { Component } from "react";

class HeaderParagraphs extends Component {
    
  render() {
    const props = this.props;
    return (
        <div className="col-12 p-0 ml-auto mt-5 mb-5 text-light">
            <h1>{props.header}</h1>
            {Object.keys(props.para).map(function(key, index) {
                return <p>{props.para[key]}</p>;
            })}
        </div>
    );
  }
}

export default HeaderParagraphs;