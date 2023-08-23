class UserModel {
  findUser = (user, password) => {
    if(user == 'Admin' && password == '1111'){
      return new Promise((res) => {
        res({ user, password, token: 'qasd1dwd12e3fd2dsadqw1d' });
      })
    }
  }
}

module.exports = new UserModel();