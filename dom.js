import { todoArray } from "./store.js";
import { toggleStatus, removerAnItem } from "./functionality.js";

const list = document.querySelector(".list");
//typeof list = object
const txt_input = document.querySelector("#todo-txt");
const search_txt = document.querySelector("#search-txt");

function renderItem(todo_item) {
  //create <div class="item">
  const item = document.createElement("div");
  item.classList.add("item");

  //create <input type="checkbox">
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo_item.completed;

  //create <span> item1 </span>
  const span = document.createElement("span");
  span.textContent = todo_item.title;

  //create <button type="submit>Delete</delete>"
  const del_btn = document.createElement("button");
  del_btn.textContent = "Delete";
  del_btn.classList.add("delete_btn");

  item.appendChild(checkbox);
  item.appendChild(span);
  item.appendChild(del_btn);

  list.appendChild(item);
  checkbox.addEventListener("click", () => {
    toggleStatus(todo_item.title);
    console.log("listtoggle", todoArray);
  });

  del_btn.addEventListener("click", () => {
    removerAnItem(todo_item.title);
    // console.log("list", todoArray);
  });
}

function clearTextBox() {
  txt_input.value = "";
}

function renderList() {
  list.innerHTML = "";
  for (let i = 0; i < todoArray.length; i++) {
    let item = todoArray[i];
    renderItem(item);
  }
}

export { renderItem, renderList, clearTextBox, txt_input,search_txt };
