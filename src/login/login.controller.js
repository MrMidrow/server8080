const loginModel = require('./login.model');

class UserController {

  valid = async(req, res) => {
    const { email, password } = req.body;
    const user = await loginModel.findUser(email, password);
    res.json(user);
  }

}

module.exports = new UserController();