$(document).ready(function()
{
	$("#Navigation > ul li").click(function(){
		if($("#Navigation > ul li").removeClass("active")){
			$(this).removeClass("active");
		}
		$(this).addClass("active");
	});
});
