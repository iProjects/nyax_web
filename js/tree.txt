
var _map = new Map();
var _infopos = 0;
var _warningpos = 0;
var _errorpos = 0;
var _position = 0;
var _info_arr = [];
var _warning_arr = [];
var _error_arr = [];
var entities = [];
var _total_records_count = 0;
var _info_records_count = 0;
var _warning_records_count = 0;
var _error_records_count = 0;
var _divtreewrapper = $("#divtreewrapper");

function createtree(){
try{

iteratetree();

//createtreecontent();

}
catch(err)
{
logglobalerrors(err);
hideprogressdiv();
}
}

function createtreecontent(){

//perform the retrieve 
entities = [];

showprogressdiv();

showprogresstext("retrieving records...");

_divtreewrapper = $("#divtreewrapper");

try{

if(db == null || db == undefined){
hideprogressdiv();
return;
}

if(_executingpage === "tree.html"){

_divtreewrapper.empty();

var transaction = db.transaction(["mathithio"], "readonly");

var store = transaction.objectStore("mathithio");

var _cursor = store.openCursor();

_cursor.onsuccess = function(e) {
  var cursor = e.target.result;
  if (cursor) {
    entities.push(cursor.value);
    cursor.continue();
  }
};

setTimeout(function(){

var records = entities;

if(records.length > 0){
//buildtree(records);
}

}, 5000);

}

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function buildtree(records){
try{

_position = 0;
_infopos = 0;
_warningpos = 0;
_errorpos = 0;
_info_arr = [];
_warning_arr = [];
_error_arr = [];
_divtreewrapper = $("#divtreewrapper");
_divtreewrapper.empty();
_total_records_count = records.length;
_info_records_count = _info_arr.length;
_warning_records_count = _warning_arr.length;
_error_records_count = _error_arr.length;

var transaction;
var store;

var _last_index = records.length - 1;
var _last_record = records[_last_index];
if(_last_record !== null && _last_record !== undefined){

var _idkey = _last_record.autoid;
var _intkey = parseInt(_idkey);

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

var _info_range = '<div class="divtreecontrols">';
_info_range += '<span class="lblinfo">info</span>';
_info_range += '<span id="lblinfo" class="lblinfo">' + "0/" + _total_records_count + '</span>';
_info_range += '<input id="txtinfo" type="range" min="0" max="' + _total_records_count + '"  step="1" value="0" disabled="disabled" orient="vertical" />';
_info_range += '</div>';

var _warning_range = '<div class="divtreecontrols">';
_warning_range += '<span class="lblwarning">warning</span>';
_warning_range += '<span id="lblwarning" class="lblwarning">' + "0/" + _total_records_count + '</span>';
_warning_range += '<input id="txtwarning" type="range" min="0" max="' + _total_records_count + '"  step="1" value="0" disabled="disabled" orient="vertical" />';
_warning_range += '</div>';

var _error_range = '<div class="divtreecontrols">';
_error_range += '<span class="lblerror">error</span>';
_error_range += '<span id="lblerror" class="lblerror">' + "0/" + _total_records_count + '</span>';
_error_range += '<input id="txterror" type="range" min="0" max="' + _total_records_count + '"  step="1" value="0" disabled="disabled" orient="vertical" />';
_error_range += '</div>';

var _tree_controls = "";
_tree_controls += _info_range;
_tree_controls += _warning_range;
_tree_controls += _error_range;

_divtreewrapper.html(_tree_controls);

for(var i = 0; i < records.length; i++){

var _recordobj = records[i];
var _eventtype = _recordobj["eventtype"];
var _autoid = _recordobj["autoid"];

var _idkey = _autoid;
var _recordscount = records.length;

buildtreeoncallback(_idkey, _eventtype, _recordscount);

}

}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
showeventsnotifierdiv("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");

hideprogressdiv();
cleardiveventnotifier();
}

}

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function buildtreeoncallback(_idkey, _eventtype, _recordscount){
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

showprogresstext("building tree...");

_position++;

var _txtinfo = document.getElementById("txtinfo");
var _txtwarning = document.getElementById("txtwarning");
var _txterror = document.getElementById("txterror");
var _lblinfo = document.getElementById("lblinfo");
var _lblwarning = document.getElementById("lblwarning");
var _lblerror = document.getElementById("lblerror");

switch(_eventtype){
case "info":
_infopos++;
if(_txtinfo !== null && _txtinfo !== undefined){
_txtinfo.value = _infopos;
}
_info_arr.push(_resultobj);
_info_records_count++;
var _record_count = _info_records_count + "/" + _total_records_count;
if(_lblinfo !== null && _lblinfo !== undefined){
_lblinfo.textContent = _record_count;
}
break;
case "warning":
_warningpos++;
if(_txtwarning !== null && _txtwarning !== undefined){
_txtwarning.value = _warningpos;
}
_warning_arr.push(_resultobj);
_warning_records_count++;
var _record_count = _warning_records_count + "/" + _total_records_count;
if(_lblwarning !== null && _lblwarning !== undefined){
_lblwarning.textContent = _record_count;
}
break;
case "error":
_errorpos++;
if(_txterror !== null && _txterror !== undefined){
_txterror.value = _errorpos;
}
_error_arr.push(_resultobj);
_error_records_count++;
var _record_count = _error_records_count + "/" + _total_records_count;
if(_lblerror !== null && _lblerror !== undefined){
_lblerror.textContent = _record_count;
}
break;
}

var _percentage = "processed...<br/>[ " + _position + " ] of [ " + _recordscount + " ]";
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

hideprogressdiv();
cleardiveventnotifier();
}

}catch(err){
console.error("error message [ " + err.message + " ]<br/>error message [ " + err.stack + " ]");
showeventsnotifierdiv("error message [ " + err.message + " ]<br/>error message [ " + err.stack + " ]", "error");

hideprogressdiv();
cleardiveventnotifier();
}
}

function iteratetree(){
try{

var _isinfo = false;
var _iswarning = false;
var _iserror = false;
var _strtree = "";
var _strcontrolz = "";
var _logz_tree_arr = _global_logz_tree_arr;
_divtreewrapper = $("#divtreewrapper");
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

_divtreewrapper.append(_strcontrolz);

_infogroup = '<div id="divinfotreecontainer" class="divttreecontainer"><img src="images/closedtreenode.png" id="imginfotree" class="imgtoggletree" title="show"/><span class="lbltoggletree">info</span><span id="lblinfocounta" class="lbltreecounta"></span><div id="divinfotreenode" class="divttreenode"><ul id="lstinfotreewrapper" class="lstparentnode"></ul></div></div>';
_warninggroup = '<div id="divwarningtreecontainer" class="divttreecontainer"><img src="images/closedtreenode.png" id="imgwarningtree" class="imgtoggletree" title="show"/><span class="lbltoggletree">warning</span><span id="lblwarningcounta" class="lbltreecounta"></span><div id="divwarningtreenode" class="divttreenode"><ul id="lstwarningtreewrapper" class="lstparentnode"></ul></div></div>';
_errorgroup = '<div id="diverrortreecontainer" class="divttreecontainer"><img src="images/closedtreenode.png" id="imgerrortree" class="imgtoggletree" title="show"/><span class="lbltoggletree">error</span><span id="lblerrorcounta" class="lbltreecounta"></span><div id="diverrortreenode" class="divttreenode"><ul id="lsterrortreewrapper" class="lstparentnode"></ul></div></div>';

_strtree += _infogroup;
_strtree += _warninggroup;
_strtree += _errorgroup;

_divtreewrapper.append(_strtree);

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
'color': '#000'
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
'color': '#000'
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

$("#divtreewrapper .divnotifier").css({

'background-color': '#000',
'margin': '1px',
'padding': '5px',
'border': '1px solid #0AF026',
'border-radius': '5px'
});

//listen for click event in imginfotree.
try{
document.getElementById("imginfotree").addEventListener("click", function(){

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

}, false);
appendapplogz("wired imginfotree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgwarningtree.
try{
document.getElementById("imgwarningtree").addEventListener("click", function(){

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

}, false);
appendapplogz("wired imgwarningtree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in imgerrortree.
try{
document.getElementById("imgerrortree").addEventListener("click", function(){

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

}, false);
appendapplogz("wired imgerrortree click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btnexpandall.
try{
document.getElementById("btnexpandall").addEventListener("click", function(){

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

}, false);
appendapplogz("wired btnexpandall click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btncollapseall.
try{
document.getElementById("btncollapseall").addEventListener("click", function(){

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

}, false);
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


