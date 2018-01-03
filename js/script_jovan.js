$(document).ready(function() {


    //////////////////              Production Plan section add rows            /////////////////////////////


    /////Production plan plants field inputs rows/////

                    var max_fields              = 5; //maximum input boxes allowed

                    var wrapperPlants           = $(".input_fields_plants_wrap"); //Fields wrapper
                    var add_button_plants       = $(".add_field_plants_button"); //Add button ID
                    var remove_button_plants    = $(".remove_field_plants"); //Removes Field
                    
                    var p = 1; //initlal text box count
                    $(add_button_plants).click(function(){ //on add input button click
                        if(p < max_fields){ //max input box allowed
                            p++; //text box increment
                            $(wrapperPlants).append($("#Plants>.plants_Production").clone()); //add input box
                        }
                    });

                    $(remove_button_plants).click(function(e){ //user click on remove text
                        e.preventDefault(); $('#Plants_columns>.input_fields_plants_wrap>.plants_Production:last').remove(); p--;
                    });


    /////Prodruction Plan pottery field inputs/////

                    var wrapperPottery           = $(".input_fields_pottery_wrap"); //Fields wrapper
                    var add_button_pottery       = $(".add_field_pottery_button"); //Add button ID
                    var remove_button_pottery    = $(".remove_field_pottery"); //Removes Field
                    
                    var po = 1; //initlal text box count
                    $(add_button_pottery).click(function(){ //on add input button click
                        if(po < max_fields){ //max input box allowed
                            po++; //text box increment
                            $(wrapperPottery).append($("#Pottery>.pottery_Production").clone()); //add input box
                        }
                    });

                    $(remove_button_pottery).click(function(e){ //user click on remove text
                        e.preventDefault(); $('#Pottery_Columns>.input_fields_pottery_wrap>.pottery_Production:last').remove(); po--;
                    });


    /////Prodruction Plan materials field inputs/////

                    var wrapperMaterials           = $(".input_fields_materials_wrap"); //Fields wrapper
                    var add_button_materials       = $(".add_field_materials_button"); //Add button ID
                    var remove_button_materials    = $(".remove_field_materials"); //Removes Field
                    
                    var m = 1; //initlal text box count
                    $(add_button_materials).click(function(){ //on add input button click
                        if(m < max_fields){ //max input box allowed
                            m++; //text box increment
                            $(wrapperMaterials).append($("#Materials>.materials_Production").clone()); //add input box
                        }
                    });

                    $(remove_button_materials).click(function(e){ //user click on remove text
                        e.preventDefault(); $('#Materials_Columns>.input_fields_materials_wrap>.materials_Production:last').remove(); m--;
                    });


    /////Prodruction Plan tools field inputs/////

                    var wrapperTools           = $(".input_fields_tools_wrap"); //Fields wrapper
                    var add_button_tools       = $(".add_field_tools_button"); //Add button ID
                    var remove_button_tools    = $(".remove_field_tools"); //Removes Field
                    
                    var t = 1; //initlal text box count
                    $(add_button_tools).click(function(){ //on add input button click
                        if(t < max_fields){ //max input box allowed
                            t++; //text box increment
                            $(wrapperTools).append($("#Tools>.tools_Production").clone()); //add input box
                        }
                    });

                    $(remove_button_tools).click(function(e){ //user click on remove text
                        e.preventDefault(); $('#Tools_Columns>.input_fields_tools_wrap>.tools_Production:last').remove(); t--;
                    });


    /////Prodruction Plan Labor field inputs/////

                    var wrapperlabor           = $(".input_fields_labor_wrap"); //Fields wrapper
                    var add_button_labor       = $(".add_field_labor_button"); //Add button ID
                    var remove_button_labor    = $(".remove_field_labor"); //Removes Field

                    var L = 1; //initlal text box count
                    $(add_button_labor).click(function(){ //on add input button click
                        if(L < max_fields){ //max input box allowed
                            L++; //text box increment
                            $(wrapperlabor).append($("#labor>.labor_Production").clone()); //add input box
                        }
                    });

                    $(remove_button_labor).click(function(e){ //user click on remove text
                        e.preventDefault(); $('#labor_Columns>.input_fields_labor_wrap>.labor_Production:last').remove(); L--;
                    });


///////////////// Work Report Section Add rows  //////////////////////

        /////Work report Materials used field inputs/////

                    var wrapper_Materials_Used          = $(".input_fields_Materials_Used_wrap"); //Fields wrapper
                    var add_button_Materials_Used       = $(".add_field_Materials_Used_button"); //Add button ID
                    var remove_button_Materials_Used    = $(".remove_field_Materials_Used"); //Removes Field

                    var MU = 1; //initlal text box count
                    $(add_button_Materials_Used).click(function(){ //on add input button click
                        if(MU < max_fields){ //max input box allowed
                            MU++; //text box increment
                            $(wrapper_Materials_Used).append($("#Materials_Used>.Materials_Used_Production").clone()); //add input box
                        }
                    });

                    $(remove_button_Materials_Used).click(function(e){ //user click on remove text
                        e.preventDefault(); $('#Materials_Used_Columns>.input_fields_Materials_Used_wrap>.Materials_Used_Production:last').remove(); MU--;
                    });


        /////Work report Materials used field inputs/////

                    var wrapper_LaborCWR          = $(".input_fields_LaborCWR_wrap"); //Fields wrapper
                    var add_button_LaborCWR       = $(".add_field_LaborCWR_button"); //Add button ID
                    var remove_button_LaborCWR    = $(".remove_field_LaborCWR"); //Removes Field

                    var LCWR = 1; //initlal text box count
                    $(add_button_LaborCWR).click(function(){ //on add input button click
                        if(LCWR < max_fields){ //max input box allowed
                            LCWR++; //text box increment
                            $(wrapper_LaborCWR).append($("#LaborCWR>.LaborCWR_Production").clone()); //add input box
                        }
                    });

                    $(remove_button_LaborCWR).click(function(e){ //user click on remove text
                        e.preventDefault(); $('#LaborCWR_Columns>.input_fields_LaborCWR_wrap>.LaborCWR_Production:last').remove(); LCWR--;
                    });
});