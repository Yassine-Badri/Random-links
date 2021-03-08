window.onload=function(){
  var dream = document.getElementById("dream");
var amazon = document.getElementById("amazon");
var link = document.getElementById("link");
var image = document.getElementById("image");
var bucket = document.getElementById("bucket");
var html = document.getElementById("html");
var img = document.getElementById("img");

function makeid(length) {
var result           = '';
var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
}

amazon.addEventListener("click", function(){ 
var bucket = makeid(10);
var html = makeid(10);
var img = makeid(10);
document.getElementById("link").value = "https://s3.us-east-2.amazonaws.com/"+bucket+"/"+html+".html";
document.getElementById("image").value = "https://s3.us-east-2.amazonaws.com/"+bucket+"/"+img+".png";
document.getElementById("bucket").value = bucket;
document.getElementById("html").value = html;
document.getElementById("img").value = img;
});
dream.addEventListener("click", function(){ 
var bucket = makeid(10);
var html = makeid(10);
var img = makeid(10);
document.getElementById("link").value = "https://objects-us-east-1.dream.io/"+bucket+"/"+html+".html";
document.getElementById("image").value = "https://objects-us-east-1.dream.io/"+bucket+"/"+img+".png";
document.getElementById("bucket").value = bucket;
document.getElementById("html").value = html;
document.getElementById("img").value = img;
});

function myLink() {
var copyText = document.getElementById("link");
copyText.select();
document.execCommand("copy");
}
function myImage() {
var copyText = document.getElementById("image");
copyText.select();
document.execCommand("copy");
}
function myBucket() {
var copyText = document.getElementById("bucket");
copyText.select();
document.execCommand("copy");
}
function myHtml() {
var copyText = document.getElementById("html");
copyText.select();
document.execCommand("copy");
}
function myImg() {
var copyText = document.getElementById("img");
copyText.select();
document.execCommand("copy");
}

document.getElementById("cp-link").addEventListener("click", myLink);
document.getElementById("cp-image").addEventListener("click", myImage);
document.getElementById("cp-bucket").addEventListener("click", myBucket);
document.getElementById("cp-html").addEventListener("click", myHtml);
document.getElementById("cp-img").addEventListener("click", myImg);
}