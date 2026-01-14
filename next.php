<!DOCTYPE html>
<html lang="ru" class="no-js">
<head>
    
    
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <title>Мозаика</title>
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600" rel="stylesheet">
    <link rel="stylesheet" href="dist/css/style.css">
	<script src="https://unpkg.com/animejs@3.0.1/lib/anime.min.js"></script>
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
    <script src="js/jquery.min.js"></script> 
    <script src="js/mine.js"></script>
    <script src="js/croppie.js"></script>  
    <script src="js/modalcorp.js"></script>
    <script src="js/bootstrap.min.js"></script> 
    <script src="js/abcd.js"></script>
    <script src="js/plit.js"></script>
    <script src="js/pixelit.js"></script>
    <script src="js/forpdf.js"></script>
    <!--  <script src="js/jspdf.js"></script> -->
     <!--  <script src="js/html2pdf.bundle.min.js"></script>  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
 <script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.0/html2pdf.bundle.min.js"></script>
    <link rel="stylesheet" href="style/croppie.css" />
        <link rel="stylesheet" href="style/mine.css" />
        <link rel="stylesheet" href="style/bootstrap.min.css" /> 
    
</head>


<body class="is-boxed has-animations1">

    <div class="body-wrap">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
							<a href="#">
								<img class="header-logo-image"  align="center" src="dist/images/logo.png" alt="Logo" href="#">
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
      <!-- лоадер -->  
 
<style>

</style>
<script>
  
</script>
      <!--  -->
       <div id="hide-div">
        <main>
                      <section class="pricing section">
                <div class="container-sm">
                    <div class="pricing-inner section-inner">
                       
                           
					<div class="pricing-tables-wrap">
                            <div class="pricing-table">
                               
                                        </div>
										<div class="pricing-table-features-title text-xs pt-24 pb-24"></div>
                                        <ul class="pricing-table-features list-reset text-xs">
                                           <!--  <li>
                                               <img src="/mozaika/1.png" alt="instrution" class= "mod">
                                                                                      
                                           </li>
                                                                                      
                                           <li>Максимально приблизьте лица </li>
                                            <li>    <img src="/mozaika/2.png" alt="instrution" class= "mod">
                                           </li> -->
                                         
                                           
                                           <li> <img src="/mozaika/Q.gif" width="150%" alt="instrution" class= "mod"></li>
                                            <li>Максимально приблизьте лица </li>
                                           
                                           
                                            	<li>
											      Лучше качественные, светлые фотографии 	<br/>
						<br/>
											</li> </ul>
                                             
                                             	    
                                             	    	<ul></ul>
                                             	    	<li></ul>
                                             	    	<ul></ul>
											<br/>
				
											 <label class="input-file" > 
						        <input type="file" accept="image/png,image/jpeg" name="upload_image"  id="upload_image"  >   
						        <span>Далее</span> 
						      </label>
											 <div class="hero-cta">  <a class="button" href="index.html">Назад</a>	</div>
                                     
                             </div>
                                    </div>  
                                   <!--  <div class="pricing-table-cta mb-8">
                                       <a class="button button-primary button-shadow button-block" href="#">Pre order now</a>
                                   </div> -->
                              
               </div>
            </section>
           <!--   <div style='display: none' id="divnext">  -->
           <!--  <section class="hero"> -->
               </div>
                 
<div class = "feature text-center is-revealing" id="divnext" >
    
  <!--   // -->

 
 
     
<!--  // -->

<div  id ="image" > <div id ="images"  onclick="toggle_visibility('skryt'); setLoc('#')"></div></div><!-- data-toggle="modal" data-target="#myModal" перед онклик-->
 <div id ="image1" > <div id ="images1" onclick="toggle_visibility('skryt'); setLoc('#')"></div></div>
   <div id ="image2" > <div id ="images2" onclick="toggle_visibility('skryt'); setLoc('#')"></div></div> 
	 <div id ="image3" > <div id ="images3" onclick="toggle_visibility('skryt'); setLoc('#')"></div></div> 
	   <div id ="image4" > <div id ="images4" onclick="toggle_visibility('skryt'); setLoc('#')"></div></div>
					</div>
<!-- сохраняем для сборки 					
	<div  > <div id ="images_ABCD" ></div></div>					
				
					 </div> 
						<br/>
						<br/>-->
	
  			<div hidden id="uploaded_image"></div>
  				<canvas  hidden  id ="pixelitcanvas"  ></canvas><br/>
  					<canvas hidden id ="canv" width="576" height="832" ></canvas><br/>
  						<canvas hidden id ="canv1" width="576" height="832" ></canvas><br/>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////// для инструкции-->
<script>
//скрыть див пдф
 function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }
</script>
<!-- <button id="button"onclick="toggle_visibility('skryt');">Show/Hide</button> -->

 <div hidden id='skryt'> 
   <div class="container-fluid  yellow">
<div class="canvas_div_pdf"  id= "canvas_div_pdf">
<!-- <section id="new" class="new-section"> -->

      <div class="textt">
       <h4 font color="black" >   Инструкция по сборке</h4>
       <div id= "load">
    <span class="loader"></span>
    
</div>
       
      </div>
      <div class="shadow_img" id ="img1" ></div>
       <!--ADD_PAGE-->
      
      <div class="textt">	<h4  ><!-- align="center" -->
      Фотография разбита на секторы.	<br />
      В маленьком секторе 9х13 = 117 страз.	<br />
  Каждой стразинке соответствует цифра, обозначающая цвет	<br />
  Кристалл цвета, соответствующего цифре, надо установить на позицию на координатной сетке.	<br />
  Фотография разбита на 16 больших секторов : А1-А4, В1-В4, С1-С4, D1-D4.	<br />	<br /><br />
  Можно ориентируясь на секторы с экрана телефона или компьютера собирать мозаику.	<br />
  Удобно распечатать 4 страницы  и собирать с бумажной карты.	<br />
</h4></div>


<style>
   
</style>
      <div class="shadow_img" id ="img2" ></div>   

       <div class="textt">
       <h4  >  Распечатайте следующие 4 странцы для удобной сборки мозаики<br />
       </h4>
      </div>
      <div class="eximage" id ="img3" ></div>    
         <div class="textt"><h4  > 
       <div class="html2pdf__page-break"></div>
               Секторы В1, В2, В3, В4
       </h4></div>
    
      <div class="eximage" id ="img4" ></div>    
 <h1 style='page-break-before: always'>Letters</h1> <div class="html2pdf__page-break"></div>
        <div class="textt"> <h4  >  
               Секторы С1, С2, С3, С4
       </h4></div>
     
      <div class="eximage" id ="img5" ></div> 
       <h1 style='page-break-before: always'>Letters</h1> <div class="html2pdf__page-break"></div>
  <div class="textt"> <h4  >  
               Секторы D1, D2, D3, D4
       </h4></div>
     
      <div  class="eximage" id ="img6" ></div>

  </div>
   <div class="textt"> <h4  >  
              Нажав на кнопку "СОХРАНТЬ ПДФ" вы сохраните схему раскладки мозаики на<br /> 
              свое устройство в загрузки.<br /> 
              Откройте файл ПДФ и по нему собирайте мозаику, или<br /> 
              Распечатайте инструкцию на бумагу и сборка будет удобней<br /> 
              ВАЖНО! Каждый раз генерируется разная схема сборки. Если вы начали собирать <br /> 
              мозаику по одной схеме, то не получится ее продолжить по вновь сгенерированной.<br /> 
             
       </h4></div>
       <div align="center" >
    <batton   class="btn btn-primary" onclick=" getPDF()">СОХРАНИТЬ ПДФ</batton><br /> 
 	<br />	<br />
  </div></div>
<!-- </section> -->
 </div>   
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////// --> 
<style>
  .new-section {
/*   height: 100%;
 padding: 50px;
text-align: center;
background: #eee; */
}
.yellow {
  background-color: white;
}  
    
</style>
<div hidden>
  <br />
  <batton onclick="saveCanv()">canv save</batton>getPDF()
 
  <br />
  <batton onclick="canRgb()" class="btn btn-v ">Цифры по первому канвас</batton>	
  <br />
  <batton onclick="getGread()"> сетка</batton>
   <br />
  <batton onclick="fon1()" >AAAA</batton><batton onclick="fon2()"> BBBB</batton> <batton onclick="fon3()"> CCCC</batton> <batton onclick="fon4()"> DDDD</batton>
  <br />
  <batton onclick="newCanv()">canv новый с копией первого</batton>
  <br />
   <batton onclick="canRgbA()" >Цифры1 на белом фоне весь какнвас 1</batton>	<br />
    <br />
   <batton onclick="fon0()" >Цифры c фоном по всему</batton>	<br />
    <br />
     <batton onclick=" printImg1()" >сохраняем первый для пдф</batton> 
     <batton onclick=" printImg2()" >сохраняем второй белый фон с цыфрами для пдф</batton>
     <batton onclick=" printImg3()" >сохраняем А для пдф</batton>
     <batton onclick=" printImg4()" >сохраняем B для пдф</batton>
     <batton onclick=" printImg5()" >сохраняем C для пдф</batton>
     <batton onclick=" printImg6()" >сохраняем D для пдф</batton>
     
   	<br />
   
        </main>
<form method="post" action="" onsubmit="prepareImg();">
  <input id="inp_img" name="img" type="hidden" value="">
  <input id="bt_upload" type="submit" value="Upload">
</form>
	</div>
<?php
 
if (count($_POST) && (strpos($_POST['img'], 'data:image/png;base64') === 0)) {
     
  $img = $_POST['img'];
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $data = base64_decode($img);
  $file = 'uploads/img'.date("YmdHis").'.png';
   
  if (file_put_contents($file, $data)) {
     echo "<p>The canvas was saved as $file.</p>";
  } else {
     echo "<p>The canvas could not be saved.</p>";
  } 
   
}
                      
?>

<!-- <script src="https://cdn.jsdelivr.net/gh/AmagiTech/JSLoader/amagiloader.js"></script> //колесо загрузки -->
<!-- <script src="https://code.jquery.com/jquery-1.12.4.js"></script> -->

    <script src="dist/js/main.min.js"></script>
    

</body>

</html>

<script>
////pdf 2
 
			
			function getPDF(){

 
 
        
         var element = document.getElementById('canvas_div_pdf');
html2pdf(element);
html2pdf(element, {
  margin:       10,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
});
 /* var HTML_Width = $(".canvas_div_pdf").width();
	var HTML_Height = $(".canvas_div_pdf").height();
	var top_left_margin = 0;
	var PDF_Width = HTML_Width+(top_left_margin*2);
	var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
	var canvas_image_width = HTML_Width;
	var canvas_image_height = HTML_Height;
	
	var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
	
	
	    
	
	html2canvas($(".canvas_div_pdf")[0],{allowTaint:true}).then(function(canvas) {
	    canvas.getContext('2d');
	    
	    console.log(canvas.height+"  "+canvas.width);
	    
	    
	    var imgData = canvas.toDataURL("image/jpg", 1.0);
	    var pdf = new jsPDF('p', 'mm', 'a4', [PDF_Width, PDF_Height]);
	    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
	    
	    
	    for (var i = 1; i <= totalPDFPages; i++) { 
	        pdf.addPage(PDF_Width, PDF_Height);
	        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
	    }
	    
	    pdf.save("instruction_cristally.pdf"); 
	        });*/
	};
</script>

<!--  модальное окно 
 -->



 <div id="uploadimageModal" class="modal" role="dialog" > 
	
		<div class="modal-content"> <meta name="viewport" content="width=device-width, initial-scale=1"> 
      		<div class="modal-header"> 
        		<button type="button" class="close" data-dismiss="modal">&times;</button>
        		<h4 class="modal-title">Обрезать фото под размер</h4>
        	
      		</div>
      		<div class="modal-body">
        		<div class="row">
        		  
  				 <!-- <meta name="viewport" content="height=device-height, initial-scale=1"> --> 
					   <div class="center-fit" id="image_demo" style=" margin-top:30px"></div>
  					
  					<div  class="col-md-12" style="padding-top:30px;">
  						
  						<!--	<form action="/mozaika.html" target="_blank">	-->
					 	  <button class="btn btn-success crop_image" align="center" onclick="setLocation('#')">Обрезать фотографию</button>
			
						<h3 align="center" > Попробуйте несколько разных фотографий, прежде чем получить инструкцию.</h3>
        	 
				</div>
			
      		</div> </div>
      		<div class="modal-footer">
      		    	
        		<button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
      		</div>
    	</div>
   
</div> 

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="vertical-alignment-helper">
        <div class="modal-dialog vertical-align-center">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>

                    </button>
                     <h4 class="modal-title" id="myModalLabel"></h4>

                </div>
                <div class="modal-body-e">
                   
                         	
               <h3> Вы выбрали вариант.</h3>
          	<!--  <form method="post" class="new_form"> 
		    
			<input type="text" name="email" placeholder="Почта" required="">
	     <textarea name="mess" placeholder="Сообщение" required=""></textarea> 
			 <input type="submit" value="Отправить" class="btn btn-primary" > 
             
              </form>-->
	
                <div class="modal-footer">
                     <button type="button"  class="btn btn-default" data-dismiss="modal" onclick="toggle_visibility('skryt'); setLoc('#')">Далее</button>
                    <button type="button"  class="btn btn-default" data-dismiss="modal">Назад</button>
                   
                    <!-- <input type="submit" name="submit" class="btn btn-primary">Save changes</input> -->
                </div>
            </div>
        </div>
    </div>
</div>



















