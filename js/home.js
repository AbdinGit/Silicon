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

    // Make sure email is not empty
    if (email.trim() === "") {
        alert("Please enter your email address.");
        return;
    }

    // Make sure email contains "@"
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Define the URL of the API endpoint
    const apiUrl = 'https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=' + encodeURIComponent(email);

    // Define the options for the Fetch request
    const options = {
        method: 'POST', // specify the HTTP method
        headers: {
            'Accept': '*/*', // specify the 'Accept' header
        }
    };

    // Send POST request
    fetch(apiUrl, options)
        .then(response => {
            // Check if the response is successful (status code 200)
            if (response.ok) {
                alert("Subscription successful!");
            } else {
                alert("Subscription failed. Please try again later.");
            }
        })
        .catch(error => {
            // Log any errors that occur during the Fetch request
            console.error('Error:', error);
            alert("Subscription failed. Please try again later.");
        });
}