document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Elements
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const gender = document.getElementById('gender').value.trim().toLowerCase();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const password = document.getElementById('password').value;

  const messageEl = document.getElementById('message');
  const welcomeEl = document.getElementById('welcome');

  // Clear previous messages
  messageEl.textContent = '';
  welcomeEl.textContent = '';

  // Validation
  if (!name || !email || !phoneNumber || !password) {
    messageEl.textContent = 'All fields are mandatory.';
    return;
  }

  const isAlphaNumericWithSpaces = /^[a-z0-9 ]+$/i.test(name);
  if (!isAlphaNumericWithSpaces) {
    messageEl.textContent = 'Name is not alphanumeric.';
    return;
  }

  if (!email.includes('@')) {
    messageEl.textContent = 'Email must contain @.';
    return;
  }

  if (!['male', 'female', 'other'].includes(gender)) {
    messageEl.textContent = 'Please identify as male, female or others.';
    return;
  }

  if (!/^\d+$/.test(phoneNumber)) {
    messageEl.textContent = 'Phone Number must contain only numbers.';
    return;
  }

  if (password.length < 6) {
    messageEl.textContent = 'Password must contain atleast 6 letters.';
    return;
  }

  // Extract username and greet
  const username = email.split('@')[0];
  welcomeEl.textContent = `Hello ${username}`;
});
