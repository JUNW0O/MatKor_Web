let num = prompt("도전할 숫자를 정해주세요!");
num = Number(num);

let auto = prompt("자동 클릭 횟수를 정할 수 있습니다.");
auto = Number(auto);

const count1_dom = document.getElementById("count1");
const count2_dom = document.getElementById("count2");
const egg1_dom = document.getElementById("egg1");
const egg2_dom = document.getElementById("egg2");

count1_dom.innerHTML = num;
count2_dom.innerHTML = num;

let num1 = num;
let num2 = num;

const hitEgg1 = () => {
  count1_dom.innerHTML = --num1;

  if (num1 < (num * 1) / 7) {
    count1_dom.style.color = "purple";
  } else if (num1 < (num * 2) / 7) {
    count1_dom.style.color = "darkblue";
  } else if (num1 < (num * 3) / 7) {
    count1_dom.style.color = "blue";
  } else if (num1 < (num * 4) / 7) {
    count1_dom.style.color = "green";
  } else if (num1 < (num * 5) / 7) {
    count1_dom.style.color = "yellow";
  } else if (num1 < (num * 6) / 7) {
    count1_dom.style.color = "orange";
  }

  if (num1 == 0) {
    alert("축하합니다!");
    egg1_dom.removeEventListener("click", hitEgg1);
  }
};

const hitEgg2 = () => {
  count2_dom.innerHTML = --num2;

  if (num2 < (num * 1) / 7) {
    count2_dom.style.color = "purple";
  } else if (num2 < (num * 2) / 7) {
    count2_dom.style.color = "darkblue";
  } else if (num2 < (num * 3) / 7) {
    count2_dom.style.color = "blue";
  } else if (num2 < (num * 4) / 7) {
    count2_dom.style.color = "green";
  } else if (num2 < (num * 5) / 7) {
    count2_dom.style.color = "yellow";
  } else if (num2 < (num * 6) / 7) {
    count2_dom.style.color = "orange";
  }

  if (num2 == 0) {
    alert("축하합니다!");
    egg2_dom.removeEventListener("click", hitEgg2);
  }
};

egg1_dom.addEventListener("click", hitEgg1);
egg2_dom.addEventListener("click", hitEgg2);

for (let i = 0; i < auto; i++) {
  egg1_dom.click();
  egg2_dom.click();
}
