var deficuldade = 3;
function CorredorExt()
{
	this.player = new Jogador (50,50);
	this.hudGame = new Vida();
	this.louco = new LoucosIA(1,200,100);
	this.delay = 20;
	
	this.Draw= function()
	{
		this.player.Draw();
		this.hudGame.Draw();
		this.louco.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
		this.hudGame.Update();
		this.louco.Update();
		screen.font = "20px Arial MS";
		screen.fillStyle = "#ff0000";
		screen.fillText(this.player.jogador.x+" XP",50,50);
		screen.fillText(this.player.jogador.y+" YP",50,100);
		screen.fillText(this.louco.normal.x+" XE",50,150);
		screen.fillText(this.louco.normal.y+" YE",50,200);
		
		if(this.player.jogador.Collided(this.louco.areaDeAlerta))
		{
			if(this.louco.normal.x < this.player.jogador.x+this.player.jogador.w)
			{
			this.louco.normal.x += deficuldade;
			}
			if(this.louco.normal.y < this.player.jogador.y+this.player.jogador.h)
			{
			this.louco.normal.y += deficuldade;
			}
			if(this.louco.normal.x > this.player.jogador.x+this.player.jogador.w)
			{
			this.louco.normal.x -= deficuldade;
			}
			if(this.louco.normal.y > this.player.jogador.y+this.player.jogador.h)
			{
			this.louco.normal.y -= deficuldade;
			}
		}
		if(this.player.jogador.Collided(this.louco.normal) && this.delay == -1)
		{
			perdeVida = true;
			this.delay = 20;
		}
		if(this.delay > -1)
		{
			this.delay --;
		}
	}
	this.mouse_move= function(mouse)
	{
		this.hudGame.mouse_move(mouse);
	}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		this.hudGame.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}