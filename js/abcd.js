//A1  первый блок цифр и фон
     function fon1(){ setTimeout(() => canA1(), 2000);
        cnvobj1=document.getElementById("canv1");
    ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
     
     
   
    img1.onload = function() {
    ctx1.drawImage(img1, 48,98, img1.width, img1.height)
   };
    
    img1.src = "/mozaika/osnA.png";
  
   }
   
   //
  
   function canA1() {
   
     cnvobj1=document.getElementById("canv1");
     ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
 
  
 const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();
  //txt
  ctx1.fillStyle = "#00F";
    ctx1.strokeStyle = "#F00";
    ctx1.font = "italic 10pt Arial";
    ctx1.fillText(" cristally.store", 20, 50);
//
     for (i = 4; i < 144; i = i + 8) {
       for (j = 2; j < 208; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+62], [y*1.45+120]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+62], [y*1.45+120]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+62], [y*1.45+120]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+62], [y*1.45+120]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+62], [y*1.45+120]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+62], [y*1.45+120]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+62], [y*1.45+120]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+62], [y*1.45+120]);
           }
       }
   } 
   //
for (i = 148; i < 288; i = i + 8) {
       for (j = 2; j < 208; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+80], [y*1.45+120]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+80], [y*1.45+120]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+80], [y*1.45+120]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+80], [y*1.45+120]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+80], [y*1.45+120]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+80], [y*1.45+120]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+80], [y*1.45+120]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+84], [y*1.45+120]);
           }
       }
   } 
   //
    for (i = 292; i < 432; i = i + 8) {
       for (j = 2; j < 208; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-354], [y*1.45+485]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-354], [y*1.45+485]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-354], [y*1.45+485]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-354], [y*1.45+485]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-354], [y*1.45+485]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-354], [y*1.45+485]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-354], [y*1.45+485]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-354], [y*1.45+485]);
           }
       }
   } 
   //
   for (i = 436; i < 575; i = i + 8) {
       for (j = 2; j < 208; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-336], [y*1.45+485]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-336], [y*1.45+485]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-336], [y*1.45+485]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-336], [y*1.45+485]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-336], [y*1.45+485]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-336], [y*1.45+485]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-336], [y*1.45+485]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-336], [y*1.45+485]);
           }
       }
   } 
   
  }
 
 

 
 
  ////
   //B1   блок цифр и фон
     function fon2(){ setTimeout(() => canB1(), 3000);
        cnvobj1=document.getElementById("canv1");
    ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
     
     
   
    img1.onload = function() {
    ctx1.drawImage(img1, 48,100, img1.width, img1.height)
   };
    // Загружаем файл изображения   ctx1.drawImage(img1, 10, 10, canvas.width, canvas.height);
    img1.src = "/mozaika/osnB.png";
  //

   }
   
   //
   //
   function canB1() {
   
     cnvobj1=document.getElementById("canv1");
     ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
 
  
 const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();

     for (i = 4; i < 144; i = i + 8) {
       for (j = 210; j < 418; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+62], [y*1.45-180]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+62], [y*1.45-180]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+62], [y*1.45-180]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+62], [y*1.45-180]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+62], [y*1.45-180]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+62], [y*1.45-180]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+62], [y*1.45-180]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+62], [y*1.45-180]);
           }
       }
   } 
   //
for (i = 148; i < 288; i = i + 8) {
       for (j = 210; j < 418; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+82], [y*1.45-180]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+82], [y*1.45-180]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+82], [y*1.45-180]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+82], [y*1.45-180]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+82], [y*1.45-180]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+82], [y*1.45-180]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+82], [y*1.45-180]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+82], [y*1.45-180]);
           }
       }
   } 
   //
    for (i = 292; i < 432; i = i + 8) {
       for (j = 210; j < 418; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-354], [y*1.45+185]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-354], [y*1.45+185]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-354], [y*1.45+185]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-354], [y*1.45+185]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-354], [y*1.45+185]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-354], [y*1.45+185]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-354], [y*1.45+185]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-354], [y*1.45+185]);
           }
       }
   } 
   //
   for (i = 436; i < 575; i = i + 8) {
       for (j = 210; j < 418; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-336], [y*1.45+185]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-336], [y*1.45+185]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-336], [y*1.45+185]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-336], [y*1.45+185]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-336], [y*1.45+185]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-336], [y*1.45+185]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-336], [y*1.45+185]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-336], [y*1.45+185]);
           }
       }
   } 
   
  }
  
  //////
  /////
  /////
  
   //C1   блок цифр и фон
     function fon3(){ setTimeout(() => canC1(), 3000);
        cnvobj1=document.getElementById("canv1");
    ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
     
     
   
    img1.onload = function() {
    ctx1.drawImage(img1, 48,102, img1.width, img1.height)
   };
    // Загружаем файл изображения   ctx1.drawImage(img1, 10, 10, canvas.width, canvas.height);
    img1.src = "/mozaika/osnC.png";
  //

   }
   
   //
   //
   function canC1() {
   
     cnvobj1=document.getElementById("canv1");
     ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
 
  
 const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();

     for (i = 4; i < 144; i = i + 8) {
       for (j = 418; j < 626; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+62], [y*1.45-481]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+62], [y*1.45-481]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+62], [y*1.45-481]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+62], [y*1.45-481]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+62], [y*1.45-481]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+62], [y*1.45-481]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+62], [y*1.45-481]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+62], [y*1.45-481]);
           }
       }
   } 
   //
for (i = 148; i < 288; i = i + 8) {
       for (j = 418; j < 626; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+82], [y*1.45-481]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+82], [y*1.45-481]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+82], [y*1.45-481]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+82], [y*1.45-481]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+82], [y*1.45-481]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+82], [y*1.45-481]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+82], [y*1.45-481]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+82], [y*1.45-481]);
           }
       }
   } 
   //
    for (i = 292; i < 432; i = i + 8) {
       for (j = 418; j < 626; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-355], [y*1.45-115]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-355], [y*1.45-115]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-355], [y*1.45-115]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-355], [y*1.45-115]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-355], [y*1.45-115]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-355], [y*1.45-115]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-355], [y*1.45-115]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-355], [y*1.45-115]);
           }
       }
   } 
   //
   for (i = 436; i < 575; i = i + 8) {
       for (j = 418; j < 626; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-336], [y*1.45-115]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-336], [y*1.45-115]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-336], [y*1.45-115]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-336], [y*1.45-115]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-336], [y*1.45-115]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-336], [y*1.45-115]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-336], [y*1.45-115]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-336], [y*1.45-115]);
           }
       }
   } 
   
  }
  
  //
  //
  //
    //D1   блок цифр и фон
     function fon4(){ setTimeout(() => canD1(), 3000);
        cnvobj1=document.getElementById("canv1");
    ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
     
     
   
    img1.onload = function() {
    ctx1.drawImage(img1, 48,95, img1.width, img1.height)
   };
    // Загружаем файл изображения   ctx1.drawImage(img1, 10, 10, canvas.width, canvas.height);
    img1.src = "/mozaika/osnD.png";
  //

   }
   
   //
   //
   function canD1() {
   
     cnvobj1=document.getElementById("canv1");
     ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
 
  
 const canvas = document.getElementById("pixelitcanvas"),
    context = canvas.getContext("2d"),
    img = new Image();

     for (i = 4; i < 144; i = i + 8) {
       for (j = 626; j < 830; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+62], [y*1.45-785]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+62], [y*1.45-785]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+62], [y*1.45-785]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+62], [y*1.45-785]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+62], [y*1.45-785]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+62], [y*1.45-785]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+62], [y*1.45-785]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+62], [y*1.45-785]);
           }
       }
   } 
   //
for (i = 148; i < 288; i = i + 8) {
       for (j = 625; j < 830; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45+82], [y*1.45-785]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45+82], [y*1.45-785]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45+82], [y*1.45-785]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45+82], [y*1.45-785]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45+82], [y*1.45-785]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45+82], [y*1.45-785]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45+82], [y*1.45-785]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45+82], [y*1.45-785]);
           }
       }
   } 
   //
    for (i = 292; i < 432; i = i + 8) {
       for (j = 625; j < 830; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-354], [y*1.45-420]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-354], [y*1.45-420]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-354], [y*1.45-420]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-354], [y*1.45-420]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-354], [y*1.45-420]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-354], [y*1.45-420]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-354], [y*1.45-420]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-354], [y*1.45-420]);
           }
       }
   } 
   //
   for (i = 436; i < 576; i = i + 8) {
       for (j =  625; j < 830; j = j + 8) {
           var x = i;
           var y = j;
   
           var data = context.getImageData(x, y, 1, 1).data;
             if ((data[0] === 93) && (data[1] === 39) && (data[2] === 93)) {
            
               ctx1.fillStyle = " #000000";
               ctx1.font = "italic  9pt Arial";
               ctx1.fillText("1", [x*1.45-336], [y*1.45-420]);
           }
           if ((data[0] === 239) && (data[1] === 125) && (data[2] === 87)) {
                ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("2", [x*1.45-336], [y*1.45-420]);
           }
           if ((data[0] === 255) && (data[1] === 205) && (data[2] === 117)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("3", [x*1.45-336], [y*1.45-420]);
           } 
            if ((data[0] === 167) && (data[1] === 240) && (data[2] === 112)) {
              
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("4", [x*1.45-336], [y*1.45-420]);
           }
           if ((data[0] === 244) && (data[1] === 244) && (data[2] === 244)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("5", [x*1.45-336], [y*1.45-420]);
           }
           if ((data[0] === 148) && (data[1] === 176) && (data[2] === 194)) {
              ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("6",[x*1.45-336], [y*1.45-420]);
           }
           if ((data[0] ===51) && (data[1] === 60) && (data[2] === 87)) {
               ctx1.fillStyle = " #000000";
               ctx1.font = " 9pt Italic Arial";
               ctx1.fillText("7", [x*1.45-336], [y*1.45-420]);
           }
           if ((data[0] === 26) && (data[1] === 28) && (data[2] === 44)) {
              ctx1.fillStyle = "  #000000"; //белый #000000
               ctx1.font = " 9pt Italic Arial ";
               ctx1.fillText("8", [x*1.45-336], [y*1.45-420]);
           }
       }
   } 
   
  }
  
  ////
  
   //фон АВСД
    function fon0(){ setTimeout(() => canRgbA(), 2000);
        cnvobj1=document.getElementById("canv");
    ctx1=cnvobj1.getContext("2d");
     var img1 = new Image();
     
     
   
    img1.onload = function() {
    ctx1.drawImage(img1, 0,0, img1.width, img1.height)
   };
    // Загружаем файл изображения   ctx1.drawImage(img1, 10, 10, canvas.width, canvas.height);
    img1.src = "/mozaika/osABCD.png";
    }