/*var canvas = document.getElementById("canvas");
var ctx=canvas.getContext('2d');
var g=new jcanvas.Graphics();
ctx.fillStyle = '#dddddd';
ctx.lineWidth=10;
ctx.strokeStyle = '#0000ff';
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();
console.log(ctx);

g.lineStyle(15, 0xffffff);
g.moveTo(0,0);
g.lineTo(200,200);
g.endStroke();
g.draw(ctx);*/

var canvas = document.getElementById("canvas");
var ctx=canvas.getContext('2d');
var stage=new jcanvas.Stage(canvas);

var line=new jcanvas.Shape();
stage.addChild(line);
line.graphics.lineStyle(10, 0xffffff);
line.graphics.moveTo(0, 0);
line.graphics.lineTo(200, 200);
line.graphics.endStroke();
line.x = 172;
line.y = 200;

var line2=new jcanvas.Shape();
stage.addChild(line2);
line2.graphics.lineStyle(10, 0xffffff);
line2.graphics.moveTo(0, 0);
line2.graphics.lineTo(200, 200);
line2.graphics.endStroke();
line2.x = 0;
line2.y = 0;


//line.graphics.draw(ctx);
//stage.removeChild(line);
stage.update();

/*function Ball(radius,color){
	if(radius===undefined){radius=40;}
	if(color===undefined){color="#ff0000";}
	this.x=0;
	this.y=0;
	this.vx=0;
	this.vy=0;
	this.mass=1;
	this.radius=radius;
	this.rotation=0;
	this.scaleX=1;
	this.scaleY=1;
	this.color=utils.parseColor(color,1);
	this.lineWidth=1;
}

Ball.prototype.draw=function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX,this.scaleY);
	context.lineWidth=this.lineWidth;
	context.fillStyle=this.color;
	context.beginPath();
	context.arc(0,0,this.radius,0,(Math.PI*2),true);
	context.closePath();
	context.fill();
	if(this.lineWidth>0){
		context.stroke();
	}
	context.restore();
};*/

/*var canvas = document.getElementById('canvas'),
width = canvas.width,
height = canvas.height,
ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
ctx.fillStyle = '#dddddd'; // 设置颜色
ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
// 利用Path绘制复杂路径:
var path=new Path2D();
path.arc(75, 75, 50, 0, Math.PI*2, true);
path.moveTo(110,75);
path.arc(75, 75, 35, 0, Math.PI, false);
path.moveTo(65, 65);
path.arc(60, 65, 5, 0, Math.PI*2, true);
path.moveTo(95, 65);
path.arc(90, 65, 5, 0, Math.PI*2, true);
ctx.strokeStyle = '#0000ff';
ctx.stroke(path);*/




