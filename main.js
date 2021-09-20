window.addEventListener("DOMContentLoaded", () => {
	let slideContainers = document.querySelectorAll(".slide-container");

	slideContainers.forEach((slideContainer) => {
		// setInterval(() => {
		// 	plusSlides(1);
		// }, 1500);
		console.log(slideContainers[0]);
		let div = document.createElement("div");
		div.classList.add("dots-block");
		slideContainer.appendChild(div);

		let dotsArea = slideContainer.querySelector(".dots-block"),
			slides = slideContainer.querySelectorAll(".slides-item");

		for (let i = 0; i < slides.length; i++) {
			let div = document.createElement("div");
			div.classList.add("dots-item");
			dotsArea.appendChild(div);
		}

		let dots = slideContainer.querySelectorAll(".dots-item"),
			prevBtn = slideContainer.querySelector(".left-button"),
			nextBtn = slideContainer.querySelector(".right-button"),
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
				if (
					e.target.classList.contains("dots-item") &&
					e.target == dots[i - 1]
				) {
					currentSlide(i);
				}
			}
		});
	});
});
