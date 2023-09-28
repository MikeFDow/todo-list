import css from "./style.css";
import "./dom.js";
import {closeTheForm, displayTodoItems, displayProjects, displayProjectTodosOnclick} from "./dom.js";


let todoArray = [];

let projectArray = [];
export {projectArray};

let currentProject;
export {currentProject};

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
    console.log("project", project);
    projectArray.push(project);

    currentProject = project;
    
    console.log("projectArray:", projectArray);
    //console.log(projectArray[0]);
    console.log("currentProject:", currentProject);

    displayProjects(project);
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
    

    console.log("item:", item);
    currentProject.items.push(item);


    console.log("projectArray:", projectArray);


    displayTodoItems(item);

    //console.log(todoArray);
}

export {addItemToProject};



// createNewProject();
// addItemToProject();

function projectDiv(e) {                 // this function takes the div that was clicked on and passes the object to 
    console.log(e.target.id);             // the displayProjectTodosOnclick function
    if(e.target.id == 1) {
        console.log(projectArray[0]);
        currentProject = projectArray[0];    // this change for currentproject does not work. type error
        console.log("currentProject", currentProject);
    } else if (e.target.id == 2) {
        console.log(projectArray[1]);
        currentProject = projectArray[1];
        console.log("currentProject:", currentProject);
    } else if (e.target.id == 3) {
        console.log(projectArray[2]);
        currentProject = projectArray[2];
        console.log("currentProject:", currentProject);
    } else if (e.target.id == 4) {
        console.log(projectArray[3]);
        currentProject = projectArray[3];
        console.log("currentProject:", currentProject);
    } else if (e.target.id == 5) {
        console.log(projectArray[4]);
        currentProject = projectArray[4];
        console.log("currentProject:", currentProject);
    } else if (e.target.id == 6) {
        console.log(projectArray[5]);
        currentProject = projectArray[5];
        console.log("currentProject:", currentProject);
    }
    displayProjectTodosOnclick();
   
}

export {projectDiv};


function removeTodoItem() {
    
}