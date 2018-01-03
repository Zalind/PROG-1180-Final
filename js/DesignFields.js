/*JQuerry for adding Fields dynamically*/
$(document).ready(function(e){
    var max_fields      = 5; //maximum input boxes allowed
    var wrapper         = $(".extraInput"); //Fields wrapper
    var add_button      = $(".addButton"); //Add button ID
    var remove_button   = $(".subButton"); //Removes Field
    
    var x = 1; //initlal text box count
    $(add_button).click(function(){ //on add input button click
        if(x < max_fields){ //max input box allowed`
            x++; //text box increment
            $(wrapper).append('<div id="plantsExtra"><div class="row extraInput"><div class="col-lg-1"><input type="number" name="plaQnty" class="smallNumInput" placeholder="Qnty"></div><div class="col-lg-2"><input type="text" name="plaDesc" placeholder="Description of Item"></div><div class="col-lg-1"><input type="number" name="plaSi" class="smallNumInput" placeholder="Size"></div><div class="col-lg-1"><input type="text" name="plaUni" size="3" class="smallTextInput" placeholder="ex: in"></div><div class="col-lg-2"><input type="number" name="plaEPri" class="numInput" placeholder="Dollar amount per unit"></div><div class="col-lg-2"><input type="number" name="plaUPri" class="numInput" placeholder="Total dollar amount"></div></div><div class="extraInput"></div></div>'); //add input box
        }
    });
    
    $(remove_button).click(function(e){ //user click on remove text
        e.preventDefault(); $('#plantsExtra:last').remove(); x--;
    })
});