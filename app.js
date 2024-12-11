// Call the storage API to get the stored data
const todos = my.getStorageSync({key:'todos'}).data || [
  { text: 'Learning Javascript', completed: true },
  { text: 'Learning ES2016', completed: true },
  { text: 'Learning Mini Program ', completed: false },
];

App({
// Declare global data
todos,

userInfo: null,

// Declare global method
setTodos(todos) {
  this.todos = todos;
  // Call storage API to store data
  my.setStorageSync({key:'todos', data:todos});
},

getUserInfo() {
  return new Promise((resolve, reject) => {
    if (this.userInfo) resolve(this.userInfo);
    // Call user authorization API to get user info
    my.getAuthCode({
      success: (authcode) => {
        console.info(authcode);

        my.getAuthUserInfo({
          scopes: ['auth_user'],
          success: (res) => {
            this.userInfo = res;
            resolve(this.userInfo);
          },
          fail: () => { 
            reject({});
          },
        });
      },
      fail: () => { 
        reject({});
      },
    });
  });
},
});
