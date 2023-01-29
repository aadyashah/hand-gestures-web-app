Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'" >';
    })
}
console.log("ml5 version: " ,ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1Z7BTaeA7/model.json', modelloaded);

function modelloaded(){
    console.log("model is loaded");
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data="The prediction is "+prediction;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}
function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img , gotresults);
}
function gotresults(error , results){
    if (error){
        console.log(error);
    }
    else{
      console.log(results);
      document.getElementById("result_hand_name").innerHTML=results[0].label;
      
      prediction= results[0].label;
    
      speak();
      if (prediction=="thumbs_up"){
        document.getElementById("update_emoji").innerHTML="&#128077;";
      }
      if (prediction=="peace"){
        document.getElementById("update_emoji").innerHTML="&#9996;";
      }
      if (prediction=="hi-five"){
        document.getElementById("update_emoji").innerHTML="&#128400;"; 
      }
      if (prediction=="hang loose"){
        document.getElementById("update_emoji_2").innerHTML="&#128406;";
    }
    if (prediction2=="finger_heart"){
        document.getElementById("update_emoji_2").innerHTML="&#128080;";
    }
   
    

    
}}