import React, { Component } from "react";
import "./App.css";
import Box from "./component/box.jsx";

const choice = {
    rock: {
        name: "Rock",
        img: "https://velog.velcdn.com/images/gyultang/post/618ab3a0-cff7-4ffb-aafc-1a6a9acfee74/image.png",
    },
    scissors: {
        name: "Scissors",
        img: "https://velog.velcdn.com/images/gyultang/post/1d0a9b24-1357-403d-8d4a-9355ee9ccd65/image.png",
    },
    paper: {
        name: "Paper",
        img: "https://velog.velcdn.com/images/gyultang/post/0691b6ea-f443-4a0a-ab41-d884031d3b38/image.png",
    },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
        };
    }

    play = (userChoice) => {
        this.setState({ userSelect: choice[userChoice] });

        let computerChoice = this.randomChoice();
        this.setState({ computerSelect: computerChoice });
        this.setState({
            result: this.judgement(choice[userChoice], computerChoice),
        });
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return "Tie";
        } else if (user.name === "Rock") {
            return computer.name === "Scissors" ? "Win" : "Lose";
        } else if (user.name === "Paper") {
            return computer.name === "Rock" ? "Win" : "Lose";
        } else if (user.name === "Scissors") {
            return computer.name === "Paper" ? "Win" : "Lose";
        }
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];

        return choice[final];
    };

    render() {
        const { userSelect, computerSelect, result } = this.state;

        return (
            <div>
                <h1 className="game-name">Rock! Scissors! Paper!</h1>
                <div className="main">
                    <Box title="You" item={userSelect} result={result}></Box>
                    <Box title="AI" item={computerSelect} result={result}></Box>
                </div>
                <div className="btn">
                    <button onClick={() => this.play("scissors")}>✌️</button>
                    <button onClick={() => this.play("rock")}>✊</button>
                    <button onClick={() => this.play("paper")}>🖐️</button>
                </div>
            </div>
        );
    }
}

export default App;
