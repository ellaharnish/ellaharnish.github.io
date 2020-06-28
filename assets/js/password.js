function TheLogin() {

var password = 'harnish';

if (this.document.login.pass.value == password) {
  top.location.href="home.html";
}
else {
  window.alert("Incorrect password, fuck off.");
  }
}
