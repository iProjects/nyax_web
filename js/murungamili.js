
var _divconsoleoutput = $("#div_console_output");
var _position = 0;
var _divtablecontent = $("#divtablecontent");
var _listwrapper = $("#listwrapper");
var _map = new Map();

$(document).ready(function(){
try{

$("#txtconsoleinput").focus();

//listen for btnexecutecommand click. 
try{
document.getElementById("btnexecutecommand").addEventListener("click", function(e){
webconsole(e);
}, false);
appendapplogz("wired btnexecutecommand Event Listener.", "info");

}
catch(err)
{
logglobalerrors(err);
}

//listen for btnclearconsole click. 
try{
document.getElementById("btnclearconsole").addEventListener("click", function(){
_divconsoleoutput.empty();
}, false);
appendapplogz("wired btnclearconsole Event Listener.", "info");

}
catch(err)
{
logglobalerrors(err);
}

//listen for btnshowcommandlist click. 
try{
document.getElementById("btnshowcommandlist").addEventListener("click", function(){
showcommandlistdiv();
}, false);
appendapplogz("wired btnshowcommandlist Event Listener.", "info");

}
catch(err)
{
logglobalerrors(err);
}

}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message, "error");
logtomurungamili(err.message, "error");
hideprogressdiv();
}
});

function webconsole(e){
try{

$("#txtconsoleinput").focus();

var key = e.which || e.keycode;

var _iscallerallowed = false;

var _target = e.target.id;

if(_target !== null && _target !== undefined){
if(_target === "btnexecutecommand"){
_iscallerallowed = true;
}
if(_target === "btnlistmathithio"){
_iscallerallowed = true;
}
if(_target === "btnlistamemba"){
_iscallerallowed = true;
}
if(_target === "btnhelp"){
_iscallerallowed = true;
}
}

if(key === 13){
_iscallerallowed = true;
}

if(_iscallerallowed){

cleardiveventnotifier();

var _command = document.getElementById("txtconsoleinput").value;
if(_command === ""){
logtomurungamili('command cannot be null.', "error");
showeventsnotifierdiv('command cannot be null.', "error");
return;
}

logtomurungamili('received command [ ' + _command + ' ]...', "info");

switch(_command){
case "readfile":
logtomurungamili('executing readfile on nyax...', "info");
executereadfileonconsole();
break;
case "delete":
logtomurungamili('executing delete on nyax...', "info");
break;
case "listmathithio":
logtomurungamili('executing list mathithio on nyax...', "info");
executemathithiolistonconsole();
break;
case "listamemba":
logtomurungamili('executing list amemba on nyax...', "info");
executeamembalistonconsole();
break;
case "help":
logtomurungamili('executing help on nyax...', "info");
executehelponconsole();
break;
case "clearmathithio":
logtomurungamili('executing clearmathithio on nyax...', "info");
executeclearmathithioonconsole();
break;
default:
logtomurungamili('invalid command.', "error");
break;
}
}
}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message);
logtomurungamili(err.message, "error");
}
}

function logtomurungamili(logobj){
try{

var aArgs = logtomurungamili.arguments;
var nArgs = logtomurungamili.arguments.length;
var eventtype = (nArgs > 1) ? aArgs[1] : "info";

var logdiv = "";

switch(eventtype){
case "error":
logdiv = '<div class="divnotifier" style="color: #F8300F;"><img src="images/error.png" class="imgnotifier"/>';
break;
case "info":
logdiv = '<div class="divnotifier" style="color: #09E6EF;"><img src="images/info.png" class="imgnotifier"/>';
break;
case "warning":
logdiv = '<div class="divnotifier" style="color: #F8F509;"><img src="images/warning.png" class="imgnotifier"/>';
break;
}

var currentdatetime = getcurrentdatetime();
logdiv += currentdatetime + " : " + logobj;
logdiv += '</div>';

_divconsoleoutput = $("#div_console_output");
_divconsoleoutput.prepend(logdiv);

appendapplogz(logobj, eventtype);

}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message);
logtomurungamili(err.message, "error");
}
}

function executemathithiolistonconsole(){
try{
logtomurungamili('execution started...', "info");
createmathithiolist();
}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message);
logtomurungamili(err.message, "error");
hideprogressdiv();
}
}

function createmathithiolist(){
try{

//perform the retrieve 
var entities = [];

showprogressdiv();

showprogresstext("retrieving records...");

logtomurungamili("retrieving records...", "info");

var transaction = db.transaction(["mathithio"], "readonly");

var store = transaction.objectStore("mathithio");

var _cursor = store.openCursor();

_cursor.onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    entities.push(cursor.value);
    cursor.continue();
  }
};

setTimeout(function(){

var records = entities;

logtomurungamili("[ " + records.length + " ] records found", "info");

logtomurungamili("start building table...", "info");

showprogresstext("building table...");

if(records.length === 0){
logtomurungamili("no recordz found in store...", "warning");
}

for(var i = 0; i < records.length; i++){

var _recordobj = records[i];

Object.defineProperty(_recordobj, "id",
{
value: i + 1,
configurable: true,
readable: true,
writable: true
});

var _a = Object.getOwnPropertyNames(_recordobj);
var _c = new Array(_a.length);

for(var _d in _a){
_c[_d] = _recordobj[_a[_d]];
}

}

createmathithiotablegivenlist(entities);
 
}, 5000);

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.log("error [ " + err.message + " <br/> " + err.stack + " ]");
logtomurungamili("error [ " + err.message + " <br/> " + err.stack + " ]", "error");
hideprogressdiv();
}
}

function createmathithiotablegivenlist(records){
try{

var _id;
var _autoid;
var _uniqeventid;
var _eventtype;
var _log;
var _loggedinuser;
var _createddate;
var _browser;
var _entityobj;
var _tablestr = "";
var _recordscount = records.length;
_position = 0;
_divconsoleoutput = $("#div_console_output");
_divtablewrapper = $("#divtablewrapper");
_divtablecontent = $("#divtablecontent");
_listwrapper = $("#listwrapper");

_divconsoleoutput.prepend("<div id='divtablewrapper'></div>");

_divtablewrapper = $("#divtablewrapper");

_divtablewrapper.empty();

_divtablewrapper.html("<div id='divtablecontent'></div>");

_divtablecontent = $("#divtablecontent");

_divtablecontent.empty();

_divtablecontent.html("<ul id='listwrapper'></ul>");

_listwrapper = $("#listwrapper");

_listwrapper.empty();

for(var i = 0; i < records.length; i++){

_entityobj = records[i];

_id = _entityobj["id"];

_autoid = _entityobj["autoid"];

_uniqeventid = _entityobj["uniqeventid"];

_eventtype = _entityobj["eventtype"];

_log = _entityobj["log"];

_loggedinuser = _entityobj["loggedinuser"];

_createddate = _entityobj["createddate"];

_browser = _entityobj["browser"];

var _lstname = "listcontent" + i;
_tablestr = '<li id="' + _lstname + '" class="listcontent">';
_tablestr += '<div class="divlistitem"># [ ' + _id + ' ]</div>';
_tablestr += '<div class="divlistitem">auto id: [ ' + _autoid + ' ]</div>';
_tablestr += '<div class="divlistitem">event id: [ ' + _uniqeventid + ' ]</div>';
_tablestr += '<div class="divlistitem">event type : [ ' + _eventtype + ' ]</div>';
_tablestr += '<div class="divlistitem">logged in user : [ ' + _loggedinuser + ' ]</div>';
_tablestr += '<div class="divlistitem">created date : [ ' + _createddate + ' ]</div>';
_tablestr += '<div class="divlistitem">browser : [ ' + _browser + ' ]</div>';
_tablestr += '<div class="divlistitem">' + _log + '</div>';

_tablestr += "</li>";

var _idkey = _autoid;
var _strtablerow = _tablestr;

buildmathithiotableoncallback(_idkey, _strtablerow, _recordscount);

}

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.log("error [ " + err.message + " <br/> " + err.stack + " ]");
logtomurungamili("error [ " + err.message + " <br/> " + err.stack + " ]", "error");
hideprogressdiv();
}
}

function buildmathithiotableoncallback(_idkey, _strtablerow, _recordscount){
try{

var _intkey = parseInt(_idkey);
var transaction;
var store;

try{
transaction = db.transaction(["mathithio"], "readonly");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

try{
store = transaction.objectStore("mathithio");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

//perform the retrieve
var request = store.get(_intkey);

request.onsuccess = function(e){

var _resultobj = e.target.result;

showprogresstext("building table...");

_position++;

_listwrapper.prepend(_strtablerow);

//showeventsnotifierdiv(_strtablerow, "info");

var _percentage = "creating...<br/>[ " + _position + " ] of [ " + _recordscount + " ]";
var _int_item_remaining = _recordscount - _position;
var _item_remaining = "remaining...<br/>[ " + _int_item_remaining + " ]";
var _timelapsed = getcreatetimelapsed();

updateprogresscontrols(_percentage, _item_remaining, _timelapsed, _position, _recordscount);

if(_position >= _recordscount){

hideprogressdiv();
cleardiveventnotifier();

}

}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
showeventsnotifierdiv("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");

_divconsoleoutput.prepend(_strtablerow);
}

}catch(err){
console.error("error message [ " + err.message + " ]<br/>error message [ " + err.stack + " ]");
showeventsnotifierdiv("error message [ " + err.message + " ]<br/>error message [ " + err.stack + " ]", "error");
}
}

function executeamembalistonconsole(){
try{

_divconsoleoutput = $("#div_console_output");

var logmsg = 'execution started';
logtomurungamili(logmsg, "info");

createlistamemba();

}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message);
logtomurungamili(err.message, "error");
hideprogressdiv();
}
}

function createlistamemba(){
try{

//perform the retrieve 
var entities = [];

showprogressdiv();

var transaction = db.transaction(["memba"], "readonly");

var store = transaction.objectStore("memba");

var _cursor = store.openCursor();

_cursor.onsuccess = function(event) {

var _eventtype = event.type;
console.log("server response [ " + _eventtype + " ]");
logtomurungamili("server response [ " + _eventtype + " ]<br/>");

var _readystate = event.target.readyState;
console.log("readystate [ " + _readystate + " ]");
logtomurungamili("readystate [ " + _readystate + " ]<br/>");

  var cursor = event.target.result;
  if (cursor) {
    entities.push(cursor.value);
    cursor.continue();
  }
};

setTimeout(function(){

console.log("entities [ " + entities + " ]");
console.log("entities.length [ " + entities.length + " ]");

createamembatablegivenlist(entities);
 
}, 5000);

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.log("error [ " + err.message + " <br/> " + err.stack + " ]");
logtomurungamili("error [ " + err.message + " <br/> " + err.stack + " ]", "error");
hideprogressdiv();
}
}

function createamembatablegivenlist(records){
try{

var _log;
var _eventtype;
var _recordindex;
var _amembatablestr = "";
txtconsole = $("#div_console_output");

_amembatablestr += "<div id='divtablecontent'><ul id='lstamemba'>";

for(var i = (records.length - 1); i > -1; i--){

console.info("i [ " + i + " ]");

_memba = records[i];
console.info("_memba [ " + _memba + " ]");

_ritwa = _memba["ritwa"];
console.info("_ritwa [ " + _ritwa + " ]");

_email = _memba["email"];
console.info("_email [ " + _email + " ]");
 
_thimu = _memba["thimu"];
console.info("_thimu [ " + _thimu + " ]");

_kibandi = _memba["kibandi"];
console.info("_kibandi [ " + _kibandi + " ]");

_uraja = _memba["uraja"];
console.info("_uraja [ " + _uraja + " ]");

_kilo = _memba["kilo"];
console.info("_kilo [ " + _kilo + " ]");

_kuchiarwa = _memba["kuchiarwa"];
console.info("_kuchiarwa [ " + _kuchiarwa + " ]");

_createddate = _memba["createddate"];
console.info("created date [ " + _createddate + " ]");

_amembatablestr += "<li class='amembalst'>";
_amembatablestr += "<div class='divlstamemba'>" + (parseInt(i) + 1) + "</div>";
_amembatablestr += "<div class='divlstamemba'>ritwa : [ " + _ritwa + " ]</div>";
_amembatablestr += "<div class='divlstamemba'>email : [ " + _email + " ]</div>";
_amembatablestr += "<div class='divlstamemba'>namba ya thimu : [ " + _thimu + " ]</div>"; 
_amembatablestr += "<div class='divlstamemba'>namba ya kibandi : [ " + _kibandi + " ]</div>";
_amembatablestr += "<div class='divlstamemba'>kithimi uraja : [ " + _uraja + " ]</div>"; 
_amembatablestr += "<div class='divlstamemba'>kithimi kilo : [ " + _kilo + " ]</div>"; 
_amembatablestr += "<div class='divlstamemba'>ntuku ya kuchiarwa : [ " + _kuchiarwa + " ]</div>";
_amembatablestr += "<div class='divlstamemba'>created date : [ " + _createddate + " ]</div>";
_amembatablestr += "</li>";

}

_amembatablestr += "</ul></div>";

_divconsoleoutput.prepend(_amembatablestr);

hideprogressdiv();

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.log("error [ " + err.message + " <br/> " + err.stack + " ]");
logtomurungamili("error [ " + err.message + " <br/> " + err.stack + " ]", "error");
hideprogressdiv();
}
}

function executereadfileonconsole(){
try{

var logmsg = 'execution started';
logtomurungamili(logmsg, "info");

var origin = document.location.origin;
var pathname = document.location.pathname;
//var _fls = origin.concat(pathname);
var _fls = "http://localhost:2019/nyax/images/video.mp4";
var _filereader_ = new window.FileReader(_fls);

_filereader_.onloadstart = function(){
console.log("_filereader_.onloadstart " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">onloadstart ' + getcurrentdatetime() + '</span></div>');
};
_filereader_.onloadend = function(){
console.log("_filereader_.onloadend " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">onloadend ' + getcurrentdatetime() + '</span></div>');
};
_filereader_.onprogress = function(){
console.log("_filereader_.onprogress " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">onprogress ' + getcurrentdatetime() + '</span></div>');
};
_filereader_.onload = function(){
console.log("_filereader_.onload " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">onload ' + getcurrentdatetime() + '</span></div>');

var _readyState = _filereader_.readyState;
switch(_readyState){
case 0:
console.log("readyState - EMPTY " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">readyState - EMPTY ' + getcurrentdatetime() + '</span></div>');
break;
case 1:
console.log("readyState - LOADING " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">readyState - LOADING ' + getcurrentdatetime() + '</span></div>');
break;
case 2:
console.log("readyState - DONE " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">readyState - DONE ' + getcurrentdatetime() + '</span></div>');
break;
}
var _result = _filereader_.result;
console.log("_result [ " + _result + " ]");

var readString = '';
var anReadBuffer = [];
var nReadBytes = 0;
var nReadSize = 4097;

anReadBuffer = _result;
nReadBytes = anReadBuffer.byteLength;

for (var i = 0; i < nReadBytes; i++) {
//readString += String.fromCharCode(anReadBuffer.shift());
}

console.log("readString [ " + readString + " ]");

};
_filereader_.onerror = function(){
console.log("_filereader_.onerror " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">onerror ' + getcurrentdatetime() + '</span></div>');

var _error = _filereader_.error;
console.log("_error [ " + _error + " ]");
_divconsoleoutput.prepend('<div><span class="lbllogmsg">_error [ ' + _error + " ]" + getcurrentdatetime() + '</span></div>');
};
_filereader_.onabort = function(){
console.log("_filereader_.onabort " + getcurrentdatetime());
_divconsoleoutput.prepend('<div><span class="lbllogmsg">onabort ' + getcurrentdatetime() + '</span></div>');
};
var _file_ = new window.File(g_arrMonth, 1);
var _n = new window.Blob(g_arrMonth);

var _url = window.URL.createObjectURL(new Blob(["http://localhost:2019/nyax/images/CURRICULUM_VITAE_2017.pdf"], { type: "application/pdf" }));

console.log("_url [ " + _url + " ]");

var _t = _filereader_.readAsArrayBuffer(_n);
console.log("_fls [ " + _fls + " ]");
hideprogressdiv();
}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message);
logtomurungamili(err.message, "error");
hideprogressdiv();
}
}

function executehelponconsole(){
try{

_divconsoleoutput = $("#div_console_output");
logtomurungamili('execution started...', "info");

}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message);
logtomurungamili(err.message, "error");
hideprogressdiv();
}
}

function showcommandlistdiv(){
try{

var _divdialog  = document.getElementById("divcommandlist");
var _strdialog = "";

if(_divdialog === null || _divdialog === undefined){
_strdialog += '<div id="divcommandlist" class="divdialog">';

_strdialog += '<div id="divclosecommand">';
_strdialog += '<img src="images/messageboxerror.ico" id="imgclosecommand" title="close"/>';
_strdialog += '</div>';

_strdialog += '<div id="divcommandlistdialogitems">';
_strdialog += '<span id="lblcommandlistdialogtitle">command list</span>';
_strdialog += '<a id="btnlistmathithio" title="list mathithio">';
_strdialog += '<img src="images/nextreset.png" class="imgnav" title="list mathithio"/>';
_strdialog += 'list mathithio';
_strdialog += '<a/>';
_strdialog += '<a id="btnlistamemba" title="list amemba">';
_strdialog += '<img src="images/nextreset.png" class="imgnav" title="list amemba"/>';
_strdialog += 'list amemba';
_strdialog += '<a/>';
_strdialog += '<a id="btnhelp" title="help">';
_strdialog += '<img src="images/nextreset.png" class="imgnav" title="help"/>';
_strdialog += 'help';
_strdialog += '<a/>';

_strdialog += '</div>';
_strdialog += '</div>';

$("#body").append(_strdialog);
}

if($("#divcommandlist").hasClass("toggled")){

$("#divcommandlist").removeClass("toggled");
$("#divcommandlist").css({

'display': 'none',
'z-index': '5000',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

}
else{

$("#divcommandlist").addClass("toggled");
$("#divcommandlist").css({

'background-color': 'cornflowerblue',
'position': 'absolute',
'display': 'block',
'overflow': 'auto',
'padding': '5px',
'margin': '5px',
'width': '20%',
'height': 'auto',
'z-index': '8000',
'top': '10%',
'left': '75%',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

$("#divclosecommand").css({

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

$("#divcommandlistdialogitems").css({

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

$("#lblcommandlistdialogtitle").css({

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

$("#btnlistmathithio").css({

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

$("#btnlistamemba").css({

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

$("#btnhelp").css({

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

$(".imgnav").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'left',
'clear': 'none',
'width': '20px',
'height': '20px'
});

$("#imgclosecommand").css({

'position': 'relative',
'display': 'block',
'margin': '1px',
'padding': '1px',
'float': 'right',
'clear': 'none',
'width': '20px',
'height': '20px'
});

var _divdialog = document.getElementById("divcommandlist");
var _divdialogbackgroundcolor = localStorage.getItem("divdialogbackgroundcolor");
if(_divdialogbackgroundcolor != null && _divdialogbackgroundcolor != undefined){
_divdialog.style.backgroundColor = _divdialogbackgroundcolor;
}

//listen for click event in btnlistmathithio.
try{
document.getElementById("btnlistmathithio").addEventListener("click", function(e){

document.getElementById("txtconsoleinput").value = "listmathithio";
$("#txtconsoleinput").focus();

webconsole(e);

$("#divcommandlist").removeClass("toggled");
$("#divcommandlist").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

}, false);
appendapplogz("wired btnlistmathithio click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnlistamemba.
try{
document.getElementById("btnlistamemba").addEventListener("click", function(e){

document.getElementById("txtconsoleinput").value = "listamemba";
$("#txtconsoleinput").focus();

webconsole(e);

$("#divcommandlist").removeClass("toggled");
$("#divcommandlist").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

}, false);
appendapplogz("wired btnlistamemba click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnhelp.
try{
document.getElementById("btnhelp").addEventListener("click", function(e){

document.getElementById("txtconsoleinput").value = "help";
$("#txtconsoleinput").focus();

webconsole(e);

$("#divcommandlist").removeClass("toggled");
$("#divcommandlist").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

}, false);
appendapplogz("wired help click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgclosecommand.
try{
document.getElementById("imgclosecommand").addEventListener("click", function(){

$("#divcommandlist").removeClass("toggled");
$("#divcommandlist").css({

'display': 'none',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-out'
});

}, false);
appendapplogz("wired imgclosecommand click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}


toggledialogdivs();

}catch(err){
logglobalerrors(err);
}
}

function executeclearmathithioonconsole(){
try{
logtomurungamili('execution started...', "info");
createmathithiolist();
}
catch(err)
{ 
console.log(err.message);
showeventsnotifierdiv(err.message);
logtomurungamili(err.message, "error");
hideprogressdiv();
}
}
