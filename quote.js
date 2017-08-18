window.addEventListener("load",function(){
	 //anonymous function
	 fillDropDown();//calling function to fill the dropdown option
	 document.getElementById("submitButton").addEventListener("click",calculate,false);
 },false);//end page load eventlistener
 var selectTag;
 function fillDropDown(){
	//make a synchronous request for quote.xml, loop through to populate the select --> options.
	//variables
	selectTag=document.getElementById("eventTypeDDL");
	
	var quoteArray;
	//synchronous request:
	var xhr=new XMLHttpRequest();
	xhr.open("GET","events.xml",false);
	xhr.send(null);
	quoteArray = xhr.responseXML.getElementsByTagName("event");
	//loop through the array and create option tags with event name as value and innerHTML
	for(var i=0;i<quoteArray.length;i++){
		//create option tag for quoteelect tag
		var eventOption=document.createElement("option");
		var eventName=quoteArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;//gives value for one event from the xml file
		//add value and text to the option tag
		var price=quoteArray.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		eventOption.value=price;
		eventOption.innerHTML=eventName;
		selectTag.appendChild(eventOption);
	}// end looping for event names
 }//end funtion fillDropDown
 
function calculate(){
	 var selectIndex = document.getElementById("eventTypeDDL").selectedIndex;
	 var guestIndex = document.getElementById("numberOfGuests").selectedIndex;
	 var name = document.getElementById("nameTextBox").value;
	 var date = document.getElementById("dateTextBox").value;
	 var eventname = document.getElementById("eventTypeDDL").options[selectIndex].text;
	 var eventprice = document.getElementById("eventTypeDDL").options[selectIndex].value;
	 var guests = document.getElementById("numberOfGuests").options[guestIndex].value;
	 var amount;
	 var priceint;
	 var guestint;
	 
	 if( name == "" || date == "")
	 {
		 document.getElementById("result").innerHTML = "* Please Enter all required Fields";
		  document.getElementById('result').style.color = "red";
		 
	 }
	 else{
		 
		 	 
			if((priceint = parseInt(eventprice)) && (guestint = parseInt(guests)) ){
				
				if(guestint == 200){
					amount = priceint;
				}
				else if(guestint == 400){
					priceint= priceint * 2;
				     amount = priceint;
				}
				else if(guestint == 600){
					priceint=priceint * 3;
				    amount = priceint;
				}
				else{
					priceint=priceint * 4;
				amount = priceint;
				}
				
			}
		 document.getElementById("result").innerHTML = "Hi "+name+"  your  " +eventname +" Event has been schdeluded with a Guest Count of ";
		 document.getElementById("result").innerHTML += +guests+" on " +date+ " your total price is plus tax $" +amount;
		 document.getElementById('result').style.color = "green";
		 
		 
	 }
}