import React from "react";
// import card1Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\card1Img.png';
// import card2Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\card2Img.png';
// import card3Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\card3Img.png';


const MainContent = ({ styledata }) => {

    return (
        styledata.map((val) => {
            return (
                <div className="container">
                    <div className={val.cssStyle}>
                        <div className="textContent">
                            <h2>{val.heading}</h2>
                            <p>{val.text}</p>
                        </div>
                        <div className="imgContent">
                            <img src={val.imggroW} alt="Grow together" />
                        </div>
                    </div>
                </div>
            )
        })


        /*{ <div className="inner-container">
            <div className="imgContent">
               <img src={card2Img} alt="Grow together" />
            </div>
            <div className="textContent">
                <h2>Flowing Conversation</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi autem odio, <br />cum rem corporis saepe culpa magni accusantium deserunt perspiciatis velit <br />repellat facilis. Iure ducimus vero veniam magni maxime quibusdam.</p>
            </div>
        </div>

        <div className="inner-container">
            <div className="textContent">
                <h2>Your Users</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi autem odio, <br />cum rem corporis saepe culpa magni accusantium deserunt perspiciatis velit <br />repellat facilis. Iure ducimus vero veniam magni maxime quibusdam.</p>
            </div>
            <div className="imgContent">
               <img src={card3Img} alt="Grow together" />
            </div>
        </div> }*/


        // <div className="container">
        //     <div className="inner-container">
        //         <div className="textContent">
        //             <h2>{h1tag}</h2>
        //             {
        //               para.map((val,index) =>(
        //                 <p key={index}>{val}</p>
        //               ))
        //             }
        //         </div>
        //         <div className="imgContent">
        //            <img src={im} alt="Grow together" />
        //         </div>
        //     </div>
        // </div>
    )
}

export default MainContent;