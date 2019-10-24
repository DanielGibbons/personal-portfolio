$(".scroll-top-arrow").on("click", (e) => {
	e.preventDefault();
	$("html, body").animate({ scrollTop: "0" }, 600);
});
