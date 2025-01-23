function validationForm(event) {
    event.preventDefault()

    console.log("click click click")

    let emailElement = document.querySelector(".js__subscribe-input-mail");
    let errorMessage = document.querySelector(".js__subscribe-error-message");
    let subscribeContainer = document.querySelector(".subscribe")

    // remove error information
    errorMessage.classList.remove("subscribe__error-message--visible");
    emailElement.classList.remove("subscribe__input--error");
    subscribeContainer.classList.remove("subscribe__error")

    // imput element should not be empty
    if (emailElement === "") {
        errorMessage.classList.add("subscribe__error-message--visible");
        emailElement.classList.add("subscribe__input--error");
        subscribeContainer.classList.add("subscribe__error")
    }

  // input element should have @
    if (emailElement.value.indexOf('@') === -1) {
        errorMessage.classList.add("subscribe__error-message--visible");
        emailElement.classList.add("subscribe__input--error");
        subscribeContainer.classList.add("subscribe__error");
    }
}

function subscribeButtonClick() {
    let formButton = document.querySelector(".js-form");
    formButton.addEventListener("submit", validationForm);
}

subscribeButtonClick()