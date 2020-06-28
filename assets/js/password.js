function TheLogin() {

var password = 'harnish';

if (this.document.login.pass.value == password) {
  top.location.href="index.html";
}
else {
  window.alert("Incorrect password, fuck off.");
  }
}
