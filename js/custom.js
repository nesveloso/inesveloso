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
    var birthDate = new Date("2000-11-08");
    var currentDate = new Date();
    
    var age = currentDate.getFullYear() - birthDate.getFullYear() ;

    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())){
    age--;
    }

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
