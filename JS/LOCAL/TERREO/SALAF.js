function SalaFuncionarios()
{
	this.player = new Jogador (700,265);
	this.options = new Hud();

	this.cenario = new Array();
		/*this.chao = new MySprite("IMG/SALAF/chao.png", 0, 0, 765, 656, -3, 0, 767, 656, 0, 0);
		this.parede = new MySprite("IMG/SALAF/parede2.png", 0, 0, 800, 800, 0, 0, 800, 800, 0, 0);
		this.banheiro = new MySprite("IMG/SALAF/banheiro.png", 0, 0, 451, 418, 1, 0, 451, 418, 0, 0);
		this.linhas = new MySprite("IMG/SALAF/linhas2.png", 0, 0, 800, 800, 0, 0, 800, 800, 0, 0);
		this.cor = new MySprite("IMG/SALAF/cor.png", 0, 0, 448, 412, 0, -2, 448, 412, 0, 0);*/
		this.fundo = new MySprite("IMG/SALAF/fundo.png", 0, 0, 800, 800, 0, 0, 800, 800, 0, 0);
		this.luz = new MySprite("IMG/SALAF/luz.png", 0, 0, 800, 800, 0, 0, 800, 800, 0, 0);
			this.c1 = new MySprite("", 0, 0, 115, 60, 558, 43, 115, 60, 0, 0);
			this.c2 = new MySprite("", 0, 0, 430, 385, 0, 0, 430, 385, 0, 0);
			this.c3 = new MySprite("", 0, 0, 48, 1000, 768, 0, 48, 1000, 0, 0);
			this.c4 = new MySprite("", 0, 0, 104, 30, 578, 484, 104, 30, 0, 0);
			this.c5 = new MySprite("", 0, 0, 80, 5, 595, 617, 80, 5, 0, 0);
			this.c6 = new MySprite("", 0, 0, 40, 110, 458, 532, 40, 110, 0, 0);
			this.c7 = new MySprite("", 0, 0, 5, 170, 434.50, 466, 5, 170, 0, 0);
			this.c8 = new MySprite("", 0, 0, 119, 40, 300, 583, 119, 40, 0, 0);
			this.c9 = new MySprite("", 0, 0, 119, 40, 300, 473, 119, 40, 0, 0);
			this.c10 = new MySprite("", 0, 0, 119, 40, 35, 473, 119, 40, 0, 0);
			this.c11 = new MySprite("", 0, 0, 119, 40, 35, 583, 119, 40, 0, 0);

		this.cenario.push(this.c1, this.c2, this.c3, this.c4, this.c5, this.c6, this.c7, this.c8, this.c9, this.c10, this.c11);
		this.porta = new MySprite("",0,0,24,20,735,265,50,50,1,0);
		this.abrir = false;

	this.Draw= function()
	{
		this.fundo.Draw();
		//this.parede.Draw();
		//this.chao.Draw();
		//this.banheiro.Draw();
		//this.linhas.Draw();
		//this.cor.Draw();

		this.player.Draw();
		this.luz.Draw();
		this.options.Draw();
		for(var i = 0; i < this.cenario.length; i++)
		{
			if(this.cenario.length != null)
			{
				this.cenario[i].Draw();
			}
		}
		//this.porta.Draw();
	}

	this.Update= function()
	{
		this.player.Update();
		//-------------------------------------------------------------
		ColisaoL(this.player, this.cenario);
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
		if(this.player.jogador.y <= 25){
			this.player.jogador.y = 25;
		}
		if(this.player.jogador.x <= 30){
			this.player.jogador.x = 30;
		}

		if(this.player.jogador.y >= 482){
			this.player.jogador.y = 482;
		}
		//-----------------------------------------------------------------------

		/*if(this.fundo.y <= -190){
			this.fundo.y  = -190;
		}
		else if(this.fundo.y	>=	0){
			this.fundo.y = 0;
		}*/
		//-----------------------------------------------------------------------

		if(this.player.jogador.y < 150 && this.fundo.y <= -5){
			this.player.jogador.y = 150;
			this.fundo.y -= -5;
			this.luz.y -= -5;
			this.porta.y -= -5;
			for(var i = 0; i < this.cenario.length; i++)
			{
			this.cenario[i].y -= -5;
			}
		}

		if(this.player.jogador.y > 481 && this.fundo.y >= -190){
			this.player.jogador.y = 481;
			this.fundo.y -= 5;
			this.luz.y -= 5;
			this.porta.y -= 5;
			for(var i = 0; i < this.cenario.length; i++)
			{
			this.cenario[i].y -= 5;
			}
		}

		ColisaoL(this.player , this.cenario);


	}


	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		this.options.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
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
