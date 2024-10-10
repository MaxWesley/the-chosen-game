var refeitorio1 = false;
var scozinha = false;
var refeitorio2 = false;
var slazer = false;
var sbiblioteca = false;
var subiu = false;
var sDesceu = true;
var xp, yp, xc, yc;
var sorteInt = true;
var queOuve = false;
var mAfastar = true;

if(subiu){
	xp = 625;
	yp = 400;
	xc = -2050;
	yc = -1865;
}else if(sDesceu){
	xp = 625;
	yp = 290;
	xc = -2050;
	yc = -1825;
}else if(refeitorio1){
	xp = 360;
	yp = 240;
	xc = -865;
	yc = -1825;
}else if(scozinha){
	xp = 100;
	yp = 245;
	xc = 0;
	yc = -1740;
}else if(refeitorio2){
	xp = 350;
	yp = 260;
	xc = 0;
	yc = -1470;
}else if(slazer){
	xp = 350;
	yp = 260;
	xc = 0;
	yc = -820;
}else if(sbiblioteca){
	xp = 350;
	yp = 260;
	xc = 0;
	yc = -75;
}


function Corredor2Andar()
{
	this.player = new Jogador (xp,yp);
	this.fundo = new MySprite("IMG/CORREDOR2A/corredor2.png",0,0,2924,2511,xc,yc,2924,2511,2,0);
	//ILUMINACAO
	this.luz = new MySprite("IMG/CORREDOR2A/luz.png",0,0,2924,2511,xc,yc,2924,2511,1,0);
	this.luzPad = new MySprite("IMG/luz.png",0,0,800,900,0,0,800,600,1,0);
	this.relampago = new MySprite("IMG/CORREDOR2A/relampago.png",0,0,2924,2511,xc,yc,2924,2511,60,5);
	this.luzLamp = new MySprite("IMG/LuzLamp.png",0,0,1600,1200,-800,-600,1600,1200,1,0);
	//ILUMINACAO
	this.bloco = new MySprite("",0,0,2458,2051,(xc + 410),yc,2458,2051,1,0);
	this.pBiblioteca = new MySprite("",0,0,40,67,(xc + 395),(yc + 330),40,67,1,0);
	this.pLazer = new MySprite("",0,0,40,67,(xc + 395),(yc + 1080),40,67,1,0);
	this.pRefeitorio2 = new MySprite("",0,0,40,67,(xc + 395),(yc + 1732),40,67,1,0);
	this.pCozinha = new MySprite("",0,0,40,67,(xc + 69),(yc + 1982),40,67,1,0);
	this.quadroLuz = new MySprite("",0,0,67,40,(xc + 1221),(yc + 2045),67,40,1,0);
	this.Divisao = new MySprite("",0,0,258,25,(xc + 2601),(yc + 2209),258,25,1,0);
	this.Escada = new MySprite("",0,0,250,130,(xc + 2605),(yc + 2078),250,130,1,0);
	this.Escada2 = new MySprite("",0,0,250,130,(xc + 2605),(yc + 2234),250,130,1,0);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.passarD = false;
	this.delay = 0;
	this.quadroON = false;
	this.relampagoSom = new Audio();
	this.relampagoSom.src = "AUDIO/trovao1.wav";
	//IA-------------------------------------------------------------------------
	this.loucos = new LoucosIA(1,xc+155,yc+135,xc+90,xc+358,yc+65,yc+400,this.player);
	this.loucos2 = new LoucosIA(2,xc+155,yc+135,xc+120,xc+358,yc+365,yc+900,this.player);
	this.loucos3 = new LoucosIA(3,xc+155,yc+135,xc+130,xc+358,yc+900,yc+1500,this.player);
	//IA-------------------------------------------------------------------------
	
	this.Draw= function()
	{
		this.fundo.Draw();
		this.player.Draw();
		//this.quadroLuz.Draw();
		//IA-------------------------------------------------------------------------
		if(bibliotecaGatilho == true)
		{
			this.loucos.Draw();
			this.loucos2.Draw();
			this.loucos3.Draw();
		}
		//IA-------------------------------------------------------------------------
		if(lampadaON == true)
		{
			if (sorteInt == true)
			{
			this.luzLamp.Draw();
			this.relampago.visible = false;
			}
			if(queOuve == true)
			{
				this.luzPad.Draw();
			}
		}
		else
		{
			this.luz.Draw();
			this.relampago.Draw();
			this.relampago.visible = true;
		}
		this.hudOptions.Draw();
		/*
		screen.fillStyle = "#f00";
		screen.font = "32px Tahoma";
		screen.fillText("Posição X do player: "+ this.player.jogador.x, 400, 420);
		screen.fillText("Posição Y do player: "+ this.player.jogador.y, 400, 460);
		screen.fillText("Posição X da Fundo: "+ this.fundo.x, 400, 500);
		screen.fillText("Posição Y da Fundo: "+ this.fundo.y, 400, 540);
		*/
	}
	this.Update= function()
	{
		this.bloco.Update();
		this.pBiblioteca.Update();
		this.pLazer.Update();
		this.pRefeitorio2.Update();
		this.quadroLuz.Update();
		this.pCozinha.Update();
		this.Divisao.Update();
		this.Escada.Update();
		this.Escada2.Update();
		this.fundo.Update();
		this.luz.Update();
		//ILUMINACAO--------------------------------------------
		this.luzLamp.Update();
		this.luzLamp.x = this.player.jogador.x-795;
		this.luzLamp.y = this.player.jogador.y-590;
		//------------------------------------------------------
		this.relampago.Update();
		//IA-------------------------------------------------------------------------
		if(bibliotecaGatilho == true)
		{
			this.loucos.Update();
			this.loucos.lxme = this.fundo.x+90;
			this.loucos.lxma = this.fundo.x+358;
			this.loucos.lyme = this.fundo.y+65;
			this.loucos.lyma = this.fundo.y+400;
			
			this.loucos2.Update();
			this.loucos2.lxme = this.fundo.x+120;
			this.loucos2.lxma = this.fundo.x+358;
			this.loucos2.lyme = this.fundo.y+315;
			this.loucos2.lyma = this.fundo.y+900;
			
			this.loucos3.Update();
			this.loucos3.lxme = this.fundo.x+130;
			this.loucos3.lxma = this.fundo.x+358;
			this.loucos3.lyme = this.fundo.y+900;
			this.loucos3.lyma = this.fundo.y+1500;
		}
		//IA-------------------------------------------------------------------------
		this.player.Update();
	
		if(this.relampago.current_frame == 0 && this.relampago.visible == true)
		{
			if(somGlobal == true)
			{
				this.relampagoSom.play();	
			}
		}
			this.bloco.y = this.fundo.y;
			this.pBiblioteca.y = this.fundo.y + 330;
			this.pLazer.y = this.fundo.y + 1080;
			this.pRefeitorio2.y = this.fundo.y + 1732;
			this.quadroLuz.y = this.fundo.y + 2045;
			this.pCozinha.y = this.fundo.y + 1982;
			this.Divisao.y = this.fundo.y + 2209;
			this.Escada.y = this.fundo.y + 2078;
			this.Escada2.y = this.fundo.y + 2234;
			//this.loucos.normal.y = this.fundo.y + 135;

			this.bloco.x = this.fundo.x + 410;
			this.pBiblioteca.x = this.fundo.x + 395;
			this.pLazer.x = this.fundo.x + 395;
			this.pRefeitorio2.x = this.fundo.x + 395;
			this.quadroLuz.x = this.fundo.x + 1221;
			this.pCozinha.x = this.fundo.x + 69;
			this.Divisao.x = this.fundo.x + 2601;
			this.Escada.x = this.fundo.x + 2605;
			this.Escada2.x = this.fundo.x + 2605;
			//this.loucos.normal.x = this.fundo.x + 155;
		
		if(this.player.jogador.Collided(this.bloco)){
			if(this.player.jogador.x + this.player.jogador.w > this.bloco.x && this.player.jogador.x + this.player.jogador.w < this.bloco.x + 10){
				this.player.jogador.x = this.bloco.x - this.player.jogador.w;
			}
			if(this.player.jogador.y < this.bloco.y + this.bloco.h && this.player.jogador.y > this.bloco.y + this.bloco.h -10){
				this.player.jogador.y = this.bloco.y + this.bloco.h;
			}
		}
		
		if(this.player.jogador.Collided(this.Divisao)){
			if(this.player.jogador.x + this.player.jogador.w > this.Divisao.x && this.player.jogador.x + this.player.jogador.w < this.Divisao.x + 10){
				this.player.jogador.x = this.Divisao.x - this.player.jogador.w;
			}
			if(this.player.jogador.y < this.Divisao.y + this.Divisao.h && this.player.jogador.y > this.Divisao.y + this.Divisao.h -10){
				this.player.jogador.y = this.Divisao.y + this.Divisao.h;
			}
			if(this.player.jogador.y + this.player.jogador.h > this.Divisao.y && this.player.jogador.y + this.player.jogador.h < this.Divisao.y + 10){
				this.player.jogador.y = this.Divisao.y - this.player.jogador.h; 
			}
		}
		
		//Limite Fundo.
		if(this.fundo.y > 0){
			this.fundo.y = 0;
			this.luz.y =0;
			this.relampago.y =0;
		}else if(this.fundo.y < -1910){
			this.fundo.y = -1910;
			this.luz.y = -1910;
			this.relampago.y = -1910;
		}
		
		if(this.fundo.x > 0){
			this.fundo.x = 0;
			this.luz.x = 0;
			this.relampago.x = 0;
		}else if(this.fundo.x < -2050){
			this.fundo.x = -2050;
			this.luz.x = -2050;
			this.relampago.x = -2050;
		}
		
		//Limite movimentação player e Movimentação fundo.
		if(this.player.jogador.y < 65){
			this.player.jogador.y = 65;
			this.fundo.vel_y = 5;
			this.luz.vel_y = 5;
			this.relampago.vel_y = 5;
			//IA-------------------------------------------------------------------------
			this.loucos.normal.vel_y = 5;
			this.loucos2.normal.vel_y = 5;
			this.loucos3.normal.vel_y = 5;
			//IA-------------------------------------------------------------------------
		}else if(this.player.jogador.y > 400){
			this.player.jogador.y = 400;
			this.fundo.vel_y = -5;
			this.luz.vel_y = -5;
			this.relampago.vel_y = -5;
			//IA-------------------------------------------------------------------------
			this.loucos.normal.vel_y = -5;
			this.loucos2.normal.vel_y = -5;
			this.loucos3.normal.vel_y = -5;
			//IA-------------------------------------------------------------------------
		}
		if(this.player.jogador.x < 90){
			this.player.jogador.x = 90;
			this.fundo.vel_x = 5;
			this.luz.vel_x = 5;
			this.relampago.vel_x = 5;
			//IA-------------------------------------------------------------------------
			this.loucos.normal.vel_x = 5;
			this.loucos2.normal.vel_x = 5;
			this.loucos3.normal.vel_x = 5;
			//IA-------------------------------------------------------------------------
		}else if(this.player.jogador.x > 625){
			this.player.jogador.x = 625;
			this.fundo.vel_x = -5;
			this.luz.vel_x = -5;
			this.relampago.vel_x = -5;
			//IA-------------------------------------------------------------------------
			this.loucos.normal.vel_x = -5;
			this.loucos2.normal.vel_x = -5;
			this.loucos3.normal.vel_x = -5;
			//IA-------------------------------------------------------------------------
		}
		//Dialogo
		if(this.player.jogador.Collided(this.Escada2) && bibliotecaGatilho == false)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "falaE4";
		}
		else if(sorteInt == true && this.fundo.x >= -1130)
		{
			jogadorStop = true;
			this.fundo.x = -1130;
			this.fundo.current_frame = 1;
			this.luz.x = -1130;
			this.relampago.x = -1130;
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.jogador.moveD = false;
			this.player.jogador.moveE = false;
			this.player.jogador.baixo = false;
			this.player.jogador.cima = false;
			this.player.jogador.x = 90;
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala12";
			if(this.passarD == true)
			{
				queOuve = true;
				sorteInt = false;
			}
		}
		else if(queOuve == true && this.player.jogador.Collided(this.quadroLuz) && this.quadroON == true)
		{
			jogadorStop = true;
			lampadaON = false;
			this.fundo.x = -1130;
			this.luz.x = -1130;
			this.relampago.x = -1130;
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.jogador.moveD = false;
			this.player.jogador.moveE = false;
			this.player.jogador.baixo = false;
			this.player.jogador.cima = false;
			this.player.jogador.x = 90;
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala13";
			this.delay ++;
			if(this.delay > 10)
			{
				if(this.passarD == true)
				{
					queOuve = false;
					this.delay = 0;
				}
			}
		}
		else if(bibliotecaGatilho == true && mAfastar == true)
		{
			jogadorStop = true;
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala20";
			this.delay ++;
			if(this.delay > 10)
			{
			if(this.passarD == true)
				{
					mAfastar = false;
					this.delay = 0;
				}
			}
		}
		else
		{
			this.hudOptions.falar.mostrar = false;
			jogadorStop = false;
			if(this.quadroON == false && this.fundo.x >= -1130)
			{
				this.fundo.x = -1131;
				this.luz.x = -1131;
				this.relampago.x = -1131;
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.jogador.moveD = false;
				this.player.jogador.moveE = false;
				this.player.jogador.baixo = false;
				this.player.jogador.cima = false;
				this.player.jogador.x = 90;
			}
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
		
		if(this.player.jogador.Collided(this.pBiblioteca)){
			if(tecla.keyCode == 32 && this.delay == 0){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.BIBLIOTECA;
			}
		}
		
		if(this.player.jogador.Collided(this.pLazer)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.LAZER;
			}
		}
		
		if(this.player.jogador.Collided(this.pRefeitorio2)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.REFEITORIO;
			}
		}
		
		if(this.player.jogador.Collided(this.pCozinha)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.COZINHA;
			}
		}
		
		if(this.player.jogador.Collided(this.quadroLuz)){
			if(tecla.keyCode == 32){
				this.quadroON = true;
			}
		}
		
		if(this.player.jogador.Collided(this.Escada)){
			if(tecla.keyCode == 32){
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.CORREDOR3;
			}
		}
		
		if(this.player.jogador.Collided(this.Escada2)){
			if(tecla.keyCode == 32){
				if(bibliotecaGatilho == true)
				{
					this.player.jogador.vel_x = 0;
					this.player.jogador.vel_y = 0;
					this.player.moveD = false;
					this.player.moveE = false;
					this.player.baixo = false;
					this.player.cima = false;
					this.player.jogador.setFPS(0);
					currentScene = scene.CORREDORTERREO;
				}
			}
		}
		if(tecla.keyCode == 32)
		{
			this.passarD = true;
		}
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
		this.fundo.vel_x = 0;
		this.fundo.vel_y = 0;
		this.luz.vel_x = 0;
		this.luz.vel_y = 0;
		this.relampago.vel_x = 0;
		this.relampago.vel_y = 0;
		if(tecla.keyCode == 32)
		{
			this.passarD = false;
		}
	}
}