function setup()
{
    video = createCapture(VIDEO)
    video.size(450,400)
    video.position(70,150)

    canvas = createCanvas(450, 400);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#FFA500");
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(error, results)
{
    if(error)
    {
        console.error(error);
    }

    else if(results.length > 0)
    {
        console.log(results);
    }
}