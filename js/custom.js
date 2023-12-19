document.addEventListener("DOMContentLoaded", function(){
  function getCurrentYear(){
    var d = new Date();
    var currentYear = d.getFullYear();

    document.getElementById("displayDate").innerHTML = currentYear;
  }

    getCurrentYear();
});



document.addEventListener("DOMContentLoaded", function(){
  function getCurrentAge(){
    var birthDate = moment("2000-11-08");
    var currentDate = moment();
    
    var age = currentDate.diff(birthDate, 'years');

    document.getElementById("displayAge").innerHTML = age;
  }

    getCurrentAge();
});


document.addEventListener("DOMContentLoaded", function(){
  var cards = document.querySelectorAll('.card_home');

  cards.forEach(function(card){

    card.addEventListener('click', function(){
      var cardId = this.id;

      window.location.href = 'projectos.html#' + cardId;
    });
  });
  
});
