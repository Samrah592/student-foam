document.getElementById("regForm").addEventListener("submit", function (e) 
{
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let PhoneNumber = document.getElementById("PhoneNumber").value.trim();
    let message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || PhoneNumber=== "" || message === "" )
       {
      alert("Please fill all fields correctly!");
      return;
    }
  alert("Registration Successful!\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "PhoneNumber: " + PhoneNumber + "\n" +
      "Message: "+ message);
  });