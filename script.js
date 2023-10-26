const btnWhenActive = `<div class="buttons">
<button type="button" class="btn-remove">remove</button>
<button type="button" class="btn-done">done</button>
</div>`;

const input = document.getElementById("input");
const btnAdd = document.getElementById("btn-add");

const tasksDisplay = document.getElementById("tasks-display");
const readdList = document.getElementById("readdList");
const doneList = document.getElementById("doneList");

btnAdd.addEventListener("click", () => {
  if (input.value.trim() === "") {
    input.value = "";
  } else {
    const newLi = document.createElement("li");
    readdList.prepend(newLi);
    newLi.innerHTML = btnWhenActive;
    const newTask = document.createElement("p");
    newTask.innerText = input.value;
    newLi.prepend(newTask);
    input.value = "";
    saveData();
  }
});

readdList.addEventListener("click", function (e) {
  if (e.target.className === "btn-remove") {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.className === "btn-done") {
    e.target.className = "btn-re-add";
    e.target.innerText = "re-add";
    doneList.prepend(e.target.parentElement.parentElement);
    saveData();
  }
});

doneList.addEventListener("click", function (e) {
  if (e.target.className === "btn-remove") {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.className === "btn-re-add") {
    readdList.prepend(e.target.parentElement.parentElement);
    e.target.className = "btn-done";
    e.target.innerText = "Done";
    saveData();
  }
});

function saveData() {
  localStorage.setItem("readdData", readdList.innerHTML);
  localStorage.setItem("doneData", doneList.innerHTML);
}

function showData() {
  readdList.innerHTML = localStorage.getItem("readdData");
  doneList.innerHTML = localStorage.getItem("doneData");
}

showData();
