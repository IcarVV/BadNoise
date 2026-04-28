document.addEventListener("DOMContentLoaded", () => {
    const button  = document.querySelector(".nav-toggle");
    const menu    = document.getElementById("navLinks");
    const overlay = document.querySelector(".overlay");

    // Abre/fecha o menu e atualiza aria-expanded
    function toggleMenu(force) {
        const isOpen = typeof force === "boolean" ? force : !menu.classList.contains("active");
        menu.classList.toggle("active", isOpen);
        overlay.classList.toggle("active", isOpen);
        button.setAttribute("aria-expanded", isOpen);
    }

    // Botão hamburguer
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Fecha ao clicar em qualquer link do menu
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    // Fecha ao clicar no overlay
    overlay.addEventListener("click", () => toggleMenu(false));

    // Fecha com tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") toggleMenu(false);
    });

    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        toggleMenu(false);
        button.blur(); // remove o foco do botão
    }
    });
});