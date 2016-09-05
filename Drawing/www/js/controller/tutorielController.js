monApp.controller('tutorielController',function($scope,$ionicLoading, $stateParams, $http, $q, $firebaseObject, $firebaseArray, $ionicModal,$cordovaCamera,tutorielService){

  $scope.tutoData = tutorielService.getTutoData();// recup des donnees

    //function pr le modal des news---------------------------
    $ionicModal.fromTemplateUrl('tutoModal.html', {
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

    $scope.opentutoModal = function(Objet){ /*button function recuper l Objet du cour pr me permettre de retranscrire les cours actuelle*/
      console.log($scope.tutoData);
      $scope.TutoActuelle = Objet.image;
      console.log(Objet);
      console.log(Objet.image);

      console.log($scope.TutoActuelle);
      for (var i = 0; i < $scope.TutoActuelle.length; i++) {
        console.log($scope.TutoActuelle[i]);
        $('#lesson').append("<img class='lesson' src='"+$scope.TutoActuelle[i]+"' />");
      }
      $scope.openModal();
    }



/*STOCKAGE IMAGE SUR FIREBASE*/
// Create a storage reference from our storage service


// Base64 formatted string
// var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
// ref.putString(message, 'base64').then(function(snapshot) {
//   console.log('Uploaded a base64 string!');
// });

})
