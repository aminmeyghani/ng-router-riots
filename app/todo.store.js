// TodoStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of todo items.

function TodoStore() {
  var store = riot.observable(this); // event emitter
  this.todos = [
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: false }
  ];

  this.stuff = [
    { title: 'tt', done: false },
    { title: 'tt', done: false }
  ];

  // this.xlisten = (e, fn) => {
  //   var self = this;
  //   return {
  //     then: function (fn) {
  //       if (fn) {
  //         self.on(e, fn);
  //         self.trigger('todos_changed', self.todos);
  //       } else {
  //         self.on(e, function () { self.trigger('todos_changed', self.todos) });
  //       }
  //     }
  //   };
  // };

  /*
    this.listen('todo_init').then();

    this.listen('todo_add')
        .then( newTodo => { this.todos.push(newTodo); })

    this.listen('todo_remove')
        .then(()=>{this.todos.pop(); });
  */

  // this.listen = (e) => (t) => {
  //   var self = this;

  //   var broadcast = () => { self.trigger('todos_changed', self.todos); };

  //   if (typeof t === 'string') {
  //     self.on(e, () => { broadcast(); });
  //   } else if (typeof t === 'function') {
  //     self.on(e, t);
  //     broadcast();
  //   } else {
  //     return undefined;
  //   }
  // };

  this.listen = (e, fn, d, bn) => {
    var self = this;
    var config = {model: d, triggerName: bn ? bn : 'change'};
    var broadcast = () => { self.trigger(config.triggerName, config.model); };
    if (typeof fn === 'function') {
      self.on(e, fn);
      broadcast();
    } else {
      self.on(e, () => { broadcast(); });
    }
  };

  this.listen('todo_init', 'broadcast', this.stuff);
  // this.listen('todo_init', items => {
  //   this.trigger('change', this.stores)
  // });

  this.listen('todo_add', newTodo => {
    this.stuff.push(newTodo);
  });
  this.listen('todo_remove', () => {
    this.stuff.pop();
  });


  // this.listen('todo_init')('broadcast');

  // this.listen('todo_add')(newTodo => {
  //   this.todos.push(newTodo);
  // });

  // this.listen('todo_remove')(newTodo => {
  //   this.todos.pop();
  // });

  // Our store's event handlers / API.
  // This is where we would use AJAX calls to interface with the server.
  // Any number of views can emit actions/events without knowing the specifics of the back-end.
  // This store can easily be swapped for another, while the view components remain untouched.

  // this.listen('todo_add')('todos_changed', newTodo => {
  //   this.todos.push(newTodo);
  // });




    // this.listen('todo_init')
    //     .then(()=>{}).broadcast();

  // this.listen('todo_add', function (newTodo) {
  //   this.todos.push(newTodo);
  // });
  // this.on('todo_add', newTodo => {
  //   this.todos.push(newTodo);
  //   this.trigger('todos_changed', this.todos);
  // });

  // this.on('todo_remove', () => {
  //   this.todos.pop();
  //   this.trigger('todos_changed', this.todos);
  // });

  // this.on('todo_init', () => {
  //   this.trigger('todos_changed', this.todos);
  // });

  return store;
  // The store emits change events to any listening views, so that they may react and redraw themselves.

}

module.exports = new TodoStore;
