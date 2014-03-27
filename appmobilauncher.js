(function(){
 var rand_id="2128144893";
 var appName = "";  //Name of your app
 var relName = "4.0.0";  //Rel of your app
 var isMobiusSite = false;
 var appUrl = "https://am-xdk2.s3.amazonaws.com/cust.429384d4-80e6-4863-a2a0-3e21644c636d/app.1bbcb8d9-9313-4280-a9e1-bac983efaf7e/3e734bc8-d228-4451-9c16-f8c8304fc051/PRODUCTION/yoursite/index.html";
 var appImageUrl = ""; //launcher icon link
 var isMobius = true; //set to false if it's not mobius app
 var autoLaunch = true;
 var gameWidth = "100%"; //width for the iframe
 var gameHeight = "100%"; //height for the iframe
 var iOS = (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) ? true : false;
 var iPad = (navigator.platform.indexOf("iPad") != -1) ? true : false;
 var android = navigator.userAgent.toLowerCase().indexOf("android") != -1 ? true : false;
 var mobileSafari = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
 var mobiusApp = "mobius://&CMD=RUNAPP&APP=" + encodeURIComponent(appName) + "&REL=" + encodeURIComponent(relName);
 
 
 //<![cdata[ 
 document.write("<div id='MobiusLaunch"+rand_id+"'></div>");
	  if(!autoLaunch){
		
		var tmp=document.createElement("img");
		tmp.src=appImageUrl;
		tmp.border=0;
		tmp.onclick=runMobius;
		document.getElementById("MobiusLaunch"+rand_id).appendChild(tmp);
		}
      document.write('<style>a.mobiusInstall {display:block; float:left; width:235px; height:35px; background:url("https://services.appmobi.com/html5/images/get_it_now.png") 0px 0px  no-repeat;} a.mobiusInstall:HOVER, a.mobiusInstall:FOCUS {background-position: 0px -35px;}</style><div id="MobiusInstallDiv'+rand_id+'" style="display:none"><div style=""><div style="background:black;opacity:.9;position:absolute;top:0px;left:0px;z-index:9998;height:460px;width:320px"></div><div style="background:transparent;position:absolute;top:0px;left:0px;z-index:9999;height:460px;width:320px"><div style="position:absolute;margin:auto;top:66px"><img src="https://services.appmobi.com/html5/images/prompt_logo.png"></div><div style="margin:18px;bottom:0px;width:270px;position:absolute;float:left;padding:8px;border:1px solid black;border-radius:6px;background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.4, rgb(0,0,0)),color-stop(0.73, rgb(51,51,51)));-webkit-box-shadow: inset 0px 0px 6px 0px rgba(0, 0, 0, .5)"><div id="Mobiusinstall'+rand_id+'" style=display:none><table width="100%" cellpadding=0 cellspacing=0><tr><td valign=top width=30px><img src="https://services.appmobi.com/html5/images/info_icon.png"></td><td valign=top width=10px style="background:url(\'https://services.appmobi.com/html5/images/vert_line-two_tone.png\');background-repeat:repeat-y">&nbsp;</td><td valign=top style="line-height:16px;font-size:14px;color:#fff;font-type:Arial">This content requires the mobiUs browser extension to run properly.<div style="height:5px;clear:both"></div><a href="javascript:;" class=\'mobiusInstall\' id=\'mobiusInstallLink'+rand_id+'\'></a></td></table></div><div id="Mobiusunavailable'+rand_id+'" style=display:block><table width="100%" cellpadding=0 cellspacing=0><tr><td valign=top width=30px><img src="https://services.appmobi.com/html5/images/alert_icon.png"></td><td valign=top width=10px style="background:url(\'https://services.appmobi.com/html5/images/vert_line-two_tone.png\');background-repeat:repeat-y">&nbsp;</td><td valign=top style="line-height:16px;font-size:14px;color:#fff;font-type:Arial">This content requires the mobiUs browser extension<span id="unavailable_android'+rand_id+'" style="display:none">, which is not yet available for Android</span>.</td></table></div></div></div></div></div>');
      document.write('<iframe id="detectframe'+rand_id+'" src="about:blank" width="0" height="0" style="display:none;width:1px;height:1px;position:absolute;bottom:1px;right:1px;"></iframe>');
      document.write('<iframe id="installframe'+rand_id+'" src="about:blank" width="0" height="0" style="display:none;width:1px;height:1px;position:absolute;bottom:1px;right:1px;"></iframe>')
 //]]>
 var installButton=document.getElementById('mobiusInstallLink'+rand_id);
 installButton.onclick=_mobiusDoInstall;
  
 function checkHTML5() {
     return !!document.createElement('canvas').getContext
 }
 function runApp() {
     if (checkHTML5()) {
         document.getElementById("MobiusLaunch"+rand_id).innerHTML='<iframe src="' + appUrl + '" width="' + gameWidth + '" height="' + gameHeight + '" frameborder=0></iframe>';
     }
     else if (mobileSafari) {
         document.location = appUrl;
     }
     else {
         alert("Your browser does not support the necessary features to run this application");
         document.write('<img src="' + appImageUrl + '" />');
     }
 }
 //Mobius app code
 var timestamp;
 function runMobius() {
 	if(!isMobius)
 	   return runApp();
     if ((iPad || iOS) && mobileSafari) {
			
             timestamp = new Date().getTime();
			// setCookie("_mobiusInstallTime",timestamp,20);
             setTimeout(function(){promptInstall()}, 2000); //3 seconds is more than enough delay
             document.getElementById("detectframe"+rand_id).src ="about:blank"; //invoking the protocol handler.
             document.getElementById("detectframe"+rand_id).src = mobiusApp; //invoking the protocol handler.
     }
     else if (android) {
         document.getElementById('unavailable_android'+rand_id).style.display="inline";
 		 showMobiusPlugin()
     }
     else {
         //showMobiusPlugin()
		 runApp();
     }
 }
 
 function promptInstall() {
     var now = Math.round(new Date().getTime()/1000);
	 var myStamp=Math.round(timestamp/1000)+2.5;
     if (myStamp+2.5 >= now) {
 		document.getElementById("Mobiusinstall"+rand_id).style.display="block";
 		document.getElementById("Mobiusunavailable"+rand_id).style.display="none";
        showMobiusPlugin()
     }
	 
 }
 function showMobiusPlugin() {
     document.getElementById("MobiusInstallDiv"+rand_id).style.display = "block";
 	 document.getElementById("MobiusLaunch"+rand_id).style.display = "none";
 }
 
function _mobiusDoInstall(){
	alert("After installing mobiUs from the app store, return to this screen and refresh. You should then be able to access this content.");
	document.getElementById("MobiusInstallDiv"+rand_id).style.display = "none";
	document.getElementById("MobiusLaunch"+rand_id).style.display = "block";
	document.getElementById("installframe"+rand_id).src = "http://itunes.apple.com/us/app/mobius/id453823727?mt=8";
	setTimeout(function(){runMobius()},1000);//Let's tell it to run again in 5 seconds;
}
function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	  {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
		{
		return unescape(y);
		}
	  }
}
function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

 
 if(autoLaunch)
    runMobius();
 })();