var sAlmoxarifado = false;
var sQPenta = true;
var sChuveiros = false;
var sBanheiro = false;
var sProjecao = false;
var calmo = true;
var lampadaON = false;
function Corredor3Andar()
{
	//HUDs Player e Inventario-------------------
	this.player = new Jogador (340,250);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	//Corredor 3 Andar
	//IMG/bloco2.png
	this.fundo = new MySprite("IMG/CORREDOR3A/corredor3.png",0,0,3300,2600,0,0,3300,2600,1,0);
	this.luzoff = new MySprite("IMG/CORREDOR3A/luz1.png",0,0,3300,2600,0,0,3300,2600,1,0);
	this.luzLamp = new MySprite("IMG/LuzLamp.png",0,0,1600,1200,-800,-600,1600,1200,1,0);
	this.relampago = new MySprite("IMG/CORREDOR3A/relampago.png",0,0,3300,2600,0,10,3300,2600,60,5);
	this.luzpadrao = new MySprite("IMG/luz.png",0,0,800,900,0,0,800,900,1,0);
	this.relampagoSom = new Audio();
	this.relampagoSom.src = "AUDIO/trovao1.wav";
	this.fadeIn = new MySprite("IMG/fadeIn.png",0,0,800,600,0,0,800,600,25,0);
	this.fadeIn.visible = false;
	this.fadeOut = new MySprite("IMG/fadeOut.png",0,0,800,600,0,0,800,600,25,0);
	this.fadeOut.visible = false;
	this.fadeFIM = false;
	
	this.col1 = new MySprite("",0,0,24,20,660,180,2100,1990,1,0);
	this.col2 = new MySprite("",0,0,24,20,295,1680,404,10,1,0);
	this.col3 = new MySprite("",0,0,24,20,2617,2100,265,220,1,0);
	
	this.porta1 = new MySprite("",0,0,24,20,305,225,50,50,1,0);
	this.porta2 = new MySprite("",0,0,24,20,635,225,50,50,1,0);
	this.porta3 = new MySprite("",0,0,24,20,305,1280,50,50,1,0);
	this.porta4 = new MySprite("",0,0,24,20,635,1280,50,50,1,0);
	this.porta5 = new MySprite("",0,0,24,20,305,2280,50,50,1,0);
	this.porta6 = new MySprite("",0,0,24,20,635,223,50,50,1,0);
	this.abrir = false;
	this.delay = 10;
	this.apagarL = true;
	
	this.grade = new MySprite("IMG/CORREDOR3A/corredor3Grade.png",0,0,404,239,295,1500,404,239,2,0);
	this.colisao = new Array();
	this.colisao.push(this.col1,this.col2,this.col3);
	
	this.Draw= function()
	{
		this.fundo.Draw();
		this.player.Draw();
		this.grade.Draw();
		this.fadeIn.Draw();
		//this.fadeOut.Draw();
		if(lampadaON == true)
		{
			this.luzLamp.Draw();
			this.relampago.visible = false;
		}
		else
		{
			this.luzoff.Draw();
			this.relampago.Draw();
			this.relampago.visible = true;
		}
		//this.luzpadrao.Draw();
		this.hudOptions.Draw();
		this.col2.Draw();
		this.col1.Draw();
		
		this.porta1.Draw();
		this.porta2.Draw();
		this.porta3.Draw();
		this.porta4.Draw();
		this.porta5.Draw();
		this.porta6.Draw();
		/*
		screen.font = "20px Arial MS";
		screen.fillStyle = "#ff0000";
		screen.fillText(this.player.jogador.x+" X",50,50);
		screen.fillText(this.player.jogador.y+" Y",50,100);
		screen.fillText(this.fundo.x+" XC",50,150);
		screen.fillText(this.fundo.y+" YC",50,200);
		screen.fillText(this.delay+" delay",50,250);
		screen.fillText(this.fadeIn.current_frame+" Frame",50,300);
		screen.fillText(sDesceu+" 2Andar?",50,350);
		*/
	}
	this.Update= function()
	{
		this.player.Update();
		this.fundo.Update();
		this.luzoff.Update();
		this.grade.Update();
		//VER10.0 LANTERNA------------------------------
		this.luzLamp.Update();
		this.luzLamp.x = this.player.jogador.x-795;
		this.luzLamp.y = this.player.jogador.y-590;
		//VER10.0 LANTERNA------------------------------
		if(this.relampago.current_frame == 0 && this.relampago.visible == true)
		{
			if(somGlobal == true)
			{
				this.relampagoSom.play();
			}
		}
		for(var i = 0; i < this.colisao.length; i++)
		{
			this.colisao[i].Update();
		}
		//Update e Movimento das portas e Entrada.
		this.porta1.Update();
		this.porta1.x = 305 + this.fundo.x;
		this.porta1.y = 225 + this.fundo.y;
		this.porta2.Update();
		this.porta2.x = 635 + this.fundo.x;
		this.porta2.y = 225 + this.fundo.y;
		this.porta3.Update();
		this.porta3.x = 305 + this.fundo.x;
		this.porta3.y = 1280 + this.fundo.y;
		this.porta4.Update();
		this.porta4.x = 635 + this.fundo.x;
		this.porta4.y = 1280 + this.fundo.y;
		this.porta5.Update();
		this.porta5.x = 305 + this.fundo.x;
		this.porta5.y = 1880 + this.fundo.y;
		this.porta6.Update();
		this.porta6.x = 835 + this.fundo.x;
		this.porta6.y = 2125 + this.fundo.y;
		if (this.player.jogador.Collided(this.porta1) && this.abrir == true && semBolsa == false)
		{
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.ALMOXARIFADO;
			this.abrir = false;
			if(somGlobal == true)
			{
				this.portaQP = new Audio();
				this.portaQP.src = "AUDIO/portaNormal2.wav";
				this.portaQP.play();
			}
		}
		if (this.player.jogador.Collided(this.porta2) && this.abrir == true)
		{
			console.log("fechado")
			this.abrir = false;
		}
		if (this.player.jogador.Collided(this.porta3) && this.abrir == true)
		{
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.QPENTA;
			this.abrir = false;
			if(somGlobal == true)
			{
				this.portaQP = new Audio();
				this.portaQP.src = "AUDIO/portaNormal2.wav";
				this.portaQP.play();
			}
		}
		if (this.player.jogador.Collided(this.porta4) && this.abrir == true)
		{
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.CHUVEIROS;
			this.abrir = false;
			if(somGlobal == true)
			{
				this.portaQP = new Audio();
				this.portaQP.src = "AUDIO/portaNormal2.wav";
				this.portaQP.play();
			}
		}
		if (this.player.jogador.Collided(this.porta5) && this.abrir == true)
		{
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.SPROJECAO;
			this.abrir = false;
			if(somGlobal == true)
			{
				this.portaQP = new Audio();
				this.portaQP.src = "AUDIO/portaNormal2.wav";
				this.portaQP.play();
			}
		}
		if (this.player.jogador.Collided(this.porta6) && this.abrir == true)
		{
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.BANHEIRO;
			this.abrir = false;
			if(somGlobal == true)
			{
				this.portaQP = new Audio();
				this.portaQP.src = "AUDIO/portaNormal2.wav";
				this.portaQP.play();
			}
		}
		//De onde Ele saiu
		if (sQPenta == true)
		{
			this.player.jogador.y = 390;
			this.player.jogador.x = 320;
			this.fundo.y = -885;
			this.fundo.x = -20;
			this.luzoff.y = -885;
			this.luzoff.x = -20;
			this.relampago.y = -885;
			this.relampago.x = -25;
			this.grade.x = 295+this.fundo.x;
			this.grade.y = 1500+this.fundo.y;
			this.colisao[0].x = 660+this.fundo.x;
			this.colisao[0].y = 180+this.fundo.y;
			this.colisao[1].x = 295+this.fundo.x;
			this.colisao[1].y = 1680+this.fundo.y;
			this.colisao[2].x = 2617+this.fundo.x;
			this.colisao[2].y = 2100+this.fundo.y;
			sQPenta = false;
		}
		if (sChuveiros == true)
		{
			this.player.jogador.y = 380;
			this.player.jogador.x = 385;
			this.fundo.y = -885;
			this.fundo.x = -210;
			this.luzoff.y = -885;
			this.luzoff.x = -210;
			this.relampago.y = -885;
			this.relampago.x = -215;
			this.grade.x = 295+this.fundo.x;
			this.grade.y = 1500+this.fundo.y;
			this.colisao[0].x = 660+this.fundo.x;
			this.colisao[0].y = 180+this.fundo.y;
			this.colisao[1].x = 295+this.fundo.x;
			this.colisao[1].y = 1680+this.fundo.y;
			this.colisao[2].x = 2617+this.fundo.x;
			this.colisao[2].y = 2100+this.fundo.y;
			sChuveiros = false;
		}
		if(sAlmoxarifado == true)
		{
			this.player.jogador.y = 170;
			this.player.jogador.x = 155;
			this.fundo.y = -50;
			this.fundo.x = -185;
			this.luzoff.y = -50;
			this.luzoff.x = -185;
			this.relampago.y = -50;
			this.relampago.x = -190;
			this.grade.x = 295+this.fundo.x;
			this.grade.y = 1500+this.fundo.y;
			this.colisao[0].x = 660+this.fundo.x;
			this.colisao[0].y = 180+this.fundo.y;
			this.colisao[1].x = 295+this.fundo.x;
			this.colisao[1].y = 1680+this.fundo.y;
			this.colisao[2].x = 2617+this.fundo.x;
			this.colisao[2].y = 2100+this.fundo.y;
			sAlmoxarifado = false;
		}
		if (sProjecao == true)
		{
			this.player.jogador.y = 280;
			this.player.jogador.x = 155;
			this.fundo.y = -1595;
			this.fundo.x = -185;
			this.luzoff.y = -1595;
			this.luzoff.x = -185;
			this.relampago.y = -1595;
			this.relampago.x = -190;
			this.grade.x = 295+this.fundo.x;
			this.grade.y = 1500+this.fundo.y;
			this.colisao[0].x = 660+this.fundo.x;
			this.colisao[0].y = 180+this.fundo.y;
			this.colisao[1].x = 295+this.fundo.x;
			this.colisao[1].y = 1680+this.fundo.y;
			this.colisao[2].x = 2617+this.fundo.x;
			this.colisao[2].y = 2100+this.fundo.y;
			sProjecao = false
		}
		if (sBanheiro == true)
		{
			this.player.jogador.y = 375;
			this.player.jogador.x = 370;
			this.fundo.y = -1810;
			this.fundo.x = -460;
			this.luzoff.y = -1810;
			this.luzoff.x = -460;
			this.relampago.y = -1810;
			this.relampago.x = -465;
			this.grade.x = 295+this.fundo.x;
			this.grade.y = 1500+this.fundo.y;
			this.colisao[0].x = 660+this.fundo.x;
			this.colisao[0].y = 180+this.fundo.y;
			this.colisao[1].x = 295+this.fundo.x;
			this.colisao[1].y = 1680+this.fundo.y;
			this.colisao[2].x = 2617+this.fundo.x;
			this.colisao[2].y = 2100+this.fundo.y;
			sBanheiro = false
		}
		//Colisao com as paredes ------------------
		
		if(this.player.jogador.y <= 160+this.fundo.y)
		{
			this.player.jogador.y = 160+this.fundo.y;
		}
		if(this.player.jogador.y >= 410)
		{
			this.player.jogador.y = 410;
		}
		if(this.player.jogador.x <= 335+this.fundo.x)
		{
			this.player.jogador.x = 335+this.fundo.x;
		}
		if(this.player.jogador.x >= 705)
		{
			this.player.jogador.x = 705;
		}
		if(this.player.jogador.x >= 600+this.fundo.x && this.fundo.y >= -1785)
		{
			this.player.jogador.x = 600+this.fundo.x;
		}
		//movimento do corredor3 ------------------
		if(this.player.jogador.y < 150 && this.fundo.y <= -5)
		{
			this.player.jogador.y = 150;
			this.fundo.y -= -5;
			this.luzoff.y -= -5;
			this.grade.y -= -5;
			this.relampago.y -= -5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].y -= -5;
			}
		}
		if(this.player.jogador.y > 390 && this.fundo.y >= -1980)
		{
			this.player.jogador.y = 390;
			this.fundo.y -= 5;
			this.luzoff.y -= 5;
			this.grade.y -= 5;
			this.relampago.y -= 5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].y -= 5;
			}
		}
		if(this.player.jogador.x < 150 && this.fundo.x <= -5)
		{
			this.player.jogador.x = 150;
			this.fundo.x -= -5;
			this.luzoff.x -= -5;
			this.grade.x -= -5;
			this.relampago.x -= -5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].x -= -5;
			}
		}
		if(this.player.jogador.x > 390 && this.fundo.x >= -1980)
		{
			this.player.jogador.x = 390;
			this.fundo.x -= 5;
			this.luzoff.x -= 5;
			this.grade.x -= 5;
			this.relampago.x -= 5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].x -= 5;
			}
		}
		//Fim do movimento do corredor3 ------------------
		ColisaoL(this.player,this.colisao);
		//Dialogos-----------------------------------------
		if(calmo == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala3";
			jogadorStop = true;
		}
		else if(this.apagarL == true && lampadaON == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "falaE6";
			this.delay = 10;
			jogadorStop = true;
		}
		else if(this.player.jogador.Collided(this.porta1) && semBolsa == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "falaE2";
		}
		else if(this.player.jogador.Collided(this.colisao[1]) && caixaDeFerramenta == false)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala5";
		}
		else if(this.fundo.y < -1740 && (lanterna == false || lampada == false))
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala9";
			this.fundo.y = -1740;
			this.luzoff.y = -1740;
			this.relampago.y = -1740;
			this.player.y = 390;
		}
		else
		{
			this.hudOptions.falar.mostrar = false;
			jogadorStop = false;
		}
		if(this.delay > -1 && calmo == false)
		{
			this.delay --;
		}
		//Versao Sem FadeIn
		/*
		if(this.player.jogador.Collided(this.colisao[1]) && caixaDeFerramenta == true)
		{
			this.player.jogador.y += 70;
		}
		*/
		//Versao Com FadeIn
		if(this.player.jogador.Collided(this.colisao[1]) && caixaDeFerramenta == true && this.fadeFIM == false)
		{
			this.fadeIn.visible = true;
			if(this.fadeIn.current_frame < 24)
			{
				this.fadeIn.setFPS(10);
			}
			jogadorStop = true;
			if (this.fadeIn.current_frame == 24)
			{
				this.col2.w = 250;
				this.grade.current_frame = 1;
				this.fadeIn.visible = false;
				this.fadeIn.setFPS(0);
				jogadorStop = false;
			}
		}
		if (caixaDeFerramenta == true && this.fundo.y == -1305)
		{
			this.fadeIn.current_frame = 0;
			this.fadeFIM = true;
		}
	}
	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		this.hudOptions.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
		if(tecla.keyCode == 32)
		{
			calmo = false;
			if(lampadaON == true)
			{
				this.apagarL = false;
			}
			if(this.delay == -1)
			{
			this.abrir = true;
			}
			if(this.fundo.x == -1985 && this.player.jogador.x >= 675)
			{
				sDesceu = true;
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
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
		if(tecla.keyCode == 32)
		{
			this.abrir = false;
		}
	}
}