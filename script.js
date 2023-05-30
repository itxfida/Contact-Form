function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Perform client-side validation
    if (!name || !email || !message) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }
  
    // Here, we'll just display a success message
    showMessage('Form submitted successfully!', 'success');
  
    // Reset the form
    document.getElementById('contactForm').reset();
  }
  
  function showMessage(message, type) {
    var formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = type;
  }
  