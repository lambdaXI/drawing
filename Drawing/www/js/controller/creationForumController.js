monApp.controller('creationForumController',function($scope,$ionicLoading, $stateParams, $http, $q,$cordovaCamera, $firebaseObject, $firebaseArray, $ionicModal,forumService){


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

/*---PARTIE APAREIL PHOTO----------*/
  var imageCompteur = 1;// compteur pr le nbr de photo ds le tablo
  $scope.tableauImage = []; //creer un tableau car on veu peut etre garder plusieur images a uploader
  $scope.tokenPath=[];// pour stokker les different chemint des image si il y a plusieurs images
  $scope.takePicture = function() { // FUNCTION PR PRENDRE DES PHOTO
    var options = {
      quality: 75, // Qualité de l'image sauvée, valeur entre 0 et 100
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG, // Format d'encodage : JPEG ou PNG
      targetWidth: 300, // Largeur de l'image en pixel
      targetHeight: 300, // Hauteur de l'image en pixel
      saveToPhotoAlbum: false // Enregistrer l'image dans l'album photo du device
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var aleatoire = tokenGenere();
      var storageRef = firebase.storage().ref();
      var ref = storageRef.child('images/' + aleatoire);
      $scope.tableauImage[imageCompteur] = "data:image/jpeg;base64," + imageData; // tableau sert a afficher sur le post juste pr le preview ne sert pas a etre rentrer dans la database
      $scope.tokenPath[imageCompteur] = aleatoire; // le chemin sera stocker et renvoyer dans lobjet sauvegarde de la database
      imageCompteur++;
      ref.putString(imageData, 'base64').then(function(snapshot) {
      });
    }, function(err) {
      console.log(err);
    });
  };


  //pour charger une image a partir de firbase juste un exemple de code qui marche mit de côté
  var ref2 = storage.refFromURL('gs://newsapp-71af5.appspot.com/images');
  //la ligne au dessus recup le lien de limage de mon serveur
  ref2.getDownloadURL().then(function(url) {//me permet de recuperer lmon image
  $scope.myimage = url;//je linsere dans une scope pr ensuite la foutre dans une balise img
}).catch(function(error) {
  switch (error.code) {
    case 'storage/object_not_found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;


    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});//fin du code chargement d image


$scope.article = "";
$scope.forumpush={};//pr inserer des donne il faut envoyer des objet { } sinn ne marche pas
$scope.posterForum = function(repertoire){//Function boutton pr envoyer un post forum
  var user = firebase.auth().currentUser;// pour recup l info user et comparer si il existe ou pas
  var name, email, photoUrl, uid;

  if (repertoire == undefined) {// si l user na pa choisie la section ou poster son post alors je stop au return false
    $scope.message = "Veuillez choisir une categorie du forum";
    $scope.succes = false;
    $scope.openModal();
    return false;
  }
  else if (user == null) { // si il n ya pas d user je return false avec un modal
    $scope.message = "Veuillez Vous connectez ou creer un compte depuis l'onglet Connectez vous ou s'enregistrer";
    $scope.succes = false;
    $scope.openModal();
    return false;
  }
  else if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
       $scope.forumpush.date = moment().format('LLLL'); // jinsere l'heure actuelle du post
       $scope.forumpush.idUser = uid;
  }

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('post').push().key;//creation de clef pr poster
  //traitement
  var updates = {};// objet pr envoyer a ma base de donnees c est le chmi d acces et logbjet compris

  if ($scope.tableauImage.length > 0) {//je verif si j'ai une image a inserer
    $scope.forumpush.image =  $scope.tokenPath; // jinsere le tablo path d image
    updates[repertoire + '/' + newPostKey] = $scope.forumpush; //tbleau[chemind access serveur] = objet a mettre;
    return firebase.database().ref().update(updates), $scope.message = "Envoyer",$scope.succes = true,
    $scope.openModal(),$scope.forumpush = {},$scope.tokenPath=[],$scope.tableauImage = [];//je push dans ma base firebase//vidage des champs
  }
  else {
    updates[repertoire + '/' + newPostKey] = $scope.forumpush; //tbleau[chemind access serveur] = objet a mettre;
    return firebase.database().ref().update(updates), $scope.message = "Envoyer",$scope.succes = true,  $scope.openModal(),$scope.forumpush = {},$scope.tokenPath=[],$scope.tableauImage = [];//je push dans ma base firebase//vidage des champs
  }



}

/*----------POUR LIRE DATABASE--------------*/
$scope.dataview = function(){
  var jetest;
  var starCountRef = firebase.database().ref('news/');
  starCountRef.on('value', function(snapshot) {
   console.log(snapshot.val());
  });
}

})
