
function ongeramumemba(){
showprogressdiv();
var _btn = document.getElementById("btnregister");
try{

_btn.text = "validating...";

cleardiveventnotifier(); 

console.info("executing register event handler...");
syseventslogger("executing register event handler...", "warning");

var isvalidationsuccessfull = true;

var ritwa = document.getElementById("txtritwa").value;
var email = document.getElementById("txtemail").value;
var password = document.getElementById("txtpassword").value;
var thimu = document.getElementById("txtthimu").value;
var kibandi = document.getElementById("txtkibandi").value;
var uraja = document.getElementById("txturaja").value;
var kilo = document.getElementById("txtkilo").value;
var rangiyamwili = document.getElementById("txtrangiyamwili").value;
var kuchiarwa = document.getElementById("txtntukuyakuchiarwa").value;
var guntukwakuchiarwa = document.getElementById("txtguntukwakuchiarwa").value;
var muumbire = document.getElementById("cbomuumbire").value;

console.warn("validating user input...");
syseventslogger("validating user input...", "warning");

if(ritwa == ""){
errorcount++;
showeventsnotifierdiv("ritwa cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(email == ""){
errorcount++;
showeventsnotifierdiv("email cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(password == ""){
errorcount++;
showeventsnotifierdiv("passsword cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(thimu == ""){
errorcount++;
showeventsnotifierdiv("thimu cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(kibandi == ""){
errorcount++;
showeventsnotifierdiv("kibandi cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(uraja == ""){
errorcount++;
showeventsnotifierdiv("uraja cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(kilo == ""){
errorcount++;
showeventsnotifierdiv("kilo cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(rangiyamwili == ""){
errorcount++;
showeventsnotifierdiv("rangi ya mwili cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(kuchiarwa == ""){
errorcount++;
showeventsnotifierdiv("ntuku ya kuchiarwa cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(guntukwakuchiarwa == ""){
errorcount++;
showeventsnotifierdiv("guntu kwa kuchiarwa cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(muumbire == ""){
errorcount++;
showeventsnotifierdiv("muumbire cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(isvalidationsuccessfull == false){ 
console.info("isvalidationsuccessfull [ " + isvalidationsuccessfull + " ]");
console.error("user input validation failed.");
syseventslogger("user input validation failed.", "warning");
hideprogressdiv();
_btn.text = "andikithia memba";
return;
}

if(ritwa == "" || email == "" || password == "" || thimu == "" || kibandi == "" || uraja == "" || kilo == "" || rangiyamwili == "" || kuchiarwa == "" || guntukwakuchiarwa == "" || muumbire == ""){
_btn.text = "andikithia memba";
hideprogressdiv();
return;
}

console.info("user input validation succeeded.");
syseventslogger("user input validation succeeded.", "info");

_btn.text = "processing...";

var _createddate = getcurrentdatetime();
var _encryptedhash = encryptograpy(password);

//define a mumemba
var mumemba = {
uniqeventid: getunikid(),
ritwa: ritwa,
email: email,
password: password,
encryptedhash: _encryptedhash,
thimu: thimu,
kibandi: kibandi,
uraja: uraja,
kilo: kilo,
rangiyamwili: rangiyamwili,
kuchiarwa: kuchiarwa,
guntukwakuchiarwa: guntukwakuchiarwa,
muumbire: muumbire,
browser: _global_browser_name,
createddate: _createddate,
createdby: getloggedinuser()
}

console.warn("about to add ritwa [ "+ ritwa + " ] email [ " + email + " ] thimu [ " + thimu + " ] kibandi [ " + kibandi + " ] uraja [ " + uraja + " ] kilo [ " + kilo + " ] kuchiarwa [ " + kuchiarwa + " ] muumbire [ " + muumbire + " ] created date [ " + _createddate + " ].");

showeventsnotifierdiv("about to add ritwa [ "+ ritwa + " ] email [ " + email + " ] thimu [ " + thimu + " ] kibandi [ " + kibandi + " ] uraja [ " + uraja + " ] kilo [ " + kilo + " ] kuchiarwa [ " + kuchiarwa + " ] muumbire [ " + muumbire + " ] created date [ " + _createddate + " ].", "warning");

var transaction = db.transaction(["memba"], "readwrite");

var store = transaction.objectStore("memba");

//perform the add
var request = store.add(mumemba);

request.onsuccess = function(e){

console.info("server response: [ "+ e.type + " ].");

showeventsnotifierdiv("server response: [ "+ e.type + " ].", "info");

console.info("new record persisted: ritwa [ "+ ritwa + " ] email [ " + email + " ] thimu [ " + thimu + " ] kibandi [ " + kibandi + " ] uraja [ " + uraja + " ] kilo [ " + kilo + " ] kuchiarwa [ " + kuchiarwa + " ] muumbire [ " + muumbire + " ] created date [ " + _createddate + " ].");

showeventsnotifierdiv("new record persisted: ritwa [ "+ ritwa + " ] email [ " + email + " ] thimu [ " + thimu + " ] kibandi [ " + kibandi + " ] uraja [ " + uraja + " ] kilo [ " + kilo + " ] kuchiarwa [ " + kuchiarwa + " ] muumbire [ " + muumbire + " ] created date [ " + _createddate + " ].", "info");

logtodb("new record persisted: ritwa [ "+ ritwa + " ] email [ " + email + " ] thimu [ " + thimu + " ] kibandi [ " + kibandi + " ] uraja [ " + uraja + " ] kilo [ " + kilo + " ] kuchiarwa [ " + kuchiarwa + " ] muumbire [ " + muumbire + " ] created date [ " + _createddate + " ].", "info");

_btn.text = "andikithia memba";
hideprogressdiv();
}

request.onerror = function(e){
//do something for the error
console.error("event code [ " + e.target.error.code + " ] event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
appendapplogz("event code [ " + e.target.error.code + " ] event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
hideprogressdiv();
_btn.text = "andikithia memba";
}

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
_btn.text = "andikithia memba";
}
}

function createtable(){

//perform the retrieve 
var entities = [];

var _btn = document.getElementById("btnrefresh");

try{

if(db == null || db == undefined){
hideprogressdiv();
return;
}

if(_executingpage === "amemba.html"){

$("#divtablewrapper").html("");

showprogressdiv();

_logz_taken_records_array = [];

_btn.style.visibility = "visible";

var transaction = db.transaction(["memba"], "readonly");

var store = transaction.objectStore("memba");

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

console.info("records [ " + records + " ]");
console.info("records.length [ " + records.length + " ]");

setstorages("logz recordz count", records.length);

syseventslogger("start building table logz...", "warning");

syseventslogger("[ " + records.length + " ] records found", "info");

$("#lblrecordzcounta").html(records.length + " records");

for(var i = 0; i < records.length; i++){

var _recordobj = records[i];

Object.defineProperty(_recordobj, "id",
{
value: i,
configurable: true,
readable: true,
writable: true
});

var _a = Object.getOwnPropertyNames(_recordobj);
var _c = new Array(_a.length);

for(var _d in _a){
_c[_d] = _recordobj[_a[_d]];
console.info(_a[_d] + ": [ " + _c[_d] + " ]");
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
console.info("_currentpagearray  [ " + _currentpagearray  + " ]");

if(_currentpagearray == undefined){
var _total_pages = _logz_taken_records_array.length;
_current_page = _total_pages - 1;
_currentpagearray = _logz_taken_records_array[_current_page];
console.info("_currentpagearray  [ " + _currentpagearray  + " ]");
}

var _current_array = _currentpagearray[0];
console.info("_current_array  [ " + _current_array + " ]");

createlogtablegivenlist(_logz_taken_records_array[_current_page][0]);
}

syseventslogger("finished building table logz.", "info");

_btn.style.visibility = "visible";

}, 5000);

}

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
_btn.style.visibility = "visible";
hideprogressdiv();
}
}

function paginatelogztable(){
try{

var _combo_ = document.getElementById("cbopagesize");
console.info("_combo_ [ " + _combo_ + " ]");
var _selectedIndex = _combo_.selectedIndex;
console.info("_selectedIndex [ " + _selectedIndex + " ]");
var selected_value = _combo_.options[(_selectedIndex)].value;
var _combo_page_size = parseInt(selected_value);
console.info("_combo_page_size [ " + _combo_page_size + " ]");

_local_logz_records_count = _logz_records_count;
_local_logz_records_array = _logz_records_array;

console.info("_local_logz_records_count [ " + _local_logz_records_count + " ]");
console.info("_local_logz_records_array [ " + _local_logz_records_array + " ]");

var _ncombo_page_size = parseInt(_combo_page_size);

var _chunks_of_recordz_to_take = _local_logz_records_count / _ncombo_page_size;
console.info("_chunks_of_recordz_to_take [ " + _chunks_of_recordz_to_take + " ]");

var _remaining_records_str = _chunks_of_recordz_to_take.toString();
var _splited_remaining_records_str = _remaining_records_str.split(".");
console.info("_splited_remaining_records_str [ " + _splited_remaining_records_str + " ]");
var _first_recordz_to_take = _splited_remaining_records_str[0];
console.info("_first_recordz_to_take [ " + _first_recordz_to_take + " ]");
_total_pages = _first_recordz_to_take;
_first_equal_chunkz = _first_recordz_to_take;
var _last_remaining_recordz = 0;
if(_splited_remaining_records_str.length > 1){
_total_pages = parseInt(_total_pages) + 1;
_last_remaining_recordz = _splited_remaining_records_str[1];
_last_remaining_chunkz = _last_remaining_recordz;
console.info("_last_remaining_recordz [ " + _last_remaining_recordz + " ]");
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
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function createlogtablegivenlist(records){
try{

var _ritwa;
var _email;
var _thimu; 
var _kibandi;
var _uraja;
var _kilo;
var _kuchiarwa;
var _createddate;
var _recordindex;
var _incrementa;
var _logtablestr = "";

_logtablestr += "<div id='divtablecontent'><ul id='listwrapper'>";

for(var i = 0; i < records.length; i++){

console.info("i [ " + i + " ]");

_logs = records[i];
console.info("_logs [ " + _logs + " ]");

_memba = records[i];
console.info("_memba [ " + _memba + " ]");

var _incrementa = parseInt(_logs["id"]);
_incrementa =  _incrementa + 1;
console.info("_incrementa [ " + _incrementa + " ]");

_uniqeventid = _logs["uniqeventid"];
console.info("_recordindex [ " + _recordindex + " ]");
 
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

var _lstname = "listcontent" + i;
console.info("_lstname [ " + _lstname + " ]");
_logtablestr += '<li id="' + _lstname + '" class="listcontent">';
_logtablestr += '<div class="divlstlog">' + _incrementa + '</div>';
_logtablestr += "<div class='divlstlog'>ritwa : [ " + _ritwa + " ]</div>";
_logtablestr += "<div class='divlstlog'>email : [ " + _email + " ]</div>";
_logtablestr += "<div class='divlstlog'>namba ya thimu : [ " + _thimu + " ]</div>"; 
_logtablestr += "<div class='divlstlog'>namba ya kibandi : [ " + _kibandi + " ]</div>";
_logtablestr += "<div class='divlstlog'>kithimi uraja : [ " + _uraja + " ]</div>"; 
_logtablestr += "<div class='divlstlog'>kithimi kilo : [ " + _kilo + " ]</div>"; 
_logtablestr += "<div class='divlstlog'>ntuku ya kuchiarwa : [ " + _kuchiarwa + " ]</div>";
_logtablestr += "<div class='divlstlog'>created date : [ " + _createddate + " ]</div>";

_logtablestr += '<div class="divlstlog editlog"><a class="btneditlog" title="edit log"><img src="images/edit.gif" class="imgeditlog" title="edit log" editid="' + i + '"/></a></div>';

_logtablestr += '<div class="divlstlog deletelog"><a class="btndeletelog" title="delete log"><img src="images/messageboxerror.ico" class="imgdeletelog" title="delete log" deleteid="' + i + '" arrdeleteid="' + i + '"/></a></div>';

_logtablestr += "</li>";

}

_logtablestr += "</ul></div>";

$("#divtablewrapper").html(_logtablestr);

wiredeletelogclickeventlisteners();

setTimeout(function(){
setcssrulesfortableelements();
}, 1000);

hideprogressdiv();

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function setcssrulesfortableelements(){
try{

$(".editlog").css({


'float': 'right !important',
'top': '1px !important',
'position': 'relative !important',
'clear': 'both !important'

});

$(".deletelog").css({


'float': 'right !important',
'top': '1px !important',
'position': 'relative !important',
'clear': 'both !important'

});

$(".divlstlog:hover").css({


'border': 'solid 1px #FBE605',
'border-radius': '5px'

});

$(".loglst:hover").css({


'border': 'solid 1px #0AF026',
'border-radius': '5px'

});

}
catch(err)
{
logglobalerrors(err);
}
}

function wiredeletelogclickeventlisteners(){
try{

var _imgdeleteelements = document.getElementsByClassName("imgdeletelog");

$(_imgdeleteelements).each(function(){


var _deleteidprop = $(this).attr('deleteid');

console.info("_deleteidprop [ " + _deleteidprop + " ]");

if(_deleteidprop !== undefined){

$(this).on("click",function(){

var _lstidtodelete = $(this).attr('deleteid');

console.info("_lstidtodelete [ " + _lstidtodelete + " ]");

try
{

var _divlstlog = document.getElementById("listwrapper");
var _loglisttodelete = "listcontent" + _lstidtodelete;
_divlstlog.removeChild(document.getElementById(_loglisttodelete));
var _divdeleteelements = document.getElementsByClassName("listcontent");

}
catch(err)
{
logglobalerrors(err);
logtodb(err.stack, "error");
}

});

}

});


}
catch(err)
{
logglobalerrors(err);
}
}

function navigatetable(e){
try
{
showprogressdiv();

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

function refreshtable(){
try{

syseventslogger("refreshing table amemba...", "warning");

$("#divtablewrapper").html("refreshing recordz...");

createtable();

}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]"); 
}
}

function searchrecords(){
showprogressdiv();
try{

//perform the retrieve 
var entities = [];

var _searchstart = document.getElementById("txtnamesearchstart").value;
 
var _searchend = document.getElementById("txtnamesearchend").value;
 
if(_searchstart == "" && _searchend == ""){
showeventsnotifierdiv("search start and search end cannot be null", "warning");
return;
}

var transaction = db.transaction(["amemba"], "readonly");

var store = transaction.objectStore("amemba").index("eventtype");

///If you would like to limit the range of values you see in a cursor, you can use an IDBKeyRange ///object and pass it as the first argument to openCursor() or openKeyCursor(). You can make a key ///range that only allows a single key, or one that has a lower or upper bound, or one that has both a ///lower and upper bound. The bound may be "closed" (i.e., the key range includes the given value(s)) ///or "open" (i.e., the key range does not include the given value(s)). Here's how it works:


//Make the range depending on what type we are doing
var range;
if(_searchstart != "" && _searchend != "") {
range = IDBKeyRange.bound(_searchstart, _searchend, false, false);
} else if(_searchstart == "") {
range = IDBKeyRange.upperBound(_searchend, true);
} else {
range = IDBKeyRange.lowerBound(_searchstart, true);
}


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


console.info("range: <br/>lower [ " + range.lower + " ], lowerOpen [ " + range.lowerOpen  + " ], upper [ " + range.upper  + " ], upperOpen [ " + range.upperOpen + " ]");

var _cursor = store.openCursor(range);

_cursor.onsuccess = function(e) {

var cursor = e.target.result;

if (cursor) {

console.info("cursor: <br/>direction [ " + cursor.direction + " ], key [ " + cursor.key  + " ], primaryKey [ " + cursor.primaryKey  + " ]");

entities.push(cursor.value);

cursor.continue();

}

};

setTimeout(function(){

var records = entities;

console.info("records [ " + records + " ]");
console.info("records.length [ " + records.length + " ]");

setstorages("logz recordz count", records.length);

syseventslogger("start building table logz...", "warning");

syseventslogger("[ " + records.length + " ] records found", "info");

$("#lblrecordzcounta").html(records.length + " records");

for(var i = 0; i < records.length; i++){

var _recordobj = records[i];

Object.defineProperty(_recordobj, "id",
{
value: i,
configurable: true,
readable: true,
writable: true
});

var _a = Object.getOwnPropertyNames(_recordobj);
var _c = new Array(_a.length);

for(var _d in _a){
_c[_d] = _recordobj[_a[_d]];
console.info(_a[_d] + ": [ " + _c[_d] + " ]");
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
console.info("_currentpagearray  [ " + _currentpagearray  + " ]");

if(_currentpagearray == undefined){
var _total_pages = _logz_taken_records_array.length;
_current_page = _total_pages - 1;
_currentpagearray = _logz_taken_records_array[_current_page];
console.info("_currentpagearray  [ " + _currentpagearray  + " ]");
}

var _current_array = _currentpagearray[0];
console.info("_current_array  [ " + _current_array + " ]");

createlogtablegivenlist(_logz_taken_records_array[_current_page][0]);
}

syseventslogger("finished building table logz.", "info");

_btn.style.visibility = "visible";

//hideprogressdiv();
//return records;
}, 5000);
 
}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}


