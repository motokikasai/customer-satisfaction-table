let numOfTransaction = 0;
function updater(e) {
  numOfTransaction++;

  const transaction = e.target.parentNode.querySelector(".transaction");
  transaction.innerHTML = numOfTransaction;
  transaction.classList.add("style-transaction");

  let randomNum = Math.floor(Math.random() * 100);
  const randomPer = e.target.parentNode.querySelector(".td-child");
  randomPer.innerHTML = randomNum;
  randomPer.classList.add("style-transaction");

  const smiley = e.target.parentNode.querySelector(".default-smiley");
  // const smiley100 = document.querySelector(".smiley-100");
  // if (randomNum >= 50) {
  if (randomNum >= 80) {
    smiley.classList.remove("smiley-80", "smiley-60", "smiley-40", "smiley-20");
    smiley.classList.add("smiley-100");
  } else if (randomNum < 80 && randomNum >= 60) {
    smiley.classList.remove(
      "smiley-100",
      "smiley-60",
      "smiley-40",
      "smiley-20"
    );
    smiley.classList.add("smiley-80");
  } else if (randomNum < 60 && randomNum >= 40) {
    smiley.classList.remove(
      "smiley-100",
      "smiley-80",
      "smiley-40",
      "smiley-20"
    );
    smiley.classList.add("smiley-60");
  } else if (randomNum < 40 && randomNum >= 20) {
    smiley.classList.remove(
      "smiley-100",
      "smiley-80",
      "smiley-60",
      "smiley-20"
    );
    +smiley.classList.add("smiley-40");
  } else {
    smiley.classList.remove(
      "smiley-100",
      "smiley-80",
      "smiley-60",
      "smiley-40"
    );
    smiley.classList.add("smiley-20");
  }
}

const button = document.querySelectorAll(".button");
button.forEach(item => {
  item.addEventListener("click", updater);
});
