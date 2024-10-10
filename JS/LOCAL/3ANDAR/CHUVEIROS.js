diagChuv = true;
function Chuveiros()
{
	this.player = new Jogador (50,280);
	this.player.jogador.sy = 64;
	this.bloco = new MySprite("IMG/CHUVEIROS/blocochuveiros.png",0,0,44,347,379,135,44,347,1,0);
	this.chuv = new MySprite("IMG/CHUVEIROS/cenariochuveiros.png",0,0,800,600,0,0,800,600,1,0);
	this.bloquinho = new MySprite("",0,0,50,50,700,500,50,50,1,0);
	this.mochilaItem = new MySprite("IMG/CHUVEIROS/mochilaitem.png",0,0,44,30,700,300,40,30,1,0);
	this.porta = new MySprite("IMG/CHUVEIROS/portaesq.png",0,0,36,66,14,268,36,66,2,0);
	this.porta.current_frame = 1;
	this.chuveiros = new MySprite("IMG/CHUVEIROS/chuveiros.png",0,0,230,343,286,140,230,343,1,0);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.luz = new MySprite("IMG/CHUVEIROS/luz.png",0,0,800,600,0,0,800,600,2,1);
	this.relampago = new MySprite("IMG/CHUVEIROS/relampago.png",0,0,800,600,0,0,800,600,60,5);
	this.relampagoSom = new Audio();
	this.relampagoSom.src = "AUDIO/trovao1.wav";
	this.diagCL = 0;
	this.delay = 10;
	this.gotaSom = new Audio();
	this.gotaSom.src = "AUDIO/goteira.wav";
	this.gotaSort = SortGota();
	function SortGota()
	{
		return Math.floor(Math.random() * (800 - 0)) + 0;
	}
	this.Draw= function()
	{
		this.chuv.Draw();
		this.mochilaItem.Draw();
		this.porta.Draw();
		this.player.Draw();
		this.chuveiros.Draw();
		this.bloco.Draw();
		this.luz.Draw();
		this.relampago.Draw();
		this.hudOptions.Draw();
		/*
		screen.font = "20px Arial MS";
		screen.fillStyle = "#ff0000";
		screen.fillText(this.gotaSort+" Sort",50,50);
		*/
	}
	this.Update= function()
	{
		this.player.Update();
		Colisao(this.player,this.bloco);
		if(this.relampago.current_frame == 0)
		{
			if(somGlobal == true)
			{
				this.relampagoSom.play();	
			}
		}
		this.gotaSort = SortGota();
		if(this.gotaSort < 20)
		{
			if(somGlobal == true)
			{
				this.gotaSom.play();
			}
		}
		if(this.player.jogador.y < 35)
		{
			this.player.jogador.y = 35;
		}
		
		if(this.player.jogador.y > 490)
		{
			this.player.jogador.y = 490;
		}
		
		if(this.player.jogador.x < 40)
		{
			this.player.jogador.x = 40;
		}
		
		if(this.player.jogador.x > 710)
		{
			this.player.jogador.x = 710;
		}
		//Dialogos
		if(diagChuv == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala6";
			jogadorStop = true;
		}
		else if(this.player.jogador.Collided(this.mochilaItem) && this.mochilaItem.visible == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "falaE1";
			this.diagCL = 1;
		}
		else if(this.player.jogador.Collided(this.mochilaItem) && this.diagCL == 1)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "falaE3";
			jogadorStop = true;
		}
		else if(this.player.jogador.Collided(this.mochilaItem) && this.diagCL == 2)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala7";
			jogadorStop = true;
		}
		else
		{
			this.hudOptions.falar.mostrar = false;
			jogadorStop = false;
		}
		if(this.delay > -1 && diagChuv == false)
		{
			this.delay --;
		}
	}
	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		this.hudOptions.mouse_down(mouse);
		
		if(this.player.jogador.Collided(this.bloco))
		{
			if(item3 == true)
			{
				if(this.hudGame.inventHud.ico3.Clicked(mouse))
					{
					//console.log("clicou");3
					item3 = false;
					this.hudGame.inventHud.ico3.visible = false;
					}
			}
		}
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
		
		if(tecla.keyCode == 32)
		{
			diagChuv = false;
			if(this.player.jogador.Collided(this.mochilaItem))
			{
				if(this.mochilaItem.visible)
				{
					semBolsa = false;
					this.mochilaItem.visible = false;
				}
				
			}
			if(this.delay == -1)
			{
				if(this.player.jogador.Collided(this.porta))
				{
					sChuveiros = true;
					this.player.jogador.vel_x = 0;
					this.player.jogador.vel_y = 0;
					this.player.moveD = false;
					this.player.moveE = false;
					this.player.baixo = false;
					this.player.cima = false;
					this.player.jogador.setFPS(0);
					currentScene = scene.CORREDOR3;
				}
			}
			if(this.hudOptions.falar.tag == "falaE3")
			{
				this.diagCL = 2;
			}
			if(this.hudOptions.falar.tag == "fala7")
			{
				this.diagCL = 3;
			}
		}
		
		if(tecla.keyCode == 70)
		{
			currentScene = scene.ALMOXARIFADO;
		}
		
		if(tecla.keyCode == 65)
		{
			if(this.player.jogador.Collided(this.bloco))
			{
			item3 = false;
			}
		}
		
		if(tecla.keyCode == 73)
		{
			chave = true
		}
		
		//console.log(tecla.keyCode);
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}