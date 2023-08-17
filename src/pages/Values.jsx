import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from 'react'

const Values = () => {
    return (
        <div>
            <Navbar />

            <div className="values">
                <h1 className="title txt-ctr">Values</h1>

                <div className="values-grid">
                    <div className="values-div">
                        <img className="values-img" src="" alt="values image" />
                        <div className="sub-title">Solidarity</div>
                        <div className="paragraph">We are committed to individual and social growth; we share common ground with the diverse communities we work with and are interdependent in realising our vision.</div>
                    </div>
                    <div className="values-div">
                        <img className="values-img" src="" alt="values image" />
                        <div className="sub-title">Integrity</div>
                        <div className="paragraph">We ensure that the trust that is reposed in us by all those whom we work and collaborate with is reflected in our thinking and conduct.</div>
                    </div>
                    <div className="values-div">
                        <img className="values-img" src="" alt="values image" />
                        <div className="sub-title">Learning</div>
                        <div className="paragraph">We believe that lifelong learning is vital for personal as well as organisational growth; we create and seek opportunities to learn.</div>
                    </div>
                    <div className="values-div">
                        <img className="values-img" src="" alt="values image" />
                        <div className="sub-title">Freedom</div>
                        <div className="paragraph">We believe that change takes place when thought, actions and interactions are free, respectful and responsible; we encourage mind space where freedom can flourish.</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Values
