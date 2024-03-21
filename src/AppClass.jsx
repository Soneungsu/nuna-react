import React, { Component } from "react";

class Box extends Component {
    render() {
        let result;

        if (
            this.props.title === "AI" &&
            this.props.result !== "Tie" &&
            this.props.result !== ""
        ) {
            result = this.props.result === "Win" ? "Lose" : "Win";
        } else {
            result = this.props.result;
        }

        return (
            <div className={`box ${result}`}>
                <h1>{this.props.title}</h1>
                <img
                    className="item-img"
                    src={this.props.item && this.props.item.img}
                    alt=""
                />
                <h2>{result}</h2>
            </div>
        );
    }
}

export default Box;
