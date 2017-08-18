
//variables
var asyncRequest;

//load cityName
function loadcityName()
{
	//raising an asynchronous request for xml file:
	 asyncRequest=new XMLHttpRequest;
	 asyncRequest.open("GET","GetinTouch.xml",true);
	 asyncRequest.send(null);
	 asyncRequest.addEventListener("readystatechange",function(){
		 if(asyncRequest.readyState==4&&asyncRequest.status==200&&asyncRequest.responseXML){
			 
			 //get the cityDetails element
			 var cityDetails=asyncRequest.responseXML.getElementsByTagName("info");//this will be an array of lenghth=4 because we have 4 elements in xml
			 //console.log(cityDetails);
			 for(var i=0;i<cityDetails.length;i++){
				 var cityName=cityDetails.item(i).getElementsByTagName("city").item(0).firstChild.nodeValue;
				 //gets the i-th cityName
				 var pTag=document.createElement("p");
				 var textNode=document.createTextNode(cityName);//text
				 var radioBtn=document.createElement("input");
				 //setting properties
				 radioBtn.type="radio";
				 radioBtn.id=cityName;
				 radioBtn.name="cityDetails";
				 radioBtn.value=cityName;
				 //create eventlistner for the radioBtn
				 radioBtn.addEventListener("change",function(){
					 //call another function to show the cityDetails by supplying the radio button's value property as argument:
					 showcityName(this.value);
				 },false);//end eventlistner
				 
				 //add the elements to the page and parent elements:
					pTag.appendChild(radioBtn);//added radiobutton to p
					pTag.appendChild(textNode);//added textNode
					//add the pTag to the table (td)
				document.getElementById("cityTD").appendChild(pTag);
			 }//end for
		 }//end if
	 },false);//eventlistner and call back
	 
}//end loadcityName function

function showcityName(citySelected){
	//raising an asynchronous request for xml file:
	 asyncRequest=new XMLHttpRequest;
	 asyncRequest.open("GET","GetinTouch.xml",true);
	 asyncRequest.send(null);
	 asyncRequest.addEventListener("readystatechange",function(){
		 if(asyncRequest.readyState==4&&asyncRequest.status==200&&asyncRequest.responseXML){
			 //get the cityDetails element
			 var cityDetails=asyncRequest.responseXML.getElementsByTagName("info");//this will be an array of lenghth=4 because we have 4 elements in xml
			 console.log(cityDetails);
			 for(var i=0;i<cityDetails.length;i++){
				 var cityName=cityDetails.item(i).getElementsByTagName("city").item(0).firstChild.nodeValue;
				 //gets the i-th cityName
				 //compare the cityName to the cityNameelected
				 if(cityName==citySelected){
					 //get the days,ship,shiptype,startsFFrom and pricing:
					 var address=cityDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
					 var phone=cityDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
					 var email=cityDetails.item(i).getElementsByTagName("email").item(0).firstChild.nodeValue;
					 
					 //creating a message text from the values above:
					 var messageText="City Name: "+cityName+ " <br> Address: "+address+ " <br> Phone: "+phone+" <br> Email: "+email;
					 //display the message on the page:
					 document.getElementById("detailsTD").innerHTML=messageText;
					 //because a match is found, exit out of the loop:
					 break;
				 }//end if
				
			 }//end for
		 }//end if
	 },false);//eventlistner and call back
	 
}//end showcityName function
//pageload eventlistner:
window.addEventListener("load",function(){
	loadcityName();
},false);//end pageload