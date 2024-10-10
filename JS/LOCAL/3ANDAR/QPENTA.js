acordou = true;
function QPenta()
{
	this.player = new Jogador (210,370);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.fundo = new MySprite("IMG/QPENTA/SalaP.png",0,0,800,600,0,0,800,600,1,0);
	this.cama = new MySprite("",0,0,221,147,75,75,221,147,1,0);
	this.luz = new MySprite("IMG/QPENTA/luzQP.png",0,0,800,600,0,0,800,600,2,5);
	this.relampago = new MySprite("IMG/QPENTA/RelampagoQP.png",0,0,800,600,0,0,800,600,60,5);
	this.relampagoSom = new Audio();
	this.relampagoSom.src = "AUDIO/trovao1.wav";
	this.porta = new MySprite("",0,0,800,600,750,280,50,50,1,0);
	this.abrir = false;
	this.listaB = new Array();
	this.listaB.push(this.cama);
	this.listaB.push(this.livro = new MySprite("IMG/QPENTA/livro.png",0,0,48,32,467,421,48,32,1,0));
	this.Draw= function()
	{
		this.fundo.Draw();
		this.player.Draw();
		for(var i = 0; i < this.listaB.length; i++)
		{
			if(this.listaB.length != null)//se a lista nao estiver vazia
			{
				this.listaB[i].Draw();
			}
		}
		this.luz.Draw();
		this.relampago.Draw();
		this.porta.Draw();
		this.hudOptions.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
		ColisaoL(this.player,this.listaB);
		if(this.relampago.current_frame == 0)
		{
			if(somGlobal == true)
			{
				this.relampagoSom.play();
			}
		}
		if (acordou == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala1";
			jogadorStop = true;
		}
		else if(this.player.jogador.Collided(this.listaB[1]))
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala2";
		}
		else
		{
			this.hudOptions.falar.mostrar = false;
			jogadorStop = false;
		}
		if(this.player.jogador.Collided(this.porta) && this.abrir == true)
		{
			sQPenta = true;
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.CORREDOR3;
			this.abrir = false;
		}
		//Colisao com as paredes -----------------
		if(this.player.jogador.x <= 52){
			this.player.jogador.x = 52
		}
		
		if(this.player.jogador.x >= 700){
			this.player.jogador.x = 700;
		}
		
		if(this.player.jogador.y <= 42){
			this.player.jogador.y = 42
		}
		
		if(this.player.jogador.y >= 490){
			this.player.jogador.y = 490
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
			acordou = false;
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