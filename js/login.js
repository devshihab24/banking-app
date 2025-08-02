document.getElementById("login-btn").addEventListener("click", (event) => {
    event.preventDefault();
  const numberValue = document.getElementById("phone-number").value;
  const pinValue = document.getElementById("pin-number").value;
  if(numberValue === '123456' && pinValue === '1234'){
    window.location.href = 'home/home.html'
  }
  else{
    alert('You entered wrong pin or invalid input!')
  }
  document.getElementById('phone-number').value = '';
  document.getElementById('pin-number').value = ''
});
