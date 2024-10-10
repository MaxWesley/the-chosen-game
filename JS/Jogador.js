var jogadorStop = true;
function Jogador(x,y)
{
	this.jogador= new MySprite("IMG/personagem.png",0,0,32,32,x,y,52,52,4,0);
	this.x = this.jogador.x;
	this.y = this.jogador.y;
    this.w = this.jogador.w;
    this.h = this.jogador.h;
	this.songPassos = new Audio();
	this.songPassos.src = "AUDIO/passos.wav";
	
	//Movimentos Sem Bugs
	this.moveD = false;
	this.moveE = false;
	this.cima = false;
	this.baixo = false;
	this.travarMov = false;
	//Fim dos Movs...
	
	this.Draw = function()
	{
	this.jogador.Draw();	
	}
	this.Update = function()
	{
	this.jogador.Update();
	if(jogadorStop == false)
		{
			if (this.moveD == true && this.travarMov == false)
			{
				this.jogador.sy = 64;
				this.jogador.vel_x = 5;
				this.jogador.setFPS(10);
				this.songPassos.play();
			}
			if (this.moveE == true && this.travarMov == false)
			{
				this.jogador.sy = 32;
				this.jogador.vel_x = -5;
				this.jogador.setFPS(10);
				this.songPassos.play();
			}
			if (this.cima == true && this.travarMov == false)
			{
				this.jogador.sy = 0;
				this.jogador.vel_y = 5;
				this.jogador.setFPS(10);
				this.songPassos.play();
			}
			if (this.baixo == true && this.travarMov == false)
			{
				this.jogador.sy = 96;
				this.jogador.vel_y = -5;
				this.jogador.setFPS(10);
				this.songPassos.play();
			}
		}
	else
		{
		this.jogador.vel_x = 0;
		this.jogador.vel_y = 0;
		this.jogador.moveD = false;
		this.jogador.moveE = false;
		this.jogador.baixo = false;
		this.jogador.cima = false;
		}
	}
	this.AndarOn= function(tecla)
	{
		if(this.travarMov == false)
		{
			if (tecla.keyCode == 37)
			{
			//this.jogador.setFPS(10);
			//this.jogador.vel_x = -5;
			this.moveE = true;
			}
			if (tecla.keyCode == 39)
			{
			//this.jogador.setFPS(10);
			//this.jogador.vel_x = 5;
			this.moveD = true;
			}
			if (tecla.keyCode == 38)
			{
			//this.jogador.setFPS(10);
			//this.jogador.vel_y = -5;
			this.baixo = true;
			}
			if (tecla.keyCode == 40)
			{
			//this.jogador.setFPS(10);
			//this.jogador.vel_y = 5;
			this.cima = true;
			}
		}
		if(tecla.keyCode == 32)
		{
			this.jogador.vel_x = 0;
			this.jogador.vel_y = 0;
			this.jogador.moveD = false;
			this.jogador.moveE = false;
			this.jogador.baixo = false;
			this.jogador.cima = false;
			this.travarMov = true;
		}
	}
	this.AndarOff= function(tecla)
	{
		if (tecla.keyCode == 37)
		{
		this.jogador.setFPS(0);
		this.jogador.vel_x = 0;
		this.moveE = false;
		this.songPassos.pause();
		}
		if (tecla.keyCode == 39)
		{
		this.jogador.setFPS(0);
		this.jogador.vel_x = 0;
		this.moveD = false;
		this.songPassos.pause();
		}
		if (tecla.keyCode == 38)
		{
		this.jogador.setFPS(0);
		this.jogador.vel_y = 0;
		this.baixo = false;
		this.songPassos.pause();
		}
		if (tecla.keyCode == 40)
		{
		this.jogador.setFPS(0);
		this.jogador.vel_y = 0;
		this.cima = false;
		this.songPassos.pause();
		}
		
		if(tecla.keyCode == 32)
		{
		this.travarMov = false;
		}
	}
}