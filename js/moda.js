var modal = document.getElementById('demo');

// When the user clicks anywhere outside of the modal, close it
function myFunction1(){
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        console.log("Hello world!");
    }
}

}

function showMore() {
    
  var review = document.getElementsByClassName("more");
  var btnText = document.getElementById("show-more-btn");
    if(review[0].style.display == "none"){
    review[0].style.display = "inline";
    review[1].style.display = "inline";
    review[2].style.display = "inline";
    review[3].style.display = "inline";
    btnText.innerHTML = "Скрии";
    }
    else{
    review[0].style.display = "none";
    review[1].style.display = "none";
    review[2].style.display = "none";
    review[3].style.display = "none";
    btnText.innerHTML = "Покажи още"; 
    }
}

function showReg(){
    var modal = document.getElementById("id01");
    var reg = document.getElementById("regform");
    modal.style.display = "none";
    reg.style.display = "block";
}

function showRegHide(){
    var reg = document.getElementById("regform");
    reg.style.display = "none";
}

function pswForget(){
    var modal = document.getElementById("id01");
    var reg = document.getElementById("pswforget");
    modal.style.display = "none";
    reg.style.display = "block";
}

function pswForgetHide(){
    var reg = document.getElementById("pswforget");
    reg.style.display = "none";
}

function showAlert(){
    
    var form = document.getElementById("login-form");

function myFunction() {
  if (form.checkValidity()) {
    var modal = document.getElementById("id01");
    $('.alert').show();
    setTimeout(function(){ $(".alert").fadeTo(1000, 0.4).slideUp(800); }, 3000);
    $(modal).fadeTo(1000, 0);
  }
}
    
    
    
}

function showLogin(){
    var modal = document.getElementById('id01');
    modal.style.display='block';
    modal.style.opacity='100';
}

function showLoginHide(){
    document.getElementById("id01").style.display = 'none';
}
var a;
function checkAll() {
    var list = document.getElementsByClassName("col-xs-6");
    var listLength = list.length;
    var count=0;
    console.log(listLength);
    for(var i=0; i<listLength;i++){
        var nameString = list[i].getElementsByClassName("lbname")[0].textContent;
            console.log(nameString);
        if(nameString.length==0 || nameString == "Примерно име марка" ){
            list[i].getElementsByClassName("panel-default")[0].style.backgroundColor = "red";
            count++;
        }
        
        }
    if(count>=1){
            alert("Имате " + count + " непопълнени етикета!");
        }
    else{
        printPDF();
    }
}



function input(){
    showAlert();
    var name = document.getElementById("bname").value;
    var price = document.getElementById("price").value;
    var price2 = document.getElementById("price1").value;
    var dds = document.getElementById("price2");
    var list = document.getElementsByClassName("col-xs-6");
    list[a].getElementsByClassName("lbname")[0].innerHTML = name;
    var c;
    if(price/10>=1){
       c=3;
        list[a].getElementsByClassName("lbprice")[0].style.left = "120px";
    }
    else{
        c=2;
        list[a].getElementsByClassName("lbprice")[0].style.left = "170px";
    }
    
    var p3 = 1 +"."+price2;
    if(dds.checked==true){
        var p4 = price * p3;
        console.log("yes");
    }
    else{
        var p4 = price * p3 * 1.20;
        console.log("no");
    }
    
    var p5 = p4.toFixed(2);
    price = p5;
    console.log(price);
    var p1 = price.substring(0,c);
    var p2 = price.substring(c,c+3);
    
    
    
    
    list[a].getElementsByClassName("lbprice")[0].innerHTML = p1;
    
    list[a].getElementsByClassName("lbpricedecimal")[0].innerHTML = p2;
    
    list[a].getElementsByClassName("lbpricename")[0].innerHTML = " лв";
    
    /*
    console.log(typeof curIdx);
    var name = document.getElementById("bname").value;
    document.getElementById("lbname").innerHTML = name;
    var price = document.getElementById("price").value;
    document.getElementById("lbprice").innerHTML = price + " лв";
    */
}

var element;
//Change color of DIV
function redColor(){
console.log(document.getElementById("bname").value); 
var nameLength = document.getElementById("bname").value.length;
console.log(nameLength);   
    
    if(nameLength == 0){
       console.log($("#bname").length); 
    $(element).css('background', 'red'); 
    }
    
    //if ($("#bname").val().replace(/^\s+|\s+$/g, //"").length != 0);

}

$('.panel').on("click",function() { 
    $(this).css('background', 'green'); 
    element=$(this);
});
/*
$(document).ready(function(){
  $(".col-xs-6").click(function(){
    alert($(".col-xs-6").index());
  });
});

$(document).ready(function(){
  $(".probata").click(function(){
    alert($(this).index());
  });
});
*/

$(".col-xs-6").bind("click", function(){
    var divs = $(".col-xs-6");
    var curIdx = divs.index($(this));
    
    a=curIdx;
});