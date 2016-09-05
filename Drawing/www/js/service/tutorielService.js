'use strict'; //for speed

var ForumTuto = [
  {
    titre: "Tête",
    description:"cour sur la tête",
    image:["https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/lorem-ipsum1.jpg","https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/lorem-ipsum1.jpg","https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/lorem-ipsum1.jpg","https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/lorem-ipsum1.jpg"]
  },
  {
    titre: "Corp",
  description:"cour sur le corp",
  image:["https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/lorem-ipsum1.jpg","https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/lorem-ipsum1.jpg",]
},
  {
    titre: "perspective",
  description:"cour sur le corp",
  image:["https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/lorem-ipsum1.jpg"]
}
];
monApp.service('tutorielService', function(){


  this.getTutoData = function(){
    return ForumTuto;
  }

});
