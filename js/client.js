$(function(){

//start to preventDefault nav-tap  
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
//end to preventDefault nav-tap  


    
    
    
    
    
                var imgNumber = 1;
            localStorage.setItem('num',imgNumber);
/*            $('#bb').click(function(){
                  var intt = localStorage.getItem('num');
                  var integer = parseInt(intt);
                  integer = integer + Math.floor((Math.random() * 10));
                  console.log("B"+integer);
                var ddd =  `url('img/bg${integer}.jpg')`;
                  console.log(ddd);
                  $(".login").css('background-image',ddd)
         })*/
    $(function(){
                  var intt = localStorage.getItem('num');
                  var integer = parseInt(intt);
                  integer = integer + Math.floor((Math.random() * 10));
                  console.log("B"+integer);
                  var ddd =  `url('img/bg${integer}.jpg')`;
                  console.log(ddd);
                  $(".login").css('background-image',ddd)
        
        
    });        
            
// height of login in login page
    var s = $(window).height();
    $('.login').innerHeight(s - 100);
    
    
    
    
    

});

//document.write("sssssssssssss")