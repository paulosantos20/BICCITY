/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
    
     /* button  Button */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#user"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
