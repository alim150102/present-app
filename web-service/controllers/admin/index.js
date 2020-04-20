const { User } = require('../../models/index')

class Admin {
  static async getTeacher(req, res) {
    try {
      const user = await User.findAll()
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  static async createTeacher(req, res) {
    const { username, id_number, password } = req.body
    try {
      const isExist = await User.findOne({ where: { id_number } })
      if (isExist) {
        res.status(409).json({ message: 'ID Number already registered' })
      } else {
        const user = await User.create({ username, id_number, password, Roles_id: 2 })
        res.status(201).json(user)
      }
    } catch (error) {
      console.log(error)
    }
  }

  static putTeacher(req, res) {

  }

  static deleteTeacher(req, res) {

  }
}

module.exports = Admin