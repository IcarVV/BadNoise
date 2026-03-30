document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".nav-toggle");
    const menu = document.getElementById("navLinks");

    // abrir/fechar menu
    button.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // fechar ao clicar em link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

    // fechar clicando fora
    document.addEventListener("click", (e) => {
        if (!button.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("active");
        }
    });
});

const normalize = (path) =>
  path.replace("index.html", "").replace(/\/$/, "");