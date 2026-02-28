// Navbar burger + petite validation formulaire + année footer

function setupNav() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Fermer le menu quand on clique un lien (mobile)
  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A" && menu.classList.contains("is-open")) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");
  if (!form || !hint) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) {
      hint.textContent = "Veuillez saisir un nom valide.";
      return;
    }
    if (phone.length < 6) {
      hint.textContent = "Veuillez saisir un numéro de téléphone valide.";
      return;
    }
    if (message.length < 10) {
      hint.textContent = "Votre message est trop court (min 10 caractères).";
      return;
    }

    // Site statique: on simule l’envoi
    hint.textContent = "Message prêt à être envoyé (site statique). Merci !";
    form.reset();
  });
}

setupNav();
setupYear();
setupContactForm();