import todoArray from './index.js';
import { addItemToProject} from './index.js';

const todoButton = document.getElementById("addTodoButton");

todoButton.addEventListener("click", addItemToProject);




function test() {
    console.log("works");
}