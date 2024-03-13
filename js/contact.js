fetch('https://kyhnet23-assignment.azurewebsites.net/api/specialists')
    .then(response => response.json())
    .then(data => {
        const specialistDropdown = document.getElementById('specialist');
        data.forEach(specialist => {
            const option = document.createElement('option');
            option.value = specialist.id; 
            option.text = `${specialist.firstName} ${specialist.lastName}`; 
            specialistDropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching specialists:', error));

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault();


  const formData = new FormData(this);


  const jsonData = {};
  formData.forEach((value, key) => {
      jsonData[key] = value;
  });


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