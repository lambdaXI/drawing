monApp.controller('testController',function($scope,$ionicLoading, $stateParams, $http, $q, twitchService,$ionicSlideBoxDelegate,$cordovaCamera){

  $scope.takePicture2 = function() {
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
    var storageRef = firebase.storage().ref();
    var ref = storageRef.child('images/');
    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.imgURI2 = "data:image/jpeg;base64," + imageData;
      ref.putString(imageData, 'base64').then(function(snapshot) {
        console.log('Uploaded a base64 string!');
      });
    }, function(err) {
      console.log(err);
    });
  };


  //pour charger une image a partir de firbase
  var ref2 = storage.refFromURL('gs://newsapp-71af5.appspot.com/images');
  //la ligne au dessus recup le lien de limage de mon serveur
  ref2.getDownloadURL().then(function(url) {//me permet de recuperer lmon image
    console.log(url);
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
});



})
