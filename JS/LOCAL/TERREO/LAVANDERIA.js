var nojo = true;
function Lavanderia()
{
	//Bibliotecas Padrao
	this.player = new Jogador (535,420);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	//Cenario
	this.fundoP = new MySprite("IMG/FP.png",0,0,24,20,0,0,800,600,1,0);
	this.fundo = new MySprite("IMG/LAVANDERIA/Lavanderia.png",0,0,1600,500,0,50,1600,500,1,0);
	this.luz = new MySprite("IMG/LAVANDERIA/luz.png",0,0,1600,500,0,50,1600,500,1,0);
	this.obj = new MySprite("IMG/LAVANDERIA/LavanderiaObj.png",0,0,1600,500,0,50,1600,500,3,1);
	//Colisores do Cenario
	//IMG/bloco2.png
	this.col1 = new MySprite("",0,0,24,20,174,100,58,70,1,0);
	this.col2 = new MySprite("",0,0,24,20,392,84,80,104,1,0);
	this.col3 = new MySprite("",0,0,24,20,673,100,58,70,1,0);
	this.col4 = new MySprite("",0,0,24,20,931,84,80,104,1,0);
	this.col5 = new MySprite("",0,0,24,20,1172,100,58,70,1,0);
	this.col6 = new MySprite("",0,0,24,20,1390,84,80,104,1,0);
	this.col7 = new MySprite("",0,0,24,20,174,329,58,36,1,0);
	this.col8 = new MySprite("",0,0,24,20,392,329,80,54,1,0);
	this.col9 = new MySprite("",0,0,24,20,673,329,58,36,1,0);
	this.col10 = new MySprite("",0,0,24,20,931,329,80,54,1,0);
	this.col11 = new MySprite("",0,0,24,20,1172,329,58,36,1,0);
	this.col12 = new MySprite("",0,0,24,20,1390,329,80,54,1,0);
	this.col13 = new MySprite("",0,0,24,20,524,68,91,68,1,0);
	this.col14 = new MySprite("",0,0,24,20,801,95,41,42,1,0);
	
	this.colisao = new Array();
	this.colisao.push(this.col1,this.col2,this.col3,this.col4,this.col5,this.col6,this.col7,this.col8,this.col9,this.col10,this.col11,this.col12,this.col13,this.col14);
	
	//Porta
	this.porta = new MySprite("",0,0,24,20,535,465,50,50,1,0);
	this.abrir = false;
	this.delay = 10;
	this.pegar = false;
	//IA-----------------------------------------------------------
	//IA-----------------------------------------------------------
	
	this.Draw= function()
	{
		this.fundoP.Draw();
		this.fundo.Draw();
		this.player.Draw();
		this.obj.Draw();
		this.luz.Draw();
		//Desenho da Colisao
		/*
		for(var i = 0; i < this.colisao.length; i++)
		{
			this.colisao[i].Draw();
		}
		*/
		this.hudOptions.Draw();
		/*
		screen.font = "20px Arial MS";
		screen.fillStyle = "#ff0000";
		screen.fillText(this.player.jogador.x+" X",50,50);
		screen.fillText(this.player.jogador.y+" Y",50,100);
		*/
		//this.porta.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
		this.fundo.Update();
		this.obj.Update();
		ColisaoL(this.player,this.colisao);
		if(this.player.jogador.Collided(this.porta) && this.abrir == true && this.delay == -1)
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
		if(this.delay > -1 && nojo == false)
		{
			this.delay --;
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
		// Moveimento da SALA ---------------------
		if(this.player.jogador.x < 198 && this.fundo.x <= -5){
			this.player.jogador.x = 198;
			this.fundo.x -= -5;
			this.obj.x -= -5;
			this.porta.x -= -5;
			this.luz.x -= -5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].x -= -5;
			}
		}
		
		if(this.player.jogador.x > 600 && this.fundo.x >= -795){
			this.player.jogador.x = 600;
			this.fundo.x -= 5;
			this.obj.x -= 5;
			this.porta.x -= 5;
			this.luz.x -= 5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].x -= 5;
			}
		}
		//Dialogos
		if (nojo == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala22";
			jogadorStop = true;
		}
		else if (this.player.jogador.Collided(this.colisao[13]) && cartaoAcesso == false)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala23";
			if(this.pegar == true)
			{
				cartaoAcesso = true;
			}
		}
		else
		{
			this.hudOptions.falar.mostrar = false;
			jogadorStop = false;
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
			nojo = false;
			this.pegar = true;
			this.abrir = true;
		}
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
		if(tecla.keyCode == 32)
		{
			this.pegar = false;
			this.abrir = false;
		}
	}
}