
var _percentage = "";
var _totaltodelete;
var _pos;
var _divtablewrapper = $("#divtablewrapper");
var _divtablecontent = $("#divtablecontent");
var _listwrapper = $("#listwrapper");
var _position = 0;
var _tablestr = "";

$(document).ready(function(){
try{

setTimeout(function(){

var _selectdeletecheckboxes = document.getElementsByClassName("chkselectdelete");

$(_selectdeletecheckboxes).each(function(){


var _id = $(this).attr('id');

var _idarr = _id.split("chkselectdelete");
var _idstr = _idarr[1];
var _arrid = $(this).attr('arrid');

var _ischecked = document.getElementById(_id).checked;

if(!_ischecked){

document.getElementById("chkselectall").checked = 0;
}
});

//listen for chkselectdelete click. 
try{
document.getElementsByClassName("chkselectdelete").addEventListener("click", function(){

var _id = $(this).attr('id');

var _idarr = _id.split("chkselectdelete");
var _idstr = _idarr[1];
var _arrid = $(this).attr('arrid');

var _ischecked = document.getElementById(_id).checked;

if(!_ischecked){

document.getElementById("chkselectall").checked = 0;
}
}, false);
appendapplogz("wired chkselectdelete Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

}, 5000);

}
catch(err)
{
console.log(err.message);
showeventsnotifierdiv(err.message, "error");
}
});

function createtable(){

_totaltodelete = 0;
_pos = 0;

//perform the retrieve 
var entities = [];

var _btn = document.getElementById("btnrefresh");

try{

if(db == null || db == undefined){
hideprogressdiv();
return;
}

if(_executingpage === "mathithio.html"){

$("#divtablewrapper").html("retrieving recordz...");

$("#lblrecordzcounta").html("");

showprogressdiv();

showprogresstext("building table...");

_logz_taken_records_array = [];

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

setstorages("logz recordz count", parseInt(records.length));

SetPersistentCookie("logz recordz count", parseInt(records.length));

syseventslogger("start building table logz...", "warning");

syseventslogger("[ " + records.length + " ] records found", "info");

$("#lblrecordzcounta").html(records.length + " records");

if(records.length === 0){
$("#divtablewrapper").html("no recordz in store...");
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

if(records.length <= 0){
hideprogressdiv();
return;
}

_logz_records_count = records.length;
_logz_records_array = records;

if(_current_page === 0){
$("#txtcurrentmathithiopage").val(_current_page + 1);
}else{
$("#txtcurrentmathithiopage").val(_current_page);
}

var _combo_ = document.getElementById("cbopagesize");
var _selectedIndex = _combo_.selectedIndex;
var selected_value = _combo_.options[(_selectedIndex)].value;
var _combo_page_size = parseInt(selected_value);

if(!parseInt(selected_value)){

createtablegivenlist(_logz_records_array);

}else{

paginatelogztable();

if(_logz_taken_records_array.length > 0){

var _currentpagearray = _logz_taken_records_array[_current_page];

if(_currentpagearray == undefined){
var _total_pages = _logz_taken_records_array.length;
_current_page = _total_pages - 1;
_currentpagearray = _logz_taken_records_array[_current_page];
}

var _current_array = _currentpagearray[0];

createtablegivenlist(_logz_taken_records_array[_current_page][0]);

}

}

syseventslogger("finished building table logz.", "info");

}, 5000);

}

}catch(err){
showeventsnotifierdiv(err.message + "  " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function refreshtable(){
try{

cleardiveventnotifier();

syseventslogger("refreshing table logz...", "warning");

$("#divtablewrapper").html("refreshing recordz...");

createtable();

}catch(err){
showeventsnotifierdiv(err.message + "  " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]"); 
}
}

function paginatelogztable(){
try{

var _combo_ = document.getElementById("cbopagesize");
var _selectedIndex = _combo_.selectedIndex;
var selected_value = _combo_.options[(_selectedIndex)].value;
var _combo_page_size = parseInt(selected_value);

_local_logz_records_count = _logz_records_count;
_local_logz_records_array = _logz_records_array;

var _ncombo_page_size = parseInt(_combo_page_size);

var _chunks_of_recordz_to_take = _local_logz_records_count / _ncombo_page_size;

var _remaining_records_str = _chunks_of_recordz_to_take.toString();
var _splited_remaining_records_str = _remaining_records_str.split(".");
var _first_recordz_to_take = _splited_remaining_records_str[0];

_total_pages = _first_recordz_to_take;
_first_equal_chunkz = _first_recordz_to_take;
var _last_remaining_recordz = 0;

if(_splited_remaining_records_str.length > 1){
_total_pages = parseInt(_total_pages) + 1;
_last_remaining_recordz = _splited_remaining_records_str[1];
_last_remaining_chunkz = _last_remaining_recordz;
}

$("#lbltotalpages").html(_total_pages);

var _logz_taken_counta = 0;
var _int_first_recordz_to_take = parseInt(_first_recordz_to_take);

if(_int_first_recordz_to_take !== 0){

for(var i = 0; i < _first_recordz_to_take; i++){

var _local_recordz_array = [];
var _indexfrom = 0;
var _indexto = 0;

_indexfrom = _logz_taken_counta;
_indexto = _logz_taken_counta + _ncombo_page_size;
_logz_taken_counta += _ncombo_page_size;

var _taken_records_array = _local_logz_records_array;

var _taken_records_arr = _taken_records_array.slice(_indexfrom, _indexto);

_local_recordz_array.push(_taken_records_arr);

_logz_taken_records_array.push(_local_recordz_array);
}

}

var _remainder_records_arr = _local_logz_records_array.slice(_logz_taken_counta, _local_logz_records_array.length);

var _prependa_arr = [];

_prependa_arr.push(_remainder_records_arr);

_logz_taken_records_array.push(_prependa_arr);

}catch(err){
showeventsnotifierdiv(err.message + "  " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function createtablegivenlist(records){
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
_tablestr = "";
_divtablewrapper = $("#divtablewrapper");
_divtablecontent = $("#divtablecontent");
_listwrapper = $("#listwrapper");
var _recordscount = records.length;
_position = 0;

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
_tablestr += '<div class="divlistitem tdid"># [ ' + _id + ' ]</div>';
_tablestr += '<div class="divlistitem tdautoid">auto id: [ ' + _autoid + ' ]</div>';
_tablestr += '<div class="divlistitem tduniqeventid">event id: [ ' + _uniqeventid + ' ]</div>';

_tablestr += '<div class="divlistitem tdeventtype">event type : [ ' + _eventtype + ' ]</div>';
_tablestr += '<div class="divlistitem tdloggedinuser">logged in user : [ ' + _loggedinuser + ' ]</div>';
_tablestr += '<div class="divlistitem tdcreateddate">created date : [ ' + _createddate + ' ]</div>';
_tablestr += '<div class="divlistitem tdbrowser">browser : [ ' + _browser + ' ]</div>';
_tablestr += '<div class="divlistitem">' + _log + '</div>';

_tablestr += '<div class="divlistitem"><a class="btnedit" title="edit"><img src="images/edit.jpg" class="imgedit" title="edit" dbeditid="' + _autoid + '"/></a></div>';

_tablestr += '<div class="divlistitem"><a class="btndelete" title="delete"><img src="images/delete.png" class="imgdelete" title="delete" arrdeleteid="' + i + '" dbdeleteid="' + _autoid + '"/></a></div>';

_tablestr += '<div class="divlistitem"><input id="chkselectdelete' + _autoid + '" name="chkselectdelete' + _autoid + '" arrid="' + i + '" type="checkbox" class="chkselectdelete"/></div>';

_tablestr += "</li>";

var _idkey = _autoid;
var _strtablerow = _tablestr;

buildmathithiotableoncallback(_idkey, _strtablerow, _recordscount);

}

}catch(err){
showeventsnotifierdiv(err.message + "  " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
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
wireglobaltableelementsclickeventlisteners();
wiredeleteclickeventlisteners();
wireeditclickeventlisteners();
hideprogressdiv();
cleardiveventnotifier();
}

}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
showeventsnotifierdiv("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

}catch(err){
console.error("error message [ " + err.message + " ]<br/>error message [ " + err.stack + " ]");
showeventsnotifierdiv("error message [ " + err.message + " ]<br/>error message [ " + err.stack + " ]", "error");
}
}

function wireglobaltableelementsclickeventlisteners(){
try{

$("#imgdeleteall").on("click",function(){

cleardiveventnotifier();

_totaltodelete = 0;
_pos = 0;

var _selectdeletecheckboxes = document.getElementsByClassName("chkselectdelete");

$(_selectdeletecheckboxes).each(function(){

var _id = $(this).attr('id');

var _ischecked = document.getElementById(_id).checked;
if(_ischecked){
_totaltodelete = _totaltodelete + 1;
}
});

if(_totaltodelete > 0){
showprogressdiv();
showprogresstext("preparing delete dialog...");
deletealldialog();
}else{
showeventsnotifierdiv("no records selected to delete...", "warning");
}

});

$("#chkselectall").on("change",function(){

var _selectall = document.getElementById("chkselectall").checked;
var _selectdeletecheckboxes = document.getElementsByClassName("chkselectdelete");

if(_selectall){
$(_selectdeletecheckboxes).each(function(){

$(this).attr('checked', true);

var _id = $(this).attr('id');

document.getElementById(_id).checked = true;
});
}else{
$(_selectdeletecheckboxes).each(function(){

$(this).attr('checked', false);

var _id = $(this).attr('id');

document.getElementById(_id).checked = false;
});
}

});

}
catch(err)
{
logglobalerrors(err);
}
}

function wireeditclickeventlisteners(){
try{

var _editbuttons = document.getElementsByClassName("imgedit");

$(_editbuttons).each(function(){


$(this).on("click",function(){

var _dbeditid = $(this).attr('dbeditid');


if(_dbeditid !== undefined && _dbeditid !== null){

cleardiveventnotifier();

showprogressdiv();

showprogresstext("preparing edit dialog...");

editdialog(_dbeditid);

}

});

});


}
catch(err)
{
logglobalerrors(err);
}
}

function wiredeleteclickeventlisteners(){
try{

var _deletebuttons = document.getElementsByClassName("imgdelete");

$(_deletebuttons).each(function(){


$(this).on("click",function(){

var _arrdeleteid = $(this).attr('arrdeleteid');

var _dbdeleteid = $(this).attr('dbdeleteid');


if(_arrdeleteid !== undefined && _arrdeleteid !== null && _dbdeleteid !== undefined && _dbdeleteid !== null){

cleardiveventnotifier();

showprogressdiv();

showprogresstext("preparing delete dialog...");

deletedialog(_arrdeleteid, _dbdeleteid);

}

});

});


}
catch(err)
{
logglobalerrors(err);
}
}

function deletefromdb(deletekey){
try{

var transaction;
var store;

try{
transaction = db.transaction(["mathithio"], "readwrite");
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

//perform the delete
var request = store.delete(deletekey);

request.onsuccess = function(e){

showprogresstext("purging record from store...");

showeventsnotifierdiv("deleted key [ " + deletekey + " ]. server response: [ " + e.type + " ].", "info");

deletecancelcallback();

}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
syseventslogger("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

}
catch(err)
{
var _msg = err.name + " " + err.message;
showeventsnotifierdiv(_msg, "error");
}
}

function navigatetable(e){
try{

showprogressdiv();

showprogresstext("building table...");

var callingelement = e.target.id;
console.info("callingelement [ " + callingelement + " ]");

var _ismaxriched = false;

switch(callingelement){
case "btnprevious":
var _min_counta = 0;
var _curr_page = 0;
var _txt_curr_page = 0;

var _txtcurrentpage = document.getElementById("txtcurrentmathithiopage").value;
var _int_txtcurrentpage = parseInt(_txtcurrentpage);
_curr_page = _int_txtcurrentpage;

if(_curr_page < _min_counta){
_current_page = _current_page;
_txt_curr_page = (_min_counta + 1);
}
if(_curr_page === _min_counta){
_current_page = _int_txtcurrentpage;
_txt_curr_page = _int_txtcurrentpage;
}
if(_curr_page > _min_counta){
_current_page--;
_txt_curr_page = _current_page;
_int_txtcurrentpage--;
_txt_curr_page = _int_txtcurrentpage;
_current_page = _int_txtcurrentpage;
}
console.info("_current_page [ " + _current_page + " ]");
$("#txtcurrentmathithiopage").val(_txt_curr_page);

createtable();

break;
case "btnnext":
var _max_counta = parseInt(_total_pages);
var _txt_curr_page = 0;
var _curr_page = 0;

var _txtcurrentpage = document.getElementById("txtcurrentmathithiopage").value;
var _int_txtcurrentpage = parseInt(_txtcurrentpage);
//var _int_txtcurrentpage = parseInt(_global_current_page);
_curr_page = _int_txtcurrentpage;

if(_curr_page > _max_counta){
_current_page = _max_counta;
_txt_curr_page = _max_counta;
}
if(_curr_page === _max_counta){
_current_page = _current_page;
_txt_curr_page = _int_txtcurrentpage;
}
if(_curr_page < _max_counta){
_int_txtcurrentpage++;
_txt_curr_page = _int_txtcurrentpage;
_current_page = _int_txtcurrentpage;
}
console.info("_current_page [ " + _current_page + " ]");
$("#txtcurrentmathithiopage").val(_txt_curr_page);

createtable();

break;
default: 
break;
}

}
catch(err)
{
console.error(err);
}
}

function deletedialog(_arrdeleteid, _dbdeleteid){
try{

$("#divdeletedialog").html("");

var _dialog;
_dialog = '<span id="lbldeletetext">are you sure you want to delete record at index [ ' + _dbdeleteid + ' ]</span>';
_dialog += '<a id="btndeleteok">ok</a>';
_dialog += '<a id="btndeletecancel">cancel</a></div>';

$("#divdeletedialog").html(_dialog);

$("#dialogdelete").css({

'border': 'solid 1px black',
'border-radius': '20px',
'display': 'block',
'clear': 'both',
'float': 'left',
'position': 'absolute',
'z-index': '8000',
'top': '1px',
'width': '99%',
'-webkit-logical-width': '97%',
'height': '99%;',
'background-color': '#121010',
'opacity': '0.5',
'left': '0px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-in'
});

$("#divdeletedialog").css({

'position': 'absolute',
'display': 'block',
'width': '330px',
'height': '10%',
'bottom': '50%',
'margin': '5px',
'padding': '10px',
'overflow': 'auto',
'background-color': '#E0ECE6',
'z-index': '9000',
'opacity': '1',
'left': '25%',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-in'
});

$("#lbldeletetext").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#090909'
});

$("#btndeleteok").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'float': 'left',
'left': '30%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#2AF30C'
});

$("#btndeletecancel").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'none',
'float': 'left',
'left': '35%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#F3350C'
});

//listen for click event in btndeleteok.
try{
document.getElementById("btndeleteok").addEventListener("click", function(){
deleteokcallback(_arrdeleteid, _dbdeleteid);
}, false);
appendapplogz("wired btndeleteok click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btndeletecancel.
try{
document.getElementById("btndeletecancel").addEventListener("click", deletecancelcallback, false);
appendapplogz("wired btndeletecancel click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

hideprogressdiv();

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function deleteokcallback(_arrdeleteid, _dbdeleteid){
try{

showprogressdiv();

showprogresstext("purging record from ui...");

if(_arrdeleteid !== undefined && _arrdeleteid !== null){
var _intkey = parseInt(_arrdeleteid);
var _divlstlog = document.getElementById("listwrapper");
var _listtodelete = "listcontent" + _intkey;
_divlstlog.removeChild(document.getElementById(_listtodelete));
}

showprogresstext("purging record from store...");

if(_dbdeleteid !== undefined && _dbdeleteid !== null){
var _intkey = parseInt(_dbdeleteid);
deletefromdb(_intkey);
refreshtable();
}

}catch(err){
logglobalerrors(err);
}
}

function deletecancelcallback(){
try{

$("#dialogdelete").css({

'border': 'solid 1px black',
'border-radius': '20px',
'clear': 'both',
'float': 'left',
'position': 'absolute',
'z-index': '8000',
'top': '1px',
'width': '99%',
'height': '99%;',
'background-color': '#121010',
'opacity': '0.5',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-out'
});

$("#divdeletedialog").css({

'position': 'absolute',
'display': 'block',
'width': '330px',
'height': '10%',
'top': '30%',
'margin': '5px',
'padding': '10px',
'overflow': 'auto',
'background-color': '#E0ECE6',
'z-index': '9000',
'opacity': '1',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-out'
});

}catch(err){
logglobalerrors(err);
}
}

function editdialog(_dbeditid){
try{

var _intkey = parseInt(_dbeditid);

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
showeventsnotifierdiv("editdialog server response: [ " + e.type + " ].", "info");
console.info("editdialog server response: [ "+ e.type + " ].");
var _resultobj = e.target.result;
populatedialog(_resultobj);
}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
syseventslogger("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function populatedialog(resultobj){
try{

var autoid = resultobj.autoid;
var uniqeventid = resultobj.uniqeventid;
var eventtype = resultobj.eventtype;
var log = resultobj.log;
var loggedinuser = resultobj.loggedinuser;
var browser = resultobj.browser;
var createddate = resultobj.createddate;
if(resultobj.createddate === null || resultobj.createddate == undefined){
createddate = getcurrentdatetime();
}

$("#diveditdialog").html("");

var _dialog;
_dialog = '<span class="lbledit">autoid</span>';
_dialog += '<input id="txtautoid" class="txtedit" type="text" value="' + autoid + '"/>';
_dialog += '<span class="lbledit">uniqeventid</span>';
_dialog += '<input id="txtuniqeventid" class="txtedit" type="text" value="' + uniqeventid + '"/>';
_dialog += '<span class="lbledit">eventtype</span>';
_dialog += '<input id="txteventtype" class="txtedit" type="text" value="' + eventtype + '"/>';
_dialog += '<span class="lbledit">log</span>';
_dialog += '<div id="diveditlog" class="txtedit">' + log + '</div>';
_dialog += '<span class="lbledit">loggedinuser</span>';
_dialog += '<input id="txtloggedinuser" class="txtedit" type="text" value="' + loggedinuser + '"/>';
_dialog += '<span class="lbledit">browser</span>';
_dialog += '<input id="txtbrowser" class="txtedit" type="text" value="' + browser + '"/>';
_dialog += '<span class="lbledit">createddate</span>';
_dialog += '<input id="txtcreateddate" class="txtedit" type="text" value="' + createddate + '"/>';

_dialog += '<a id="btneditok">ok</a>';
_dialog += '<a id="btneditcancel">cancel</a></div>';

$("#diveditdialog").html(_dialog);

$("#dialogedit").css({

'border': 'solid 1px black',
'border-radius': '20px',
'display': 'block',
'clear': 'both',
'float': 'left',
'position': 'absolute',
'z-index': '8000',
'top': '1px',
'width': '99%',
'-webkit-logical-width': '97%',
'height': '99%;',
'background-color': '#121010',
'opacity': '0.5',
'left': '0px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-in'
});

$("#diveditdialog").css({

'position': 'absolute',
'display': 'block',
'width': '400px',
'height': '90%',
'max-height': '90%',
'top': '0%',
'margin': '5px',
'padding': '10px',
'overflow': 'auto',
'background-color': '#E0ECE6',
'z-index': '9000',
'opacity': '1',
'left': '25%',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-in'
});

$("#diveditdialog .divnotifier img").css({

'width': '20px',
'height': '20px'
});

$("#diveditdialog .divnotifier").css({

'background-color': '#000'
});

$(".lbledit").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'float': 'left',
'padding': '5px',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#090909'
});

$(".txtedit").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#090909'
});

$("#btneditok").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'float': 'left',
'margin': '10px',
'left': '30%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#2AF30C'
});

$("#btneditcancel").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'none',
'float': 'left',
'margin': '10px',
'left': '35%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#F3350C'
});

//listen for click event in btneditok.
try{
document.getElementById("btneditok").addEventListener("click", function(){

showprogressdiv();

showprogresstext("validating user input...");

autoid = document.getElementById("txtautoid").value;
uniqeventid = document.getElementById("txtuniqeventid").value;
eventtype = document.getElementById("txteventtype").value;
var _divlog = $("#diveditlog")[0];
log = _divlog.innerHTML;
loggedinuser = document.getElementById("txtloggedinuser").value;
browser = document.getElementById("txtbrowser").value;
createddate = document.getElementById("txtcreateddate").value;

//define the object
var mathithioobj = {
uniqeventid: uniqeventid,
eventtype: eventtype,
log: log,
loggedinuser: loggedinuser,
browser: browser,
createddate: createddate
}

editokcallback(mathithioobj, autoid);

}, false);
appendapplogz("wired btneditok click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btneditcancel.
try{
document.getElementById("btneditcancel").addEventListener("click", editcancelcallback, false);
appendapplogz("wired btneditcancel click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

hideprogressdiv();

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function editokcallback(mathithioobj, autoid){
try{

if(mathithioobj !== undefined && mathithioobj !== null){

showprogressdiv();

showprogresstext("first delete the object from store...");

if(autoid !== undefined && autoid !== null){
var _intkey = parseInt(autoid);
deletefromdb(_intkey);
}

showprogresstext("create the object as a new record...");

updatedb(mathithioobj, autoid);
}

}catch(err){
logglobalerrors(err);
}
}

function editcancelcallback(){
try{

$("#dialogedit").css({

'border': 'solid 1px black',
'border-radius': '20px',
'clear': 'both',
'float': 'left',
'position': 'absolute',
'z-index': '8000',
'top': '1px',
'width': '99%',
'height': '99%;',
'background-color': '#121010',
'opacity': '0.5',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-out'
});

$("#diveditdialog").css({

'position': 'absolute',
'display': 'block',
'width': '330px',
'height': '90%',
'top': '30%',
'margin': '5px',
'padding': '10px',
'overflow': 'auto',
'background-color': '#E0ECE6',
'z-index': '9000',
'opacity': '1',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-out'
});

}catch(err){
logglobalerrors(err);
}
}

function updatedb(mathithioobj, autoid){
try{

var transaction;
var store;

try{
transaction = db.transaction(["mathithio"], "readwrite");
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

//Put this updated object back into the database.
var request = store.put(mathithioobj);

request.onsuccess = function(e){
console.info("updatedb server response: [ "+ e.type + " ].");
showeventsnotifierdiv("updatedb server response: [ " + e.type + " ].", "info");
console.info("updated record at index: [ " + autoid + " ].", "info");
showeventsnotifierdiv("updated record at index: [ " + autoid + " ].", "info");
refreshtable();
editcancelcallback();

}

request.onerror = function(e){
//do something for the error
console.error("error name [ " + e.target.error.name +  " ] <br/> error message [ " + e.target.error.message + " ]");

showeventsnotifierdiv("error name [ " + e.target.error.name +  " ] error message [ " + e.target.error.message + " ]", "error");

}

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " <br/> " + err.filename + " ]");
showeventsnotifierdiv("error name [ " + err.name +  " ] error message [ " + err.message + " ]", "error");
logglobalerrors(err);
}
}

function deletealldialog(){
try{

$("#divdeletedialog").html("");

var _dialog;
_dialog = '<span id="lbldeletetext">are you sure you want to delete multiple records</span>';
_dialog += '<a id="btndeleteok">ok</a>';
_dialog += '<a id="btndeletecancel">cancel</a></div>';

$("#divdeletedialog").html(_dialog);

$("#dialogdelete").css({

'border': 'solid 1px black',
'border-radius': '20px',
'display': 'block',
'clear': 'both',
'float': 'left',
'position': 'absolute',
'z-index': '8000',
'top': '1px',
'width': '99%',
'-webkit-logical-width': '97%',
'height': '99%;',
'background-color': '#121010',
'opacity': '0.5',
'left': '0px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-in'
});

$("#divdeletedialog").css({

'position': 'absolute',
'display': 'block',
'width': '330px',
'height': '10%',
'bottom': '50%',
'margin': '5px',
'padding': '10px',
'overflow': 'auto',
'background-color': '#E0ECE6',
'z-index': '9000',
'opacity': '1',
'left': '25%',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-in'
});

$("#lbldeletetext").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'float': 'left',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#090909'
});

$("#btndeleteok").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'both',
'float': 'left',
'left': '30%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#2AF30C'
});

$("#btndeletecancel").css({

'position': 'relative',
'display': 'block',
'width': 'auto',
'height': 'auto',
'clear': 'none',
'float': 'left',
'left': '35%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'color': '#F3350C'
});

//listen for click event in btndeleteok.
try{
document.getElementById("btndeleteok").addEventListener("click", function(){
deleteallokcallback();
}, false);
appendapplogz("wired btndeleteok click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

//listen for click event in btndeletecancel.
try{
document.getElementById("btndeletecancel").addEventListener("click", deleteallcancelcallback, false);
appendapplogz("wired btndeletecancel click Event Listener.", "info");
}
catch(err)
{
logglobalerrors(err);
}

hideprogressdiv();

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function deleteallokcallback(){
try{

showprogressdiv();

showprogresstext("preparing records for deletion...");

var _selectdeletecheckboxes = document.getElementsByClassName("chkselectdelete");

_starttime = getcurrentdatetime();
_currenttime = getcurrentdatetime();

elapsed_hrs = 0;
elapsed_mnts = 0;
elapsed_scnds = 0;
elapsed_mllscnds = 0;

var _percentage = "deleting...<br/>[ " + _pos + " ] of [ " + _totaltodelete + " ]";
var _int_item_remaining = _totaltodelete - _pos;
var _item_remaining = "remaining...<br/>[ " + _int_item_remaining + " ]";
var _timelapsed = getdeletetimelapsed();

updateprogresscontrols(_percentage, _item_remaining, _timelapsed, _pos, _totaltodelete);

setTimeout(function(){

$(_selectdeletecheckboxes).each(function(){


var _id = $(this).attr('id');

var _idarr = _id.split("chkselectdelete");
var _idstr = _idarr[1];
var _arrid = $(this).attr('arrid');

var _ischecked = document.getElementById(_id).checked;

if(_ischecked){

if(_idstr !== undefined && _idstr !== null && _arrid !== undefined && _arrid !== null){
var _intkey = parseInt(_idstr);

deleteallfromdb(_intkey, _arrid);

}

}

});

}, 5000);

}catch(err){
logglobalerrors(err);
}
}

function deleteallcancelcallback(){
try{

$("#dialogdelete").css({

'border': 'solid 1px black',
'border-radius': '20px',
'clear': 'both',
'float': 'left',
'position': 'absolute',
'z-index': '8000',
'top': '1px',
'width': '99%',
'height': '99%;',
'background-color': '#121010',
'opacity': '0.5',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-out'
});

$("#divdeletedialog").css({

'position': 'absolute',
'display': 'block',
'width': '330px',
'height': '10%',
'top': '30%',
'margin': '5px',
'padding': '10px',
'overflow': 'auto',
'background-color': '#E0ECE6',
'z-index': '9000',
'opacity': '1',
'left': '-9999px',
'transition-property': 'left',
'transition-duration': '5000ms',
'transition-timing-function': 'ease-out'
});

}catch(err){
logglobalerrors(err);
}
}

function deleteallfromdb(deletekey, _arrid){
try{

var transaction;
var store;

try{
transaction = db.transaction(["mathithio"], "readwrite");
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

//perform the delete
var request = store.delete(deletekey);

request.onsuccess = function(e){

showprogresstext("purging records from store...");

//var _listwrapper = document.getElementById("listwrapper");
//var _strlistcontent = "listcontent" + _arrid;
//var _listcontent = document.getElementById(_strlistcontent);
//_listwrapper.removeChild(_listcontent);

_pos++;

var _percentage = "deleting...<br/>[ " + _pos + " ] of [ " + _totaltodelete + " ]";
var _int_item_remaining = _totaltodelete - _pos;
var _item_remaining = "remaining...<br/>[ " + _int_item_remaining + " ]";
var _timelapsed = getdeletetimelapsed();

updateprogresscontrols(_percentage, _item_remaining, _timelapsed, _pos, _totaltodelete);

showeventsnotifierdiv("deleted [ " + _pos + " ] of [ " + _totaltodelete + " ]", "info");

showeventsnotifierdiv("deleted [ " + deletekey + " ]. server response: [ " + e.type + " ].", "info");

var _intpos = parseInt(_pos);
var _inttotaltodelete = parseInt(_totaltodelete);

if(_intpos >= _inttotaltodelete){
setTimeout(function(){
deletecancelcallback();
refreshtable();
}, 5000);

}

}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
syseventslogger("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

}
catch(err)
{
var _msg = err.name + "<br/>" + err.message;
showeventsnotifierdiv(_msg, "error");
}
}

function searchrecordsbydb(){
try{

$("#divtablewrapper").html("retrieving recordz...");

$("#lblrecordzcounta").html("");

showprogressdiv();

showprogresstext("searching store...");

_logz_taken_records_array = [];

//perform the search
var entities = [];
var searchby = "";

var _searchstart = document.getElementById("txtnamesearchstart").value;
var _searchend = document.getElementById("txtnamesearchend").value;
var _searchby = document.getElementById("cbosearchby").value;

if(_searchstart == "" && _searchend == ""){
showeventsnotifierdiv("search start and search end cannot be null", "warning");
return;
}

switch(_searchby){
case "eventtype":
searchby = "eventtype";
break;
case "log":
searchby = "log";
break;
case "uniqeventid":
searchby = "uniqeventid";
break;
}

///If you would like to limit the range of values you see in a cursor, you can use an IDBKeyRange ///object and pass it as the first argument to openCursor() or openKeyCursor(). You can make a key ///range that only allows a single key, or one that has a lower or upper bound, or one that has both a ///lower and upper bound. The bound may be "closed" (i.e., the key range includes the given value(s)) ///or "open" (i.e., the key range does not include the given value(s)). Here's how it works:

// Only match "Donna"
var singleKeyRange = IDBKeyRange.only("Donna");

// Match anything past "Bill", including "Bill"
var lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// Match anything past "Bill", but don't include "Bill"
var lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// Match anything up to, but not including, "Donna"
var upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

// Match anything between "Bill" and "Donna", but not including "Donna"
var boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

//Make the range depending on what type we are doing
var range;
if(_searchstart != "" && _searchend != ""){
range = IDBKeyRange.bound(_searchstart, _searchend, false, false);
}else if(_searchstart == ""){
range = IDBKeyRange.upperBound(_searchend, false);
}else if(_searchend == ""){
range = IDBKeyRange.lowerBound(_searchstart, false);
}

var transaction = db.transaction(["mathithio"], "readonly");

var store = transaction.objectStore("mathithio").index(searchby);

var _cursor = store.openCursor(range);

_cursor.onsuccess = function(e) {
var cursor = e.target.result;
if (cursor) {
entities.push(cursor.value);
cursor.continue();
}
};

setTimeout(function(){

var records = entities;

setstorages("search logz recordz count", records.length);
syseventslogger("start building table logz...", "warning");
syseventslogger("[ " + records.length + " ] records found", "info");

$("#lblrecordzcounta").html(records.length + " records");

if(records.length === 0){
$("#divtablewrapper").html("no recordz in store...");
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

_logz_records_count = records.length;
_logz_records_array = records;

if(_current_page === 0){
$("#txtcurrentmathithiopage").val(_current_page + 1);
}else{
$("#txtcurrentmathithiopage").val(_current_page);
}

paginatelogztable();

if(_logz_taken_records_array.length > 0){

var _currentpagearray = _logz_taken_records_array[_current_page];

if(_currentpagearray == undefined){
var _total_pages = _logz_taken_records_array.length;
_current_page = _total_pages - 1;
_currentpagearray = _logz_taken_records_array[_current_page];
}

var _current_array = _currentpagearray[0];

createtablegivenlist(_logz_taken_records_array[_current_page][0]);

}

}, 5000);
 
}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function searchrecordsbyjs(){
try{

cleardiveventnotifier();

showprogressdiv();

showprogresstext("searching store...");

$("#divtablewrapper").html("retrieving recordz...");

$("#lblrecordzcounta").html("");

_logz_taken_records_array = [];

var entities = [];
var searchby = "";
var searchmode = "";
var _errmsg = "";
var _validatearr = [];
var _issearchtermsdefined = true;
var _matchcase = false;

var _searchby = document.getElementById("cbosearchby").value;
var _searchmode = document.getElementById("cbosearchmode").value;
var _searchstart = document.getElementById("txtnamesearchstart").value;
var _searchend = document.getElementById("txtnamesearchend").value;
var _searchcontains = document.getElementById("txtnamesearchcontains").value;
var _chkmatchcase = document.getElementById("chkmatchcase");
_matchcase = _chkmatchcase.checked;

switch(_searchmode){
case "contains":
if(_searchcontains == ""){ 
_validatearr.push("search contains is not defined", "warning")
showeventsnotifierdiv("search contains is not defined", "warning");
_issearchtermsdefined = false;
}
break;
case "startswith":
if(_searchstart == ""){
_validatearr.push("search starts with is not defined", "warning")
showeventsnotifierdiv("search starts with is not defined", "warning");
_issearchtermsdefined = false;
}
break;
case "endswith":
if(_searchend == ""){
_validatearr.push("search ends with is not defined", "warning")
showeventsnotifierdiv("search ends with is not defined", "warning");
_issearchtermsdefined = false;
}
break;
}

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

if(records.length === 0){
$("#divtablewrapper").html("no recordz match criteria...");
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

var _searchjsarr = [];
_searchjsarr = highlighttextmatchingsearchphrase(_searchcontains, _searchstart, _searchend, _searchby, _searchmode, _matchcase, records);

if(_issearchtermsdefined){
_logz_records_count = _searchjsarr.length;
_logz_records_array = _searchjsarr;
}else{
_logz_records_count = records.length;
_logz_records_array = records;
}

setstorages("search logz recordz count", _logz_records_array.length);
syseventslogger("start building table logz...", "warning");
syseventslogger("[ " + _logz_records_array.length + " ] records found", "info");
$("#lblrecordzcounta").html(_logz_records_array.length + " records");

if(_current_page === 0){
$("#txtcurrentmathithiopage").val(_current_page + 1);
}else{
$("#txtcurrentmathithiopage").val(_current_page);
}

var _combo_ = document.getElementById("cbopagesize");
var _selectedIndex = _combo_.selectedIndex;
var selected_value = _combo_.options[(_selectedIndex)].value;
var _combo_page_size = parseInt(selected_value);

if(!parseInt(selected_value)){

createtablegivenlist(_logz_records_array);

}else{

paginatelogztable();

if(_logz_taken_records_array.length > 0){

var _currentpagearray = _logz_taken_records_array[_current_page];

if(_currentpagearray == undefined){
var _total_pages = _logz_taken_records_array.length;
_current_page = _total_pages - 1;
_currentpagearray = _logz_taken_records_array[_current_page];
}

var _current_array = _currentpagearray[0];

createtablegivenlist(_logz_taken_records_array[_current_page][0]);

}

}

}, 5000);
 
}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function highlighttextmatchingsearchphrase(_search_contains, _search_start, _search_end, _searchby, _searchmode, _matchcase, records){
try{
 
var _recordsarr = records;
var _searchjsarr = [];
var _searchcontains = _search_contains;
var _searchstart = _search_start;
var _searchend = _search_end;
var _searchstr = "";

for(var i = 0; i < _recordsarr.length; i++){

var _recordobj = _recordsarr[i];

switch(_searchby){
case "log":

_searchstr = _recordobj.log;

switch(_searchmode){
case "contains":
try
{
var _responseobj = formatlogsearchresult(_searchstr, _searchcontains, _matchcase);
if(_responseobj === null || _responseobj === undefined){
continue;
}
var _responsedata = _responseobj.responsedata;
var _isrecordmatchsearch = _responseobj.isrecordmatchsearch;
if(!_isrecordmatchsearch){
continue;
}
var _entityobj = _recordobj;
_entityobj.log = _responsedata;
_searchjsarr.push(_entityobj);
}
catch(err){
console.error(err.message);
continue;
}
break;
case "startswith":
try
{
if(_matchcase){
_searchstart = _searchstart.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.log = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.log = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "endswith":
try
{
if(_matchcase){
_searchend = _searchend.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.log = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.log = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
}
break;
case "eventtype":

_searchstr = _recordobj.eventtype;

switch(_searchmode){
case "contains":
try
{
if(_matchcase){
_searchcontains = _searchcontains.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formateventtypesearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.eventtype = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formateventtypesearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.eventtype = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "startswith":
try
{
if(_matchcase){
_searchstart = _searchstart.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.eventtype = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.eventtype = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "endswith":
try
{
if(_matchcase){
_searchend = _searchend.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.eventtype = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.eventtype = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
}
break;
case "uniqeventid":

_searchstr = _recordobj.uniqeventid;

switch(_searchmode){
case "contains":
try
{
if(_matchcase){
_searchcontains = _searchcontains.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formatuniqeventidsearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.uniqeventid = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formatuniqeventidsearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.uniqeventid = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "startswith":
try
{
if(_matchcase){
_searchstart = _searchstart.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.uniqeventid = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.uniqeventid = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "endswith":
try
{
if(_matchcase){
_searchend = _searchend.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.uniqeventid = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.uniqeventid = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
}
break;
case "loggedinuser":

_searchstr = _recordobj.loggedinuser;

switch(_searchmode){
case "contains":
try
{
if(_matchcase){
_searchcontains = _searchcontains.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formatloggedinusersearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.loggedinuser = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formatloggedinusersearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.loggedinuser = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "startswith":
try
{
if(_matchcase){
_searchstart = _searchstart.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.loggedinuser = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.loggedinuser = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "endswith":
try
{
if(_matchcase){
_searchend = _searchend.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.loggedinuser = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.loggedinuser = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
}
break;
case "createddate":

_searchstr = _recordobj.loggedinuser;

switch(_searchmode){
case "contains":
try
{
if(_matchcase){
_searchcontains = _searchcontains.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formatcreateddatesearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.createddate = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.contains(_searchcontains)){
var _rebuildedstr = formatcreateddatesearchresult(_searchstr, _searchcontains);
var _entityobj = _recordobj;
_entityobj.createddate = _rebuildedstr;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "startswith":
try
{
if(_matchcase){
_searchstart = _searchstart.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.createddate = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.startsWith(_searchstart)){
var _searchtext = _searchstr;
var _texttoreplace = _searchstart;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.createddate = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
case "endswith":
try
{
if(_matchcase){
_searchend = _searchend.toLowerCase();
_searchstr = _searchstr.toLowerCase();
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.createddate = _replacedtext;
_searchjsarr.push(_entityobj);
}
}else{
if(_searchstr.endsWith(_searchend)){
var _searchtext = _searchstr;
var _texttoreplace = _searchend;
var _texttoreplacewith = '<span class="lblsearchlog">' + _texttoreplace + '</span>';
var _replacedtext = _searchtext.replace(_texttoreplace, _texttoreplacewith);
var _entityobj = _recordobj;
_entityobj.createddate = _replacedtext;
_searchjsarr.push(_entityobj);
}
}
}
catch(err){
console.error(err.message);
continue;
}
break;
}
break;
}

}

return _searchjsarr;

}
catch(err)
{
logglobalerrors(err);
}
}

function formatlogsearchresult(_recordobjlog, _searchcontains, _matchcase){
try{

var _responseobj = new Object();

Object.defineProperty(_responseobj, "isrecordmatchsearch",
{
value: false,
configurable: true,
readable: true,
writable: true
});

Object.defineProperty(_responseobj, "responsedata",
{
value: "",
configurable: true,
readable: true,
writable: true
});

if(_searchcontains.length == 1){

if(!_matchcase){

var _nmcsearchrecordobj = _recordobjlog;
var _nmcsearchrecordarr = _nmcsearchrecordobj.split('class="imgnotifier"/>');
var _nmcsearchrecordstr = _nmcsearchrecordarr[1];
var _nmcrecordsearcharr = [];

try
{
_nmcrecordsearcharr = _nmcsearchrecordstr.split("</div>");
}
catch(err){
console.error(err.message);
return;
}

var _nmcrecordsearchstr = _nmcrecordsearcharr[0];

var _nmcsearchtext = _nmcrecordsearchstr;
var _nmcsearchtextobj = _nmcrecordsearchstr;
var _nmctexttoreplace = _searchcontains;
var _nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmctexttoreplace + '</span>';
var _nmcreplacedtext = "";

var _nmcconcatenatedstr = "";
var _nmcsearchtext = _nmcrecordsearchstr;
var _nmcsearchcontentarr = _nmcsearchtext.split("");
var _nmcsearchcontentlength = _nmcsearchcontentarr.length;
var _nmctexttoreplace = _searchcontains;
var _nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmctexttoreplace + '</span>';

for(var i = 0; i < _nmcsearchcontentlength; i++){

var _nmcindx = i;
var _nmcsearchstr = _nmcsearchcontentarr[i];

var _nmctexttoreplace = _searchcontains;
var _nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmctexttoreplace + '</span>';

if(_nmcsearchstr === _nmctexttoreplace){
_nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
_responseobj.isrecordmatchsearch = true;
}else if(_nmcsearchstr === _nmctexttoreplace.toLowerCase()){
_nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
_responseobj.isrecordmatchsearch = true;
}else if(_nmcsearchstr === _nmctexttoreplace.toUpperCase()){
_nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
_responseobj.isrecordmatchsearch = true;
}else{
_nmctexttoreplacewith = '<span class="lblsearchcontent">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
}
}

var _nmcrebuildedstr = _nmcsearchrecordarr[0];
_nmcrebuildedstr += 'class="imgnotifier"/>';
_nmcrebuildedstr += _nmcconcatenatedstr;
_nmcrebuildedstr += "</div>";

_responseobj.responsedata = _nmcrebuildedstr;

return _responseobj;

}else{

}
}else{

if(!_matchcase){

var _nmcsearchrecordobj = _recordobjlog;
var _nmcsearchrecordarr = _nmcsearchrecordobj.split('class="imgnotifier"/>');
var _nmcsearchrecordstr = _nmcsearchrecordarr[1];
var _nmcrecordsearcharr = [];

try
{
_nmcrecordsearcharr = _nmcsearchrecordstr.split("</div>");
}
catch(err){
console.error(err.message);
return;
}

var _nmcrecordsearchstr = _nmcrecordsearcharr[0];

var _nmcsearchtext = _nmcrecordsearchstr;
var _nmcsearchtextobj = _nmcrecordsearchstr;
var _nmctexttoreplace = _searchcontains;
var _nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmctexttoreplace + '</span>';
var _nmcreplacedtext = "";

var _nmcconcatenatedstr = "";
var _nmcsearchtext = _nmcrecordsearchstr;
var _nmcsearchcontentarr = _nmcsearchtext.split(" ");
var _nmcsearchcontentlength = _nmcsearchcontentarr.length;
var _nmctexttoreplace = _searchcontains;
var _nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmctexttoreplace + '</span>';

for(var i = 0; i < _nmcsearchcontentlength; i++){

var _nmcindx = i;
var _nmcsearchstr = _nmcsearchcontentarr[i];

var _nmctexttoreplace = _searchcontains;
var _nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmctexttoreplace + '</span>';

if(_nmcsearchstr === _nmctexttoreplace){
_nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
_nmcconcatenatedstr += " ";
_responseobj.isrecordmatchsearch = true;
}else if(_nmcsearchstr.toLowerCase() === _nmctexttoreplace.toLowerCase()){
_nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
_nmcconcatenatedstr += " ";
_responseobj.isrecordmatchsearch = true;
}else if(_nmcsearchstr.toUpperCase() === _nmctexttoreplace.toUpperCase()){
_nmctexttoreplacewith = '<span class="lbllogsearchphrase">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
_nmcconcatenatedstr += " ";
_responseobj.isrecordmatchsearch = true;
}else{
_nmctexttoreplacewith = '<span class="lblsearchcontent">' + _nmcsearchstr + '</span>';
_nmcconcatenatedstr += _nmctexttoreplacewith;
_nmcconcatenatedstr += " ";
}
}

var _nmcrebuildedstr = _nmcsearchrecordarr[0];
_nmcrebuildedstr += 'class="imgnotifier"/>';
_nmcrebuildedstr += _nmcconcatenatedstr;
_nmcrebuildedstr += "</div>";

_responseobj.responsedata = _nmcrebuildedstr;

return _responseobj;

}else{

}
}
}
catch(err)
{
logglobalerrors(err);
return "";
}
}

function formateventtypesearchresult(_recordobjlog, _searchcontains){
try{

var _recordsearchstr = _recordobjlog;
var _searchtext = _recordsearchstr;
var _searchtextobj = _recordsearchstr;
var _texttoreplace = _searchcontains;
var _texttoreplacewith = '<span class="lbleventtypesearchphrase">' + _texttoreplace + '</span>';
var _replacedtext = "";

try
{
_replacedtext = _searchtextobj.replace(_texttoreplace, _texttoreplacewith);
}
catch(err){
console.error(err.message);
return;
}

var _concatenatedstr = "";
var _position = 0;
var _isodd = false;

var _searchcontentarr = _searchtext.split(_searchcontains);
var _searchcontentlength = _searchcontentarr.length;
var _secondlastpos = _searchcontentlength - 1;
var _lastarrindex = _searchcontentlength;
if(_searchcontentlength > 2){
_lastarrindex = _searchcontentlength - 2;
}
if(_searchcontentlength == 2){
_lastarrindex = _searchcontentlength - 1;
}

var _divisor = _searchcontentlength/2;
if(_divisor.toString().contains(".")){
_isodd = true;
}

for(var i = 0; i < _searchcontentlength; i++){
var _indx = i;
if(!_isodd){

if(_searchcontentlength == 2){
var _searchstr = _searchcontentarr[i];
if(_position === _lastarrindex){
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
break;
}
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
}
_position++;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
_position++;
}
}

var _rebuildedstr = _concatenatedstr;
return _rebuildedstr;

}
catch(err)
{
logglobalerrors(err);
return "";
}
}

function formatuniqeventidsearchresult(_recordobjlog, _searchcontains){
try{

var _recordsearchstr = _recordobjlog;
var _searchtext = _recordsearchstr;
var _searchtextobj = _recordsearchstr;
var _texttoreplace = _searchcontains;
var _texttoreplacewith = '<span class="lbluniqeventidsearchphrase">' + _texttoreplace + '</span>';
var _replacedtext = "";

try
{
_replacedtext = _searchtextobj.replace(_texttoreplace, _texttoreplacewith);
}
catch(err){
console.error(err.message);
return;
}

var _concatenatedstr = "";
var _position = 0;
var _isodd = false;

var _searchcontentarr = _searchtext.split(_searchcontains);
var _searchcontentlength = _searchcontentarr.length;
var _secondlastpos = _searchcontentlength - 1;
var _lastarrindex = _searchcontentlength;
if(_searchcontentlength > 2){
_lastarrindex = _searchcontentlength - 2;
}
if(_searchcontentlength == 2){
_lastarrindex = _searchcontentlength - 1;
}

var _divisor = _searchcontentlength/2;
if(_divisor.toString().contains(".")){
_isodd = true;
}

for(var i = 0; i < _searchcontentlength; i++){
var _indx = i;
if(!_isodd){

if(_searchcontentlength == 2){
var _searchstr = _searchcontentarr[i];
if(_position === _lastarrindex){
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
break;
}
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
}
_position++;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
_position++;
}
}

var _rebuildedstr = _concatenatedstr;
return _rebuildedstr;

}
catch(err)
{
logglobalerrors(err);
return "";
}
}

function formatloggedinusersearchresult(_recordobjlog, _searchcontains){
try{

var _recordsearchstr = _recordobjlog;
var _searchtext = _recordsearchstr;
var _searchtextobj = _recordsearchstr;
var _texttoreplace = _searchcontains;
var _texttoreplacewith = '<span class="lblloggedinusersearchphrase">' + _texttoreplace + '</span>';
var _replacedtext = "";

try
{
_replacedtext = _searchtextobj.replace(_texttoreplace, _texttoreplacewith);
}
catch(err){
console.error(err.message);
return;
}

var _concatenatedstr = "";
var _position = 0;
var _isodd = false;

var _searchcontentarr = _searchtext.split(_searchcontains);
var _searchcontentlength = _searchcontentarr.length;
var _secondlastpos = _searchcontentlength - 1;
var _lastarrindex = _searchcontentlength;
if(_searchcontentlength > 2){
_lastarrindex = _searchcontentlength - 2;
}
if(_searchcontentlength == 2){
_lastarrindex = _searchcontentlength - 1;
}

var _divisor = _searchcontentlength/2;
if(_divisor.toString().contains(".")){
_isodd = true;
}

for(var i = 0; i < _searchcontentlength; i++){
var _indx = i;
if(!_isodd){

if(_searchcontentlength == 2){
var _searchstr = _searchcontentarr[i];
if(_position === _lastarrindex){
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
break;
}
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
}
_position++;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
_position++;
}
}

var _rebuildedstr = _concatenatedstr;
return _rebuildedstr;

}
catch(err)
{
logglobalerrors(err);
return "";
}
}

function formatcreateddatesearchresult(_recordobjlog, _searchcontains){
try{

var _recordsearchstr = _recordobjlog;
var _searchtext = _recordsearchstr;
var _searchtextobj = _recordsearchstr;
var _texttoreplace = _searchcontains;
var _texttoreplacewith = '<span class="lblcreateddatesearchphrase">' + _texttoreplace + '</span>';
var _replacedtext = "";

try
{
_replacedtext = _searchtextobj.replace(_texttoreplace, _texttoreplacewith);
}
catch(err){
console.error(err.message);
return;
}

var _concatenatedstr = "";
var _position = 0;
var _isodd = false;

var _searchcontentarr = _searchtext.split(_searchcontains);
var _searchcontentlength = _searchcontentarr.length;
var _secondlastpos = _searchcontentlength - 1;
var _lastarrindex = _searchcontentlength;
if(_searchcontentlength > 2){
_lastarrindex = _searchcontentlength - 2;
}
if(_searchcontentlength == 2){
_lastarrindex = _searchcontentlength - 1;
}

var _divisor = _searchcontentlength/2;
if(_divisor.toString().contains(".")){
_isodd = true;
}

for(var i = 0; i < _searchcontentlength; i++){
var _indx = i;
if(!_isodd){

if(_searchcontentlength == 2){
var _searchstr = _searchcontentarr[i];
if(_position === _lastarrindex){
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
break;
}
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
}
_position++;
}else{
var _searchstr = _searchcontentarr[i];
_concatenatedstr += '<span class="lblsearchcontent">' + _searchstr + '</span>';
_concatenatedstr += _texttoreplacewith;

if(_position === _lastarrindex){
var _closingstrpos = _secondlastpos;
var _closingarrobj = _searchcontentarr[_closingstrpos];
_concatenatedstr += '<span class="lblsearchcontent">' + _closingarrobj + '</span>';
break;
}
_position++;
}
}

var _rebuildedstr = _concatenatedstr;
return _rebuildedstr;

}
catch(err)
{
logglobalerrors(err);
return "";
}
}

function addstylesheet()
{
var head = document.head;
var customstyleelement = document.createElement("link");
customstyleelement.type = "text/css";
customstyleelement.rel = "stylesheet";
customstyleelement.href = "css/mathithio.css";
customstyleelement.media = "all";
head.appendChild(customstyleelement);
}

function addscript()
{
var head = document.head;
var customscriptelement = document.createElement("script");
customscriptelement.type = "text/javascript";
customscriptelement.src = "js/mathithio.js";
customscriptelement.language = "javascript";
head.appendChild(customscriptelement);
}

function loadsearchobjects(){
try{

$("#imgsearch").on("click", function(){

if($("#divsearchcontrolz").hasClass("toggled")){

$("#divsearchcontrolz").removeClass("toggled");
$("#divsearchcontrolz").css({

'position': 'relative',
'display': 'none',
'width': '100%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'box-shadow': 'inset -1px 0 0 #E0ECE6',
'left': '-9999px',
'transition-property': 'left, display',
'transition-duration': '9000ms',
'transition-timing-function': 'ease-out'
});

var _imgsearch = document.getElementById("imgsearch");
_imgsearch.src = "images/search.png";
_imgsearch.title = "show search";

}
else{

$("#divsearchcontrolz").addClass("toggled");
$("#divsearchcontrolz").css({

'position': 'relative',
'display': 'block',
'width': '100%',
'overflow': 'auto',
'background-color': '#E0ECE6',
'box-shadow': 'inset -1px 0 0 #E0ECE6',
'left': '0px',
'transition-property': 'left, display',
'transition-duration': '1000ms',
'transition-timing-function': 'ease-in'
});

var _imgsearch = document.getElementById("imgsearch");
_imgsearch.src = "images/search.jpg";
_imgsearch.title = "hide search";

}


});

}
catch(err)
{
logglobalerrors(err);
}
}

function tooglesearchmode(){
try{

var _searchmode = document.getElementById("cbosearchmode").value;
var _divsearchstart = document.getElementById("divsearchstart");
var _divsearchend = document.getElementById("divsearchend");
var _divsearchcontains = document.getElementById("divsearchcontains");

switch(_searchmode){
case "contains":
_divsearchcontains.style.display = "block";
_divsearchstart.style.display = "none";
_divsearchend.style.display = "none";
break;
case "startswith":
_divsearchcontains.style.display = "none";
_divsearchstart.style.display = "block";
_divsearchend.style.display = "none";
break;
case "endswith":
_divsearchcontains.style.display = "none";
_divsearchstart.style.display = "none";
_divsearchend.style.display = "block";
break;
}

}
catch(err)
{
logglobalerrors(err);
}
}

function clearfilter(){
try{

$("#divtablewrapper").html("retrieving recordz...");

$("#lblrecordzcounta").html("");

showprogressdiv();

showprogresstext("building table...");

_logz_taken_records_array = [];

//perform the search
var entities = [];

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

setstorages("logz recordz count", parseInt(records.length));

SetPersistentCookie("logz recordz count", parseInt(records.length));

syseventslogger("start building table logz...", "warning");

syseventslogger("[ " + records.length + " ] records found", "info");

$("#lblrecordzcounta").html(records.length + " records");

if(records.length === 0){
$("#divtablewrapper").html("no recordz in store...");
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

_logz_records_count = records.length;
_logz_records_array = records;

if(_current_page === 0){
$("#txtcurrentmathithiopage").val(_current_page + 1);
}else{
$("#txtcurrentmathithiopage").val(_current_page);
}

paginatelogztable();

if(_logz_taken_records_array.length > 0){

var _currentpagearray = _logz_taken_records_array[_current_page];

if(_currentpagearray == undefined){
var _total_pages = _logz_taken_records_array.length;
_current_page = _total_pages - 1;
_currentpagearray = _logz_taken_records_array[_current_page];
}

var _current_array = _currentpagearray[0];
createtablegivenlist(_logz_taken_records_array[_current_page][0]);

}

}, 5000);

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}


