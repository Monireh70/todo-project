import { loadFromStorage, syncStorage } from "./storage.js";
import { todoArray } from "./store.js";
import { renderItem, renderList, clearTextBox, txt_input } from "./dom.js";
import { addItem } from "./functionality.js";
import { OnAddItem, onDelSomeItems, onFilter, onSearch } from "./event.js";

const todoAddress = "https://jsonplaceholder.typicode.com/todos";

const save_button = document.querySelector("#save-btn");
const del_some_btn = document.querySelector("#delete-some-btn");
const select_items = document.querySelector(".done_filter");
const search_btn = document.querySelector("#search-btn");

// fetch(todoAddress)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     todoArray = data;
//     data.forEach((item) => {
//       renderItem(item);
//     });
//   });

//Run app
function events() {
  save_button.addEventListener("click", OnAddItem);
  del_some_btn.addEventListener("click", onDelSomeItems);
  search_btn.addEventListener("click", onSearch);
  select_items.addEventListener("change", onFilter);
}

function init() {
  loadFromStorage();
  renderList();
  events();
}

init();
