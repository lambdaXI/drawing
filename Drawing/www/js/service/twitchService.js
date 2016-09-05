monApp.factory('twitchService', function($http, $q, $timeout){

  var dataTwitch = { // les attribues des objets n ont pas de = mais des : ce ne sont pas des valeurs mais des attribues
    factory : false,
    getdata : function(){
      var promesse = $q.defer(); // promise
        $http.get('https://api.twitch.tv/kraken/streams/kami_berserk').success(function(response, status) {// au cas ou sa rafraichie pas les donnee il faudra mettre sa dans le controller comme ddans lexo carnet
          dataTwitch.factory = response;
          promesse.resolve(response);// jassigne ma var deffered en cas de success
        }).error(function(response, status){
          promesse.reject('erreur de chargement json');
        })

      return promesse.promise;
    }
  }
  return dataTwitch;
});
