
var errorcount = 0;
var notifierfadeouttime = 5000;
var notifiercleartime = 5000;
var fadeouttriggerclicks = 0;
var appzloggerclicks = 0;
var chatuiclickscounta = 0;
var intimgswitcha = 0;
var intimgtrafficlightsuixswitcha = 0;
var marqueecounta = 0;
var count = 0;
var disptextarr = [];
var _executingpage;
var g_arrMonth = [];
var g_arrDay = [];
var _global_session = 0;
var _has_message_prop = "";
var _has_stack_prop = "";
var _has_netscape_prop = "";
var _has_chrome_prop = "";
var _global_browser_name = "";
var _starttime = new Date();
var _currenttime = new Date();
var _lastupdatetime = new Date();
var elapsed_hrs = 0;
var elapsed_mnts = 0;
var elapsed_scnds = 0;
var elapsed_mllscnds = 0;
var _settingzmap = new Map();
var _map = new Map();
var _isbatteryinfotoggled = false;
var _defaultdialogbackgroundcolor = "#000";
var _global_logz_tree_arr = [];
var _bool_autoplay = true;
var _bool_loop = true;
var _bool_showvideocontrols = true;
var _bool_shuffle = true;
var _videofit = "cover";
var _currentvideo = "video.mp4";
var _currentmediaurl = "";
var _videotype = "video/mp4";
var _videotitle = "video";
var _mediatype = "audio";
var _mediatitles_arr = [];
var _mediafiles_arr = [];
var _global_mediaplaylistfiles_arr = [];
var _playlistcounta = 0;
var _media_types_loaded = 0;
var _calling_function_from_server = "server";
var _playlist_random_used_arr = [];
var _has_playlist_initialized = false; 
var _playlist_initialized_counta = 0; 
var _playlist_media_type = ""; 

window.onloadstart = function(){

}

document.onloadstart = function(){
//delete document.getElementsByTagName("head")[0].children[4];
}

$(document).ready(function(){
try{

appendapplogz("start loading...", "info");

showprogressdiv();

$("#divnav").html("");
$("#diveventsnotifier").html("");
$("#divapplogz").html(""); 

$("#btnlogin").css("display: none;");
$("#btnregister").css("display: none;");
$("#divapplogz").css("display: block;");
$("#diveventsnotifier").css("display: none;");
$("#divmarqueeuix").css("display: none;");
$("#lblalertz").css("display: none;");
$("#divmediainfo").css("display: none;");

_has_netscape_prop = window.hasOwnProperty("netscape");
_has_chrome_prop = window.hasOwnProperty("chrome");

if(_has_netscape_prop){

setfirefoxmozillasysinfo();
appendapplogz("using firefox mozilla browser", "info");
_global_browser_name = "firefox mozilla";

}else if(_has_chrome_prop){

setgooglechromesysinfo();
appendapplogz("using google chrome browser", "info");
_global_browser_name = "google chrome";

}else if(!_has_netscape_prop && !_has_chrome_prop){

setinternetexplorersysinfo();
appendapplogz("using internet explorer browser", "info");
_global_browser_name = "internet explorer";

}

setcallingpage();

resetstorage();

_starttime = getcurrentdatetime();
_currenttime = getcurrentdatetime();

elapsed_hrs = 0;
elapsed_mnts = 0;
elapsed_scnds = 0;
elapsed_mllscnds = 0;

getdeletetimelapsed();
getcreatetimelapsed();

setintervals();

settimeouts();

wireeventlisteners();

setbirthdate();

validatenumericinput();

//setinternetstatus();

//loadembedobjects();

//loadhtmldocument();

//loadxmldocument();

//loadjsondocument();

appendapplogz("finished loading.", "info");

}
catch(err)
{
logglobalerrors(err);
hideprogressdiv();
}

});

function setupcontrolzonload(){
try{

var _rdmn = Math.random().toString(30);
var _sanitized_rdmn = _rdmn.replace(".", "");
_global_session = _sanitized_rdmn;
var _lbl_rdm_session = '<span id="lbl_rdm_session">session id [ ' + _sanitized_rdmn + ' ] </span>';
$("#header").append(_lbl_rdm_session);
$("#lbl_rdm_session").attr("title", 'session id [ ' + _sanitized_rdmn + ' ]');

setstorages("session id", _global_session);
SetPersistentCookie("session id", _global_session);

var _global_session_storages = localStorage.getItem("session ids used");
if(_global_session_storages === null){
setstorages("session ids used", _global_session);
SetPersistentCookie("session ids used", _global_session);
}else{
var _prepend_session_id = _global_session_storages.concat(":" + _global_session);
setstorages("session ids used", _prepend_session_id);
SetPersistentCookie("session ids used", _prepend_session_id);
}

var _sidepanelimg = '<img src="images/verisign.bmp" id="imgverisign" class="imgverisign" title="verisign"/>';
_sidepanelimg += '<img src="images/kulimg.jpg" id="imgkulimg" class="imgkulimg" title="kulimg"/>';
_sidepanelimg += '<img src="images/cortana.gif" id="imgcortana" class="imgcortana" title="cortana"/>';
$("#divverisign").html(_sidepanelimg);

$("#divclientinfo").insertBefore($("#divverisign"));

var _clientinfoimg = '<img src="images/nextactive.png" id="imgclientinfo" class="imgclientinfo" title="hide client info"/>';
$("#header").append(_clientinfoimg);

$("#imgclientinfo").insertAfter($("#lbl_rdm_session"));

var _imgmenu = '<img src="images/previousactive.png" id="imgmenu" class="imgmenu" title="show menu"/>';
$("#header").append(_imgmenu);

$("#imgmenu").insertBefore($("#lbltitle"));

var _imgappzlogger = '<img src="images/appzlogger.ico" id="imgappzlogger" class="imgappzlogger" title="show appzlogger"/>';
$("#header").append(_imgappzlogger);

$("#imgappzlogger").insertBefore($("#imgmenu"));

var _imgnetworksettings = '<img src="images/blackcog.png" id="imgnetworksettings" class="imgnetworksettings" title="show settings"/>';
$("#header").append(_imgnetworksettings);

$("#imgnetworksettings").insertAfter($("#lbltitle"));

$("#divclientinfo").addClass("toggled");
$("#divnav").addClass("toggled");

$("#divverisign").css({

'display': 'none'
});

var _divverisign = document.getElementById("divverisign");
_divverisign.style.visibility = "hidden";
_divverisign.style.display = "none";

$("#divverisign").empty();

var _eventsnotifierimg = '<img src="images/previousactive.png" id="imgeventsnotifier" class="imgeventsnotifier" title="show events notifier"/>';
$("#body").append(_eventsnotifierimg);

$("#imgeventsnotifier").insertBefore($("#diveventsnotifier"));

var _imgmediamenu = '<img src="images/toggleoff.png" id="imgmediamenu" class="imgmediamenu" title="show media menu"/>';
$("#header").append(_imgmediamenu);

$("#imgmediamenu").insertAfter($("#imgnetworksettings"));

var _imgutethio = '<img src="images/help.gif" id="imgutethio" class="imgutethio" title="show utethio"/>';
$("#header").append(_imgutethio);

$("#imgutethio").insertAfter($("#imgmediamenu"));

//listen for imgutethio click. 
try{
document.getElementById("imgutethio").addEventListener("click", showutethiodialog, false);
appendapplogz("wired imgutethio Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for imgmediamenu click. 
try{
document.getElementById("imgmediamenu").addEventListener("click", showmediamenudialog, false);
appendapplogz("wired imgmediamenu Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for imgappzlogger click. 
try{
document.getElementById("imgappzlogger").addEventListener("click", showappzlogger, false);
appendapplogz("wired imgappzlogger Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for imgnetworksettings click. 
try{
document.getElementById("imgnetworksettings").addEventListener("click", showsettingzoptiondiv, false);
appendapplogz("wired imgnetworksettings Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}catch(err){
logglobalerrors(err);
}
}

function sanitizenumericinput(requeststr){
try{
var responsestr = "";
for (var i = 0; i < requeststr.length; i++){
var _char = requeststr.charAt(i);
var _isnumeric = $.isNumeric(_char);
if(_isnumeric){
responsestr += _char;
}
}
return responsestr;
}catch(err){
logglobalerrors(err);
}
}

function settimeouts(){
try{

setTimeout(function(){

updateuixsettingzfromdbonload();

setupcontrolzonload();

toggleclientinfodiv();

togglemenudiv();

togglediveventsnotifier();

createmenu();

hideprogressdiv();

initializedragndrop();

showmediamenudialog();

showvideodialog();

}, 1000);

setTimeout(function(){

switch(_executingpage){
case "amemba.html":

createtable();

//listen for click in btnsearch. 
try{
document.getElementById("btnsearch").addEventListener("click", searchrecords, false);
appendapplogz("wired btnsearch click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnrefresh.
try{
document.getElementById("btnrefresh").addEventListener("click", refreshtable, false);
appendapplogz("wired btnrefresh click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for select change in cbopagesize. 
try{
document.getElementById("cbopagesize").addEventListener("change", createtable, false);
appendapplogz("wired cbopagesize select change Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

break;
case "mathithio.html":

createtable();

//listen for click in btnsearch. 
try{
document.getElementById("btnsearch").addEventListener("click", searchrecordsbyjs, false);
appendapplogz("wired btnsearch click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnrefresh.
try{
document.getElementById("btnrefresh").addEventListener("click", searchrecordsbyjs, false);
appendapplogz("wired btnrefresh click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for select change in cbopagesize. 
try{
document.getElementById("cbopagesize").addEventListener("change", searchrecordsbyjs, false);
appendapplogz("wired cbopagesize select change Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for select change in cbosearchmode. 
try{
document.getElementById("cbosearchmode").addEventListener("change", tooglesearchmode, false);
appendapplogz("wired cbosearchmode select change Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnclearfilter.
try{
document.getElementById("btnclearfilter").addEventListener("click", clearfilter, false);
appendapplogz("wired btnclearfilter click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

loadsearchobjects();

tooglesearchmode();

break;
case "login.html":

try{
var _rdodatabaselocal = document.getElementById("rdodatabaselocal");
_rdodatabaselocal.checked = true;

var _rdobasiclogin = document.getElementById("rdobasiclogin");
_rdobasiclogin.checked = true;

var _chkndirikana = document.getElementById("chkndirikana");
_chkndirikana.checked = false;
}
catch(err)
{
logglobalerrors(err);
}

$("#imgswitchndirikana").on("click", function(){
var _chkndirikana = document.getElementById("chkndirikana");
var _imgtoggleswitch = document.getElementById("imgswitchndirikana");

if($("#imgswitchndirikana").hasClass("toggled")){

_imgtoggleswitch.src = "images/switchoff.png";

$("#imgswitchndirikana").removeClass("toggled");
_chkndirikana.checked = false;

}
else{

_imgtoggleswitch.src = "images/switchon.png";

$("#imgswitchndirikana").addClass("toggled");
_chkndirikana.checked = true;

}

});
break;
case "kwandikithiamemba.html":

$("#btnuserinfo").on("click", function(){

$("#divuserinfo").addClass("toggled");
$("#divuserinfo").css({

'position': 'relative',
'display': 'block',
'left': '0px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divpersonalinfo").removeClass("toggled");
$("#divpersonalinfo").css({

'position': 'relative',
'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#imguserinfo").attr("src", "images/tabimg.jpg");
$("#imgpersonalinfo").attr("src", "images/tabimg.png");

});

$("#btnpersonalinfo").on("click", function(){

$("#divpersonalinfo").addClass("toggled");
$("#divpersonalinfo").css({

'position': 'relative',
'display': 'block',
'left': '0px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divuserinfo").removeClass("toggled");
$("#divuserinfo").css({

'position': 'relative',
'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#imguserinfo").attr("src", "images/tabimg.png");
$("#imgpersonalinfo").attr("src", "images/tabimg.jpg");

});

break;
default:
setTimeout(function(){
hideprogressdiv();
}, 10000);
break;
}

$("#divapplogz").fadeOut(5000);
}, 5000);

setTimeout(function(){
switch(_executingpage){
case "chart.html":
createchart();

//listen for click event in btnrefresh.
try{
document.getElementById("btnrefresh").addEventListener("click", function(){

createchart();

}, false);
appendapplogz("wired btnrefresh click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

break;
case "tree.html":
createtree();

//listen for click event in btnrefresh.
try{
document.getElementById("btnrefresh").addEventListener("click", function(){

createtree();

}, false);
appendapplogz("wired btnrefresh click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

break;
}
}, 6000);

}catch(err){
logglobalerrors(err);
}
}

function setintervals(){
try{

setInterval(function(){
showcurrenttime();
}, 1000);

}catch(err){
logglobalerrors(err);
}
}

function wireeventlisteners(){
try{

//listen for click event in btnlogin. 
try{
document.getElementById("btnlogin").addEventListener("click", login, false);
appendapplogz("wired btnlogin Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnregister. 
try{
document.getElementById("btnregister").addEventListener("click", ongeramumemba, false);
appendapplogz("wired btnregister Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnprevious. 
try{
document.getElementById("btnprevious").addEventListener("click", navigatetable, false);
appendapplogz("wired btnprevious Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnnext. 
try{
document.getElementById("btnnext").addEventListener("click", navigatetable, false);
appendapplogz("wired btnnext Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for enter key event in document. 
try{
document.addEventListener("keypress", documententerkeyglobalhandler, false);
appendapplogz("wired document enter key Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgeventsnotifier.
try{
document.getElementById("imgeventsnotifier").addEventListener("click", togglediveventsnotifier, false);
appendapplogz("wired imgeventsnotifier click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in diveventsnotifier.
try{
document.getElementById("diveventsnotifier").addEventListener("click", hideeventnotifier, false);
appendapplogz("wired diveventsnotifier click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for enter key in txtconsoleinput. 
try{
document.getElementById("txtconsoleinput").addEventListener("keypress", webconsole, false);
appendapplogz("wired txtconsoleinput enter key Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

try{
var _diveventsnotifier = document.getElementById("diveventsnotifier");
_diveventsnotifier.setAttribute("title", "click to hide");
}
catch(err)
{
logglobalerrors(err);
}

}catch(err){
logglobalerrors(err);
}
}

function setcallingpage(){
try{

var url = this.document.URL;

var _encodeURIComponent = encodeURIComponent(url);


var _patharr = [];
_patharr = url .split("/");

var callingpagename = _patharr[4];

switch(callingpagename){
case "login.html":
 _executingpage = callingpagename;
break;
case "kwandikithiamemba.html":
 _executingpage = callingpagename;
break;
case "amemba.html":
 _executingpage = callingpagename;
break;
case "mathithio.html":
 _executingpage = callingpagename;
showprogressdiv();
break;
case "index.html":
 _executingpage = callingpagename;
break;
case "chart.html":
 _executingpage = callingpagename;
break;
case "tree.html":
 _executingpage = callingpagename;
break;
default:
 _executingpage = callingpagename;
break;
}

}
catch(err)
{
logglobalerrors(err);
}
}

function documententerkeyglobalhandler(e){
try{

var key = e.which || e.keycode;

if(key === 110){
nextmedia();
}

if(key === 112){
previousmedia();
}

if(key === 13){

var url = this.URL;

var _patharr = [];
_patharr = url .split("/");

var callingpagename = _patharr[4];

var callingelement = e.target.id;

switch(callingpagename){
case "login.html":
login();
break;
case "kwandikithiamemba.html":
ongeramumemba();
break;
case "mathithio.html":
if(callingelement === "txtcurrentmathithiopage"){
var _int_current_page = parseInt(document.getElementById("txtcurrentmathithiopage").value);
_current_page = _int_current_page;
createtable();
}
if(callingelement === "txtnamesearchstart"){
searchrecordsbyjs();
}
if(callingelement === "txtnamesearchend"){
searchrecordsbyjs();
}
if(callingelement === "txtnamesearchcontains"){
searchrecordsbyjs();
}
break;
default: 
break;
}

}

}
catch(err)
{
logglobalerrors(err);
}
}

function resetstorage(){
try{

var url = this.document.URL;

var _patharr = [];
_patharr = url .split("/");

var callingpagename = _patharr[4];

switch(callingpagename){
case "login.html":
localStorage.removeItem("username");
sessionStorage.removeItem("username");
$("#txtritwa").focus(); 
break;
case "kwandikithiamemba.html":
$("#txtritwa").focus();
var _pwd = Math.random().toString(30);
var _sanitizedpwd = _pwd.replace(".", "");
$("#txtpassword").val(_sanitizedpwd);
var _txtpwd = $("#txtpassword");

$("#divuserinfo").addClass("toggled");
$("#divuserinfo").css({

'position': 'relative',
'display': 'block',
'left': '0px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divpersonalinfo").removeClass("toggled");
$("#divpersonalinfo").css({

'position': 'relative',
'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

break;
case "murungamili.html":
$("#txtconsoleinput").focus();
break;
default:
break;
}

}
catch(err)
{
logglobalerrors(err);
}
}

function showcurrenttime(){
try{
var d = new Date();

g_arrMonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

g_arrDay = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

var strmonthname = g_arrMonth[d.getMonth()];
var strdayname = g_arrDay[d.getDay()];

var datestring = ("0" + d.getDate()).slice(-2) + "-" + strdayname + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + strmonthname + "-" + d.getFullYear();

var timestring = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

$("#lblfooterdate").html(datestring);
$("#lblfooterdate").attr("title", datestring);
$("#lblfootertime").html(timestring);
$("#lblfootertime").attr("title", timestring);

var strcopyright = "Copyright (c) Daksen. " + d.getFullYear() + " All rights reserved"
$("#lblcopyright").html(strcopyright);
$("#lblcopyright").attr("title", strcopyright);
 
}
catch(err)
{
logglobalerrors(err);
}
}

function getcurrentdatetime(){
try{
var d = new Date();

var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear();

var timestring = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2) + ":" + ("0" + d.getMilliseconds()).slice(-2); 
 
var concatinatedtime = datestring + " " + timestring;

return concatinatedtime;
}
catch(err)
{
logglobalerrors(err);
}
}

function createmenu(){
try{

appendapplogz("start creating menu...", "info");

var strmenu = "";

var sessionloggedinusername = localStorage.getItem("username");

if(sessionloggedinusername == null){

strmenu = '<a id="btnnavlogin" href="login.html" title="kiruguri">kiruguri</a>' +
'<a id="btnnavkuliganirwa_kiruguri" href="kuliganirwakiruguri.html" title="kuliganirwa kiruguri">kuliganirwa kiruguri</a>';

}else{

strmenu = '<a id="btnnavhome" href="index.html" title="kiambiririo">kiambiririo</a>' +
'<a id="btnnavregistration" href="kwandikithiamemba.html" title="kwandikithiamemba">kwandikithia memba</a>' +
'<a id="btnnavamemba" href="amemba.html" title="amemba">amemba</a>' +
'<a id="btnnavmairane" href="mairane.html" title="mairane">mairane</a>' +
'<a id="btnnavlogout" title="kirikio">kirikio</a>';

}

$("#divnav").html(strmenu);

var strsubmenu = "";
strsubmenu += '<div class="divlogslider">';
strsubmenu += '<a id="btnnavmurungamili" title="murungamili" href="murungamili.html"><img src="images/caret.png" class="imglogslider" title="murungamili"/><a/>';
strsubmenu += '<a id="btnnavmathithio" title="mathithio" href="mathithio.html"><img src="images/log.png" class="imglogslider" title="mathithio"/><a/>';
strsubmenu += '<a id="btnnavchart" title="chart" href="chart.html"><img src="images/chart.ico" class="imglogslider" title="chart"/><a/>';
strsubmenu += '<a id="btnnavtree" title="tree" href="tree.html"><img src="images/tree.ico" class="imglogslider" title="tree"/><a/>';
strsubmenu += '</div>';

$("#divnav").append(strsubmenu);

//listen for click event in btnnavlogout.
try{
document.getElementById("btnnavlogout").addEventListener("click", logout, false);
appendapplogz("wired btnnavlogout click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

appendapplogz("finished creating menu.", "info");

}
catch(err)
{
logglobalerrors(err);
}
}

function logglobalerrors(errobj){
try{
var _msg = "";
_has_message_prop = errobj.hasOwnProperty("message");
_has_stack_prop = errobj.hasOwnProperty("stack");

if(_has_message_prop){
_msg = errobj.message;
}
if(_has_stack_prop){
_msg = errobj.stack;
}
if(_has_netscape_prop){
_msg += "<br/>" + errobj.stack;
}

appendapplogz(_msg, "error");

logtodb(_msg);

}
catch(err)
{
console.error(err.message);
}
}

function hideeventnotifier(){
try{
$("#diveventsnotifier").fadeOut(3000);
//$("#diveventsnotifier").css("display: none;"); 
//$("#diveventsnotifier").hide();

document.getElementById("imgeventsnotifier").src = "images/previousactive.png";
document.getElementById("imgeventsnotifier").title = "show events notifier";

$("#diveventsnotifier").removeClass("toggled");
$("#diveventsnotifier").css({

'position': 'absolute',
'display': 'none',
'right': '-9999px',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#imgeventsnotifier").css({

'float': 'right',
'right': '3%',
'bottom': '1%'
});

}
catch(err)
{
logglobalerrors(err);
}
}

function cleardiveventnotifier(){
try{
$("#diveventsnotifier").fadeOut(1000);
$("#diveventsnotifier").empty();
//$("#diveventsnotifier").hide();

document.getElementById("imgeventsnotifier").src = "images/previousactive.png";
document.getElementById("imgeventsnotifier").title = "show events notifier";

$("#diveventsnotifier").removeClass("toggled");
$("#diveventsnotifier").css({

'position': 'absolute',
'display': 'none',
'right': '-9999px',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#imgeventsnotifier").css({

'float': 'right',
'right': '3%',
'bottom': '1%'
});

}
catch(err){
logglobalerrors(err);
}
}

function showeventsnotifierdiv(error){
try{

var aArgs = showeventsnotifierdiv.arguments;
var nArgs = showeventsnotifierdiv.arguments.length;
var eventtype = (nArgs > 1) ? aArgs[1] : "info";

var errodiv = "";

switch(eventtype){
case "error":
errodiv = '<div class="divnotifier" style="color: #F8300F;">';
break;
case "info":
errodiv = '<div class="divnotifier" style="color: #09E6EF;">';
break;
case "warning":
errodiv = '<div class="divnotifier" style="color: #F8F509;">';
break;
}

errodiv += '<span class="lblnotifier">';
var currentdatetime = getcurrentdatetime();
errodiv += currentdatetime + " : " + error;
errodiv += '</span>';
errodiv += '</div>';

$("#diveventsnotifier").prepend(errodiv);  
//$("#diveventsnotifier").css("display: block;");
$("#diveventsnotifier").show();
$("#diveventsnotifier").fadeIn(1000);

$("#diveventsnotifier").addClass("toggled");
$("#diveventsnotifier").css({

'position': 'absolute',
'display': 'block',
'right': '3%',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

document.getElementById("imgeventsnotifier").src = "images/nextactive.png";
document.getElementById("imgeventsnotifier").title = "hide events notifier";

var _diveventsnotifier = document.getElementById("diveventsnotifier");
var _div_height = _diveventsnotifier.clientHeight;
var _image_height = _div_height + 5;
var _formatted_image_height = _image_height + "px";

$("#imgeventsnotifier").css({

'float': 'right',
'right': '22%',
'bottom': _formatted_image_height
});

switch(eventtype){
case "error":
$(".divnotifier .lblnotifier").css("color: red");
break;
case "info":
$(".divnotifier .lblnotifier").css("color: blue");
break;
case "warning":
$(".divnotifier .lblnotifier").css("color: yellow");
break;
}

if(eventtype !== null){
syseventslogger(error, eventtype);
logtodb(error, eventtype);
}

}catch(err){
console.error(err.message);
}
}

function appendapplogz(error, eventtype){
try{

var errodiv = "";
switch(eventtype){
case "error":
errodiv = '<div class="divnotifier" style="color: #F8300F;"><img src="images/error.png" class="imgnotifier"/>';
break;
case "info":
errodiv = '<div class="divnotifier" style="color: #09E6EF;"><img src="images/info.png" class="imgnotifier"/>';
break;
case "warning":
errodiv = '<div class="divnotifier" style="color: #F8F509;"><img src="images/warning.png" class="imgnotifier"/>';
break;
}

var currentdatetime = getcurrentdatetime();
errodiv += currentdatetime + " : " + error;
errodiv += '</div>';

$("#divapplogz").prepend(errodiv);  

appendtologztreearr(errodiv, eventtype);

errorcount++;

logtodb(error, eventtype);

}catch(err){
console.error(err.message);
}
}

function syseventslogger(error, eventtype){
try{
  
var errodiv = "";
switch(eventtype){
case "error":
errodiv = '<div class="divnotifier" style="color: #F8300F;"><img src="images/error.png" class="imgnotifier"/>';
break;
case "info":
errodiv = '<div class="divnotifier" style="color: #09E6EF;"><img src="images/info.png" class="imgnotifier"/>';
break;
case "warning":
errodiv = '<div class="divnotifier" style="color: #F8F509;"><img src="images/warning.png" class="imgnotifier"/>';
break;
}
 
var currentdatetime = getcurrentdatetime();
errodiv += currentdatetime + " : " + error;
errodiv += '</div>';

$("#divapplogz").prepend(errodiv); 

appendtologztreearr(errodiv, eventtype);

errorcount++;

}catch(err){
console.error(err.message);
}
}

function showappzlogger(){
try{

if(appzloggerclicks === 0){
$("#divapplogz").fadeIn(2000);
//$("#divapplogz").css("display: block;"); 
//$("#divapplogz").show();
appzloggerclicks = 1;
document.getElementById("imgappzlogger").src = "images/appzlogger.png";
document.getElementById("imgappzlogger").title = "hide appz logger";
}else{
$("#divapplogz").fadeOut(2000);
//$("#divapplogz").css("display: none;");
//$("#divapplogz").hide();
appzloggerclicks = 0;
document.getElementById("imgappzlogger").src = "images/appzlogger.jpg";
document.getElementById("imgappzlogger").title = "show appz logger";
}  
}
catch(err)
{
logglobalerrors(err);
}
}

function logout(){
try{

showeventsnotifierdiv("sanitizing storages...");

localStorage.removeItem("username");
sessionStorage.removeItem("username");

showeventsnotifierdiv("log out succeeded. redirecting...");

$("#body").fadeOut(3000);

setTimeout(function(){
window.location.href = "login.html";
}, 4000);
 
}
catch(err)
{
logglobalerrors(err);
}
}

function SetPersistentCookie(kukiname, kukivalue){
try{
var dateNow = new Date();
var dateExpire = new Date();
dateExpire.setTime(dateNow.getTime() + 10000 * 60 * 60 * 24 * 365);
var url = window.location.href;
var _patharr = [];
_patharr = url .split("/");
var _domain = _patharr[2];
//mSetCookie(kukiname, kukivalue, true, dateExpire, window.location.href, _domain, false);
mSetCookie(kukiname, kukivalue);

}
catch(err)
{
console.error(err.message);
}
}
 
function mSetCookie(tName, vValue){
try{
	var aArgs = mSetCookie.arguments;
	var nArgs = mSetCookie.arguments.length;
	var bAppendToCurrentCookie = (nArgs > 2) ? aArgs[2] : false;
	var expires = (nArgs > 3) ? aArgs[3] : null;
	//var path = (nArgs > 4) ? aArgs[4] : "/";
	var path = (nArgs > 4) ? aArgs[4] : window.location.href;
	var domain = (nArgs > 5) ? aArgs[5] : null;
	var secure = (nArgs > 6) ? aArgs[6] : false;

	var _existingkookie = GetCookie(tName);
	
	if (bAppendToCurrentCookie && "" != _existingkookie){
		vValue = _existingkookie + "," + vValue;
	}

	document.cookie = tName + "=" + vValue +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");

}
catch(err)
{
logglobalerrors(err);
}
}

function StrGetCookie(tName){
return GetCookie(tName, "na");
}

function GetCookie(tName, DefaultReturn){
	if ("undefined" == typeof(DefaultReturn))
		DefaultReturn = "";

	var tArg = tName + "=";
	var nArgLen = tArg.length;
	var nCookieLen = document.cookie.length;
	var nStartPos = 0;

	while (nStartPos < nCookieLen)
		{
		var nEndPos = nStartPos + nArgLen;

		if (document.cookie.substring(nStartPos, nEndPos) == tArg)
			{
			var n2EndPos = document.cookie.indexOf(";", nEndPos);
			if (n2EndPos == -1)
				{
				n2EndPos = document.cookie.length;
				}
			return unescape(document.cookie.substring(nEndPos, n2EndPos));
			}

		nStartPos = document.cookie.indexOf(" ", nStartPos) + 1;
		if (nStartPos == 0)
			break;
		}

	return DefaultReturn;
}

function deleteCookie(tName){
var exp = new Date();
exp.setDate (exp.getDate() - 10);
mSetCookie(tName, "", false, exp);
}

function setstorages(key, value){
try{
localStorage.setItem(key, value);
sessionStorage.setItem(key, value);
}
catch(err)
{
logglobalerrors(err);
}
}

function getstorage(key, defaultreturnvalue){
try{
var _value = "";
_value = localStorage.getItem(key);
if(_value == null || _value == undefined){
return defaultreturnvalue;
}
return _value;
}
catch(err)
{
logglobalerrors(err);
}
}

function showprogressdiv(){
try{

$("#divprogress").fadeIn(1000);
$("#divprogress").css("display: block;"); 
$("#divprogress").show();

var _progressdiv = $("#divprogress")[0];
var _progressimg = _progressdiv.childNodes[1];

if(_progressimg === null || _progressimg === undefined){
var _progressimg = '<img src="images/cortana.gif" id="imgprogress" class="imgprogress" title="progress"/>';
var _imgloading = '<img src="images/loading.png" id="imgloading" class="imgloading" title="loading"/>';
var _imgloadingprogress = '<img src="images/loading.jpg" id="imgloadingprogress" class="imgloadingprogress" title="loading"/>';
$("#divprogress").append(_progressimg);
$("#divprogress").append(_imgloading);
$("#divprogress").append(_imgloadingprogress);

$("#imgcortana").css({

'position': 'relative',
'float': 'left',
'clear': 'both',
'width': '50%',
'height': '50%'
});

$("#imgprogress").css({

'position': 'relative',
'float': 'left',
'clear': 'both',
'left': '35%',
'width': 'auto',
'height': 'auto'
});

$("#imgloadingprogress").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '35%'
});

$("#imgloading").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '35%'
});

$("#imgloadingprogress").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '35%'
});

}

var _imgcancelprogress = document.getElementById("imgcancelprogress");
if( _imgcancelprogress === null ||  _imgcancelprogress === undefined){
var _strimgcancelprogress = '<img src="images/cancelprogress.png" id="imgcancelprogress" class="imgcancelprogress" title="cancel progress"/>';
$("#divprogress").append(_strimgcancelprogress);
}

$("#imgcancelprogress").css({

'position': 'relative',
'display': 'block',
'right': '1px',
'top': '1px',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#imgcancelprogress").on("click", function(){
 hideprogressdiv();
});

}
catch(err)
{
logglobalerrors(err);
}
}

function showprogresstext(_strprogress){
try{

var _divprogresstext = document.getElementById("divprogresstext");

if(_divprogresstext === null || _divprogresstext === undefined){
var _progresstextdiv = '<div id="divprogresstext">' + _strprogress + '</div>';
$("#divprogress").append(_progresstextdiv);
}else{
$("#divprogresstext").html(_strprogress);
}

}
catch(err)
{
logglobalerrors(err);
}
}

function updateprogresscontrols(_percentage, _item_remaining, _timelapsed, _pos, _totalrecordcount){
try{

var _divpercentage = document.getElementById("divpercentage");
var _rangepercentage = document.getElementById("rangepercentage");
var _divitemremaining  = document.getElementById("divitemremaining");
var _divtimelapsed  = document.getElementById("divtimelapsed");

if(_divpercentage === null || _divpercentage === undefined){
var _percentagediv = '<div id="divpercentage">' +  _percentage + '</div>';
$("#divprogress").append(_percentagediv);
}else{
$("#divpercentage").html(_percentage);
}

if(_divitemremaining === null || _divitemremaining === undefined){
var _itemremainingdiv = '<div id="divitemremaining">' +  _item_remaining + '</div>';
$("#divprogress").append(_itemremainingdiv);
}else{
$("#divitemremaining").html(_item_remaining);
}

if(_divtimelapsed === null || _divtimelapsed === undefined){
var _timelapseddiv = '<div id="divtimelapsed">' +  _timelapsed + '</div>';
$("#divprogress").append(_timelapseddiv);
}else{
$("#divtimelapsed").html(_timelapsed);
}

if(_rangepercentage === null || _rangepercentage === undefined){
var _percentagerange = '<input id="rangepercentage" disabled="disabled" type="range" max="'+ _totalrecordcount +'" min="0" value="'+ _pos +'" step="1" orient="vertical" />';
$("#divprogress").append(_percentagerange);
}else{
_rangepercentage = document.getElementById("rangepercentage");
_rangepercentage.value = _pos;
}

}
catch(err)
{
logglobalerrors(err);
}
}

function hideprogressdiv(){
try{

var _divprogress = document.getElementById("divprogress");
var _divpercentage = document.getElementById("divpercentage");
var _rangepercentage = document.getElementById("rangepercentage");
var _divitemremaining  = document.getElementById("divitemremaining");
var _divtimelapsed  = document.getElementById("divtimelapsed");
var _divprogresstext = document.getElementById("divprogresstext");

$("#divprogress").fadeOut(3000);
//$("#divprogress").css("display: none;");
//$("#divprogress").hide();

if(_divprogresstext !== null && _divprogresstext !== undefined){
_divprogress.removeChild(_divprogresstext);
}

if(_divpercentage !== null && _divpercentage !== undefined){
_divprogress.removeChild(_divpercentage);
}

if(_divitemremaining !== null && _divitemremaining !== undefined){
_divprogress.removeChild(_divitemremaining);
}

if(_divtimelapsed !== null && _divtimelapsed !== undefined){
_divprogress.removeChild(_divtimelapsed);
}

if(_rangepercentage !== null && _rangepercentage !== undefined){
_divprogress.removeChild(_rangepercentage);
}

}
catch(err)
{
logglobalerrors(err);
}
}

function onimageuploaded(){
try{

cleardiveventnotifier();

var _fileuploda = $("#txtfileuploda");

var _uplodafilez = _fileuploda[0].files[0];

console.info("name [ " + _uplodafilez.name + " ]");
console.info("size [ " + _uplodafilez.size + " ]");
console.info("type [ " + _uplodafilez.type + " ]");
console.info("FullYear [ " + _uplodafilez.lastModifiedDate.getFullYear() + " ]");
console.info("Month [ " + _uplodafilez.lastModifiedDate.getMonth() + " ]");
console.info("Day [ " + _uplodafilez.lastModifiedDate.getDay() + " ]");
console.info("Hours [ " + _uplodafilez.lastModifiedDate.getHours() + " ]");
console.info("Minutes [ " + _uplodafilez.lastModifiedDate.getMinutes() + " ]");
console.info("Seconds [ " + _uplodafilez.lastModifiedDate.getSeconds() + " ]");

var _file_name = _uplodafilez.name;
console.info("_file_name [ " + _file_name + " ]");
var _file_ext = _file_name.lastIndexOf(".");
console.info("_file_ext [ " + _file_ext + " ]");
var _file_prfx = _file_name.substring(_file_name.lastIndexOf(".") + 1);
console.info("_file_prfx [ " + _file_prfx + " ]");

var _valid_image_extensions = new Array("jpg", "JPEG", "bmp", "png", "ico", "gif", "x-icon");

var i = 0;
var is_img_ext_valid = false;
var iCount = _valid_image_extensions.length;

while (i < iCount){
var _v_i_e = _valid_image_extensions[i];
_v_i_e = _v_i_e.toLowerCase();
_file_prfx = _file_prfx.toLowerCase();
if (_v_i_e === _file_prfx){
is_img_ext_valid = true;
}
i++;
}

var _sizeinbytes = parseFloat(_uplodafilez.size);
var _sizeinkb = _sizeinbytes/1000;
var _sizeinmb = _sizeinbytes/1000/1000;
var _sizeingb = _sizeinbytes/1000/1000/1000;

console.info("_sizeinbytes [ " + _sizeinbytes + " ]");
console.info("_sizeinkb [ " + _sizeinkb + " ]");
console.info("_sizeinmb [ " + _sizeinmb + " ]");
console.info("_sizeingb [ " + _sizeingb + " ]");

var _fl_size = 0;

if(_sizeinbytes < 1000){
_fl_size = _sizeinbytes;
_fl_size = _fl_size + " bytes";
}else if(_sizeinbytes >= 1000 && _sizeinkb < 1000){
_fl_size = _sizeinkb;
_fl_size = _fl_size + " KB";
}else if(_sizeinkb >= 1000 && _sizeinmb < 1000){
_fl_size = _sizeinmb;
_fl_size = _fl_size + " MB";
}else if(_sizeinmb >= 1000){
_fl_size = _sizeingb;
_fl_size = _fl_size + " GB";
}

var _imginfo = "<span class='imginfo'>name: " + _uplodafilez.name + "</span>";
_imginfo += "<span class='imginfo'>size: " + _fl_size + "</span>";
_imginfo += "<span class='imginfo'>type: " + _uplodafilez.type + "</span>";
_imginfo += "<span class='imginfo'>last modified date: " + _uplodafilez.lastModifiedDate + "</span>";

$("#divimginfo").html(_imginfo);

var urlimg = "images/" + _uplodafilez.name;

var _file = $("#imgfileuploada")[0];

if(is_img_ext_valid){

_file.alt = _uplodafilez.name;
_file.src = urlimg;
_file.title = _uplodafilez.name;
_file.width = 20;
_file.height = 20;
_file.isMap = true;

showeventsnotifierdiv("file upload successfull...", "info");

}else{

showeventsnotifierdiv("file not an image...", "error");

}

}catch(err){
logglobalerrors(err);
}
}

function onmediauploaded(){
try{

cleardiveventnotifier();

var _file = $("#vdvideo")[0];
_file.currentSrc = "";

var _fileuploda = $("#txtvideofileuploda");

var _uplodafilez = _fileuploda[0].files[0];

console.info("name [ " + _uplodafilez.name + " ]");
console.info("size [ " + _uplodafilez.size + " ]");
console.info("type [ " + _uplodafilez.type + " ]");
console.info("FullYear [ " + _uplodafilez.lastModifiedDate.getFullYear() + " ]");
console.info("Month [ " + _uplodafilez.lastModifiedDate.getMonth() + " ]");
console.info("Day [ " + _uplodafilez.lastModifiedDate.getDay() + " ]");
console.info("Hours [ " + _uplodafilez.lastModifiedDate.getHours() + " ]");
console.info("Minutes [ " + _uplodafilez.lastModifiedDate.getMinutes() + " ]");
console.info("Seconds [ " + _uplodafilez.lastModifiedDate.getSeconds() + " ]");

var _file_name = _uplodafilez.name;
console.info("_file_name [ " + _file_name + " ]");
var _file_ext = _file_name.lastIndexOf(".");
console.info("_file_ext [ " + _file_ext + " ]");
var _file_prfx = _file_name.substring(_file_name.lastIndexOf(".") + 1);
console.info("_file_prfx [ " + _file_prfx + " ]");

var _valid_image_extensions = new Array("mp4", "avi", "flv", "vob", "mkv", "mp3", "ogg", "wav", "m4a");

var i = 0;
var is_img_ext_valid = false;
var iCount = _valid_image_extensions.length;

while (i < iCount){
var _v_i_e = _valid_image_extensions[i];
if (_v_i_e === _file_prfx){
is_img_ext_valid = true;
}
i++;
}

var _sizeinbytes = parseFloat(_uplodafilez.size);
var _sizeinkb = _sizeinbytes/1000;
var _sizeinmb = _sizeinbytes/1000/1000;
var _sizeingb = _sizeinbytes/1000/1000/1000;

console.info("_sizeinbytes [ " + _sizeinbytes + " ]");
console.info("_sizeinkb [ " + _sizeinkb + " ]");
console.info("_sizeinmb [ " + _sizeinmb + " ]");
console.info("_sizeingb [ " + _sizeingb + " ]");

var _fl_size = 0;

if(_sizeinbytes < 1000){
_fl_size = _sizeinbytes;
_fl_size = _fl_size + " bytes";
}else if(_sizeinbytes >= 1000 && _sizeinkb < 1000){
_fl_size = _sizeinkb;
_fl_size = _fl_size + " KB";
}else if(_sizeinkb >= 1000 && _sizeinmb < 1000){
_fl_size = _sizeinmb;
_fl_size = _fl_size + " MB";
}else if(_sizeinmb >= 1000){
_fl_size = _sizeingb;
_fl_size = _fl_size + " GB";
}

var _imginfo = "<span class='imginfo'>name: " + _uplodafilez.name + "</span>";
_imginfo += "<span class='imginfo'>size: " + _fl_size + "</span>";
_imginfo += "<span class='imginfo'>type: " + _uplodafilez.type + "</span>";
_imginfo += "<span class='imginfo'>last modified date: " + _uplodafilez.lastModifiedDate + "</span>";

$("#divmediainfo").html(_imginfo);

if(is_img_ext_valid){
 
var _video_type = _uplodafilez.type;
var _video_name = _uplodafilez.name;

_currentvideo = _video_name;
_videotype = _video_type;
 
configuremediaonupload(_currentvideo);

updatevideosettingstodbstorage("currentvideo", _currentvideo);
updatevideosettingstodbstorage("videotype", _videotype);

showeventsnotifierdiv("file upload successfull...", "info");

}else{

showeventsnotifierdiv("file not media...", "error");

}

$("#divmediainfo").css("display: block;");

}catch(err){
logglobalerrors(err);
}
}

function configuremediaonupload(videoname){
try
{

var _arrmediafiles = [];
var _strcurrentmediafile = "";
var _nextmediafile = "";
var _currpos = 0;
var _nextmediafilenameonly = "";
var _doescurrentvideoexistinarr = false;
_strcurrentmediafile = videoname;

for(i = 0; i < _global_mediaplaylistfiles_arr.length; i++){
_arrmediafiles.push(_global_mediaplaylistfiles_arr[i]);
}

if(_arrmediafiles.length == 0) return;

for(i = 0; i < _arrmediafiles.length; i++){
var _media_file = _arrmediafiles[i].medianame;
if(_media_file === _strcurrentmediafile){
_currpos = i;
_doescurrentvideoexistinarr = true;
break;
}
}

if(!_doescurrentvideoexistinarr){
_strcurrentmediafile = document.getElementById("cbocurrentvideo").value;
for(i = 0; i < _arrmediafiles.length; i++){
var _media_file = _arrmediafiles[i].medianame;
if(_media_file === _strcurrentmediafile){
_currpos = i;
break;
}
}
}

var _mediafilescount = _arrmediafiles.length;
var _nextpos = _currpos;
var _intnextpos = _nextpos;
if(_nextpos > (_mediafilescount - 1)){
_nextmediafile = _arrmediafiles[0].medianame;
_nextmediafilenameonly = _arrmediafiles[0].medianame;
_mediatype =  _arrmediafiles[0].mediatype;
}
if(_nextpos <= (_mediafilescount - 1)){
_nextmediafile = _arrmediafiles[_intnextpos].medianame;
_mediatype =  _arrmediafiles[_intnextpos].mediatype;
}

if(!_doescurrentvideoexistinarr){
buildvideo(_nextmediafilenameonly);
}else{
switch(_mediatype){
case "series":
_nextmediafile = _arrmediafiles[_intnextpos].mediafoldername + "/" + _nextmediafile;
break;
}
buildvideofromplaylist(_nextmediafile);
}

}
catch(err)
{
logglobalerrors(err);
}
}

function getunikid(){
try
{
var _pwd = Math.random().toString(30);
var _sanitizedpwd = _pwd.replace(".", "");
return _sanitizedpwd;
}
catch(err)
{
logglobalerrors(err);
}
}

function getloggedinuser(){
var _loggedinuser = "";
try
{
if(sessionStorage.getItem("username") != null){
_loggedinuser = sessionStorage.getItem("username");
}
return _loggedinuser;
}
catch(err)
{
console.log(err.message);
syseventslogger(err);
return _loggedinuser;
}
}

function setinternetstatus(){
try{

var _internetlocation = "wwww.google.co.ke"

$.ajax({ 
url: _internetlocation,
type: "GET",
dataType: "text",
async: !0,
global: !0,
success: function (serverresponseresult, serverresponsestatus, serverresponseobj){
//console.info("status code [ " + serverresponseobj.status + " ]");
//console.info("status text [ " + serverresponseobj.statusText + " ]");
//console.info("server response status [ " + serverresponsestatus + " ]");

var _imgonline = '<img id="imgonline" class="imginternetstatus" title="online" src="images/online.ico"/><span id="lblonline" class="lblinternetstatus" title="online">online</span>'
$("#footer").append(_imgonline);

var _html = $.parseHTML(serverresponseresult);

$.each(_html, function (i, val){

//console.info(i);
//console.info(val);
});


},
error: function (serverresponseobj, serverresponsestatus, statustext){
//console.error("status code [ " + serverresponseobj.status + " ]");
//console.error("status text [ " + statustext + " ]");
//console.error("server response status [ " + serverresponsestatus + " ]");

var _imgoffline = '<img id="imgoffline" class="imginternetstatus" title="offline" src="images/offline.ico"/><span id="lbloffline" class="lblinternetstatus" title="offline">offline</span>'
$("#footer").append(_imgoffline);

}
});

}
catch(err)
{
logglobalerrors(err);

var _imgoffline = '<img id="imgoffline" class="imginternetstatus" title="offline" src="images/offline.ico"/><span id="lbloffline" class="lblinternetstatus" title="offline">offline</span>'
$("#footer").append(_imgoffline);
}

}

function setbirthdate(){
try{

var _d = new Date();
var _intyr = _d.getFullYear();
var _intmnth = _d.getMonth();
var _intday = _d.getDate();
_intmnth = _intmnth + 1;

if(_intmnth < 10){
_intmnth = "0" + _intmnth;
}
if(_intday < 10){
_intday = "0" + _intday;
}
var _eighteenyrs = _intyr - 18;
var _eighteenyears = _eighteenyrs + "-" + _intmnth + "-" + _intday;
$("#txtntukuyakuchiarwa").val(_eighteenyears);

}
catch(err)
{
logglobalerrors(err);
}
}

function validatenumericinput(){
try{

var _inputnumberelements = document.getElementsByTagName("input");

$(_inputnumberelements).each(function(){


var _type = $(this).attr('type');

if(_type === "number"){

$(this).on("focusout",function(){

var _this = $(this)[0];
var _value = $(this)[0].value;
//var _val = $(this)[0].val();
var _name = $(this)[0].name;

var _sender = document.getElementById(_name);

var _sanitizedresponse = sanitizenumericinput(_value);
$(this).value = _sanitizedresponse;

});
}
});


}
catch(err)
{
logglobalerrors(err);
}
}

function setinternetexplorersysinfo(){
try{

var _navigator = window.navigator;

if(_navigator !== undefined){

var _clientInformation = "";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/generalinfo.png' id='imggeneralinfo' title='General Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>General Info</span><img src='images/switchoff.png' id='imgswitchgeneralinfo' title='show general info' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divgeneralinfo' class='divsysinfocontent'>";

var _appCodeName = _navigator.appCodeName;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appCodeName [ " + _appCodeName + " ]</span></div>";

var _appName = _navigator.appName;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appName [ " + _appName + " ]</span></div>";

var _appVersion = _navigator.appVersion;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appVersion [ " + _appVersion + " ]</span></div>";

var _browserLanguage = _navigator.browserLanguage;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>browserLanguage [ " + _browserLanguage + " ]</span></div>";

var _cookieEnabled = _navigator.cookieEnabled;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>cookieEnabled [ " + _cookieEnabled + " ]</span></div>";

var _cpuClass = _navigator.cpuClass;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>cpuClass [ " + _cpuClass + " ]</span></div>";

var _language = _navigator.language;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>language [ " + _language + " ]</span></div>";

var _product = _navigator.product;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>product [ " + _product + " ]</span></div>";

var _systemLanguage = _navigator.systemLanguage;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>systemLanguage [ " + _systemLanguage + " ]</span></div>";

var _userAgent = _navigator.userAgent;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>userAgent [ " + _userAgent + " ]</span></div>";

var _userLanguage = _navigator.userLanguage;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>userLanguage [ " + _userLanguage + " ]</span></div>";

var _onLine = _navigator.onLine;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>onLine [ " + _onLine + " ]</span></div>";

var _platform = _navigator.platform;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>platform [ " + _platform + " ]</span></div>";

var _vendor = _navigator.vendor;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>vendor [ " + _vendor + " ]</span></div>";

var _webdriver = _navigator.webdriver;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>webdriver [ " + _webdriver + " ]</span></div>";

_clientInformation += "</div>";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/mimetypesinfo.png' id='imgmimetypesinfo' title='MimeTypes Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>MimeTypes Info</span><img src='images/switchoff.png' id='imgswitchmimetypesinfo' title='show mimetypes info' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divmimetypesinfo' class='divsysinfocontent'>";

var _mimeTypes = _navigator.mimeTypes;
for(var i = 0; i < _mimeTypes.length; i++){
_clientInformation += "<div class='divsysinfo'>";
var _mime_type_info = _mimeTypes[i];
var _info = "";
_info += "<span class='lblclientinfo'>description [ " + _mime_type_info.description + " ]</span>";
_info += "<span class='lblclientinfo'>suffixes [ " + _mime_type_info.suffixes + " ]</span>";
_info += "<span class='lblclientinfo'>type [ " + _mime_type_info.type + " ]</span>";
_clientInformation += _info;
_clientInformation += "</div>";
}

_clientInformation += "</div>";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/plugins.png' id='imgpluginsinfo' title='Plugins Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>Plugins Info</span><img src='images/switchoff.png' title='show plugins info' id='imgswitchpluginsinfo' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divpluginsinfo' class='divsysinfocontent'>";

var _plugins = _navigator.plugins;
for(var i = 0; i < _plugins.length; i++){
_clientInformation += "<div class='divsysinfo'>";
var _plugin_info = _plugins[i];
var _info = "";
_info += "<span class='lblclientinfo'>description [ " + _plugin_info.description + " ]</span>";
_info += "<span class='lblclientinfo'>filename [ " + _plugin_info.filename + " ]</span>";
_info += "<span class='lblclientinfo'>name [ " + _plugin_info.name + " ]</span>";
_info += "<span class='lblclientinfo'>version [ " + _plugin_info.version + " ]</span>";
_clientInformation += _info;
_clientInformation += "</div>";
}

_clientInformation += "</div>";

$("#divclientinfo").html(_clientInformation);

$(".divsysinfocontent").css({

'position': 'relative',
'display': 'none'
});

$(".imgclientinfotitle").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none'
});

$(".imgclientinfoswitch").css({

'position': 'relative',
'display': 'block',
'float': 'right',
'clear': 'none'
});

$("#imgswitchgeneralinfo").on("click", function(){

if($("#divgeneralinfo").hasClass("toggled")){

var _imgswitchgeneralinfo = document.getElementById("imgswitchgeneralinfo");
_imgswitchgeneralinfo.src = "images/switchoff.png";
_imgswitchgeneralinfo.title = "show general info";

$("#divgeneralinfo").removeClass("toggled");

$("#divgeneralinfo").css({

'display': 'none'
});

}
else{

var _imgswitchgeneralinfo = document.getElementById("imgswitchgeneralinfo");
_imgswitchgeneralinfo.src = "images/switchon.png";
_imgswitchgeneralinfo.title = "hide general info";

$("#divgeneralinfo").addClass("toggled");

$("#divgeneralinfo").css({

'display': 'block'
});

}


});


$("#imgswitchmimetypesinfo").on("click", function(){

if($("#divmimetypesinfo").hasClass("toggled")){

var _imgswitchmimetypesinfo = document.getElementById("imgswitchmimetypesinfo");
_imgswitchmimetypesinfo.src = "images/switchoff.png";
_imgswitchmimetypesinfo.title = "show mimetypes info";

$("#divmimetypesinfo").removeClass("toggled");

$("#divmimetypesinfo").css({

'display': 'none'
});

}
else{

var _imgswitchmimetypesinfo = document.getElementById("imgswitchmimetypesinfo");
_imgswitchmimetypesinfo.src = "images/switchon.png";
_imgswitchmimetypesinfo.title = "hide mimetypes info";

$("#divmimetypesinfo").addClass("toggled");

$("#divmimetypesinfo").css({

'display': 'block'
});

}


});

$("#imgswitchpluginsinfo").on("click", function(){

if($("#divpluginsinfo").hasClass("toggled")){

var _imgswitchpluginsinfo = document.getElementById("imgswitchpluginsinfo");
_imgswitchpluginsinfo.src = "images/switchoff.png";
_imgswitchpluginsinfo.title = "show plugins info";

$("#divpluginsinfo").removeClass("toggled");

$("#divpluginsinfo").css({

'display': 'none'
});

}
else{

var _imgswitchpluginsinfo = document.getElementById("imgswitchpluginsinfo");
_imgswitchpluginsinfo.src = "images/switchon.png";
_imgswitchpluginsinfo.title = "hide plugins info";

$("#divpluginsinfo").addClass("toggled");

$("#divpluginsinfo").css({

'display': 'block'
});

}


});

}

}catch(err){
logglobalerrors(err);
}
}

function setfirefoxmozillasysinfo(){
try{

var _navigator = window.navigator;

if(_navigator !== undefined){

var _clientInformation = "";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/generalinfo.png' id='imggeneralinfo' title='General Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>General Info</span><img src='images/switchoff.png' id='imgswitchgeneralinfo' title='show general info' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divgeneralinfo' class='divsysinfocontent'>";

var _appCodeName = _navigator.appCodeName;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appCodeName [ " + _appCodeName + " ]</span></div>";

var _appName = _navigator.appName;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appName [ " + _appName + " ]</span></div>";

var _appVersion = _navigator.appVersion;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appVersion [ " + _appVersion + " ]</span></div>";

var _buildID = _navigator.buildID;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>buildID [ " + _buildID + " ]</span></div>";

var _cookieEnabled = _navigator.cookieEnabled;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>cookieEnabled [ " + _cookieEnabled + " ]</span></div>";

var _doNotTrack = _navigator.doNotTrack;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>doNotTrack [ " + _doNotTrack + " ]</span></div>";

var _language = _navigator.language;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>language [ " + _language + " ]</span></div>";

var _onLine = _navigator.onLine;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>onLine [ " + _onLine + " ]</span></div>";

var _oscpu = _navigator.oscpu;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>oscpu [ " + _oscpu + " ]</span></div>";

var _platform = _navigator.platform;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>platform [ " + _platform + " ]</span></div>";

var _product = _navigator.product;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>product [ " + _product + " ]</span></div>";

var _productSub = _navigator.productSub;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>productSub [ " + _productSub + " ]</span></div>";

var _userAgent = _navigator.userAgent;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>userAgent [ " + _userAgent + " ]</span></div>";

var _vendor = _navigator.vendor;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>vendor [ " + _vendor + " ]</span></div>";

var _vendorSub = _navigator.vendorSub;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>vendorSub [ " + _vendorSub + " ]</span></div>";

_clientInformation += "</div>";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/mimetypesinfo.png' id='imgmimetypesinfo' title='MimeTypes Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>MimeTypes Info</span><img src='images/switchoff.png' id='imgswitchmimetypesinfo' title='show mimetypes info' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divmimetypesinfo' class='divsysinfocontent'>";

var _mimeTypes = _navigator.mimeTypes;
for(var i = 0; i < _mimeTypes.length; i++){
_clientInformation += "<div class='divsysinfo'>";
var _mime_type_info = _mimeTypes[i];
var _info = "";
_info += "<span class='lblclientinfo'>description [ " + _mime_type_info.description + " ]</span>";
_info += "<span class='lblclientinfo'>suffixes [ " + _mime_type_info.suffixes + " ]</span>";
_info += "<span class='lblclientinfo'>type [ " + _mime_type_info.type + " ]</span>";
_clientInformation += _info;
_clientInformation += "</div>";
}

_clientInformation += "</div>";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/plugins.png' id='imgpluginsinfo' title='Plugins Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>Plugins Info</span><img src='images/switchoff.png' title='show plugins info' id='imgswitchpluginsinfo' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divpluginsinfo' class='divsysinfocontent'>";

var _plugins = _navigator.plugins;
for(var i = 0; i < _plugins.length; i++){
_clientInformation += "<div class='divsysinfo'>";
var _plugin_info = _plugins[i];
var _info = "";
_info += "<span class='lblclientinfo'>description [ " + _plugin_info.description + " ]</span>";
_info += "<span class='lblclientinfo'>filename [ " + _plugin_info.filename + " ]</span>";
_info += "<span class='lblclientinfo'>name [ " + _plugin_info.name + " ]</span>";
_info += "<span class='lblclientinfo'>version [ " + _plugin_info.version + " ]</span>";
_clientInformation += _info;
_clientInformation += "</div>";
}

_clientInformation += "</div>";

$("#divclientinfo").html(_clientInformation);

var _battery = _navigator.battery;
if(_battery != null && _battery != undefined){

setfirefoxbatteryinfo(_battery);

_battery.onchargingchange = function(event){
$("#divfirefoxbatteryinfo").html("");
setfirefoxbatteryinfo(event.target, event.type);
}

_battery.onchargingtimechange = function(event){
$("#divfirefoxbatteryinfo").html("");
setfirefoxbatteryinfo(event.target, event.type);
}

_battery.ondischargingtimechange = function(event){
$("#divfirefoxbatteryinfo").html("");
setfirefoxbatteryinfo(event.target, event.type);
}

_battery.onlevelchange = function(event){
$("#divfirefoxbatteryinfo").html("");
setfirefoxbatteryinfo(event.target, event.type);
}

}

$(".divsysinfocontent").css({

'position': 'relative',
'display': 'none'
});

$(".imgclientinfotitle").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none'
});

$(".imgclientinfoswitch").css({

'position': 'relative',
'display': 'block',
'float': 'right',
'clear': 'none'
});

$("#imgswitchgeneralinfo").on("click", function(){

if($("#divgeneralinfo").hasClass("toggled")){

var _imgswitchgeneralinfo = document.getElementById("imgswitchgeneralinfo");
_imgswitchgeneralinfo.src = "images/switchoff.png";
_imgswitchgeneralinfo.title = "show general info";

$("#divgeneralinfo").removeClass("toggled");

$("#divgeneralinfo").css({

'display': 'none'
});

}
else{

var _imgswitchgeneralinfo = document.getElementById("imgswitchgeneralinfo");
_imgswitchgeneralinfo.src = "images/switchon.png";
_imgswitchgeneralinfo.title = "hide general info";

$("#divgeneralinfo").addClass("toggled");

$("#divgeneralinfo").css({

'display': 'block'
});

}


});


$("#imgswitchmimetypesinfo").on("click", function(){

if($("#divmimetypesinfo").hasClass("toggled")){

var _imgswitchmimetypesinfo = document.getElementById("imgswitchmimetypesinfo");
_imgswitchmimetypesinfo.src = "images/switchoff.png";
_imgswitchmimetypesinfo.title = "show mimetypes info";

$("#divmimetypesinfo").removeClass("toggled");

$("#divmimetypesinfo").css({

'display': 'none'
});

}
else{

var _imgswitchmimetypesinfo = document.getElementById("imgswitchmimetypesinfo");
_imgswitchmimetypesinfo.src = "images/switchon.png";
_imgswitchmimetypesinfo.title = "hide mimetypes info";

$("#divmimetypesinfo").addClass("toggled");

$("#divmimetypesinfo").css({

'display': 'block'
});

}


});

$("#imgswitchpluginsinfo").on("click", function(){

if($("#divpluginsinfo").hasClass("toggled")){

var _imgswitchpluginsinfo = document.getElementById("imgswitchpluginsinfo");
_imgswitchpluginsinfo.src = "images/switchoff.png";
_imgswitchpluginsinfo.title = "show plugins info";

$("#divpluginsinfo").removeClass("toggled");

$("#divpluginsinfo").css({

'display': 'none'
});

}
else{

var _imgswitchpluginsinfo = document.getElementById("imgswitchpluginsinfo");
_imgswitchpluginsinfo.src = "images/switchon.png";
_imgswitchpluginsinfo.title = "hide plugins info";

$("#divpluginsinfo").addClass("toggled");

$("#divpluginsinfo").css({

'display': 'block'
});

}


});

}

}catch(err){
logglobalerrors(err);
}
}

function setfirefoxbatteryinfo(battery, eventtype){
try{

if(eventtype != undefined){
appendapplogz("battery [ " + eventtype + " ] event fired.", "info");
logtodb("battery [ " + eventtype + " ] event fired.", "info");
var _divclientinfo = document.getElementById("divclientinfo");
_divclientinfo.removeChild(document.getElementById("divfirefoxbatteryinfo"));
}

var _clientInformation = "";
var _appendapplogzstr = "";

_clientInformation += "<div id='divfirefoxbatteryinfo'>";

var _battery = battery;
if(_battery != null && _battery != undefined){

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/batteryinfo.png' id='imgbatteryinfo' title='Battery Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>Battery Info</span><img src='images/switchoff.png' title='show battery info' id='imgswitchbatteryinfo' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divbatteryinfo' class='divsysinfocontent'>";

var _charging = _battery.charging;
_appendapplogzstr += "charging [ " + _charging + " ]:";

_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>charging [ " + _charging + " ]</span>";

if(_charging){
_clientInformation += "<img src='images/online.ico' class='imgclientinfocharging'/>";
}else{
_clientInformation += "<img src='images/offline.ico' class='imgclientinfocharging'/>";
}

_clientInformation += "</div>";

var _chargingTime = _battery.chargingTime;

if($.isNumeric(_chargingTime)){

var d = new Date(_chargingTime);
var _chargingTimestring = ("0" + d.getHours()).slice(-2) + " Hours : " + ("0" + d.getMinutes()).slice(-2) + " Minutes :" + ("0" + d.getSeconds()).slice(-2) + " Seconds :" + ("0" + d.getMilliseconds()).slice(-2) + " Milliseconds";

_appendapplogzstr += " chargingTime [ " + _chargingTimestring + " ]:";
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>chargingTime [ " + _chargingTimestring + " ]</span></div>";

}else{

_appendapplogzstr += " chargingTime [ " + _chargingTime + " ]:";
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>chargingTime [ " + _chargingTime + " ]</span></div>";
}

var _dischargingTime = _battery.dischargingTime;

if($.isNumeric(_dischargingTime)){

var d = new Date(_dischargingTime);
var _dischargingTimestring = ("0" + d.getHours()).slice(-2) + " Hours : " + ("0" + d.getMinutes()).slice(-2) + " Minutes :" + ("0" + d.getSeconds()).slice(-2) + " Seconds :" + ("0" + d.getMilliseconds()).slice(-2) + " Milliseconds";

_appendapplogzstr += " dischargingTime [ " + _dischargingTimestring + " ]:";
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>dischargingTime [ " + _dischargingTimestring + " ]</span></div>";

}else{

_appendapplogzstr += " dischargingTime [ " + _dischargingTime + " ]:";
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>dischargingTime [ " + _dischargingTime + " ]</span></div>";
}

var _level = _battery.level;

var _intlevel = parseFloat(_level) * 100;
var _roundlevel = Math.round(_intlevel);
var _strlevel = _roundlevel + "%";

_appendapplogzstr += " level [ " + _strlevel + " ]";

_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>level [ " + _strlevel + " ]</span>";

_clientInformation += '<input type="range" id="lblbatterylevel" min="0" max="100" step="1" value="' + _roundlevel + '" disabled="disabled" />';

_clientInformation += "</div>";

}

_clientInformation += "</div>";

_clientInformation += "</div>";

$("#divclientinfo").append(_clientInformation);

if(eventtype != undefined){
appendapplogz(_appendapplogzstr, "info");
logtodb(_appendapplogzstr, "info");
}

$(".imgclientinfotitle").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none'
});

$(".imgclientinfoswitch").css({

'position': 'relative',
'display': 'block',
'float': 'right',
'clear': 'none'
});

$("#imgswitchbatteryinfo").on("click", function(){

if($("#divbatteryinfo").hasClass("toggled")){

var _imgswitchbatteryinfo = document.getElementById("imgswitchbatteryinfo");
_imgswitchbatteryinfo.src = "images/switchoff.png";
_imgswitchbatteryinfo.title = "show battery info";

$("#divbatteryinfo").removeClass("toggled");

$("#divbatteryinfo").css({

'display': 'none'
});

_isbatteryinfotoggled = false;

}
else{

var _imgswitchbatteryinfo = document.getElementById("imgswitchbatteryinfo");
_imgswitchbatteryinfo.src = "images/switchon.png";
_imgswitchbatteryinfo.title = "hide battery info";

$("#divbatteryinfo").addClass("toggled");

$("#divbatteryinfo").css({

'display': 'block'
});

_isbatteryinfotoggled = true;

}


});

if(_isbatteryinfotoggled){

var _imgswitchbatteryinfo = document.getElementById("imgswitchbatteryinfo");
_imgswitchbatteryinfo.src = "images/switchon.png";
_imgswitchbatteryinfo.title = "hide battery info";

$("#divbatteryinfo").css({

'display': 'block'
});

}
else{

var _imgswitchbatteryinfo = document.getElementById("imgswitchbatteryinfo");
_imgswitchbatteryinfo.src = "images/switchoff.png";
_imgswitchbatteryinfo.title = "show battery info";

$("#divbatteryinfo").css({

'display': 'none'
});

}


}catch(err){
logglobalerrors(err);
}
}

function setgooglechromesysinfo(){
try{

var _navigator = window.navigator;

if(_navigator !== undefined){

var _clientInformation = "";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/generalinfo.png' id='imggeneralinfo' title='General Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>General Info</span><img src='images/switchoff.png' id='imgswitchgeneralinfo' title='show general info' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divgeneralinfo' class='divsysinfocontent'>";

var _appCodeName = _navigator.appCodeName;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appCodeName [ " + _appCodeName + " ]</span></div>";

var _appName = _navigator.appName;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appName [ " + _appName + " ]</span></div>";

var _appVersion = _navigator.appVersion;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>appVersion [ " + _appVersion + " ]</span></div>";

var _cookieEnabled = _navigator.cookieEnabled;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>cookieEnabled [ " + _cookieEnabled + " ]</span></div>";

var _hardwareConcurrency = _navigator.hardwareConcurrency;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>hardwareConcurrency [ " + _hardwareConcurrency + " ]</span></div>";

var _language = _navigator.language;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>language [ " + _language + " ]</span></div>";

var _onLine = _navigator.onLine;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>onLine [ " + _onLine + " ]</span></div>";

var _platform = _navigator.platform;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>platform [ " + _platform + " ]</span></div>";

var _product = _navigator.product;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>product [ " + _product + " ]</span></div>";

var _productSub = _navigator.productSub;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>productSub [ " + _productSub + " ]</span></div>";

var _userAgent = _navigator.userAgent;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>userAgent [ " + _userAgent + " ]</span></div>";

var _vendor = _navigator.vendor;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>vendor [ " + _vendor + " ]</span></div>";

var _vendorSub = _navigator.vendorSub;
_clientInformation += "<div class='divsysinfo'><span class='lblclientinfo'>vendorSub [ " + _vendorSub + " ]</span></div>";

_clientInformation += "</div>";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/mimetypesinfo.png' id='imgmimetypesinfo' title='MimeTypes Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>MimeTypes Info</span><img src='images/switchoff.png' id='imgswitchmimetypesinfo' title='show mimetypes info' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divmimetypesinfo' class='divsysinfocontent'>";

var _mimeTypes = _navigator.mimeTypes;
for(var i = 0; i < _mimeTypes.length; i++){
_clientInformation += "<div class='divsysinfo'>";
var _mime_type_info = _mimeTypes[i];
var _info = "";
_info += "<span class='lblclientinfo'>description [ " + _mime_type_info.description + " ]</span>";
_info += "<span class='lblclientinfo'>suffixes [ " + _mime_type_info.suffixes + " ]</span>";
_info += "<span class='lblclientinfo'>type [ " + _mime_type_info.type + " ]</span>";
_clientInformation += _info;
_clientInformation += "</div>";
}

_clientInformation += "</div>";

_clientInformation += "<div class='divsysinfo divclientinfosectionheader'><img src='images/plugins.png' id='imgpluginsinfo' title='Plugins Info' class='imgclientinfotitle'/><span class='lblclientinfo lblclientinfosectionheader'>Plugins Info</span><img src='images/switchoff.png' title='show plugins info' id='imgswitchpluginsinfo' class='imgclientinfoswitch'/></div>";

_clientInformation += "<div id='divpluginsinfo' class='divsysinfocontent'>";

var _plugins = _navigator.plugins;
for(var i = 0; i < _plugins.length; i++){
_clientInformation += "<div class='divsysinfo'>";
var _plugin_info = _plugins[i];
var _info = "";
_info += "<span class='lblclientinfo'>description [ " + _plugin_info.description + " ]</span>";
_info += "<span class='lblclientinfo'>filename [ " + _plugin_info.filename + " ]</span>";
_info += "<span class='lblclientinfo'>name [ " + _plugin_info.name + " ]</span>";
_info += "<span class='lblclientinfo'>version [ " + _plugin_info.version + " ]</span>";
_clientInformation += _info;
_clientInformation += "</div>";
}

_clientInformation += "</div>";

$("#divclientinfo").html(_clientInformation);

$(".divsysinfocontent").css({

'position': 'relative',
'display': 'none'
});

$(".imgclientinfotitle").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none'
});

$(".imgclientinfoswitch").css({

'position': 'relative',
'display': 'block',
'float': 'right',
'clear': 'none'
});

$("#imgswitchgeneralinfo").on("click", function(){

if($("#divgeneralinfo").hasClass("toggled")){

var _imgswitchgeneralinfo = document.getElementById("imgswitchgeneralinfo");
_imgswitchgeneralinfo.src = "images/switchoff.png";
_imgswitchgeneralinfo.title = "show general info";

$("#divgeneralinfo").removeClass("toggled");

$("#divgeneralinfo").css({

'display': 'none'
});

}
else{

var _imgswitchgeneralinfo = document.getElementById("imgswitchgeneralinfo");
_imgswitchgeneralinfo.src = "images/switchon.png";
_imgswitchgeneralinfo.title = "hide general info";

$("#divgeneralinfo").addClass("toggled");

$("#divgeneralinfo").css({

'display': 'block'
});

}


});


$("#imgswitchmimetypesinfo").on("click", function(){

if($("#divmimetypesinfo").hasClass("toggled")){

var _imgswitchmimetypesinfo = document.getElementById("imgswitchmimetypesinfo");
_imgswitchmimetypesinfo.src = "images/switchoff.png";
_imgswitchmimetypesinfo.title = "show mimetypes info";

$("#divmimetypesinfo").removeClass("toggled");

$("#divmimetypesinfo").css({

'display': 'none'
});

}
else{

var _imgswitchmimetypesinfo = document.getElementById("imgswitchmimetypesinfo");
_imgswitchmimetypesinfo.src = "images/switchon.png";
_imgswitchmimetypesinfo.title = "hide mimetypes info";

$("#divmimetypesinfo").addClass("toggled");

$("#divmimetypesinfo").css({

'display': 'block'
});

}


});

$("#imgswitchpluginsinfo").on("click", function(){

if($("#divpluginsinfo").hasClass("toggled")){

var _imgswitchpluginsinfo = document.getElementById("imgswitchpluginsinfo");
_imgswitchpluginsinfo.src = "images/switchoff.png";
_imgswitchpluginsinfo.title = "show plugins info";

$("#divpluginsinfo").removeClass("toggled");

$("#divpluginsinfo").css({

'display': 'none'
});

}
else{

var _imgswitchpluginsinfo = document.getElementById("imgswitchpluginsinfo");
_imgswitchpluginsinfo.src = "images/switchon.png";
_imgswitchpluginsinfo.title = "hide plugins info";

$("#divpluginsinfo").addClass("toggled");

$("#divpluginsinfo").css({

'display': 'block'
});

}


});

}

}catch(err){
logglobalerrors(err);
}
}

function encryptograpy(texttoencrypt){
try{
var _encryptedhash = "";
if(_has_netscape_prop){
_encryptedhash = btoa(texttoencrypt);
}else if(_has_chrome_prop){
_encryptedhash = btoa(texttoencrypt);
}else if(!_has_netscape_prop && !_has_chrome_prop){
_encryptedhash = texttoencrypt;
}
return  _encryptedhash;
}catch(err){
logglobalerrors(err);
return "";
}
}

function showsettingzoptiondiv(){
try{

var _divdialog  = document.getElementById("divsettingzoption");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divsettingzoption" class="divdialog">';

_strdialog += '<div id="divclosesettingz">';
_strdialog += '<img src="images/messageboxerror.ico" id="imgclosesettingz" title="close"/>';
_strdialog += '</div>';

_strdialog += '<div id="divsettingzoptionsdialogitems">';
_strdialog += '<span id="lblsettingzoptionsdialogtitle">settings options</span>';
_strdialog += '<a id="btncustomsettings" title="custom settings">';
_strdialog += '<img src="images/nextreset.png" class="imgnavsettingzoptions" title="custom settings"/>';
_strdialog += 'custom settings';
_strdialog += '<a/>';
_strdialog += '<a id="btnnetworksettings" title="wifi settings" href="ms-settings:network-wifi">';
_strdialog += '<img src="images/nextreset.png" class="imgnavsettingzoptions" title="wifi settings"/>';
_strdialog += 'wifi settings';
_strdialog += '<a/>';
_strdialog += '<a id="btnbluetoothsettings" title="bluetooth settings" href="ms-settings:bluetooth">';
_strdialog += '<img src="images/nextreset.png" class="imgnavsettingzoptions" title="bluetooth settings"/>';
_strdialog += 'bluetooth settings';
_strdialog += '<a/>';
_strdialog += '<a id="btnpowersleepsettings" title="powersleep settings" href="ms-settings:powersleep">';
_strdialog += '<img src="images/nextreset.png" class="imgnavsettingzoptions" title="powersleep settings"/>';
_strdialog += 'powersleep settings';
_strdialog += '<a/>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);

//listen for click event in imgclosesettingz.
try{
document.getElementById("imgclosesettingz").addEventListener("click", function(){

$("#divsettingzoption").removeClass("toggled");
$("#divsettingzoption").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _body = document.getElementById("body");
//_body.removeChild(document.getElementById("divsettingzoption"));

}, false);
appendapplogz("wired imgclosesettingz click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btncustomsettings.
try{
document.getElementById("btncustomsettings").addEventListener("click", showcustomsettingzdiv, false);
appendapplogz("wired btncustomsettings click Event Listener.", "info");

}
catch(err)
{
logglobalerrors(err);
}

}

if($("#divsettingzoption").hasClass("toggled")){

$("#divsettingzoption").removeClass("toggled");
$("#divsettingzoption").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgnetworksettings = document.getElementById("imgnetworksettings");
_imgnetworksettings.src = "images/blackcog.png";
_imgnetworksettings.title = "show settings";

}
else{

var _imgnetworksettings = document.getElementById("imgnetworksettings");
_imgnetworksettings.src = "images/blackcog.jpg";
_imgnetworksettings.title = "hide settings";

$("#divsettingzoption").addClass("toggled");
$("#divsettingzoption").css({

'background-color': _defaultdialogbackgroundcolor,
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'width': '25%',
'height': 'auto',
'z-index': '8000',
'top': '10%',
'left': '14%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divclosesettingz").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'right': '1%',
'top': '1%'
});

$("#divsettingzoptionsdialogitems").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '1%',
'top': '1%'
});

$("#lblsettingzoptionsdialogtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#btncustomsettings").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '5px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'text-decoration': 'none'
});

$("#btnnetworksettings").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '5px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'text-decoration': 'none'
});

$("#btnbluetoothsettings").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '5px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'text-decoration': 'none'
});

$("#btnpowersleepsettings").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '5px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'text-decoration': 'none'
});

$(".imgnavsettingzoptions").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$("#imgclosesettingz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

setdialogzbackgroundcolor("divsettingzoption");
setdialogzbackgroundimage("divsettingzoption");

}


}catch(err){
logglobalerrors(err);
}
}

function getdeletetimelapsed(){
try{

start_time = _starttime;
_currenttime = getcurrentdatetime();

var startdatearr = start_time.split(" ");
var starttimearr = startdatearr[1].split(":");
var start_hrs = parseInt(starttimearr[0]);
var start_mnts = parseInt(starttimearr[1]);
var start_scnds = parseInt(starttimearr[2]);
var start_mllscnds = parseInt(starttimearr[3]);

var currentdatearr = _currenttime.split(" ");
var currenttimearr = currentdatearr[1].split(":");
var current_hrs = parseInt(currenttimearr[0]);
var current_mnts = parseInt(currenttimearr[1]);
var current_scnds = parseInt(currenttimearr[2]);
var current_mllscnds = parseInt(currenttimearr[3]);

if(current_hrs > start_hrs){
elapsed_hrs = current_hrs - start_hrs;
}else if(current_hrs < start_hrs){
elapsed_hrs = start_hrs - current_hrs;
}else if(current_hrs == start_hrs){
elapsed_hrs = current_hrs - start_hrs;
}

if(current_mnts > start_mnts){
elapsed_mnts = current_mnts - start_mnts;
}else if(current_mnts < start_mnts){
elapsed_mnts = start_mnts - current_mnts;
}else if(current_mnts == start_mnts){
elapsed_mnts = current_mnts - start_mnts;
}

elapsed_scnds = elapsed_scnds + 1;

var _mins = elapsed_scnds/60;
var _strmins = _mins.toString();
var _round_min = _strmins;
if(_strmins.indexOf(".") > 0){
_round_min = _strmins.split(".")[0];
}
elapsed_mnts = _round_min;

elapsed_mllscnds = elapsed_mllscnds + current_mllscnds;

var _elapsedtime = "time lapsed...<br/>" + elapsed_mnts + " mins :" + elapsed_scnds + " secs :" + elapsed_mllscnds + " millisecs";

return _elapsedtime;
}
catch(err)
{
var _msg = err.name + "<br/>" + err.message;
showeventsnotifierdiv(_msg, "error");
}
}

function getcreatetimelapsed(){
try{

start_time = _starttime;
_currenttime = getcurrentdatetime();

var startdatearr = start_time.split(" ");
var starttimearr = startdatearr[1].split(":");
var start_hrs = parseInt(starttimearr[0]);
var start_mnts = parseInt(starttimearr[1]);
var start_scnds = parseInt(starttimearr[2]);
var start_mllscnds = parseInt(starttimearr[3]);

var currentdatearr = _currenttime.split(" ");
var currenttimearr = currentdatearr[1].split(":");
var current_hrs = parseInt(currenttimearr[0]);
var current_mnts = parseInt(currenttimearr[1]);
var current_scnds = parseInt(currenttimearr[2]);
var current_mllscnds = parseInt(currenttimearr[3]);

if(current_hrs > start_hrs){
elapsed_hrs = current_hrs - start_hrs;
}else if(current_hrs < start_hrs){
elapsed_hrs = start_hrs - current_hrs;
}else if(current_hrs == start_hrs){
elapsed_hrs = current_hrs - start_hrs;
}

if(current_mnts > start_mnts){
elapsed_mnts = current_mnts - start_mnts;
}else if(current_mnts < start_mnts){
elapsed_mnts = start_mnts - current_mnts;
}else if(current_mnts == start_mnts){
elapsed_mnts = current_mnts - start_mnts;
}

elapsed_scnds = elapsed_scnds + 1;

var _mins = elapsed_scnds/60;
var _strmins = _mins.toString();
var _round_min = _strmins;
if(_strmins.indexOf(".") > 0){
_round_min = _strmins.split(".")[0];
}
elapsed_mnts = _round_min;

elapsed_mllscnds = elapsed_mllscnds + current_mllscnds;

var _elapsedtime = "time lapsed...<br/>" + elapsed_mnts + " mins :" + elapsed_scnds + " secs :" + elapsed_mllscnds + " millisecs";

return _elapsedtime;
}
catch(err)
{
var _msg = err.name + "<br/>" + err.message;
showeventsnotifierdiv(_msg, "error");
}
}

function toggleclientinfodiv(){
try{

$("#imgclientinfo").on("click", function(){

if($("#divclientinfo").hasClass("toggled")){

document.getElementById("imgclientinfo").src = "images/previousactive.png";

$("#divclientinfo").removeClass("toggled");
$("#divclientinfo").css({

'display': 'none',
'right': '-9999px',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#divclientinfo").fadeOut(3000);

$("#imgclientinfo").css({

'float': 'right',
'right': '-11%'
});

$("#divcontainer").css({

'width': '85%'
});

if($("#divnav").hasClass("toggled")){
$("#divcontainer").css({

'width': '85%'
});
}else{
$("#divcontainer").css({

'width': '97%'
});
}

try{
var _imgclientinfo = document.getElementById("imgclientinfo");
_imgclientinfo.setAttribute("title", "show client info");
}
catch(err)
{
logglobalerrors(err);
}

}
else{

document.getElementById("imgclientinfo").src = "images/nextactive.png";

$("#divclientinfo").addClass("toggled");
$("#divclientinfo").css({

'position': 'relative',
'display': 'block',
'right': '1px',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divclientinfo").fadeIn(1000);

$("#imgclientinfo").css({

'float': 'right',
'right': '15%'
});

$("#divcontainer").css({

'width': '60%'
});

if($("#divnav").hasClass("toggled")){
$("#divcontainer").css({

'width': '60%'
});
}else{
$("#divcontainer").css({

'width': '72%'
});
}

try{
var _imgclientinfo = document.getElementById("imgclientinfo");
_imgclientinfo.setAttribute("title", "hide client info");
}
catch(err)
{
logglobalerrors(err);
}

}


});

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function togglemenudiv(){
try{

$("#imgmenu").on("click", function(){

if($("#divnav").hasClass("toggled")){

document.getElementById("imgmenu").src = "images/nextactive.png";

$("#divnav").removeClass("toggled");
$("#divnav").css({

'display': 'block',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#divnav").fadeOut(3000);

$("#imgmenu").css({

'left': '-1.8%'
});

$("#divcontainer").css({

'left': '1%',
'width': '72%'
});

if($("#divclientinfo").hasClass("toggled")){
$("#divcontainer").css({

'left': '1%',
'width': '72%'
});
}else{
$("#divcontainer").css({

'left': '1%',
'width': '97%'
});
}

try{
var _imgmenu = document.getElementById("imgmenu");
_imgmenu.setAttribute("title", "show menu");
}
catch(err)
{
logglobalerrors(err);
}

}
else{

document.getElementById("imgmenu").src = "images/previousactive.png";

$("#divnav").addClass("toggled");
$("#divnav").css({

'display': 'block',
'left': '2px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divnav").fadeIn(1000);

$("#imgmenu").css({

'left': '11%'
});

$("#divcontainer").css({

'left': '13%',
'width': '60%'
});

if($("#divclientinfo").hasClass("toggled")){
$("#divcontainer").css({

'left': '13%',
'width': '60%'
});
}else{
$("#divcontainer").css({

'left': '13%',
'width': '85%'
});
}

try{
var _imgmenu = document.getElementById("imgmenu");
_imgmenu.setAttribute("title", "hide menu");
}
catch(err)
{
logglobalerrors(err);
}

}


});

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function togglediveventsnotifier(){
try{

$("#imgeventsnotifier").on("click", function(){

if($("#diveventsnotifier").hasClass("toggled")){

document.getElementById("imgeventsnotifier").src = "images/previousactive.png";

$("#diveventsnotifier").removeClass("toggled");
$("#diveventsnotifier").css({

'position': 'absolute',
'display': 'none',
'right': '-9999px',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#diveventsnotifier").fadeOut(3000);

$("#imgeventsnotifier").css({

'float': 'right',
'right': '2.5%',
'bottom': '1%'
});

}
else{

document.getElementById("imgeventsnotifier").src = "images/nextactive.png";

$("#diveventsnotifier").addClass("toggled");
$("#diveventsnotifier").css({

'position': 'absolute',
'display': 'block',
'right': '3%',
'transition-property': 'right',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#diveventsnotifier").fadeIn(1000);
$("#diveventsnotifier").show();

var _diveventsnotifier = document.getElementById("diveventsnotifier");
var _div_height = _diveventsnotifier.clientHeight;
var _image_height = _div_height + 5;
var _formatted_image_height = _image_height + "px";

$("#imgeventsnotifier").css({

'float': 'right',
'right': '22%',
'bottom': _formatted_image_height
});

var _diveventsnotifier_children = _diveventsnotifier.children;

if(_diveventsnotifier_children.length === 0){

$("#diveventsnotifier").css({

'display': 'none'
});

}else{

$("#diveventsnotifier").css({

'display': 'block'
});

}

}


});

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function showcustomsettingzdiv(){
try{

var _divdialog  = document.getElementById("divcustomsettingz");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divcustomsettingz" class="divdialog">';

_strdialog += '<div id="divclosecustomsettingz" class="divdialog">';
_strdialog += '<img src="images/messageboxerror.ico" id="imgclosecustomsettingz" title="close"/>';
_strdialog += '</div>';

_strdialog += '<div id="divcustomsettingzdialogitems">';
_strdialog += '<span id="lblcustomsettingzdialogtitle">custom settings</span>';

_strdialog += '<div id="divtabcontrolz">';
_strdialog += '<a id="btndialogtab" title="dialog tab">';
_strdialog += '<img src="images/tabimg.jpg" id="imgdialogtab" title="dialog tab"/>';
_strdialog += 'dialog';
_strdialog += '</a>';
_strdialog += '<a id="btnsystemtab" title="app tab">';
_strdialog += '<img src="images/tabimg.png" id="imgsystemtab" title="app tab"/>';
_strdialog += 'app';
_strdialog += '</a>';
_strdialog += '<a id="btnmediatab" title="media tab">';
_strdialog += '<img src="images/tabimg.png" id="imgmediatab" title="media tab"/>';
_strdialog += 'media';
_strdialog += '</a>';
_strdialog += '</div>';

_strdialog += '<div id="divmediatab" class="divsettingzdialogtab divcustomizevideocontrolz">';

_strdialog += '<div id="divmediatypesettingz" class="divdialogitemz">';
_strdialog += '<span id="lblmediatypesettingz">media type</span>';
_strdialog += '<select id="cbomediatypesettingz" title="media type">';
_strdialog += '<option selected="true" value="audio">audio</option>';
_strdialog += '<option value="movie">movie</option>';
_strdialog += '<option value="video">video</option>';
_strdialog += '</select>';
_strdialog += '</div>';

_strdialog += '<div id="divvideofitsettingz" class="divdialogitemz">';
_strdialog += '<span id="lblvideofitsettingz">video fit</span>';
_strdialog += '<select id="cbovideofitsettingz" title="video fit">';
//'object-fit': 'cover', 'contain', 'fill', 'scale-down', 'unset', 'inherit', 'initial'
_strdialog += '<option selected="true" value="cover">cover</option>';
_strdialog += '<option value="contain">contain</option>';
_strdialog += '<option value="fill">fill</option>';
_strdialog += '<option value="inherit">inherit</option>';
_strdialog += '<option value="initial">initial</option>';
_strdialog += '<option value="scale-down">scale-down</option>';
_strdialog += '<option value="unset">unset</option>';
_strdialog += '</select>';
_strdialog += '</div>';

_strdialog += '<div id="divloopsettingz" class="divdialogitemz">';
_strdialog += '<span id="lblloopsettingz">loop</span>';
_strdialog += '<img src="images/switchon.png" id="imgloopsettingz" class="toggled" title="loop"/>';
_strdialog += '</div>';

_strdialog += '<div id="divautoplaysettingz" class="divdialogitemz">';
_strdialog += '<span id="lblautoplaysettingz">auto play</span>';
_strdialog += '<img src="images/switchon.png" id="imgautoplaysettingz" class="toggled" title="auto play"/>';
_strdialog += '</div>';

_strdialog += '<div id="divshufflesettingz" class="divdialogitemz">';
_strdialog += '<span id="lblshufflesettingz">shuffle</span>';
_strdialog += '<img src="images/switchon.png" id="imgshufflesettingz" class="toggled" title="shuffle"/>';
_strdialog += '</div>';

_strdialog += '<div id="divvideocontrolssettingz" class="divdialogitemz">';
_strdialog += '<span id="lblvideocontrolssettingz">video controls</span>';
_strdialog += '<img src="images/switchon.png" id="imgvideocontrolssettingz" class="toggled" title="video controls"/>';
_strdialog += '</div>';
_strdialog += '</div>';

_strdialog += '<div id="divsystemtab" class="divsettingzdialogtab">';

_strdialog += '<div id="divhighlightsearchsyntax" class="divdialogitemz">';
_strdialog += '<input id="txthighlightsearchsyntaxautoid" name="txthighlightsearchsyntaxautoid" class="settingzautoid" type="text"/>';
_strdialog += '<input id="chkhighlightsearchsyntax" name="chkhighlightsearchsyntax" type="checkbox"/>';
_strdialog += '<span id="lblhighlightsearchsyntax">highlight search syntax</span>';
_strdialog += '</div>';

_strdialog += '<div id="divenforcepasswordencryption" class="divdialogitemz">';
_strdialog += '<input id="txtenforcepasswordencryptionautoid" name="txtenforcepasswordencryptionautoid" class="settingzautoid" type="text"/>';
_strdialog += '<input id="chkenforcepasswordencryption" name="chkenforcepasswordencryption" type="checkbox"/>';
_strdialog += '<span id="lblenforcepasswordencryption">enforce password encryption</span>';
_strdialog += '</div>';

_strdialog += '<div id="divshowmenu" class="divdialogitemz">';
_strdialog += '<input id="txtshowmenuautoid" name="txtshowmenuautoid" class="settingzautoid" type="text"/>';
_strdialog += '<input id="chkshowmenu" name="chkshowmenu" type="checkbox"/>';
_strdialog += '<span id="lblshowmenu">show menu on load</span>';
_strdialog += '</div>';

_strdialog += '<div id="divshowgeneralinfo" class="divdialogitemz">';
_strdialog += '<input id="txtshowgeneralinfoautoid" name="txtshowgeneralinfoautoid" class="settingzautoid" type="text"/>';
_strdialog += '<input id="chkshowgeneralinfo" name="chkshowgeneralinfo" type="checkbox"/>';
_strdialog += '<span id="lblshowgeneralinfo">show general info on load</span>';
_strdialog += '</div>';

_strdialog += '<div id="divloginmode" class="divdialogitemz">';
_strdialog += '<input id="txtloginmodeautoid" name="txtloginmodeautoid" class="settingzautoid" type="text"/>';
_strdialog += '<div>';
_strdialog += '<input id="rdosettingzencryptedlogin" name="rdosettingzloginmode" type="radio" placeholder="encrypted login" autocomplete="autocomplete" />';
_strdialog += '<span>encrypted login</span>';
_strdialog += '</div>';
_strdialog += '<div>';
_strdialog += '<input id="rdosettingzbasiclogin" name="rdosettingzloginmode" type="radio" placeholder="basic login" autocomplete="autocomplete" />';
_strdialog += '<span>basic login</span>';
_strdialog += '</div>';
_strdialog += '</div>';

_strdialog += '<div id="divdatabasetouse" class="divdialogitemz">';
_strdialog += '<input id="txtdatabasetouseautoid" name="txtdatabasetouseautoid" class="settingzautoid" type="text"/>';
_strdialog += '<div>';
_strdialog += '<input id="rdosettingzdatabaselocal" name="rdosettingzdatabaseyagutumira" type="radio" placeholder="database ya local" autocomplete="autocomplete" />';
_strdialog += '<span>database ya local</span>';
_strdialog += '</div>';
_strdialog += '<div>';
_strdialog += '<input id="rdosettingzdatabasecloud" name="rdosettingzdatabaseyagutumira" type="radio" placeholder="database ya cloud" autocomplete="autocomplete" />';
_strdialog += '<span>database ya cloud</span>';
_strdialog += '</div>';
_strdialog += '</div>';

_strdialog += '<div id="divndirikana" class="divdialogitemz">';
_strdialog += '<input id="txtndirikanaautoid" name="txtndirikanaautoid" class="settingzautoid" type="text"/>';
_strdialog += '<img src="images/switchoff.png" title="ndirikana" id="imgswitchndirikanasettingz"/>';
_strdialog += '<input id="chkndirikanasettingz" name="chkndirikanasettingz" type="checkbox"/>';
_strdialog += '<span id="lblndirikanasettingz">ndirikana?</span>';
_strdialog += '</div>';

_strdialog += '</div>';

_strdialog += '<div id="divdialogtab" class="divsettingzdialogtab">';

_strdialog += '<div id="divcolorwrapper" class="divdialogitemz">';
_strdialog += '<input id="txtbackgroundcolorautoid" name="txtbackgroundcolorautoid" class="settingzautoid" type="text"/>';
_strdialog += '<span id="lblpickcolor">background color for dialogz</span>';
_strdialog += '<input id="txtbackgroundcolor" name="txtbackgroundcolor" type="color"/>';
_strdialog += '<span id="lblcolor"></span>';
_strdialog += '</div>';

_strdialog += '<div id="divshowbackgroundimage" class="divdialogitemz">';
_strdialog += '<input id="txtshowbackgroundimageautoid" name="txtshowbackgroundimageautoid" class="settingzautoid" type="text"/>';
_strdialog += '<input id="chkshowbackgroundimage" name="chkshowbackgroundimage" type="checkbox"/>';
_strdialog += '<span id="lblshowbackgroundimage">show background image in dialogs</span>';
_strdialog += '</div>';

_strdialog += '<div id="divchoosebackgroundimage" class="divdialogitemz">';
_strdialog += '<input id="txtbackgroundimageautoid" name="txtbackgroundimageautoid" class="settingzautoid" type="text"/>';
_strdialog += '<span id="lblchoosebackgroundimage">choose background image for dialogs</span>';

_strdialog += '<div id="divbackgroundimagefileuploda">';
_strdialog += '<input id="txtbackgroundimage" name="txtbackgroundimage" type="file"/>';
_strdialog += '</div>';

_strdialog += '<div id="divbackgroundimageinfo"></div>';
_strdialog += '<img src="images/dialogbgimg.png" id="imgbackgroundimage" title="background image"/>';
_strdialog += '</div>';

_strdialog += '</div>';

_strdialog += '<div id="divcustomsettingzbtn" class="divdialogitemz">';
_strdialog += '<a id="btnsavecustomsettingz" class="btnnavcustomsettingz" title="save settings"></a>';
_strdialog += '<a id="btnresetcustomsettingz" class="btnnavcustomsettingz" title="reset settings"></a>';
_strdialog += '</div>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);

$("#imgswitchndirikanasettingz").on("click", function(){
var _chkndirikana = document.getElementById("chkndirikanasettingz");
var _imgtoggleswitch = document.getElementById("imgswitchndirikanasettingz");
if($("#imgswitchndirikanasettingz").hasClass("toggled")){
_imgtoggleswitch.src = "images/switchoff.png";
$("#imgswitchndirikanasettingz").removeClass("toggled");
_chkndirikana.checked = false;
}
else{
_imgtoggleswitch.src = "images/switchon.png";
$("#imgswitchndirikanasettingz").addClass("toggled");
_chkndirikana.checked = true;
}

});

//listen for change event in txtbackgroundcolor.
try{
document.getElementById("txtbackgroundcolor").addEventListener("change", function(){
var _color = document.getElementById("txtbackgroundcolor").value;

var _divcustomsettingz = document.getElementById("divcustomsettingz");
_divcustomsettingz.style.backgroundColor = _color;

$("#lblcolor").html(_color);

_map.set(_color, _color);

setstorages("divdialogbackgroundcolor", _color);
SetPersistentCookie("divdialogbackgroundcolor", _color);

console.info(_map);

var _backgroundcolor_session_storages = localStorage.getItem("background colors used");
if(_backgroundcolor_session_storages !== null && _backgroundcolor_session_storages !== undefined){
var _prepend_backgroundcolors = _backgroundcolor_session_storages.concat(":" + _color);
setstorages("background colors used", _prepend_backgroundcolors);
SetPersistentCookie("background colors used", _prepend_backgroundcolors);
}else{
setstorages("background colors used", _color);
SetPersistentCookie("background colors used", _color);
}

}, false);
appendapplogz("wired txtbackgroundcolor change Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgclosecustomsettingz.
try{
document.getElementById("imgclosecustomsettingz").addEventListener("click", function(){
$("#divcustomsettingz").removeClass("toggled");
$("#divcustomsettingz").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _body = document.getElementById("body");
//_body.removeChild(document.getElementById("divcustomsettingz"));

}, false);
appendapplogz("wired imgclosecustomsettingz click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

$("#btnsavecustomsettingz").on("mouseover", function(){
$("#btnsavecustomsettingz").css({

'background-color': 'white',
'background-image': 'url(images/crudtools.jpg)',
'background-repeat': 'no-repeat',
'background-position': '-24px 5px'
});
});

$("#btnresetcustomsettingz").on("mouseover", function(){
$("#btnresetcustomsettingz").css({

'background-color': 'white',
'background-image': 'url(images/crudtools.jpg)',
'background-repeat': 'no-repeat',
'background-position': '4px 3px'
});
});

$("#btnsavecustomsettingz").on("mouseout", function(){
$("#btnsavecustomsettingz").css({

'background-color': 'white',
'background-image': 'url(images/crudtools.png)',
'background-repeat': 'no-repeat',
'background-position': '-24px 5px'
});
});

$("#btnresetcustomsettingz").on("mouseout", function(){

$("#btnresetcustomsettingz").css({

'background-color': 'white',
'background-image': 'url(images/crudtools.png)',
'background-repeat': 'no-repeat',
'background-position': '4px 3px'
});
});

$("#chkshowbackgroundimage").on("change", function(){
var _showbackgroundimage = false;
var _chkshowbackgroundimage = document.getElementById("chkshowbackgroundimage");
_showbackgroundimage = _chkshowbackgroundimage.checked;

if(_showbackgroundimage){
$("#divchoosebackgroundimage").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
}else{
$("#divchoosebackgroundimage").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
}
});

$("#imgbackgroundimage").on("mouseover", function(){
$("#imgbackgroundimage").css({

'border': 'solid 1px #000',
'border-radius': '5px'
});
});

$("#imgbackgroundimage").on("mouseout", function(){
$("#imgbackgroundimage").css({

'border': 'dotted 1px #000',
'border-radius': '5px'
});
});

$("#imgbackgroundimage").on("click", function(){

});

$("#txtbackgroundimage").on("change", function(){
onbackgroundimageuploaded();
});

$("#btnsavecustomsettingz").on("click", function(){
persistsettingztocachestorage();
persistsettingztoindexdbstorage();
});

$("#btnresetcustomsettingz").on("click", function(){
var _txtbackgroundcolor = document.getElementById("txtbackgroundcolor");
_txtbackgroundcolor.value = _defaultdialogbackgroundcolor;
var _lblcolor = document.getElementById("lblcolor");
_lblcolor.textContent = _defaultdialogbackgroundcolor;
var _chkhighlightsearchsyntax = document.getElementById("chkhighlightsearchsyntax");
_chkhighlightsearchsyntax.checked = true;
var _chkenforcepasswordencryption = document.getElementById("chkenforcepasswordencryption");
_chkenforcepasswordencryption.checked = true;
var _chkshowmenu = document.getElementById("chkshowmenu");
_chkshowmenu.checked = true;
var _chkshowgeneralinfo = document.getElementById("chkshowgeneralinfo");
_chkshowgeneralinfo.checked = true;
var _rdosettingzencryptedlogin = document.getElementById("rdosettingzencryptedlogin");
_rdosettingzencryptedlogin.checked = true;
var _rdosettingzdatabaselocal = document.getElementById("rdosettingzdatabaselocal");
_rdosettingzdatabaselocal.checked = true;
var _chkshowbackgroundimage = document.getElementById("chkshowbackgroundimage");
_chkshowbackgroundimage.checked = true;
$("#divchoosebackgroundimage").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
var _imgbackgroundimage = document.getElementById("imgbackgroundimage");
_imgbackgroundimage.src = "http://localhost:2019/nyax/images/dialogbgimg.png";
});

var _settingsarrayonload = [];
_settingsarrayonload = getsettingsvaluesarray();

$("#divcustomsettingz").on("mousemove", function(){

var _currentsettingsarray = [];
_currentsettingsarray = getsettingsvaluesarray();

var _hassettingschanged = checkifsettingshavechanged(_settingsarrayonload, _currentsettingsarray);

if(_hassettingschanged){
$("#btnsavecustomsettingz").css({

'display': 'block'
});
}else{
$("#btnsavecustomsettingz").css({

'display': 'none'
});
}

});

toggleswitch();

populatesettingzfromcachestorageonload();

retrievesettingzfromdb();

//listen for click event in btnmediatab. 
try{
document.getElementById("btnmediatab").addEventListener("click", 

function(){
$(".divsettingzdialogtab").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#divmediatab").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgmediatab = document.getElementById("imgmediatab");
_imgmediatab.src = "images/tabimg.jpg";

var _imgsystemtab = document.getElementById("imgsystemtab");
_imgsystemtab.src = "images/tabimg.png";

var _imgdialogtab = document.getElementById("imgdialogtab");
_imgdialogtab.src = "images/tabimg.png";

}

, false);
appendapplogz("wired btnmediatab Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnsystemtab. 
try{
document.getElementById("btnsystemtab").addEventListener("click", 

function(){
$(".divsettingzdialogtab").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#divsystemtab").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgmediatab = document.getElementById("imgmediatab");
_imgmediatab.src = "images/tabimg.png";

var _imgsystemtab = document.getElementById("imgsystemtab");
_imgsystemtab.src = "images/tabimg.jpg";

var _imgdialogtab = document.getElementById("imgdialogtab");
_imgdialogtab.src = "images/tabimg.png";

}

, false);
appendapplogz("wired btnsystemtab Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btndialogtab. 
try{
document.getElementById("btndialogtab").addEventListener("click", 

function(){
$(".divsettingzdialogtab").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#divdialogtab").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgmediatab = document.getElementById("imgmediatab");
_imgmediatab.src = "images/tabimg.png";

var _imgsystemtab = document.getElementById("imgsystemtab");
_imgsystemtab.src = "images/tabimg.png";

var _imgdialogtab = document.getElementById("imgdialogtab");
_imgdialogtab.src = "images/tabimg.jpg";

}

, false);
appendapplogz("wired btndialogtab Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

$("#imgvideocontrolssettingz").on("click", function(){
if($("#imgvideocontrolssettingz").hasClass("toggled")){
$("#imgvideocontrolssettingz").removeClass("toggled");
var _imgtoggle = document.getElementById("imgvideocontrolssettingz");
_imgtoggle.src = "images/switchoff.png";
_bool_showvideocontrols = false;
updatevideosettingstodbstorage("videocontrols", _bool_showvideocontrols);
}
else{
$("#imgvideocontrolssettingz").addClass("toggled");
var _imgtoggle = document.getElementById("imgvideocontrolssettingz");
_imgtoggle.src = "images/switchon.png";
_bool_showvideocontrols = true;
updatevideosettingstodbstorage("videocontrols", _bool_showvideocontrols);
}
});

$("#imgloopsettingz").on("click", function(){
if($("#imgloopsettingz").hasClass("toggled")){
$("#imgloopsettingz").removeClass("toggled");
var _imgtoggle = document.getElementById("imgloopsettingz");
_imgtoggle.src = "images/switchoff.png";
_bool_loop = false;
updatevideosettingstodbstorage("videoloop", _bool_loop);
}
else{
$("#imgloopsettingz").addClass("toggled");
var _imgtoggle = document.getElementById("imgloopsettingz");
_imgtoggle.src = "images/switchon.png";
_bool_loop = true;
updatevideosettingstodbstorage("videoloop", _bool_loop);
}
});

$("#imgautoplaysettingz").on("click", function(){
if($("#imgautoplaysettingz").hasClass("toggled")){
$("#imgautoplaysettingz").removeClass("toggled");
var _imgtoggle = document.getElementById("imgautoplaysettingz");
_imgtoggle.src = "images/switchoff.png";
_bool_autoplay = false;
updatevideosettingstodbstorage("videoloop", _bool_autoplay);
}
else{
$("#imgautoplaysettingz").addClass("toggled");
var _imgtoggle = document.getElementById("imgautoplaysettingz");
_imgtoggle.src = "images/switchon.png";
_bool_autoplay = true;
updatevideosettingstodbstorage("videoloop", _bool_autoplay);
}
});

$("#imgshufflesettingz").on("click", function(){
if($("#imgshufflesettingz").hasClass("toggled")){
$("#imgshufflesettingz").removeClass("toggled");
var _imgtoggle = document.getElementById("imgshufflesettingz");
_imgtoggle.src = "images/switchoff.png";
_bool_shuffle = false;
updatevideosettingstodbstorage("videoshuffle", _bool_shuffle);
}
else{
$("#imgshufflesettingz").addClass("toggled");
var _imgtoggle = document.getElementById("imgshufflesettingz");
_imgtoggle.src = "images/switchon.png";
_bool_shuffle = true;
updatevideosettingstodbstorage("videoshuffle", _bool_shuffle);
}
});

$("#cbomediatypesettingz").on("change", function(){
_mediatype = document.getElementById("cbomediatypesettingz").value;
updatevideosettingstodbstorage("mediatype", _mediatype);
});

$("#cbovideofitsettingz").on("change", function(){
_videofit = document.getElementById("cbovideofitsettingz").value;
updatevideosettingstodbstorage("videofit", _videofit);
});

}

if($("#divcustomsettingz").hasClass("toggled")){

$("#divcustomsettingz").removeClass("toggled");
$("#divcustomsettingz").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

}
else{

$("#divcustomsettingz").addClass("toggled");
$("#divcustomsettingz").css({

'background-color': _defaultdialogbackgroundcolor,
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'height': '70%',
'width': '27%',
'z-index': '8000',
'top': '10%',
'left': '43%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divtabcontrolz").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'padding': '1px',
'margin': '1px'
});

$("#divtabcontrolz a").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'padding': '1px',
'margin': '1px'
});

$("#divtabcontrolz img").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px',
'padding': '1px',
'margin': '1px'
});

$("#divclosecustomsettingz").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'right': '1%',
'top': '1%'
});

$("#divcustomsettingzdialogitems").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'width': '89%',
'height': '100%',
'left': '1%',
'top': '1%',
'overflow-y': 'auto',
'overflow-x': 'hidden'
});

$(".divdialogitemz").css({

'position': 'relative',
'display': 'block',
'padding': '2px',
'margin': '2px',
'float': 'left',
'clear': 'both',
'width': '95%',
'height': 'auto',
'border': 'dotted 1px white',
'border-radius': '5px'
});

$("#divcolorwrapper").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'left',
'clear': 'none',
'width': '95%',
'height': 'auto',
'left': '1%'
});

$("#lblcustomsettingzdialogtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#imgclosecustomsettingz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$(".settingzautoid").css({

'position': 'relative',
'display': 'none',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': '90%',
'height': '20px',
'border': 'solid 0px #000'
});

$("#lblpickcolor").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#lblcolor").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#txtbackgroundcolor").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': '90%',
'height': '20px',
'border': 'solid 0px #000'
});

$(".imgnavcustomsettingz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$(".btnnavcustomsettingz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '5px'
});

$("#btnsavecustomsettingz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '25px',
'height': '30px',
'background-color': 'white',
'background-image': 'url(images/crudtools.png)',
'background-repeat': 'no-repeat',
'background-position': '-24px 5px'
});

$("#btnresetcustomsettingz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '27px',
'height': '30px',
'background-color': 'white',
'background-image': 'url(images/crudtools.png)',
'background-repeat': 'no-repeat',
'background-position': '4px 3px'
});

$("#divchoosebackgroundimage").css({

'display': 'none',
'width': '95%',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#divbackgroundimagefileuploda").css({

'padding': '1px',
'margin': '1px',
'background-color': '#E0ECE6',
'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'width': '97%',
'height': 'auto'
});

$("#txtbackgroundimage").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'padding-right': '2px',
'overflow': 'hidden',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'width': 'auto',
'height': 'auto',
'border': 'solid 0px #000'
});

$("#imgbackgroundimage").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': '95%',
'height': '100px',
'border': 'dotted 1px #000',
'border-radius': '5px'
});

$("#lblndirikanasettingz").css({

'position': 'relative',
'display': 'block',
'left': '5%',
'clear': 'none',
'float': 'left',
'padding': '5px'
});

$("#imgswitchndirikanasettingz").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none'
});

$("#chkndirikanasettingz").css({

'display': 'none'
});

$(".divcustomizevideocontrolz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': '95%',
'height': 'auto'
});

$(".divcustomizevideocontrolz span").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

$(".divcustomizevideocontrolz select").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".divcustomizevideocontrolz img").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".divsettingzdialogtab").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

$("#divdialogtab").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

setdialogzbackgroundcolor("divcustomsettingz");
setdialogzbackgroundimage("divcustomsettingz");

}


}catch(err){
logglobalerrors(err);
}
}

function checkifsettingshavechanged(_settingsarrayonload, _currentsettingsarray){
var _hassettingschanged = false;
for(var i = 0; i < _settingsarrayonload.length; i++){
var _settingload = _settingsarrayonload[i];
var _currentsetting = _currentsettingsarray[i];
if(_settingload.settingvalue === null || _settingload.settingvalue === undefined || _currentsetting.settingvalue === null || _currentsetting.settingvalue === undefined){
_hassettingschanged = false;
break;
}
if(_settingload.settingvalue !== _currentsetting.settingvalue){
_hassettingschanged = true;
break;
}else{
_hassettingschanged = false;
}
}
return _hassettingschanged;
}

function getsettingsvaluesarray(){
var dbused;
var loginused;
var _settingsarr = [];

var _settingobj = new Object();

Object.defineProperty(_settingobj, "autoid",
{
value: "",
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_settingobj, "settingkey",
{
value: "",
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_settingobj, "settingvalue",
{
value: "",
configurable: true,
readable: true,
writable: true
});

var _txtbackgroundcolorautoid = document.getElementById("txtbackgroundcolorautoid");
var _txtbackgroundcolor = document.getElementById("txtbackgroundcolor");
_settingobj.autoid = _txtbackgroundcolorautoid.value;
_settingobj.settingkey = "backgroundcolor";
_settingobj.settingvalue = _txtbackgroundcolor.value;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txthighlightsearchsyntaxautoid = document.getElementById("txthighlightsearchsyntaxautoid");
var _chkhighlightsearchsyntax = document.getElementById("chkhighlightsearchsyntax");
_settingobj.autoid = _txthighlightsearchsyntaxautoid.value;
_settingobj.settingkey = "highlightsearchsyntax";
_settingobj.settingvalue = _chkhighlightsearchsyntax.checked;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txtenforcepasswordencryptionautoid = document.getElementById("txtenforcepasswordencryptionautoid");
var _chkenforcepasswordencryption = document.getElementById("chkenforcepasswordencryption");
_settingobj.autoid = _txtenforcepasswordencryptionautoid.value;
_settingobj.settingkey = "enforcepasswordencryption";
_settingobj.settingvalue = _chkenforcepasswordencryption.checked;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txtshowmenuautoid = document.getElementById("txtshowmenuautoid");
var _chkshowmenu = document.getElementById("chkshowmenu");
_settingobj.autoid = _txtshowmenuautoid.value;
_settingobj.settingkey = "showmenu";
_settingobj.settingvalue = _chkshowmenu.checked;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txtshowgeneralinfoautoid = document.getElementById("txtshowgeneralinfoautoid");
var _chkshowgeneralinfo = document.getElementById("chkshowgeneralinfo");
_settingobj.autoid = _txtshowgeneralinfoautoid.value;
_settingobj.settingkey = "showgeneralinfo";
_settingobj.settingvalue = _chkshowgeneralinfo.checked;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txtloginmodeautoid = document.getElementById("txtloginmodeautoid");
var _rdosettingzencryptedlogin = document.getElementById("rdosettingzencryptedlogin");
if(_rdosettingzencryptedlogin.checked){
loginused = "encryptedlogin";
}else{
loginused = "basiclogin";
}
_settingobj.autoid = _txtloginmodeautoid.value;
_settingobj.settingkey = "loginmode";
_settingobj.settingvalue = loginused;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txtdatabasetouseautoid = document.getElementById("txtdatabasetouseautoid");
var _rdosettingzdatabaselocal = document.getElementById("rdosettingzdatabaselocal");
if(_rdosettingzdatabaselocal.checked){
dbused = "localdb";
}else{
dbused = "clouddb";
}
_settingobj.autoid = _txtdatabasetouseautoid.value;
_settingobj.settingkey = "databasetouse";
_settingobj.settingvalue = dbused;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txtshowbackgroundimageautoid = document.getElementById("txtshowbackgroundimageautoid");
var _chkshowbackgroundimage = document.getElementById("chkshowbackgroundimage");
_settingobj.autoid = _txtshowbackgroundimageautoid.value;
_settingobj.settingkey = "showbackgroundimage";
_settingobj.settingvalue = _chkshowbackgroundimage.checked;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

var _txtbackgroundimageautoid = document.getElementById("txtbackgroundimageautoid");
var _imgbackgroundimage = document.getElementById("imgbackgroundimage");
_settingobj.autoid = _txtbackgroundimageautoid.value;
_settingobj.settingkey = "backgroundimage";
var _strimg = _imgbackgroundimage.src;
var _arrimg = _strimg.split("/");
var _folder = _arrimg[4];
var _file = _arrimg[5];
var _imgurl = _folder + "/" + _file;
_settingobj.settingvalue = _imgurl;
_settingsarr.push(createobjectpropz(_settingobj, _settingobj.autoid, _settingobj.settingkey, _settingobj.settingvalue));

return _settingsarr;
}

function createobjectpropz(_settingobj, autoid, settingkey, settingvalue){
var _settingobj = new Object();

Object.defineProperty(_settingobj, "autoid",
{
value: autoid,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_settingobj, "settingkey",
{
value: settingkey,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_settingobj, "settingvalue",
{
value: settingvalue,
configurable: true,
readable: true,
writable: true
});

return _settingobj;
}

function persistsettingztocachestorage(){
try{
var _settings = getsettingsvaluesarray();
for(var i = 0; i < _settings.length; i++){
var _settingobj = _settings[i];
if(_settingobj !== null && _settingobj !== undefined){
setstorages(_settingobj.settingkey, _settingobj.settingvalue);
SetPersistentCookie(_settingobj.settingkey, _settingobj.settingvalue);
}
}
}catch(err){
logglobalerrors(err);
}
}

function persistsettingztoindexdbstorage(){
try{
var _settings = getsettingsvaluesarray();
for(var i = 0; i < _settings.length; i++){
var _settingobj = _settings[i];
if(_settingobj !== null && _settingobj !== undefined){
togglesaveorupdatesetting(_settingobj);
}
}
}catch(err){
logglobalerrors(err);
}
}

function populatesettingzfromcachestorageonload(){
try{

var dbused = "";
var loginused = "";
var _value = "";

var _txtbackgroundcolor = document.getElementById("txtbackgroundcolor");
_txtbackgroundcolor.value = getstorage("backgroundcolor", _defaultdialogbackgroundcolor);
var _lblcolor = document.getElementById("lblcolor");
_lblcolor.textContent = getstorage("backgroundcolor", _defaultdialogbackgroundcolor);
var _chkhighlightsearchsyntax = document.getElementById("chkhighlightsearchsyntax");
_chkhighlightsearchsyntax.checked = getstorage("highlightsearchsyntax", true);
var _chkenforcepasswordencryption = document.getElementById("chkenforcepasswordencryption");
_chkenforcepasswordencryption.checked = getstorage("enforcepasswordencryption", true);
var _chkshowmenu = document.getElementById("chkshowmenu");
_chkshowmenu.checked = getstorage("showmenu", true);
var _chkshowgeneralinfo = document.getElementById("chkshowgeneralinfo");
_chkshowgeneralinfo.checked = getstorage("showgeneralinfo", true);
loginused = getstorage("loginmode", "encryptedlogin");
if(loginused === "encryptedlogin"){
var _rdosettingzencryptedlogin = document.getElementById("rdosettingzencryptedlogin");
_rdosettingzencryptedlogin.checked = true;
}else{
var _rdosettingzbasiclogin = document.getElementById("rdosettingzbasiclogin");
_rdosettingzbasiclogin.checked = true;
}
dbused = getstorage("database", "localdb");
if(dbused === "localdb"){
var _rdosettingzdatabaselocal = document.getElementById("rdosettingzdatabaselocal");
_rdosettingzdatabaselocal.checked = true;
}else{
var _rdosettingzdatabasecloud = document.getElementById("rdosettingzdatabasecloud");
_rdosettingzdatabasecloud.checked = true;
}
var _chkshowbackgroundimage = document.getElementById("chkshowbackgroundimage");
var _showbackgroundimage = getstorage("showbackgroundimage", true);
_chkshowbackgroundimage.checked = _showbackgroundimage;
if(_showbackgroundimage){
$("#divchoosebackgroundimage").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
}else{
$("#divchoosebackgroundimage").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
}
var _imgbackgroundimage = document.getElementById("imgbackgroundimage");
_imgbackgroundimage.src = getstorage("backgroundimage", "images/dialogbgimg.png");
_value = getstorage("videoautoplay", _bool_autoplay);
if(_value){
var _imgautoplay = document.getElementById("imgautoplaysettingz");
_imgautoplay.src = "images/switchon.png";
}else{
var _imgautoplay = document.getElementById("imgautoplaysettingz");
_imgautoplay.src = "images/switchoff.png";
}
_value = getstorage("videoloop", _bool_loop);
if(_value){
var _imgloop = document.getElementById("imgloopsettingz");
_imgloop.src = "images/switchon.png";
}else{
var _imgloop = document.getElementById("imgloopsettingz");
_imgloop.src = "images/switchoff.png";
}
_value = getstorage("videocontrols", _bool_showvideocontrols);
if(_value){
var _imgvideocontrols = document.getElementById("imgvideocontrolssettingz");
_imgvideocontrols.src = "images/switchon.png";
}else{
var _imgvideocontrols = document.getElementById("imgvideocontrolssettingz");
_imgvideocontrols.src = "images/switchoff.png";
}
_value = getstorage("videoshuffle", _bool_shuffle);
if(_value){
var _imgshuffle = document.getElementById("imgshufflesettingz");
_imgshuffle.src = "images/switchon.png";
}else{
var _imgshuffle = document.getElementById("imgshufflesettingz");
_imgshuffle.src = "images/switchoff.png";
}
_value = getstorage("mediatype", _mediatype);
var _cbomediatype = document.getElementById("cbomediatypesettingz");
_cbomediatype.value = _value;
_value = getstorage("videofit", _videofit);
var _cbovideofit = document.getElementById("cbovideofitsettingz");
_cbovideofit.value = _value;

}catch(err){
logglobalerrors(err);
}
}

function updateuixsettingzfromdbtocachestorageonload(recordsarr){
try{

var _settings = recordsarr;
for(var i = 0; i < _settings.length; i++){
var _key = _settings[i].settingkey;
var _value = _settings[i].settingvalue;
var _autoid = _settings[i].autoid;
if(_key !== null && _key !== undefined && _value !== null && _value !== undefined){
setstorages(_key, _value);
SetPersistentCookie(_key, _value);
}
}

hideprogressdiv();

}catch(err){
logglobalerrors(err);
hideprogressdiv();
}
}

function populatesettingzfromdboncallback(recordsarr){
try{

var dbused;
var loginused;
var _arrrecords = recordsarr;

for(var i = 0; i < _arrrecords.length; i++){

var _key = _arrrecords[i].settingkey;
var _value = _arrrecords[i].settingvalue;
var _autoid = _arrrecords[i].autoid;

switch(_key){
case "backgroundcolor":
var _txtbackgroundcolor = document.getElementById("txtbackgroundcolor");
_txtbackgroundcolor.value = _value;
var _lblcolor = document.getElementById("lblcolor");
_lblcolor.textContent = _value;
var _txtbackgroundcolorautoid = document.getElementById("txtbackgroundcolorautoid");
_txtbackgroundcolorautoid.value = _autoid;
setstorages("divdialogbackgroundcolor", _value);
SetPersistentCookie("divdialogbackgroundcolor", _value);
break;
case "highlightsearchsyntax":
var _chkhighlightsearchsyntax = document.getElementById("chkhighlightsearchsyntax");
_chkhighlightsearchsyntax.checked = _value;
var _txthighlightsearchsyntaxautoid = document.getElementById("txthighlightsearchsyntaxautoid");
_txthighlightsearchsyntaxautoid.value = _autoid;
break;
case "enforcepasswordencryption":
var _chkenforcepasswordencryption = document.getElementById("chkenforcepasswordencryption");
_chkenforcepasswordencryption.checked = _value;
var _txtenforcepasswordencryptionautoid = document.getElementById("txtenforcepasswordencryptionautoid");
_txtenforcepasswordencryptionautoid.value = _autoid;
break;
case "showmenu":
var _chkshowmenu = document.getElementById("chkshowmenu");
_chkshowmenu.checked = _value;
var _txtshowmenuautoid = document.getElementById("txtshowmenuautoid");
_txtshowmenuautoid.value = _autoid;
break;
case "showgeneralinfo":
var _chkshowgeneralinfo = document.getElementById("chkshowgeneralinfo");
_chkshowgeneralinfo.checked = _value;
var _txtshowgeneralinfoautoid = document.getElementById("txtshowgeneralinfoautoid");
_txtshowgeneralinfoautoid.value = _autoid;
break;
case "loginmode":
if(_value === "encryptedlogin"){
var _rdosettingzencryptedlogin = document.getElementById("rdosettingzencryptedlogin");
_rdosettingzencryptedlogin.checked = true;
}else{
var _rdosettingzbasiclogin = document.getElementById("rdosettingzbasiclogin");
_rdosettingzbasiclogin.checked = true;
}
var _txtloginmodeautoid = document.getElementById("txtloginmodeautoid");
_txtloginmodeautoid.value = _autoid;
break;
case "databasetouse":
if(_value === "localdb"){
var _rdosettingzdatabaselocal = document.getElementById("rdosettingzdatabaselocal");
_rdosettingzdatabaselocal.checked = true;
}else{
var _rdosettingzdatabasecloud = document.getElementById("rdosettingzdatabasecloud");
_rdosettingzdatabasecloud.checked = true;
}
var _txtdatabasetouseautoid = document.getElementById("txtdatabasetouseautoid");
_txtdatabasetouseautoid.value = _autoid;
break;
case "showbackgroundimage":
var _chkshowbackgroundimage = document.getElementById("chkshowbackgroundimage");
var _showbackgroundimage = _value;
_chkshowbackgroundimage.checked = _showbackgroundimage;
var _txtshowbackgroundimageautoid = document.getElementById("txtshowbackgroundimageautoid");
_txtshowbackgroundimageautoid.value = _autoid;
if(_showbackgroundimage){
$("#divchoosebackgroundimage").css({

'display': 'block',
'z-index': '5000',
'left': '1px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
}else{
$("#divchoosebackgroundimage").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
}
break;
case "backgroundimage":
var _imgbackgroundimage = document.getElementById("imgbackgroundimage");
_imgbackgroundimage.src = _value;
var _txtbackgroundimageautoid = document.getElementById("txtbackgroundimageautoid");
_txtbackgroundimageautoid.value = _autoid;
setstorages("divdialogbackgroundimage", _value);
SetPersistentCookie("divdialogbackgroundimage", _value);
break;
case "videoautoplay":
if(_value){
var _imgautoplay = document.getElementById("imgautoplaysettingz");
_imgautoplay.src = "images/switchon.png";
}else{
var _imgautoplay = document.getElementById("imgautoplaysettingz");
_imgautoplay.src = "images/switchoff.png";
}
_bool_autoplay = _value;
setstorages("videoautoplay", _value);
SetPersistentCookie("videoautoplay", _value);
break;
case "videoloop":
if(_value){
var _imgloop = document.getElementById("imgloopsettingz");
_imgloop.src = "images/switchon.png";
}else{
var _imgloop = document.getElementById("imgloopsettingz");
_imgloop.src = "images/switchoff.png";
}
_bool_loop = _value;
setstorages("videoloop", _value);
SetPersistentCookie("videoloop", _value);
break;
case "videocontrols":
if(_value){
var _imgvideocontrols = document.getElementById("imgvideocontrolssettingz");
_imgvideocontrols.src = "images/switchon.png";
}else{
var _imgvideocontrols = document.getElementById("imgvideocontrolssettingz");
_imgvideocontrols.src = "images/switchoff.png";
}
_bool_showvideocontrols = _value;
setstorages("videocontrols", _value);
SetPersistentCookie("videocontrols", _value);
break;
case "videoshuffle":
if(_value){
var _imgshuffle = document.getElementById("imgshufflesettingz");
_imgshuffle.src = "images/switchon.png";
}else{
var _imgshuffle = document.getElementById("imgshufflesettingz");
_imgshuffle.src = "images/switchoff.png";
}
_bool_shuffle = _value;
setstorages("videoshuffle", _value);
SetPersistentCookie("videoshuffle", _value);
break;
case "mediatype":
var _cbomediatype = document.getElementById("cbomediatypesettingz");
_cbomediatype.value = _value;
setstorages("mediatype", _value);
SetPersistentCookie("mediatype", _value);
break;
case "currentvideo":
_currentvideo = _value;
setstorages("currentvideo", _value);
SetPersistentCookie("currentvideo", _value);
break;
case "videofit":
var _cbovideofit = document.getElementById("cbovideofitsettingz");
_cbovideofit.value = _value;
setstorages("videofit", _value);
SetPersistentCookie("videofit", _value);
break;
}

}

}catch(err){
logglobalerrors(err);
}
}

function showmediamenudialog(){
try{

var _divdialog  = document.getElementById("divmediamenudialog");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divmediamenudialog" class="divdialog">';

_strdialog += '<div id="divclosemediamenu">';
_strdialog += '<img src="images/messageboxerror.ico" id="imgclosemediamenu" title="close"/>';
_strdialog += '</div>';

_strdialog += '<div id="divmediamenudialogitems">';
_strdialog += '<span id="lblmediamenudialogtitle">media menu</span>';
_strdialog += '<a id="btnnavkujukiambicha" class="btnnavmediamenu" title="kujukia mbicha">';
_strdialog += '<img src="images/accountlogo.png" id="imgkujukiambicha" class="imgnavmediamenu" title="kujukia mbicha"/>';
_strdialog += 'kujukia mbicha';
_strdialog += '<a/>';
_strdialog += '<a id="btnnavkuonamichibi" class="btnnavmediamenu" title="media">';
_strdialog += '<img src="images/unresizedvideo.png" id="imgkuonamichibi" class="imgnavmediamenu" title="show media"/>';
_strdialog += 'media';
_strdialog += '<a/>';
_strdialog += '<a id="btnnavfacebook" class="btnnavmediamenu" title="facebook">';
_strdialog += '<img src="images/facebook.png" class="imgnavmediamenu" title="facebook"/>';
_strdialog += 'facebook';
_strdialog += '<a/>';
_strdialog += '<a id="btnnavtwitter" class="btnnavmediamenu" title="twitter">';
_strdialog += '<img src="images/twitter.png" class="imgnavmediamenu" title="twitter"/>';
_strdialog += 'twitter';
_strdialog += '<a/>';
_strdialog += '</div>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);

//listen for click event in imgclosemediamenu.
try{
document.getElementById("imgclosemediamenu").addEventListener("click", function(){

$("#divmediamenudialog").removeClass("toggled");
$("#divmediamenudialog").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgmediamenu = document.getElementById("imgmediamenu");
_imgmediamenu.src = "images/toggleoff.png";
_imgmediamenu.title = "show media menu";

var _body = document.getElementById("body");
//_body.removeChild(document.getElementById("divmediamenudialog"));

}, false);
appendapplogz("wired imgclosemediamenu click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnnavkuonamichibi. 
try{
document.getElementById("btnnavkuonamichibi").addEventListener("click", showvideodialog, false);
appendapplogz("wired btnnavkuonamichibi Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnnavkujukiambicha. 
try{
document.getElementById("btnnavkujukiambicha").addEventListener("click", showuploadfiledialog, false);
appendapplogz("wired btnnavkujukiambicha Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}

if($("#divmediamenudialog").hasClass("toggled")){

$("#divmediamenudialog").removeClass("toggled");
$("#divmediamenudialog").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgmediamenu = document.getElementById("imgmediamenu");
_imgmediamenu.src = "images/toggleoff.png";
_imgmediamenu.title = "show media menu";

}
else{

$("#divmediamenudialog").addClass("toggled");
$("#divmediamenudialog").css({

'background-color': _defaultdialogbackgroundcolor,
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'height': 'auto',
'width': '23%',
'z-index': '8500',
'top': '10%',
'left': '14%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

if($("#divsettingzoption").hasClass("toggled")){
$("#divmediamenudialog").css({

'left': '43%'
});
}

if($("#divcustomsettingz").hasClass("toggled")){
$("#divmediamenudialog").css({

'top': '10%',
'left': '43%'
});
}

var _imgmediamenu = document.getElementById("imgmediamenu");
_imgmediamenu.src = "images/toggleon.png";
_imgmediamenu.title = "hide media menu";

$("#divclosemediamenu").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'right': '1%',
'top': '1%'
});

$("#divmediamenudialogitems").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '1%',
'top': '1%'
});

$("#lblmediamenudialogtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#imgclosemediamenu").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$(".imgnavmediamenu").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$(".btnnavmediamenu").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '5px'
});

setdialogzbackgroundcolor("divmediamenudialog");
setdialogzbackgroundimage("divmediamenudialog");

}


}catch(err){
logglobalerrors(err);
}
}

function onbackgroundimageuploaded(){
try{

cleardiveventnotifier();

var _fileuploda = $("#txtbackgroundimage");

var _uplodafilez = _fileuploda[0].files[0];

console.info("name [ " + _uplodafilez.name + " ]");
console.info("size [ " + _uplodafilez.size + " ]");
console.info("type [ " + _uplodafilez.type + " ]");
console.info("FullYear [ " + _uplodafilez.lastModifiedDate.getFullYear() + " ]");
console.info("Month [ " + _uplodafilez.lastModifiedDate.getMonth() + " ]");
console.info("Day [ " + _uplodafilez.lastModifiedDate.getDay() + " ]");
console.info("Hours [ " + _uplodafilez.lastModifiedDate.getHours() + " ]");
console.info("Minutes [ " + _uplodafilez.lastModifiedDate.getMinutes() + " ]");
console.info("Seconds [ " + _uplodafilez.lastModifiedDate.getSeconds() + " ]");

var _file_name = _uplodafilez.name;
console.info("_file_name [ " + _file_name + " ]");
var _file_ext = _file_name.lastIndexOf(".");
console.info("_file_ext [ " + _file_ext + " ]");
var _file_prfx = _file_name.substring(_file_name.lastIndexOf(".") + 1);
console.info("_file_prfx [ " + _file_prfx + " ]");

var _valid_image_extensions = new Array("jpg", "JPEG", "bmp", "png", "ico", "gif", "x-icon");

var i = 0;
var is_img_ext_valid = false;
var iCount = _valid_image_extensions.length;

while (i < iCount){
var _v_i_e = _valid_image_extensions[i];
_v_i_e = _v_i_e.toLowerCase();
_file_prfx = _file_prfx.toLowerCase();
if (_v_i_e === _file_prfx){
is_img_ext_valid = true;
}
i++;
}

var _sizeinbytes = parseFloat(_uplodafilez.size);
var _sizeinkb = _sizeinbytes/1000;
var _sizeinmb = _sizeinbytes/1000/1000;
var _sizeingb = _sizeinbytes/1000/1000/1000;

console.info("_sizeinbytes [ " + _sizeinbytes + " ]");
console.info("_sizeinkb [ " + _sizeinkb + " ]");
console.info("_sizeinmb [ " + _sizeinmb + " ]");
console.info("_sizeingb [ " + _sizeingb + " ]");

var _fl_size = 0;

if(_sizeinbytes < 1000){
_fl_size = _sizeinbytes;
_fl_size = _fl_size + " bytes";
}else if(_sizeinbytes >= 1000 && _sizeinkb < 1000){
_fl_size = _sizeinkb;
_fl_size = _fl_size + " KB";
}else if(_sizeinkb >= 1000 && _sizeinmb < 1000){
_fl_size = _sizeinmb;
_fl_size = _fl_size + " MB";
}else if(_sizeinmb >= 1000){
_fl_size = _sizeingb;
_fl_size = _fl_size + " GB";
}

var _imginfo = "<span class='imginfo'>name: " + _uplodafilez.name + "</span>";
_imginfo += "<span class='imginfo'>size: " + _fl_size + "</span>";
_imginfo += "<span class='imginfo'>type: " + _uplodafilez.type + "</span>";
_imginfo += "<span class='imginfo'>last modified date: " + _uplodafilez.lastModifiedDate + "</span>";

$("#divbackgroundimageinfo").html(_imginfo);

var urlimg = "images/" + _uplodafilez.name;

var _file = $("#imgbackgroundimage")[0];

if(is_img_ext_valid){

_file.alt = _uplodafilez.name;
_file.src = urlimg;
_file.title = _uplodafilez.name;
_file.width = 20;
_file.height = 20;
_file.isMap = true;

var _strimg = _file.src;
var _arrimg = _strimg.split("/");
var _folder = _arrimg[4];
var _file = _arrimg[5];
var _imgurl = _folder + "/" + _file;

setstorages("divdialogbackgroundimage", _imgurl);
SetPersistentCookie("divdialogbackgroundimage", _imgurl);

showeventsnotifierdiv("file upload successfull...", "info");

}else{

showeventsnotifierdiv("file not an image...", "error");

}

}catch(err){
logglobalerrors(err);
}
}

function setdialogzbackgroundcolor(_strdivdialogcontrol){
try{

var _divdialog = document.getElementById(_strdivdialogcontrol);
var _divdialogbackgroundcolor = localStorage.getItem("divdialogbackgroundcolor");

if(_strdivdialogcontrol === "divcustomsettingz"){
if(_divdialogbackgroundcolor != null && _divdialogbackgroundcolor != undefined){
_divdialog.style.backgroundColor = _divdialogbackgroundcolor;
}else{
var _lblcolor = $("#lblcolor")[0];
if(_lblcolor != null && _lblcolor != undefined){
var _backgroundcolor =  _lblcolor.textContent;
if(_backgroundcolor != null && _backgroundcolor != undefined){
if(_backgroundcolor !== ""){
_divdialog.style.backgroundColor = _backgroundcolor;
}else{
_lblcolor.textContent = _defaultdialogbackgroundcolor;
document.getElementById("txtbackgroundcolor").value = _defaultdialogbackgroundcolor;
_divdialog.style.backgroundColor = _defaultdialogbackgroundcolor;
}
}
}
}
}else{
if(_divdialogbackgroundcolor != null && _divdialogbackgroundcolor != undefined){
if(_divdialogbackgroundcolor !== ""){
_divdialog.style.backgroundColor = _divdialogbackgroundcolor;
}else{
_divdialog.style.backgroundColor = _defaultdialogbackgroundcolor;
}
}
}

}catch(err){
logglobalerrors(err);
}
}

var _hasmousehovered = 0;
function setdialogzbackgroundimage(_strdivdialogcontrol){
try{

$(".divdialog").on("mouseover", function(e){
var _target = e.target.id;
if(_target !== ""){
var _divdialog = document.getElementById(_target);
var _divdialogz = document.getElementsByClassName("divdialog");
if(_divdialog !== null && _divdialog !== undefined){
var _divdialogbackgroundimage = localStorage.getItem("divdialogbackgroundimage");
if(_divdialogbackgroundimage !== null && _divdialogbackgroundimage !== undefined){
if(_divdialogbackgroundimage !== ""){
_divdialog.style.backgroundImage = _divdialogbackgroundimage;
 _hasmousehovered++;

$(".divdialog").css({

'background': 'url(' +  _divdialogbackgroundimage + ') 0% 0% repeat'
});

}
}
}
}
});

}catch(err){
logglobalerrors(err);
}
}

function toggleswitch(){
try{

$("#imgtoggleswitch").on("click", function(){

if($("#imgtoggleswitch").hasClass("toggled")){

var _imgtoggleswitch = document.getElementById("imgtoggleswitch");
_imgtoggleswitch.src = "images/switchoff.png";

$("#imgtoggleswitch").removeClass("toggled");

}
else{

var _imgtoggleswitch = document.getElementById("imgtoggleswitch");
_imgtoggleswitch.src = "images/swtchon.png";

$("#imgtoggleswitch").addClass("toggled");

}


});

}catch(err){
logglobalerrors(err);
}
}

function showutethiodialog(){
try{

var _divdialog  = document.getElementById("divutethiodialog");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divutethiodialog" class="divdialog">';

_strdialog += '<div id="divcloseutethio">';
_strdialog += '<img src="images/messageboxerror.ico" id="imgcloseutethio" title="close"/>';
_strdialog += '</div>';

_strdialog += '<div id="divutethiodialogitems">';
_strdialog += '<span id="lblutethiodialogtitle">utethio</span>';

_strdialog += '<div class="divutethioitemcontainer">';
_strdialog += '<img src="images/closedtreenode.png" id="imgtoggleutethiomedia" class="imgtoggleutethio" title="show">';
_strdialog += '<span class="lblutethioitemtitle">media</span>';
_strdialog += '<div id="divutethiowrappermedia" class="divutethioitemwrapper">';
_strdialog += '<span class="lblutethioitem">';
_strdialog += 'press key n to go to next playlist.';
_strdialog += '</span>';
_strdialog += '<span class="lblutethioitem">';
_strdialog += 'press key p to go to previous playlist.';
_strdialog += '</span>';
_strdialog += '</div>';
_strdialog += '</div>';

_strdialog += '<div class="divutethioitemcontainer">';
_strdialog += '<img src="images/closedtreenode.png" id="imgtoggleutethiokiruguri" class="imgtoggleutethio" title="show">';
_strdialog += '<span class="lblutethioitemtitle">kiruguri</span>';
_strdialog += '<div id="divutethiowrapperkiruguri" class="divutethioitemwrapper">';
_strdialog += '<span class="lblutethioitem">';
_strdialog += 'encrypted login means that passwords are saved as hash text characters.';
_strdialog += '</span>';
_strdialog += '<span class="lblutethioitem">';
_strdialog += 'basic login means that passwords are saved as plain text characters.';
_strdialog += '</span>';
_strdialog += '</div>';
_strdialog += '</div>';

_strdialog += '<div class="divutethioitemcontainer">';
_strdialog += '<img src="images/closedtreenode.png" id="imgtoggleutethiomathithio" class="imgtoggleutethio" title="show">';
_strdialog += '<span class="lblutethioitemtitle">mathithio</span>';
_strdialog += '<div id="divutethiowrappermathithio" class="divutethioitemwrapper">';
_strdialog += '<span class="lblutethioitem">';
_strdialog += 'click the search icon to display search controls.';
_strdialog += '</span>';
_strdialog += '<span class="lblutethioitem">';
_strdialog += 'click the select all checkbox to select all records in the current page.';
_strdialog += '</span>';
_strdialog += '<span class="lblutethioitem">';
_strdialog += 'click the delete all button to delete all selected records in the current page.';
_strdialog += '</span>';
_strdialog += '</div>';
_strdialog += '</div>';

_strdialog += '</div>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);

//listen for click event in imgcloseutethio.
try{
document.getElementById("imgcloseutethio").addEventListener("click", function(){

$("#divutethiodialog").removeClass("toggled");
$("#divutethiodialog").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgutethio = document.getElementById("imgutethio");
_imgutethio.src = "images/help.gif";
_imgutethio.title = "show utethio";

}, false);
appendapplogz("wired imgcloseutethio click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgtoggleutethiomedia.
try{
$("#imgtoggleutethiomedia").on("click", function(){

if($("#divutethiowrappermedia").hasClass("toggled")){

$("#divutethiowrappermedia").removeClass("toggled");
$("#divutethiowrappermedia").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtoggle = document.getElementById("imgtoggleutethiomedia");
_imgtoggle.src = "images/closedtreenode.png";
_imgtoggle.title = "show";

}
else{

var _imgtoggle = document.getElementById("imgtoggleutethiomedia");
_imgtoggle.src = "images/openedtreenode.png";
_imgtoggle.title = "hide";

$("#divutethiowrappermedia").addClass("toggled");
$("#divutethiowrappermedia").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgtoggleutethiomedia click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgtoggleutethiokiruguri.
try{
$("#imgtoggleutethiokiruguri").on("click", function(){

if($("#divutethiowrapperkiruguri").hasClass("toggled")){

$("#divutethiowrapperkiruguri").removeClass("toggled");
$("#divutethiowrapperkiruguri").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtoggle = document.getElementById("imgtoggleutethiokiruguri");
_imgtoggle.src = "images/closedtreenode.png";
_imgtoggle.title = "show";

}
else{

var _imgtoggle = document.getElementById("imgtoggleutethiokiruguri");
_imgtoggle.src = "images/openedtreenode.png";
_imgtoggle.title = "hide";

$("#divutethiowrapperkiruguri").addClass("toggled");
$("#divutethiowrapperkiruguri").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgtoggleutethiokiruguri click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgtoggleutethiomathithio.
try{
$("#imgtoggleutethiomathithio").on("click", function(){

if($("#divutethiowrappermathithio").hasClass("toggled")){

$("#divutethiowrappermathithio").removeClass("toggled");
$("#divutethiowrappermathithio").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtoggle = document.getElementById("imgtoggleutethiomathithio");
_imgtoggle.src = "images/closedtreenode.png";
_imgtoggle.title = "show";

}
else{

var _imgtoggle = document.getElementById("imgtoggleutethiomathithio");
_imgtoggle.src = "images/openedtreenode.png";
_imgtoggle.title = "hide";

$("#divutethiowrappermathithio").addClass("toggled");
$("#divutethiowrappermathithio").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgtoggleutethiomathithio click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}

if($("#divutethiodialog").hasClass("toggled")){

$("#divutethiodialog").removeClass("toggled");
$("#divutethiodialog").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgutethio = document.getElementById("imgutethio");
_imgutethio.src = "images/help.gif";
_imgutethio.title = "show utethio";

}
else{

var _imgutethio = document.getElementById("imgutethio");
_imgutethio.src = "images/help.png";
_imgutethio.title = "hide utethio";

$("#divutethiodialog").addClass("toggled");
$("#divutethiodialog").css({

'background-color': _defaultdialogbackgroundcolor,
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'height': '70%',
'width': '27%',
'z-index': '8000',
'top': '10%',
'left': '43%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

if($("#divsettingzoption").hasClass("toggled")){
$("#divutethiodialog").css({

'left': '43%'
});
}

if($("#divcustomsettingz").hasClass("toggled")){
$("#divutethiodialog").css({

'top': '10%',
'left': '43%'
});
}

$("#divcloseutethio").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'right': '1%',
'top': '1%'
});

$("#divutethiodialogitems").css({

'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'width': '89%',
'height': '100%',
'left': '1%',
'top': '1%',
'overflow-y': 'auto',
'overflow-x': 'hidden'
});

$("#lblutethiodialogtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#imgcloseutethio").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$(".divutethioitemcontainer").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': '90%',
'height': 'auto'
});

$(".imgtoggleutethio").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px',
'left': '1px'
});

$(".lblutethioitemtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '5%'
});

$(".divutethioitemwrapper").css({

'position': 'relative',
'display': 'none',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': '100%',
'height': 'auto'
});

$(".lblutethioitem").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

setdialogzbackgroundcolor("divutethiodialog");
setdialogzbackgroundimage("divutethiodialog");

}


}catch(err){
logglobalerrors(err);
}
}

function showvideodialog(){
try{

var _divdialog  = document.getElementById("divvideodialog");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divvideodialog" class="divdialog">';

_strdialog += '<div id="divclosevideo">';
_strdialog += '<img src="images/messageboxerror.ico" id="imgclosevideo" title="close"/>';
_strdialog += '</div>';
_strdialog += '<div id="divvideodialogsdialogitems">';
_strdialog += '<span id="lblvideodialogtitle">media</span>';
_strdialog += '<a id="btnresizevideo" title="resize media">';
_strdialog += '<img src="images/resizedvideo.png" id="imgresizevideo" title="resize media"/>';
_strdialog += 'resize media';
_strdialog += '</a>';
_strdialog += '<a id="btncustomizevideo" title="customize media">';
_strdialog += '<img src="images/customizedvideo.jpg" id="imgcustomizevideo" title="customize media"/>';
_strdialog += 'customize media';
_strdialog += '</a>';
_strdialog += '<div id="divcustomizevideo">';
_strdialog += '<div id="divmediatype" class="divcustomizevideocontrolz">';
_strdialog += '<span id="lblmediatype">media type</span>';
_strdialog += '<select id="cbomediatype" title="media type">';
_strdialog += '<option selected="true" value="audio">audio</option>';
_strdialog += '<option value="movie">movie</option>';
_strdialog += '<option value="video">video</option>';
_strdialog += '<option value="series">series</option>';
_strdialog += '</select>';
_strdialog += '</div>';
_strdialog += '<div id="divcurrentvideo" class="divcustomizevideocontrolz">';
_strdialog += '<span id="lblcurrentvideo">current media</span>';
_strdialog += '<select id="cbocurrentvideo" title="current media">';
_strdialog += '</select>';
_strdialog += '</div>';
_strdialog += '<div id="divvideofit" class="divcustomizevideocontrolz">';
_strdialog += '<span id="lblvideofit">media fit</span>';
_strdialog += '<select id="cbovideofit" title="media fit">';
//'object-fit': 'cover', 'contain', 'fill', 'scale-down', 'unset', 'inherit', 'initial'
_strdialog += '<option selected="true" value="cover">cover</option>';
_strdialog += '<option value="contain">contain</option>';
_strdialog += '<option value="fill">fill</option>';
_strdialog += '<option value="inherit">inherit</option>';
_strdialog += '<option value="initial">initial</option>';
_strdialog += '<option value="scale-down">scale-down</option>';
_strdialog += '<option value="unset">unset</option>';
_strdialog += '</select>';
_strdialog += '</div>';
_strdialog += '<div id="divloop" class="divcustomizevideocontrolz">';
_strdialog += '<span id="lblloop">loop</span>';
_strdialog += '<img src="images/switchon.png" id="imgloop" class="toggled" title="loop"/>';
_strdialog += '</div>';
_strdialog += '<div id="divautoplay" class="divcustomizevideocontrolz">';
_strdialog += '<span id="lblautoplay">auto play</span>';
_strdialog += '<img src="images/switchon.png" id="imgautoplay" class="toggled" title="auto play"/>';
_strdialog += '</div>';
_strdialog += '<div id="divshuffle" class="divcustomizevideocontrolz">';
_strdialog += '<span id="lblshuffle">shuffle</span>';
_strdialog += '<img src="images/switchon.png" id="imgshuffle" class="toggled" title="shuffle"/>';
_strdialog += '</div>';
_strdialog += '<div id="divvideocontrols" class="divcustomizevideocontrolz">';
_strdialog += '<span id="lblvideocontrols">media controls</span>';
_strdialog += '<img src="images/switchon.png" id="imgvideocontrols" class="toggled" title="media controls"/>';
_strdialog += '</div>';
_strdialog += '<div id="divvideonavcontrolz" class="divcustomizevideocontrolz">';
_strdialog += '<a id="btnpreviousvideo" title="previous">';
_strdialog += '<img src="images/previousvideo.png" id="imgpreviousvideo" title="previous"/>';
_strdialog += 'previous';
_strdialog += '</a>';
_strdialog += '<a id="btnnextvideo" title="next">';
_strdialog += '<img src="images/nextvideo.png" id="imgnextvideo" title="next"/>';
_strdialog += 'next';
_strdialog += '</a>';
_strdialog += '<a id="btnopenmediainnewtab" title="open media in dedicated tab">';
_strdialog += '<img src="images/mediaplaylist.png" id="imgopenmediainnewtab" title="open media in dedicated tab"/>';
_strdialog += 'dedicated tab';
_strdialog += '</a>';
_strdialog += '</div>';
_strdialog += '</div>';
_strdialog += '<div id="divcurrentmediaplayingcontrolz">';
_strdialog += '<span id="lblcurrentmediaplaying"></span>';
_strdialog += '<a id="btnmediaplaylist" title="playlist">';
_strdialog += '<img src="images/playlist.png" id="imgmediaplaylist" title="playlist"/>';
_strdialog += 'playlist';
_strdialog += '</a>';
_strdialog += '</div>';
_strdialog += '<div id="divvideo">';
_strdialog += '<video id="vdvideo" name="media" controls="" autoplay="" loop="true">';
//_strdialog += '<source src="http://localhost:2019/nyax/video/video.mp4" type="video/mp4">';
_strdialog += '</video>';
_strdialog += '</div>';
_strdialog += '<div id="divvideofileuploda">';
_strdialog += '<input id="txtvideofileuploda" name="txtvideofileuploda" type="file"/>';
_strdialog += '</div>';
_strdialog += '<div id="divmediainfo"></div>';

_strdialog += '<div id="divcurrenttime" class="divvideo">';
_strdialog += '<span id="lblcurrenttime">current time</span>';
_strdialog += '<input id="txtcurrenttime" name="txtcurrenttime" type="text"/>';
_strdialog += '</div>';

_strdialog += '<div id="divvideotimeleft" class="divvideo">';
_strdialog += '<span id="lblvideotimeleft">remaining time</span>';
_strdialog += '<input id="txtvideotimeleft" name="txtvideotimeleft" type="text"/>';
_strdialog += '</div>';

_strdialog += '<div id="divduration" class="divvideo">';
_strdialog += '<span id="lblduration">total time</span>';
_strdialog += '<input id="txtduration" name="txtduration" type="text"/>';
_strdialog += '</div>';

_strdialog += '<div id="divvideopercentage" class="divvideo">';
_strdialog += '<span id="lblvideopercentage">percentage played</span>';
_strdialog += '<input id="txtvideopercentage" name="txtvideopercentage" type="text"/>';
_strdialog += '<input id="txtrangevideopercentage" type="range" min="0" max="100"  step="1" value="0" disabled="disabled" orient="horizontal" />';
_strdialog += '</div>';

_strdialog += '<div id="divvideopercentageleft" class="divvideo">';
_strdialog += '<span id="lblvideopercentageleft">percentage left</span>';
_strdialog += '<input id="txtvideopercentageleft" name="txtvideopercentageleft" type="text"/>';
_strdialog += '<input id="txtrangevideopercentageleft" type="range" min="0" max="100"  step="-1" value="0" disabled="disabled" orient="horizontal" />';
_strdialog += '</div>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);

//loadmediagiventypeajax(_currentvideo);

loadmediaplaylistajaxcall();

retrievemediasettingzfromdb();

//listen for click event in imgclosevideo.
try{
document.getElementById("imgclosevideo").addEventListener("click", function(){

$("#divvideodialog").removeClass("toggled");
$("#divvideodialog").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

//$("#divvideo").empty();

//var _body = document.getElementById("body");
//_body.removeChild(document.getElementById("divvideodialog"));

}, false);
appendapplogz("wired imgclosevideo click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

$("#txtvideofileuploda").on("change", function(){
onmediauploaded();
});

$("#btnresizevideo").on("click", function(){

if($("#divvideodialog").hasClass("resized")){

$("#divvideodialog").removeClass("resized");
$("#divvideodialog").css({

'width': '27%',
'height': '70%',
'top': '10%',
'left': '14%',
'z-index': '8950',
'padding': '5px',
'margin': '5px'
});

$("#divvideodialogsdialogitems").css({

'width': '88%'
});

$("#vdvideo").css({

'width': '95%',
'object-fit': _videofit
});

$("#divvideo").css({

'height': 'auto'
});

var _imgresizevideo = document.getElementById("imgresizevideo");
_imgresizevideo.src = "images/unresizedvideo.png";
_imgresizevideo.title = "resize media";

}
else{

var _imgresizevideo = document.getElementById("imgresizevideo");
_imgresizevideo.src = "images/resizedvideo.png";
_imgresizevideo.title = "unresize media";

$("#divvideodialog").addClass("resized");
$("#divvideodialog").css({

'width': '99%',
'height': '98%',
'top': '0%',
'left': '0%',
'z-index': '9900',
'padding': '1px',
'margin': '1px'
});

$("#divvideodialogsdialogitems").css({

'width': '95%'
});

$("#vdvideo").css({

'width': '98%',
'object-fit': _videofit
});

$("#divvideo").css({

'height': '90%'
});

}

});

$("#btncustomizevideo").on("click", function(){

if($("#divcustomizevideo").hasClass("toggled")){

$("#divcustomizevideo").removeClass("toggled");
$("#divcustomizevideo").css({

'display': 'none'
});

var _imgtoggle = document.getElementById("imgcustomizevideo");
_imgtoggle.src = "images/customizedvideo.jpg";
_imgtoggle.title = "show customize media";

}
else{

var _imgtoggle = document.getElementById("imgcustomizevideo");
_imgtoggle.src = "images/customizedvideo.png";
_imgtoggle.title = "hide customize media";

$("#divcustomizevideo").addClass("toggled");
$("#divcustomizevideo").css({

'display': 'block'
});

}

});

//_mediatype = document.getElementById("cbomediatype").value;
$("#cbomediatype").on("click", function(){
//_mediatype = document.getElementById("cbomediatype").value;
//updatevideosettingstodbstorage("mediatype", _mediatype);
//loadmediagiventypeajax(_currentvideo);
});

_mediatype = document.getElementById("cbomediatype").value;
$("#cbomediatype").on("change", function(){
_mediatype = document.getElementById("cbomediatype").value;
updatevideosettingstodbstorage("mediatype", _mediatype);
loadmediagiventypeajax(_currentvideo);
});

_videofit = document.getElementById("cbovideofit").value;
$("#cbovideofit").on("click", function(){
_videofit = document.getElementById("cbovideofit").value;
$("#vdvideo").css({

'object-fit': _videofit
});
updatevideosettingstodbstorage("videofit", _videofit);
//loadmediagiventypeajax(_currentvideo);
});

//_currentvideo = document.getElementById("cbocurrentvideo").value;
$("#cbocurrentvideo").on("click", function(){
//_currentvideo = document.getElementById("cbocurrentvideo").value;
//buildvideo(_currentvideo);
//updatevideosettingstodbstorage("currentvideo", _currentvideo);
//updatevideosettingstodbstorage("videotype", _videotype);

});

$("#imgvideocontrols").on("click", function(){
if($("#imgvideocontrols").hasClass("toggled")){
$("#imgvideocontrols").removeClass("toggled");
var _imgtoggle = document.getElementById("imgvideocontrols");
_imgtoggle.src = "images/switchoff.png";
_bool_showvideocontrols = false;
updatevideosettingstodbstorage("videocontrols", _bool_showvideocontrols);
}
else{
$("#imgvideocontrols").addClass("toggled");
var _imgtoggle = document.getElementById("imgvideocontrols");
_imgtoggle.src = "images/switchon.png";
_bool_showvideocontrols = true;
updatevideosettingstodbstorage("videocontrols", _bool_showvideocontrols);
}
});

$("#imgloop").on("click", function(){
if($("#imgloop").hasClass("toggled")){
$("#imgloop").removeClass("toggled");
var _imgtoggle = document.getElementById("imgloop");
_imgtoggle.src = "images/switchoff.png";
_bool_loop = false;
updatevideosettingstodbstorage("videoloop", _bool_loop);
}
else{
$("#imgloop").addClass("toggled");
var _imgtoggle = document.getElementById("imgloop");
_imgtoggle.src = "images/switchon.png";
_bool_loop = true;
updatevideosettingstodbstorage("videoloop", _bool_loop);
}
});

$("#imgautoplay").on("click", function(){
if($("#imgautoplay").hasClass("toggled")){
$("#imgautoplay").removeClass("toggled");
var _imgtoggle = document.getElementById("imgautoplay");
_imgtoggle.src = "images/switchoff.png";
_bool_autoplay = false;
updatevideosettingstodbstorage("videoautoplay", _bool_autoplay);
}
else{
$("#imgautoplay").addClass("toggled");
var _imgtoggle = document.getElementById("imgautoplay");
_imgtoggle.src = "images/switchon.png";
_bool_autoplay = true;
updatevideosettingstodbstorage("videoautoplay", _bool_autoplay);
}
});

$("#imgshuffle").on("click", function(){
if($("#imgshuffle").hasClass("toggled")){
$("#imgshuffle").removeClass("toggled");
var _imgtoggle = document.getElementById("imgshuffle");
_imgtoggle.src = "images/switchoff.png";
_bool_shuffle = false;
updatevideosettingstodbstorage("videoshuffle", _bool_shuffle);
}
else{
$("#imgshuffle").addClass("toggled");
var _imgtoggle = document.getElementById("imgshuffle");
_imgtoggle.src = "images/switchon.png";
_bool_shuffle = true;
updatevideosettingstodbstorage("videoshuffle", _bool_shuffle);
}
});

//listen for click event in btnpreviousvideo.
try{
document.getElementById("btnpreviousvideo").addEventListener("click", function(){

previousmedia();

}, false);
appendapplogz("wired btnpreviousvideo click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnnextvideo.
try{
document.getElementById("btnnextvideo").addEventListener("click", function(){

nextmedia();

}, false);
appendapplogz("wired btnnextvideo click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnopenmediainnewtab.
try{
document.getElementById("btnopenmediainnewtab").addEventListener("click", function(){

var currentmediaurl = _currentmediaurl;
window.open(currentmediaurl);

}, false);
appendapplogz("wired btnopenmediainnewtab click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnmediaplaylist.
try{
document.getElementById("btnmediaplaylist").addEventListener("click", function(){

showmediaplaylistdialog("client");

}, false);
appendapplogz("wired btnmediaplaylist click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

$("#divvideodialog").on("mouseover", function(e){

});

$("#divvideodialog").on("mouseout", function(e){

});

}

if($("#divvideodialog").hasClass("toggled")){

$("#divvideodialog").removeClass("toggled");
$("#divvideodialog").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgkuonamichibi = document.getElementById("imgkuonamichibi");
_imgkuonamichibi.src = "images/unresizedvideo.png";
_imgkuonamichibi.title = "show media";

}
else{

var _imgkuonamichibi = document.getElementById("imgkuonamichibi");
_imgkuonamichibi.src = "images/resizedvideo.png";
_imgkuonamichibi.title = "hide media";

$("#divvideodialog").addClass("toggled");
$("#divvideodialog").css({

'background-color': _defaultdialogbackgroundcolor,
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'width': '27%',
'height': '70%',
'z-index': '8900',
'top': '10%',
'left': '14%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divvideodialogsdialogitems").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'left',
'clear': 'none',
'left': '1%',
'top': '1%',
'width': '88%',
'height': '99%',
'overflow-y': 'auto',
'overflow-x': 'hidden'
});

$("#divclosevideo").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'right': '1%',
'top': '1%'
});

$("#divcurrentmediaplayingcontrolz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': '98%',
'height': 'auto',
'overflow-wrap': 'break-word'
});

$("#lblcurrentmediaplaying").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'max-width': '95%',
'height': 'auto',
'background-color': 'black',
'color': 'white',
'overflow-wrap': 'break-word'
});

$("#btnmediaplaylist").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

$("#imgmediaplaylist").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$("#lblvideodialogtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#btnresizevideo").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '2px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '5%'
});

$("#imgresizevideo").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$("#imgclosevideo").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$("#divvideo").css({

'padding': '1px',
'margin': '1px',
'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'width': '100%',
'height': 'auto',
'-webkit-logical-height': 'auto'
});

$("#vdvideo").css({

'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'width': '95%',
'height': '100%',
'object-fit': _videofit
});

$("#divvideofileuploda").css({

'padding': '1px',
'margin': '1px',
'background-color': '#E0ECE6',
'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'width': '97%',
'height': 'auto'
});

$("#txtvideofileuploda").css({

'padding': '1px',
'margin': '1px',
'background-color': 'black',
'color': 'white',
'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'width': 'auto',
'height': 'auto'
});

$("#divmediainfo").css({

'margin': '1px', 
'padding': '0px',
'border': 'solid 0px #0AF026', 
'border-radius': '5px',
'background-color': 'black !important',
'position': 'relative',
'display': 'block',
'height': 'auto', 
'width': '98%',
'float': 'left',
'clear': 'none',
'overflow': 'auto'
});

$(".divvideo").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'both'
});

$(".divvideo span").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'left': '0%'
});

$(".divvideo input").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'none',
'left': '10%'
});

$("#btncustomizevideo").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '2px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'left': '7%'
});

$("#imgcustomizevideo").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$("#divcustomizevideo").css({

'position': 'relative',
'display': 'none',
'margin': '1px',
'padding': '1px',
'float': 'left',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'left': '1%'
});

$(".divcustomizevideocontrolz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'width': 'auto',
'height': 'auto',
'clear': 'none'
});

$(".divcustomizevideocontrolz span").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'both'
});

$(".divcustomizevideocontrolz img").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'both'
});

$(".divcustomizevideocontrolz select").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'display': 'block',
'float': 'left',
'clear': 'both',
'width': '100%'
});

$("#divvideonavcontrolz").css({

'padding': '1px',
'margin': '1px',
'position': 'relative',
'display': 'block',
'clear': 'none',
'float': 'left',
'width': '30%',
'height': 'auto'
});

$("#divvideonavcontrolz a").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'margin-left': '2%',
'margin-right': '2%',
'padding': '2px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

$("#divvideonavcontrolz img").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

setdialogzbackgroundcolor("divvideodialog");
setdialogzbackgroundimage("divvideodialog");

$(".divvideo input").attr("disabled", "disabled");

}

$("#txtcurrenttime").focus();

}catch(err){
logglobalerrors(err);
}
}

function updatevideosettingstodbstorage(settingkey, settingvalue){
try{
var _settingzobj = new Object();
var _autoid = "0";
var _settingobj = createobjectpropz(_settingzobj, _autoid, settingkey, settingvalue);
togglesaveorupdatesetting(_settingobj);
setstorages(settingkey, settingvalue);
SetPersistentCookie(settingkey, settingvalue);
}catch(err){
logglobalerrors(err);
}
}

function previousmedia(){
try{

var _arrmediafiles = [];
var _strcurrentmediafile = "";
var _previousmediafile = "";
var _currpos = 0;
var _doescurrentvideoexistinarr = false;
var _cbocurrentvideo = document.getElementById("cbocurrentvideo");
_strcurrentmediafile = _currentvideo;

for(i = 0; i < _global_mediaplaylistfiles_arr.length; i++){
_arrmediafiles.push(_global_mediaplaylistfiles_arr[i]);
}

if(_arrmediafiles.length == 0) return;

for(i = 0; i < _arrmediafiles.length; i++){
var _media_file = _arrmediafiles[i];
if(_media_file === _strcurrentmediafile){
_currpos = i;
_doescurrentvideoexistinarr = true;
break;
}
}

if(!_doescurrentvideoexistinarr){
_strcurrentmediafile = document.getElementById("cbocurrentvideo").value;
for(i = 0; i < _arrmediafiles.length; i++){
var _media_file = _arrmediafiles[i];
if(_media_file === _strcurrentmediafile){
_currpos = i;
break;
}
}
}

var _mediafilescount = _arrmediafiles.length;
var _previouspos = _currpos - 1;
var _intpreviouspos = _previouspos;

var _shuffle = _bool_shuffle;
if(_shuffle){
var _random_seed = getRandomIntInclusive(1, _mediafilescount); 
_previouspos = _random_seed;
_intpreviouspos = _previouspos;

if(_playlist_random_used_arr.length >= 1){
var _previous_random_pos = _playlist_random_used_arr.pop();

if(_previous_random_pos >= 0){
	var _previous_media_file = _arrmediafiles[_previous_random_pos].medianame;
	while(_strcurrentmediafile == _previous_media_file){
		_previous_random_pos = _playlist_random_used_arr.pop();
		console.log(" _previous_random_pos [ " + _previous_random_pos + " ].");
		_previous_media_file = _arrmediafiles[_previous_random_pos].medianame;
		if(_strcurrentmediafile !== _previous_media_file)break;
	}
}

_previouspos = _previous_random_pos;
_intpreviouspos = _previouspos;
console.log("_previous_random_pos [ " + _previous_random_pos + " ]");
}

}else{

if(_previouspos < 0){
var _lastmediafilepos = _mediafilescount - 1;
if(_lastmediafilepos <= 0){ 
_previousmediafile = _arrmediafiles[0].medianame;
_mediatype =  _arrmediafiles[0].mediatype;
_playlist_media_type = _arrmediafiles[0].mediatype;
}else{ 
_previousmediafile = _arrmediafiles[_lastmediafilepos].medianame;
_mediatype = _arrmediafiles[_lastmediafilepos].mediatype;
_playlist_media_type = _arrmediafiles[_lastmediafilepos].mediatype;
}
}
}

if(_previouspos >= 0){ 
_previousmediafile = _arrmediafiles[_intpreviouspos].medianame;
_mediatype = _arrmediafiles[_intpreviouspos].mediatype;
_playlist_media_type = _arrmediafiles[_intpreviouspos].mediatype;
}

if(!_doescurrentvideoexistinarr){
buildvideo(_previousmediafile);
}else{
buildvideofromplaylist(_previousmediafile);
}

updatedisplaycontrolonmediachange(_mediatype, _previousmediafile);  

}catch(err){
logglobalerrors(err);
}
}

function nextmedia(){
try{

var _arrmediafiles = [];
var _strcurrentmediafile = "";
var _nextmediafile = "";
var _currpos = 0;
var _nextmediafilenameonly = "";
var _doescurrentvideoexistinarr = false;
var _cbocurrentvideo = document.getElementById("cbocurrentvideo");
_strcurrentmediafile = _currentvideo;
 
for(i = 0; i < _global_mediaplaylistfiles_arr.length; i++){
_arrmediafiles.push(_global_mediaplaylistfiles_arr[i]);
}

if(_arrmediafiles.length == 0) return;

for(i = 0; i < _arrmediafiles.length; i++){
var _media_file = _arrmediafiles[i].medianame;
if(_media_file === _strcurrentmediafile){
_currpos = i;
_doescurrentvideoexistinarr = true;
break;
}
}

if(!_doescurrentvideoexistinarr){
_strcurrentmediafile = document.getElementById("cbocurrentvideo").value;
for(i = 0; i < _arrmediafiles.length; i++){
var _media_file = _arrmediafiles[i].medianame;
if(_media_file === _strcurrentmediafile){
_currpos = i;
break;
}
}
}

var _mediafilescount = _arrmediafiles.length;

var _nextpos = _currpos + 1;
var _intnextpos = _nextpos;

var _shuffle = _bool_shuffle;
if(_shuffle){ 
var _random_seed = getRandomIntInclusive(1, _mediafilescount); 
console.log("_next_random_seed [ " + _random_seed + " ]");
_nextpos = _random_seed;
_intnextpos = _nextpos;
_playlist_random_used_arr.push(_random_seed);
}

if(_nextpos > (_mediafilescount - 1)){
_nextmediafilenameonly = _arrmediafiles[0].medianame;
_nextmediafile = _arrmediafiles[0].medianame;
_mediatype =  _arrmediafiles[0].mediatype;
_playlist_media_type = _arrmediafiles[0].mediatype;
}

if(_nextpos <= (_mediafilescount - 1)){
_nextmediafile = _arrmediafiles[_intnextpos].medianame;
_mediatype = _arrmediafiles[_intnextpos].mediatype;
_playlist_media_type = _arrmediafiles[_intnextpos].mediatype;
}

if(!_doescurrentvideoexistinarr){
buildvideo(_nextmediafile);
updatedisplaycontrolonmediachange(_mediatype, _nextmediafile);
}else{
switch(_mediatype){
case "series":
_nextmediafile = _arrmediafiles[_intnextpos].mediafoldername + "/" + _nextmediafile;
break;
}
buildvideofromplaylist(_nextmediafile);
updatedisplaycontrolonmediachange(_mediatype, _nextmediafile);
}

}catch(err){
logglobalerrors(err);
}
}
  
function getRandomIntInclusive(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updatedisplaycontrolonmediachange(mediatype, currentvideo ){
try{
	
document.getElementById("cbomediatype").value = mediatype; 
document.getElementById("cbocurrentvideo").value = currentvideo;

}catch(err){
logglobalerrors(err);
}
}

function buildvideo(videoname){
try{
	
_playlist_initialized_counta = 0;
var _mediafolder = "";
var _cbocurrentvideo = document.getElementById("cbocurrentvideo");
var _strcurrentmediafile = videoname;
_mediafiles_arr = [];
var _currpos = 0;
var _strmediatitle = "";

switch(_mediatype){
case "audio":
_mediafolder = "audio";
break;
case "video":
_mediafolder = "video";
break;
case "movie":
_mediafolder = "movie";
break;
}

for(i = 0; i < _cbocurrentvideo.children.length; i++){
_mediafiles_arr.push(_cbocurrentvideo.children[i].value);
}

for(i = 0; i < _mediafiles_arr.length; i++){
var _media_file = _mediafiles_arr[i];
if(_media_file === _strcurrentmediafile){
_currpos = i;
break;
}
}

for(i = 0; i < _mediatitles_arr.length; i++){
var _media_title = _mediatitles_arr[i];
if(i === _currpos){
_strmediatitle = _media_title;
break;
}
}

var _urlfile = _mediafolder + "/" + videoname;
var _location = window.document.location;
var _origin = _location.origin;
var _videourl = _origin + "/nyax/" + _urlfile;

var _strvideo = "";
_strvideo += '<video id="vdvideo" name="media" controls="' + _bool_showvideocontrols + '" autoplay="' + _bool_autoplay + '" loop="' + _bool_loop + '" title="' + _strmediatitle + '">';
_strvideo += '<source src="' + _videourl + '">';
_strvideo += '</video>';

$("#divvideo").title = _strmediatitle;

document.getElementById("lblcurrentmediaplaying").textContent = _strmediatitle;

$("#divvideo").empty().html(_strvideo);

setTimeout(function(){
checkifcurrentvideoisplayable();
}, 2000);

_currentvideo = videoname;

_currentmediaurl = _videourl;

showeventsnotifierdiv(_currentmediaurl, "info");

updatevideosettingstodbstorage("currentvideo", _currentvideo);
updatevideosettingstodbstorage("mediatype", _mediatype);
updatevideosettingstodbstorage("mediatitle", _strmediatitle);
updatevideosettingstodbstorage("currentmediaurl", _currentmediaurl);

trackplaylist(_currentvideo);

$("#divvideo").css({

'padding': '1px',
'margin': '1px',
'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'width': '100%',
'height': 'auto',
'-webkit-logical-height': 'auto'
});

$("#vdvideo").css({

'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'width': '95%',
'height': '100%',
'object-fit': _videofit
});

if($("#divvideodialog").hasClass("resized")){

$("#vdvideo").css({

'width': '95%',
'object-fit': _videofit
});

}
else{

$("#vdvideo").css({

'width': '98%',
'object-fit': _videofit
});

}

//listen for timeupdate event in vdvideo.
try{
document.getElementById("vdvideo").addEventListener("timeupdate", function(e){
formatvideotimelapsed(e);
}, false);
appendapplogz("wired vdvideo timeupdate Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}catch(err){
logglobalerrors(err);
}
}

function buildvideofromplaylist(videoname){
try{

_playlist_initialized_counta = 0;
var _mediafolder = "";
var _strcurrentmediafile = videoname;
var _current_mediafile = videoname;
var _media_files_arr = [];
var _media_titles_arr = [];
var _currpos = 0;
var _strmediatitle = "";
var _strseriesfolder = "";

switch(_mediatype){
case "series":
_mediafolder = "series";
var _arrcurrentmediafile = _current_mediafile.split("/");
_strseriesfolder = _arrcurrentmediafile[0];
_strcurrentmediafile = _arrcurrentmediafile[1];
break;
case "audio":
_mediafolder = "audio";
_strcurrentmediafile = videoname;
break;
case "video":
_mediafolder = "video";
_strcurrentmediafile = videoname;
break;
case "movie":
_mediafolder = "movie";
_strcurrentmediafile = videoname;
break;
default:
_strcurrentmediafile = videoname;
break;
}
 
for(i = 0; i < _global_mediaplaylistfiles_arr.length; i++){
_media_files_arr.push(_global_mediaplaylistfiles_arr[i].medianame);
}

for(i = 0; i < _global_mediaplaylistfiles_arr.length; i++){
_media_titles_arr.push(_global_mediaplaylistfiles_arr[i].mediatitle);
}

for(i = 0; i < _media_files_arr.length; i++){
var _media_file = _media_files_arr[i];
if(_media_file === _strcurrentmediafile){
_currpos = i;
break;
}
}

for(i = 0; i < _media_titles_arr.length; i++){
var _media_title = _media_titles_arr[i];
if(i === _currpos){
_strmediatitle = _media_title;
break;
}
}

switch(_mediatype){
case "series": 
_strmediatitle = _strseriesfolder + " - " + _strmediatitle; 
break;
}

var _urlfile = _mediafolder + "/" + videoname;
var _location = window.document.location;
var _origin = _location.origin;
var _videourl = _origin + "/nyax/" + _urlfile;

var _strvideo = "";
_strvideo += '<video id="vdvideo" name="media" controls="' + _bool_showvideocontrols + '" autoplay="' + _bool_autoplay + '" loop="' + _bool_loop + '" title="' + _strmediatitle + '">';
_strvideo += '<source src="' + _videourl + '">';
_strvideo += '</video>';

$("#divvideo").title = _strmediatitle;

document.getElementById("lblcurrentmediaplaying").textContent = _strmediatitle;

document.getElementById("txtcurrenttime").value = "";
document.getElementById("txtvideopercentage").value = "";
document.getElementById("txtrangevideopercentage").value = "0";
document.getElementById("txtduration").value = "";
document.getElementById("txtvideopercentageleft").value = "";
document.getElementById("txtrangevideopercentageleft").value = "100";
document.getElementById("txtvideotimeleft").value = "";

$("#divvideo").empty().html(_strvideo);

setTimeout(function(){
checkifcurrentvideoisplayable();
}, 2000);

_currentvideo = _strcurrentmediafile;

_currentmediaurl = _videourl;

showeventsnotifierdiv(_currentmediaurl, "info");

document.getElementById("cbomediatype").value = _mediatype;

setTimeout(function(){
loadmediagiventypeajax(_currentvideo);
}, 3000);

updatevideosettingstodbstorage("currentvideo", _currentvideo);
updatevideosettingstodbstorage("mediatype", _mediatype);
updatevideosettingstodbstorage("mediatitle", _strmediatitle);
updatevideosettingstodbstorage("currentmediaurl", _currentmediaurl);

trackplaylist(_currentvideo);

$("#divvideo").css({

'padding': '1px',
'margin': '1px',
'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'width': '100%',
'height': 'auto',
'-webkit-logical-height': 'auto'
});

$("#vdvideo").css({

'position': 'relative',
'display': 'block',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'width': '95%',
'height': '100%',
'object-fit': _videofit
});

if($("#divvideodialog").hasClass("resized")){

$("#vdvideo").css({

'width': '95%',
'object-fit': _videofit
});

}
else{

$("#vdvideo").css({

'width': '98%',
'object-fit': _videofit
});

}

//listen for timeupdate event in vdvideo.
try{
document.getElementById("vdvideo").addEventListener("timeupdate", function(e){
formatvideotimelapsed(e);
}, false);
appendapplogz("wired vdvideo timeupdate Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}catch(err){
logglobalerrors(err);
}
}

function secondstominutesandhours(secs){
var hr = ('0' + Math.floor(secs / 3600) % 60).slice(-2);
var min = ('0' + Math.floor(secs / 60) % 60).slice(-2);
var sec = ('0' + Math.floor(secs % 60)).slice(-2);
var _formatedtime = hr + ':' + min + ':' + sec;
return _formatedtime;
}

function formatvideotimelapsed(e){
try{
var _vdvideo = e.target;
var _currenttime = _vdvideo.currentTime;
var _strformatedcurrenttime = secondstominutesandhours(_currenttime);
var _duration = _vdvideo.duration;
var _strformatedduration = secondstominutesandhours(_duration);
var _percentageplayed = ((_currenttime/_duration) * 100);
var _roundpercentageplayed = Math.round(_percentageplayed);
var _strpercentageplayed = _percentageplayed + "%";
var _percentageleft = 100 - _percentageplayed;
var _roundpercentageleft = Math.round(_percentageleft);
var _strpercentageleft = "-" + _percentageleft + "%";
var _timeleft = _duration - _currenttime;
var _formatedtimeleft = secondstominutesandhours(_timeleft);
var _strformatedtimeleft = "-" + _formatedtimeleft;
var _strtimeleft = "-" + _timeleft;

document.getElementById("txtcurrenttime").value = _strformatedcurrenttime + " = " + _currenttime;
document.getElementById("txtvideopercentage").value = _strpercentageplayed;
document.getElementById("txtrangevideopercentage").value = _roundpercentageplayed;
document.getElementById("txtduration").value = _strformatedduration + " = " + _duration;
document.getElementById("txtvideopercentageleft").value = _strpercentageleft;
document.getElementById("txtrangevideopercentageleft").value = _roundpercentageleft;
document.getElementById("txtvideotimeleft").value = _strformatedtimeleft + " = " + _strtimeleft;

_playlist_initialized_counta++;

if(_roundpercentageplayed === 99){

_vdvideo.paused = true;
_vdvideo.muted = true;

document.getElementById("vdvideo").removeEventListener("timeupdate", function(e){
formatvideotimelapsed(e);
}, false);

_vdvideo.remove();
delete _vdvideo;

$("#divvideo").empty();

setTimeout(function(){
nextmedia();
}, 2000);

}

}catch(err){
logglobalerrors(err);
}
}

function checkifcurrentvideoisplayable(){
	
setTimeout(function(){
if(_playlist_initialized_counta <= 0)
nextmedia();
}, 5000);

}

function showuploadfiledialog(){
try{

var _divdialog = document.getElementById("divfileuplodadialog");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divfileuplodadialog" class="divdialog">';

_strdialog += '<div id="divclosefileuploda">';
_strdialog += '<img src="images/messageboxerror.ico" id="imgclosefileuploda" title="close"/>';
_strdialog += '</div>';

_strdialog += '<div id="divfileuplodadialogsdialogitems">';
_strdialog += '<span id="lblfileuplodadialogtitle">file upload</span>';
_strdialog += '<div id="divfileuploda">';
_strdialog += '<input id="txtfileuploda" name="txtfileuploda" type="file"/>';
_strdialog += '</div>';
_strdialog += '<div id="divimginfo"></div>';
_strdialog += '<img id="imgfileuploada"></img>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);

//listen for click event in imgclosefileuploda.
try{
document.getElementById("imgclosefileuploda").addEventListener("click", function(){

$("#divfileuplodadialog").removeClass("toggled");
$("#divfileuplodadialog").css({

//'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _body = document.getElementById("body");
//_body.removeChild(document.getElementById("divfileuplodadialog"));

}, false);
appendapplogz("wired imgclosefileuploda click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

$("#txtfileuploda").on("change", function(){
onimageuploaded();
});

}

if($("#divfileuplodadialog").hasClass("toggled")){

$("#divfileuplodadialog").removeClass("toggled");
$("#divfileuplodadialog").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgkujukiambicha = document.getElementById("imgkujukiambicha");
_imgkujukiambicha.src = "images/accountlogo.png";
_imgkujukiambicha.title = "show kujukia mbicha";

}
else{

var _imgkujukiambicha = document.getElementById("imgkujukiambicha");
_imgkujukiambicha.src = "images/accountlogo.jpg";
_imgkujukiambicha.title = "hide kujukia mbicha";

$("#divfileuplodadialog").addClass("toggled");
$("#divfileuplodadialog").css({

'background-color': _defaultdialogbackgroundcolor,
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'width': '27%',
'height': '70%',
'z-index': '8000',
'top': '10%',
'left': '14%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divclosefileuploda").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'right': '1%',
'top': '1%'
});

$("#divfileuplodadialogsdialogitems").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'left',
'clear': 'none',
'left': '1%',
'top': '1%',
'width': '89%',
'height': '100%',
'overflow-y': 'auto',
'overflow-x': 'hidden'
});

$("#lblfileuplodadialogtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#imgclosefileuploda").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$("#divfileuploda").css({

'position': 'relative',
'height': 'auto', 
'width': '97%',
'margin': '1px', 
'padding': '1px',
'float': 'left',
'clear': 'none',
'overflow': 'auto',
'border': 'solid 0px #0AF026', 
'border-radius': '5px'
});

$("#txtfileuploda").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'float': 'left',
'clear': 'both',
'border': 'solid 0px #0AF026', 
'border-radius': '5px',
'left': '0px',
'width': 'auto',
'height': 'auto', 
'overflow': 'auto'
});

$("#divimginfo").css({

'position': 'relative',
'height': 'auto', 
'width': '99%',
'margin': '1px', 
'padding': '0px',
'float': 'left',
'clear': 'both',
'border': 'solid 0px #0AF026', 
'border-radius': '5px',
'background-color': 'black !important'
});

$("#imgfileuploada").css({

'margin': '1px', 
'padding': '1px',
'position': 'relative',
'float': 'left',
'clear': 'both',
'border': 'solid 0px #0AF026', 
'border-radius': '5px',
'width': '95%',
'height': 'auto'
});

setdialogzbackgroundcolor("divfileuplodadialog");
setdialogzbackgroundimage("divfileuplodadialog");

}


}catch(err){
logglobalerrors(err);
}
}

function appendtologztreearr(lsttree, eventtype){
try{

_global_logz_tree_arr.push(populateobjectpropz(lsttree, eventtype));

}catch(err){
console.error(err.message);
}
}

function populateobjectpropz(lsttree, eventtype){
var _settingobj = new Object();

Object.defineProperty(_settingobj, "treenode",
{
value: lsttree,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_settingobj, "treegroup",
{
value: eventtype,
configurable: true,
readable: true,
writable: true
});

return _settingobj;
}

function customtreeiterator(){
try{

var _logz_tree_arr = _global_logz_tree_arr;
var _divapplogz = $("#divapplogz");
var _isinfo = false;
var _iswarning = false;
var _iserror = false;
var _strtree = "";
var _strcontrolz = "";
var _infogroup = "";
var _warninggroup = "";
var _errorgroup = "";
var _infocounta = 0;
var _warningcounta = 0;
var _errorcounta = 0;

var _divttreecontrolz = document.getElementById("divttreecontrolz");

if(_divttreecontrolz === null || _divttreecontrolz === undefined){

_strcontrolz += '<div id="divttreecontrolz">';
_strcontrolz += '<a id="btnexpandall" class="btnttreecontrolz" title="expand all">expand all</a>';
_strcontrolz += '<a id="btncollapseall" class="btnttreecontrolz" title="collapse all">collapse all</a>';
_strcontrolz += '</div>';

_divapplogz.append(_strcontrolz);

_infogroup = '<div id="divinfotreecontainer" class="divttreecontainer"><img src="images/closedtreenode.png" id="imginfotree" class="imgtoggletree" title="show"/><span class="lbltoggletree">info</span><span id="lblinfocounta" class="lbltreecounta"></span><div id="divinfotreenode" class="divttreenode"><ul id="lstinfotreewrapper" class="lstparentnode"></ul></div></div>';
_warninggroup = '<div id="divwarningtreecontainer" class="divttreecontainer"><img src="images/closedtreenode.png" id="imgwarningtree" class="imgtoggletree" title="show"/><span class="lbltoggletree">warning</span><span id="lblwarningcounta" class="lbltreecounta"></span><div id="divwarningtreenode" class="divttreenode"><ul id="lstwarningtreewrapper" class="lstparentnode"></ul></div></div>';
_errorgroup = '<div id="diverrortreecontainer" class="divttreecontainer"><img src="images/closedtreenode.png" id="imgerrortree" class="imgtoggletree" title="show"/><span class="lbltoggletree">error</span><span id="lblerrorcounta" class="lbltreecounta"></span><div id="diverrortreenode" class="divttreenode"><ul id="lsterrortreewrapper" class="lstparentnode"></ul></div></div>';

_strtree += _infogroup;
_strtree += _warninggroup;
_strtree += _errorgroup;

_divapplogz.append(_strtree);

for(var i = 0; i < _logz_tree_arr.length; i++){
var _treeobj = _logz_tree_arr[i];
var _treenode = _treeobj.treenode;
var _treegroup = _treeobj.treegroup;

switch(_treegroup){
case "info":
$("#lstinfotreewrapper").append('<li class="lsttreenode">' + _treenode + '</li>');
_isinfo = true;
_infocounta++;
break;
case "warning":
$("#lstwarningtreewrapper").append('<li class="lsttreenode">' + _treenode + '</li>');
_iswarning = true;
_warningcounta++;
break;
case "error":
$("#lsterrortreewrapper").append('<li class="lsttreenode">' + _treenode + '</li>');
_iserror = true;
_errorcounta++;
break;
}

}

$("#lblinfocounta").html(_infocounta);
$("#lblwarningcounta").html(_warningcounta);
$("#lblerrorcounta").html(_errorcounta);

if(_isinfo){
$("#divinfotreecontainer").css({

'display': 'block'
});
}else{
$("#divinfotreecontainer").css({

'display': 'none'
});
}

if(_iswarning){
$("#divwarningtreecontainer").css({

'display': 'block'
});
}else{
$("#divwarningtreecontainer").css({

'display': 'none'
});
}

if(_iserror){
$("#diverrortreecontainer").css({

'display': 'block'
});
}else{
$("#diverrortreecontainer").css({

'display': 'none'
});
}

}else{

$("#lstinfotreewrapper").empty();
$("#lstwarningtreewrapper").empty();
$("#lsterrortreewrapper").empty();
_infocounta = 0;
_warningcounta = 0;
_errorcounta = 0;

for(var i = 0; i < _logz_tree_arr.length; i++){
var _treeobj = _logz_tree_arr[i];
var _treenode = _treeobj.treenode;
var _treegroup = _treeobj.treegroup;

switch(_treegroup){
case "info":
$("#lstinfotreewrapper").append('<li class="lsttreenode">' + _treenode + '</li>');
_isinfo = true;
_infocounta++;
break;
case "warning":
$("#lstwarningtreewrapper").append('<li class="lsttreenode">' + _treenode + '</li>');
_iswarning = true;
_warningcounta++;
break;
case "error":
$("#lsterrortreewrapper").append('<li class="lsttreenode">' + _treenode + '</li>');
_iserror = true;
_errorcounta++;
break;
}

}

$("#lblinfocounta").html(_infocounta);
$("#lblwarningcounta").html(_warningcounta);
$("#lblerrorcounta").html(_errorcounta);

$("#imginfotree").attr("src", "images/closedtreenode.png");
$("#imgwarningtree").attr("src", "images/closedtreenode.png");
$("#imgerrortree").attr("src", "images/closedtreenode.png");

if(_isinfo){
$("#divinfotreecontainer").css({

'display': 'block'
});
}else{
$("#divinfotreecontainer").css({

'display': 'none'
});
}

if(_iswarning){
$("#divwarningtreecontainer").css({

'display': 'block'
});
}else{
$("#divwarningtreecontainer").css({

'display': 'none'
});
}

if(_iserror){
$("#diverrortreecontainer").css({

'display': 'block'
});
}else{
$("#diverrortreecontainer").css({

'display': 'none'
});
}

}

$("#divttreecontrolz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".btnttreecontrolz").css({

'position': 'relative',
'display': 'block',
'margin': '5px',
'padding': '5px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

$(".divttreecontainer").css({

'position': 'relative',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".imgtoggletree").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

$(".lbltoggletree").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'height': 'auto',
'color': '#FFF'
});

$(".lbltreecounta").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'height': 'auto',
'color': '#FFF'
});

$(".divttreenode").css({

'position': 'relative',
'display': 'none',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".lstparentnode").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'list-style-type': 'none'
});

$(".lsttreenode").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$("#divapplogz .divnotifier").css({

'background-color': 'transparent',
'margin': '1px',
'padding': '5px',
'border': '1px solid #0AF026',
'border-radius': '5px'
});

//listen for click event in imginfotree.
try{
$("#imginfotree").on("click", function(){

if($("#divinfotreenode").hasClass("toggled")){

$("#divinfotreenode").removeClass("toggled");
$("#divinfotreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imginfotree");
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}
else{

var _imgtree = document.getElementById("imginfotree");
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#divinfotreenode").addClass("toggled");
$("#divinfotreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imginfotree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgwarningtree.
try{
$("#imgwarningtree").on("click", function(){

if($("#divwarningtreenode").hasClass("toggled")){

$("#divwarningtreenode").removeClass("toggled");
$("#divwarningtreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgwarningtree");
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}
else{

var _imgtree = document.getElementById("imgwarningtree");
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#divwarningtreenode").addClass("toggled");
$("#divwarningtreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgwarningtree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgerrortree.
try{
$("#imgerrortree").on("click", function(){

if($("#diverrortreenode").hasClass("toggled")){

$("#diverrortreenode").removeClass("toggled");
$("#diverrortreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgerrortree");
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}
else{

var _imgtree = document.getElementById("imgerrortree");
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#diverrortreenode").addClass("toggled");
$("#diverrortreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgerrortree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnexpandall.
try{
$("#btnexpandall").on("click", function(){

var _imgtree = document.getElementById("imginfotree");
if(_imgtree !== null && _imgtree !== undefined){
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";
}

$("#divinfotreenode").addClass("toggled");
$("#divinfotreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgtree = document.getElementById("imgwarningtree");
if(_imgtree !== null && _imgtree !== undefined){
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";
}

$("#divwarningtreenode").addClass("toggled");
$("#divwarningtreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgtree = document.getElementById("imgerrortree");
if(_imgtree !== null && _imgtree !== undefined){
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";
}

$("#diverrortreenode").addClass("toggled");
$("#diverrortreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

});
appendapplogz("wired btnexpandall click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btncollapseall.
try{
$("#btncollapseall").on("click", function(){

$("#divinfotreenode").removeClass("toggled");
$("#divinfotreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imginfotree");
if(_imgtree !== null && _imgtree !== undefined){
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";
}

$("#divwarningtreenode").removeClass("toggled");
$("#divwarningtreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgwarningtree");
if(_imgtree !== null && _imgtree !== undefined){
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";
}

$("#diverrortreenode").removeClass("toggled");
$("#diverrortreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgerrortree");
if(_imgtree !== null && _imgtree !== undefined){
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";
}

});
appendapplogz("wired btncollapseall click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function loadmediagiventypeajax(_currentmediafilename){
try{

var aArgs = loadmediagiventypeajax.arguments;
var nArgs = loadmediagiventypeajax.arguments.length;
var _current_media_filename = (nArgs >= 1) ? aArgs[0] : "";

_mediatitles_arr = [];
var _current_media_type = document.getElementById("cbomediatype").value;
var _cbocurrentvideo = document.getElementById("cbocurrentvideo");
  
var _mediaurl = "";
switch(_current_media_type){
case "audio":
_mediaurl = "requests/audio.json";
break;
case "video":
_mediaurl = "requests/video.json";
break;
case "movie":
_mediaurl = "requests/movie.json";
break;
case "series":
_mediaurl = "requests/series.json";
break;
}

$.ajax({
url: _mediaurl,
type: "GET",
dataType: "text",
async: !0,
global: !0,
success: function (serverresponseresult, serverresponsestatus, serverresponseobj){
	onloadmedifilescallback(serverresponseresult, _current_media_filename);
},
error: function (serverresponseobj, serverresponsestatus, statustext){
console.error("status code [ " + serverresponseobj.status + " ]");
console.error("status text [ " + statustext + " ]");
console.error("server response status [ " + serverresponsestatus + " ]");
}
});

}
catch(err)
{
logglobalerrors(err);
}
}

/*
method called after a successfull retrieval of media data into a json object.
populate media files combo box.
params { json object }
*/
function onloadmedifilescallback(serverresponseresult, _current_media_filename){
	try{
		
var _videojsonobj = $.parseJSON(serverresponseresult);
var _strvideos = "";
var _counta = 0;
var _videoobjcount = 0;
var fragment = document.createDocumentFragment();
var _current_media_type = document.getElementById("cbomediatype").value;
var _cbocurrentvideo = document.getElementById("cbocurrentvideo");
var _options_group_arr = [];
var _options_arr = [];

$.each(_videojsonobj, function (nodename, nodeobject){
_videoobjcount++;
});

$.each(_videojsonobj, function (nodename, nodeobject){
var _video_name = nodeobject.medianame;
var _video_type = nodeobject.mediatype;
var _video_title = nodeobject.mediatitle;
var _media_folder_name = nodeobject.mediafoldername;
var _option_exists = false;

_mediatitles_arr.push(_video_title);

if(_current_media_type === "series"){
if(_counta === 0){
	
var _optgroup_element = document.createElement("optgroup");
_optgroup_element.id = _media_folder_name;
_optgroup_element.label = _media_folder_name;
_optgroup_element.title = _media_folder_name;

for(var i = 0; i < _options_group_arr.length; i++){
var _existing_opt_elemet = _options_group_arr[i];
if(_existing_opt_elemet.id == _optgroup_element.id){
_option_exists = true;
}
}

if(!_option_exists)
_options_group_arr.push(_optgroup_element);

var _opt_element = document.createElement("option");
_opt_element.id = _video_name; 
_opt_element.value = _video_name;
_opt_element.title = _media_folder_name;
_opt_element.textContent = _video_name;

_options_arr.push(_opt_element);

_strvideos += '<option selected="true" value="'+ _video_name +'">' + _video_title + '</option>'; 

}else{
	
var _optgroup_element = document.createElement("optgroup");
_optgroup_element.id = _media_folder_name;
_optgroup_element.label = _media_folder_name;
_optgroup_element.title = _media_folder_name;

for(var i = 0; i < _options_group_arr.length; i++){
var _existing_opt_elemet = _options_group_arr[i];
if(_existing_opt_elemet.id == _optgroup_element.id){
_option_exists = true;
}
}

if(!_option_exists)
_options_group_arr.push(_optgroup_element);

var _opt_element = document.createElement("option");
_opt_element.id = _video_name; 
_opt_element.value = _video_name;
_opt_element.title = _media_folder_name;
_opt_element.textContent = _video_name;

_options_arr.push(_opt_element);

_strvideos += '<option value="'+ _video_name +'">' + _video_title + '</option>';
}
}else{ /*not series*/
if(_counta === 0){ 
_strvideos += '<option selected="true" value="'+ _video_name +'">' + _video_title + '</option>'; 
}else{ 
_strvideos += '<option value="'+ _video_name +'">' + _video_title + '</option>';
}
}

_counta++;
});

for(var i = 0; i < _options_group_arr.length; i++){
var _existing_opt_elemet = _options_group_arr[i];
for(var w = 0; w < _options_arr.length; w++){
var _opt_element = _options_arr[w];
if(_existing_opt_elemet.title == _opt_element.title){
_options_group_arr[i].appendChild(_opt_element);
}
}
}

if(_current_media_type === "series"){
$("#cbocurrentvideo").empty();
for(var i = 0; i < _options_group_arr.length; i++) {
var _opt_element = _options_group_arr[i];
_cbocurrentvideo.appendChild(_opt_element);
}
}else{
$("#cbocurrentvideo").empty();
$("#cbocurrentvideo").append(_strvideos);
}
 
setTimeout(function(){
if(_cbocurrentvideo.options.size > 0)
_cbocurrentvideo.options[0].selected = true;

if(_current_media_type === _playlist_media_type){
if(_currentvideo != null && _currentvideo != undefined){
if(_currentvideo.length > 0)
document.getElementById("cbocurrentvideo").value = _currentvideo;
}else{
_cbocurrentvideo.options[0].selected = true;
}
}

}, 1000);

}catch(err){
logglobalerrors(err);
}
}

/* params { caller }*/
function showmediaplaylistdialog(_caller){
try{

_media_types_loaded++;

var _divdialog  = document.getElementById("divmediaplaylistdialog");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divmediaplaylistdialog" class="divdialog">';

_strdialog += '<div id="divclosemediaplaylist">';

_strdialog += '<img src="images/messageboxerror.ico" id="imgclosemediaplaylist" title="close"/>';

_strdialog += '</div>';

_strdialog += '<div id="divmediaplaylistdialogitems">';

_strdialog += '<span id="lblmediaplaylistdialogtitle">playlist</span>';

_strdialog += '<a id="btnrefreshplaylist"><img src="images/refresh.ico" id="imgrefreshplaylist" title="refresh"/></a>';

_strdialog += '<div id="divmediaplaylisttreecontainer" class="divttreecontainer">';

_strdialog += '</div>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);

//listen for click event in imgclosemediaplaylist.
try{
document.getElementById("imgclosemediaplaylist").addEventListener("click", function(){

$("#divmediaplaylistdialog").removeClass("toggled");
$("#divmediaplaylistdialog").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgmediaplaylist = document.getElementById("imgmediaplaylist");
_imgmediaplaylist.src = "images/playlist.png";
_imgmediaplaylist.title = "show playlist";

var _body = document.getElementById("body");
//_body.removeChild(document.getElementById("divmediaplaylistdialog"));

}, false);
appendapplogz("wired imgclosemediaplaylist click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnrefreshplaylist.
try{
document.getElementById("btnrefreshplaylist").addEventListener("click", function(){
	
_global_mediaplaylistfiles_arr = [];
	
loadmediaplaylistajaxcall(); 

buildmediaplaylisttree();

}, false);
appendapplogz("wired btnrefreshplaylist click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

buildmediaplaylisttree();

}

if(_caller == _calling_function_from_server){
if(_media_types_loaded < 4)
{
	return;
}
}

if($("#divmediaplaylistdialog").hasClass("toggled")){

$("#divmediaplaylistdialog").removeClass("toggled");
$("#divmediaplaylistdialog").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgmediaplaylist = document.getElementById("imgmediaplaylist");
_imgmediaplaylist.src = "images/playlist.png";
_imgmediaplaylist.title = "show playlist";

}
else{

var _imgmediaplaylist = document.getElementById("imgmediaplaylist");
_imgmediaplaylist.src = "images/playlist.jpg";
_imgmediaplaylist.title = "hide playlist";

$("#divmediaplaylistdialog").addClass("toggled");
$("#divmediaplaylistdialog").css({

'background-color': _defaultdialogbackgroundcolor,
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'width': '27%',
'height': '70%'
});

if($("#divvideodialog").hasClass("toggled")){
$("#divmediaplaylistdialog").css({

'z-index': '9910',
'top': '10%',
'width': '27%',
'float': 'left',
'left': '43%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});
}

if($("#divvideodialog").hasClass("resized")){
$("#divmediaplaylistdialog").css({

'z-index': '9910',
'top': '10%',
'width': '45%',
'float': 'left',
'left': '35%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});
}

$("#divclosemediaplaylist").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'right',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'right': '1%',
'top': '1%'
});

$("#divmediaplaylistdialogitems").css({

'position': 'relative',
'display': 'block',
'overflow': 'auto',
'float': 'left',
'clear': 'none',
'left': '1%',
'top': '1%',
'width': '89%',
'height': '100%',
'overflow-y': 'auto',
'overflow-x': 'auto'
});

$("#lblmediaplaylistdialogtitle").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'background-color': 'black',
'color': 'white'
});

$("#btnrefreshplaylist").css({
 
'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': 'auto',
'margin': '0px',
'margin-right': '20px',
'background-color': 'transparent'
});

$("#imgrefreshplaylist").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': 'auto' 
});

$("#imgclosemediaplaylist").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

setdialogzbackgroundcolor("divmediaplaylistdialog");
setdialogzbackgroundimage("divmediaplaylistdialog");

}


}catch(err){
logglobalerrors(err);
}
}

function loadmediaplaylistajaxcall(){
try{

setTimeout(function(){

populateseriesmediaplaylistservercall();

populatemoviemediaplaylistservercall();

populatevideomediaplaylistservercall();

populateaudiomediaplaylistservercall();

}, 1000);

setTimeout(function(){

// populatemoviemediaplaylistservercall();

// populatevideomediaplaylistservercall();

// populateaudiomediaplaylistservercall();

}, 5000);

}
catch(err)
{
logglobalerrors(err);
}
}

function populateaudiomediaplaylistservercall(){
try{
var _mediaurl = "requests/audio.json";
var _strmediatype = "audio";

$.ajax({
url: _mediaurl,
type: "GET",
dataType: "text",
async: !0,
global: !0,
success: function (serverresponseresult, serverresponsestatus, serverresponseobj){

var _responseobj = $.parseJSON(serverresponseresult);

$.each(_responseobj, function (nodename, nodeobject){

var _video_name = nodeobject.medianame;
var _video_type = nodeobject.mediatype;
var _video_title = nodeobject.mediatitle;
var _video_size = nodeobject.mediasize;

_global_mediaplaylistfiles_arr.push(createmediaplaylistobjectpropz(_video_name, _video_type, _video_title, _strmediatype, _video_size));

});

buildmediaplaylisttree();

showmediaplaylistdialog(_calling_function_from_server);

},
error: function (serverresponseobj, serverresponsestatus, statustext){
console.error("status code [ " + serverresponseobj.status + " ]");
console.error("status text [ " + statustext + " ]");
console.error("server response status [ " + serverresponsestatus + " ]");
}
});
}

catch(err)
{
logglobalerrors(err);
}
}

function populatevideomediaplaylistservercall(){
try{
var _mediaurl = "requests/video.json";
var _strmediatype = "video";

$.ajax({
url: _mediaurl,
type: "GET",
dataType: "text",
async: !0,
global: !0,
success: function (serverresponseresult, serverresponsestatus, serverresponseobj){

var _responseobj = $.parseJSON(serverresponseresult);

$.each(_responseobj, function (nodename, nodeobject){

var _video_name = nodeobject.medianame;
var _video_type = nodeobject.mediatype;
var _video_title = nodeobject.mediatitle;
var _video_size = nodeobject.mediasize;

_global_mediaplaylistfiles_arr.push(createmediaplaylistobjectpropz(_video_name, _video_type, _video_title, _strmediatype, _video_size));

});

buildmediaplaylisttree();

showmediaplaylistdialog(_calling_function_from_server);

},
error: function (serverresponseobj, serverresponsestatus, statustext){
console.error("status code [ " + serverresponseobj.status + " ]");
console.error("status text [ " + statustext + " ]");
console.error("server response status [ " + serverresponsestatus + " ]");
}
});
}

catch(err)
{
logglobalerrors(err);
}
}

function populatemoviemediaplaylistservercall(){
try{
var _mediaurl = "requests/movie.json";
var _strmediatype = "movie";

$.ajax({
url: _mediaurl,
type: "GET",
dataType: "text",
async: !0,
global: !0,
success: function (serverresponseresult, serverresponsestatus, serverresponseobj){

var _responseobj = $.parseJSON(serverresponseresult);

$.each(_responseobj, function (nodename, nodeobject){

var _video_name = nodeobject.medianame;
var _video_type = nodeobject.mediatype;
var _video_title = nodeobject.mediatitle;
var _video_size = nodeobject.mediasize;

_global_mediaplaylistfiles_arr.push(createmediaplaylistobjectpropz(_video_name, _video_type, _video_title, _strmediatype, _video_size));

});

buildmediaplaylisttree();

showmediaplaylistdialog(_calling_function_from_server);

},
error: function (serverresponseobj, serverresponsestatus, statustext){
console.error("status code [ " + serverresponseobj.status + " ]");
console.error("status text [ " + statustext + " ]");
console.error("server response status [ " + serverresponsestatus + " ]");
}
});
}

catch(err)
{
logglobalerrors(err);
}
}

function createmediaplaylistobjectpropz(_strvideo_name, _strvideo_type, _strvideo_title, _strmedia_type, _video_size){
var _mediaplaylistobj = new Object();

Object.defineProperty(_mediaplaylistobj, "medianame",
{
value: _strvideo_name,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediaformat",
{
value: _strvideo_type,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediatitle",
{
value: _strvideo_title,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediatype",
{
value: _strmedia_type,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediasize",
{
value: _video_size,
configurable: true,
readable: true,
writable: true
});

return _mediaplaylistobj;
}

function populateseriesmediaplaylistservercall(){
try{
var _mediaurl = "requests/series.json";
var _strmediatype = "series";

$.ajax({
url: _mediaurl,
type: "GET",
dataType: "text",
async: !0,
global: !0,
success: function (serverresponseresult, serverresponsestatus, serverresponseobj){

var _responseobj = $.parseJSON(serverresponseresult);

$.each(_responseobj, function (nodename, nodeobject){

var _video_name = nodeobject.medianame;
var _video_type = nodeobject.mediatype;
var _video_title = nodeobject.mediatitle;
var _video_size = nodeobject.mediasize;
var _media_folder = nodeobject.mediafoldername;

_global_mediaplaylistfiles_arr.push(createseriesmediaplaylistobjectpropz(_video_name, _video_type, _video_title, _strmediatype, _video_size, _media_folder));

});

buildmediaplaylisttree();

showmediaplaylistdialog(_calling_function_from_server);

},
error: function (serverresponseobj, serverresponsestatus, statustext){
console.error("status code [ " + serverresponseobj.status + " ]");
console.error("status text [ " + statustext + " ]");
console.error("server response status [ " + serverresponsestatus + " ]");
}
});
}

catch(err)
{
logglobalerrors(err);
}
}

function createseriesmediaplaylistobjectpropz(_strvideo_name, _strvideo_type, _strvideo_title, _strmedia_type, _video_size, _media_folder){
var _mediaplaylistobj = new Object();

Object.defineProperty(_mediaplaylistobj, "medianame",
{
value: _strvideo_name,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediaformat",
{
value: _strvideo_type,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediatitle",
{
value: _strvideo_title,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediatype",
{
value: _strmedia_type,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediasize",
{
value: _video_size,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_mediaplaylistobj, "mediafoldername",
{
value: _media_folder,
configurable: true,
readable: true,
writable: true
});

return _mediaplaylistobj;
}

function formatmediasize(_mediasize){
var _fl_size = 0;
var _sizeinbytes = parseFloat(_mediasize);
var _sizeinkb = _sizeinbytes/1000;
var _sizeinmb = _sizeinbytes/1000/1000;
var _sizeingb = _sizeinbytes/1000/1000/1000;
if(_sizeinbytes < 1000){
_fl_size = _sizeinbytes;
_fl_size = Math.round(_fl_size) + " bytes";
}else if(_sizeinbytes >= 1000 && _sizeinkb < 1000){
_fl_size = _sizeinkb;
_fl_size = Math.round(_fl_size) + " KB";
}else if(_sizeinkb >= 1000 && _sizeinmb < 1000){
_fl_size = _sizeinmb;
_fl_size = Math.round(_fl_size) + " MB";
}else if(_sizeinmb >= 1000){
_fl_size = _sizeingb;
_fl_size = Math.round(_fl_size) + " GB";
}
return _fl_size;
}

function buildmediaplaylisttree(){
try{

var _local_playlist_arr = _global_mediaplaylistfiles_arr;
var _divmediaplaylisttree = $("#divmediaplaylisttreecontainer");
var _isaudio = false;
var _isvideo = false;
var _ismovie = false;
var _isseries = false;
var _strtree = "";
var _strcontrolz = "";
var _audiogroup = "";
var _videogroup = "";
var _moviegroup = "";
var _seriesgroup = "";
var _audiocounta = 0;
var _videocounta = 0;
var _moviecounta = 0;
var _seriescounta = 0;

//_divmediaplaylisttree.empty();

var _divplaylisttreecontrolz = document.getElementById("divplaylisttreecontrolz");

if(_divplaylisttreecontrolz === null || _divplaylisttreecontrolz === undefined){

_strcontrolz += '<div id="divplaylisttreecontrolz">';
_strcontrolz += '<a id="btnexpandall" class="btnttreecontrolz" title="expand all">expand all</a>';
_strcontrolz += '<a id="btncollapseall" class="btnttreecontrolz" title="collapse all">collapse all</a>';
_strcontrolz += '</div>';

_divmediaplaylisttree.append(_strcontrolz);

_audiogroup = '<div id="divaudiotreecontainer" class="divttreecontainer"><img src="images/openedtreenode.png" id="imgaudiotree" class="imgtoggletree" title="show"/><span class="lbltoggletree">audio</span><span id="lblaudiocounta" class="lbltreecounta"></span><div id="divaudiotreenode" class="divttreenode toggled"><ul id="lstaudiotreewrapper" class="lstparentnode"></ul></div></div>';
_videogroup = '<div id="divvideotreecontainer" class="divttreecontainer"><img src="images/openedtreenode.png" id="imgvideotree" class="imgtoggletree" title="show"/><span class="lbltoggletree">video</span><span id="lblvideocounta" class="lbltreecounta"></span><div id="divvideotreenode" class="divttreenode toggled"><ul id="lstvideotreewrapper" class="lstparentnode"></ul></div></div>';
_moviegroup = '<div id="divmovietreecontainer" class="divttreecontainer"><img src="images/openedtreenode.png" id="imgmovietree" class="imgtoggletree" title="show"/><span class="lbltoggletree">movie</span><span id="lblmoviecounta" class="lbltreecounta"></span><div id="divmovietreenode" class="divttreenode toggled"><ul id="lstmovietreewrapper" class="lstparentnode"></ul></div></div>';
_seriesgroup = '<div id="divseriestreecontainer" class="divttreecontainer"><img src="images/openedtreenode.png" id="imgseriestree" class="imgtoggletree" title="show"/><span class="lbltoggletree">series</span><span id="lblseriescounta" class="lbltreecounta"></span><div id="divseriestreenode" class="divttreenode toggled"><ul id="lstseriestreewrapper" class="lstparentnode"></ul></div></div>';

_strtree += _moviegroup;
_strtree += _seriesgroup;
_strtree += _videogroup;
_strtree += _audiogroup;

_divmediaplaylisttree.append(_strtree);

}

for(var i = 0; i < _local_playlist_arr.length; i++){
	
var _treeobj = _local_playlist_arr[i];
var _treenode = _treeobj.mediatitle;
var _strvideoname = _treeobj.medianame;
var _treegroup = _treeobj.mediatype;
var _strvideosize = "";
var _strmediafoldername = "";

if(_treeobj.mediasize !== null && _treeobj.mediasize !== undefined)
_strvideosize = formatmediasize(_treeobj.mediasize);
if(_treeobj.mediafoldername !== null && _treeobj.mediafoldername !== undefined)
_strmediafoldername = _treeobj.mediafoldername;

switch(_treegroup){
case "audio":
$("#lstaudiotreewrapper").append('<li id="lsttreenode' + i + '" class="lsttreenode"><a  id="btnplaylisttree' + i + '" class="btnplaylisttree" attrmediatype="audio" attrmedianame="' + _strvideoname + '" title="' + _treenode + " [ " + _strvideosize + " ]" + '"><img id="imgplaylisttree' + i + '" class="imgplaylisttree" src="images/playlistinactive.png"/>' + _treenode + " [ " + _strvideosize + " ]" + '</a></li>');
_isaudio = true;
_audiocounta++;
break;
case "video":
$("#lstvideotreewrapper").append('<li id="lsttreenode' + i + '" class="lsttreenode"><a  id="btnplaylisttree' + i + '" class="btnplaylisttree" attrmediatype="video" attrmedianame="' + _strvideoname + '" title="' + _treenode + " [ " + _strvideosize + " ]" + '"><img id="imgplaylisttree' + i + '" class="imgplaylisttree" src="images/playlistinactive.png"/>' + _treenode + " [ " + _strvideosize + " ]" + '</a></li>');
_isvideo = true;
_videocounta++;
break;
case "movie":
$("#lstmovietreewrapper").append('<li id="lsttreenode' + i + '" class="lsttreenode"><a  id="btnplaylisttree' + i + '" class="btnplaylisttree" attrmediatype="movie" attrmedianame="' + _strvideoname + '" title="' + _treenode + " [ " + _strvideosize + " ]" + '"><img id="imgplaylisttree' + i + '" class="imgplaylisttree" src="images/playlistinactive.png"/>' + _treenode + " [ " + _strvideosize + " ]" + '</a></li>');
_ismovie = true;
_moviecounta++;
break;
case "series":
var _strfoldername = _strmediafoldername;
_strfoldername = _strfoldername.replace(".", "_").replace(" ", "_");

while(_strfoldername.indexOf(".") != -1 || _strfoldername.indexOf(" ") != -1){
_strfoldername = _strfoldername.replace(".", "_").replace(" ", "_");
}

var _strcontainer = "lst" + _strfoldername;
var _lstseriestreewrapper = document.getElementById("lstseriestreewrapper");
var _lstseriestreewrapper_children = _lstseriestreewrapper.children;
var _strwrapper = "lstseriestreewrapper" + _strfoldername;

if(_lstseriestreewrapper_children.length === 0){

var _seriescontainer = '<div id="divseriestreecontainer' + _strfoldername + '" class="divttreecontainer">';
_seriescontainer += '<img src="images/openedtreenode.png" id="imgseriestreetoggle' + _strfoldername + '" class="imgtoggleseriestree" title="show"/>';
_seriescontainer += '<span class="lbltoggletree">' + _strfoldername + '</span>';
_seriescontainer += '<span id="lblseriescounta' + _strfoldername + '" class="lbltreecounta"></span>';
_seriescontainer += '<div id="divseriestreenode' + _strfoldername + '" class="divserieschildrentreenode divttreenode toggled">';
_seriescontainer += '<ul id="lstseriestreewrapper' + _strfoldername + '" class="lstparentnode"></ul>';
_seriescontainer += '</div></div>';

$("#lstseriestreewrapper").append(_seriescontainer);

var _serieswrapper = '<li id="lsttreenode' + i + '" class="lsttreenode">';
_serieswrapper += '<a  id="btnplaylisttree' + i + '" class="btnplaylisttree" attrmediatype="series" attrmedianame="' + _strvideoname + '" attrmediafoldername="' + _strmediafoldername + '" title="' + _treenode + " [ " + _strvideosize + " ]" + '">';
_serieswrapper += '<img id="imgplaylisttree' + i + '" class="imgplaylisttree" src="images/playlistinactive.png"/>';
_serieswrapper += _treenode + " [ " + _strvideosize + " ]" + '</a>';
_serieswrapper += '</li>';

$("#" + _strwrapper).append(_serieswrapper);

_isseries = true;
_seriescounta++;

}else{

var _lstcontainer = document.getElementById(_strwrapper);

if(_lstcontainer !== null && _lstcontainer !== undefined){

var _serieswrapper = '<li id="lsttreenode' + i + '" class="lsttreenode">';
_serieswrapper += '<a  id="btnplaylisttree' + i + '" class="btnplaylisttree" attrmediatype="series" attrmedianame="' + _strvideoname + '" attrmediafoldername="' + _strmediafoldername + '" title="' + _treenode + " [ " + _strvideosize + " ]" + '">';
_serieswrapper += '<img id="imgplaylisttree' + i + '" class="imgplaylisttree" src="images/playlistinactive.png"/>';
_serieswrapper += _treenode + " [ " + _strvideosize + " ]" + '</a>';
_serieswrapper += '</li>';

$("#" + _strwrapper).append(_serieswrapper);

_isseries = true;
_seriescounta++;

}else{

var _seriescontainer = '<div id="divseriestreecontainer' + _strfoldername + '" class="divttreecontainer">';
_seriescontainer += '<img src="images/openedtreenode.png" id="imgseriestreetoggle' + _strfoldername + '" class="imgtoggleseriestree" title="show"/>';
_seriescontainer += '<span class="lbltoggletree">' + _strfoldername + '</span>';
_seriescontainer += '<span id="lblseriescounta' + _strfoldername + '" class="lbltreecounta"></span>';
_seriescontainer += '<div id="divseriestreenode' + _strfoldername + '" class="divserieschildrentreenode divttreenode toggled">';
_seriescontainer += '<ul id="lstseriestreewrapper' + _strfoldername + '" class="lstparentnode"></ul>';
_seriescontainer += '</div></div>';

$("#lstseriestreewrapper").append(_seriescontainer);

var _serieswrapper = '<li id="lsttreenode' + i + '" class="lsttreenode">';
_serieswrapper += '<a  id="btnplaylisttree' + i + '" class="btnplaylisttree" attrmediatype="series" attrmedianame="' + _strvideoname + '" attrmediafoldername="' + _strmediafoldername + '" title="' + _treenode + " [ " + _strvideosize + " ]" + '">';
_serieswrapper += '<img id="imgplaylisttree' + i + '" class="imgplaylisttree" src="images/playlistinactive.png"/>';
_serieswrapper += _treenode + " [ " + _strvideosize + " ]" + '</a>';
_serieswrapper += '</li>';

$("#" + _strwrapper).append(_serieswrapper);

_isseries = true;
_seriescounta++;

}

}

break;
}

}

trackplaylist(_currentvideo);

var _playlistbuttons = document.getElementsByClassName("btnplaylisttree");
$(_playlistbuttons).each(function(e){

$(this).on("click",function(e){
var _id = $(this).attr('id');

var _attrmediatype = $(this).attr('attrmediatype');

var _attrmedianame = $(this).attr('attrmedianame');

var _attrmediafoldername = $(this).attr('attrmediafoldername');

_mediatype = _attrmediatype;
var _str_video_name = _attrmedianame;

if(_str_video_name !== undefined && _str_video_name !== null){
switch(_attrmediatype){
case "series":
if(_attrmediafoldername !== undefined && _attrmediafoldername !== null){
_str_video_name = _attrmediafoldername + "/" + _str_video_name;
}
break;
}
buildvideofromplaylist(_str_video_name);
}
});
});


var _imgtoggleseriestree = document.getElementsByClassName("imgtoggleseriestree");
$(_imgtoggleseriestree).each(function(e){

$(this).on("click",function(e){
var _id = $(this).attr('id');


var _idarr = _id.split("imgseriestreetoggle");
var _idstr = _idarr[1];

var _strdivseriestreecontainer = "divseriestreenode" + _idstr;

if($("#" + _strdivseriestreecontainer).hasClass("toggled")){

$("#" + _strdivseriestreecontainer).removeClass("toggled");
$("#" + _strdivseriestreecontainer).css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById(_id);
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}else{

var _imgtree = document.getElementById(_id);
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#" + _strdivseriestreecontainer).addClass("toggled");
$("#" + _strdivseriestreecontainer).css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

appendapplogz("wired " + _id + " click Event Listener.", "info");

});
});


$("#lblaudiocounta").html(_audiocounta);
$("#lblvideocounta").html(_videocounta);
$("#lblmoviecounta").html(_moviecounta);
$("#lblseriescounta").html(_seriescounta);

if(_isaudio){
$("#divaudiotreecontainer").css({

'display': 'block'
});
}else{
$("#divaudiotreecontainer").css({

'display': 'none'
});
}

if(_isvideo){
$("#divvideotreecontainer").css({

'display': 'block'
});
}else{
$("#divvideotreecontainer").css({

'display': 'none'
});
}

if(_ismovie){
$("#divmovietreecontainer").css({

'display': 'block'
});
}else{
$("#divmovietreecontainer").css({

'display': 'none'
});
}

if(_isseries){
$("#divseriestreecontainer").css({

'display': 'block'
});
}else{
$("#divseriestreecontainer").css({

'display': 'none'
});
}

//listen for click event in imgaudiotree.
try{
$("#imgaudiotree").on("click", function(){

if($("#divaudiotreenode").hasClass("toggled")){

$("#divaudiotreenode").removeClass("toggled");
$("#divaudiotreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgaudiotree");
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}
else{

var _imgtree = document.getElementById("imgaudiotree");
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#divaudiotreenode").addClass("toggled");
$("#divaudiotreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgaudiotree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgvideotree.
try{
$("#imgvideotree").on("click", function(){

if($("#divvideotreenode").hasClass("toggled")){

$("#divvideotreenode").removeClass("toggled");
$("#divvideotreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgvideotree");
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}
else{

var _imgtree = document.getElementById("imgvideotree");
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#divvideotreenode").addClass("toggled");
$("#divvideotreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgvideotree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgmovietree.
try{
$("#imgmovietree").on("click", function(){

if($("#divmovietreenode").hasClass("toggled")){

$("#divmovietreenode").removeClass("toggled");
$("#divmovietreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgmovietree");
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}
else{

var _imgtree = document.getElementById("imgmovietree");
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#divmovietreenode").addClass("toggled");
$("#divmovietreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgmovietree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgseriestree.
try{
$("#imgseriestree").on("click", function(){

if($("#divseriestreenode").hasClass("toggled")){

$("#divseriestreenode").removeClass("toggled");
$("#divseriestreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgtree = document.getElementById("imgseriestree");
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

}
else{

var _imgtree = document.getElementById("imgseriestree");
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#divseriestreenode").addClass("toggled");
$("#divseriestreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

}

});
appendapplogz("wired imgseriestree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnexpandall.
try{
$("#btnexpandall").on("click", function(){

var _imgaudiotree = document.getElementById("imgaudiotree");
if(_imgaudiotree !== null && _imgaudiotree !== undefined){
_imgaudiotree.src = "images/openedtreenode.png";
_imgaudiotree.title = "hide";
}

$("#divaudiotreenode").addClass("toggled");
$("#divaudiotreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgvideotree = document.getElementById("imgvideotree");
if(_imgvideotree !== null && _imgvideotree !== undefined){
_imgvideotree.src = "images/openedtreenode.png";
_imgvideotree.title = "hide";
}

$("#divvideotreenode").addClass("toggled");
$("#divvideotreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgmovietree = document.getElementById("imgmovietree");
if(_imgmovietree !== null && _imgmovietree !== undefined){
_imgmovietree.src = "images/openedtreenode.png";
_imgmovietree.title = "hide";
}

$("#divmovietreenode").addClass("toggled");
$("#divmovietreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgseriestree = document.getElementById("imgseriestree");
if(_imgseriestree !== null && _imgseriestree !== undefined){
_imgseriestree.src = "images/openedtreenode.png";
_imgseriestree.title = "hide";
}

$("#divseriestreenode").addClass("toggled");
$("#divseriestreenode").css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _divserieschildrentreenode = document.getElementsByClassName("divserieschildrentreenode");
$(_divserieschildrentreenode).each(function(e){

var _id = $(this).attr('id');


var _idarr = _id.split("divseriestreenode");
var _idstr = _idarr[1];

var _strdivseriestreecontainer = "divseriestreenode" + _idstr;
var _strimgseriestreetoggle = "imgseriestreetoggle" + _idstr;
 
var _imgtree = document.getElementById(_strimgseriestreetoggle);
_imgtree.src = "images/openedtreenode.png";
_imgtree.title = "hide";

$("#" + _strdivseriestreecontainer).addClass("toggled");
$("#" + _strdivseriestreecontainer).css({

'display': 'block',
'left': '1%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});
 
});



});
appendapplogz("wired btnexpandall click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btncollapseall.
try{
$("#btncollapseall").on("click", function(){

$("#divaudiotreenode").removeClass("toggled");
$("#divaudiotreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgaudiotree = document.getElementById("imgaudiotree");
if(_imgaudiotree !== null && _imgaudiotree !== undefined){
_imgaudiotree.src = "images/closedtreenode.png";
_imgaudiotree.title = "show";
}

$("#divvideotreenode").removeClass("toggled");
$("#divvideotreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgvideotree = document.getElementById("imgvideotree");
if(_imgvideotree !== null && _imgvideotree !== undefined){
_imgvideotree.src = "images/closedtreenode.png";
_imgvideotree.title = "show";
}

$("#divmovietreenode").removeClass("toggled");
$("#divmovietreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgmovietree = document.getElementById("imgmovietree");
if(_imgmovietree !== null && _imgmovietree !== undefined){
_imgmovietree.src = "images/closedtreenode.png";
_imgmovietree.title = "show";
}

$("#divseriestreenode").removeClass("toggled");
$("#divseriestreenode").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

var _imgseriestree = document.getElementById("imgseriestree");
if(_imgseriestree !== null && _imgseriestree !== undefined){
_imgseriestree.src = "images/closedtreenode.png";
_imgseriestree.title = "show";
}

var _divserieschildrentreenode = document.getElementsByClassName("divserieschildrentreenode");
$(_divserieschildrentreenode).each(function(e){

var _id = $(this).attr('id');


var _idarr = _id.split("divseriestreenode");
var _idstr = _idarr[1];

var _strdivseriestreecontainer = "divseriestreenode" + _idstr;
var _strimgseriestreetoggle = "imgseriestreetoggle" + _idstr;
 
var _imgtree = document.getElementById(_strimgseriestreetoggle);
_imgtree.src = "images/closedtreenode.png";
_imgtree.title = "show";

$("#" + _strdivseriestreecontainer).addClass("toggled");
$("#" + _strdivseriestreecontainer).css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});
 
});

});
appendapplogz("wired btncollapseall click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

$("#divttreecontrolz").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".btnttreecontrolz").css({

'position': 'relative',
'display': 'block',
'margin': '5px',
'padding': '5px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

$(".divttreecontainer").css({

'position': 'relative',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".imgtoggletree").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

$(".lbltoggletree").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'height': 'auto',
'color': '#FFF'
});

$(".lbltreecounta").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'height': 'auto',
'color': '#FFF'
});

$(".divttreenode").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".lstparentnode").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto',
'list-style-type': 'none'
});

$(".lsttreenode").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'both',
'width': 'auto',
'height': 'auto'
});

$(".btnplaylisttree").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '2px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto',
'text-decoration': 'none',
'overflow-wrap': 'break-word'
});

$(".imgplaylisttree").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$(".imgtoggleseriestree").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': 'auto',
'height': 'auto'
});

setTimeout(function(){
initializeplaylist();
}, 3000);

}
catch(err)
{
logglobalerrors(err);
}
}

function initializeplaylist(){
try{

var _current_video = localStorage.getItem("currentvideo");
if(_current_video === null || _current_video === undefined){
return;
}else{
_currentvideo = _current_video;
}

var _media_type = localStorage.getItem("mediatype");
if(_media_type === null || _media_type === undefined){
return;
}else{
_mediatype = _media_type;
}
  
 buildvideofromplaylist(_currentvideo);
/*buildvideo(_currentvideo);*/
 
}
catch(err)
{
logglobalerrors(err);
}
}

function trackplaylist(videoname){
try{

var _local_mediatype = "";
var _arrmediafiles = [];
var _strcurrentmediafile = "";
var _currpos = 0;
var _listparent = "";
_strcurrentmediafile = videoname;
_local_mediatype = _mediatype;

for(i = 0; i < _global_mediaplaylistfiles_arr.length; i++){
var _str_media_type = _global_mediaplaylistfiles_arr[i].mediatype;
if(_str_media_type === _local_mediatype){
_arrmediafiles.push(_global_mediaplaylistfiles_arr[i].medianame);
}
}

if(_arrmediafiles.length == 0) return;

for(i = 0; i < _arrmediafiles.length; i++){
var _media_file = _arrmediafiles[i];
if(_media_file === _strcurrentmediafile){
_currpos = i;
break;
}
}

switch(_local_mediatype){
case "audio":
_listparent = document.getElementById("lstaudiotreewrapper");
break;
case "video":
_listparent = document.getElementById("lstvideotreewrapper");
break;
case "movie":
_listparent = document.getElementById("lstmovietreewrapper");
break;
case "series":
_listparent = document.getElementById("lstseriestreewrapper");
break;
}

if(_listparent !== null && _listparent !== undefined){
var _lstchildren = _listparent.children;
var _lstchild = _lstchildren[_currpos];
var _btnchild = _lstchild.children[0];
var _btn_id = _btnchild.id;
var _imgchild = _btnchild.children[0];
var _img_id = _imgchild.id;

$(".btnplaylisttree").on("mouseover", function(e){
var _target = e.target;
var _targetid = _target.id;
var _idarr = _targetid.split("btnplaylisttree");
var _idstr = _idarr[1];
$("#" + _targetid).css({

'background-color': '#240EF9',
'color': '#E0ECE6'
});
$("#imgplaylisttree" + _idstr).css({

'background-color': '#240EF9',
'color': '#E0ECE6'
});
});

$(".btnplaylisttree").on("mouseout", function(e){
var _target = e.target;
var _targetid = _target.id;
var _idarr = _targetid.split("btnplaylisttree");
var _idstr = _idarr[1];
$("#" + _targetid).css({

'background-color': '#E0ECE6',
'color': '#000'
});
$("#imgplaylisttree" + _idstr).css({

'background-color': '#E0ECE6',
'color': '#000'
});
});

$("#" + _btn_id).on("mouseover", function(e){
var _target = e.target;
var _targetid = _target.id;
var _idarr = _targetid.split("btnplaylisttree");
var _idstr = _idarr[1];
$("#" + _targetid).css({

'background-color': '#240EF9',
'color': '#FFF'
});
$("#imgplaylisttree" + _idstr).css({

'background-color': '#240EF9',
'color': '#FFF'
});
});

$("#" + _btn_id).on("mouseout", function(e){
var _target = e.target;
var _targetid = _target.id;
var _idarr = _targetid.split("btnplaylisttree");
var _idstr = _idarr[1];
$("#" + _targetid).css({

'background-color': '#18FF0A',
'color': '#000'
});
$("#imgplaylisttree" + _idstr).css({

'background-color': '#18FF0A',
'color': '#000'
});
});

var _playlisttreebtns = document.getElementsByClassName("btnplaylisttree");
$(_playlisttreebtns).each(function(){

var _id = $(this).attr('id');

$("#" + _id).css({

'background-color': '#E0ECE6',
'color': '#000'
});
});

$("#" + _btn_id).css({

'background-color': '#18FF0A',
'color': '#000'
});

var _playlisttreeimgs = document.getElementsByClassName("imgplaylisttree");
$(_playlisttreeimgs).each(function(){

var _id = $(this).attr('id');

$("#" + _id)[0].src = "images/playlistinactive.png";
});

$("#" + _img_id)[0].src = "images/playlistactive.png";

var _divmediaplaylistdialogitems = document.getElementById("divmediaplaylistdialogitems");
_divmediaplaylistdialogitems.scrollTop = _divmediaplaylistdialogitems.scrollTop + 15;

}

}
catch(err)
{
logglobalerrors(err);
}
}

function populatemediasettingzfromdboncallback(recordsarr){
try{

var dbused;
var loginused;

var _arrrecords = recordsarr;

for(var i = 0; i < _arrrecords.length; i++){

var _key = _arrrecords[i].settingkey;
var _value = _arrrecords[i].settingvalue;

switch(_key){
case "videoautoplay":
if(_value){
var _imgautoplay = document.getElementById("imgautoplay");
_imgautoplay.src = "images/switchon.png";
}else{
var _imgautoplay = document.getElementById("imgautoplay");
_imgautoplay.src = "images/switchoff.png";
}
_bool_autoplay = _value;
setstorages("videoautoplay", _value);
SetPersistentCookie("videoautoplay", _value);
break;
case "videoloop":
if(_value){
var _imgloop = document.getElementById("imgloop");
_imgloop.src = "images/switchon.png";
}else{
var _imgloop = document.getElementById("imgloop");
_imgloop.src = "images/switchoff.png";
}
_bool_loop = _value;
setstorages("videoloop", _value);
SetPersistentCookie("videoloop", _value);
break;
case "videocontrols":
if(_value){
var _imgvideocontrols = document.getElementById("imgvideocontrols");
_imgvideocontrols.src = "images/switchon.png";
}else{
var _imgvideocontrols = document.getElementById("imgvideocontrols");
_imgvideocontrols.src = "images/switchoff.png";
}
_bool_showvideocontrols = _value;
setstorages("videocontrols", _value);
SetPersistentCookie("videocontrols", _value);
break;
case "videoshuffle":
if(_value){
var _imgshuffle = document.getElementById("imgshuffle");
_imgshuffle.src = "images/switchon.png";
}else{
var _imgshuffle = document.getElementById("imgshuffle");
_imgshuffle.src = "images/switchoff.png";
}
_bool_shuffle = _value;
setstorages("videoshuffle", _value);
SetPersistentCookie("videoshuffle", _value);
break;
case "mediatype":
var _cbomediatype = document.getElementById("cbomediatype");
_cbomediatype.value = _value;
setstorages("mediatype", _value);
SetPersistentCookie("mediatype", _value);
break;
case "currentvideo":
var _cbocurrentvideo = document.getElementById("cbocurrentvideo");
_cbocurrentvideo.value = _value;
setstorages("currentvideo", _value);
SetPersistentCookie("currentvideo", _value);
break;
case "videofit":
var _cbovideofit = document.getElementById("cbovideofit");
_cbovideofit.value = _value;
setstorages("videofit", _value);
SetPersistentCookie("videofit", _value);
break;
}
}
}catch(err){
logglobalerrors(err);
}
}

var _dndsupported;
var _dndEls = new Array();
var _draggingElement;
var _winners = {
Rock: 'Paper',
Paper: 'Scissors',
Scissors: 'Rock'
};

var _hoverborderstyle = '';
var _normalborderstyle = '';

function initializedragndrop(){

var _strdnd = "";
_strdnd += '<div id="divdndwrapper">';
_strdnd += '<div id="divdnd1" class="divdndholder"><img src="images/2017-03-19.jpg" draggable="true" width="200" height="200"><span></span></div>';
_strdnd += '<div id="divdnd2" class="divdndholder"><img src="images/2017-03-20.jpg" draggable="true" width="200" height="200"><span></span></div>';
_strdnd += '<div id="divdnd3" class="divdndholder"><img src="images/2017-03-22.jpg" draggable="true" width="200" height="200"><span></span></div>';
_strdnd += '</div>';

$("#divcontainer").append(_strdnd);

_dndsupported = detectdragndrop();

if(_dndsupported){
_dndEls.push(getdndElementsfromdom("divdnd1"), getdndElementsfromdom("divdnd2"), getdndElementsfromdom("divdnd3"));
for(var i = 0; i < _dndEls.length; i++){
_dndEls[i].addEventListener("dragstart", handledragstart, false);
_dndEls[i].addEventListener("dragend", handledragend, false);
_dndEls[i].addEventListener("dragover", handledragover, false);
_dndEls[i].addEventListener("dragenter", handledragenter, false);
_dndEls[i].addEventListener("dragleave", handledragleave, false);
_dndEls[i].addEventListener("drop", handledrop, false);
}
}else{

}
}

function getdndElementsfromdom(elementid){
return document.getElementById(elementid);
}

function detectdragndrop(){
if("draggable" in document.createElement("span")){
return true;
}else{
return false;
}
}

function handledragstart(e){
_draggingElement = this;
_draggingElement.classname = "moving";
this.style.opacity = "0.4";
this.style.border = _hoverborderstyle;
e.dataTransfer.setDragImage(getdragimage(), 100, 100);
}

function getdragimage(e){
var _children = e.childNodes;
for(var i = 0; i < _children.length; i++){
if(_children[i].nodeName.toLowerCase() === "img"){
return _children[i];
}
}
}

function handledragend(e){
this.style.opacity = "1.0";
_draggingElement.classname = undefined;
_draggingElement = undefined;
for(var i = 0; i < _dndEls.length; i++){
_dndEls[i].style.border = _normalborderstyle;
}
}

function handledragover(e){
if(e.preventDefault) e.preventDefault();
this.style.border = _hoverborderstyle;
return false;
}

function handledragenter(e){
this.style.border = _hoverborderstyle;
}

function handledragleave(e){
this.style.border = _normalborderstyle;
}

function handledrop(e){
if(e.stopPropagation) e.stopPropagation();
if(e.preventDefault) e.preventDefault();
if(this.id === _draggingElement.id) return;
else swapimages(this, _draggingElement);
}

function swapimages(a, b){
var _holding = Object();
_holding.img = getdragimage(a);
_holding.src = _holding.img.src;
_holding.img.src = getdragimage(b).src;
getdragimage(b).src = _holding.src;
}

