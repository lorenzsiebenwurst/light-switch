const btn = document.querySelector("button");
const body = document.querySelector("body");
const title = document.querySelector("title");

btn.addEventListener("click", function () {
  btn.classList.toggle("button--borderSwitch");
  body.classList.toggle("body--dark");
  if (title.innerText === "Good Morning") {
    title.innerText = "Good Night";
  } else {
    title.innerText = "Good Morning";
  }
});
