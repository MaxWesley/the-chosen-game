var tvSong = new Audio();
	tvSong.src = "AUDIO/chiado3.mp3";
function Lazer()
{
	this.fundo = new MySprite("IMG/lazer/Salalazerfundo.png",0,0,800,800,0,-100,800,800,1,0);
	this.tv = new MySprite("IMG/lazer/tv.png",0,0,40,32,358,-30,90,68,2,32);
	this.sofa =	 new MySprite("",0,0,100,20,320,124,150,35,1,0);
	this.sinuca = new MySprite("",0,0,100,20,555,200,100,235,1,0);
	this.luz = new MySprite("IMG/lazer/luz.png",0,0,800,800,0,-100,800,800,2,10);
	this.relampago = new MySprite("IMG/lazer/relampago.png",0,0,800,800,0,-100,800,800,60,5);
	this.relampagoSom = new Audio();
	this.relampagoSom.src = "AUDIO/trovao1.wav";
	
	this.m1b1 = new MySprite("",0,0,100,20,110,515,130,20,1,0);
	this.m1b2 = new MySprite("",0,0,100,20,164,462,20,115,1,0);
	this.m2b1 = new MySprite("",0,0,100,20,305,342,130,20,1,0);
	this.m2b2 = new MySprite("",0,0,100,20,362,290,20,115,1,0);
	this.m3b1 = new MySprite("",0,0,100,20,60,140,130,20,1,0);
	this.m3b2 = new MySprite("",0,0,100,20,117,88,20,115,1,0);
	
	this.m1 = new MySprite("",0,0,100,20,138,492,70,70,1,0);
	this.m2 = new MySprite("",0,0,100,20,337,315,70,70,1,0);
	this.m3 = new MySprite("",0,0,100,20,92,115,70,70,1,0);
	
	this.player = new Jogador (45,265);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.colisao = new Array();
	
	this.colisao.push(this.sofa,this.sinuca,this.m1,this.m2,this.m3,this.m1b1,this.m1b2,this.m2b1,this.m2b2,this.m3b1,this.m3b2,this.tv);
	this.porta = new MySprite("",0,0,24,20,10,270,50,50,1,0);
	this.abrir = false;
	
	this.Draw= function(){
		this.fundo.Draw();
		this.player.Draw();
		this.sofa.Draw();
		this.m1b1.Draw();
		this.m1b2.Draw();
		this.m2b1.Draw();
		this.m2b2.Draw();
		this.m3b1.Draw();
		this.m3b2.Draw();
		this.m1.Draw();
		this.m2.Draw();
		this.m3.Draw();
		this.sinuca.Draw();
		this.tv.Draw();
		this.luz.Draw();
		this.relampago.Draw();
		this.hudOptions.Draw();
		this.porta.Draw();
	}
	
	this.Update= function(){
		this.player.Update();
		this.porta.Update();
		if(currentScene == scene.LAZER)
		{
			if(somGlobal == true)
			{
				tvSong.play();
			}
		}
		else
		{
			tvSong.pause();
		}
		if(this.relampago.current_frame == 0)
		{
			if(somGlobal == true)
			{
				this.relampagoSom.play();	
			}
		}
		//Colisao com as paredes ------------------
		
		if(this.player.jogador.y <= 65){
			this.player.jogador.y = 65
		}
		
		if(this.player.jogador.y >= 465){
			this.player.jogador.y = 465
		}
		
		if(this.player.jogador.x <= 45){
			this.player.jogador.x = 45
		}
		
		if(this.player.jogador.x >= 705){
			this.player.jogador.x = 705
		}
		
		//movimento da sala ------------------
		
		if(this.player.jogador.y < 150 && this.fundo.y <= -5){
			this.player.jogador.y = 150;
			this.fundo.y -= -5;
			this.porta.y -= -5;
			this.luz.y -= -5;
			this.relampago.y -= -5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].y -= -5;
			}
			
		}
		
		if(this.player.jogador.y > 390 && this.fundo.y >= -195){
			this.player.jogador.y = 390;
			this.fundo.y -= 5;
			this.porta.y -= 5;
			this.luz.y -= 5;
			this.relampago.y -= 5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].y -= 5;
			}
		}
		
		
		//Colisao com os objetos ------------------
		
		ColisaoL(this.player , this.colisao);
		if(this.player.jogador.Collided(this.porta) && this.abrir == true)
		{
			slazer = true;
			tvSong.pause();
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.CORREDOR2;
			this.abrir = false;
		}
		
	}
	
	this.mouse_move= function(mouse)
	{}
	
	this.mouse_up= function(mouse){
		
	}
	
	this.mouse_down= function(mouse)
	{
		this.hudOptions.mouse_down(mouse);
	}
	
	this.key_down= function(tecla){
		this.player.AndarOn(tecla);
		if(tecla.keyCode == 32)
		{
			this.abrir = true;
		}
	}
	
	this.key_up= function(tecla){
		this.player.AndarOff(tecla);
		if(tecla.keyCode == 32)
		{
			this.abrir = false;
		}
	}
	
}