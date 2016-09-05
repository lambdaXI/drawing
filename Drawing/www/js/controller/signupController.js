monApp.controller('signupController',function($scope,$ionicLoading, $stateParams, $http, $q, newsService, $firebaseObject, $firebaseArray, $ionicModal,$firebaseAuth){

  /*Function pour modal---------------------------------------------------*/
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

  /*-----------------------------------POUR SENREGISTRER------------------------------*/
    $scope.userParse = {};
    $scope.inscription = function(){
      console.log($scope.userParse);
      firebase.auth().createUserWithEmailAndPassword($scope.userParse.login, $scope.userParse.password).then(function(firebaseUser) {// demande a firebase de creer un compte avec email et password
        console.log(firebaseUser.uid + " created successfully!");
        $scope.succes = true; // affichage du modal en vert
        $scope.message = "vous êtes bien enregistré"; // message du modal interne
        $scope.openModal(); // ouverture du modal
        $scope.userParse = {};// vidage des champ
        }).catch(function(error) {
          console.log('erreur de creation compte');
          console.error("Error: ", error);
          $scope.succes = false;//affichage du modal en rouge
          $scope.message = error.message;//message du modal
          $scope.openModal();//ouverture du modal
        });
    }

    /*-----------------POUR AUTHENTIFICATION-----------------------------*/
    $scope.userlog = {};
    $scope.login = function(){// Function du button login
      console.log($scope.userlog);
      firebase.auth().signInWithEmailAndPassword($scope.userlog.email, $scope.userlog.password).then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        console.log("succes log in!");
        $scope.succes = true; // affichage du modal en vert
        $scope.message = "vous êtes bien connecté"; // message du modal interne
        $scope.openModal(); // ouverture du modal
        $scope.userlog = {};
      }).catch(function(error) {
        console.error("Authentication failed:", error);
        $scope.succes = false;//affichage du modal en rouge
        $scope.message = error.message;//message du modal
        $scope.openModal();//ouverture du modal
      });
    }

    /*---POUR POSTER SUR NEWS-----------*/
    /* IL FAUT ECRIRE LES FUNCTION EN DEHORS DES SCOPES PR QU IL FUNCTIONNE*/
    // function writeUserData() {
    //   firebase.database().ref('news/').set({
    //     test:"je test firebase voir",
    //     test2:"je retest firebase test",
    //   });
    // }
    //
    // $scope.test = function(){ // function bouton pr lancer k'ecriture dans la database de firebase
    //   writeUserData();
    // }


    /*----------POUR LIRE DATABASE--------------*/
    // $scope.dataview = function(){
    //   var jetest;
    //   var starCountRef = firebase.database().ref('news/');
    //   starCountRef.on('value', function(snapshot) {
    //    console.log(snapshot.val());
    //   });
    // }



})
