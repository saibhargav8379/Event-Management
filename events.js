window.addEventListener("load",function(){
	 document.getElementById("weddingLink").addEventListener("click",function(){
		 getInfo("Marriage");
	 },false);
	 document.getElementById("receptionLink").addEventListener("click",function(){
		 getInfo("Reception");
	 },false);
	 document.getElementById("engagementLink").addEventListener("click",function(){
		 getInfo("Engagement");
	 },false);
	 document.getElementById("birthdayLink").addEventListener("click",function(){
		 getInfo("Birthday");
	 },false);
	 document.getElementById("corporatetLink").addEventListener("click",function(){
		 getInfo("Coporate");
	 },false);
	 document.getElementById("gettogetherLink").addEventListener("click",function(){
		 getInfo("Get-Together");
	 },false);
 },false);//end page load eventlistener
 
 function getInfo(eventSelected)
 {
	  asyncRequest=new XMLHttpRequest;
	 asyncRequest.open("GET","events.xml",true);
	 asyncRequest.send(null);
	 asyncRequest.addEventListener("readystatechange",function(){
		 if(asyncRequest.readyState==4&&asyncRequest.status==200&&asyncRequest.responseXML){
			 //get the eventDetails element
			 var eventDetails=asyncRequest.responseXML.getElementsByTagName("event");//this will be an array of lenghth=4 because we have 4 elements in xml
			 
			 for(var i=0;i<eventDetails.length;i++){
				 var eventName=eventDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				 //gets the i-th eventName
				 //compare the eventName to the eventSelected
				 if(eventName==eventSelected){
					 //get the date,time,time:
					 var services=eventDetails.item(i).getElementsByTagName("services").item(0).firstChild.nodeValue;
					 var price=eventDetails.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
					 var guestCount=eventDetails.item(i).getElementsByTagName("guestCount").item(0).firstChild.nodeValue;
					 //creating a message text from the values above:
					 var messageText="Event Name: "+eventName+ " <br>Price: "+price+ " <br> Guest Count: "+guestCount;
					 //display the message on the page:
					 document.getElementById("information").innerHTML=messageText;
					 //because a match is found, exit out of the loop:
					 break;
				 }//end if
				
			 }//end for
		 }//end if
	 },false);//eventlistner and call back
	
 }
