monApp.config(function($stateProvider, $urlRouterProvider) {
  // pour inserer les news base de donnees
  $stateProvider.state('firepush', {
      url: "/firepush",
      templateUrl: "js/pushJsonFirebase/firebasePush.html",
      controller: 'pushFirebaseController'
  })

  $stateProvider.state('home', {
      url: "/home",
      templateUrl: "js/views/home.html",
      controller: 'homeController'
  })
  $stateProvider.state('gallery', {
      url: "/gallery",
      templateUrl: "js/views/gallery.html",
      controller: 'galleryController'
  })
  $stateProvider.state('signup', {
      url: "/signup",
      cache: false,
      templateUrl: "js/views/signup.html",
      controller: 'signupController'
  })
  $stateProvider.state('login', {
      url: "/login",
      cache: false,
      templateUrl: "js/views/login.html",
      controller: 'signupController'
  })
  $stateProvider.state('tuto', {
      url: "/tuto",
      templateUrl: "js/views/tutoriel.html",
      controller: 'tutorielController'
  })
  $stateProvider.state('forum', {
      url: "/forum",
      templateUrl: "js/views/forum.html",
      controller: 'forumController'
  })
  $stateProvider.state('creationforum', {
      url: "/creationforum",
      templateUrl: "js/views/creationForum.html",
      controller: 'creationForumController'
  })
  $stateProvider.state('twitch', {
      url: "/twitch",
      templateUrl: "js/views/twitch.html",
      controller: 'twitchController'
  })
  // $stateProvider.state('test', {
  //     url: "/test",
  //     templateUrl: "js/views/test.html",
  //     controller: 'testController'
  // })
  $urlRouterProvider.otherwise('/home')
});
