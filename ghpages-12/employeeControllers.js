const db = require('../config/db.js')

const employee= {
  
    createEmployee(employee, cb) {
      db.query('INSERT INTO employee SET ?', employee , err => {
        if (err) throw err
        cb()
      })
    },
    updateEmployee (updates,id, cb) {
      db.query('UPDATE employee SET ? WHERE ?', [updates, { id }], err => {
        if (err) throw err
        cb()
      })
    },
    deleteEmployee (id, cb) {
      db.query('DELETE FROM employee WHERE ?', { id }, err => {
        if (err) throw err
        cb()
      })
    }
  }
  
  module.exports = role