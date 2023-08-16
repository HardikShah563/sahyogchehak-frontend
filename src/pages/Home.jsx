import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import "../style/home.css";

import { useNavigate } from "react-router-dom";
import { donate, volunteer, partner } from "../res";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="section carousel">
                <h1 className="title txt-ctr">CAROUSEL SECTION</h1>
            </div>
            
            <div>
                {/* <h1 className="txt-ctr">Home Page</h1> */}
                <div className="section">
                    <h1 className="title txt-ctr">
                        OUR AREAS OF WORK
                    </h1>

                    <div className="areas-of-work flex">

                        <div 
                            className="areas-div"
                            onClick={() => {navigate("/donate")}}>
                            <div className="areas-img">
                                <img src={""} alt="Empowering Girls Image" />
                            </div>
                            <div className="areas-text">
                                <h1 className="sub-sub-title txt-ctr">Empowering Girls and Women</h1>

                                <p className="paragraph txt-jstf">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum tempora, qui ipsum dignissimos, ab aperiam est quae praesentium maiores amet tempore veniam iusto, consectetur voluptatibus perspiciatis et inventore dolores!
                                </p>
                                
                                <div 
                                    className="learn-more"
                                    onClick={() => {navigate("")}}
                                >Learn More</div>
                            </div>
                        </div>

                        <div 
                            className="areas-div"
                            onClick={() => [navigate("/donate")]}>
                            <div className="areas-img">
                                <img src={""} alt="Disability Intervention Image" />
                            </div>
                            <div className="areas-text">
                                <h1 className="sub-sub-title txt-ctr">Disability Intervention</h1>

                                <p className="paragraph txt-jstf">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum tempora, qui ipsum dignissimos, ab aperiam est quae praesentium maiores amet tempore veniam iusto, consectetur voluptatibus perspiciatis et inventore dolores!
                                </p>
                                
                                <div 
                                    className="learn-more"
                                    onClick={() => {navigate("")}}
                                >Learn More</div>
                            </div>
                        </div>

                        <div 
                            className="areas-div"
                            onClick={() => [navigate("/donate")]}>
                            <div className="areas-img">
                                <img src={""} alt="Enrichment Education Image" />
                            </div>
                            <div className="areas-text">
                                <h1 className="sub-sub-title txt-ctr">Enrichment Education</h1>

                                <p className="paragraph txt-jstf">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum tempora, qui ipsum dignissimos, ab aperiam est quae praesentium maiores amet tempore veniam iusto, consectetur voluptatibus perspiciatis et inventore dolores!
                                </p>
                                
                                <div 
                                    className="learn-more"
                                    onClick={() => {navigate("")}}
                                >Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------- */}

                <div className="section">
                    <h1 className="title txt-ctr">
                        JOIN US
                    </h1>

                    <div className="join-us flex">

                        <div 
                            className="join-div"
                            onClick={() => [navigate("/donate")]}>
                            <div className="join-icon flex">
                                <img src={donate} alt="donate icon" />
                            </div>
                            <h1 className="sub-title txt-ctr">Donate</h1>
                        </div>

                        <div 
                            className="join-div"
                            onClick={() => [navigate("/donate")]}>
                            <div className="join-icon flex">
                                <img src={volunteer} alt="donate icon" />
                            </div>
                            <h1 className="sub-title txt-ctr">Volunteer Us</h1>
                        </div>

                        <div 
                            className="join-div"
                            onClick={() => [navigate("/donate")]}>
                            <div className="join-icon flex">
                                <img src={partner} alt="donate icon" />
                            </div>
                            <h1 className="sub-title txt-ctr">Partner with us</h1>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <ContactUs />
                </div>
            </div>
            <Footer />
        </>
    );
}