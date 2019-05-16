
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
var _divchartwrapper = $("#divchartwrapper");

function createchart(){
try{

createchartcontent();

}
catch(err)
{
logglobalerrors(err);
hideprogressdiv();
}
}

function createchartcontent(){

//perform the retrieve 
entities = [];

showprogressdiv();

showprogresstext("retrieving records...");

try{

if(db == null || db == undefined){
hideprogressdiv();
return;
}

if(_executingpage === "chart.html"){

_divchartwrapper.empty();

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
buildchart(records);
}

}, 5000);

}

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function buildchart(records){
try{

_position = 0;
_infopos = 0;
_warningpos = 0;
_errorpos = 0;
_info_arr = [];
_warning_arr = [];
_error_arr = [];
_divchartwrapper = $("#divchartwrapper");
_divchartwrapper.empty();
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

var _info_range = '<div class="divchartcontrols">';
_info_range += '<span class="lblinfo">info</span>';
_info_range += '<span id="lblinfo" class="lblinfo">' + "0/" + _total_records_count + '</span>';
_info_range += '<input id="txtinfo" type="range" min="0" max="' + _total_records_count + '"  step="1" value="0" disabled="disabled" orient="vertical" />';
_info_range += '</div>';

var _warning_range = '<div class="divchartcontrols">';
_warning_range += '<span class="lblwarning">warning</span>';
_warning_range += '<span id="lblwarning" class="lblwarning">' + "0/" + _total_records_count + '</span>';
_warning_range += '<input id="txtwarning" type="range" min="0" max="' + _total_records_count + '"  step="1" value="0" disabled="disabled" orient="vertical" />';
_warning_range += '</div>';

var _error_range = '<div class="divchartcontrols">';
_error_range += '<span class="lblerror">error</span>';
_error_range += '<span id="lblerror" class="lblerror">' + "0/" + _total_records_count + '</span>';
_error_range += '<input id="txterror" type="range" min="0" max="' + _total_records_count + '"  step="1" value="0" disabled="disabled" orient="vertical" />';
_error_range += '</div>';

var _chart_controls = "";
_chart_controls += _info_range;
_chart_controls += _warning_range;
_chart_controls += _error_range;

_divchartwrapper.html(_chart_controls);

for(var i = 0; i < records.length; i++){

var _recordobj = records[i];
var _eventtype = _recordobj["eventtype"];
var _autoid = _recordobj["autoid"];

var _idkey = _autoid;
var _recordscount = records.length;

buildchartoncallback(_idkey, _eventtype, _recordscount);

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

function buildchartoncallback(_idkey, _eventtype, _recordscount){
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

showprogresstext("building chart...");

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


