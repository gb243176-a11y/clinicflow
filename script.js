const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Obrigado pelo interesse no ClinicFlow! Em breve você poderá iniciar seu teste grátis.");
    });
});
