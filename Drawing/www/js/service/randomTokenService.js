var allCharater = "azertyuiopqsdfghjklmwxcvbn123456789@èé§?&ù$£§€";

function aleatoire() {
return (Math.floor((45)*Math.random()));
}

function tokenGenere(){
  var token ="";
  for (var i = 0; i < 15; i++) {
      var alea = aleatoire();
      token += allCharater.charAt(alea);
  }
  return token;
}
