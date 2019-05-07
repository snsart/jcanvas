this.jcanvas = this.jcanvas||{};

jcanvas.extend = function(subclass, superclass) {
	"use strict";
	function o() { this.constructor = subclass; }
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o());
};


function DisplayObject(){
	
}


(function(){
	function Stage(canvas){
		
	}
	
	
})()


 /**
 * 容器
 */

function Container(){
	
}

 /**
 * 形状
 */
(function(){
	function Shape(){
	
	}	
})()


 /**
 * 绘图
 */
(function(){
	function Graphics(){
	
	}
	var G=Graphics,p=Graphics.prototype;
	p.instructions=[];
	
	p.lineTo=function(x,y){
		p.instructions.push(new G.LineTo(x,y));
	};
	p.moveTo=function(x,y){
		p.instructions.push(new G.MoveTo(x,y));
	}
	p.lineStyle=function(thick,color){
		p.instructions.push(new G.LineStyle(thick,color));
	};	
	p.endStroke=function(){
		p.instructions.push(new G.EndStroke());
	};
	p.draw=function(ctx){
		console.log(ctx);
		for(var i=0;i<this.instructions.length;i++){
			this.instructions[i].exec(ctx);
		}
	};
	
	(G.LineTo=(function(x,y){
		this.x=x;
		this.y=y;
	})).prototype.exec=function(ctx){ctx.lineTo(this.x,this.y)};
	
	(G.MoveTo=(function(x,y){
		this.x=x;
		this.y=y;
	})).prototype.exec=function(ctx){console.log(ctx);ctx.moveTo(this.x,this.y)};
	
	(G.LineStyle=(function(thick,color){
		this.thick=thick;
		this.color=color;
	})).prototype.exec=function(ctx){
		console.log(ctx)
		ctx.fillStyle=this.color;
		ctx.lineWidth=this.thick;
	};
	
	(G.EndStroke=(function(){
	})).prototype.exec=function(ctx){ctx.stroke()};
	
	this.jcanvas.Graphics=Graphics;
	
})()

