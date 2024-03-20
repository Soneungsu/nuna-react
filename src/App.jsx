import { useState } from "react";
import "./App.css";
import Box from "./component/box.jsx";

//1. 박스 2개(타이틀,사진,결과)
//2. 가위바위보버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
//4. 컴퓨터는 랜덤하게 아이템선택이 된다.
//5. 3-4의결과를 가지고 누가 이겼는지 승패를 따진다.
//6.승패결과에 따라 테두리색이 바뀐다(지면:빨, 비김:검정, 이김:파랑)

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

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState("");

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);

        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        setResult(judgement(choice[userChoice], computerChoice)); //유저가 선택한 값이랑 컴퓨터가 선택한 값을 전달
    };

    const judgement = (user, computer) => {
        console.log("user", user, "computer", computer);

        // user == computer Tie
        // user == rock , computer == scissors user Win
        // user == rock , computer == paper user loser
        // user == scissors ,  computer == paper user Win
        // user == scissors ,  computer == paper user Win
        // user == scissors ,  computer == rock user loser
        // user == paper ,  computer == rock user Win
        // user == paper ,  computer == scissors user loser

        if (user.name == computer.name) {
            return "Tie";
        } else if (user.name == "Rock")
            return computer.name == "Scissors" ? "Win" : "Lose";
        else if (user.name == "Paper")
            return computer.name == "Rock" ? "Win" : "Lose";
        else if (user.name == "Scissors")
            return computer.name == "Paper" ? "Win" : "Lose";
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 배열로 반환한다.
        console.log("랜덤으로나올까?", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];

        return choice[final];
    };

    return (
        <div>
            <h1 className="game-name">Rock! Scissors! Paper!</h1>
            <div className="main">
                <Box title="You" item={userSelect} result={result}></Box>
                <Box title="AI" item={computerSelect} result={result}></Box>
            </div>
            <div className="btn">
                <button onClick={() => play("scissors")}>✌️</button>
                <button onClick={() => play("rock")}>✊</button>
                <button onClick={() => play("paper")}>🖐️</button>
            </div>
        </div>
    );
}

export default App;
