document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Form ko normal tareeqe se submit hone se roknay ke liye
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (email && password) {
      alert('Sign In Successful');
      // Aam tor par, yahan data ko server pe bhejna chahiye
      location.href ='dashboard.html'
    } else {
      alert('Sab fields bharain');
    }
  });
  