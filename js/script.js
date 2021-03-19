const buttonModal = document.querySelector(".button-modal");
const formWrapper = document.querySelector(".form-wrapper");

buttonModal.addEventListener("click", function (evt) {
  evt.preventDefault();

  formWrapper.classList.toggle("popap-show");
  formWrapper.classList.toggle("popap-clouse");
});

