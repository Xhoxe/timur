$(function () {
	$(".ddList>.menu_content_a").click(function () {
		var thisUl = $(this).siblings(".ul_menu_content");
		$(".ddList>.menu_content_a")
			.siblings(".ul_menu_content")
			.not(thisUl)
			.slideUp(500);
		thisUl.slideToggle(500);
	});

	$(".ddList2>.menu_content_a").click(function () {
		var thisLevel3ul = $(this).siblings(".ul_menu_content");
		$(".ddList2>.menu_content_a")
			.siblings(".ul_menu_content")
			.not(thisLevel3ul)
			.slideUp(500);
		thisLevel3ul.slideToggle(500);
	});
	var arrowElem =
		"<img class='arrowRight' style='float:right; position:relative; left:5px; ' src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-128.png' width='15' height='15'/>";
	$(".ddList>.menu_content_a, .ddList2>.menu_content_a").append(arrowElem);

	$(".ddList, .ddList2").each(function () {
		var len = $(this).find(".ul_menu_content").length;
		if (len == 0) {
			$(this).children(".menu_content_a").children(".arrowRight").hide();
		}
	});
});
