function Menu()
{
	this.carregar = new Array;
	this.fundo = new Image();
	this.fundo.src = "IMG/Menu/AsylumN.png";

	this.noite = new Image();
	this.noite.src = "IMG/Menu/noite.png";

	this.play = new Button("IMG/Menu/play.png",240,55,280,400);
	this.options = new Button("IMG/Menu/options.png",240,55,280,456);
	this.credits = new Button("IMG/Menu/credits.png",240,55,280,507);

	this.somEscolha = new Audio();
	this.somEscolha.src = "AUDIO/escolha.wav";
	this.music = new Audio();
	this.music.src ="AUDIO/menu.mp3";

	this.titulo = new MySprite("IMG/MENU/Titulo.png",0,0,800,600,0,0,800,600,1,0);
	this.bg = new MySprite("IMG/MENU/BG.png",0,0,800,150,0,450,800,150,0,0);

	this.fadeOut = new MySprite("IMG/MENU/fadeOut.png", 0, 0, 800, 600, 0, 0, 800, 600, 24, 2.5);


	this.posX = -2180;
	this.posY = -2580;
	this.scala_x = 4515;
	this.scala_y = 4527;

	this.Draw= function()
	{
		screen.drawImage(this.fundo,this.posX,this.posY,this.scala_x,this.scala_y);
		screen.drawImage(this.noite,this.posX,this.posY,this.scala_x,this.scala_y);
		/*
		screen.font = "40px Arial MS";
		screen.fillStyle = "#ff0000";
		screen.fillText(this.posX,50,50);
		screen.fillText(this.posY,50,150);
		screen.fillText(this.scala_x,50,50);
		screen.fillText(this.scala_y,50,150);
		*/
		this.bg.Draw();
		this.play.Draw();
		this.options.Draw();
		this.credits.Draw();
		this.titulo.Draw();
		this.fadeOut.Draw();

	}
	this.Update= function()
	{
		this.music.play();
		if(this.posX < -50)
		{
			this.posX += 5.9/4;
			this.posY += 6.5/4;
			this.scala_x -= 10/4;
			this.scala_y -= 10/4;
		}
		if(this.fadeOut.current_frame >= 23)
		{
			this.fadeOut.setFPS(0);
		}

	}
	this.mouse_move= function(mouse)
	{
		this.play.Over(mouse);
		this.options.Over(mouse);
		this.credits.Over(mouse);
	}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		if(this.play.Clicked(mouse))
		{
			this.somEscolha.play();
			this.play.button.sy = 0;
			currentScene = scene.QPENTA;
			this.music.pause();
		}
		if(this.options.Clicked(mouse))
		{
			this.somEscolha.play();
			this.options.button.sy = 0;
			currentScene = scene.OPTIONS;
		}
		if(this.credits.Clicked(mouse))
		{
			this.somEscolha.play();
			this.credits.button.sy = 0;
			this.music.pause();
			currentScene = scene.CREDITS;
		}
	}
	this.key_down= function(tecla)
	{}
	this.key_up= function(mouse)
	{}
}
