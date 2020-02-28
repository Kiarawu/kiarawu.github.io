const db = require('../config/db.js')

const role = {
  
    createRole (role, cb) {
      db.query('INSERT INTO role SET ?', role , err => {
        if (err) throw err
        cb()
      })
    },
    updateRole (updates,id, cb) {
      db.query('UPDATE role SET ? WHERE ?', [updates, { id }], err => {
        if (err) throw err
        cb()
      })
    },
    deleteRole (id, cb) {
      db.query('DELETE FROM role WHERE ?', { id }, err => {
        if (err) throw err
        cb()
      })
    }
  }
  
  module.exports = role