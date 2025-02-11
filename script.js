document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Evita el envío del formulario

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessages = document.getElementById("form-messages");

    //Limpiar mensajes anteriores
    formMessages.innerHTML = "";

    //Validaciones de campos requeridos
    if (!name || !email || !subject || !message) {
      formMessages.innerHTML =
        '<p style="color: red;">Por favor, completa todos los campos.</p>';
      return;
    }

    //Validar formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessages.innerHTML =
        '<p style="color: red;">Por favor, ingresa un correo electrónico válido.</p>';
      return;
    }

    //Simular el envío de datos
    formMessages.innerHTML = '<p style="color: green;">Enviando datos...</p>';
    setTimeout(() => {
      formMessages.innerHTML =
        '<p style="color: green;">Formulario enviado con éxito.</p>';
      document.getElementById("contact-form").reset(); //Limpiar el formulario
    }, 2000);
  });


// carrusel
const slides = document.querySelectorAll(".carousel .slide");
const nextButton = document.querySelector(".carousel .next-button");
const prevButton = document.querySelector(".carousel .prev-button");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
      slide.style.opacity = 1;
    } else {
      slide.classList.remove("active");
      slide.style.opacity = 0;
    }
  });
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
