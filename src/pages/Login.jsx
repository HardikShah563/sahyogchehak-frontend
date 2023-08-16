import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import "../style/form.css";
import { google, fb } from "../res";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        pass: "",
    });

    const [msg, setMsg] = useState("");
    const [icon, setIcon] = useState("");
    const [color, setColor] = useState("");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.email === "" || formData.pass === "") {
            setMsg("Fill the required details");
            setColor("red");
        }
        // else if (true) {}
        // need to add check statements for valid email
        else {
            setMsg("Sign In successful");
            // setIcon(<CheckCircleRoundedIcon />);
            setColor("green");

        }
        // pass the states into db
    }

    return (
        <div>
            <Navbar />

            <div className="bg-bg form-page">
            <form method="post" className="form">
                <h1
                    className="form-heading"
                >
                    Welcome back
                </h1>
                <p className="form-subheading">
                    Please enter your details to sign in
                </p>

                <div className="login-with">
                    <div className="google w">
                        <img
                            className="login-icons"
                            src={google}
                            alt="google icon"
                        />
                    </div>
                    <div className="facebook">
                        <img
                            className="login-icons"
                            src={fb}
                            alt="facebook icon"
                        />
                    </div>
                </div>

                <div className="or-div">
                    <p className="or-line"></p>
                    <p className="or-text">OR</p>
                    <p className="or-line"></p>
                </div>

                {msg && (
                    <div className="msg-box" id={color}>
                        {msg}
                    </div>
                )}

                <div className="input-box">
                    <label htmlFor="email">Enter your Email Address: </label>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="email">Enter your Passowrd: </label>
                    <input
                        className="input"
                        type="password"
                        name="pass"
                        value={formData.pass}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="input-box">
                    <button
                        className="form-btn"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    {/* <button className="form-btn">Sign In</button> */}
                </div>
            </form>
            </div>

            <Footer />
        </div>
    )
}

export default Login