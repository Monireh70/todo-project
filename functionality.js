import { todoArray } from "./store.js";
import { syncStorage } from "./storage.js";
import { renderList } from "./dom.js";

// //Functionality
function toggleStatus(title) {
  for (let i = 0; i < todoArray.length; i++) {
    if (todoArray[i].title === title) {
      // list_item.completed = list_item.completed ? false : true;
      todoArray[i].completed = !todoArray[i].completed;
    }
  }
  console.log("todoarr", todoArray);
  syncStorage();
}

function removerAnItem(title) {
  //find specific item:
  for (let i = 0; i < todoArray.length; i++) {
    //console.log(todoArray[i].title, title)
    if (todoArray[i].title === title) {
      todoArray.splice(i, 1);
    }
  }
  syncStorage();
  renderList();
}

function addItem(item) {
  const nextItem = {
    title: item.title,
    completed: item.completed,
  };
  todoArray.push(nextItem);

  syncStorage();
}

export { removerAnItem, toggleStatus, addItem };
