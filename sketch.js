

function setup() {
    createCanvas(windowWidth,windowHeight);
    
}



function draw() {
    
    background(0,0,0)

    
    stroke(0,0,255);
    strokeWeight(5);
    fill(0,175,255,70);
    circle(650,350,500);


    stroke(0,0,255);
    fill(0,175,255,50);
    circle(298,350,370);

    stroke(0,5,255);
    fill(0,175,255,50);
    circle(1003,350,370);
    

    stroke(255,204,0);
    fill(255,204,0,70);
triangle(650, windowHeight, 950, 4, 350,4);


//on the inner side to the right
line(950,4,825,windowHeight);
stroke(255,204,0);

//on the middle to the right
line(950,4,1090,windowHeight);
stroke(255,204,0);

//far side on the right
line(950,4,1540,windowHeight);
stroke(255,204,0);

//inner side on the left
line(350,4,473,windowHeight);
stroke(255,204,0);


line(350,4,220,windowHeight);
stroke(255,204,0);


line(350,4,-235,windowHeight);
stroke(255);



}









