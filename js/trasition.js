const button = document.querySelector("#getLocationBtn");
button.addEventListener("click", function () {
	button.classList.add("shake");
	setTimeout(() => {
		button.classList.remove("shake");
	}, 500);
});
