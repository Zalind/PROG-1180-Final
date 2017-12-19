$(document).ready(function()
{
	$("#Navigation > ul li").click(function(){
		if($("#Navigation > ul li").removeClass("active")){
			$(this).removeClass("active");
		}
		$(this).addClass("active");
	});
});

$(document).ready(function() {
    var max_fields      = 5; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    var remove_button   = $(".remove_field"); //Removes Field
    
    var x = 1; //initlal text box count
    $(add_button).click(function(){ //on add input button click
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div id="Plants_Row" class="row input_fields_wrap"><div class="col-sm-1 offset-sm-1"><div class="form-group"><input type="text" class="form-control"></div></div><div class="col-sm-1"><div class="form-group"><input type="text" class="form-control"></div></div><div class="col-sm-1"><div class="form-group"><input type="text" class="form-control"></div></div><div class="col-sm-1"><div class="form-group"><input type="text" class="form-control"></div></div><div class="col-sm-1"><div class="form-group"><input type="text" class="form-control"></div></div><div class="col-sm-2"><div class="form-group"><input type="datetime-local" class="form-control"></div></div><div class="col-sm-2"><div class="form-group"><input type="date" class="form-control"></div></div></div>'); //add input box
        }
    });
    
    $(remove_button).click(function(e){ //user click on remove text
        e.preventDefault(); $('#Plants_Row:last').remove(); x--;
    })
});