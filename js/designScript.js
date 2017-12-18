//Varribles for add methods
var plaCounter = 1;
var potCounter = 1;
var matCounter = 1;

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

/*Function that adds a row of inputs in the Material area
*Triggered by clicking on the + button
*Takes in divName which is id for the div the fields go in
*Doesnt Work: Will Most likley use Jquerry instead*/
function plaAdd(divName) {
	var newRow;
	var newCol;
	var newEle;

	//Setting up row
	newRow = document.createElement('div');
	newRow.setAttribute('class', 'row');

	//Setting up col
	newCol = document.createElement('div');
	newCol.setAttribute('class', 'col-lg-1');

	//Setting up element
	newEle = document.createElement('input');
	newEle.setAttribute('id', 'work');
	newEle.innerHTML = '<input type="number" name="plaQnty" class="smallNumInput" placeholder="Qnty">';

	//Putting element in col
	newCol.appendChild(newEle);

	//Putting col in row
	newRow.appendChild(newCol);

	//Putting col into the plants
	document.getElementById(divName).appendChild(newRow);
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
