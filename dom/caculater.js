const addB = document.querySelector("#add");
const val1 = document.querySelector("#val1");
const val2 = document.querySelector("#val2");
const result = document.querySelector("#result");

addB.addEventListener("click", () => {
  const value1 = +val1.value;
  const value2 = +val2.value;
  const result1 = value1 + value2;
  console.log(result1);
  result.innerHTML = result1;
});
const subB = document.querySelector("#sub");
subB.addEventListener("click", () => {
  const value1 = +val1.value;
  const value2 = +val2.value;
  const result1 = value1 - value2;
  result.innerHTML = result1;
});
const mulB = document.querySelector("#mul");
mulB.addEventListener("click", () => {
  const v1 = +val1.value;
  const v2 = +val2.value;
  const result1 = v1 * v2;
  result.innerHTML = result1;
});
const divB = document.querySelector("#div");
divB.addEventListener("click", () => {
  const v1 = +val1.value;
  const v2 = +val2.value;
  const result1 = v1 / v2;
  result.innerHTML = result1;
});
