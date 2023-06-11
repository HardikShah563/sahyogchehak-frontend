import React from "react";
// importing res
// - styles
import "../style/index.css";
import "../style/contact.css";
// - icons & images
import contact from "../res/icon-contact-book.png";
import mail from "../res/icon-contact-mail.png";

export default function ContactUs() {
    return (
        <>
            <div className="contact-section">
                <h1 className="contact-heading">Contact Us</h1>
                <div className="contact-flex">
                    <div className="contact-div">
                        <div className="contact-sub-div">
                            <div className="sub-div-img">
                                <img src={mail} alt="contact icon" />
                            </div>
                            <div className="sub-div-info">
                                <li>Contact :<a href="tel:+918419908564">+918419908564</a></li>
                                <li>Email :<a href="mailto:sahyogchehak@gmail.com">sahyogchehak@gmail.com</a></li>
                                
                            </div>
                        </div>

                        <div className="contact-sub-div">
                            <div className="sub-div-img">
                                <img src={contact} alt="contact icon" />
                            </div>
                            <div className="sub-div-info">
                            <li>Registered Address :<a>Triveni, C/11, 5th floor, 66 Walkeshwar road, Mumbai 400 006. Registration No: E-21112 MUM</a></li>
                                <li>Asalpha Center :<a>Gala No 07, (HM Badra &Co) B.M.P. Society, N.S.S Road, Asalpha, Ghatkopar West, Mumbai - 400084.</a></li>
                                <li>Bailbazar Center :<a>Unit No.9, Parmar Industrial Estate, Bail Bazaar, Kale Marg, Kurla West Mumbai No 400070,</a></li>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-div">
                        <form className="form" action="?" method="post">
                            <div className="input-div">
                                <p className="input-label">Enter your Name</p>
                                <input
                                    className="input"
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="input-div">
                                <p className="input-label">Enter your Email Address</p>
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="input-div">
                                <p className="input-label">Leave a message</p>
                                <textarea
                                    className="input"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

// https://img.freepik.com/premium-vector/charity-donation-icon-set_17583-53.jpg?w=2000

// https://thumbs.dreamstime.com/b/charity-icons-set-vector-illustration-graphic-design-72473007.jpg

// https://media.istockphoto.com/id/1062946954/vector/charity-and-donation-icons-line-series.jpg?s=1024x1024&w=is&k=20&c=FSPRNjvkQUvvp-cFqcmA0q9O4wVWmjXqv8XCR71LsuY=