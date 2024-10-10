var reFporta1 = false;
function Refeitorio()
{
	this.fundo = new MySprite("IMG/refeitorio/refeitorio.png",0,0,1600,600,0,0,1600,600,1,0);
	
	this.mesa1 = new MySprite("",0,0,100,20,148,178,235,105,1,0);
	this.mesa2 = new MySprite("",0,0,100,20,560,237,235,105,1,0);
	this.mesa3 = new MySprite("",0,0,100,20,965,270,235,100,1,0);
	this.balcao = new MySprite("",0,0,100,20,1432,165,37,320,1,0);
	
	this.cadeira1 = new MySprite("",0,0,100,20,335,385,30,20,1,0);
	this.cadeira2 = new MySprite("",0,0,100,20,895,205,15,20,1,0);
	this.cadeira3 = new MySprite("",0,0,100,20,1225,315,10,5,1,0);
	
	this.player = new Jogador (40,265);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.mesas = new Array();
	this.mesas.push(this.mesa1,this.mesa2,this.mesa3,this.cadeira1,this.cadeira2,this.cadeira3,this.balcao);
	this.porta = new MySprite("",0,0,24,20,10,270,50,50,1,0);
	this.abrir = false;
	this.susto1 = true;
	
	this.luz = new MySprite("IMG/refeitorio/luz.png",0,0,1600,600,0,0,1600,600,1,0);
	
	this.Draw= function(){
		
		this.fundo.Draw();
		this.player.Draw();
		this.mesa1.Draw();
		this.mesa2.Draw();
		this.mesa3.Draw();
		this.balcao.Draw();
		this.cadeira1.Draw();
		this.cadeira2.Draw();
		this.cadeira3.Draw();
		this.luz.Draw();
		this.hudOptions.Draw();
		this.porta.Draw();
		/*
		screen.font = "20px Arial MS";
		screen.fillStyle = "#ff0000";
		screen.fillText(this.player.jogador.x+" X",50,50);
		screen.fillText(this.player.jogador.y+" Y",50,100);
		screen.fillText(this.fundo.x+" XC",50,150);
		screen.fillText(this.porta.x+" XP",50,200);
		*/
	}
	
	this.Update= function(){
		this.player.Update();
		this.porta.Update();
		if(this.susto1 == true)
		{
			if(somGlobal == true)
			{
				this.bam = new Audio();
				this.bam.src = "AUDIO/BAM.mp3";
				this.bam.play();
			}
			this.susto1 = false;
		}
		if(reFporta1 == true)
		{
			this.player.jogador.x = 40;
			this.player.jogador.y = 265;
			reFporta1 = false;
		}
		//Colisao com as paredes -----------------
		
		//console.log(this.player.jogador.x);
		if(this.player.jogador.x <= 38){
			this.player.jogador.x = 38
		}
		
		if(this.player.jogador.x >= 710){
			this.player.jogador.x = 710;
		}
		
		if(this.player.jogador.y <= 95){
			this.player.jogador.y = 95
		}
		
		if(this.player.jogador.y >= 430){
			this.player.jogador.y = 430
		}
		
		// Moveimento da SALA ---------------------
		if(this.player.jogador.x < 198 && this.fundo.x <= -5){
			this.player.jogador.x = 198;
			this.fundo.x -= -5;
			this.porta.x -= -5;
			this.luz.x -= -5;
			for(var i = 0; i < this.mesas.length; i++)
			{
			this.mesas[i].x -= -5;
			}
			
		}
		
		if(this.player.jogador.x > 600 && this.fundo.x >= -795){
			this.player.jogador.x = 600;
			this.fundo.x -= 5;
			this.porta.x -= 5;
			this.luz.x -= 5;
			for(var i = 0; i < this.mesas.length; i++)
			{
			this.mesas[i].x -= 5;
			}
		}
		
		//Colisao com as mesas
		
		ColisaoL(this.player , this.mesas);
		if(this.player.jogador.Collided(this.porta) && this.abrir == true)
		{
			refeitorio2 = true;
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
	this.mouse_up= function(mouse)
	{}
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