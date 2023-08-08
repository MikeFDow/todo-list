import css from "./style.css";

import "./dom.js";

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
    const item = new TodoItem(
        "todo placeholder",
    );
    console.log(item);
    todoArray.push(item);
}

export {addItemToProject};



// createNewProject();
// addItemToProject();

