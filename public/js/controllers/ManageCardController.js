app.controller('ManageCardController', function ($scope, $stateParams, FlashCardsFactory, $rootScope) {
  //
  // $scope.getCardById = function () {
  //   console.log("getCardByid....", $stateParams.id);
  // }

  $scope.submittingCard = false;

  $scope.newCard = {
      question: 'What is ANgluasdlkfj?',
      category: 'Angular',
      answers: [
          { text: 'Okay', correct: false },
          { text: 'Never', correct: true },
          { text: 'Fill out the form again', correct: false }
      ]
  };

  $scope.submitEditedCard = function (card) {
    console.log("submitEditedCard...", card, $stateParams);
      $scope.submittingCard = true;
      FlashCardsFactory.editCardByid(card, $stateParams.id).then(function (newCard) {
          // $rootScope.$broadcast('newCardAdded', newCard);
          $scope.submittingCard = false;
          $scope.newCard = {
              question: null,
              category: null,
              answers: [
                  { text: null, correct: false },
                  { text: null, correct: false },
                  { text: null, correct: false }
              ]
          };
      });
  };


  $scope.deleteCard = function () {
    FlashCardsFactory.deleteCard($stateParams.id).then(function() {
      console.log("delete card......");
    })
  }

});
