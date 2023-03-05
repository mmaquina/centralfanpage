let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    console.log("click")
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});