const loginModel = require('./login.model');

class UserController {

  validat = async(req, res) => {
    const { name, password } = req.body;
    const user = await loginModel.findUser(name, password);
    res.status(200).send(user);
  }

}

module.exports = new UserController();