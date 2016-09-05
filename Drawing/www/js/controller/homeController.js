monApp.controller('homeController',function($scope,$ionicLoading, $stateParams, $http, $q, newsService, $firebaseObject, $firebaseArray, $ionicModal){

  $scope.homeNews = newsService.getdata().then(function(post){
    console.log(post);
    $scope.homeNews = post;


    //function pr le modal des news
    $ionicModal.fromTemplateUrl('newsModal.html', {
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

    $scope.openNewsModal = function(index){
      $scope.modalNews = $scope.homeNews[index];
      $scope.openModal();
    }

});

})
