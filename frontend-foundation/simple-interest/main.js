const principalEl = document.querySelector("#principal");
const rateEl = document.querySelector("#rate");
const timeEl = document.querySelector("#time");
const resultField = document.querySelector("#resultField");

async function handleInterest() {
  const principal = principalEl.value;
  const rate = rateEl.value;
  const time = timeEl.value;
  const res = await fetch(
    `https://sum-server.100xdevs.com/interest?principal=${principal}&rate=${rate}&time=${time}`
  );
  const data = await res.json();
  resultField.innerHTML = `
    <h4>Total Amount: Rs. ${data.total}</h4>
    <h4>Interest: Rs. ${data.interest}</h4>

`;
}
