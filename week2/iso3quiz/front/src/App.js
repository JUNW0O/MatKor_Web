import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState("");

  const getQuiz = () => {
    axios
      .get("api/users/quiz")
      .then((res) => {
        setCountry(res.data.country);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ISO3 Quiz</h1>
        <p>주어진 나라 이름에 맞는 ISO 국가 코드를 맞혀보세요!</p>
        <p>정답은 항상 세 글자 알파벳입니다.</p>
        <button onClick={getQuiz}>새로운 퀴즈 받기</button>
        {country === "" ? null : (
          <>
            <h4>문제: {country}</h4>
            <form>
              정답: <input type="text" name="answer"></input>
              <button>제출</button>
            </form>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
