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