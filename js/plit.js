    //первый вариант канвас
     
  function getDate() {  return new Promise(function(resolve){
     const myscale = (14.6);
 mypalette = [[26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]
    ];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
    "scale" : myscale, "palette" : mypalette});  
    px.draw().pixelate().convertPalette()
     resolve(); 

})  
    //. contrastImage().convertG().convertGrayscale1()
// правильно..px.draw().pixelate().convertGrayscale().convertPalette() 
 
 .then(printRepit)  .then(printImage)  .then(choiseF) 
  }
 
//второй вариант
function getDate1() {  return new Promise(function(resolve){                   
     const myscale = (14.6);
 mypalette = [
 [26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]
 ];
    
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
    "scale" : myscale, "palette" : mypalette});  
   px.draw().pixelate().convertGrayscale1().convertPalette()
     resolve(); 
})
 .then(printRepit)  .then(printImage1)  .then(choiseF1)  
}
    
   //
   function getDate2() {printRepit();printImage2();choiseF2();
     const myscale = (14.6);
 mypalette = [ [26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]
    ];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
    "scale" : myscale, "palette" : mypalette});  
   px.draw().pixelate().convertGrayscale2().convertPalette()}
   
   //
    function getDate3() {printRepit();printImage3();choiseF3();
     const myscale = (14.6);
  mypalette = [ [26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]
    ];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
    "scale" : myscale, "palette" : mypalette});  
   px.draw().pixelate().convertGrayscale3().convertPalette()}
   //
    function getDate4() {printRepit();printImage4();choiseF4();
     const myscale = (14.6);
   mypalette = [ [26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]
    ];
    //[255, 255, 255],[250, 224, 224],[222, 192, 192],[160,160, 160],[128, 128, 128],[96, 96, 96],[64, 64, 64],[32, 32, 32] серый с розовым
    //[255, 255, 255],[255, 255, 162],[250, 190, 35],[245, 85, 135],[100, 77, 150],[0, 177, 180],[33, 33, 33] попарт
    //[255, 255, 255],[0, 255, 255],[0, 102, 51],[255, 255, 0],[255, 0, 0],[0, 0, 255],[26, 26, 26] цвет гуашь
   
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
    "scale" : myscale, "palette" : mypalette});  
   px.draw().pixelate().convertGrayscale4().convertPalette()}
   
   
   //канвас без плитки////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
    function getDateA() { printRepit();
     const myscale = (14.6);
 mypalette = [[26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
       "scale" : myscale, "palette" : mypalette});  
      px.draw().pixelate().convertPalette()
     
  }
  
  
  function getDateA1() { printRepit();
     const myscale = (14.6);
 mypalette =[[26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
       "scale" : myscale, "palette" : mypalette});  
      px.draw().pixelate().convertGrayscale1().convertPalette()
  }
  
   function getDateA2() {  printRepit();
     const myscale = (14.6);
mypalette = [[26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
       "scale" : myscale, "palette" : mypalette});  
      px.draw().pixelate().convertGrayscale2().convertPalette()
  }
  
   function getDateA3() {  printRepit();
     const myscale = (14.6);
 mypalette = [[26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
       "scale" : myscale, "palette" : mypalette});  
      px.draw().pixelate().convertGrayscale3().convertPalette()
  }
  
   function getDateA4() {  printRepit();
     const myscale = (14.6);
 mypalette = [[26,28,44],[93,39,93],[239, 125, 87],[255, 205, 117],[167, 240, 112],[244, 244, 244],[148, 176, 194],[51, 60, 87]];
    const  px  =  new  pixelit({from:  document.getElementById('pixelitimg'),
       "scale" : myscale, "palette" : mypalette});  
      px.draw().pixelate().convertGrayscale4().convertPalette()
  }
   //функция рисует цифры на канвас 1 по изо
   
   function canRgb() {
 const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();

    for (i = 4; i <  canvas.width; i = i + 8) {
        for (j = 2; j < 832; j = j + 8) {
            var x = i;
            var y = j;

            var data = context.getImageData(x, y, 1, 1).data;

            // console.log(x,y, data[0], data[1], data[2]);
            
              if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
             //   console.log('тот самый цвет1');
             context.fillStyle = " #C0C0C0";
                context.font = "italic 6pt Arial";
                context.fillText("1", [x-2], [y+5]);
            }
            if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                context.fillStyle = " #000000";
                context.font = " 6pt Italic Arial";
                context.fillText("2", [x-2], [y+5]);
            }
            if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
                context.fillStyle = " #000000";
                context.font = " 6pt Italic Arial";
                context.fillText("3", [x-2], [y+5]);
            } 
             if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
                 
               context.fillStyle = " #000000";
                context.font = " 6pt Italic Arial";
                context.fillText("4", [x-2], [y+5]);
            }
            if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
                context.fillStyle = " #000000";
                context.font = " 6pt Italic Arial";
                context.fillText("5", [x-2], [y+5]);
            }
            if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
               context.fillStyle = " #000000";
                context.font = " 6pt Italic Arial";
                context.fillText("6", [x-2], [y+5]);
            }
            if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
                context.fillStyle = "#C0C0C0";
                context.font = " 6pt Italic Arial";
                context.fillText("7", [x-2], [y+5]);
            }
            if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
               context.fillStyle = "  #C0C0C0"; //белый #000000
                context.font = " 6pt Italic Arial ";
                context.fillText("8", [x-2], [y+5]);
            }
        }
    }
   }
   
   // цыфры по всему листу рисунка канвас по белому
function canRgbA() {
   
     cnvobj1=document.getElementById("canv");
     ctx1=cnvobj1.getContext("2d");
   
 const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();

    for (i = 4; i <  canvas.width; i = i + 8) {
        for (j = 2; j < 832; j = j + 8) {
            var x = i;
            var y = j;

            var data = context.getImageData(x, y, 1, 1).data;

             
            
              if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
                 
                ctx1.fillStyle = " #000000";
                ctx1.font = "italic 6pt Arial";
                ctx1.fillText("1", [x-2], [y+5]);

            }
            if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                 ctx1.fillStyle = " #000000";
                ctx1.font = " 6pt Italic Arial";
                ctx1.fillText("2", [x-2], [y+5]);
            }
            if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
                ctx1.fillStyle = " #000000";
                ctx1.font = " 6pt Italic Arial";
                ctx1.fillText("3", [x-2], [y+5]);
            } 
             if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
                 
                ctx1.fillStyle = " #000000";
                ctx1.font = " 6pt Italic Arial";
                ctx1.fillText("4", [x-2], [y+5]);
 //img.onload = function() {         иногда рисовала иногда нет думаю не успевает прогружать картинку
 //ctx1.drawImage(img,[9], [7]); 
//};img.src = '/mozaika/4.svg';
 
            }
            if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
                ctx1.fillStyle = " #000000";
                ctx1.font = " 7pt Italic Arial";
                ctx1.fillText("5", [x-2], [y+6]);
            }
            if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
               ctx1.fillStyle = " #000000";
                ctx1.font = " 7pt Italic Arial";
                ctx1.fillText("6", [x-2], [y+6]);
            }
            if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
                ctx1.font = " 6pt Italic Arial";
                ctx1.fillText("7", [x-2], [y+5]);
            }
            if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
               ctx1.fillStyle = "  #000000"; //белый #000000
                ctx1.font = " 7pt Italic Arial ";
                ctx1.fillText("8", [x-2], [y+5]);
            }
        }
    }
   }
   
