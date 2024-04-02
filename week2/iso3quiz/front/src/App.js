import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState("");
  const [answer, setAnswer] = useState("");
  const [disabled, setDisabled] = useState(false);

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

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    console.log(answer);
    axios
      .get("api/users/answer?country=" + country)
      .then((res) => {
        const alpha3 = res.data.alpha3;
        if (alpha3 === answer) {
          window.alert("정답입니다!");
        } else {
          window.alert("오답입니다. 정답은 " + alpha3 + " 입니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setDisabled(false);
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
            <form onSubmit={handleSubmit}>
              정답:{" "}
              <input
                type="text"
                name="answer"
                value={answer}
                onChange={handleChange}></input>
              <button disabled={disabled}>제출</button>
            </form>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
