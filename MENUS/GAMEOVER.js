function GameOver()
{
	this.fundo = new MySprite("IMG/GameOver/GameOver.png",0,0,800,600,0,0,800,600,1,0);
	this.yes = new Button("IMG/GameOver/optionyes.png",166,115,132,438,166,115);
	this.no = new Button("IMG/GameOver/optionno.png",140,115,440,438,140,115);
	this.fadeout = new MySprite("IMG/GameOver/fadeout.png",0,0,800,600,0,0,800,600,11,0);
	this.contadorRetorno = 0;
	
	this.risada = new Audio();
	this.risada.src = "AUDIO/risada.wav";
	this.morteSong = new Audio();
	this.morteSong.src = "AUDIO/morte.wav";
	
	this.Draw= function()
	{
		this.fundo.Draw();
		this.yes.Draw();
		this.no.Draw();
		this.fadeout.Draw();
	}
	
	this.Update= function()
	{
		if(currentScene == scene.GAMEOVER)
		{
			this.morteSong.play();
		}
		else
		{
			this.morteSong.pause();
		}
		//ao voltar para a tela de game over os valores sao zerados
		if(this.contadorRetorno == 1)
		{
			this.fadeout.current_frame = 0;
			this.fadeout.setFPS(0);
			this.contadorRetorno = 0;
		}
		
		//escolhendo nao escurece a tela e vai para a intro
		if(this.fadeout.current_frame == 10)
		{
			this.contadorRetorno ++;
			resetGame = true;
			currentScene = scene.INTRO;
			this.morteSong.pause();
		}
	}
	this.mouse_move= function(mouse)
	{
		this.yes.Over(mouse);
		this.no.Over(mouse);
	}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		//clicando sim volta para o inicio do jogo
		if (this.yes.Clicked(mouse))
		{
			resetGame = true;
			currentScene = scene.QPENTA;
			this.morteSong.pause();
		}
		
		//clicando nao volta para a intro
		if(this.no.Clicked(mouse))
		{
			this.fadeout.setFPS(4);
			this.risada.play();
		}
	}
	this.key_down= function(tecla)
	{}
	this.key_up= function(mouse)
	{}
}