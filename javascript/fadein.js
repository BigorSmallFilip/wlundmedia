
function setFadeInEvent(element) {
	window.addEventListener("scroll", () => {
		let windowHeight = window.innerHeight;
		let elementTop = element.getBoundingClientRect().top;
		let elementVisible = element.getAttribute("fade-in-");

		if (elementTop < windowHeight - elementVisible) {
			element.setAttribute("visible", "true");
		} else {
			element.removeAttribute("visible");
		}
	});
}