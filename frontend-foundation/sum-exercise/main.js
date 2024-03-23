const num1El = document.querySelector("#num1");
const num2El = document.querySelector("#num2");
const addBtnEl = document.querySelector("#addBtn");
const resultField = document.querySelector("#resultField");

let timer;

function debounceHandleAdd() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    handleAdd();
  }, 1000);
}

async function handleAdd() {
  const input1 = Number(num1El.value);
  const input2 = Number(num2El.value);
  const res = await fetch(
    `https://sum-server.100xdevs.com/sum?a=${input1}&b=${input2}`
  );
  const result = await res.text();
  resultField.innerHTML = `<h2>${result}</h2>`;
}
