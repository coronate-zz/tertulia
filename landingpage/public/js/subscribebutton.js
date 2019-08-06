
/*----------------------------------------------------*/
/* Mail Button
------------------------------------------------------ */

var subscribe_button = document.querySelector(".subscribe_button_sb");
  
  subscribe_button.addEventListener('click', function(){
  var subscribing = document.querySelector(".subscribing_sb");
  var thanks = document.querySelector(".thanks_sb");
  var login = document.querySelector(".login_sb");

  subscribing.classList.add("subscribing_active_sb");
  subscribe_button.classList.add("subscribe_button_active_sb");
  setTimeout(function(){
    login.classList.add("login_active_sb");
  }, 1200);
  setTimeout(function(){
    thanks.classList.add("thanks_active_sb");
  }, 1400);

// To refresh mail after saving mail.
//  setTimeout(function(){
//    thanks.classList.remove("thanks_active_sb");
//    login.classList.remove("login_active_sb");
//    subscribing.classList.remove("subscribing_active_sb");
//    subscribe_button.classList.remove("subscribe_button_active_sb");
//  }, 4000);


});



function subscribeOnClick() {
  console.log("TESTING");
  var mail = document.querySelector(".login_sb").value;
  console.log(mail);

}



