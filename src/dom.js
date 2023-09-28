import {todoArray, projectArray, currentProject, projectDiv} from './index.js';
import { addItemToProject, createNewProject} from './index.js';
import img from './trashIcon.png';

const todoButton = document.getElementById("addTodoButton");
const cancelBtn = document.getElementById("closeForm");
const projectsContainer = document.getElementById("projectsContainer");

todoButton.addEventListener("click", openTheForm);     //opens the popup todo item form

cancelBtn.addEventListener("click", closeTheForm);     //closes the popup todo item form

function openTheForm() {
    if(projectArray.length === 0) {
        alert("Create a project first, to add your todo to!");
    } else {
    document.getElementById("popupForm").style.display = "flex";
    };
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
        const removeTodoBtn = document.createElement('img');

        removeTodoBtn.classList.add('removeTodoBtn');
        removeTodoBtn.setAttribute("src", img);

        title.textContent = item.title;
        description.textContent = item.description;
        dueDate.textContent = item.dueDate;
        priority.textContent = item.priority;
        notes.textContent = item.notes;
        removeTodoBtn.textContent = "Delete";
        removeTodoBtn.onclick = function(e) {
            itemContainer.remove();
            console.log(currentProject);
            let itemTitle = e.target.parentNode.firstChild.textContent;
            console.log(itemTitle);
            console.log(currentProject.items);
            findItem(itemTitle);
        }
        
        itemContainer.appendChild(title);
        itemContainer.appendChild(description);
        itemContainer.appendChild(dueDate);
        itemContainer.appendChild(priority);
        itemContainer.appendChild(notes);
        itemContainer.appendChild(removeTodoBtn);

    //}
};

export {displayTodoItems};



let IDnumber = 0;

function incrementID() {
    IDnumber++;
    return IDnumber;
}

const sidebar = document.getElementById("sidebarId");

function displayProjects(project) {
    while(projectsContainer.lastChild){                            // this removes todoitems when a new project is clicked
        projectsContainer.removeChild(projectsContainer.lastChild);
    }

    const projectBox = document.createElement('div');
    projectBox.classList.add('projectBox');
    projectBox.setAttribute('id', incrementID());

    
    projectBox.addEventListener("click", projectDiv);   //projectDiv is called here

    sidebar.appendChild(projectBox);

    const title = document.createElement('div');
    title.textContent = project.title;
    projectBox.appendChild(title);

    const trashIcon = document.createElement('img');
    trashIcon.setAttribute("src", img);
    trashIcon.classList.add('trashIcon');


    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('deleteProjectBtn');
    // deleteProjectBtn.textContent = "<img src='trash.svg'>";
    deleteProjectBtn.onclick = function() {
        projectBox.remove();
    };
    projectBox.appendChild(deleteProjectBtn);
    deleteProjectBtn.appendChild(trashIcon);

    
};

export {displayProjects};




function displayProjectTodosOnclick() {                    
    while(projectsContainer.lastChild){
    projectsContainer.removeChild(projectsContainer.lastChild);
    }
    for(const item of currentProject.items) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add("itemContainer");
        projectsContainer.appendChild(itemContainer);
        
        const title = document.createElement('div');
        const description = document.createElement('div');
        const dueDate = document.createElement('div');
        const priority = document.createElement('div');
        const notes = document.createElement('div');
        const removeTodoBtn = document.createElement('button');

        title.textContent = item.title;
        description.textContent = item.description;
        dueDate.textContent = item.dueDate;
        priority.textContent = item.priority;
        notes.textContent = item.notes;
        removeTodoBtn.textContent = "Delete";
        removeTodoBtn.onclick = function(e) {
            itemContainer.remove();
            console.log(currentProject);
            let itemTitle = e.target.parentNode.firstChild.textContent;
            console.log(itemTitle);
            console.log(currentProject.items);
            findItem(itemTitle);
        }

        itemContainer.appendChild(title);
        itemContainer.appendChild(description);
        itemContainer.appendChild(dueDate);
        itemContainer.appendChild(priority);
        itemContainer.appendChild(notes);
        itemContainer.appendChild(removeTodoBtn);
    }
}

export {displayProjectTodosOnclick}



function findItem(itemTitle){
    /*
    for(const item of currentProject.items) {
        if(itemTitle == item.title) {
            
        } else {
            console.log("hmmm")
        };
    }
    */
   const indexOfObject = currentProject.items.findIndex(object => {
       return object.title === itemTitle;
   });
   console.log(indexOfObject);
   currentProject.items.splice(indexOfObject, 1);
   console.log(currentProject);
}