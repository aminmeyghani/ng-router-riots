// require('./app.tag');
var riot = require('riot');
var ng = require('angular');

var riotMod = ng.module('ngo-riot', []).factory('riot', function () { return riot });

var appMod = ng.module('myapp', ['ngo-riot', require('angular-ui-router')]);

appMod.controller('Boot', function ($scope, riot) {
  require('./app');
  riot.mount('app');
});

appMod.controller('Cool', function ($scope, riot) {
  console.log("ran");
  require('./cool');
  riot.mount('cool');
});



require('./router')(appMod);

