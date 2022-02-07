storage = "";
objects = [];


function preload(){



}

function start(){

    objectdetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("Status").innerHTML = " Status Is Detecting Object";
    holder =  document.getElementById("input").innerHTML = " ";
}




function setup(){

    canvas = createCanvas(400,400);
    canvas.center();    
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

}




function modelLoaded(){

    console.log("Model Has Been Successfully Loaded!");
    Status = true;
}


function draw(){
    image(video,0,0,400,400);
    
        if(Status!= ""){
            objectdetector.detect(video,gotResult);
            for(i=0; i<objects.length ; i++){
    
                document.getElementById("status").innerHTML = "Status : Objects Detected";
                fill("red");
                percent = floor(objects[i].confidence*100);
                text(objects[i].label + " " + percent + " % " , objects[i].x +15 , objects[i].y + 15 );
                noFill();
                stroke("red");
                rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    
            }
        }
    
    }

function gotResult(error,results){

    if(error){

        console.log(error);
    }

    else{

        console.log(results);
        objects = results;
    }

}