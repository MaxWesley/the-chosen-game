var cx = 0;
var cy = 0;
var px = 0;
var py = 0;
var sLavanderia = false;
var sSalaF = false;
var sSalaArq = false;
var sDispensa = false;
var sDesceu = true;
var sCorredor = false;
var badEnd1 = false;

if(sLavanderia){
	px = 374;
	py = 280;
	cx = -1595;
	cy = -1775;
}else if(sSalaF){
	px = 380;
	py = 254;
	cx = -465;
	cy = -1725;
}else if(sSalaArq){
	px = 374;
	py = 260;
	cx = -730;
	cy = -990;
}else if(sDispensa){
	px = 380;
	py = 260;
	cx = -465;
	cy = -905;
}else if(sCorredor){
	px = 380;
	py = 254;
	cx = -720;
	cy = -615;
}else if(sDesceu){
	px = 675;
	py = 438;
	cx = -2795;
	cy = -1800;
}

function CorredorTerreo()
{
	this.player = new Jogador(px,py);
	this.fundo = new MySprite("IMG/TERREO/fundo.png",0,0,3597,2400,cx,cy,3597,2400,1,0);
	this.luz = new MySprite("IMG/TERREO/luz.png",0,0,3597,2400,cx,cy,3597,2400,1,0);
	this.relampago = new MySprite("IMG/TERREO/relampago.png",0,0,3597,2400,cx,cy,3597,2400,60,5);
	this.b1 = new MySprite("",0,0,1642,737,cx + 1960,cy,1642,737,1,0);
	this.b2 = new MySprite("",0,0,2446,1318,cx + 1160,cy + 730,2446,1318,1,0);
	this.b3 = new MySprite("",0,0,839,1670,cx,cy + 730,839,1670,1,0);
	this.sofa = new MySprite("",0,0,208,55,cx + 129,cy + 131,208,55,1,0);
	this.sofa2 = new MySprite("",0,0,208,55,cx + 453,cy + 131,208,55,1,0);
	this.tv = new MySprite("",0,0,200,75,cx + 1462, cy + 692,200,75,1,0);
	this.divisao = new MySprite("",0,0,221,25,cx + 3375, cy + 2186,221,25,1,0);
	this.escada = new MySprite("",0,0,221,116,cx + 3385, cy + 2209,221,116,1,0);
	this.pLavanderia = new MySprite("",0,0,67,40,cx + 1964, cy + 2041,67,40,1,0);
	this.pSalaArq = new MySprite("",0,0,40,67,cx + 1145, cy + 1243,40,67,1,0);
	this.pSalaF = new MySprite("",0,0,40,67,cx + 814, cy + 1972,40,67,1,0);
	this.pDispensa = new MySprite("",0,0,40,67,cx + 814, cy + 1160,40,67,1,0);
	this.pCorredor = new MySprite("",0,0,40,67,cx + 1145, cy + 863,40,67,1,0);
	this.encosto = new MySprite("IMG/TERREO/encosto.png",0,0,685,50,cx + 1208, cy + 90,685,50,1,0);
	this.vaso1 = new MySprite("",0,0,40,67,cx + 97, cy + 677,40,67,1,0);
	this.vaso2 = new MySprite("",0,0,40,67,cx + 380, cy + 677,40,67,1,0);
	this.vaso3 = new MySprite("",0,0,40,67,cx + 695, cy + 677,40,67,1,0);
	this.vaso4 = new MySprite("",0,0,40,67,cx + 1245, cy + 677,40,67,1,0);
	this.vaso5 = new MySprite("",0,0,40,67,cx + 1825, cy + 677,40,67,1,0);
	//sofa em U
		this.s11 = new MySprite("",0,0,524,34,cx + 1288,cy + 124,524,34,1,0);
		this.s12 = new MySprite("",0,0,70,181,cx + 1217,cy + 124,70,181,1,0);
		this.s22 = new MySprite("",0,0,70,181,cx + 1812,cy + 124,70,181,1,0);
	//mesa em L
		this.mesa1 = new MySprite("",0,0,223,18,cx + 453, cy + 442,233,18,1,0);
		this.mesa2 = new MySprite("",0,0,42,76,cx + 661, cy + 442,42,76,1,0);

	this.objetos = new Array;
	this.objetos.push(this.relampago); 
	this.objetos.push(this.luz); 
	this.objetos.push(this.b1); 
	this.objetos.push(this.b2); 
	this.objetos.push(this.b3); 
	this.objetos.push(this.sofa); 
	this.objetos.push(this.sofa2); 
	this.objetos.push(this.tv);	
	this.objetos.push(this.divisao);
	this.objetos.push(this.escada);
	this.objetos.push(this.pLavanderia);
	this.objetos.push(this.pSalaArq);
	this.objetos.push(this.pSalaF);
	this.objetos.push(this.pDispensa);
	this.objetos.push(this.pCorredor);
	this.objetos.push(this.encosto);
	this.objetos.push(this.vaso1);
	this.objetos.push(this.vaso2);
	this.objetos.push(this.vaso3);
	this.objetos.push(this.vaso4);
	this.objetos.push(this.vaso5);
	this.objetos.push(this.s11);
	this.objetos.push(this.s12);
	this.objetos.push(this.s22);
	this.objetos.push(this.mesa1);
	this.objetos.push(this.mesa2);
	//this.hudGame = new Vida();
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.relampagoSom = new Audio();
	this.relampagoSom.src = "AUDIO/trovao1.wav";
	this.elev = false;
	this.finalBad = new Bad1();
	
	this.Draw= function()
	{
		if(badEnd1 == false){
			this.fundo.Draw();
			this.player.Draw();
			this.encosto.Draw();
			this.luz.Draw();
			//this.relampago.Draw();
			this.hudOptions.Draw();
			/*
			screen.fillStyle = "#f00";
			screen.font = "32px Tahoma";
			screen.fillText("Posição X do player: "+ this.player.jogador.x, 400, 420);
			screen.fillText("Posição Y do player: "+ this.player.jogador.y, 400, 460);
			screen.fillText("Posição X do fundo: "+ this.fundo.x, 400, 500);
			screen.fillText("Posição Y do fundo: "+ this.fundo.y, 400, 540);
			*/
		}else{
			this.finalBad.Draw();
		}
	}

	this.Update= function()
	{
		if(badEnd1 == false){
			this.fundo.Update();	
			//this.luz.Update();
			//this.relampago.Update();
			this.player.Update();
			//this.hudGame.Update();
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].Update();
			}
			if(this.player.jogador.x <= 380 && this.player.jogador.x >= 374 && this.player.jogador.y == 254 &&
			this.fundo.y == -1795 && this.fundo.x <= -2145 && this.fundo.x >= -2210 && this.elev == true && cartaoAcesso == true)
			{
				badEnd1 = true;
				console.log("Final Bad");
			}
			if(this.relampago.current_frame == 0)
			{
				if(somGlobal == true)
				{
					//this.relampagoSom.play();	
				}
			}
			//Limite Fundo.
			if(this.fundo.y >= 0){
				this.fundo.y = 0;
				//this.luz.y = 0;
				//this.relampago.y = 0;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_y = 0;
				}
			}else if(this.fundo.y <= -1800){
				this.fundo.y = -1800;	
				//this.luz.y = -1800;
				//this.relampago.y = -1800;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_y = 0;
				}
			}

			if(this.fundo.x >= 0){
				this.fundo.x = 0;
				//this.luz.x = 0;
				//this.relampago.x = 0;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_x = 0;
				}
			}else if(this.fundo.x <= -2795){
				this.fundo.x = -2795;
				//this.luz.x = -2795;
				//this.relampago.x = -2795;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_x = 0;
				}
			}
			
			//fim
			
			//Colisao com a parede do canto direito do saguao
			if(this.player.jogador.Collided(this.b1)){
				this.Colidir(this.b1.x, this.b1.y, this.b1.w, this.b1.h);
			}//fim

			//colisao com as paredes da lavanderia e outras salas do mesmo lado.
			if(this.player.jogador.Collided(this.b2)){
				this.Colidir(this.b2.x, this.b2.y, this.b2.w, this.b2.h);
			}//fim

			//colisao com a sala dos funcionarios e blablabla;
			if(this.player.jogador.Collided(this.b3)){
				this.Colidir(this.b3.x, this.b3.y, this.b3.w, this.b3.h);
			}//fim

			//Colisao com o sofa vermelho da esquerda.
			if(this.player.jogador.Collided(this.sofa)){
				this.Colidir(this.sofa.x, this.sofa.y, this.sofa.w, this.sofa.h);
			}

			//Colisao com o sofa vermelho da direita.
			if(this.player.jogador.Collided(this.sofa2)){
				this.Colidir(this.sofa2.x, this.sofa2.y, this.sofa2.w, this.sofa2.h);
			}

			//Colisao com a tv.
			if(this.player.jogador.Collided(this.tv)){
				this.Colidir(this.tv.x, this.tv.y, this.tv.w, this.tv.h);
			}
			
			//Colisao com divisao da divisao;
			if(this.player.jogador.Collided(this.divisao)){
				this.Colidir(this.divisao.x, this.divisao.y, this.divisao.w, this.divisao.h);
			}
			//Colisao com os vasos de planta;
			if(this.player.jogador.Collided(this.vaso1)){
				this.Colidir(this.vaso1.x, this.vaso1.y, this.vaso1.w, this.vaso1.h);
			}
			if(this.player.jogador.Collided(this.vaso2)){
				this.Colidir(this.vaso2.x, this.vaso2.y, this.vaso2.w, this.vaso2.h);
			}
			if(this.player.jogador.Collided(this.vaso3)){
				this.Colidir(this.vaso3.x, this.vaso3.y, this.vaso3.w, this.vaso3.h);
			}
			if(this.player.jogador.Collided(this.vaso4)){
				this.Colidir(this.vaso4.x, this.vaso4.y, this.vaso4.w, this.vaso4.h);
			}
			if(this.player.jogador.Collided(this.vaso5)){
				this.Colidir(this.vaso5.x, this.vaso5.y, this.vaso5.w, this.vaso5.h);
			}
			
			//Colisao com o sofa em L da esquerda
			if(this.player.jogador.Collided(this.s11)){
				this.ColidirC(this.s11.x, this.s11.y, this.s11.w, this.s11.h);
				this.ColidirB(this.s11.x, this.s11.y, this.s11.w, this.s11.h);
			}
			if(this.player.jogador.Collided(this.s12)){
				this.Colidir(this.s12.x, this.s12.y, this.s12.w, this.s12.h);
			}
			if(this.player.jogador.Collided(this.s22)){
				this.Colidir(this.s22.x, this.s22.y, this.s22.w, this.s22.h);
			}
			//fim*/
			//Colisao com o mesa em L
			if(this.player.jogador.Collided(this.mesa1)){
				this.Colidir(this.mesa1.x, this.mesa1.y, this.mesa1.w, this.mesa1.h);
			}
			if(this.player.jogador.Collided(this.mesa2)){
				this.Colidir(this.mesa2.x, this.mesa2.y, this.mesa2.w, this.mesa2.h);
			}
			//fim*/
			
			//Limite movimentação player e Movimentação fundo.
			if(this.player.jogador.y < 254 && this.fundo.y < 0){
				this.player.jogador.y = 254;
				this.fundo.vel_y = 5;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_y = 5;
				}
			}
			if(this.player.jogador.y > 260 && this.fundo.y > -1800){
				this.player.jogador.y = 260;
				this.fundo.vel_y = -5;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_y = -5;
				}
			}
			if(this.player.jogador.x < 374 && this.fundo.x < 0){
				this.player.jogador.x = 374;
				this.fundo.vel_x = 5;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_x = 5;
				}
			}
			if(this.player.jogador.x > 380 && this.fundo.x > -2795){
				this.player.jogador.x = 380;
				this.fundo.vel_x = -5;
				for(var i = 0; i < this.objetos.length; i++){
					this.objetos[i].vel_x = -5;
				}
			}

			if(this.player.jogador.x < 40)
				this.player.jogador.x = 40;
			else if(this.player.jogador.x > 740)
				this.player.jogador.x = 740;

			if(this.player.jogador.y < 40)
				this.player.jogador.y = 40;
			else if(this.player.jogador.y > 473)
				this.player.jogador.y = 473;
		}else{
			this.finalBad.Update()
		}
	}

	this.Colidir = function(objx, objy, objw, objh){
		if(this.player.jogador.y + this.player.jogador.h > objy && this.player.jogador.y + this.player.jogador.h < objy + 15){
			this.fundo.vel_y = 0;
			//this.luz.vel_y = 0;
			//this.relampago.vel_y = 0;
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_y = 0;
			}
			this.player.jogador.y = objy - this.player.jogador.h - 1;
		}
		if(this.player.jogador.y < objy + objh && this.player.jogador.y > objy + objh - 15){
			this.fundo.vel_y = 0;
			//this.luz.vel_y = 0;
			//this.relampago.vel_y = 0;
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_y = 0;
			}
			this.player.jogador.y = objy + objh + 1;
		}
		if(this.player.jogador.x + this.player.jogador.w > objx && this.player.jogador.x + this.player.jogador.w < objx + 15){
			this.fundo.vel_x = 0;
			//this.luz.vel_x = 0;
			//this.relampago.vel_x = 0;
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_x = 0;
			}
			this.player.jogador.x = objx - this.player.jogador.w - 1;
		}
		if(this.player.jogador.x < objx + objw && this.player.jogador.x > objx + objw - 15){
			this.fundo.vel_x = 0;
			//this.luz.vel_x = 0;
			//this.relampago.vel_x = 0;
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_x = 0;
			}
			this.player.jogador.x = objx + objw + 1;
		}
	}
	
	this.ColidirD = function(objx, objy, objw, objh){
		if(this.player.jogador.x + this.player.jogador.w > objx && this.player.jogador.x + this.player.jogador.w < objx + 15){
			this.fundo.vel_x = 0;
			//this.luz.vel_x = 0;
			//this.relampago.vel_x = 0;
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_x = 0;
			}
			this.player.jogador.x = objx - this.player.jogador.w - 1;
		}
	}
	this.ColidirE = function(objx, objy, objw, objh){
		if(this.player.jogador.x < objx + objw && this.player.jogador.x > objx + objw - 15){
			this.fundo.vel_x = 0;
			//this.luz.vel_x = 0;
			//this.relampago.vel_x = 0;
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_x = 0;
			}
			this.player.jogador.x = objx + objw + 1;
		}
	}
	this.ColidirB = function(objx, objy, objw, objh){
		if(this.player.jogador.y < objy + objh && this.player.jogador.y > objy + objh - 15){
			this.fundo.vel_y = 0;
			//this.luz.vel_y = 0;
			//this.relampago.vel_y = 0;
			
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_y = 0;
			}
			this.player.jogador.y = objy + objh + 1;
		}
	}
	this.ColidirC = function(objx, objy, objw, objh){
		if(this.player.jogador.y + this.player.jogador.h > objy && this.player.jogador.y + this.player.jogador.h < objy + 15){
			this.fundo.vel_y = 0;
			//this.luz.vel_y = 0;
			//this.relampago.vel_y = 0;
			for(var i = 0; i < this.objetos.length; i++){
				this.objetos[i].vel_y = 0;
			}
			this.player.jogador.y = objy - this.player.jogador.h - 1;
		}
	}

	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		if(badEnd1 == false){
			this.hudOptions.mouse_down(mouse);
			//this.hudGame.mouse_down(mouse);
		}else{
			this.finalBad.mouse_down(mouse);
		}
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
		if(this.player.jogador.Collided(this.pLavanderia)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.LAVANDERIA;
			}
		}
		if(this.player.jogador.Collided(this.pSalaArq)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.SALAARQ;
			}
		}
		if(this.player.jogador.Collided(this.pSalaF)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.SALAF;
			}
		}
		if(this.player.jogador.Collided(this.pDispensa)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.DISPENSA;
			}
		}
		if(this.player.jogador.Collided(this.pCorredor)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.CORREDOREXT;
			}
		}
		if(this.player.jogador.Collided(this.escada)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.CORREDOR2;
			}
		}
		if(tecla.keyCode == 32){
			this.elev = true;
		}
		if(badEnd1 == true){
			this.finalBad.key_down(tecla);
		}
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
		this.fundo.vel_x = 0;
		this.fundo.vel_y = 0;
		//this.luz.vel_x = 0;
		//this.luz.vel_y = 0;
		//this.relampago.vel_x = 0;
		//this.relampago.vel_y = 0;
		if(tecla.keyCode == 32)
		{
		this.elev = false;
		}
		for(var i = 0; i < this.objetos.length; i++){
			this.objetos[i].vel_x = 0;
			this.objetos[i].vel_y = 0;
			
		}
	}
}
