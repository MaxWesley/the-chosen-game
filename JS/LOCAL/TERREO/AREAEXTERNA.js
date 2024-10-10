function AreaExterna()
{
	this.player = new Jogador (50,50);
	this.luzLamp = new MySprite("IMG/LuzLamp.png",0,0,1600,1200,-800,-600,1600,1200,1,0);
	this.deimos = new MySprite("IMG/DEIMOSSP.png",0,0,44,53,373,273,54,54,1,0);
	this.finalGood = new GoodFinal();
	this.goodEnd = false; 
	
	this.Draw= function()
	{
		if(this.goodEnd == false)
		{
			this.deimos.Draw();
			this.player.Draw();
			this.luzLamp.Draw();
		}
		else
		{
			this.finalGood.Draw();
		}
	}
	this.Update= function()
	{
		if(this.goodEnd == false)
		{
			this.player.Update();
			this.deimos.Update();
			this.luzLamp.Update();
			if(this.player.jogador.Collided(this.deimos))
			{
				this.goodEnd = true;
			}
			this.luzLamp.x = this.player.jogador.x-795;
			this.luzLamp.y = this.player.jogador.y-590;
		
			if(this.player.jogador.x <= 38)
			{
				this.player.jogador.x = 38
			}
		
			if(this.player.jogador.x >= 740)
			{
				this.player.jogador.x = 740;
			}
		
			if(this.player.jogador.y <= 38)
			{
				this.player.jogador.y = 38
			}
		
			if(this.player.jogador.y >= 540)
			{
				this.player.jogador.y = 540
			}
		}
		else
		{
			this.finalGood.Update();
		}
	}
	this.mouse_move= function(mouse)
	{
		if(this.goodEnd == true)
		{
			this.finalGood.mouse_move(mouse);
		}
	}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		if(this.goodEnd == true)
		{
			this.finalGood.mouse_down(mouse);
		}
	}
	this.key_down= function(tecla)
	{
		if(this.goodEnd == false)
		{
			this.player.AndarOn(tecla);
		}
		else
		{
			this.finalGood.key_down(tecla);
		}
	}
	this.key_up= function(tecla)
	{
		if (this.goodEnd == false)
		{
			this.player.AndarOff(tecla);
		}
	}
}