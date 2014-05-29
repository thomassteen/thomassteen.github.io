var sensorvalue = 0;

function callback()
{
    //do nothing
}

function xively_upload_temp()
{
    var brewtemperature = document.getElementById("brew_temp").value;
    var steamtemperature = document.getElementById("steam_temp").value;

    xively.setKey('wgTSYj1e9fsmgkfbMmVNETghi2u7m7B7NYACQAcusBgLpBCl');
    xively.datastream.update ("1196460529", "brewtemp", {current_value: brewtemperature}, callback ());  
    xively.datastream.update ("1196460529", "steamtemp", {current_value: steamtemperature}, callback ());
}

function update_brew_temp(data)
{
    //window.alert("update called");
    document.getElementById("brew_temp").value = data["current_value"];
}

function update_steam_temp(data)
{
    //window.alert("update called");
    document.getElementById("steam_temp").value = data["current_value"];

}
    
function update_current_temp(data)
{
    //window.alert(data.current_value);
    var gauge = Gauges.getById('uib-justgage-0');
    var temp = parseInt(data.data);
    //window.alert(temp);
   gauge.refresh(temp); 
    
}

//function update_current_temp()
//{
//    var deviceID    = "55ff6b065075555327081787";
//    var accessToken = "9b0f6e091223cacbadb656ed3f7f98c424eebe41";
//    var getFunc = "boilertemp";
//    var json_value = 4;
//    
//    var requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/" + getFunc + "?access_token=" + accessToken;
//    $.getJSON(requestURL, function(json) {
//        json_value = parseInt(json.result);
//        var gauge = Gauges.getById('uib-justgage-0');
//        gauge.refresh(json_value); 
//    });
   // var temp = json_value;

    
    //window.alert(data.current_value);
    //var gauge = Gauges.getById('uib-justgage-0');
    //var temp = parseInt(data.current_value);
    //window.alert(temp);
   //gauge.refresh(temp); 
    
//}

function update_boiler_state(data)
{
    var myswitch = document.getElementById("af-flipswitch-0");
    //window.alert("jej");
    if (data.current_value == "0")
    {
        myswitch.checked = false;
        myswitch.refresh;
    //    window.alert(data.current_value);
    }
    if (data.current_value == "1")
    {
        myswitch.checked = true;
        myswitch.refresh;
    //    window.alert(data.current_value);
    }
}
    
function set_boiler_state()
{
    //window.alert("set boiler");
    xively.setKey('wgTSYj1e9fsmgkfbMmVNETghi2u7m7B7NYACQAcusBgLpBCl');
    var myswitch = document.getElementById("af-flipswitch-0");
    if (myswitch.checked){
        xively.datastream.update ("1196460529", "boilerstate", {current_value: "1"}, callback ());
    }
    if (!myswitch.checked){
        xively.datastream.update ("1196460529", "boilerstate", {current_value: "0"}, callback ());
    }
        
}