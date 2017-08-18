window.addEventListener("load",getImages,false);
   var asyncRequest; // variable to hold XMLHttpRequest object

   // set up and send the asynchronous request to get the XML file
   function getImages( )
   {
	   console.log("dfdsf");
      // attempt to create XMLHttpRequest object and make the request
      try
      {
         asyncRequest = new XMLHttpRequest(); // create request object

         // register event handler
         asyncRequest.addEventListener("readystatechange", processResponse, false); 
         asyncRequest.open( "GET", "gallery.xml", true ); // asyncRequest
         asyncRequest.send( null ); // send data
      } // end try
      catch ( exception )
      {
         alert( "Request Failed" );
      } // end catch
   } // end function getImages
   
   // parses the XML response; dynamically creates an unordered list and 
   // populates it with the response data; displays the list on the page
   function processResponse()
   {
      // if request completed successfully and responseXML is non-null
      if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 && 
         asyncRequest.responseXML )
      {

         // get the events from the responseXML
         var events = asyncRequest.responseXML.getElementsByTagName("event" )
         // get the placeholder div element named events
         var output = document.getElementById( "events" );
         
         // create an unordered list to display the images
         var imagesUL = document.createElement( "ul" );
         
         // place images in unordered list
         for ( var i = 0; i < events.length; ++i )
         {
            var event = events.item( i ); // get a event from events array
         
            // get the image filename
            var image = event.getElementsByTagName( "image" ).item( 0 ).firstChild.nodeValue;
            var title = event.getElementsByTagName( "title" ).item( 0 ).firstChild.nodeValue;                
         
            // create li and img element to display the image
            var imageLI = document.createElement( "li" );
            var imageTag = document.createElement( "img" );
            
            // set img element's src attribute
            imageTag.id = title;
            imageTag.setAttribute( "src", image); 
			//adding an event listener for mouseover event when the user mouseovers the image.
            imageTag.addEventListener( "mouseover", function()                
               {    
					//eval()Evaluates a string and executes it as if it was script code			   
                  document.getElementById( "title" ).innerHTML = eval( "this.id" );
               }, false );                      
            imageTag.addEventListener( "mouseout", function(){
                  document.getElementById( "title" ).innerHTML = "";
               }, false );
            imageLI.appendChild( imageTag ); // place img in li
            imagesUL.appendChild( imageLI ); // place li in ul
         } // end for statement

         output.appendChild( imagesUL ); // append ul to events div
      } // end if 
   } // end function processResponse
