function MyList(name) {
    this.name = name;
    this.list = [];
    this.id = new Date().toString();
}

function Todo(name) {
    this.id = new Date().toString();
    this.name = name;
    this.checked = false;
}

function createCheckBox(checked) {
    const input = document.createElement('INPUT')
    input.type = 'checkbox';
    input.checked = checked;

    return input;
}

window.addEventListener('load', () => {
    const listOfLists = document.getElementById('lists');
    const todoList = document.getElementById('todos');
    const addTodo = document.getElementById('add-todo');
    const addList = document.getElementById('add-list');
    const todoInput = document.getElementById('todo-input');
    const listInput = document.getElementById('list-input');
    const listHeader = document.getElementById('list-header');

    const deleteContainer = document.getElementsByClassName('delete-container')[0];
    const clearCompletedTasks = deleteContainer.children[0];
    const deleteSelectedList = deleteContainer.children[1];

    let lists = [];
    let currentSelected = null;

    const renderLists = () => {
        const updatedList = lists.map(l => {
            const lI = document.createElement("li")
            lI.textContent = l.name;
            lI.id = l.id;
            return lI;
        })

        listOfLists.innerHTML = null;
        updatedList.forEach(l => {
            l.addEventListener('click', () => {
                const x = lists.find(n => n.id === l.id);
                currentSelected = x;
                listHeader.innerText = x.name;
                renderTodos(x);
            });

            listOfLists.appendChild(l);
        })
    }

    const renderTodos = (selectedList) => {
        todoList.innerHTML = null;
        if (!selectedList) {
            return;
        }
        const todos = selectedList.list.map(x => {
            const list = document.createElement("li")
            list.id = x.id;
            const box = createCheckBox(x.checked)
            box.addEventListener('change', () => {
                const current = lists.find(l => l.id === currentSelected.id);
                const todo = current.list.find(l => l.id === box.parentElement.id);
                todo.checked = !todo.checked;
            });

            list.appendChild(box);
            list.appendChild(document.createTextNode(x.name));
            return list;
        })

        todos.forEach(l => {
            todoList.appendChild(l)
        })
    }

    addTodo.addEventListener('click', () => {
        if (currentSelected == null) return;
        const current = lists.find(l => l.id === currentSelected.id);
        current.list.push(new Todo(todoInput.value));
        todoInput.value = '';
        renderTodos(current);
    })

    addList.addEventListener('click', () => {
        lists.push(new MyList(listInput.value));
        listInput.value = '';
        renderLists()
    })

    //  Deletes all currently checked items
    clearCompletedTasks.addEventListener('click', () => {
        if (currentSelected == null) return;
        const current = lists.find(l => l.id === currentSelected.id);
        current.list = current.list.filter(l => l.checked === false);
        renderTodos(current);
    })

    //  Deletes the currently selected list
    deleteSelectedList.addEventListener('click', () => {
        lists = lists.filter(l => l.id !== currentSelected.id)
        listHeader.innerText = 'Todos'
        currentSelected = null;
        renderLists()
        renderTodos()
    })

})