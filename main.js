noseX = 0;
noseY = 0;

function preload() 
{
    img1 = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNET = ml5.poseNet(video , modelLoaded);
    poseNET.on("pose" , gotposes);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotposes(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
    }
}

function draw() 
{
    image(video , 0 , 0 , 300 , 300);
    image(img1 , noseX - 20 , noseY + 18 , 50 , 40);
}

function take_snapshot()
{
    save("myImage.png");
}