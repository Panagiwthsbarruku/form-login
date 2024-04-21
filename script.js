document.addEventListener('DOMContentLoaded', function() {
  const googleBtn = document.getElementById('googleBtn');
  const appleBtn = document.getElementById('appleBtn');
  const loginBtn = document.getElementById('loginBtn');
  
  googleBtn.addEventListener('click', function() {
    alert('You clicked Google login button');
    // Εδώ μπορείς να προσθέσεις κώδικα για την παρακολούθηση του χρήστη μέσω Google
    // Π.χ. κλήση σε μια υπηρεσία προσβασιμότητας Google, όπως το Firebase Authentication
  });

  appleBtn.addEventListener('click', function() {
    alert('You clicked Apple login button');
    // Εδώ μπορείς να προσθέσεις κώδικα για την παρακολούθηση του χρήστη μέσω Apple
    // Π.χ. κλήση σε μια υπηρεσία προσβασιμότητας Apple, όπως το Sign in with Apple
  });
  loginBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Αποτρέπει την προεπιλεγμένη συμπεριφορά της φόρμας
  
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
  
    // Εδώ μπορείς να προσθέσεις κώδικα για τον έλεγχο του ονόματος και του κωδικού
  
    if (emailInput === 'admin12' || passwordInput === 'pass4545') {
      alert('Please enter both email and password');
    } else {
      // Εδώ μπορείς να προσθέσεις κώδικα για την προσπέλαση της υπηρεσίας ελέγχου του λογαριασμού
      alert('You entered email: ' + emailInput + ' and password: ' + passwordInput);
    }
  });
});
