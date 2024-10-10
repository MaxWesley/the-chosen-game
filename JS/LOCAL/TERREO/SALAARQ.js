var finalBom = false;
function SalaArquivo()
{
	//Bibliotecas Padrao
	this.player = new Jogador (50,280);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	//Cenario
	this.fundoP = new MySprite("IMG/FP.png",0,0,24,20,0,0,800,600,1,0);
	this.fundo = new MySprite("IMG/SalaDeArq/SalaDeArq.png",0,0,800,500,0,50,800,500,2,10);
	this.luz = new MySprite("IMG/SalaDeArq/luz.png",0,0,800,500,0,50,800,500,2,0);
	//Colisores do Cenario
	//IMG/bloco2.png
	this.col1 = new MySprite("",0,0,24,20,53,107,131,55,1,0);
	this.col2 = new MySprite("",0,0,24,20,229,87,66,100,1,0);
	this.col3 = new MySprite("",0,0,24,20,340,107,131,55,1,0);
	this.col4 = new MySprite("",0,0,24,20,518,87,66,100,1,0);
	this.col5 = new MySprite("",0,0,24,20,628,87,66,100,1,0);
	this.col6 = new MySprite("",0,0,24,20,168,285,122,105,1,0);
	this.col7 = new MySprite("",0,0,24,20,521,285,122,105,1,0);
	this.alcapao = new MySprite("IMG/SalaDeArq/alcapao.png",0,0,100,110,650,255,80,82,1,0);
	this.alcapao.visible = false;
	this.colisao = new Array();
	this.colisao.push(this.col1,this.col2,this.col3,this.col4,this.col5,this.col6,this.col7);
	this.porta = new MySprite("",0,0,24,20,10,290,50,50,1,0);
	this.abrir = false;
	
	this.Draw= function()
	{
		this.fundoP.Draw();
		this.fundo.Draw();
		if(finalBom == true)
		{
			this.alcapao.Draw();
			this.alcapao.visible = true;
		}
		this.player.Draw();
		this.luz.Draw();
		/*
		for(var i = 0; i < this.colisao.length; i++)
		{
			this.colisao[i].Draw();
		}
		*/
		this.hudOptions.Draw();
		//this.porta.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
		ColisaoL(this.player,this.colisao)
		if(this.player.jogador.Collided(this.porta) && this.abrir == true)
		{
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.CORREDORTERREO;
			this.abrir = false;
		}
		//Colisao com as paredes -----------------
		if(this.player.jogador.x <= 38){
			this.player.jogador.x = 38
		}
		
		if(this.player.jogador.x >= 710){
			this.player.jogador.x = 710;
		}
		
		if(this.player.jogador.y <= 95){
			this.player.jogador.y = 95
		}
		
		if(this.player.jogador.y >= 420){
			this.player.jogador.y = 420
		}
		if(this.player.jogador.Collided(this.alcapao) && this.alcapao.visible == true)
		{
			currentScene = scene.AREAEXTERNA;
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
		//console.log(tecla.keyCode);
		if(tecla.keyCode == 32)
		{
			this.abrir = true;
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