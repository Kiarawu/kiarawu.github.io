const inquirer = require('inquirer')
const {join} = require('path')
const mysql = require('mysql')

const app = inquirer ()
const app = mysql ()

app.use(inquirer.static(join(__dirname, 'public')))
app.use(inquirer.urlencoded({ extended: true }))
app.use(inquirer.json())

app.use(require('./routes'))

app.listen(3000)
