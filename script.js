 var divideInput = document.getElementById("divideInput");
 var divideButton = document.getElementById("divideButton");
 var fortuneInput = document.getElementById("fortuneInput");
 var fortuneButton = document.getElementById("fortuneButton");
 var fortuneOutput = document.getElementById("fortuneOutput");
 var num, crystalFortune, crystalImage, borderStyle, sizeOfText;

 var crystals = ["Agate", "Black Tourmaline", "Hematite", "Jade", "Moldavite", "Rose Quartz"];

 divideButton.addEventListener("click", divideBy2);
 fortuneButton.addEventListener("click", getFortune);

 function divideBy2(){
    num = divideInput.value;
    console.log("Half of " + num + " is " + num/2);
    alert(num + " divided by 2 is " + num/2);
 }
 function getFortune(){
   crystal = crystals[Math.floor(Math.random()*crystals.length)];
   console.log("Crystal recieved: " + crystal);
   if(crystal == "Agate"){
     crystalImage = "agate.jpg";
     crystalFortune = "Your future shows newfound confidence, courage, and strength to face and overcome any challenge.";
   }else if(crystal == "Black Tourmaline"){
     crystalImage = "blackT.png";
     crystalFortune = "Your future holds extra time to work on grounding yourself and focusing on strengthening your mind, body, and spirit.";
   }else if(crystal == "Hematite"){
     crystalImage = "hema.jpg";
     crystalFortune = "Your future shows a flood of good fortune. You are being guarded from any negativities.";
   }else if(crystal == "Jade"){
     crystalImage = "jade.jpg";
     crystalFortune = "Your future holds new inspiration and ambition towards the accomplishments of any objectives you have.";
   }else if(crystal == "Moldavite"){
     crystalImage = "molda.jpg";
     crystalFortune = "Your future shows great change and a life turned upside down but do not fear, for out of it will come new insights and a greater understanding of yourself and the world around you.";
   }else{
     crystalImage = "roseQ.png";
     crystalFortune = "Your future shows a nurturing and comforting energy surrounding you and allows the introduction of new loves and friendships.";
   }
   document.getElementById("crystal").innerHTML = crystal;
   document.getElementById("crystalImg").src = crystalImage;
   document.getElementById("crystalFortune").innerHTML = crystalFortune;
   restyle();
 }
 function restyle(){
   //change size
   sizeOfText = 24+Math.floor(Math.random()*36);
   console.log("Font size chosen: " + sizeOfText);
   //change border style
   num = Math.floor(Math.random()*5);
   if(num==0){
     borderStyle = "dashed";
   }else if(num==1){
     borderStyle = "dotted";
   }else if(num==2){
     borderStyle = "double";
   }else if(num==3){
     borderStyle = "groove";
   }else{
     borderStyle = "solid";
   }
   console.log("Border style chosen: "+ borderStyle);
   //change color
   var r = Math.floor(Math.random()*256);
   var g = Math.floor(Math.random()*256);
   var b = Math.floor(Math.random()*256);
   var textColor = "rgb("+r+","+g+","+b+")";
   console.log("Text color chosen: "+ textColor);

   fortuneOutput.style.fontSize = sizeOfText/10 + "vw";
   fortuneOutput.style.borderStyle = borderStyle;
   fortuneOutput.style.color = textColor;
 }
