const TEXT_BOX = document.querySelector("#task");
const E_BUTTON = document.querySelector("#liveToastBtn");
const U_LIST = document.querySelector("#list");
const TOAST_TEXT = document.querySelector(".toast-body");
let listArray = JSON.parse(localStorage.getItem("allthings"));

for (let i = 0; i < listArray.length; i++) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  li.textContent = listArray[i];
  span.textContent = "x";
  span.classList.add("close");
  li.appendChild(span);
  U_LIST.appendChild(li);
}

function newElement() {
  if (listArray.includes(TEXT_BOX.value)) {
    TOAST_TEXT.innerHTML = "Listeye aynı elemandan bir daha ekleyemezsiniz!";
    Toasty();
  } else if (TEXT_BOX.value.trim() != "") {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.textContent = TEXT_BOX.value;
    let allItems = JSON.parse(localStorage.getItem("allthings"));
    allItems.push(TEXT_BOX.value);
    localStorage.setItem("allthings", JSON.stringify(allItems));
    span.textContent = "x";
    span.classList.add("close");
    li.appendChild(span);
    U_LIST.appendChild(li);
    TEXT_BOX.value = "";
    TOAST_TEXT.innerHTML = "Listeye eklendi!";
    Toasty();
    setTimeout(function () {
      location.reload();
    }, 1000);
  } else if (TEXT_BOX.value.trim() == "") {
    TOAST_TEXT.innerHTML = "Listeye boş ekleme yapamazsınız!";
    Toasty();
  }
}
var ALL_LI = document.querySelectorAll("li");
var ALL_SPANS = document.querySelectorAll("li > span");

ALL_LI.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("checked")) {
      item.classList.remove("checked");
    } else {
      item.classList.add("checked");
    }
  });
});
ALL_SPANS.forEach((item, index) => {
  item.addEventListener("click", function () {
    U_LIST.removeChild(ALL_LI[index]);
    let listArray = JSON.parse(localStorage.getItem("allthings"));
    let newListArray = listArray.filter((itm) => itm != listArray[index]);
    localStorage.setItem("allthings", JSON.stringify(newListArray));
    location.reload();
  });
});

let option = {
  animation: true,
  delay: 1000,
};
function Toasty() {
  let toastHTMLElement = document.querySelector("#EpicToast");
  let toastElement = new bootstrap.Toast(toastHTMLElement, option);
  toastElement.show();
}
