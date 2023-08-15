import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import "../style/home.css";

import { donate, volunteer, partner } from "../res";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>
                {/* <h1 className="txt-ctr">Home Page</h1> */}

                <div>
                    <h1 className="title txt-ctr">
                        Join Us
                    </h1>
                    <div className="join-us flex">
                        <div className="join-div">
                            <div className="join-icon flex">
                                <img src={donate} alt="donate icon" />
                            </div>
                            <h1 className="txt-ctr">Donate</h1>
                        </div>
                        <div className="join-div">
                            <div className="join-icon flex">
                                <img src={volunteer} alt="donate icon" />
                            </div>
                            <h1 className="txt-ctr">Volunteer Us</h1>
                        </div>
                        <div className="join-div">
                            <div className="join-icon flex">
                                <img src={partner} alt="donate icon" />
                            </div>
                            <h1 className="txt-ctr">Partner with us</h1>
                        </div>
                    </div>
                </div>

                <ContactUs />
            </div>
            <Footer />
        </>
    );
}