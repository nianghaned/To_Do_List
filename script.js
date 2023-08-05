/* Whenever someone types and submit it should be added as an unorder
list to the page.
Listen to click for the button
select the input and bring it into js
save the input into a variable
append what a user inputs into the list */
const inputEl = document.getElementById("ToDoInput");
const buttonEl = document.querySelectorAll("button");
const listEl = document.getElementById("list");

buttonEl.addEventListener("click", addToDo);

function addToDo() {
  const inputText = inputEl.value;
  if (inputText === "") return;
  const inputItem = document.createElement("li");
  toDoItem.innerText = inputText;

  listEl.appendChild(inputItem);
  inputEl.value = "";
}
