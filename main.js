function preload() {}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNET = ml5.poseNet("pose" , modelLoaded);
    poseNET.on("pose" , gotPose);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPose(results)
{
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}

function draw() 
{
    image(video , 0 , 0 , 300 , 300);
}

function take_snapshot()
{
    save("myImage.png");
}