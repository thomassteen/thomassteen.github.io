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
    var temp = parseInt(data.current_value);
    //window.alert(temp);
   gauge.refresh(temp); 
    
}
    