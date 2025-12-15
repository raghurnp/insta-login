document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();   // page reload à¤°à¥‹à¤•à¤¤à¤¾ à¤¹à¥ˆ
    window.location.href = "loading.html";
  });

});