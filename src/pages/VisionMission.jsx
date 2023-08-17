import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../style/about.css";

import { visionMission } from "../res";

import React from 'react'

const VisionMission = () => {
    return (
        <div>
            <Navbar />

            <div className="vision-mission section">
                <div>
                    <h1 className="title txt-ctr">Our Vision</h1>
                    <div className="paragraph txt-ctr">
                        A world where women and children can realise their potential and drive positive change in their communities.
                    </div>
                </div>

                <img className="vision-img" src={visionMission} alt="vision mission image" />

                <div>
                    <h1 className="title txt-ctr">Our Mission</h1>
                    <div className="paragraph txt-ctr">
                        We work for sustainable change in women and children from marginalised communities by providing them with enrichment education, special education, life skills and access to vocational opportunities.
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default VisionMission
