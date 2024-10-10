perdeVida = false;
function Vida()
{
	this.barra = new MySprite("IMG/Barra.png",-1,-1,800,600,0,0,800,600,3,0);
	this.barra.current_frame = 1;
	this.invent = new Button ("IMG/INVENTARIO/mochilas.png",60,60,740,540);
	this.inventEstado = false;
	this.inventHud = new Inventario();
	//console.log("HUD Game Carregada");
	
	this.Draw= function()
	{
		this.barra.Draw();
		if(semBolsa == false)
		{
			this.invent.Draw();
			if(this.inventEstado == true)
			{
				this.inventHud.Draw();
				if (this.inventHud.inventhud.visible == false)
				{
				this.inventHud.inventhud.visible = true;
				}
			}
			else
			{
				this.inventHud.inventhud.visible = false;
			}
		}
	}
	this.Update= function()
	{
		this.barra.Update();
		if(this.inventEstado == true)
		{
			this.inventHud.Update();
		}
		if (this.barra.current_frame > 2)
		{
		console.log("GameOver")
		currentScene = scene.GAMEOVER;
		}
		if(kitUsado == true)
		{
			if(this.barra.current_frame <= 3 && this.barra.current_frame > 0)
			{
			this.barra.current_frame --;
			}
			kitUsado = false;
		}
		if(perdeVida == true)
		{
			if(this.barra.current_frame <= 3)
			{
			this.barra.current_frame ++;
			}
			perdeVida = false;
		}
	}
	this.mouse_move= function(mouse)
	{
		this.invent.Over(mouse);
		this.inventHud.mouse_move(mouse);
	}
	this.mouse_up= function(mouse)
	{
		//this.barra.current_frame ++;
	}
	this.mouse_down= function(mouse)
	{
		//semBolsa = false;
		//Descomentar para Liberar bolsa
		if(semBolsa == false)
		{
			if(this.invent.Clicked(mouse))
			{
				console.log("Mostrar Inventario");3
				this.inventEstado = !this.inventEstado;
			}
			this.inventHud.mouse_down(mouse);
		}
	}
	this.key_down= function(tecla)
	{}
	this.key_up= function(mouse)
	{}
}