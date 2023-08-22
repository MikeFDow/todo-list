import css from "./style.css";
import "./dom.js";
import {closeTheForm, displayTodoItems} from "./dom.js";


let todoArray = [];

let projectArray = [];

export default todoArray;

class Project {

    constructor(title, items = []) {
        this.title = title;
        this.items = items;
        // maybe do a method here, like: this.something = function() { return items on click , or display items}
    }
};

function createNewProject() {
    const project = new Project(
        document.getElementById("projectTitle").value
        // might need [] here
    );
    console.log(project);
    projectArray.push(project);
    console.log(projectArray);
    console.log(projectArray[0]);
}

export {createNewProject};

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
    displayTodoItems(item);

    console.log(todoArray);
}

export {addItemToProject};



// createNewProject();
// addItemToProject();

