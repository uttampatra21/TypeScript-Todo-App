import "./style.css";

interface Todo {
  title: string;
  readonly id?: string;
}

const todos: Todo[] = [];

const todoContainer = document.getElementById(
  "todo-container"
) as HTMLDivElement;

const todoInput = document.querySelector("#todo-input") as HTMLInputElement;

const todoForm = document.getElementById("todo-from") as HTMLFormElement;

todoForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    id: String(Math.random() * 100),
  };

  todos.push(todo);
  todoInput.value = "";
  insertTodo(todos);
};

const insertTodo = (todos: Todo[]) => {
  todoContainer.innerText = "";
  todos.map((items) => {
    todoContainer.innerHTML += genarateTodosItems(items);
  });
};

const genarateTodosItems = (items: any) => {
  return `
              <div class="flex mb-4 items-center">
                <p class="w-full text-grey-darkest">
                  ${items.title}
                </p>
                <button
                id="removeTodo"
                  class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red"
                >
                  Remove
                </button>
              </div>
  `;
};
