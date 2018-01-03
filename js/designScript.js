/*Fucntion that removes messages from homescreen
*Triggerend by clicking x button
*Takes in i which is a number ref to which message*/
function hideMsg(i) {
	var msgNam = 'msg'+i;
	var butNam = 'remBut'+i;
	var msg = document.getElementById(msgNam);
	var but = document.getElementById(butNam);

	msg.style.display = 'none';
	but.style.display = 'none';
}

/*Function that auto fills client information
*Triggered by selecting a client from the drop down
*No parameters*/
function cliFill() {
	//Checks if first option is selected
	if(document.getElementById('cli1').selected){
		//Fills Client infromation for London Sq. Mall
		document.getElementById('conNam').value = "Amy Benson, Mgr.";
		document.getElementById('cliAddr').value = "12638 Mall Drive, Scotts Valley, CA 95060";
		document.getElementById('cliPho').value = "(408) 834-5603";
	}
	//Checks if second option is selected
	else if (document.getElementById('cli2').selected){
		//Fills Client information for Client 2
		document.getElementById('conNam').value = "Client 2 Contact";
		document.getElementById('cliAddr').value = "Client2 St. 2s Valley, CA 22222";
		document.getElementById('cliPho').value = "(222) 222-2222";
	}
	//Fall back case make fields empty
	else {
		//Clear Fields
		document.getElementById('conNam').value = "";
		document.getElementById('cliAddr').value = "";
		document.getElementById('cliPho').value = "";
	}
}

/*Function tha auto fills sales assoc phone number
*Triggered by selecting a sales associate
*no parameters*/
function saleFill() {

	//Checks if first option is selected
	if(document.getElementById('sales1').selected){
		//Set phone number
		document.getElementById('salTel').value = "(408) 775-3652";
	}
	//Checks second option
	else if(document.getElementById('sales2').selected){
		//Set phone number
		document.getElementById('salTel').value = "(202) 202-2222";
	}
	//Fall back clears
	else if(document.getElementById('sales3').selected){
		//Clear phone number
		document.getElementById('salTel').value = "(303) 303-3333";
	}
}

/*Function tha auto fills designers phone number
*Triggered by selecting a sdesigner
*no parameters*/
function desFill() {

	//Checks if first option is selected
	if(document.getElementById('des1').selected){
		//Set phone number
		document.getElementById('desTel').value = "(408) 775-3645";
	}
	//Checks second option
	else if(document.getElementById('des2').selected){
		//Set phone number
		document.getElementById('desTel').value = "(202) 232-2727";
	}
	//Checks third option
	else if(document.getElementById('des3').selected){
		//Clear phone number
		document.getElementById('desTel').value = "(303) 323-3737";
	}
}

/*Function that displays todays date in the bid date field
*No trigger
*No Parameters*/
function setDate(){
	//Making a date varrible
	document.getElementById('bidDate').value = Date();
}

/*Function that fills the view bid for London
*Triggered by clicking the button with London in view bid
*Takes no parameters
*(All data is hardcoded)*/
function lonFill() {

	//Client Info
	document.getElementById('cliNamOut').value = "London Sq. Mall";
	document.getElementById('conNamOut').value = "Amy Benson, Mgr.";
	document.getElementById('cliAddrOut').value = "12638 Mall Drive, Scotts Valley, CA 95060";
	document.getElementById('cliPhoOut').value = "(408) 834-5603";

	//NBD Staff
	document.getElementById('salAsOut').value = "Bob Reinhardt";
	document.getElementById('salTelOut').value = "(408) 775-3652";
	document.getElementById('desNamOut').value = "Tamara Bakken";
	document.getElementById('desTelOut').value = "(408) 775-3645";

	//Project
	document.getElementById('bidDateOut').value = "May 6, 1996";
	document.getElementById('pSiteOut').value = "Main Entrance";
	document.getElementById('pSiteDetOut').value = "Mall Dr./Cinmea Lane";
	document.getElementById('beDateOut').value = "June 15, 1996";
	document.getElementById('enDateOut').value = "June 30, 1996";
	document.getElementById('bidAmoOut').value = "$7,651.50";

	//Material Requirments
	//Plant Row 1
	document.getElementById('plaQntyOut').value = "3";
	document.getElementById('plaDescOut').value = "laccospadix australasica palm";
	document.getElementById('plaSiOut').value = "15";
	document.getElementById('plaUniOut').value = "gal";
	document.getElementById('plaUPriOut').value = "$749.00";
	document.getElementById('plaEPriOut').value = "2,247.00";

	//Plant Row 2
	document.getElementById('plaQntyOut2').value = "5";
	document.getElementById('plaDescOut2').value = "caryota mitis";
	document.getElementById('plaSiOut2').value = "7";
	document.getElementById('plaUniOut2').value = "gal";
	document.getElementById('plaUPriOut2').value = "$233.00";
	document.getElementById('plaEPriOut2').value = "1,165.00";

	//Plant Row 3
	document.getElementById('plaQntyOut3').value = "7";
	document.getElementById('plaDescOut3').value = "marginata";
	document.getElementById('plaSiOut3').value = "2";
	document.getElementById('plaUniOut3').value = "gal";
	document.getElementById('plaUPriOut3').value = "$75.00";
	document.getElementById('plaEPriOut3').value = "525.00";

	//Poterry Row 1
	document.getElementById('potQntyOut').value = "1";
	document.getElementById('potDescOut').value = "granite fountain (GFN48)";
	document.getElementById('potSiOut').value = "48";
	document.getElementById('potUniOut').value = "in";
	document.getElementById('potUPriOut').value = "$750.00";
	document.getElementById('potEPriOut').value = "750.00";

	//Poterry Row 2
	document.getElementById('potQntyOut2').value = "3";
	document.getElementById('potDescOut2').value = "granite pots (GP50)";
	document.getElementById('potSiOut2').value = "50";
	document.getElementById('potUniOut2').value = "gal";
	document.getElementById('potUPriOut2').value = "$195.00";
	document.getElementById('potEPriOut2').value = "525.00";

	//Materials Row 1
	document.getElementById('matQntyOut').value = "10";
	document.getElementById('matDescOut').value = "decorative cdar bark (CBRK5)";
	document.getElementById('matSiOut').value = "5";
	document.getElementById('matUniOut').value = "cu ft";
	document.getElementById('matUPriOut').value = "$15.95";
	document.getElementById('matEPriOut').value = "159.50";

	//Materials Row 2
	document.getElementById('matQntyOut2').value = "1";
	document.getElementById('matDescOut2').value = "top soil (TSOIL)";
	document.getElementById('matSiOut2').value = "1";
	document.getElementById('matUniOut2').value = "yard";
	document.getElementById('matUPriOut2').value = "$20.00";
	document.getElementById('matEPriOut2').value = "20.00";

	//Labour Requirments
	//Row 1
	document.getElementById('labHoursOut').value = "30";
	document.getElementById('labDescOut').value = "Production Workers";
	document.getElementById('labUPriOut').value = "$30.00";
	document.getElementById('labEPriOut').value = "900.00";

	//Row 2
	document.getElementById('labHoursOut2').value = "10";
	document.getElementById('labDescOut2').value = "Design Consultant";
	document.getElementById('labUPriOut2').value = "$65.00";
	document.getElementById('labEPriOut2').value = "650.00";

	//Row 3
	document.getElementById('labHoursOut3').value = "10";
	document.getElementById('labDescOut3').value = "Heavy Equipment Operator";
	document.getElementById('labUPriOut3').value = "$65.00";
	document.getElementById('labEPriOut3').value = "650.00";
}

/*Function that fills a budget for viewing
*Triggered by sleceting a budget to view
*No parameters*/
function lonBudgFill () {

	//Hours to date
	document.getElementById('htdDescOut').value = "Intial mtg w client";
	document.getElementById('htdDateOut').value = "April 15";
	document.getElementById('htdHoursOut').value = "1";

	//Estimated Hours
	//Row 1
	document.getElementById('ehDescOut').value = "Prepare prelim sketches";
	document.getElementById('ehDateOut').value = "April 21";
	document.getElementById('ehHoursOut').value = "2";
	//Row 2
	document.getElementById('ehDescOut2').value = "Prepare design bid";
	document.getElementById('ehDateOut2').value = "April 21";
	document.getElementById('ehHoursOut2').value = "2";
	//Row 3
	document.getElementById('ehDescOut3').value = "Meet with client";
	document.getElementById('ehDateOut3').value = "April 25";
	document.getElementById('ehHoursOut3').value = "1";
	//Row 4
	document.getElementById('ehDescOut4').value = "Revise Sketches & Bid";
	document.getElementById('ehDateOut4').value = "@April 25";
	document.getElementById('ehHoursOut4').value = "2";
	//Row 5
	document.getElementById('ehDescOut5').value = "Meet with client";
	document.getElementById('ehDateOut5').value = "@May 2";
	document.getElementById('ehHoursOut5').value = "1";
	//Row 6
	document.getElementById('ehDescOut6').value = "Prepare blueprint";
	document.getElementById('ehDateOut6').value = "@May 3";
	document.getElementById('ehHoursOut6').value = "3";

	//Total Hours
	document.getElementById('totHoursOut').value = "12";
}