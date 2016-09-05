monApp.controller('twitchController',function($scope,$ionicLoading, $stateParams, $http, $q, twitchService,$firebaseAuth){

  $scope.datatwitch = twitchService.getdata().then(function(post){// chargement trouver
    $scope.datatwitch = post.stream; // jassigne l object stream qui est dans lobjet princaple(donc je recupe pas tt les donnes mais un sous objet) par twitch dans une scope
    console.log(post);

    //Systeme pour savoir si l'user est co ou pas
    if ($scope.datatwitch === null) { // condition si je suis en ligne
      $scope.monStatus = 'OFF Streaming';
    }
    else {// condition si je suis offline
      $scope.monStatus = 'Live Streaming';
    }

    //$scope.datatwitch.viewers // scope pr voir les viewers (bonome)
    //$scope.datatwitch.channel.views // scope pr voir les vu total (oeil)
    //$scope.datatwitch.channel.followers // scope pr voir les followers (coeur)
    //$scope.datatwitch.channel.status // scope pr voir le titre du live

  }, function(msg){// Chargement erroné cas rare erreur dans le service
    alert(msg);
  });//fin chargement erroné

  $scope.logout = function(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
  }

  /*BUTTON POUR SE DECONNECTER DE FIREBASE*/
  // $scope.logout = function(){
  //   firebase.auth().signOut()
  //   .then(function() {console.log('logout succes')}  //cas de succes du log out
  //   , function(error) {console.log('error de log out')}) // cas d'erreur du logout
  // }


})
