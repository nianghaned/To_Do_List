const inputEl = document.getElementById("ToDoInput");
const buttonEl = document.getElementById("buttonInput");
const listEl = document.getElementById("list");

buttonEl.addEventListener("click", addTask);

function addTask() {
  const inputText = inputEl.value;
  if (inputText === "") return;
  const inputItem = document.createElement("li");
  inputItem.innerText = inputText;

  listEl.appendChild(inputItem);
  inputEl.value = "";
}
