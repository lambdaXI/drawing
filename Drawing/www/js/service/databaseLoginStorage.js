monApp.factory('databaseLoginStorage', function($http, $q, $timeout,$http, $firebaseObject, $firebaseArray){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD49QLXkW39t8Di1JfSZCYi2-ShC-ow5sA",
    authDomain: "newsapp-71af5.firebaseapp.com",
    databaseURL: "https://newsapp-71af5.firebaseio.com",
    storageBucket: "newsapp-71af5.appspot.com",
  };
  firebase.initializeApp(config);
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();


});
