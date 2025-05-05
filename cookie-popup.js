document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAccepted")) {
    fetch("cookie-popup.html")
      .then((response) => response.text())
      .then((html) => {
        document.body.insertAdjacentHTML("beforeend", html);
        document.getElementById("accept-cookies").onclick = () => {
          localStorage.setItem("cookiesAccepted", "true");
          document.getElementById("cookie-popup").remove();
        };
      });
  }
});
