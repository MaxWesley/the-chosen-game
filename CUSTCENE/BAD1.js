function Bad1()
{
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.hudOptions.Draw();
	this.bad1 = new MySprite("IMG/bad1.png",0,0,1780,1980,0,0,800,600,2,10);
	this.fundo = new MySprite("IMG/chao.jpg",0,0,1600,1200,0,0,800,600,1,0);
	
	this.delay = 20;
	
	this.Draw= function()
	{
		this.fundo.Draw();
		this.bad1.Draw();
		this.hudOptions.Draw();
		screen.font = "40px Arial MS";
		screen.fillStyle = "#8B0000";
		screen.fillText("FINAL SUICÍDIO",260,350);
	}
	this.Update= function()
	{
		if(this.delay > 2)
		{
			this.delay --;
		}
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala24";
	}
	this.mouse_down= function(mouse)
	{
		this.hudOptions.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		if(tecla.keyCode == 32 && this.delay == 2)
		{
			currentScene = scene.CREDITS;
		}
	}
}

function Bad2()
{
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.hudOptions.Draw();
	this.bad1 = new MySprite("IMG/running.png",0,0,2624,2783,0,0,800,600,1,0);
	this.delay = 20;
	
	this.Draw= function()
	{
		this.bad1.Draw();
		this.hudOptions.Draw();
		screen.font = "40px Arial MS";
		screen.fillStyle = "#8B0000";
		screen.fillText("FINAL ESCAPE",260,350);
	}
	this.Update= function()
	{
		if(this.delay > 2)
		{
			this.delay --;
		}
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala27";
	}
	this.mouse_down= function(mouse)
	{
		this.hudOptions.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		if(tecla.keyCode == 32 && this.delay == 2)
		{
			currentScene = scene.CREDITS;
		}
	}
}

function GoodFinal()
{
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.hudOptions.Draw();
	this.bad1 = new MySprite("IMG/deimos.png",0,0,548,353,0,0,800,600,1,0);
	this.delay = 20;
	this.delay2 = 20;
	this.falaInicial = true;
	this.passar = 1;
	
	this.Draw= function()
	{
		this.bad1.Draw();
		this.hudOptions.Draw();
		screen.font = "40px Arial MS";
		screen.fillStyle = "#8B0000";
		screen.fillText("FINAL BOM",260,350);
		/*
		screen.fillText(this.delay2,260,450);
		screen.fillText(this.passar,260,500);
		*/
		
	}
	this.Update= function()
	{
		if(this.delay > 2)
		{
			this.delay --;
		}
		if(this.delay2 > 2)
		{
			this.delay2 --;
		}
		
		if(this.passar == 1)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala28";
		}
		else if(this.passar == 2)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala29";
		}
		else if(this.passar == 3)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala30";
		}
		else if(this.passar == 4)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala31";
		}
		else if(this.passar == 5)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala32";
		}
		else if(this.passar == 6)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala33";
		}
		else if(this.passar == 7)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala34";
		}
		else if(this.passar == 8)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala35";
		}
		else if(this.passar == 9)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala36";
		}
		else if(this.passar == 10)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "fala37";
		}
		else if(this.passar == 11)
		{
		this.hudOptions.falar.mostrar = true;
		this.hudOptions.falar.tag = "falaE7";
		}
	}
	this.mouse_down= function(mouse)
	{
		this.hudOptions.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		if(tecla.keyCode == 32 && this.delay == 2 && this.passar == 11)
		{
			currentScene = scene.CREDITS;
		}
		
		if(tecla.keyCode == 32 && this.delay2 == 2)
		{
			this.passar += 1;
			this.delay2 = 20;
		}
	}
	this.mouse_move= function(mouse)
	{}
}