import React from "react";

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
    )
}

export default MainContent;