jQuery(document).ready(function ($) {
	// BURGER
	$(".burger").click(function () {
		$(this).toggleClass("burger_active");
		$("#mobileMenu").toggleClass("active");
	});

	// ACCORDION
	var acc = document.getElementsByClassName("item__accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}

	$(document).mouseup(function (e) {
		// событие клика по веб-документу
		var popupBg = $(".popup__bg"); // тут указываем class элемента
		var popup = $(".popup"); // тут указываем class элемента
		if (!popup.is(e.target) && popup.has(e.target).length === 0) {
			// и не по его дочерним элементам
			popupBg.removeClass("active");
		}
	});
	$(".open-popup").click(function () {
		$(".popup__bg").addClass("active");
	});
	$(".close-popup").click(function () {
		$(".popup__bg").removeClass("active");
	});

	// $(".slider").slick({
	// 	infinite: true,
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	prevArrow:
	// 		"<img class='slide-arrow slick-prev icon' src='app/img/icons/arrow-left.svg'>",
	// 	nextArrow:
	// 		"<img class='slide-arrow slick-next icon' src='app/img/icons/arrow-right.svg'>",
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// 	centerMode: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				infinite: true,
	// 				dots: false,
	// 				arrows: false,
	// 				slidesToShow: 3,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				infinite: true,
	// 				dots: false,
	// 				arrows: false,
	// 				slidesToShow: 1,
	// 			},
	// 		},
	// 	],
	// });

	const $placeholder = $("select[placeholder]");
	if ($placeholder.length) {
		$placeholder.each(function () {
			const $this = $(this);

			// Initial
			$this.addClass("placeholder-shown");
			const placeholder = $this.attr("placeholder");
			$this.prepend(`<option value="" selected>${placeholder}</option>`);

			// Change
			$this.on("change", (event) => {
				const $this = $(event.currentTarget);
				if ($this.val()) {
					$this.removeClass("placeholder-shown").addClass("placeholder-hidden");
				} else {
					$this.addClass("placeholder-shown").removeClass("placeholder-hidden");
				}
			});
		});
	}

	// TABS
	function tabs() {
		const tabsBtn = document.querySelectorAll("#btnTab");
		const tabsItems = document.querySelectorAll(".tab");

		tabsBtn.forEach(onTabClick);

		function onTabClick(item) {
			item.addEventListener("click", function () {
				let currentBtn = item;
				let tabId = currentBtn.getAttribute("data-tab");
				let currentTab = document.querySelector(tabId);

				if (!currentBtn.classList.contains("active")) {
					tabsBtn.forEach(function (item) {
						item.classList.remove("active");
					});

					tabsItems.forEach(function (item) {
						item.classList.remove("active");
					});

					currentBtn.classList.add("active");
					currentTab.classList.add("active");
				}
			});
			document.querySelector("#btnTab").click();
		}
	}
	tabs();
});
