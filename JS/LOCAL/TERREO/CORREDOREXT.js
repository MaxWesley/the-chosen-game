function CorredorExt()
{
	this.player = new Jogador (50,260);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	//cenarios
	this.fundo = new MySprite("IMG/CORREDOREXT/minicorredor.png",0,0,800,600,0,0,800,600,1,0);
	this.portaEsq = new MySprite("IMG/BIBLIOTECA/portaesq.png",0,0,36,66,12,267,36,66,1,0);
	this.portaEsq.current_frame = 1;
	this.portaDir = new MySprite("IMG/CORREDOREXT/portadirnoite.png",0,0,36,66,753,265,36,66,1,0);
	this.bad2 = false;
	this.finalBad = new Bad2();
	//this.portaDir.current_frame = 1;
	
	this.Draw= function()
	{
		if(this.bad2 == false)
		{
		this.fundo.Draw();
		this.portaEsq.Draw();
		this.portaDir.Draw();
		this.player.Draw();
		this.hudOptions.Draw();
		}
		else
		{
			this.finalBad.Draw();
		}
	}
	this.Update= function()
	{
		if(this.bad2 == false)
		{
			this.player.Update();		
			//limite do personagem
			if(this.player.jogador.y < 217)
			{
				this.player.jogador.y = 217;
			}
		
			if(this.player.jogador.y > 299)
			{
				this.player.jogador.y = 299;
			}
		
			if(this.player.jogador.x < 35)
			{
				this.player.jogador.x = 35;
			}
		
			if(this.player.jogador.x > 713)
			{
				this.player.jogador.x = 713;
			}
		}
		else
		{
			this.finalBad.Update();
		}
	}
	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		if(this.bad2 == false)
		{
			this.hudOptions.mouse_down(mouse);
		}
		else
		{
			this.finalBad.mouse_down(mouse);
		}
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
		
		if(tecla.keyCode == 32)
		{
			if(this.player.jogador.Collided(this.portaEsq))
			{
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.CORREDORTERREO;
			}
			
			if(this.player.jogador.Collided(this.portaDir))
			{
				this.bad2 = true;
			}
		}
		if(this.bad2 == true)
		{
			this.finalBad.key_down(tecla);
		}
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}