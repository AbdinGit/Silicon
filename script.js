document.addEventListener("DOMContentLoaded", function() {
  var questions = document.querySelectorAll('.questions');

  questions.forEach(function(question) {
      var moreElement = question.querySelector('.more');
      var iconElement = moreElement.querySelector('i');

      moreElement.addEventListener('click', function() {
          questions.forEach(function(q) {
              if (q !== question) {
                  q.classList.remove('expanded');
                  q.querySelector('i').classList.remove('fa-chevron-up');
                  q.querySelector('i').classList.add('fa-chevron-down');
              }
          });

          question.classList.toggle('expanded');
          iconElement.classList.toggle('fa-chevron-down');
          iconElement.classList.toggle('fa-chevron-up');
      });
  });

  var returnHomeButton = document.getElementById("error-btn-return-home");
  returnHomeButton.addEventListener("click", function() {
      window.location.href = "home.html";
  });
  
  var returnHomeButton = document.getElementById("appointmentbtn");
  returnHomeButton.addEventListener("click", function() {
      window.location.href = "home.html";
  });
});