function Cozinha()
{
	this.player = new Jogador (739,375);
	this.player.jogador.sy = 32;
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	
	this.porta = new MySprite("IMG/COZINHA/porta.png",0,0,37,67,749,368,37,67,1,0);
	this.chapa = new MySprite("IMG/COZINHA/chapa.png",0,0,97,76,52,292,97,76,1,0);
	this.mesa1 = new MySprite("IMG/COZINHA/mesa.png",0,0,81,77,281,325,81,77,1,0);
	this.mesa2 = new MySprite("IMG/COZINHA/mesa.png",0,0,81,77,513,325,81,77,1,0);
	
	this.listaObj = new Array();
	this.bloco1 = new MySprite ("",0,0,182,126,58,10,182,126,1,0);
	this.listaObj.push(this.bloco1)
	this.bloco2 = new MySprite ("",0,0,410,102,335,20,410,102,1,0);
	this.listaObj.push(this.bloco2)
	this.bloco4 = new MySprite ("",0,0,97,201,40,300,97,201,1,0);
	this.listaObj.push(this.bloco4)
	this.bloco5 = new MySprite ("",0,0,80,199,281,343,80,199,1,0);
	this.listaObj.push(this.bloco5)
	this.bloco6 = new MySprite ("",0,0,80,199,513,343,80,199,1,0);
	this.listaObj.push(this.bloco6)
	this.bloco7 = new MySprite ("",0,0,70,212,40,506,70,212,1,0);
	this.listaObj.push(this.bloco7)
	
	
	this.porta.visible = false;
	
	
	this.cenario = new Image();
	this.cenario.src = "IMG/COZINHA/cc.png";
	this.luz = new Image();
	this.luz.src = "IMG/COZINHA/luz.png";
	this.posX = 0;
	this.posY = 0;
	
	this.Draw= function()
	{
		screen.drawImage(this.cenario, this.posX, this.posY);
		screen.drawImage(this.luz, this.posX, this.posY);
		this.player.Draw();
		this.mesa1.Draw();
		this.mesa2.Draw();
		this.porta.Draw();
		this.chapa.Draw();
		this.hudOptions.Draw();
		/*for(var i = 0; i < this.listaObj.length; i++)
		{
			this.listaObj[i].Draw();
		}*/
	}
	this.Update= function()
	{
		this.player.Update();
		
		//LIMITE DO PESONAGEM COM O CENARIO
		if(this.player.jogador.y > 470)
		{
			
			this.player.jogador.y = 470;
		}
		
		if(this.player.jogador.y < 50)
		{
		
			this.player.jogador.y = 50;
		}
		
		if(this.player.jogador.x < 47)
		{
			this.player.jogador.x = 47;
		}
		
		if(this.player.jogador.x > 710)
		{
			this.player.jogador.x = 710;
		}
		
		//LIMITE DO CENARIO
		if(this.posY > 0)
		{
			this.posY = 0;
		}
		if(this.posY < -199)
		{
			this.posY = -199;
		}
		if(this.player.jogador.y < 150 && this.posY <= -1)
		{
			this.player.jogador.y = 150;
			this.posY += 5;
			this.porta.y += 5;
			this.mesa1.y += 5;
			this.mesa2.y += 5;
			this.chapa.y += 5;
			for(var i = 0; i < this.listaObj.length; i++)
			{
			this.listaObj[i].y += 5;
			}
		
		}
		
		if(this.player.jogador.y > 390 && this.posY >= -194)
		{
			this.player.jogador.y = 390;
			this.posY -= 5;
			this.porta.y -= 5;
			this.mesa1.y -= 5;
			this.mesa2.y -= 5;
			this.chapa.y -=5;
			for(var i = 0; i < this.listaObj.length; i++)
			{
			this.listaObj[i].y -= 5;
			}
		}
		
		//COLISÃO 
		ColisaoL(this.player,this.listaObj);
	}
	
	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		this.hudOptions.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		if(tecla.keyCode == 32)
		{
			if(this.player.jogador.Collided(this.porta))
			{
				scozinha = true;
				this.player.jogador.vel_x = 0;
				this.player.jogador.vel_y = 0;
				this.player.moveD = false;
				this.player.moveE = false;
				this.player.baixo = false;
				this.player.cima = false;
				this.player.jogador.setFPS(0);
				currentScene = scene.CORREDOR2;
			}
		}
		this.player.AndarOn(tecla);
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}