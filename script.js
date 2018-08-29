//var asi = document.getElementById("click");
var mario = new Audio("mario.mp3");
mario.play();
 var du = document.getElementById("sas");
var jam = document.getElementById("jam");
var circel = document.getElementById("circel");
var horiz = document.getElementById("horiz").classList;
var bod = document.getElementById("body");
var bod_list = document.getElementById("body").classList;
var atam_up = document.getElementById("atam_up");
var atam_up_2 = document.getElementById("atam_up_2");
var atam_up_3 = document.getElementById("atam_up_3");
var nkar_down = document.getElementById("nkar_down");
var nkar_down_2 = document.getElementById("nkar_down_2");
var nkar_down_3 = document.getElementById("nkar_down_3");
var tev_list = document.getElementById("tev").classList;
var beast_1 = document.getElementById("beast_1");
var place_birds = document.getElementById("place_birds");
var heart = document.getElementById("heart");
var heart_img = document.getElementById("heart_img");
var her_pak = heart_img.cloneNode(true);
var her_pak_2 = heart_img.cloneNode(true);
var pak = beast_1.cloneNode(true);
var pak_2 = beast_1.cloneNode(true);
var pak_3 = beast_1.cloneNode(true);
var pak_4 = beast_1.cloneNode(true);

heart.appendChild(her_pak);
heart.appendChild(her_pak_2);
place_birds.appendChild(pak);
place_birds.appendChild(pak_2);
place_birds.appendChild(pak_3);
place_birds.appendChild(pak_4);
var birds = document.getElementById("birds");
var truba_down = document.getElementById("truba_down");
var truba_down_2 = document.getElementById("truba_down_2");
var truba_down_3 = document.getElementById("truba_down_3");
var truba_down_4 = document.getElementById("truba_down_4");
var truba_down_5 = document.getElementById("truba_down_5");
var truba_down_6 = document.getElementById("truba_down_6");
var truba_down_7 = document.getElementById("truba_down_7");
var truba_up = document.getElementById("truba_up");
var truba_up_2 = document.getElementById("truba_up_2");
var truba_up_3 = document.getElementById("truba_up_3");
var truba_up_4 = document.getElementById("truba_up_4");
var truba_up_5 = document.getElementById("truba_up_5");
var truba_up_6 = document.getElementById("truba_up_6");
var truba_up_7 = document.getElementById("truba_up_7");
  var krvel_tak = 0;
  var krvel_kox = 0;
  var krvel_verev_1 = 0;
var krvel_tak_2 = 0;
  var krvel_kox_2 = 0;
  var krvel_verev_2 = 0;
var krvel_tak_3 = 0;
  var krvel_kox_3 = 0;
  var krvel_verev_3 = 0;
var krvel_tak_4 = 0;
  var krvel_kox_4 = 0;
  var krvel_verev_4 = 0;
var krvel_tak_5 = 0;
  var krvel_kox_5 = 0;
  var krvel_verev_5 = 0;
var krvel_tak_6 = 0;
  var krvel_kox_6 = 0;
  var krvel_verev_6 = 0;
var krvel_tak_7 = 0;
  var krvel_kox_7 = 0;
  var krvel_verev_7 = 0;
  var atam_krvel_up = 0;
  var atam_krvel_down = 0;
  var atam_krvel_kox = 0;
var atam_krvel_up_2 = 0;
  var atam_krvel_down_2 = 0;
  var atam_krvel_kox_2 = 0;
var atam_krvel_up_3 = 0;
  var atam_krvel_down_3 = 0;
  var atam_krvel_kox_3 = 0;
atam_up.style.top = -50 + "%";
atam_up_2.style.top = -50 + "%";
atam_up_3.style.top = -50 + "%";
var array = [];
var array_1 = [];
for(var i = 0; i < 500; i+= 20){
    array.push(i);
}
for(var j = 0; j < 1500; j+= 20){
    array_1.push(j);
}
    var a_1 =0;  
    var a_2 =0; 
var a_3 =0;  
    var a_4 =0; 
var a_5 =0;  
    var a_6 =0; 
var a_7 =0;  
    var a_8 =0; 
var a_9 =0;  
    var a_10 =0; 
var a_11 =0;  
    var a_12 =0; 
var a_13 =0;  
    var a_14 =0; 
var a_15 =0;  
    var a_16 =0; 
function hresh(){
    a_1 = Math.floor(Math.random() * 20);
    a_2 = Math.floor(Math.random() * 40);
    a_3 = Math.floor(Math.random() * 20);
    a_4 = Math.floor(Math.random() * 40);
    a_5 = Math.floor(Math.random() * 20);
    a_6 = Math.floor(Math.random() * 40);
    a_7 = Math.floor(Math.random() * 20);
    a_8 = Math.floor(Math.random() * 40);
    a_9 = Math.floor(Math.random() * 20);
    a_10 = Math.floor(Math.random() * 40);
    a_11 = Math.floor(Math.random() * 20);
    a_12 = Math.floor(Math.random() * 40);
    a_13 = Math.floor(Math.random() * 20);
    a_14 = Math.floor(Math.random() * 40);
    a_15 = Math.floor(Math.random() * 20);
    a_16 = Math.floor(Math.random() * 40);
 setTimeout(function(){
    beast_1.style.marginTop = array[a_1] + "px";
    beast_1.style.marginLeft = array_1[a_2] + "px";
    pak.style.marginTop = array[a_3] + "px";
    pak.style.marginLeft = array_1[a_4] + "px";
    pak_2.style.marginTop = array[a_5] + "px";
    pak_2.style.marginLeft = array_1[a_6] + "px";
    pak_3.style.marginTop = array[a_7] + "px";
    pak_3.style.marginLeft = array_1[a_8] + "px";
    pak_4.style.marginTop = array[a_9] + "px";
    pak_4.style.marginLeft = array_1[a_10] + "px";
     
    heart_img.style.marginTop = 500 + "px";
    heart_img.style.marginLeft = 400 + "px";
     her_pak.style.marginTop = array[a_13] + "px";
    her_pak.style.marginLeft = array_1[a_14] + "px";
     her_pak_2.style.marginTop = array[a_15] + "px";
    her_pak_2.style.marginLeft = array_1[a_16] + "px";
    }, 2000);
   
        
    }
hresh();
    //setInterval(hresh, 1000);
//alert(array[a_1]);
//var a = birds.offsetLeft + birds.offsetWidth;
var deg = 0;
var rel= 0;
var x = 0;
var y = 0;
var deg1 = 0;
var deg2 = 0;
var deg3 = 0;
var deg4 = 0;
var minus_his = -450;
var minus_his_2 = -550;
var minus_his_3 = -350;
var emp = 0;
var fast_count = 0;
var rem_fast = 0;
var num = 0;
var num_2 = 0;
var num_3 = 0;
var num_4 = 0;
var num_5 = 0;
var num_6 = 0;
var num_7 = 0;
var num_8 = 0;
var num_9 = 0;
var num_10 = 0;
var num_11 = 0;
   function moment(){
       
    a_1 = Math.floor(Math.random() * 20);
    a_2 = Math.floor(Math.random() * 40);
    a_3 = Math.floor(Math.random() * 20);
    a_4 = Math.floor(Math.random() * 40);
    a_5 = Math.floor(Math.random() * 20);
    a_6 = Math.floor(Math.random() * 40);
    a_7 = Math.floor(Math.random() * 20);
    a_8 = Math.floor(Math.random() * 40);
    a_9 = Math.floor(Math.random() * 20);
    a_10 = Math.floor(Math.random() * 40);
    
   }
setInterval(moment, 1000);
function name(){
    var min_count_em = document.getElementById("min_count_em");
    num_11+=1;
   min_count_em.innerHTML = num_11 + "/n";
    
var truba = document.getElementById("truba_1");
var truba_2 = document.getElementById("truba_2");
var truba_3 = document.getElementById("truba_3");
var truba_4 = document.getElementById("truba_4");
var truba_5 = document.getElementById("truba_5");
var truba_6 = document.getElementById("truba_6");
var truba_7 = document.getElementById("truba_7");
    var atam = document.getElementById("hiden");
    var atam_2 = document.getElementById("hiden_2");
    var atam_3 = document.getElementById("hiden_3");
    var hashiv = document.getElementById("count_b");
    var hashiv_has = document.getElementById("count_b").classList;
    
    //var beast = document.getElementById("beasts");
    
    var cit = new Audio("cit.mp3");
    du.style.marginLeft = -deg +"px";
    truba.style.marginLeft = -deg +"px";
    truba_2.style.marginLeft = -deg +"px";
    truba_3.style.marginLeft = -deg +"px";
    truba_4.style.marginLeft = -deg +"px";
    truba_5.style.marginLeft = -deg +"px";
    truba_6.style.marginLeft = -deg +"px";
    truba_7.style.marginLeft = -deg +"px";
    atam.style.marginLeft = -deg +"px";
    //atam_2.style.marginLeft = -deg +"px";
    
    beast_1.style.marginTop = array[a_1] + "px";
    pak.style.marginTop = array[a_3] + "px";
    pak_2.style.marginTop = array[a_5] + "px";
    pak_3.style.marginTop = array[a_7] + "px";
        pak_4.style.marginTop = array[a_9] + "px";
    beast_1.style.marginLeft = -deg +array_1[a_2] +"px";
    pak.style.marginLeft = -deg + array_1[a_4] +"px";
    pak_2.style.marginLeft = -deg + array_1[a_6] +"px";
    pak_3.style.marginLeft = -deg + array_1[a_8] +"px";
    pak_4.style.marginLeft = -deg + array_1[a_10] +"px";
    
     
    heart_img.style.marginLeft =-deg + array_1[a_12] + "px";
    her_pak.style.marginLeft =-deg + array_1[a_14] + "px";
    her_pak_2.style.marginLeft = -deg + array_1[a_16] + "px";
   
    
     krvel_tak = truba_down.offsetTop + truba_down.offsetHeight;
     krvel_tak_2 = truba_down_2.offsetTop + truba_down_2.offsetHeight;
     krvel_tak_3 = truba_down_3.offsetTop + truba_down_3.offsetHeight;
     krvel_tak_4 = truba_down_4.offsetTop + truba_down_4.offsetHeight;
     krvel_tak_5 = truba_down_5.offsetTop + truba_down_5.offsetHeight;
     krvel_tak_6 = truba_down_6.offsetTop + truba_down_6.offsetHeight;
     krvel_tak_7 = truba_down_7.offsetTop + truba_down_7.offsetHeight;
     atam_krvel_up =atam_up.offsetTop + atam_up.offsetHeight;
     atam_krvel_up_2 =atam_up_2.offsetTop + atam_up_2.offsetHeight;
     atam_krvel_up_3 =atam_up_3.offsetTop + atam_up_3.offsetHeight;
       //atam_up.style.top = minus_his +"px";       
    /*alert(atam_krvel_up);
              alert(birds.offsetTop);*/
     atam_krvel_kox = atam.offsetLeft;
     atam_krvel_kox_2 = atam_2.offsetLeft;
     atam_krvel_kox_3 = atam_3.offsetLeft;
     atam_krvel_down = nkar_down.offsetTop + atam_up.offsetHeight;
     atam_krvel_down_2 = nkar_down_2.offsetTop + atam_up_2.offsetHeight;
     atam_krvel_down_3 = nkar_down_3.offsetTop + atam_up_3.offsetHeight;
     krvel_kox = truba.offsetLeft;
     krvel_kox_2 = truba_2.offsetLeft;
     krvel_kox_3 = truba_3.offsetLeft;
     krvel_kox_4 = truba_4.offsetLeft;
     krvel_kox_5 = truba_5.offsetLeft;
     krvel_kox_6 = truba_6.offsetLeft;
     krvel_kox_7 = truba_7.offsetLeft;
     krvel_verev_1 = truba_up.offsetTop;
     krvel_verev_2 = truba_up_2.offsetTop;
     krvel_verev_3 = truba_up_3.offsetTop;
     krvel_verev_4 = truba_up_4.offsetTop;
     krvel_verev_5 = truba_up_5.offsetTop;
     krvel_verev_6 = truba_up_6.offsetTop;
     krvel_verev_7 = truba_up_7.offsetTop;
    
   
    deg += 5;
   setTimeout(function(){
       var speed = document.getElementById("modal").classList;
       var proggres = document.getElementById("proggres").classList;
       minus_his += 10;
       minus_his_2 += 10;
       minus_his_3 += 10;
       if(minus_his == 400){
               
                 emp+=1;
           
             function fast_bidrs(){
                 if(emp === 1){
                 var a = 10;
                jam.innerHTML = a;
                function hour(){
                a--;    
                    if(a < 0){
                        jam.innerHTML = 0;
                    }
                    else {
                        
                jam.innerHTML = a;
                    }

                }
                    
                    setInterval(hour, 1000);
                     circel.style.display = "block";
                     horiz.add("loader");
                 speed.add("speed_new");
                 proggres.add("proggres_new");
                     window.addEventListener('keypress', arag_birds);
              setTimeout(function(){
                     
                  speed.remove("speed_new");
                 }, 2000);
                     setTimeout(function(){
                     circel.style.display = "none";
                    proggres.remove("proggres_new");
                     window.removeEventListener('keypress', arag_birds);
                     }, 10000);
                 }
               
            }
           fast_bidrs();
           
       }
      
          if(minus_his < 0){ 
        atam_up.style.top = minus_his +"px";
        nkar_down.style.top = -minus_his +"px";
              atam_krvel_up =atam_up.offsetTop + atam_up.offsetHeight;
            atam_krvel_down = nkar_down.offsetTop + atam_up.offsetHeight;
            
        } 
          if(minus_his > 0){   
            atam_up.style.top = -minus_his+"px";
            nkar_down.style.top = minus_his+"px";
            atam_krvel_up =atam_up.offsetTop + atam_up.offsetHeight;
            atam_krvel_down = nkar_down.offsetTop + atam_up.offsetHeight;
    
               if(minus_his == 450){
               minus_his = -450;
               }  
        }
       if(minus_his_2 < 0){ 
            atam_up_2.style.top = minus_his_2 +"px";
            nkar_down_2.style.top = -minus_his_2+"px";
            atam_krvel_up_2 =atam_up_2.offsetTop + atam_up_2.offsetHeight;
            atam_krvel_down_2 = nkar_down_2.offsetTop + atam_up_2.offsetHeight;
              
        } 
          if(minus_his_2 > 0){   
            atam_up_2.style.top = -minus_his_2 +"px";
            nkar_down_2.style.top = minus_his_2+"px";
            atam_krvel_up_2 =atam_up_2.offsetTop + atam_up_2.offsetHeight;
            atam_krvel_down_2 = nkar_down_2.offsetTop + atam_up_2.offsetHeight;
               if(minus_his_2 == 550){
               minus_his_2 = -550;
               } 
        }
       if(minus_his_3 < 0){ 
            atam_up_3.style.top = minus_his_3 +"px";
            nkar_down_3.style.top = -minus_his_3+"px";
            atam_krvel_up_3 =atam_up_3.offsetTop + atam_up_3.offsetHeight;
            atam_krvel_down_3 = nkar_down_3.offsetTop + atam_up_3.offsetHeight;
              
        } 
          if(minus_his_3 > 0){   
            atam_up_3.style.top = -minus_his_3 +"px";
            nkar_down_3.style.top = minus_his_3+"px";
            atam_krvel_up_3 =atam_up_3.offsetTop + atam_up_3.offsetHeight;
            atam_krvel_down_3 = nkar_down_3.offsetTop + atam_up_3.offsetHeight;
               if(minus_his_3 == 350){
               minus_his_3 = -350;
               } 
        }
    }, 40000);
    //alert("asdsa");
    /*alert(birds.offsetLeft +"left");
    alert(beast_1.offsetLeft +"left_b");*/
    
    // srtikner
         
    if( birds.offsetLeft >krvel_kox +30 && birds.offsetLeft <krvel_kox + 40){
        
        num =0;
        hashiv.innerHTML = "0 n";
            function hash(){
            num+=1;
            if(num < 11){
                hashiv.innerHTML = num + " n";
            }
            
            }
       
        setInterval(hash, 70);
        hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 800);
    }
   else if( birds.offsetLeft >krvel_kox_2 +30 && birds.offsetLeft <krvel_kox_2 + 40){
       
       num_2 =10;
        hashiv.innerHTML = "10 n";
            function hash_2(){
            num_2+=1;
            if(num_2 < 21){
                hashiv.innerHTML = num_2 +" n";
            }
            
            }
       
        setInterval(hash_2, 70);
       hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 800);
    }
   else if( birds.offsetLeft >krvel_kox_3 +30 && birds.offsetLeft <krvel_kox_3 + 40){
       
       num_3 =20;
        hashiv.innerHTML = "20 n";
            function hash_3(){
            num_3+=1;
            if(num_3 < 31){
                hashiv.innerHTML = num_3 +" n";
            }
            
            }
       
        setInterval(hash_3, 70);
       hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 800);
    }
    else if( birds.offsetLeft >krvel_kox_4 +30 && birds.offsetLeft <krvel_kox_4 + 40){
        
       num_4 =30;
        hashiv.innerHTML = "30 n";
            function hash_4(){
            num_4+=1;
            if(num_4 < 41){
                hashiv.innerHTML = num_4 +" n";
            }
            
            }
       
        setInterval(hash_4, 70);
        hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 800);
    }
    else if( birds.offsetLeft >krvel_kox_5 +30 && birds.offsetLeft <krvel_kox_5 + 40){
        
       num_5 =40;
        hashiv.innerHTML = "40 n";
            function hash_5(){
            num_5+=1;
            if(num_5 < 51){
                hashiv.innerHTML = num_5 +" n";
            }
            
            }
       
        setInterval(hash_5, 70);
        hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 800);
    }
    else if( birds.offsetLeft >krvel_kox_6 +30 && birds.offsetLeft <krvel_kox_6 + 40){
        
       num_6 =50;
        hashiv.innerHTML = "50 n";
            function hash_6(){
            num_6+=1;
            if(num_6 < 61){
                hashiv.innerHTML = num_6 +" n";
            }
            
            }
       
        setInterval(hash_6, 70);
        hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 800);
    }
   else if( birds.offsetLeft >krvel_kox_7 +30 && birds.offsetLeft <krvel_kox_7 + 40){
       
       num_7 =60;
        hashiv.innerHTML = "60 n";
            function hash_7(){
            num_7+=1;
            if(num_7 < 71){
                hashiv.innerHTML = num_7 +" n";
            }
            
            }
       
        setInterval(hash_7, 70);
       hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 800);
    }
    else if( birds.offsetLeft >atam_krvel_kox +60 && birds.offsetLeft <atam_krvel_kox + 70){
        
       num_8 =70;
        hashiv.innerHTML = "70 n";
            function hash_8(){
            num_8+=1;
            if(num_8 < 91){
                hashiv.innerHTML = num_8 +" n";
            }
            
            }
       
        setInterval(hash_8, 70);
        hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 1500);
    }
    else if( birds.offsetLeft >atam_krvel_kox_2 +60 && birds.offsetLeft <atam_krvel_kox_2 + 70){
        
       num_9 =90;
        hashiv.innerHTML = "90 n";
            function hash_9(){
            num_9+=1;
            if(num_9 < 111){
                hashiv.innerHTML = num_9 + " n";
            }
            
            }
       
        setInterval(hash_9, 70);
        hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 1500);
    }
    else if( birds.offsetLeft >atam_krvel_kox_3 +60 && birds.offsetLeft <atam_krvel_kox_3 + 70){
        
       num_10 =110;
        hashiv.innerHTML = "110 n";
            function hash_10(){
            num_10+=1;
            if(num_10 < 131){
                hashiv.innerHTML = num_10 + " n";
            }
            
            }
       
        setInterval(hash_10, 70);
        hashiv_has.add("red_class");
         setTimeout(function(){
            
       hashiv_has.remove("red_class");
         }, 1500);
    }
    else if(birds.offsetLeft > heart_img.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < heart_img.offsetLeft + birds.offsetWidth  -20 && birds.offsetTop < heart_img.offsetTop + heart_img.offsetHeight -10 && birds.offsetTop > heart_img.offsetTop - birds.offsetHeight +30){
         place_birds.removeChild(pak);
       
        heart_img.style.display = "none";
       }
    else if(birds.offsetLeft > her_pak.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < her_pak.offsetLeft + birds.offsetWidth  -20 && birds.offsetTop < her_pak.offsetTop + her_pak.offsetHeight -10 && birds.offsetTop > her_pak.offsetTop - birds.offsetHeight +30){
        place_birds.removeChild(pak_2);
        heart.removeChild(her_pak);
       }
    else if(birds.offsetLeft > her_pak_2.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < her_pak_2.offsetLeft + birds.offsetWidth  -20 && birds.offsetTop < her_pak_2.offsetTop + her_pak_2.offsetHeight -10 && birds.offsetTop > her_pak_2.offsetTop - birds.offsetHeight +30){
        place_birds.removeChild(pak);
        heart.removeChild(her_pak_2);
       } 
    
    // verj srtiknerin
    
    // hreshner
     else if(birds.offsetLeft > beast_1.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < beast_1.offsetLeft + birds.offsetWidth  -20 && birds.offsetTop < beast_1.offsetTop + beast_1.offsetHeight -10 && birds.offsetTop > beast_1.offsetTop - birds.offsetHeight +30){
          clearInterval(deg4);    
         mario.pause();
       tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    else if(birds.offsetLeft > pak.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < pak.offsetLeft + birds.offsetWidth -20 && birds.offsetTop < pak.offsetTop + pak.offsetHeight -10 && birds.offsetTop > pak.offsetTop - birds.offsetHeight +30){
          clearInterval(deg4);    
        mario.pause();
       tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    else if(birds.offsetLeft > pak_2.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < pak_2.offsetLeft + birds.offsetWidth -20 && birds.offsetTop < pak_2.offsetTop + pak_2.offsetHeight -10 && birds.offsetTop > pak_2.offsetTop - birds.offsetHeight +30){
          clearInterval(deg4);    
        mario.pause();
       tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    else if(birds.offsetLeft > pak_3.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < pak_3.offsetLeft + birds.offsetWidth -20 && birds.offsetTop < pak_3.offsetTop + pak_3.offsetHeight -10 && birds.offsetTop > pak_3.offsetTop - birds.offsetHeight +30){
          clearInterval(deg4);    
        mario.pause();
       tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
     else if(birds.offsetLeft > pak_4.offsetLeft - birds.offsetWidth +20 && birds.offsetLeft < pak_4.offsetLeft + birds.offsetWidth -20 && birds.offsetTop < pak_4.offsetTop + pak_4.offsetHeight -10 && birds.offsetTop > pak_4.offsetTop - birds.offsetHeight +30){
          clearInterval(deg4);    
         mario.pause();
       tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    //verej hreshnerin
    //atamner
  

   else if(birds.offsetTop < atam_krvel_up && birds.offsetLeft > atam_krvel_kox - birds.offsetWidth +10 && birds.offsetLeft < atam_krvel_kox + atam_up.offsetWidth){
       mario.pause();
    clearInterval(deg4); 
        tev_list.add("kayni");
              
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
      // cit.play();
       }
    else if(birds.offsetTop > atam_krvel_down - birds.offsetHeight +15 && birds.offsetLeft > atam_krvel_kox - birds.offsetWidth +10 && birds.offsetLeft < atam_krvel_kox + atam_down.offsetWidth){
    clearInterval(deg4);
        mario.pause();
        tev_list.add("kayni");
              
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
      // cit.play();
       }
     else if(birds.offsetTop < atam_krvel_up_2 && birds.offsetLeft > atam_krvel_kox_2 - birds.offsetWidth +10 && birds.offsetLeft < atam_krvel_kox_2 + atam_up_2.offsetWidth){
    clearInterval(deg4);
         mario.pause();
        tev_list.add("kayni");
              
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
      // cit.play();
       }
    else if(birds.offsetTop > atam_krvel_down_2 - birds.offsetHeight +15 && birds.offsetLeft > atam_krvel_kox_2 - birds.offsetWidth +10 && birds.offsetLeft < atam_krvel_kox_2 + atam_down_2.offsetWidth){
    clearInterval(deg4);
        mario.pause();
        tev_list.add("kayni");
              
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
      // cit.play();
       }
     else if(birds.offsetTop < atam_krvel_up_3 && birds.offsetLeft > atam_krvel_kox_3 - birds.offsetWidth +10 && birds.offsetLeft < atam_krvel_kox_3 + atam_up_3.offsetWidth){
    clearInterval(deg4);
         mario.pause();
        tev_list.add("kayni");
              
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
      // cit.play();
       }
    else if(birds.offsetTop > atam_krvel_down_3 - birds.offsetHeight +15 && birds.offsetLeft > atam_krvel_kox_3 - birds.offsetWidth +10 && birds.offsetLeft < atam_krvel_kox_3 + atam_down_3.offsetWidth){
    clearInterval(deg4);
        mario.pause();
        tev_list.add("kayni");
              
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
      // cit.play();
       }
    
    // verj atamnerin
    // trubeq
   else if(birds.offsetTop < krvel_tak - 5 && birds.offsetLeft > krvel_kox - birds.offsetWidth && birds.offsetLeft < krvel_kox + truba.offsetWidth ){
   clearInterval(deg4);
       mario.pause();
       tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
    cit.play();    
   }
     else if(birds.offsetTop > krvel_tak + birds.offsetHeight -10 && birds.offsetLeft > krvel_kox - birds.offsetWidth +10 && birds.offsetLeft < krvel_kox + truba.offsetWidth){
clearInterval(deg4); 
         mario.pause();
       tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    
    
    
    else if(birds.offsetTop < krvel_tak_2 - 5 && birds.offsetLeft > krvel_kox_2 - birds.offsetWidth && birds.offsetLeft < krvel_kox_2 + truba_2.offsetWidth ){
    clearInterval(deg4); 
        mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
    cit.play();    
   }
  else if(birds.offsetTop > krvel_tak_2 + birds.offsetHeight -10 && birds.offsetLeft > krvel_kox_2 - birds.offsetWidth +10 && birds.offsetLeft < krvel_kox_2 + truba_2.offsetWidth){
    clearInterval(deg4);
      mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    
    
    
     else if(birds.offsetTop < krvel_tak_3 - 5 && birds.offsetLeft > krvel_kox_3 - birds.offsetWidth && birds.offsetLeft < krvel_kox_3 + truba_3.offsetWidth ){
    clearInterval(deg4); 
         mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
    cit.play();    
   }
  else if(birds.offsetTop > krvel_tak_3 + birds.offsetHeight -10 && birds.offsetLeft > krvel_kox_3 - birds.offsetWidth +10 && birds.offsetLeft < krvel_kox_3 + truba_3.offsetWidth){
    clearInterval(deg4); 
      mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    
    
       else if(birds.offsetTop < krvel_tak_4 - 5 && birds.offsetLeft > krvel_kox_4 - birds.offsetWidth && birds.offsetLeft < krvel_kox_4 + truba_4.offsetWidth ){
    clearInterval(deg4); 
           mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
    cit.play();    
   }
  else if(birds.offsetTop > krvel_tak_4 + birds.offsetHeight -10 && birds.offsetLeft > krvel_kox_4 - birds.offsetWidth +10 && birds.offsetLeft < krvel_kox_4 + truba_4.offsetWidth){
    clearInterval(deg4); 
      mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    
    
      else if(birds.offsetTop < krvel_tak_5 - 5 && birds.offsetLeft > krvel_kox_5 - birds.offsetWidth && birds.offsetLeft < krvel_kox_5 + truba_5.offsetWidth ){
    clearInterval(deg4); 
          mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
    cit.play();    
   }
  else if(birds.offsetTop > krvel_tak_5 + birds.offsetHeight -10 && birds.offsetLeft > krvel_kox_5 - birds.offsetWidth +10 && birds.offsetLeft < krvel_kox_5 + truba_5.offsetWidth){
    clearInterval(deg4); 
      mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    
    
     else if(birds.offsetTop < krvel_tak_6 - 5 && birds.offsetLeft > krvel_kox_6 - birds.offsetWidth && birds.offsetLeft < krvel_kox_6 + truba_6.offsetWidth ){
    clearInterval(deg4); 
         mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
    cit.play();    
   }
  else if(birds.offsetTop > krvel_tak_6 + birds.offsetHeight -10 && birds.offsetLeft > krvel_kox_6 - birds.offsetWidth +10 && birds.offsetLeft < krvel_kox_6 + truba_6.offsetWidth){
    clearInterval(deg4); 
      mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
    
    
    else if(birds.offsetTop < krvel_tak_7 - 5 && birds.offsetLeft > krvel_kox_7 - birds.offsetWidth && birds.offsetLeft < krvel_kox_7 + truba_7.offsetWidth ){
    clearInterval(deg4); 
        mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
    cit.play();    
   }
  else if(birds.offsetTop > krvel_tak_7 + birds.offsetHeight -10 && birds.offsetLeft > krvel_kox_7 - birds.offsetWidth +10 && birds.offsetLeft < krvel_kox_7 + truba_7.offsetWidth){
    clearInterval(deg4); 
      mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
       clearInterval(fast);
       clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
       window.removeEventListener('keyup', moveStop); 
       cit.play();
       }
  // verj trubeqin
   
}
fast = setInterval(name, 100);
function down_left(){
    setTimeout(function(){
        bod.style.transition = "all 0.5s";
        bod.style.transform = 'rotate(45deg)';
        
    }, 100);
    var dus = document.getElementById("sas");
   
    x += 1;
    //y += 0.1;
    //birds.style.marginLeft = y + "px";
    birds.style.marginTop = x + "px";
 if(birds.offsetTop >dus.offsetHeight - dus.offsetHeight/4- 40 && birds.offsetTop <dus.offsetHeight - dus.offsetHeight/4- 30){
        bod_list.add("fral");
        tev_list.add("kayni");
        mario.pause();
    clearInterval(deg1);
    clearInterval(fast);
     setTimeout(function(){
        window.location.reload();
     }, 1500);
    
 };
}
deg1 = setInterval(down_left, 5);
function up(){
    var duss = document.getElementById("sas");
     if(birds.offsetTop < 5){
         mario.pause();
        tev_list.add("kayni");
         bod_list.add("fral_nerqev");
         clearInterval(deg2);
         deg1 = setInterval(down_left, 1);
         clearInterval(fast);
          window.removeEventListener('keyup', moveStop);   
         
        
 };
    x -= 1;
    y += 0.1;
birds.style.marginLeft = y + "px";
    birds.style.marginTop = x + "px";
    
    
    setTimeout(function(){
        bod.style.transition = "all 0.4s";
        bod.style.transform = 'rotate(-15deg)';
        
    }, 100);
}
function speed_birds(){
    var red = document.getElementById("red");
    var yelow = document.getElementById("yellow");
    var green = document.getElementById("green");
    fast_count+=0.5;
    
    if(fast_count < 30){
        if(rem_fast == 1){
            red.style.background = "-webkit-gradient(linear, 0 0, 100% 100%, from(white), to(lightblue))";
            red.style.backgroundSize = "10% 100%";
        }
    if(rem_fast == 3){
            green.style.background = "-webkit-gradient(linear, 0 0, 100% 100%, from(white), to(lightblue))";
            red.style.backgroundSize = "10% 100%";
        }
         if(rem_fast == 2){
            yellow.style.background = "-webkit-gradient(linear, 0 0, 100% 100%, from(white), to(lightblue))";
            red.style.backgroundSize = "10% 100%";
        }
    window.removeEventListener('keydown', moveBirds);
    y +=4;
    birds.style.marginLeft = y + "px";
    setTimeout(function(){
        bod.style.transition = "all 0.4s";
        bod.style.transform = 'rotate(15deg)';
    }, 100);
       
    }
   if(fast_count >=30){
       hashvich_1 =0;
       clearInterval(deg4);
        deg1 = setInterval(down_left, 5);
         window.addEventListener('keydown', moveBirds);
        }
     
}
var hashvich = 0;
        var hashvich_1 = 0;
//birds.offsetLeft == krvel_1 - birds.offsetWidth
window.addEventListener('keydown', moveBirds);


window.addEventListener('keyup', moveStop);
function arag_birds(e){
    if(e.keyCode === 32){
        hashvich_1++;
        if(hashvich_1 == 1){
            rem_fast++;
            fast_count = 0;
    deg4 =setInterval(speed_birds, 10);
        clearInterval(deg1);
        clearInterval(deg2);
        
        }
    }
    
 
}
        
function moveStop(e){
    if(e.keyCode === 38){
        hashvich = 0;
        deg1 = setInterval(down_left, 5);
        clearInterval(deg2);
        
        //clearInterval(fast);
    }
  
}
    function moveBirds(e){
        if(e.keyCode === 38){
            hashvich++;
                //alert("asd");
            if(hashvich == 1){
                //fast = setInterval(name, 10);
            deg2 = setInterval(up, 10);
            clearInterval(deg1); 
            }
        }
       
    }