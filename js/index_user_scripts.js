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
       PUBNUB_demo.publish({
    channel: 'node-red-toGW',
    message: {"msgType": 3, "nodeID": parseInt(document.getElementById("neo_nodeID").value) , "payload": document.getElementById("neo_payload").value}
}); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
