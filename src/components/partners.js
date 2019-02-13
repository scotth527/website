import React, { Component } from "react";
import Boats from "../img/partners/boats.jpg";
import Gaisce from "../img/partners/gaisce.png";
import LaunchPotato from "../img/partners/launchpotato.png";
import Razz from "../img/partners/razz.png";
import Tcg from "../img/partners/tcg.png";
import Affinity from "../img/partners/affinity.png";
import Bod from "../img/partners/bod.jpg";
import Coinet from "../img/partners/coinet.jpg";
import Digitel from "../img/partners/digitel.png";
import Overseas from "../img/partners/overseas.png";
import DS9 from "../img/partners/ds9.png";

import Blokchain from "../img/initiatives/blockchaindev.png";
import Blocktech from "../img/initiatives/blocktech.png";
import MiamiPython from "../img/initiatives/miami-python.png";
import Shellhack from "../img/initiatives/shellhack.png";
import Startupweekend from "../img/initiatives/startupweekend.png";
import Wordcamp from "../img/initiatives/wordcamp.png";

import Beacon from "../img/influencers/beacon-council.png";
import Bridges from "../img/influencers/bridgesunite_logo.png";
import CareerScore from "../img/influencers/career-score.png";
import MDC from "../img/influencers/mdc.png";
import MiamiDDA from "../img/influencers/miamidda.png";
import Quotanda from "../img/influencers/quotanda.png";
import Skillsfund from "../img/influencers/skillsfund.png";
import Starthub from "../img/influencers/starthub_logo.png";

class Partners extends Component {
  render() {
    const props = this.props;
    const organizations = {
        Beacon,
        Bridges,
        CareerScore,
        MDC,
        MiamiDDA,
        Quotanda,
        Skillsfund,
        Starthub,
        Affinity,
        Bod,
        Digitel,
        Coinet,
        Overseas,
        Boats,
        Gaisce,
        LaunchPotato,
        Razz,
        Tcg,
        DS9,
        Blokchain,
        Blocktech,
        MiamiPython,
        Shellhack,
        Startupweekend,
        Wordcamp
    };
    
    return (
        <div className="row mt-4">
            <div className="col justify-content-center mx-auto d-flex flex-wrap">
                
            {
            props.partner.map((data, key)=>{
                return (
                    <div className="col-xs-6 col-lg-3 ">
                        <div className="mr-5 mb-5" style={{borderRadius:"50%", width:"120px",height:"120px",background:"white no-repeat center",backgroundImage:`url(${organizations[data]})`, backgroundSize:"contain"}}  />
                    </div>
                );
            })
                
                
            }
            </div>
        </div>
            
        
    );
  }
}

export default Partners;