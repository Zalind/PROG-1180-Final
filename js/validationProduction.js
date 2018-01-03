$(document).ready(function() {

	$('#CreateProductionPlan').validate({ // initialize the plugin
        rules: {

            ProjectTitle: {
                required: true,
                min: 2
            },

            ProjectDate: {
            	required: true
            },

            Project_Site: {
            	required: true,
            	maxLength: 150
            },

            Begin_Date: {
            	required: true
            },

			Bid_Amount: {
				required: true,
				number: true
			},

			Compl_Date:{
				required: true
			},

			Sales_Assoc:{
				required: true
			},

			Production:{
				required: true
			},

			Designer:{
				required: true
			}
        },


        messages: {

        	ProjectTitle: 	"Please add a title to this project",

        	ProjectDate: 	"Please select the date",

        	Project_Site: 	"Add the Project Location(s)",

        	Begin_Date: 	"Select the begin date of produciton",

        	Bid_Amount: 	"Insert the bid amount",

        	Compl_Date: 	"Select the project end date",

        	Sales_Assoc: 	"Add a sales associate name",

        	Production: 	"Add a production name",

        	Designer: 		"Add a designers name"

        }
    });

});