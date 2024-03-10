var appointmentBtn = document.getElementById("appointmentbtn");
var textinputs = document.getElementsByClassName("textinput");

appointmentBtn.addEventListener("click", function(){
  for (var i = 0; i < textinputs.length; i++) {
    if (textinputs[i].value.trim() === "") {
      alert("Please fill all fields");
      return;
    }
  }
});