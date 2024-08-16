('submit', function(event) {
    event.preventDefault(); // Form ko normal tareeqe se submit hone se roknay ke liye
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (username && email && password) {
      alert('Sign Up Successful');
      // Aam tor par, yahan data ko server pe bhejna chahiye
      location.href='signin.html'
    } else {
      alert('Sab fields bharain');
    }
  })