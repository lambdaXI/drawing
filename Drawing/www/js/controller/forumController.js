monApp.controller('forumController',function($scope,$ionicLoading, $stateParams, $http, $q,$cordovaCamera, $firebaseObject, $firebaseArray, $ionicModal,forumService){

  var starCountRef = firebase.database().ref();//cherche chemin de ma database pr lire les donne DEBUT CHARGEMENT JSON
  starCountRef.on('value', function(snapshot) { //je recup les donne avec snpshot.val()
    $scope.databaseForum = snapshot.val(); // ma database recup sous forme d objet json
   console.log(snapshot.val());

  //  $scope.databaseManga = snapshot.val().manga; // data forum section manga
  //  $scope.databaseDivers = snapshot.val().divers;// data forum section divers
  //  $scope.databaseTutoTete = snapshot.val().tutotete;// data forum section tuto tete
   $scope.databaseTutoCorp = snapshot.val().tutocorp;// data forum section tuto corp
  //  $scope.databaseTutoPerspective = snapshot.val().tutoperspective;// data forum section tuto perspective
  //  console.log(snapshot.val().tutotete);

/*FUNCTION AU CLICK DES FORUM ET SOUS FORUM AFFICHE LES DIVS CORRESPONDENT*/
  $( ".forumclick" ).click(function() {
    if ($(this).next().hasClass("displayOff")) {
      $(this).next().removeClass("displayOff");
    }else {
      $(this).next().addClass("displayOff");
    }

  });
/*FIN FUNCTION CLICK DIVS*/

/*Function pour modal*/
$ionicModal.fromTemplateUrl('message.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalMessage = modal;
  });
  $scope.openModal = function() {
    $scope.modalMessage.show();
  };
  $scope.closeModal = function() {
    $scope.modalMessage.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modalMessage.remove();
  });
  // Execute action on hide modal
  $scope.$on('modalMessage.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modalMessage.removed', function() {
    // Execute action
  });

}); // PARENTHESE MARQUANT FIN DU CHARGEMENT JSON



})
