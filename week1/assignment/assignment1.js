let num = prompt("도전할 숫자를 정해주세요!");
num = Number(num);

let auto = prompt("자동 클릭 횟수를 정할 수 있습니다.");
auto = Number(auto);

const count_dom = document.getElementById("count");
const egg_dom = document.getElementById("egg");

count_dom.innerHTML = num;

const hitEgg = () => {
  count_dom.innerHTML = --num;
  if (num == 0) {
    alert("축하합니다!");
    egg_dom.removeEventListener("click", hitEgg);
  }
};

egg_dom.addEventListener("click", hitEgg);

for (let i = 0; i < auto; i++) {
  egg_dom.click();
}
