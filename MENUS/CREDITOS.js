function Credits()
{
	this.creditos = new MySprite("IMG/Menu/creditos.png", 0, 0, 800, 2566, 0, 0, 800, 2566, 0, 0);
	this.fundo = new MySprite("IMG/Menu/fCreditos.png", 0, 0, 800, 600, 0, 0, 800, 600, 0, 0);
	this.voltar = new Button("IMG/Menu/voltar.png",240,55,585,533);
	this.somEscolha = new Audio();
	this.somEscolha.src = "AUDIO/escolha.wav";
	this.creditosSom = new Audio();
	this.creditosSom.src = "AUDIO/creditos.wav";
	this.limite = 0;
	this.Draw= function()
	{
		this.fundo.Draw();
		this.creditos.Draw();

		this.creditos.y --;
		//console.log(this.creditos.y);

		 if(this.creditos.y <= -2025){
			 this.creditos.y = -2025;
			 this.voltar.Draw();
		 }
	}

	this.Update= function()
	{
		this.creditosSom.play();
	}
	this.mouse_move= function(mouse)
	{
		this.voltar.Over(mouse);
	}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		if(this.voltar.Clicked(mouse)){
			this.somEscolha.play();
			this.voltar.button.sy = 0;
			this.creditos.y = 0;
			this.creditosSom.pause();
			resetGame = true;
			currentScene = scene.MENU;
		}
	}
	this.key_down= function(tecla)
	{}
	this.key_up= function(mouse)
	{}
}
