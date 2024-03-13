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
  });
  function subscribe() {
    var email = document.getElementById("emailInput").value;


    if (email.trim() === "") {
        alert("Please enter your email address.");
        return;
    }


    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }


    const apiUrl = 'https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=' + encodeURIComponent(email);


    const options = {
        method: 'POST', 
        headers: {
            'Accept': '*/*',
        }
    };


    fetch(apiUrl, options)
        .then(response => {

            if (response.ok) {
                alert("Subscription successful!");
            } else {
                alert("Subscription failed. Please try again later.");
            }
        })
        .catch(error => {

            console.error('Error:', error);
            alert("Subscription failed. Please try again later.");
        });
}