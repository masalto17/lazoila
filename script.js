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
    const data = new FormData(form);
    const message = [
      "Hola, quiero recibir informacion sobre La Zoila en Zonda.",
      "",
      `Nombre: ${data.get("nombre")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `Interes: ${data.get("interes")}`,
      `Forma de compra: ${data.get("compra")}`,
      `Anticipo disponible: ${data.get("anticipo")}`,
      `Quiere coordinar visita: ${data.get("visita")}`
    ].join("\n");
    const note = form.querySelector(".form-note");
    window.open(`https://wa.me/5492644182382?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    note.textContent = "Se abrio WhatsApp con la consulta preparada.";
    note.setAttribute("role", "status");
  });
}
