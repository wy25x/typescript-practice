"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
var logTodo = function (id, title, completed) {
    console.log("\n\t\t\tThe Todo with ID: ".concat(id, " \n\t\t\thas a title: ").concat(title, " \n\t\t\tfinished: ").concat(completed, "\n\t\t\t"));
};
