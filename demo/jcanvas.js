var jcanvas=this.jcanvas = this.jcanvas||{};

jcanvas.extend = function(subclass, superclass) {
	"use strict";
	function o() { this.constructor = subclass; }
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o());
};


function DisplayObject(){
	
}



 /**
 * 容器
 */
(function(){
	function Container(){
		this._childrens=[];
	}
	var p=Container.prototype;
	
	p.addChild=function(child){
		this._childrens.push(child);
	};
	
	p.removeChild=function(child){
		this._childrens.splice(this._childrens.indexOf(child),1);
	};
	
	p.draw=function(ctx){
		var childrens=this._childrens;
		for(var i=0;i<childrens.length;i++){
			childrens[i].draw(ctx);
		}
	};
	
	this.jcanvas.Container=Container;
})();


(function(){
	function Stage(canvas){
		this.canvas=canvas;
		this.ctx=canvas.getContext("2d");
		this._childrens=[];
	}
	jcanvas.extend(Stage,jcanvas.Container);
	
	var p=Stage.prototype;
	p.update=function(){
		this.draw(this.ctx);
	};
	
	this.jcanvas.Stage=Stage;
})();


 /**
 * 形状
 */
(function(){
	function Shape(){
		this.graphics=new jcanvas.Graphics();
		this.x=0;
		this.y=0;
	}
	var p=Shape.prototype;
	p.draw=function(ctx){
		ctx.translate(this.x,this.y);
		this.graphics.draw(ctx);
	}
	this.jcanvas.Shape=Shape;
})();


 /**
 * 绘图
 */
(function(){
	function Graphics(){
		this._instructions=[];
	}
	var G=Graphics,p=Graphics.prototype;
	
	p.lineTo=function(x,y){
		this._instructions.push(new G.LineTo(x,y));
	};
	p.moveTo=function(x,y){
		this._instructions.push(new G.MoveTo(x,y));
	};
	p.lineStyle=function(thick,color){
		this._instructions.push(new G.LineStyle(thick,color));
	};	
	p.endStroke=function(){
		this._instructions.push(new G.EndStroke());
	};
	p.draw=function(ctx){
		var instru=this._instructions;
		console.log(instru);
		for(var i=0;i<instru.length;i++){
			instru[i].exec(ctx);
		}
	};
	
	(G.LineTo=(function(x,y){
		this.x=x;
		this.y=y;
	})).prototype.exec=function(ctx){ctx.lineTo(this.x,this.y)};
	
	(G.MoveTo=(function(x,y){
		this.x=x;
		this.y=y;
	})).prototype.exec=function(ctx){ctx.moveTo(this.x,this.y)};
	
	(G.LineStyle=(function(thick,color){
		this.thick=thick;
		this.color=color;
	})).prototype.exec=function(ctx){
		ctx.fillStyle=this.color;
		ctx.lineWidth=this.thick;
	};
	
	(G.EndStroke=(function(){
	})).prototype.exec=function(ctx){ctx.stroke()};
	
	this.jcanvas.Graphics=Graphics;
	
})()

