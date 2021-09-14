window.addEventListener("DOMContentLoaded", () => {
	let dots = document.querySelectorAll(".dots-item"),
		dotsArea = document.querySelector(".dots-block"),
		slides = document.querySelectorAll(".slides-item"),
		prevBtn = document.querySelector(".left-button"),
		nextBtn = document.querySelector(".right-button"),
		slideIndex = 1;

	showSlides(slideIndex);

	function showSlides(n) {
		if (n < 1) {
			slideIndex = slides.length;
		} else if (n > slides.length) {
			slideIndex = 1;
		}
		slides.forEach((slide) => {
			slide.style.display = "none";
		});
		dots.forEach((dot) => {
			dot.classList.remove("active");
		});
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add("active");
	}

	function plusSlides(n) {
		showSlides((slideIndex += n));
	}
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}
	prevBtn.addEventListener("click", () => {
		plusSlides(-1);
	});
	nextBtn.addEventListener("click", () => {
		plusSlides(1);
	});
	dotsArea.addEventListener("click", (e) => {
		for (let i = 0; i < dots.length + 1; i++) {
			if (e.target.classList.contains("dots-item") && e.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
});
