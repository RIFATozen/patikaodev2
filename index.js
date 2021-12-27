const TEXT_BOX = document.querySelector("#task");
const E_BUTTON = document.querySelector("#liveToastBtn");
const U_LIST = document.querySelector("#list");

E_BUTTON.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = TEXT_BOX.value;
  U_LIST.appendChild(li);
  TEXT_BOX = "";
});
