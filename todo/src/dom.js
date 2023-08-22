import todoArray from './index.js';
import { addItemToProject, createNewProject} from './index.js';

const todoButton = document.getElementById("addTodoButton");
const cancelBtn = document.getElementById("closeForm");
const projectsContainer = document.getElementById("projectsContainer");

todoButton.addEventListener("click", openTheForm);     //opens the popup todo item form

cancelBtn.addEventListener("click", closeTheForm);     //closes the popup todo item form

function openTheForm() {
    document.getElementById("popupForm").style.display = "flex";
};
  
function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
};

export {closeTheForm};

const form = document.getElementById("form");           

const addTodoBtn = document.createElement('button');      // button on form for submitting new todo items
addTodoBtn.textContent = "+";
form.appendChild(addTodoBtn);
addTodoBtn.addEventListener("click", addItemToProject);

const addProjectBtn = document.createElement('button');   // button for submitting project form
const formContainer = document.getElementById("projectFormContainer");
addProjectBtn.textContent = "Create New Project";
addProjectBtn.addEventListener("click", createNewProject);
formContainer.appendChild(addProjectBtn);




function displayTodoItems(item) {
    // for (const item of todoArray) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add("itemContainer");
        projectsContainer.appendChild(itemContainer);
        
        const title = document.createElement('div');
        const description = document.createElement('div');
        const dueDate = document.createElement('div');
        const priority = document.createElement('div');
        const notes = document.createElement('div');

        title.textContent = "Title:" + " " + item.title;
        description.textContent = item.description;
        dueDate.textContent = item.dueDate;
        priority.textContent = item.priority;
        notes.textContent = item.notes;
        itemContainer.appendChild(title);
        itemContainer.appendChild(description);
        itemContainer.appendChild(dueDate);
        itemContainer.appendChild(priority);
        itemContainer.appendChild(notes);

        console.log("working");
    //}
};

export {displayTodoItems};




