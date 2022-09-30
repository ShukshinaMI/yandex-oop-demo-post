const config = {
  url: 'http://localhost:3000/tasks',
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = new Api(config);

const todoList = new TodoList('.todolist', (data) => {
  const todoItem = new Todo({
    data,
    delClickHandler: (todo) => {
      api
        .deleteTask(todo.getId())
        .then(() => {
          todo.remove();
        })
        .catch((e) => {
          console.log('Ошибка при удалении', e);
        });
    },
    copyClickHandler: (name) => {
      api
        .createTask({ name })
        .then((res) => {
          todoList.renderItem(res);
        })
        .catch((e) => {
          console.log('Ошибка при копировании', e);
        });
    },
  });

  todoList.addItem(todoItem.getTodo());
});

new TodoListForm('.todolist-form', (name) => {
  api
    .createTask({ name })
    .then((res) => {
      todoList.renderItem(res);
    })
    .catch((e) => {
      console.log('Ошибка при создании', e);
    });
});

api
  .getTasks()
  .then((todos) => {
    todoList.renderItems(todos);
  })
  .catch((err) => {
    console.log('Ошибка при загрузке заданий', err.message);
  });
