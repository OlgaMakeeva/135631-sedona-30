const buttonModal = document.querySelector(".button-modal");
const formWrapper = document.querySelector(".form-wrapper");

formWrapper.classList.add("popup-close"),
buttonModal.addEventListener("click", function (e) {
	e.preventDefault(),
	formWrapper.classList.toggle("popup-close"),
	formWrapper.classList.toggle("popup-show")
});
