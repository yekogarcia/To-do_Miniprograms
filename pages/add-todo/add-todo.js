const app = getApp();

Page({
  data: {
    inputValue: '',
  },
  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  add() {
    console.log("prueba")
    app.todos = app.todos.concat([{
      text: this.data.inputValue,
      compeleted: false,
    }, ]);
    my.navigateBack();
  },
});