const Express = require('express');
const Router = Express.Router();
const ClientClass = require('../../Controllers/client.controller');
const Client = new ClientClass();
const EmployeeClass = require('../../Controllers/employee.controller');
const Employee = new EmployeeClass();

Router
    .route('/clients')
    .post(Client.login);

Router
    .route('/employees')
    .post(Employee.login);

module.exports = Router;