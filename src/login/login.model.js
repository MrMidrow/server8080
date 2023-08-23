class UserModel {
  findUser = (email, password) => {
    if(email == 'Admin' && password == 'Admin1'){
      return new Promise((resolve) => {
        resolve({ 
          email,
          password,
          token: 'qasd1dwd12e3fd2dsadqw1d' 
        });
      })
    }
  }
}

module.exports = new UserModel();