var helmut=document.getElementById('helmut');
var height =window.screen.availHeight;
var width=window.screen.availWidth;
var Numberkill=0;
var settings=document.getElementById('settings');
settings.zIndex=3;
// S e t t i n g s

function closeFunction() {
    if (settings.style.display !== "none") {
        settings.style.display = "none";
      } else {
        settings.style.display = "block";
      }
  }
const button2=document.querySelector('.sett-button');
button2.addEventListener('click',()=>{
    closeFunction();
})

const button=document.querySelector('.close');
button.addEventListener('click',() => {
    closeFunction();
})


setInterval(function(){document.getElementById("greeting").innerHTML = "Kills:"+Numberkill},0);
var musicNumber =0;
const soundbtn=document.querySelector('.play-sound-btn');
soundbtn.addEventListener('click',()=>{
    musicNumber=musicNumber+1;
    if(musicNumber%2==0){
        document.getElementById('music').style.backgroundColor = 'green';  
        startBnatural();}else{
            stopBnatural();
        
                 document.getElementById('music').style.backgroundColor = 'Red';  
        }});

var el = window.getComputedStyle(helmut);
var tpValue = el.getPropertyValue("bottom").replace("px", "");
var lftValue = el.getPropertyValue("left").replace("px", "");



function moveDown(element) {
    
    var elStyle = window.getComputedStyle(element);
    var topValue = elStyle.getPropertyValue("top").replace("px", "");
    if(topValue<0-parseInt(height/100*12)){
    element.style.top = (Number(topValue) + 10) + "px";
    }

}

function moveUp(element) {
    var elStyle = window.getComputedStyle(element);
    var topValue = elStyle.getPropertyValue("top").replace("px", "");
        if(topValue>-height+parseInt((height/118*15))){
        element.style.top = (Number(topValue) - 10) + "px";
        }
}
function moveRight(element) {
    var elStyle = window.getComputedStyle(element);
    var leftValue = elStyle.getPropertyValue("left").replace("px", "");
    if(width-parseInt((width/100*4))-100>leftValue){
    element.style.left = (Number(leftValue) + 10) + "px";
    }
}
function moveLeft(element) {
    var elStyle = window.getComputedStyle(element);
    var leftValue = elStyle.getPropertyValue("left").replace("px", "");
    if(0<leftValue){
        element.style.left = (Number(leftValue) - 10) + "px";
        }
    
}
//                       A U D I O
var A = new Audio("source/Footsteps-in-grass-fast-www (mp3cut.net).mp3"); 
var B= new Audio("/source/bkmusic.mp3"); 
function startAnatural(){
    A.play();
}
function startBnatural(){
    B.play();
}

function stopAnatural(){
  A.pause();
}
function stopBnatural(){
    B.pause();
  }

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(e.key==='s' || e.key==='d' || e.key==='w' || e.key==='a' ){
        startAnatural();
        if(musicNumber%2==0){
            document.getElementById('music').style.backgroundColor = 'green';  
        startBnatural();}else{
            document.getElementById('music').style.backgroundColor = 'red';  
            stopBnatural();
        }
    }
  
    if(e.key==='p'){
        musicNumber=musicNumber+1;
        if(musicNumber%2==0){
            document.getElementById('music').style.backgroundColor = 'green';  
        startBnatural();}else{
            document.getElementById('music').style.backgroundColor = 'red';  
            stopBnatural();
        }
    }
};

document.onkeyup = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(e.key==='s'|| e.key==='d' || e.key==='w' || e.key==='a' ){
        stopAnatural();
    }


};
function killer(){
    
    setInterval(function(){kill()},300);
}
function call(){
killer();
}
call();
//                          M O V E
 document.addEventListener('keypress', function (event) {
    
    if (event.key === 's') {
        moveDown(helmut);
    }
    if (event.key === 'w') {
        moveUp(helmut);
    }
    if (event.key === 'd') {
        moveRight(helmut);
    }
    if (event.key === 'a') {
        moveLeft(helmut);
    }   
    if (event.key==='l'){
    }
  });
  
//                            S T U D E N T S
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min+1) + min;
  }
function picture(){
    var studentNumber=Math.floor(getRandomArbitrary(1,6));
    switch(studentNumber){
        case 1:
            return '/source/student5.png';
        case 2:
            return '/source/student3.png';
        case 3:
            return '/source/student2.png';
        case 4:
            return '/source/student1.png';
        case 5:
            return '/source/student4.png';   
        case 6:
        return    '/source/student5.png'; 
    }
}
 const arr=[];
 var id=0;
function createStudent(){
    var  student = new Image(100, 100);
    student.style.position='absolute';
    student.id=id.toString();
    student.src =picture();
    document.body.appendChild(student);
    positionRandomizer(student);
    arr.push(id);
    id=id+1;


    el = window.getComputedStyle(helmut);
    tpValue = (Math.ceil(Math.floor(el.getPropertyValue("bottom").replace("px", "")/100)*100));
    lftValue = (Math.ceil(Math.floor(el.getPropertyValue("left").replace("px", "")/100)*100));

    
}

function movest(){
    setInterval(function(){StudentMover()},300);
}
movest();

function StudentMover(){
    for(let i=0;i<=arr[arr.length-1];i++){
        
        var k=""+arr[i]+"";
        k=k.replace(/^"|"$/g, '');
    var thing =document.getElementById(k);
    
    var elStyle1 = window.getComputedStyle(thing);
    var tp=elStyle1.getPropertyValue("bottom").replace("px", "");
    var lf=elStyle1.getPropertyValue("left").replace("px", "");
    if(thing.src.includes("/source/student4.png")){

    }else{
    if(k%2==0){
    thing.style.top=(height-212-Number(tp)-20)+"px";}
    else{
    thing.style.left=(Number(lf)-20)+"px";}
    }
}
}
function positionRandomizer(element){
    element.style.top=getRandomArbitrary(10,height-230)+'px';
    element.style.left=getRandomArbitrary(0,width-170)+'px';
}
 
  function myFunction() {
    setInterval(function(){ createStudent() }, 3000);
    
  }
  myFunction(); 
//                         K I L L
function kill(){
    

  
    for(let i=0;i<=arr[arr.length-1];i++){
        
        var k=""+arr[i]+"";
        k=k.replace(/^"|"$/g, '');
    var thing =document.getElementById(k);
    
    var elStyle1 = window.getComputedStyle(thing);
    var tp=elStyle1.getPropertyValue("bottom").replace("px", "");
    var lf=elStyle1.getPropertyValue("left").replace("px", "");
    var topValue1 = (Math.ceil(Math.floor(tp/100)*100));
    var leftValue1 = (Math.ceil(Math.floor(lf/100)*100));
        
        if(Numberkill==10 ||Numberkill==50||Numberkill==90 ||Numberkill==130){
            document.getElementById('game').style.backgroundImage="url(/source/beach.jpg)";
        }
        if(Numberkill==20 ||Numberkill==60||Numberkill==100 ||Numberkill==140){
            document.getElementById('game').style.backgroundImage="url(/source/deck.jpg)";
        }
        if(Numberkill==30 ||Numberkill==70||Numberkill==110 ||Numberkill==150){
            document.getElementById('game').style.backgroundImage="url(/source/snow.jpg)";
        }
        if(Numberkill==40 ||Numberkill==80||Numberkill==120 ||Numberkill==160){
            document.getElementById('game').style.backgroundImage="url(/source/jungle.jpg)";
        }
    
    if((topValue1==tpValue || topValue1==tpValue-100 || topValue1==tpValue+100)&&(leftValue1==lftValue || leftValue1==lftValue-100 || leftValue1==lftValue+100)){     
   
//                B L O O D

function bloodfn(){
    var bloodNumber=Math.floor(getRandomArbitrary(1,4));
    switch(bloodNumber){
        case 1:
            return '/source/blood.png';
        case 2:
            return '/source/blood2.png';
        case 3:
            return '/source/blood3.png';
        case 4:
            return '/source/blood4.png'; 
    }
}
var  blood = new Image(100, 100);

blood.style.position='absolute';
blood.src =bloodfn();
document.body.appendChild(blood);
blood.style.top=(height-tp-180)+'px';
blood.style.left=lf+'px';
setTimeout(function() { blood.remove(); }, 10000);

//                 crying
var k=thing.src;

        if(k.includes("/source/student5.png")){
            var audio = new Audio('/source/mancrying.mp3');
  audio.play();
        }
        if(k.includes("/source/student2.png")){
            var audio = new Audio('/source/mancrying2.mp3');
  audio.play();
        }
        if(k.includes("/source/student4.png")){
            var audio = new Audio('/source/girl1.mp3');
  audio.play();
        }
        if(k.includes("/source/student3.png")){
            var audio = new Audio('/source/girl2.mp3');
  audio.play();
        }
        if(k.includes("/source/student1.png")){
            var audio = new Audio('/source/girl3.mp3');
  audio.play();
        }
        var eataudio = new Audio('/source/eat2.m4a');
  eataudio.play();
        thing.remove();
        Numberkill=Numberkill+1;
    for( var j = 0; j < arr.length; j++){ 
    
        if ( arr[j] === arr[i]) { 
    
            arr.splice(j, 1); 
        }
    
    }
    

}
    
    }
     
    
}


