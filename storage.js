import { todoArray, reset } from "./store.js";

const storage_key = "myList";
//Work with storage:
export function syncStorage() {
  const newList = JSON.stringify(todoArray);
  localStorage.setItem(storage_key, newList);
}

//Work with storage:
export function loadFromStorage() {
  const storageList = JSON.parse(localStorage.getItem(storage_key)) || [];

  reset(storageList); //todoArray = storageList;
}

