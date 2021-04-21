 jQuery(document).ready(function(){
     
   "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,
       
    });
  
     $(".text").typed({
        strings:["<strong>one step</strong><strong class='primary'> .</strong>","<strong>at a</strong><strong class='primary'> time !!.</strong>"],
         typespeed:0,
         loop:true
         
     });
 });