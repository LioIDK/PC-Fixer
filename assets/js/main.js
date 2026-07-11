document.addEventListener("DOMContentLoaded", () => {

    const contacto = document.querySelector(".contacto");
    const whatsapp = document.querySelector(".btn-whatsapp img");

    contacto.addEventListener("click", () => {

        whatsapp.classList.remove("rebote");

        // Reinicia la animación
        void whatsapp.offsetWidth;

        whatsapp.classList.add("rebote");

    });

});