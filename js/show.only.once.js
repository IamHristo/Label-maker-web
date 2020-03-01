// First try with cookies

//        function setCookie(cname,cvalue,exdays) {
//  var d = new Date();
//  d.setTime(d.getTime() + (exdays*24*60*60*1000));
//  var expires = "expires=" + d.toGMTString();
//  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//}
//        document.cookie = "cookiename=cookievalue"


//function getCookie(cname) {
//  var name = cname + "=";
//  var decodedCookie = decodeURIComponent(document.cookie);
//  var ca = decodedCookie.split(';');
//  for(var i = 0; i < ca.length; i++) {
//    var c = ca[i];
//    while (c.charAt(0) == ' ') {
//      c = c.substring(1);
//    }
//    if (c.indexOf(name) == 0) {
//      return c.substring(name.length, c.length);
//    }
//  }
//  return "";
//}
//function checkCookie() {
//  var happy=getCookie("HappyNewYear");
//  if (happy != "") {
//    
//  } else {
//       isSeen="seen";
//      
//       setCookie("HappyNewYear", isSeen, 30);
//      jQuery("#some_element").click(function(){
//    var win = window.open();
//    win.location = 'HappyNewYear.html';
//    win.opener = null;
//    win.blur();
//    window.focus();
//});
//        
//  }
//}
        
//        Cookies.set('test', 'test', {secure: true}, {sameSite: 'lax'});

// Second try with local storage

function clickCounter() {
  
    
        window.open("HappyNewYear.html", '_blank');
    
}

function Test(){
         
         
             if (localStorage.isSeen) {
      localStorage.isSeen = "seen";
        
    } else {
      localStorage.isSeen = "not";
        document.getElementById('id011').style.display='block';
    }
         }