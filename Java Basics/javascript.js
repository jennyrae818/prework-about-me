$("#button1").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#button2").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

$("#button3").on("click", function() {
    $("#funText").css("color", "blue")
})

$("#button4").on("click", function() {
    $("#funText").css("color", "orange")
})

$("#button5").on("click", function() {
	$("#funText").css("color", "green")
})





