'Use Strict';
  $('.loadArea').prepend('<img src="img/loading_bar.gif" class="load"/>');
  $('.loadArea').prepend('<p class="load">Searching...</p>');

  $('.load').hide();
  
  // notValid = function(error) {
  //   if (error.status === 404) {
  //     alert("oops!!!File not found");
  //   } else if (error.status === 500) {
  //     alert('enter another recipe please');
  //   } else {
  //     $scope.searchRecipe();
  //   }
  // }

  // $('#searchButton').click(function(event){
  //     event.preventDefault();
  //     recipeName = parseInt($('#textArea').val());
  //     notValid();

  //   })


