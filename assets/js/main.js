document.addEventListener("DOMContentLoaded", () => {
    const btnPrecios = document.querySelector(".btn-precios");
    const btnSobre = document.querySelector(".sobrenosotros");
    const seccionPrecios = document.querySelector("#precios");
    const seccionSobre = document.querySelector("#sobre-nosotros");
    const contacto = document.querySelector(".contacto");
    const whatsapp = document.querySelector(".btn-whatsapp img");

    contacto.addEventListener("click", () => {

        whatsapp.classList.remove("rebote");

        // Reinicia la animación
        void whatsapp.offsetWidth;

        whatsapp.classList.add("rebote");

    });

    btnSobre.addEventListener("click", () => {
        seccionSobre.scrollIntoView({
            behavior: "smooth"
        });
    });

    btnPrecios.addEventListener("click", () => {
        seccionPrecios.scrollIntoView({
            behavior: "smooth"
        });
    });
});