// Function to make API request and print data to console
function callAPI(apiURL) {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Add click event listeners to the buttons
  document.getElementById("button1").addEventListener("click", function() {
    callAPI("https://reqres.in/api/users/1");  
  });
  
  document.getElementById("button2").addEventListener("click", function() {
    callAPI("https://reqres.in/api/users/2"); 
  });
  
  document.getElementById("button3").addEventListener("click", function() {
    callAPI("https://reqres.in/api/users/3"); 
  });
  
  document.getElementById("button4").addEventListener("click", function() {
    callAPI("https://reqres.in/api/users/4"); 
  });
  
  document.getElementById("button5").addEventListener("click", function() {
    callAPI("https://reqres.in/api/users/5"); 
  });
  