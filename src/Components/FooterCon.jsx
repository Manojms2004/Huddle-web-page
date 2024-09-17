import React from "react";
import logo from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\Object.png';
import location from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\location.png';
import callLogo from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\callLogo.png';
import gmailLogo from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\gmailLogo.png';
import faceLogo from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\facebookLogo.png';
import twitter from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\TwitterLogo.png';
import insta from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\instaLogo.png';

const FooterCon = () => {
    return (
        <>
            <div className="footer-upper-card">
                <div className="inner-card-upper">
                    <h1>Ready To Build Your Community?</h1>
                    <button>Get Started For Free</button>
                </div>
            </div>
            <div className="outerConFoo">
                <div className="inner-of-Foo">
                    <div className="col1">
                        <img id="logoImg" src={logo} alt="logo 2" />
                        <div className="icon">
                            <img src={location} alt="location Img" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit molestiae dolorem dignissimos i am here</p>
                        </div>
                        <div className="icon">
                            <img src={callLogo} alt="call Logo" />
                            <p>+91 8123801263</p>
                        </div>
                        <div className="icon">
                            <img src={gmailLogo} alt="gmail Logo" />
                            <p>msram@gmail.com</p>
                        </div>
                    </div>
                    <div className="col1" id='abc'>
                        <a href="About Us">About Us</a>
                        <a href="What we Do">What we Do</a>
                        <a href="FAQ">FAQ</a>
                    </div>
                    <div className="col1" id='abc'>
                        <a href="Career">Career</a>
                        <a href="Blog">Blog</a>
                        <a href="Contact Us">Contact Us</a>
                    </div>
                    <div className="col1">
                        <div className="icons-div-app">
                            <div className="img-div-logo">
                                <img src={faceLogo} alt="facebook" />
                                <img src={twitter} alt="Twitter" />
                                <img src={insta} alt="Instagram" />
                            </div>
                            <div className="end">
                               <a href="#">@Copyright 2018 Huddle. All rights reserved</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterCon;