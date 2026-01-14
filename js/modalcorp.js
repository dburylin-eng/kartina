// к модальному окну


   $(document).ready(function(){

    $image_crop = $('#image_demo').croppie({
    enableExif: false,
    viewport: {
       width:192,
      height:277,
      type:'square' //circle
      
    },
    boundary:{
      width:320,
      height:320
    }
  });

  $('#upload_image').on('change', function(){
    var reader = new FileReader();
    reader.onload = function (event) {
      $image_crop.croppie('bind', {
        url: event.target.result
      }).then(function(){
        console.log('jQuery bind complete');
      });
    }
    reader.readAsDataURL(this.files[0]);
    $('#uploadimageModal').modal('show');
  });

  $('.crop_image').click(function(event){
    $image_crop.croppie('result', {
      type: 'canvas',
      size:  {
       width:576,
      height:832,
      
    }
    
    }).then(function(response){
 // /  
  
      $.ajax({
        url:"upload.php",
        type: "POST",
        data:{"image": response},
        success:function(data)
        {
          $('#uploadimageModal').modal('hide');
         
          $('#uploaded_image').html(data); 
          
        } 
      })
//      
 .then(function(response){
 // /  

// AmagiLoader.show();
// setTimeout(() => {
 //   AmagiLoader.hide();
 //}, 3000);
 pixelitimg.onload = function() { 
     setTimeout(() => f(), 1000);
         setTimeout(() => f1(),3000);
           setTimeout(() => f2(),6000 );
               setTimeout(() => f3(),9000);
                   setTimeout(() => f4(),12000)
                 };

     
      });
     });
    })
});

// последовательное выполнение 
function f() {
    return new Promise(function(resolve){
         getDate();
            console.log(1);
            resolve();
        })
}

function f1() {
    return new Promise(function(resolve){
        getDate1();
            console.log(2);
            resolve();
        })
}
    function f2() {
    return new Promise(function(resolve){
       getDate2();
            console.log(3);
            resolve();
        })
    }

         function f3() {
    return new Promise(function(resolve){
       getDate3();
            console.log(4);
            resolve();
        }) 
}

 function f4() {
    return new Promise(function(resolve){
        getDate4();
            console.log(5);
            resolve();
        })
}





//вызов 


function f0() {
    f().then(function() {
  return f1();
 }).then(function() {
  return f2();
 }).then(function() {
  return f3();
 }).then(function() {
  return f4();
 }).then(function() {
  console.log('Done!');
 });
}