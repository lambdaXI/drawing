monApp.controller('pushFirebaseController',function($scope,$ionicLoading, $stateParams, $http, $q, newsService, $firebaseObject, $firebaseArray, $ionicModal){
moment.locale('fr');

//FUNCTION pour ecrire dans firebase
function writeUserData(objet) {
  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;//creation de clef pr poster
  //traitement
  var updates = {};
  updates['/news/' + newPostKey] = objet; //tbleau[chemind access serveur] = objet a mettre;
  return firebase.database().ref().update(updates);//je push dans ma base firebase
}

//info contenant mes news
$scope.newspush = {};
$scope.newspush.avatar = "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-82630495-image-5120c379b462781a-320.jpeg";
$scope.newspush.titre = "Bienvenu a tous sur mon application";
$scope.newspush.date = moment().format('LLLL');
console.log($scope.newspush.date);
$scope.newspush.image = "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-82630495-image-5120c379b462781a-320.jpeg";
$scope.newspush.paragraphepreview = "Cette application vous permet de me suivre sur votre mobile ou tablette plus facilement";
$scope.newspush.paragraphe = "Cette application vous permet de me suivre sur votre mobile ou tablette plus facilement, je regrouperais aussi mes prochains tuto dans la section cour <br> Sinon vous pouvez me suivre sur mon twitch au lien suivant <br/> <a href='https://www.twitch.tv/kowatsunobreak' class='button icon-right ion-chevron-right button-calm'>Learn More</a>";
$scope.newspush.lien = "https://www.twitch.tv/kowatsunobreak";
$scope.newspush.titrelien = "Vers Mon Twitch";

$scope.ajoutNews = function(){ // function button ajouter news
    writeUserData($scope.newspush);
  }

  //function pr le modal des news
  $ionicModal.fromTemplateUrl('newsModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

})
