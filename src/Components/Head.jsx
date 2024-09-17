import React from "react";
import Image from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\color_logo_transparent.png';
import 'E:\\React_pro1\\web-design\\src\\App.css'
import HomeImg from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\homeImg.png'
// import head1Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\imge1Head.png';
// import head2Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\imge2Head.png';


export default function Head() {
    return (
        <header>
            <div className="header-container">
                <div className="head-con">
                    <img src={Image} alt="Logo" />
                    <button>Try it Free</button>
                </div>
                <div className="inside-contet-outer">
                    <div className="text-div">
                      <h1>Bulid the Community Your Fans Will Love</h1>
                      <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discuss.</p>
                      <button>Get Started for Free</button>
                    </div>
                    <div className="imag-div">
                        <img src={HomeImg} alt="homeImage" />
                        {/* <div className="img-big">
                            <img src={head1Img} alt="box1" />
                        </div>
                        <div className="img-small">
                            <img src={head2Img} alt="box2" />
                        </div> */}
                    </div>
                </div>
            </div>
        </header >

    )
}

