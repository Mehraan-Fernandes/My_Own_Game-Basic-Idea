var astronaut, astronautImg;
var asteroids = []
var asteroid,asteroidImg;
var bg;
var right,left,rKey,lKey
var space;
function preload() {
 // astronautImg = loadImage("Astronaut.png")
  right = loadImage("right.png");
  left = loadImage("left.png")
  asteroidImg = loadImage("astroid1.png")
 // bg = loadAnimation("Imported_piskel/sprite1.png","Imported_piskel/sprite2.png","Imported_piskel/sprite3.png","Imported_piskel/sprite4.png");
  astronautImg = loadAnimation(
    "gifCollection/frame_000.gif","gifCollection/frame_001.gif",
    "gifCollection/frame_002.gif","gifCollection/frame_003.gif",
    "gifCollection/frame_004.gif","gifCollection/frame_005.gif",
    "gifCollection/frame_006.gif","gifCollection/frame_007.gif",
    "gifCollection/frame_008.gif","gifCollection/frame_009.gif",
    "gifCollection/frame_010.gif","gifCollection/frame_011.gif",
    "gifCollection/frame_012.gif","gifCollection/frame_013.gif",
    "gifCollection/frame_014.gif","gifCollection/frame_015.gif",
    "gifCollection/frame_016.gif","gifCollection/frame_017.gif",
    "gifCollection/frame_018.gif","gifCollection/frame_019.gif",
    "gifCollection/frame_020.gif","gifCollection/frame_021.gif",
    "gifCollection/frame_022.gif","gifCollection/frame_023.gif",
    "gifCollection/frame_024.gif","gifCollection/frame_025.gif",
    "gifCollection/frame_026.gif","gifCollection/frame_027.gif",
    "gifCollection/frame_028.gif","gifCollection/frame_029.gif",
    "gifCollection/frame_030.gif","gifCollection/frame_031.gif",
    "gifCollection/frame_032.gif","gifCollection/frame_033.gif",
    "gifCollection/frame_034.gif","gifCollection/frame_035.gif",
    "gifCollection/frame_036.gif","gifCollection/frame_037.gif",
    "gifCollection/frame_038.gif","gifCollection/frame_039.gif",
    "gifCollection/frame_040.gif","gifCollection/frame_041.gif",
    "gifCollection/frame_042.gif","gifCollection/frame_043.gif",
    "gifCollection/frame_044.gif","gifCollection/frame_045.gif",
    "gifCollection/frame_046.gif","gifCollection/frame_047.gif",
    "gifCollection/frame_048.gif","gifCollection/frame_049.gif",
    "gifCollection/frame_050.gif","gifCollection/frame_051.gif",
    "gifCollection/frame_052.gif","gifCollection/frame_053.gif",
    "gifCollection/frame_054.gif","gifCollection/frame_055.gif",
    "gifCollection/frame_056.gif","gifCollection/frame_057.gif",
    "gifCollection/frame_058.gif","gifCollection/frame_059.gif",
    "gifCollection/frame_060.gif","gifCollection/frame_061.gif",
    "gifCollection/frame_062.gif","gifCollection/frame_063.gif",
    "gifCollection/frame_064.gif","gifCollection/frame_065.gif",
    "gifCollection/frame_066.gif","gifCollection/frame_067.gif",
    "gifCollection/frame_068.gif","gifCollection/frame_069.gif",
    "gifCollection/frame_070.gif","gifCollection/frame_071.gif",
    "gifCollection/frame_072.gif","gifCollection/frame_073.gif",
    "gifCollection/frame_074.gif","gifCollection/frame_075.gif",
    "gifCollection/frame_076.gif","gifCollection/frame_077.gif",
    "gifCollection/frame_078.gif","gifCollection/frame_079.gif",
    "gifCollection/frame_080.gif","gifCollection/frame_081.gif",
    "gifCollection/frame_082.gif","gifCollection/frame_083.gif",
    "gifCollection/frame_084.gif","gifCollection/frame_085.gif",
    "gifCollection/frame_086.gif","gifCollection/frame_087.gif",
    "gifCollection/frame_088.gif"/*"gifCollection/frame_089.gif",
    "gifCollection2/frame_090.gif","gifCollection2/frame_091.gif",
    "gifCollection2/frame_092.gif","gifCollection2/frame_093.gif",
    "gifCollection2/frame_094.gif","gifCollection2/frame_095.gif",
    "gifCollection2/frame_096.gif","gifCollection2/frame_097.gif",
    "gifCollection2/frame_098.gif","gifCollection2/frame_099.gif",
    "gifCollection2/frame_100.gif","gifCollection2/frame_101.gif",
    "gifCollection2/frame_102.gif","gifCollection2/frame_103.gif",
    "gifCollection2/frame_104.gif","gifCollection2/frame_105.gif",
    "gifCollection2/frame_106.gif","gifCollection2/frame_107.gif",
    "gifCollection2/frame_108.gif","gifCollection2/frame_109.gif",
    "gifCollection2/frame_110.gif","gifCollection2/frame_111.gif",
    "gifCollection2/frame_112.gif","gifCollection2/frame_113.gif",
    "gifCollection2/frame_114.gif","gifCollection2/frame_115.gif",
    "gifCollection2/frame_116.gif","gifCollection2/frame_117.gif",
    "gifCollection2/frame_118.gif","gifCollection2/frame_119.gif",
    "gifCollection2/frame_120.gif","gifCollection2/frame_121.gif",
    "gifCollection2/frame_122.gif","gifCollection2/frame_123.gif",
    "gifCollection2/frame_124.gif","gifCollection2/frame_125.gif",
    "gifCollection2/frame_126.gif","gifCollection2/frame_127.gif",
    "gifCollection2/frame_128.gif","gifCollection2/frame_129.gif",
    "gifCollection2/frame_130.gif","gifCollection2/frame_131.gif",
    "gifCollection2/frame_132.gif","gifCollection2/frame_133.gif",
    "gifCollection2/frame_134.gif","gifCollection2/frame_135.gif",
    "gifCollection2/frame_136.gif","gifCollection2/frame_137.gif",
    "gifCollection2/frame_138.gif","gifCollection2/frame_139.gif",
    "gifCollection2/frame_140.gif","gifCollection2/frame_141.gif",
    "gifCollection2/frame_142.gif","gifCollection2/frame_143.gif",
    "gifCollection2/frame_144.gif","gifCollection2/frame_145.gif",
    "gifCollection2/frame_146.gif","gifCollection2/frame_147.gif",
    "gifCollection2/frame_148.gif","gifCollection2/frame_149.gif",
    "gifCollection2/frame_150.gif","gifCollection2/frame_151.gif",
    "gifCollection2/frame_152.gif","gifCollection2/frame_153.gif",
    "gifCollection2/frame_154.gif","gifCollection2/frame_155.gif",
    "gifCollection2/frame_156.gif","gifCollection2/frame_157.gif",
    "gifCollection2/frame_158.gif","gifCollection2/frame_159.gif"*/
  )
  
}


function setup() {
  createCanvas(innerWidth,innerHeight);
 /* space = createSprite(innerWidth/2,innerHeight/2)
  space.addAnimation("animation",bg)
  space.scale = 4.5*/
  rKey = createSprite(innerWidth-50,innerHeight-50,20,20);
  rKey.addImage(right);
  rKey.scale = 0.3

  lKey = createSprite(innerWidth-100,innerHeight-50,20,20);
  lKey.addImage(left);
  lKey.scale = 0.22

  astronaut = createSprite(innerWidth/2,innerHeight-175,50,50);
  astronaut.addAnimation("animation",astronautImg);
  astronaut.setCollider("rectangle", 0, -90 , 150, 200);
  astronaut.scale = 0.5


 
}

function draw() {
  frameRate(60)
  background(255);
  //astronaut.debug=true
  if (keyDown(LEFT_ARROW)) {
    astronaut.x += -10    
  }

  if (mousePressedOver(rKey)) {
    astronaut.x += 10
  }

  if (mousePressedOver(lKey)) {
    astronaut.x += -10
  }
  
  if (keyDown(RIGHT_ARROW)) {
  
  }

  /*
  if (keyDown(UP_ARROW)) {
    astronaut.y += -10    
  }
  
  if (keyDown(DOWN_ARROW)) {
    astronaut.y += 10
  }
  */  
  
  if(frameCount % 55 === 0){
  makeAsteroids();
  } 
  
  for(var i = 0 ; i < asteroids.length ; i++ ){
    if (astronaut.isTouching(asteroids[i])) {
      asteroids[i].destroy();
    }
  }
  drawSprites();
}

function makeAsteroids() {
  asteroid = createSprite(random(10,innerWidth-10),0,25,25)
  asteroid.setVelocity(random(-2,2),2);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.7
  asteroids.push(asteroid);
}