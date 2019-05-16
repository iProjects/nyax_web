
function login(){

cleardiveventnotifier(); 

showprogressdiv();

showprogresstext("authenticating...");

//perform the retrieve 
var entities = [];

var _btn = document.getElementById("btnlogin");

try{

_btn.text = "validating...";

console.warn("executing login event handler...");
appendapplogz("executing login event handler...", "warning");

var isvalidationsuccessfull = true;

var ritwa = document.getElementById("txtritwa").value;
var password = document.getElementById("txtpassword").value;
var ndirikana = document.getElementById("chkndirikana").checked;

console.warn("validating user input...");
appendapplogz("validating user input...", "warning");

if(ritwa == ""){
errorcount++;
showeventsnotifierdiv("ritwa cannot be null.", "error");
isvalidationsuccessfull = false;
}
 
if(password == ""){
errorcount++;
showeventsnotifierdiv("passsword cannot be null.", "error");
isvalidationsuccessfull = false;
}

if(isvalidationsuccessfull == false){ 
console.info("isvalidationsuccessfull [ " + isvalidationsuccessfull + " ]");
console.error("user input validation failed.");
appendapplogz("user input validation failed.", "warning");
hideprogressdiv();
_btn.text = "login";
return;
}

if(ritwa == "" || password == ""){
_btn.text = "login";
hideprogressdiv();
return;
}

_btn.text = "authenticating...";

console.info("user input validation succeeded.");
appendapplogz("user input validation succeeded.", "info");

console.info("authenticating...");
appendapplogz("authenticating...", "warning");
  
console.warn("searching user [ " + ritwa + " ]...");
appendapplogz("searching user [ " + ritwa + " ]...", "warning");
  
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

var _memba;
var _ritwa;
var _password;
var _found_ritwa;
var _found_password;

for(var i = 0; i < records.length; i++){

console.info("i [ " + i + " ]");

_memba = records[i];

_ritwa = _memba["ritwa"];
console.info("_ritwa [ " + _ritwa  + " ]");

_password = _memba["password"];

if(_ritwa === ritwa){

_found_ritwa = _ritwa;

if(_password === password){

_found_password = _password;

} 

} 

}
 
if(_found_ritwa !== undefined){

if(_found_password !== undefined){

try{
var _islocaldb = document.getElementById("rdodatabaselocal").checked;
var _isclouddb = document.getElementById("rdodatabasecloud").checked;

var _isencryptedlogin = document.getElementById("rdoencryptedlogin").checked;
var _isbasiclogin = document.getElementById("rdobasiclogin").checked;

var _sessionid = document.getElementById("lbl_rdm_session").innerText;
var _loggedtime = getcurrentdatetime();
var _encryptedhash = encryptograpy(_found_password);
var dbused;
var loginused;

if(_islocaldb){
dbused = "localdb";
}else{
dbused = "clouddb";
}

if(_isencryptedlogin){
loginused = "encryptedlogin";
}else{
loginused = "basiclogin";
}

//define the object
var _mathingatirioobj = {
uniqeventid: getunikid(),
ritwa: ritwa,
password: _found_password,
encryptedhash: _encryptedhash,
ndirikana: ndirikana,
dbused: dbused,
loginused: loginused,
sessionid: _sessionid,
loggedtime: _loggedtime,
browser: _global_browser_name
}

var _transactionobj = db.transaction(["mathingatirio"], "readwrite");

var _storeobj = _transactionobj.objectStore("mathingatirio");

//perform the add
var _requestobj = _storeobj.add(_mathingatirioobj);

_requestobj.onsuccess = function(e){

console.info("server response: [ "+ e.type + " ].");

showeventsnotifierdiv("server response: [ "+ e.type + " ].", "info");

console.info("new record persisted: ritwa [ "+ ritwa + " ] ndirikana [ " + ndirikana + " ] dbused [ " + dbused + " ] loginused [ " + loginused + " ] browser [ " + browser + " ] sessionid [ " + _sessionid + " ] loggedtime [ " + _loggedtime + " ].");

showeventsnotifierdiv("new record persisted: ritwa [ "+ ritwa + " ] ndirikana [ " + ndirikana + " ] dbused [ " + dbused + " ] loginused [ " + loginused + " ] browser [ " + browser + " ] sessionid [ " + _sessionid + " ] loggedtime [ " + _loggedtime + " ].", "info");

logtodb("new record persisted: ritwa [ "+ ritwa + " ] ndirikana [ " + ndirikana + " ] dbused [ " + dbused + " ] loginused [ " + loginused + " ] browser [ " + browser + " ] sessionid [ " + _sessionid + " ] loggedtime [ " + _loggedtime + " ].", "info");

}

_requestobj.onerror = function(e){
//do something for the error
console.error("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]");
appendapplogz("event name [ " + e.target.error.name +  " ] event message [ " + e.target.error.message + " ]", "error");
hideprogressdiv();
}

}catch(err){
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
hideprogressdiv();
}

console.info("authentication succeeded.");
appendapplogz("authentication succeeded.", "info");

appendapplogz("user [ " + ritwa + " ] successfilly logged in at [ " + new Date() + " ] session id [ " + _global_session + " ].", "info");

setstorages("username", ritwa);
setstorages("last logged  in user", ritwa);
setstorages("last logged  in date", new Date());
setstorages("session id", _global_session);

SetPersistentCookie("username", ritwa);
SetPersistentCookie("last logged  in user", ritwa);
SetPersistentCookie("last logged  in date", new Date());
SetPersistentCookie("session id", _global_session);

showeventsnotifierdiv("login successful redirecting...", "info");

$("#body").fadeOut(5000);

setTimeout(function(){
window.location.href = "index.html";
}, 4000);

}else{

console.error("authentication failed.");
showeventsnotifierdiv("authentication failed.", "error");
  
console.error("password is incorrect!"); 
showeventsnotifierdiv("password is incorrect!", "error");
hideprogressdiv();
}

}else{

console.error("authentication failed.");
showeventsnotifierdiv("authentication failed.", "error");
  
console.error("user with ritwa [ " + ritwa + " ] does not exist!");
showeventsnotifierdiv("user with ritwa [ " + ritwa + " ] does not exist!", "error");
hideprogressdiv();
}

_btn.text = "login";

}, 5000);
 
}catch(err){
showeventsnotifierdiv(err.message + " <br/> " + err.stack, "error");
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
_btn.text = "login";
hideprogressdiv();
}
}

function setndirikanaglobalsetting(){
try{


}catch(err){
logglobalerrors(err);
console.error("error [ " + err.message + " <br/> " + err.stack + " ]");
}
}
