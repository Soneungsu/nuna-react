import React from "react";

const Box = (props) => {
    console.log("props", props);
    return (
        <div className="box">
            <h1 className="me">
                {props.title}
                <div className="">
                    <img
                        src={props.item && props.item.img}
                        alt=""
                        className="item-img"
                    />
                </div>
                <h2 className="result">win</h2>
            </h1>
        </div>
    );
};

export default Box;
