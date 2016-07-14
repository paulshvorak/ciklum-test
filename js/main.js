$(".menu-click").click(function () {
	$(".nav").toggle(500);
})

$(".search-click").click(function () {
	$(".search-form").toggle(500);
})

$(".footer-top-click").click(function () {
	$(this).parent().next().toggle(500);
	$(this).next().toggleClass("rotated-left-45");
})

$(".nav-list-item").hover(function () {
	$(this).toggleClass("active");
})
