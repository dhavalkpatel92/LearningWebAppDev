var app = angular.module('comment_sys', []);

app.controller('comment_sysCtrl', function($scope) {
    $scope.comment_input = '';
  $scope.comments = [
    'This is the first comment!', 
    'Heres the second one!',
    'And this is one more.',
    'Here is another one!'
  ];

  $scope.addCommentFromInputBox = function(e) {
        if($scope.comment_input==null)
        {
            alert('cant null');
        }
        else
        {
            $scope.comments.push($scope.comment_input);
        }
  };
});