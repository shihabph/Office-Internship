$(".red,p").append(" Good Night");
// $("demo,p").html(<b>Changed person in 4</b>)
$("btn").on("click", function () {
	$("h22").text("Why Would I change myself??");
});
$(".red,p").on("click", function () {
	$("p").hide("Holla");
});

$(document).ready(function () {
	$("#p1").mouseleave(function () {
		alert("Bye! You now leave p1!");
	});
});