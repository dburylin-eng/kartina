// второй канвас копию из 1го
//сетка
//квадраты рисует плитку
//рисуемw из канвас изображение в имедж id
// плитка
// для пдф
//ссылка выбрать этот вариант по id

 // второй канвас копию из 1го
 function newCanv(){
     cnvobj=document.getElementById("pixelitcanvas");
     ctx=cnvobj.getContext("2d");
     imgd = ctx.getImageData(0,0,576, 832);//берём область из канвы 1
     cnvobj1=document.getElementById("canv");
     ctx1=cnvobj1.getContext("2d");
     ctx1.putImageData(imgd, 0,0);//вставляем область в канву 2
    

}
 
  
   
 //сетка
   function getGread() {
         
         var c_canvas = document.getElementById("pixelitcanvas");
var context = c_canvas.getContext('2d');

for (var x = 0.1; x < 576; x += 8,5) {
	context.moveTo(x, 0);
	context.lineTo(x, 832);
}

for (var y = 0.1; y < 832; y += 8,5) {
	context.moveTo(0, y);
	context.lineTo(832, y);
}

context.strokeStyle = "#F5F2F2", globalAlpha = 0.9;

context.stroke();
     }

   //квадраты рисует плитку
   function printRepit(){ 
       const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
//https://www.google.nl/images/srpr/logo3w.png
img.src = '/mozaika/8.png';
img.addEventListener('load', () => {
 const ptrn = context.createPattern(img, 'repeat'); // Create a pattern with this image, and set it to "repeat".
 context.fillStyle = ptrn;
 context.fillRect(0, 0, 576, 832); // context.fillRect(x, y, width, height);
});

  }
  
    //рисуемw из канвас изображение в имедж id
   function printImage(){ 
       const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('image').appendChild(target) 
    }, 1000);
  }
  function printImage1(){ 
       const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('image1').appendChild(target) 
    }, 1000);
  }
  function printImage2(){ 
       const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('image2').appendChild(target) 
    }, 1000);
  }
  function printImage3(){ 
       const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('image3').appendChild(target) 
    }, 1000);
  }
  function printImage4(){ 
       const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('image4').appendChild(target) 
    }, 1000);
  }

/////////////////////  ///////////////////////////////////////////////for save pdf
 // плитка
   function printImg1(){ 
       const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('img1').appendChild(target) 
    }, 1000);
  }
  //все полотно по белому
   function printImg2(){ 
       const canvas = document.getElementById("canv"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('img2').appendChild(target) 
    }, 1000);
  }
  //A
   function printImg3(){ 
       const canvas = document.getElementById("canv1"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('img3').appendChild(target) 
    }, 1000);
  }
  //B
   function printImg4(){ 
       const canvas = document.getElementById("canv1"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('img4').appendChild(target) 
    }, 1000);
  }
  //C
   function printImg5(){ 
       const canvas = document.getElementById("canv1"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('img5').appendChild(target) 
    }, 1000);
  }
  //D
   function printImg6(){ 
       const canvas = document.getElementById("canv1"),
    context = canvas.getContext("2d"),
    img = new Image();
img.addEventListener('load', () => {});
    setTimeout(() => { 
        var target = new Image();
    target.src = canvas.toDataURL();
    document.getElementById('img6').appendChild(target) 
    }, 1000);
  }
  //
  //
  //
  
///////////////////////////////////////////////////  //ссылка выбрать этот вариант по id
  function choiseF(){
       var link = document.createElement('a');
link.textContent = 	'Выбрать вариант1';
link.href =  'javascript: forPdf1(),loaDer()';
document.getElementById('images').appendChild(link);
  }
  
  //
   function choiseF1(){
       var link = document.createElement('a');
link.textContent = 'Выбрать вариант2';
link.href = 'javascript: forPdf2(),loaDer()';
document.getElementById('images1').appendChild(link);
  }
  
   function choiseF2(){
       var link = document.createElement('a');
link.textContent = 'Выбрать вариант3';
link.href = 'javascript: forPdf3(),loaDer()';
document.getElementById('images2').appendChild(link);
  }
  
   function choiseF3(){
       var link = document.createElement('a');
link.textContent = 'Выбрать вариант4';
link.href =  'javascript: forPdf4(),loaDer()';
document.getElementById('images3').appendChild(link);
  }
  
   function choiseF4(){
       var link = document.createElement('a');
link.textContent = 'Выбрать вариант5';
link.href =  'javascript: forPdf5(),loaDer()';
document.getElementById('images4').appendChild(link);
  }
  
  //скрывает кнопку
 	 
  function setLocation(loc){
  document.getElementById('hide-div').style.display = 'none';
  window.location = loc;
}
//еще скрываем имедж hide-divnext
  function setLoc(loc){
  document.getElementById('divnext').style.display = 'none';
  window.location = loc;
}

// сохраняем канвас
function prepareImg() {
     var canvas = document.getElementById('pixelitcanvas');
     document.getElementById('inp_img').value = canvas.toDataURL();
    
}
///

function loaDer() { 
setTimeout(function(){
	document.getElementById('load').style.display = 'none';
}, 5000);
}