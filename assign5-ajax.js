//#### ASSIGNMENT 5 - STORE HOURS ####

// Completed by Jalaluddin Qureshi, Humber College. 
// Please Use Firefox, as I dont have web hosting.
// Set privacy.file_unique_origin to false.


window.onload = function() {
    
    var displaytable = document.getElementById("schedTbl");
    document.getElementById("routeRb1").onclick = getFile1;
    document.getElementById("routeRb2").onclick = getFile2;
    document.getElementById("routeRb3").onclick = getFile3;
    
    //global variable which will store the file name which will be displayed.
    var fileName;
    
    //the following functions (getFileX) are used to specify the file name to be displayed based 
    //on the radio box which the user has clicked.
    function getFile1() {
        fileName = "sched1.txt"
        fetchFile();
    }

    function getFile2() {
        fileName = "sched2.txt"
        fetchFile();
    }
    
    function getFile3() {
        fileName = "sched3.txt"
        fetchFile();
    }
    
    //the function fetchFile is called by getFileX function, which in turn is called whenever a user
    //clicks on one of the radio buttons.
    function fetchFile(){
        
        var xhr;
        if (window.XMLHttpRequest) 
        {
            //CREATE A NEW REQUEST OBJECT
            xhr = new XMLHttpRequest();
        } 
        //Old versions of Internet Explorer (IE5 and IE6) use an ActiveX object instead of the XMLHttpRequest object:
        else 
        {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xhr.onreadystatechange = function(){     
            
            if (xhr.readyState == 4 ) {//readyState OF 4 MEANS SERVER RESPONSE IS COMPLETE
                
                //any result code between 200 and 299 represents success
                //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
                if (xhr.status >= 200 && xhr.status < 300) {
                    displaytable.innerHTML = xhr.responseText; //DISPLAY RETREIVED DATA
                } 
                
                //HANDLE THE ERROR
                else {
                    alert("Connection was unsuccessful");
                }
                
            }//end if readyState
        }
        
        //NOW THAT WE'RE READY FOR A RESPONSE, OPEN A CONNECTION TO THE SERVER
        xhr.open("GET",fileName,true);
        
        //FINALLY, WE CAN SEND OUR REQUEST 
        xhr.send(null);   
        
    }
    
}

