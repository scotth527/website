import React, { Component } from "react";

class Cornerstones extends Component {
    render() {
        const props = this.props;
        return (
            <div className="row">
            <div className="col-6 mx-auto">
                <h1 className="mb-5 mt-5" style={{color:"yellow"}}>Our four cornerstones</h1>
                <div>
                    <h1 className="text-light">Flipped Classroom</h1>
                    <p className="text-light">Theory is delivered through video, animation, images, and
                    infographics. Class time is used to debate, create and build 
                    projects, and mentor over practical exercises. </p>
                </div>
                <div className="text-light">
                    <h1>1:7 Mentorships</h1>
                    <p>An intimate setting provies the opportunity to adapt to
                    each student's particular pace.</p>
                </div>
                <div className="text-light">
                    <h1>1-1 Mentorship</h1>
                    <p>Every student has the opportunity to have regular 
                    conversations with a mentor.</p>
                </div>
                <div className="text-light">
                    <h1>Talent Tree</h1>
                    <p>The syllabus maps out 44 skills; students earn points 
                    towards each skill in a gamified fashion.</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Cornerstones;
