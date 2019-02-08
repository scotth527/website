import React, { Component } from "react";

class Story extends Component {
  render() {
    const props = this.props;
    return (
        <div className="ml-auto mt-5 mb-5 text-light">
            <h1>Our story...</h1>
            <p>4Geeks Academy was founded in 2015.  What began as an internal 
            project to train new developers has flourished into a full-time 
            passion.</p>
            <p>Today, 4Geeks is now based in the U.S.  As coding has become an 
            essential part of society, the mission of our Coding Bootcamp is to 
            instill a new framework for Coding Education universally.
            </p>
            <p>4Geeks Academy now offers locations in 3 cities, with 5 campuses, 
            and over 300 graduates.</p>
            <a href="https://www.4geeksacademy.co/4geeks-academy-history/">
              <button type="button" className="btn-red-large">About 4Geeks Academy</button>
            </a>
        </div>
    );
  }
}

export default Story;