window.onload=function(){
  var dream = document.getElementById("dream");
  var amazon = document.getElementById("amazon");
  var backblaze = document.getElementById("backblaze");
  var azure = document.getElementById("azure");
  var google = document.getElementById("google");
  var link = document.getElementById("link");
  var image = document.getElementById("image");
  var bucket = document.getElementById("bucket");
  var cnt = document.getElementById("cnt");
  var container = document.getElementById("container");
  var html = document.getElementById("html");
  var img = document.getElementById("img");
  var link1 = document.getElementById("link1");
  var image1 = document.getElementById("image1");
  var bfirst = document.getElementById("bfirst");
  
  function makeid(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
  }
  /// AMAZON
  amazon.addEventListener("click", function(){ 
  cnt.style.display="none";
  var buckets = makeid(10);
  var htmls = makeid(10);
  var imgs = makeid(10);
  link.value = "https://s3.amazonaws.com/"+buckets+"/"+htmls+".html";
  image.value = "https://s3.amazonaws.com/"+buckets+"/"+imgs+".png";
  bucket.value = buckets;
  html.value = htmls;
  img.value = imgs;
  link1.value = "https://"+buckets+".s3.amazonaws.com/"+htmls+".html";
  image1.value = "https://"+buckets+".s3.amazonaws.com/"+imgs+".png";
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
  function myContainer() {
    var copyText = document.getElementById("container");
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
  function myLink1() {
    var copyText = document.getElementById("link1");
    copyText.select();
    document.execCommand("copy");
    }
    function myImage1() {
    var copyText = document.getElementById("image1");
    copyText.select();
    document.execCommand("copy");
    }
  
  
  document.querySelector(".cp-link").addEventListener("click", myLink);
  document.querySelector(".cp-image").addEventListener("click", myImage);
  document.querySelector(".cp-bucket").addEventListener("click", myBucket);
  document.querySelector(".cp-container").addEventListener("click", myContainer);
  document.querySelector(".cp-html").addEventListener("click", myHtml);
  document.querySelector(".cp-img").addEventListener("click", myImg);
  document.querySelector(".cp-link1").addEventListener("click", myLink1);
  document.querySelector(".cp-image1").addEventListener("click", myImage1);
  }
