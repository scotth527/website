import React, { Component } from "react";

class FormSubscribe extends Component {
  render() {
    return (
      <div className="row ml-auto full-width form-subscribe-4geeks">
        <div className="col-12 pl-0">
          <h2 className="pl-0 title-subscribe col-12">Subscribe to our Newsletter!</h2>
          <p>Get updates right in your inbox. We promise to not spam you.</p>
          <form className="form-subscribe">
            <div className="section">
              <input
                type="email"
                className="input-form-pdf"
                aria-describedby="emailHelp"
                placeholder="example@email.com"
              />
              <label>Your email</label>
            </div>
            <button type="submit" className="btn btn-grey">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormSubscribe;
