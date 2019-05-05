canvas = document.getElementById("canvas");
var stage=new Stage(canvas);

var line=new Shape();
stage.addChild(line);

line.graphics.lineStyle(2, 0xffffff);
line.graphics.moveTo(0, 0);
line.graphics.lineTo(0, 117);
line.graphics.endFill();
line.x = 172;
line.y = 61;


