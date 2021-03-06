/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Send */
    $(document).on("click", ".uib_w_1", function(evt)
    {
        var payloadArray = document.getElementById("neo_payload").value.split("");
        var index;
        for (index = 0; index < payloadArray.length; ++index){
            payloadArray[index] = parseInt(payloadArray[index],16);
        }
            
        PUBNUB_demo.publish({
        channel: 'node-red-toGW',
        message: {"msgType": 3, "nodeID": parseInt(document.getElementById("neo_nodeID").value) , "payload":payloadArray}
}); 
    });
    
        /* button  #neo_wes_status */
    $(document).on("click", "#neo_wes_status", function(evt)
    {
        PUBNUB_demo.publish({
        channel: 'node-red-toGW',
        message: {"msgType": 16, "wesCmd": 2} 
    });
    
    });
     /* button  #neo_wes_start */
    $(document).on("click", "#neo_wes_start", function(evt)
    {
        PUBNUB_demo.publish({
        channel: 'node-red-toGW',
        message: {"msgType": 16, "wesCmd": 1} 
    });
    });
    
        /* button  #neo_wes_stop */
    $(document).on("click", "#neo_wes_stop", function(evt)
    {
        PUBNUB_demo.publish({
        channel: 'node-red-toGW',
        message: {"msgType": 16, "wesCmd": 0}  
    });
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
