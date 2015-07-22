// require("expose?control!./riot.control");
require('./app.css');
var control = require('./riot.control');
var todoStore = require('./todo.store');

control.addStore(todoStore);

require('./todo');
require('./messenger');
require('./widget');
require('./todoapp');

riot.mount('todoapp');
