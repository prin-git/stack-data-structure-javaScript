let listContainer = document.getElementById("list");
let stackBtn = document.getElementById("btn");
let removeBtn = document.getElementById("remove");
let inputValue = document.getElementById("item");

let arr = [];

const list = () => {
  let items = [];
  if (arr && arr.length > 0) {
    items = arr.map((i) => `<li> ${i}</li>`).join("");
  }
  listContainer.innerHTML = items;
};
/*  */
const stacking = () => {
  if (inputValue.value && inputValue.value !== "") {
    arr.unshift(inputValue.value);
  }

  listContainer.innerHtml = "";
  list();
  console.log("sw", arr);
};

const remove = () => {
  if (arr && arr.length > 0) {
    arr.shift();
  }

  listContainer.innerHtml = "";
  list();
  console.log("sw", arr);
};

stackBtn.addEventListener("click", stacking);
removeBtn.addEventListener("click", remove);
