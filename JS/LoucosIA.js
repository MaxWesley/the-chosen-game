var dificuldade = 4;
function LoucosIA(num,x,y,lxme,lxma,lyme,lyma,player)
{
	this.num = num;
	this.x = x;
	this.y = y;
	this.lxme = lxme;
	this.lxma = lxma;
	this.lyme = lyme;
	this.lyma = lyma;
	this.delay = 20;
	this.player = player;
	
	if(this.num == 1)
	{
		this.normal = new MySprite("IMG/Loucos/normal.png",0,0,37,57,this.x,this.y,37,57,4,10);
	}
	else if (this.num == 2)
	{
		this.normal = new MySprite("IMG/Loucos/japa.png",0,0,37,57,this.x,this.y,37,57,4,10);
	}
	else if (this.num == 3)
	{
		this.normal = new MySprite("IMG/Loucos/nigga.png",0,0,37,57,this.x,this.y,37,57,4,10);
	}
	else if (this.num == 4)
	{
		this.normal = new MySprite("IMG/Loucos/paciente.png",0,0,37,57,this.x,this.y,37,57,4,10);
	}
	else if (this.num == 5)
	{
		this.normal = new MySprite("IMG/Loucos/zumbi.png",0,0,37,57,this.x,this.y,37,57,4,10);
	}
	else if (this.num == 6)
	{
		this.normal = new MySprite("IMG/Loucos/psicopata.png",0,0,35,57,this.x,this.y,35,57,4,10);
	}
	else if (this.num == 7)
	{
		this.normal = new MySprite("IMG/Loucos/verdinho.png",0,0,35,57,this.x,this.y,35,57,4,10);
	}
	else if (this.num == 8)
	{
		this.normal = new MySprite("IMG/Loucos/nemesis.png",0,0,39,64,this.x,this.y,39,64,4,10);
	}
	this.areaDeAlerta = new MySprite("",0,0,24,20,this.normal.x-50,this.normal.y-50,150,150,1,0);
		//this.normal.vel_y = 3;
	//IMG/bloco2.png
	this.timer = 250;
	function Sort()
	{
		return Math.round(Math.random()) * 2 - 1;
	}
	this.Draw = function()
	{
		this.areaDeAlerta.Draw();
		this.normal.Draw();
		if (this.normal.vel_x > 0 && this.normal.vel_y == 0)
		{
			this.normal.sy = 114;
		}
		else if (this.normal.vel_x < 0 && this.normal.vel_y == 0)
		{
			this.normal.sy = 57;
		}
		else if (this.normal.vel_y < 0 && this.normal.vel_x == 0)
		{
			this.normal.sy = 171;
		}
		else if (this.normal.vel_y > 0 && this.normal.vel_x == 0)
		{
			this.normal.sy = 0;
		}
	}
	this.Update = function()
	{
		this.normal.Update();
		this.areaDeAlerta.Update();
		this.areaDeAlerta.x = this.normal.x-50;
		this.areaDeAlerta.y = this.normal.y-50;
	
		if(this.normal.x > this.lxma)
		{
			this.normal.x = this.lxma;
			this.normal.vel_x *= -1;
			this.normal.vel_y = 0;
		}
		else if(this.normal.x < this.lxme)
		{
			this.normal.x = this.lxme;
			this.normal.vel_x *= -1;
			this.normal.vel_y = 0;
		}
		else if(this.normal.y > this.lyma)
		{
			this.normal.y = this.lyma;
			this.normal.vel_y *= -1;
			this.normal.vel_x = 0;
		}
		else if(this.normal.y < this.lyme)
		{
			this.normal.y = this.lyme;
			this.normal.vel_y *= -1;
			this.normal.vel_x = 0;
		}

		Sort();
		this.timer --;
		if(this.timer == 150)
		{
			this.normal.vel_y = 5 * Sort();
			this.normal.vel_x = 0;
		}
		if(this.timer <= 50)
		{
			this.normal.vel_x = 5 * Sort();
			this.normal.vel_y = 0;
			this.timer = 250;
		}
		//Area De Ataque essa é Boa
		if(this.player.jogador.Collided(this.areaDeAlerta))
		{
			if(this.normal.x < this.player.jogador.x+this.player.jogador.w)
			{
			this.normal.x += dificuldade;
			}
			if(this.normal.y < this.player.jogador.y+this.player.jogador.h)
			{
			this.normal.y += dificuldade;
			}
			if(this.normal.x > this.player.jogador.x+this.player.jogador.w)
			{
			this.normal.x -= dificuldade;
			}
			if(this.normal.y > this.player.jogador.y+this.player.jogador.h)
			{
			this.normal.y -= dificuldade;
			}
		}
		if(this.player.jogador.Collided(this.normal) && this.delay == -1)
		{
			perdeVida = true;
			if(somGlobal == true)
			{
				this.faca = new Audio();
				this.faca.src = "AUDIO/facada1.wav";
				this.faca.play();
			}
			this.delay = 20;
		}
		if(this.delay > -1)
		{
			this.delay --;
		}
		//------------------------------------------------------------------
	}
}
//---------------SEGURANCA OK---------------------------------------------------------------------------------------------------
function SegurancaSusto(x,y,lxma,lxme,lyma,lyme,player)
{
	this.x = x;
	this.y = y;
	this.player = player;
	this.normal = new MySprite("IMG/seguranca.png",0,0,39,58,this.x,this.y,37,57,4,10);
	this.areaDeAlerta = new MySprite("",0,0,24,20,this.normal.x-100,this.normal.y-100,250,250,1,0);
	this.delay = 20;
	this.timer = 250;
	this.lxma = lxma;
	this.lxme = lxme;
	this.lyma = lyma;
	this.lyme = lyme;

	function Sort()
	{
		return Math.round(Math.random()) * 2 - 1;
	}
	//this.normal.vel_y = 3;
	//IMG/bloco2.png
	this.Draw = function()
	{
		this.areaDeAlerta.Draw();
		this.normal.Draw();
		
		if (this.normal.vel_x > 0 && this.normal.vel_y == 0)
		{
			this.normal.sy = this.normal.h*1;
		}
		else if (this.normal.vel_x < 0 && this.normal.vel_y == 0)
		{
			this.normal.sy = this.normal.h*2;
		}
		else if (this.normal.vel_y < 0 && this.normal.vel_x == 0)
		{
			this.normal.sy = this.normal.h*3;
		}
		else if (this.normal.vel_y > 0 && this.normal.vel_x == 0)
		{
			this.normal.sy = 0;
		}
	}
	this.Update = function()
	{
		this.normal.Update();
		this.areaDeAlerta.Update();
		this.areaDeAlerta.x = this.normal.x-100;
		this.areaDeAlerta.y = this.normal.y-100;
	
		if(this.normal.x > this.lxma)
		{
			this.normal.x = this.lxma;
			this.normal.vel_x *= -1;
			this.normal.vel_y = 0;
		}
		else if(this.normal.x < this.lxme)
		{
			this.normal.x = this.lxme;
			this.normal.vel_x *= -1;
			this.normal.vel_y = 0;
		}
		else if(this.normal.y > this.lyma)
		{
			this.normal.y = this.lyma;
			this.normal.vel_y *= -1;
			this.normal.vel_x = 0;
		}
		else if(this.normal.y < this.lyme)
		{
			this.normal.y = this.lyme;
			this.normal.vel_y *= -1;
			this.normal.vel_x = 0;
		}

		Sort();
		this.timer --;
		if(this.timer == 150)
		{
			this.normal.vel_y = 5 * Sort();
			this.normal.vel_x = 0;
		}
		if(this.timer <= 50)
		{
			this.normal.vel_x = 5 * Sort();
			this.normal.vel_y = 0;
			this.timer = 250;
		}
		//Area De Ataque essa é Boa
		if(this.player.jogador.Collided(this.areaDeAlerta))
		{
			if(this.normal.x < this.player.jogador.x+this.player.jogador.w)
			{
			this.normal.x += dificuldade;
			}
			if(this.normal.y < this.player.jogador.y+this.player.jogador.h)
			{
			this.normal.y += dificuldade;
			}
			if(this.normal.x > this.player.jogador.x+this.player.jogador.w)
			{
			this.normal.x -= dificuldade;
			}
			if(this.normal.y > this.player.jogador.y+this.player.jogador.h)
			{
			this.normal.y -= dificuldade;
			}
		}
		if(this.player.jogador.Collided(this.normal) && this.delay == -1)
		{
			perdeVida = true;
			if(somGlobal == true)
			{
				this.faca = new Audio();
				this.faca.src = "AUDIO/facada1.wav";
				this.faca.play();
			}
			this.delay = 20;
		}
		if(this.delay > -1)
		{
			this.delay --;
		}
	}
}