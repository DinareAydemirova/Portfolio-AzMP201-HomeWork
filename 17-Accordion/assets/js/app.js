let acc = document.querySelectorAll(".accordion");

acc.forEach(function (e) {
  e.addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let iconPlus = this.querySelector(".fa-plus");
    let iconMinus = this.querySelector(".fa-minus");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      iconPlus.classList.remove("d-none");
      iconMinus.classList.add("d-none");
    } else {
      panel.style.display = "block";
      iconPlus.classList.add("d-none");
      iconMinus.classList.remove("d-none");
    }
  });
});
