// Get global app instance
const app = getApp();

Page({
  data: {},
  onLoad() {
    // Get user information and render
    app.getUserInfo().then(
      user => this.setData({
        user,
      }),
    );
  },
  // Listen to lifecycle
  onShow() {
    // Render global data to current page
    this.setData({
      todos: app.todos
    });
  },
  // Event handler
  onTodoChanged(e) {
    // Modify global data and re-render
    const checkedTodos = e.detail.value;
    app.setTodos(app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    })));
    this.setData({
      todos: app.todos
    });
  },
  // Call page jump API for page jump
  addTodo() {
    my.navigateTo({
      url: '../add-todo/add-todo'
    });
  },
});