
var db;
var d;
var openrequest;
var _logz_records_count = 0;
var _current_page = 0;
var _global_current_page = 0;
var _logz_records_array = [];
var _logz_taken_records_array = [];
var _logz_taken_records_array_counta = [];
var _first_equal_chunkz = 0;
var _last_remaining_chunkz = 0;
var _total_pages = 0;
var _isindexeddb = false;
var upgraderunning = 0;

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

//IndexedDB storage constants.
const DATABASE_NAME = "nyax";
const DATABASE_VERSION = new Date().getFullYear();
const DATABASE_STORAGE = "persistent";
const mathithio_OBJECTSTORE_NAME = "mathithio";
const mathingatirio_OBJECTSTORE_NAME = "mathingatirio";
const memba_OBJECTSTORE_NAME = "memba";
const michemanio_OBJECTSTORE_NAME = "michemanio";
const michango_OBJECTSTORE_NAME = "michango";
const mibangire_OBJECTSTORE_NAME = "mibangire";

function isconnected(){
var isindexeddb =  "indexedDB" in window;
return isindexeddb;
}

document.addEventListener("DOMContentLoaded", function(){
try{

appendapplogz("checking if indexedDB exists in browser...", "info");

_isindexeddb = isconnected();

if(!_isindexeddb){ 
appendapplogz("indexedDB does not exist in browser.", "warning");
return;
}else{
appendapplogz("indexedDB exists in browser.", "info");
}

d = new Date();

var _datetimestring = ("0" + d.getDate()).slice(-2) + ("0" + (d.getMonth() + 1)).slice(-2) + d.getFullYear() + ("0" + d.getHours()).slice(-2) + ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2) + ("0" + d.getMilliseconds()).slice(-2);

var _year = d.getFullYear();
//var _db_version = ("0" + d.getDate()).slice(-2) + ("0" + (d.getMonth() + 1)).slice(-2) + //d.getFullYear() + ("0" + d.getHours()).slice(-2);
var _db_version = _year;

//open db with autoincrementing version.
//openrequest = window.indexedDB.open("nyax", _year);
openrequest = window.indexedDB.open("nyax" + _db_version, _db_version);
//openrequest = window.indexedDB.open("nyax" + _datetimestring, _datetimestring);

openrequest.onupgradeneeded = function(e){

showeventsnotifierdiv("running onupgradeneeded", "info");

db = e.target.result;

appendapplogz("checking if tables exists in db...", "info");

if(!db.objectStoreNames.contains("mathithio")){
appendapplogz("table [mathithio] missing from db.", "warning");
///This object store can only hold JavaScript objects. Usually a key is generated and the value of ///the generated key is stored in the object in a property with the same name as the key path. ///However, if such a property already exists, the value of that property is used as key rather than ///generating a new key.
appendapplogz("creating table [mathithio]...", "info");
var objectStore = db.createObjectStore("mathithio", { autoIncrement : true, keyPath: "autoid" });
objectStore.createIndex("autoid", "autoid", { unique: true });
///Create an index to search records by uniqeventid. We want to ensure that
///no two records have the same uniqeventid, so use a unique index.
objectStore.createIndex("uniqeventid", "uniqeventid", { unique: true, multiEntry: true });
///Create an index to search records by log. We may have duplicates so we can't use a unique index.
objectStore.createIndex("log", "log", { unique: false, multiEntry: true });
///Create an index to search records by eventtype. We may have duplicates so we can't use a unique index.
objectStore.createIndex("eventtype", "eventtype", { unique: false, multiEntry: true });
appendapplogz("created table [mathithio].", "info");
}else{
appendapplogz("tables [mathithio] exist.", "info");
}

if(!db.objectStoreNames.contains("mathingatirio")){
appendapplogz("table [mathingatirio] missing from db.", "warning");
///This object store can only hold JavaScript objects. Usually a key is generated and the value of ///the generated key is stored in the object in a property with the same name as the key path. ///However, if such a property already exists, the value of that property is used as key rather than ///generating a new key.
appendapplogz("creating table [mathingatirio]...", "info");
var objectStore = db.createObjectStore("mathingatirio", { autoIncrement : true, keyPath: "autoid" });
objectStore.createIndex("autoid", "autoid", { unique: true });
///Create an index to search records by uniqeventid. We want to ensure that
///no two records have the same uniqeventid, so use a unique index.
objectStore.createIndex("uniqeventid", "uniqeventid", { unique: true });
appendapplogz("created table [mathingatirio].", "info");
}else{
appendapplogz("tables [mathingatirio] exist.", "info");
}

if(!db.objectStoreNames.contains("memba")){
appendapplogz("table [memba] missing from db.", "warning");
///This object store can only hold JavaScript objects. Usually a key is generated and the value of ///the generated key is stored in the object in a property with the same name as the key path. ///However, if such a property already exists, the value of that property is used as key rather than ///generating a new key.
appendapplogz("creating table [memba]...", "info");
var objectStore = db.createObjectStore("memba", { autoIncrement : true, keyPath: "autoid" });
objectStore.createIndex("autoid", "autoid", { unique: true });
///Create an index to search records by uniqeventid. We want to ensure that
///no two records have the same uniqeventid, so use a unique index.
objectStore.createIndex("uniqeventid", "uniqeventid", { unique: true });
appendapplogz("created table [memba].", "info");
}else{
appendapplogz("tables [memba] exist.", "info");
}

if(!db.objectStoreNames.contains("michemanio")){
appendapplogz("table [michemanio] missing from db.", "warning");
///This object store can only hold JavaScript objects. Usually a key is generated and the value of ///the generated key is stored in the object in a property with the same name as the key path. ///However, if such a property already exists, the value of that property is used as key rather than ///generating a new key.
appendapplogz("creating table [michemanio]...", "info");
var objectStore = db.createObjectStore("michemanio", { autoIncrement : true, keyPath: "autoid" });
objectStore.createIndex("autoid", "autoid", { unique: true });
///Create an index to search records by uniqeventid. We want to ensure that
///no two records have the same uniqeventid, so use a unique index.
objectStore.createIndex("uniqeventid", "uniqeventid", { unique: true });
appendapplogz("created table [michemanio].", "info");
}else{
appendapplogz("tables [michemanio] exist.", "info");
}

if(!db.objectStoreNames.contains("michango")){
appendapplogz("table [michango] missing from db.", "warning");
///This object store can only hold JavaScript objects. Usually a key is generated and the value of ///the generated key is stored in the object in a property with the same name as the key path. ///However, if such a property already exists, the value of that property is used as key rather than ///generating a new key.
appendapplogz("creating table [michango]...", "info");
var objectStore = db.createObjectStore("michango", { autoIncrement : true, keyPath: "autoid" });
objectStore.createIndex("autoid", "autoid", { unique: true });
///Create an index to search records by uniqeventid. We want to ensure that
///no two records have the same uniqeventid, so use a unique index.
objectStore.createIndex("uniqeventid", "uniqeventid", { unique: true });
appendapplogz("created table [michango].", "info");
}else{
appendapplogz("tables [michango] exist.", "info");
}

if(!db.objectStoreNames.contains("mibangire")){
appendapplogz("table [mibangire] missing from db.", "warning");
///This object store can only hold JavaScript objects. Usually a key is generated and the value of ///the generated key is stored in the object in a property with the same name as the key path. ///However, if such a property already exists, the value of that property is used as key rather than ///generating a new key.
appendapplogz("creating table [mibangire]...", "info");
var objectStore = db.createObjectStore("mibangire", { autoIncrement : true, keyPath: "autoid" });
objectStore.createIndex("autoid", "autoid", { unique: true });
///Create an index to search records by uniqeventid. We want to ensure that
///no two records have the same uniqeventid, so use a unique index.
objectStore.createIndex("uniqeventid", "uniqeventid", { unique: true });
objectStore.createIndex("settingkey", "settingkey", { unique: true });
appendapplogz("created table [mibangire].", "info");
}else{
appendapplogz("tables [mibangire] exist.", "info");
}

upgraderunning = 1;

if(upgraderunning == 1){
//window.location.reload();
}

};

openrequest.onsuccess = function(e){

db = e.target.result;

var _strtables = "";
var tablestr = "tables in database [ " + db.objectStoreNames.length + " ]";
for(var i = 0; i < db.objectStoreNames.length; i++){
tablestr += " [ " + db.objectStoreNames[i] + " ]: ";

var currpos = i + 1;
var tblcount = db.objectStoreNames.length;
if(currpos === tblcount){
_strtables +=  db.objectStoreNames[i];
}else{
_strtables +=  db.objectStoreNames[i] + ":";
}

}

appendapplogz(tablestr, "info");
appendapplogz("connection to database successfull.", "info");

setstorages("tables count", parseInt(db.objectStoreNames.length));
setstorages("tables", _strtables);

SetPersistentCookie("tables count", parseInt(db.objectStoreNames.length));
SetPersistentCookie("tables", _strtables);

db.onerror = function(e) {
///Generic error handler for all errors targeted at this database's requests!
///error events bubble. Error events are targeted at the request that generated the error, then the ///event bubbles to the transaction, and then finally to the database object. If you want to avoid ///adding error handlers to every request, you can instead add a single error handler on the database ///object

appendapplogz("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
};

db.onversionchange = function(e) {
///Generic error handler for all errors targeted at this database's requests!
///error events bubble. Error events are targeted at the request that generated the error, then the ///event bubbles to the transaction, and then finally to the database object. If you want to avoid ///adding error handlers to every request, you can instead add a single error handler on the database ///object

appendapplogz("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
};

db.onabort = function(e) {
///Generic error handler for all errors targeted at this database's requests!
///error events bubble. Error events are targeted at the request that generated the error, then the ///event bubbles to the transaction, and then finally to the database object. If you want to avoid ///adding error handlers to every request, you can instead add a single error handler on the database ///object

appendapplogz("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
};

db.onclose = function(e) {
///Generic error handler for all errors targeted at this database's requests!
///error events bubble. Error events are targeted at the request that generated the error, then the ///event bubbles to the transaction, and then finally to the database object. If you want to avoid ///adding error handlers to every request, you can instead add a single error handler on the database ///object

appendapplogz("db [ " + e.type + " ] e.", "warning");
};

};

openrequest.onerror = function(e){
//do something for the error
appendapplogz("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

}catch(err){
logglobalerrors(err);
}
}, false);

function logtodb(log, eventtype){
try{

if(db == undefined || db == null){
return;
}

if(log == undefined || eventtype == undefined){
return;
}

var _loggedinuser = getloggedinuser();
if(_loggedinuser == undefined || _loggedinuser == null){
_loggedinuser = -1;
}

var _uniqeventid = getunikid();
if(_uniqeventid == undefined || _uniqeventid == null){
_uniqeventid = -1;
}

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
errodiv += currentdatetime + " : " + log;
errodiv += '</div>';

//define an object
var _entityobj = {
uniqeventid: _uniqeventid,
eventtype: eventtype,
log: errodiv, 
loggedinuser: _loggedinuser,
browser: _global_browser_name,
createddate: currentdatetime
}

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

//perform the add
var request = store.add(_entityobj);

request.onsuccess = function(e){
//console.error("logtodb server response: [ "+ e.type + " ].");
//syseventslogger("logtodb server response: [ "+ e.type + " ].", "info");
}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
syseventslogger("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
syseventslogger("error [ " + err.message + " <br/> " + err.stack + " ]", "error");
}
}

function retrievesettingzfromdb(){
try{

//perform the retrieve 
var entities = [];
var transaction;
var store;

if(db == null || db == undefined){
hideprogressdiv();
return;
}

showprogressdiv();

showprogresstext("retrieving settingz...");

try{
transaction = db.transaction(["mibangire"], "readonly");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

try{
store = transaction.objectStore("mibangire");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

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

if(records.length <= 0){
hideprogressdiv();
return;
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

populatesettingzfromdboncallback(records);

}, 5000);

}catch(err){
showeventsnotifierdiv(err.message + "  " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function togglesaveorupdatesetting(_settingobj){
try{

var transaction;
var store;

try{
transaction = db.transaction(["mibangire"], "readonly");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

try{
store = transaction.objectStore("mibangire");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

//perform the retrieve
var request = store.index("settingkey").get(_settingobj.settingkey);

request.onsuccess = function(e){
var _sttngobj = e.target.result;
if(_sttngobj == undefined || _sttngobj == null){
createsetting(_settingobj);
}else{
deletesetting(_sttngobj, _settingobj);
}
}

request.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
syseventslogger("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

//}

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

function deletesetting(_sttngobj, _settingobj){
try{

var transaction;
var store;

var _intkey = parseInt(_sttngobj.autoid);

try{
transaction = db.transaction(["mibangire"], "readwrite");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

try{
store = transaction.objectStore("mibangire");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

//perform the delete
var request = store.delete(_intkey);

request.onsuccess = function(e){
showeventsnotifierdiv("deleted key [ " + _settingobj.settingkey + " ]. server response: [ " + e.type + " ].", "info");
createsetting(_settingobj);
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

function createsetting(_settingobj){
try{

if(db == undefined || db == null){
return;
}

if(_settingobj == undefined || _settingobj == undefined){
return;
}

var _loggedinuser = getloggedinuser();
if(_loggedinuser == undefined || _loggedinuser == null){
_loggedinuser = -1;
}

var _uniqeventid = getunikid();
if(_uniqeventid == undefined || _uniqeventid == null){
_uniqeventid = -1;
}

var currentdatetime = getcurrentdatetime();

//define an object
var _entityobj = {
uniqeventid: _uniqeventid,
settingkey: _settingobj.settingkey,
settingvalue: _settingobj.settingvalue, 
loggedinuser: _loggedinuser,
createddate: currentdatetime
}

var transaction;
var store;

try{
transaction = db.transaction(["mibangire"], "readwrite");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

try{
store = transaction.objectStore("mibangire");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

//perform the add
var request = store.add(_entityobj);

request.onsuccess = function(e){
//console.error("createsetting server response: [ "+ e.type + " ].");
showeventsnotifierdiv("created setting [ " + _settingobj.settingkey + " ]. server response: [ " + e.type + " ].", "info");
}

request.onerror = function(e){
//do something for the error
//console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
syseventslogger("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
}

}catch(err){
//console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
syseventslogger("error [ " + err.message + " <br/> " + err.stack + " ]", "error");
}
}

function updateuixsettingzfromdbonload(){
try{

//perform the retrieve 
var entities = [];
var transaction;
var store;

if(db == null || db == undefined){
hideprogressdiv();
return;
}

showprogressdiv();

showprogresstext("retrieving settingz...");

try{
transaction = db.transaction(["mibangire"], "readonly");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

try{
store = transaction.objectStore("mibangire");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

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

if(records.length <= 0){
hideprogressdiv();
return;
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

updateuixsettingzfromdbtocachestorageonload(records);

}, 5000);

}catch(err){
showeventsnotifierdiv(err.message + "  " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}
}

function retrievemediasettingzfromdb(){
try{

//perform the retrieve 
var entities = [];
var transaction;
var store;

if(db == null || db == undefined){
hideprogressdiv();
return;
}

try{
transaction = db.transaction(["mibangire"], "readonly");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

try{
store = transaction.objectStore("mibangire");
}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
return;
}

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

if(records.length <= 0){
hideprogressdiv();
return;
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

populatemediasettingzfromdboncallback(records);

}, 5000);

}catch(err){
showeventsnotifierdiv(err.message + "  " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}

