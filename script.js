const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

// Mostrar inglés al cargar la página
document.documentElement.lang = "en";

const elements = document.querySelectorAll("[data-es]");

elements.forEach(element => {
    element.textContent = element.getAttribute("data-en");
});

languageBtn.textContent = "ES";

// Cambiar idioma
languageBtn.addEventListener("click", () => {

    if (currentLanguage === "en") {
        currentLanguage = "es";
        languageBtn.textContent = "EN";
    } else {
        currentLanguage = "en";
        languageBtn.textContent = "ES";
    }

    document.documentElement.lang = currentLanguage;

    elements.forEach(element => {
        element.textContent = element.getAttribute(
            `data-${currentLanguage}`
        );
    });
});