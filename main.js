function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F_7geRNFG/model.json',modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
    console.log("model loaded");
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
    console.log("gotResults");
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_lbl").innerHTML="I can hear "+results[0].label;
    document.getElementById("result_conf").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_lbl").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_conf").style.color="rgb("+r+","+g+","+b+")";

    img1=document.getElementById("ali-1");
    img2=document.getElementById("ali-2");
    img3=document.getElementById("ali-3");
    img4=document.getElementById("ali-4");

    if (results[0].label=="clap"){
        img1.src="aliens-01.gif";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if (results[0].label=="bell"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.gif";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png"; 
    }
    else if (results[0].label=="drum"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.gif";
        img4.src="aliens-04.png"; 
    }
    else{
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.gif"; 
    }
    }
}