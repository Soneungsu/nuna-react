import { useState } from "react";
import Box from "./component/box.jsx";
import "./App.css";

const choice = {
    rock: {
        name: "Rock",
        img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
    },
    scissor: {
        name: "Scissor",
        img: "https://img.freepik.com/premium-vector/scissor-isolated-on-white-background-vector-illustration_454461-5617.jpg",
    },
    paper: {
        name: "Paper",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Paper_450x450.jpg",
    },
};
function App() {
    //박스 2개 그리기 (타이틀,사진,결과)
    //가위, 바위, 보 버튼이 있다
    // 버튼을 클릭하면, 클릭한 값이 박스에 보임
    // 컴퓨터는 랜덤하게 아이템 선택이 된다.
    // 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
    // 지면은 빨간색 이기면 초록색 비기면 검정색 (승패 결과에 따라 테투리 색이 변함)
    const [userSelect, setUserSelect] = useState(null);
    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
    };
    return (
        <>
            <div className="main">
                <Box title="You" item={userSelect} />
                {/* <Box title="Computer" /> */}
            </div>
            <div className="btn-items">
                <button onClick={() => play("scissor")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
        </>
    );
}

export default App;
