const route = require('express').Router()
const admin = require('../controllers/admin')

route
  .get('/teacher', admin.getTeacher)
  .post('/register', admin.createTeacher)
  .post('/login', () => {
    res.send('login teacher')
  })
  .delete('/teacher', () => {
    res.send('delete teacher')
  })
  .get('/mapel', (req, res) => {
    res.send('GET MAPEL')
  })
  .post('/mapel', () => {
    res.send('CREATE MAPEL')
  })
  .put('/mapel', () => {
    res.send('UPDATE MAPEL')
  })

module.exports = route