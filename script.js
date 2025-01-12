const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const data = {
    username: username,
    password: password
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
 .then(response => response.json())
 .then(result => {
      if (result.success) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    });
});
