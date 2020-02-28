const db = require('../config/db.js')

const department = {
  
    createDepartment (department, cb) {
      db.query('INSERT INTO department SET ?', department , err => {
        if (err) throw err
        cb()
      })
    },
    updateDepartment (updates,id, cb) {
      db.query('UPDATE department SET ? WHERE ?', [updates, { department_id }], err => {
        if (err) throw err
        cb()
      })
    },
    deleteDepartment (id, cb) {
      db.query('DELETE FROM deparmtent WHERE ?', { department_id }, err => {
        if (err) throw err
        cb()
      })
    }
  }
  
  module.exports = department