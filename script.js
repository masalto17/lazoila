const header = document.querySelector(".site-header");
const form = document.querySelector(".lead-form");

function updateHeader() {
  header.classList.toggle("is-solid", window.scrollY > 42);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector(".form-note");
    note.textContent =
      "Consulta registrada en el prototipo. En la version final se conectara a WhatsApp, Google Sheets o CRM.";
    note.setAttribute("role", "status");
  });
}
