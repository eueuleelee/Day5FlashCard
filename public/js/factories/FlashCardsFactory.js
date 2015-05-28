app.factory('FlashCardsFactory', function ($http) {

    return {

        getFlashCards: function (category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                return response.data;
            });

        },

        addNewCard: function (card) {
           return $http.post('/cards', card).then(function (response) {
               return response.data;
           });
        },

        editCardByid: function (update, id) {
          console.log("editCardbyid.......",id)
          return $http.put('/' + id + '/edit', update).then(function (response) {
            return response.data;
          });
        },

        deleteCard: function (id) {
          return $http.delete('/' + id + '/delete').then(function (response) {
            return response.data;
          })
        }

    };

});
