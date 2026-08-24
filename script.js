const GA_MEASUREMENT_ID = "G-XNB5QZJEJ1";

window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() {
  window.dataLayer.push(arguments);
};

const gaScript = document.createElement("script");
gaScript.async = true;
gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(gaScript);

window.gtag("js", new Date());
window.gtag("config", GA_MEASUREMENT_ID);

const header = document.querySelector(".site-header");
const form = document.querySelector(".lead-form");

function updateHeader() {
  if (header) {
    header.classList.toggle("is-solid", window.scrollY > 42);
  }
}

function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("click_whatsapp", {
      link_text: link.textContent.trim(),
      link_url: link.href
    });
  });
});

document.querySelectorAll('a[href*="google.com/maps"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("click_como_llegar", {
      link_text: link.textContent.trim(),
      link_url: link.href
    });
  });
});

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
    trackEvent("lead_form_submit", {
      interes: data.get("interes"),
      forma_compra: data.get("compra"),
      visita: data.get("visita")
    });
    window.open(`https://wa.me/5492644182382?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    note.textContent = "Se abrio WhatsApp con la consulta preparada.";
    note.setAttribute("role", "status");
  });
}
