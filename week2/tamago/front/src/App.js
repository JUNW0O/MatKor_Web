import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function App() {
  const [num, setNum] = useState(0);
  const [auto, setAuto] = useState(0);
  const egg_image = "/images/egg.png";

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "darkblue",
    "purple",
  ];

  const hitEgg1 = () => {
    axios
      .post(`/api/users/${num1}`, { maxcnt: num })
      .then((res) => {
        if (res.status == 200) {
          setNum1(res.data.cnt);
          if (res.data.fin) {
            window.alert("축하합니다!");
          }
        }
      })
      .catch((err) => {
        if (err.status == 401) {
          console.log(err);
        }
      });
  };

  const egg1Ref = useRef(null);

  useEffect(() => {
    const maxnum = window.prompt("도전할 숫자를 정해주세요!");
    setNum(maxnum);
    const autonum = window.prompt("자동 클릭 횟수를 정할 수 있습니다.");
    setAuto(autonum);
  }, []);

  useEffect(() => {
    setNum1(num);
    setNum2(num);
  }, [num]);

  return (
    <div className="App">
      <div id="big-flex-div">
        <div className="flex-div">
          <div className="count" id="count1">
            {num1}
          </div>
          <img
            src={egg_image}
            alt="egg"
            className="flex-item"
            id="egg1"
            onClick={hitEgg1}
          />
        </div>
        <div className="flex-div">
          <div className="count" id="count2">
            {num2}
          </div>
          <img src={egg_image} alt="egg" className="flex-item" id="egg2" />
        </div>
      </div>
    </div>
  );
}

export default App;
