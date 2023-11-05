import { clearTextBox, renderItem, renderList, search_txt, txt_input } from "./dom.js";
import { addItem } from "./functionality.js";
import { loadFromStorage, syncStorage } from "./storage.js";
import { reset, todoArray } from "./store.js";

export function OnAddItem() {
  const val = txt_input.value;

  if (val === "") {
    alert("Please Fill the Text Area");
  } else {
    const item = {
      title: val,
      completed: false,
    };
    addItem(item);
    syncStorage();
    renderItem(item);
    clearTextBox();

    //convert a java array to json string :JSON.stringify(arrya) Opp of JSON.pase(string)
    // const myCollection = JSON.stringify(todoArray);

    // consol e.log( typeof todoArray);    ...>object=Array
    // console.log(typeof myCollection);  ....>string
  }
}

export function onDelSomeItems() {
  const delSomeArr = todoArray.filter((item) => {
    if (item.completed === false) return true;
    else return false;
  });
  console.log("delSomeArr", delSomeArr);
 
  reset(delSomeArr) ;

  syncStorage();
  renderList();
}

export function onSearch(){
    const searchArray = todoArray.filter((item) => {
      if (item.title.includes(search_txt.value)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(searchArray);
    reset(searchArray)
    search_txt.value = "";
    renderList();

}

export function onFilter(event){

        if (event.target.value === "All") {
          loadFromStorage();
        } else if (event.target.value === "ToDo") {
          loadFromStorage();
          const tempArray_todo = todoArray.filter((item) => {
            if (item.completed === false) {
              return true;
            } else {
              return false;
            }
          });
          reset(tempArray_todo);
          console.log("todo");
        } else {
          loadFromStorage();
          const tempArray_todo = todoArray.filter((item) => {
            if (item.completed === false) {
              return false;
            } else {
              return true;
            }
          });
          reset(tempArray_todo);
          console.log("done");
        }
        renderList();

}