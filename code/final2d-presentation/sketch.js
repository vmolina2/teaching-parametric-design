const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
        createCanvas(sketchHeight, sketchWidth);
}


function draw() {   
  noLoop()
  background(255);
      
      noFill();
      stroke("black");
    
      let radius = 400;
      let maxCount = random(15,30);

      i=radius*random(1,10)

      circle(
        sketchHeight/2,
        sketchWidth/2,
        radius);

      circle(
          sketchHeight/2,
          sketchWidth/2,
          random(1,300));

       circle(
            sketchHeight/2,
         sketchWidth/2,
        random(1,400));

        circle(
         sketchHeight/2,
         sketchWidth/2,
         random(1,400));

         circle(
           sketchHeight/2,
           sketchWidth/2,
           random(2,400));
           circle(
            sketchHeight/2,
            sketchWidth/2,
            radius);
    
          circle(
              sketchHeight/2,
              sketchWidth/2,
              random(1,400));
    
           circle(
                sketchHeight/2,
             sketchWidth/2,
            random(1,400));
    
            circle(
             sketchHeight/2,
             sketchWidth/2,
             random(1,400));
    
             circle(
               sketchHeight/2,
               sketchWidth/2,
               random(2,400));

               circle(
                sketchHeight/2,
                sketchWidth/2,
                random());
        
              circle(
                  sketchHeight/2,
                  sketchWidth/2,
                  random(1,400));
        
               circle(
                    sketchHeight/2,
                 sketchWidth/2,
                random(1,400));
        
                circle(
                 sketchHeight/2,
                 sketchWidth/2,
                 random(1,400));
        
                 circle(
                   sketchHeight/2,
                   sketchWidth/2,
                   random(2,400));

                   circle(
                    sketchHeight/2,
                    sketchWidth/2,
                    random(1,300));
          
                 circle(
                      sketchHeight/2,
                   sketchWidth/2,
                  random(1,400));
          
                  circle(
                   sketchHeight/2,
                   sketchWidth/2,
                   random(1,400));
          
                   circle(
                     sketchHeight/2,
                     sketchWidth/2,
                     random(2,400));
                     circle(
                      sketchHeight/2,
                      sketchWidth/2,
                      radius);
              
                    circle(
                        sketchHeight/2,
                        sketchWidth/2,
                        random(1,400));
              
                     circle(
                          sketchHeight/2,
                       sketchWidth/2,
                      random(1,400));
              
                      circle(
                       sketchHeight/2,
                       sketchWidth/2,
                       random(1,400));
              
                       circle(
                         sketchHeight/2,
                         sketchWidth/2,
                         random(2,400));
          
                         circle(
                          sketchHeight/2,
                          sketchWidth/2,
                          random());
                  
                        circle(
                            sketchHeight/2,
                            sketchWidth/2,
                            random(1,400));
                  
                         circle(
                              sketchHeight/2,
                           sketchWidth/2,
                          random(1,400));
                  
                          circle(
                           sketchHeight/2,
                           sketchWidth/2,
                           random(1,400));
                  
                           circle(
                             sketchHeight/2,
                             sketchWidth/2,
                             random(2,400));
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}


      
      
