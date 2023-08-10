import todoArray from './index.js';
import { addItemToProject} from './index.js';

const todoButton = document.getElementById("addTodoButton");
const cancelBtn = document.getElementById("closeForm");

todoButton.addEventListener("click", openTheForm);     //function should pop up form for todo

cancelBtn.addEventListener("click", closeTheForm);

function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
};
  
function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
};
  




function test() {
    console.log("works");
}