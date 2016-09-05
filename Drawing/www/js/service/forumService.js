



monApp.service('forumService', function(){
  var ForumManga = [];
  var ForumDivers = [];

  var ForumData = [ForumTuto,ForumManga,ForumDivers];
  this.getDataForum = function(){
    return ForumData;
  }

});
