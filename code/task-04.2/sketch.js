const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
        createCanvas(sketchHeight, sketchWidth);
}

function draw() {   
      
      noLoop();
      background(0);

      fill(255)
      strokeWeight(2);
      stroke("black")
      circle(sketchHeight/2, sketchWidth/2, sketchHeight);
      
     
      stroke("black");

      let radius = 200;
       
      let maxCount = 6;
      for (let circleCount = 0; circleCount < maxCount; circleCount += 1) {
        let theta = (Math.PI / 180) * (360 / maxCount * circleCount + 90);
        fill(random(200))
    
        let x = radius / 2 * cos(theta);
        let y = radius / 2 * sin(theta);
    
        circle(
          x + sketchWidth / 2,
          y + sketchHeight / 2,
          radius
        );
      }
      radius = 6
      maxCount = 6;
    for (let circleCount = 0; circleCount < maxCount; circleCount += 1) {
    let theta = (Math.PI / 180) * (360 / maxCount * circleCount + 90);

    let x = radius / 2 * cos(theta);
    let y = radius / 2 * sin(theta);
    }
    save()
    
    
  }

  
      