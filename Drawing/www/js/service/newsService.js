monApp.factory('newsService', function($http, $q, $timeout,$http, $firebaseObject, $firebaseArray){

  var dataNews = { // les attribues des objets n ont pas de = mais des : ce ne sont pas des valeurs mais des attribues
    factory : false,
    getdata : function(){
      var promesse = $q.defer(); // promise
        var dataRef = firebase.database().ref('/news/'); // recup du chemin dacces au serveur
        dataRef.on('value', function(snapshot) { // me permet de recuperer mes donnees de firebase
          promesse.resolve(snapshot.val());// jassigne ma var deffered en cas de success snapshot.val() correspond a ma valeur stoker dans le serveur
         dataNews.factory = snapshot.val();
         console.log(dataNews.factory);
       })


       return promesse.promise;
    }
  }
  return dataNews;
});
