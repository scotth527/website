import React, { Component } from "react";

class Technologies extends Component {
  render() {
    const props = this.props;
    return (
      <div className="row justify-content-center full-width tecnologies">
        <div className="col-9">
          <h2>{props.title}</h2>
          <div className="description-technologies">
            <div className="flex-tecnologies">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
