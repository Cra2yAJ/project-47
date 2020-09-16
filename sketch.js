const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game, all;

var space,map;

var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn;

function preload(){
map = loadImage("map.jpg");
space = loadImage("1 (2).jpg");
}

function setup() {
  createCanvas(displayWidth*2,displayHeight*2);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  engine = Engine.create();
  world = engine.world;
  
  a = new Wall(displayWidth/2-590,displayHeight/2+100,40,400);
  b = new Wall(displayWidth/2-225,displayHeight/2+150,40,310);
  c = new Wall(displayWidth/2-225,displayHeight/2-70,40,50);
  d = new Wall(displayWidth/2-45,displayHeight/2-30,30,55);
  e = new Wall(displayWidth/2+225,displayHeight/2-70,30,50);
  f = new Wall(displayWidth/2,displayHeight/2+140,40,170);
  g = new Wall(displayWidth/2+320,displayHeight/2,30,180);
  h = new Wall(displayWidth/2+225,displayHeight/2+45,30,90);
  i = new Wall(displayWidth/2,displayHeight/2+400,40,110);
  j = new Wall(displayWidth/2,displayHeight/2+640,40,150);
  k = new Wall(displayWidth/2-225,displayHeight/2+450,40,50);
  l = new Wall(displayWidth/2-540,displayHeight/2-5,70,200);
  m = new Wall(displayWidth/2-520,displayHeight/2+220,100,170);
  n = new Wall(displayWidth/2-280,displayHeight/2+220,100,170);
  o = new Wall(displayWidth/2-400,displayHeight/2-90,400,20);
  p = new Wall(displayWidth/2-400,displayHeight/2+315,400,20);
  q = new Wall(displayWidth/02-455,displayHeight/2+85,100,15);
  r = new Wall(displayWidth/2-280,displayHeight/2+85,80,15);
  s = new Wall(displayWidth/2-95,displayHeight/2-65,220,20);
  t = new Wall(displayWidth/2-105,displayHeight/2+60,200,30);
  u = new Wall(displayWidth/2+100,displayHeight/2-85,230,20);
  v = new Wall(displayWidth/2+105,displayHeight/2+85,210,20);
  w = new Wall(displayWidth/2+110,displayHeight/2+280,250,150);
  x = new Wall(displayWidth/2-590,displayHeight/2+620,40,400);
  y = new Wall(displayWidth/2-225,displayHeight/2+670,40,310);
  z = new Wall(displayWidth/2-400,displayHeight/2+420,400,20);
  aa = new Wall(displayWidth/2-400,displayHeight/2+820,400,20);
  ab = new Wall(displayWidth/2-540,displayHeight/2+510,70,200);
  ac = new Wall(displayWidth/2-530,displayHeight/2+730,100,170);
  ad = new Wall(displayWidth/2-280,displayHeight/2+730,100,170);
  ae = new Wall(displayWidth/2-455,displayHeight/2+600,100,15);
  af = new Wall(displayWidth/2-280,displayHeight/2+600,80,15);
  ag = new Wall(displayWidth/2-95,displayHeight/2+450,220,20);
  ah = new Wall(displayWidth/2-105,displayHeight/2+570,200,30);
  ai = new Wall(displayWidth/2-45,displayHeight/2+485,30,50);
  aj = new Wall(displayWidth/2+110,displayHeight/2+790,250,150);
  ak = new Wall(displayWidth/2+110,displayHeight/2+430,220,20);
  al = new Wall(displayWidth/2+110,displayHeight/2+600,220,20);
  am = new Wall(displayWidth/2+230,displayHeight/2+560,30,100);
  an = new Wall(displayWidth/2+230,displayHeight/2+445,30,50);
  ao = new Wall(displayWidth/2+320,displayHeight/2+510,30,180);
  ap = new Wall(displayWidth/2+285,displayHeight/2+260,100,100);
  aq = new Wall(displayWidth/2+285,displayHeight/2+770,100,100);
  ar = new Wall(displayWidth/2+680,displayHeight/2,400,180);
  as = new Wall(displayWidth/2+685,displayHeight/2+255,210,100);
  at = new Wall(displayWidth/2+685,displayHeight/2+770,210,100);
  au = new Wall(displayWidth/2+1050,displayHeight/2,30,180);
  av = new Wall(displayWidth/2+1140,displayHeight/2-85,200,10);
  aw = new Wall(displayWidth/2+1140,displayHeight/2+85,210,10);
  ax = new Wall(displayWidth/2+1230,displayHeight/2-20,25,140);
  ay = new Wall(displayWidth/2+1330,displayHeight/2,180,20);
  az = new Wall(displayWidth/2+1465,displayHeight/2+65,230,20);
  ba = new Wall(displayWidth/2+1465,displayHeight/2-65,230,20);
  bb = new Wall(displayWidth/2+1960,displayHeight/2+100,40,400);
  bc = new Wall(displayWidth/2+1600,displayHeight/2+150,40,310);
  bd = new Wall(displayWidth/2+1600,displayHeight/2-70,40,50);
  be = new Wall(displayWidth/2+1800,displayHeight/2-100,400,30);
  bf = new Wall(displayWidth/2+1790,displayHeight/2+310,400,30);
  bg = new Wall(displayWidth/2+1370,displayHeight/2+110,40,100);
  bh = new Wall(displayWidth/2+1260,displayHeight/2+230,250,150);
  bi = new Wall(displayWidth/2+1085,displayHeight/2+250,100,100);
  bj = new Wall(displayWidth/2+1700,displayHeight/2+85,160,20);
  bk = new Wall(displayWidth/2+1900,displayHeight/2+85,80,20);
  bl = new Wall(displayWidth/2+1660,displayHeight/2+215,80,160);
  bm = new Wall(displayWidth/2+1900,displayHeight/2+215,80,160);
  bn = new Wall(displayWidth/2+1910,displayHeight/2-5,60,160);
  bo = new Wall(displayWidth/2+1370,displayHeight/2+360,40,120);
  bp = new Wall(displayWidth/2+1370,displayHeight/2+630,40,100);
  bq = new Wall(displayWidth/2+1260,displayHeight/2+750,250,150);
  br = new Wall(displayWidth/2+1085,displayHeight/2+765,100,100);
  bs = new Wall(displayWidth/2+1050,displayHeight/2+510,30,180);
  bt = new Wall(displayWidth/2+1140,displayHeight/2+465,30,90);
  bu = new Wall(displayWidth/2+1140,displayHeight/2+580,30,50);
  bv = new Wall(displayWidth/2+1260,displayHeight/2+430,220,20);
  bw = new Wall(displayWidth/2+1260,displayHeight/2+600,220,20);
  bx = new Wall(displayWidth/2+1470,displayHeight/2+450,230,20);
  by = new Wall(displayWidth/2+1470,displayHeight/2+580,230,20);
  bz = new Wall(displayWidth/2+1410,displayHeight/2+540,30,60);
  ca = new Wall(displayWidth/2+1960,displayHeight/2+620,40,400);
  cb = new Wall(displayWidth/2+1600,displayHeight/2+660,40,300);
  cc = new Wall(displayWidth/2+1600,displayHeight/2+440,40,60);
  cd = new Wall(displayWidth/2+1780,displayHeight/2+410,400,30);
  ce = new Wall(displayWidth/2+1780,displayHeight/2+820,400,30);
  cf = new Wall(displayWidth/2+1700,displayHeight/2+600,160,20);
  cg = new Wall(displayWidth/2+1905,displayHeight/2+600,70,20);
  ch = new Wall(displayWidth/2+1660,displayHeight/2+730,80,160);
  ci = new Wall(displayWidth/2+1900,displayHeight/2+730,80,160);
  cj = new Wall(displayWidth/2+1910,displayHeight/2+510,60,170);
  ck = new Wall(displayWidth/2+685,displayHeight/2-170,400,20);
  cl = new Wall(displayWidth/2+500,displayHeight/2-190,30,50);
  cm = new Wall(displayWidth/2+870,displayHeight/2-190,30,50);
  cn = new Wall(displayWidth/2+860,displayHeight/2-280,20,60);
  co = new Wall(displayWidth/2+510,displayHeight/2-280,20,60);
  cp = new Wall(displayWidth/2+1050,displayHeight/2-280,20,60);
  cq = new Wall(displayWidth/2+320,displayHeight/2-280,20,60);
  cr = new Wall(displayWidth/2+320,displayHeight/2-190,20,50);
  cs = new Wall(displayWidth/2+1050,displayHeight/2-190,20,50);
  ct = new Wall(displayWidth/2+1100,displayHeight/2-170,80,10);
  cu = new Wall(displayWidth/2+270,displayHeight/2-170,80,10);
  cv = new Wall(displayWidth/2+80,displayHeight/2-170,120,10);
  cw = new Wall(displayWidth/2+1290,displayHeight/2-170,120,10);
  cx = new Wall(displayWidth/2+100,displayHeight/2-230,90,50);
  cy = new Wall(displayWidth/2+200,displayHeight/2-270,80,40);
  cz = new Wall(displayWidth/2+690,displayHeight/2-320,1400,20);
  da = new Wall(displayWidth/2+320,displayHeight/2+1055,20,60);
  db = new Wall(displayWidth/2+1045,displayHeight/2+1055,20,60);
  dc = new Wall(displayWidth/2+685,displayHeight/2+1040,400,120);
  dd = new Wall(displayWidth/2+320,displayHeight/2+960,20,50);
  de = new Wall(displayWidth/2+1045,displayHeight/2+960,20,50);
  df = new Wall(displayWidth/2+1095,displayHeight/2+940,80,10);
  dg = new Wall(displayWidth/2+270,displayHeight/2+940,80,10);
  dh = new Wall(displayWidth/2+90,displayHeight/2+940,120,10);
  di = new Wall(displayWidth/2+1290,displayHeight/2+940,120,10);
  dj = new Wall(displayWidth/2+690,displayHeight/2+1090,1400,20);
  dk = new Wall(displayWidth/2,displayHeight/2-200,30,250);
  dl = new Wall(displayWidth/2+1370,displayHeight/2-200,30,250);
  dm = new Wall(displayWidth/2,displayHeight/2+980,30,250);
  dn = new Wall(displayWidth/2+1370,displayHeight/2+960,30,270);

}

function draw() {
  background(space);  
 
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    form.hide();
    game.play();
    game.update(2);
  }


  drawSprites();
}