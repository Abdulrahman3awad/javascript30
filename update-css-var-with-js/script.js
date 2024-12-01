let variables = getComputedStyle(document.body);

let spacingInput = document.querySelector(".content .inputs input#spacing");
let blurInput = document.querySelector(".content .inputs input#blur");
let colorInput = document.querySelector(".content .inputs input#color");

spacingInput.addEventListener("input", (e) => {
  document.documentElement.style.setProperty(
    "--spacing",
    e.target.value + "px"
  );
});
blurInput.addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--blur", e.target.value + "px");
});
colorInput.addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--baseColor", e.target.value);
});
