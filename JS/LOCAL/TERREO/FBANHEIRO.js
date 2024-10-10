function FBanheiro()
{
	this.player = new Jogador (50,50);
	this.Draw= function()
	{
		this.player.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
	}
	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}