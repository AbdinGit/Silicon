document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = new FormData(this);

  // Convert formData to JSON
  const jsonData = {};
  formData.forEach((value, key) => {
      jsonData[key] = value;
  });

  // Send data to API
  fetch("https://kyhnet23-assignment.azurewebsites.net/api/book-appointment", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
  })
  .then(response => {
      if (response.ok) {
          alert("Appointment booked successfully!");
      } else {
          response.json().then(data => {
              console.error("Error:", data.message);
              alert("Failed to book appointment: " + data.message);
          });
      }
  })
  .catch(error => {
      console.error("Error:", error);
      alert("Failed to book appointment. Please try again later.");
  });
});