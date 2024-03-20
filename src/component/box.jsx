import React from "react";

const Box = (props) => {
    let result;

    if (props.title === "AI" && props.result !== "Tie" && props.result !== "") {
        result = props.result === "Win" ? "Lose" : "Win";
    } else {
        result = props.result;
    }

    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <img
                className="item-img"
                src={props.item && props.item.img}
                alt=""
            />
            <h2>{result}</h2>
        </div>
    );
};

export default Box;
