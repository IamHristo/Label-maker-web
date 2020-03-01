function genPDF() {
	
	var doc = new jsPDF();
	
    var specialElementHandlers = {
        '#hidediv' : function(element,render) {return true;}
    };
    
    doc.fromHTML($('#testdiv').get(0), 20,20,{
                 'width':500,
        		'elementHandlers': specialElementHandlers
    });
	
	doc.save('Test.pdf');
	
}

function printPDF(){
    //Get the print button and put it into a variable
        var printButton = document.getElementById("btn");
        //Set the print button visibility to 'hidden' 
        printButton.style.visibility = 'hidden';
        var x = document.querySelectorAll(".panel");
        var i;
        for(i=0; i<x.length;i++){
            x[i].style.background = "none";
        }
        //Print the page content
        window.print()
        //Set the print button to 'visible' again 
        //[Delete this line if you want it to stay hidden after printing]
        printButton.style.visibility = 'visible';
}