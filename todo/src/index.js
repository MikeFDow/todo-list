import css from "./style.css";
import "./dom.js";
import {closeTheForm, displayTodoItems} from "./dom.js";


let todoArray = [];

export default todoArray;

function createNewProject() {
    let project1 = [];
    console.log(project1); 
    return project1;
}

class TodoItem {

    constructor(title, description, dueDate, priority, notes) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes

    }
};

function addItemToProject() {
    // todoArray.pop();
    const item = new TodoItem(
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value,
        document.getElementById("notes").value
    );

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("notes").value = "";

    closeTheForm();
    

    console.log(item);
    todoArray.push(item);
    displayTodoItems();

    console.log(todoArray);
}

export {addItemToProject};



// createNewProject();
// addItemToProject();

