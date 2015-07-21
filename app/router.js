//
//   router
//
export default ngModule => {
  ngModule.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    // $urlRouterProvider.otherwise("/404");
    // $locationProvider.html5Mode(true);

    $stateProvider
    .state('boot', {
      url: "/boot",
      template: require("./boot.html"),
      controller: 'Boot'
    })
    .state('cool', {
      url: "/cool",
      template: require("./cool.html"),
      controller: 'Cool'
    })
  });
};
