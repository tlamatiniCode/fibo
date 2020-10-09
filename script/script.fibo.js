console.log('	v1.04\n AlainForton\n tlamatini.fibo\n	-d|p-');

//		v1.09
//	AlainForton 
//	tlamatini.fibo
//		-d|p-


let metodos = {
	pascal : function(n,a)
	{
		if (n < 2) return a;
		var colpre = a[a.length-1];
		var colact = [1];
		for(var i = 1; i < colpre.length; i++){
			colact[i] = colpre[i] + colpre[i-1];
		}		
		colact.push(1);
		a.push(colact);		
		//
		return metodos.pascal(n-1, a);
	},
	randomc : function()//n)
	{	
		//console.log('rgb('+n+','+n+','+n+')');
	
		//return 'rgb('+1+n+','+20+n+','+30+n+')';
		var letras = '0123456789ABCDEF';
		var colorResult = '#';
		for(var i = 0; i < 6; i++){	
			colorResult += letras[Math.floor(Math.random()*16)];
		}
		//
		return colorResult;
	},
	elemento : 	function(str)
	{
		//
		return document.createElement(str);
	},
	transfa : function(pr)
	{	
		var a = [];
		for(var i = 0; i < pr.length; i++){
			a[i] = (pr[i]+', 0 ,'+pr[pr.length-(i+1)]).split(',');
		}
		//
		return a;
	},
	filtrado : function(value, index, self){
		//
		return self.indexOf(value) === index;
 	}
}

window.onload = function(){	
	var num = 30;	
	let fibo = {
		pascalResult : metodos.pascal(num, [[1]]),
		divcont : metodos.elemento('div'),
		colores : {}
	}
	fibo.pascalResult = metodos.transfa(fibo.pascalResult);
	fibo.colores.id = getIds(fibo.pascalResult);
	fibo.colores.hex = getHex(fibo.colores.id.length);
	
 	function getHex(listpr){
 		var colores = [];
 		for(var i =0; i< listpr ; i++){
			colores[i] = metodos.randomc();
			//console.log(fibo.num);
			//fibo.num = fibo.num + 1;
		}
		
		return colores;	
	};
	
	function getIds(pr){
		var arr=[];
		for(var i =0; i < pr.length ; i++){
			for(var j =0; j < pr[i].length ; j++){
				arr.push(pr[i][j]);	
			}
		}
		var idvalores = arr.filter(metodos.filtrado);
		//
		return idvalores;
	}
	
		
		
	console.log(fibo.pascalResult);
	
	for(var i = 0; i < num; i++){
		var divfila = metodos.elemento('div');
		divfila.style.display = "flex";
		divfila.style.marginBottom = "1px";		
		for(var j = 0; j < num+2; j++){
			var div = metodos.elemento('div');
			div.style.width = "50px";
			div.style.height = "30px";
			div.style.marginLeft = "1px";
			div.style.fontSize = "15px";
			var color = setcolor(fibo.pascalResult[i][j]);
			
			console.log(color);
			div.style.color = color;
			//div.style.backgroundColor = color;
			div.innerHTML = color+'<br>'+fibo.pascalResult[i][j];
			divfila.appendChild(div);
		}
		fibo.divcont.appendChild(divfila);
	}
	
	function setcolor(val){
		for(var i =0; i< fibo.colores.id.length; i++){	
			if(fibo.colores.id[i] == val){
				return fibo.colores.hex[i];
			}			
		}
	}
		
	document.body.appendChild(fibo.divcont);	

}
