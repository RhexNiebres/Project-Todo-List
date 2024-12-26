import "./styles.css"; // Importing CSS
// index.js
import { Todo } from './todo.js';
import { Project } from './project.js';
import { saveToLocalStorage, loadFromLocalStorage } from './storage.js';

const app = {
    projects: [],
    activeProject: null,

    init() {
        this.loadFromLocalStorage();
        this.renderProjects();
        this.setupEventListeners();
    },

    setupEventListeners() {
        document.getElementById("add-project").addEventListener("click", () => {
            const projectName = prompt("Enter Project Name:");
            if (projectName) {
                const newProject = new Project(projectName);
                this.projects.push(newProject);
                this.saveToLocalStorage();
                this.renderProjects();
            }
        });

        document.getElementById("add-todo").addEventListener("click", () => {
            if (!this.activeProject) {
                alert("Select a project first!");
                return;
            }
            const title = prompt("Enter Todo Title:");
            if (title) {
                const dueDate = prompt("Enter Due Date (YYYY-MM-DD):");
                const todo = new Todo(title, "", dueDate);
                this.activeProject.addTodo(todo);
                this.saveToLocalStorage();
                this.renderTodos();
            }
        });
    },

    renderProjects() {
        const projectList = document.getElementById("project-list");
        projectList.innerHTML = '';

        this.projects.forEach((project, index) => {
            const li = document.createElement("li");
            li.innerText = project.name;
            li.onclick = () => {
                this.activeProject = project;
                this.renderTodos();
            };
            projectList.appendChild(li);
        });
    },

    renderTodos() {
        const todoList = document.getElementById("todo-list");
        todoList.innerHTML = '';

        if (!this.activeProject) return;

        this.activeProject.todos.forEach(todo => {
            const li = document.createElement("li");
            li.innerText = todo.title + " (Due: " + todo.dueDate.toDateString() + ")";
            li.className = todo.isComplete ? 'completed' : '';
            li.onclick = () => {
                todo.toggleCompletion();
                this.saveToLocalStorage();
                this.renderTodos();
            };
            todoList.appendChild(li);
        });
    },

    saveToLocalStorage() {
        saveToLocalStorage(this.projects);
    },

    loadFromLocalStorage() {
        const data = loadFromLocalStorage();
        if (data) {
            this.projects = data.map(p => {
                const project = new Project(p.name);
                p.todos.forEach(t => {
                    const todo = new Todo(t.title, t.description, t.dueDate, t.priority, t.notes, t.checklist);
                    todo.isComplete = t.isComplete;
                    project.addTodo(todo);
                });
                return project;
            });
        }
    }
};

document.addEventListener("DOMContentLoaded", () => app.init());