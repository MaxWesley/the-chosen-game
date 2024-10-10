function Options()
{
	this.fundo = new MySprite("IMG/Menu/fundoOptions.png", 0, 0, 800, 600, 0, 0, 800, 600, 0, 0);
	this.voltar = new Button("IMG/Menu/voltar.png",240,55,585,533);
	this.somEscolha = new Audio();
	this.somEscolha.src = "AUDIO/escolha.wav";
	this.Draw= function()
	{
		this.fundo.Draw();
		this.voltar.Draw();
	}
	this.Update= function()
	{}
	this.mouse_move= function(mouse)
	{
		this.voltar.Over(mouse);
	}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		if(this.voltar.Clicked(mouse))
		{
			this.somEscolha.play();
			this.voltar.button.sy = 0;
			currentScene = scene.MENU;
		}
	}
	this.key_down= function(tecla)
	{}
	this.key_up= function(mouse)
	{}
}
