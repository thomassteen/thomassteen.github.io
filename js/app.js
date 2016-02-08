/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

function handleMessage(message){
    if (message.msgType == 82){
        alert(message.text);    
    }
    if (message.msgType == 80){
        alert(message.text);    
    }
    if (message.msgType == 81){
        alert(message.text);    
    }
    if (message.msgType == 96){
        alert(message.text);    
    }
    if (message.msgType == 97){
        PUBNUB_demo.subscribe({
            channel: 'node-red-fromGW'
        });
        
        var nodeID = prompt(message.text);
        if (nodeID!=="" && nodeID!==null){
            PUBNUB_demo.publish({
                channel: 'node-red-toGW',
                message: {"msgType": 16, "nodeId": parseInt(nodeID, 10) , "uidHex":message.uidHex } 
            });
        
        PUBNUB_demo.subscribe({
            channel: 'node-red-fromGW',
            message: handleMessage
        });
        } 
    }
}