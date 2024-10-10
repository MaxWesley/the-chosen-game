function Dispensa()
{
	this.player = new Jogador (700,370);
	this.player.jogador.sy = 32;
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false
	
	//cenarios e objetos
	this.fundoDisp = new MySprite("IMG/DISPENSA/dispensacenario.png",0,0,800,797,0,0,800,797,1,0);
	this.luz = new MySprite("IMG/DISPENSA/luz.png",0,0,800,797,0,0,800,797,1,0);
	this.porta = new MySprite("IMG/DISPENSA/portadir.png",0,0,36,66,753,360,36,66,1,0)
	this.porta.current_frame = 1;
	this.caixaMdCima = new MySprite("IMG/DISPENSA/caixamdcima.png",0,0,55,25,49,271,55,25,1,0);
	
	//blocos para colisao
	this.listaBlocos = new Array();
	this.blocoArmarioECaixa = new MySprite("",0,0,197,96,190,6,190,96,1,0);
	this.listaBlocos.push(this.blocoArmarioECaixa);
	this.blocoArmario = new MySprite("",0,0,123,94,628,6,123,94,1,0);
	this.listaBlocos.push(this.blocoArmario);
	this.blocoCaixaMd = new MySprite("",0,0,49,33,49,285,49,33,1,0);
	this.listaBlocos.push(this.blocoCaixaMd);
	this.blocoArmarioPqn = new MySprite("",0,0,16,75,47,28,16,75,1,0);
	this.listaBlocos.push(this.blocoArmarioPqn);
	this.blocoVassERodo = new MySprite("",0,0,73,22,90,20,73,22,1,0);
	this.listaBlocos.push(this.blocoVassERodo);
	//Final Bom
	this.botao = new MySprite("IMG/DISPENSA/botao.png",0,0,12,10,550,50,12,10,1,0);
	
	//IA
	this.seguranca = new SegurancaSusto(200,300,(this.fundoDisp.x+this.fundoDisp.w-50),(this.fundoDisp.x+50),(this.fundoDisp.y+this.fundoDisp.h-50),(this.fundoDisp.y+50),this.player);

	this.Draw = function()
	{	
		this.fundoDisp.Draw();
		this.botao.Draw();
		this.player.Draw();
		this.seguranca.Draw();
		this.porta.Draw();
		//parte de cima da caixa aparece na frente do personagem para simular profundidade
		this.caixaMdCima.Draw();
		//for(var i = 0; i < this.listaBlocos.length; i++)
		//{
		//	this.listaBlocos[i].Draw();
		//}
		this.luz.Draw();
		this.hudOptions.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
		//----------------------------------
		this.seguranca.Update();
		this.seguranca.lxma = this.fundoDisp.x+this.fundoDisp.w-100;
		this.seguranca.lxme = this.fundoDisp.x+100;
		this.seguranca.lyma = this.fundoDisp.y+this.fundoDisp.h-150;
		this.seguranca.lyme = this.fundoDisp.y+100;
		//-------------------------------------
		this.caixaMdCima.Update();
		this.porta.Update();
		for(var i = 0; i < this.listaBlocos.length; i++)
		{
			this.listaBlocos[i].Update();
		}
		
		ColisaoL(this.player,this.listaBlocos);
		
		//limite do personagem e movimento do cenario
		if(this.player.jogador.y < 40)
		{
			this.player.jogador.y = 40;
		}
		
		if(this.player.jogador.y > 483)
		{
			this.player.jogador.y = 483;
		}
		
		
		if(this.player.jogador.x < 35)
		{
			this.player.jogador.x = 35;
		}
		
		if(this.player.jogador.x > 710)
		{
			this.player.jogador.x = 710;
		}
		
		//limite do cenario
		if(this.player.jogador.y < 150 && this.fundoDisp.y <= -5)
		{
			this.player.jogador.y = 150;
			this.fundoDisp.y += 5;
			this.seguranca.normal.y += 5;
			this.luz.y += 5;
			this.porta.y += 5;
			this.botao.y += 5;
			this.caixaMdCima.y += 5;
			for(var i = 0; i < this.listaBlocos.length; i++)
			{
			this.listaBlocos[i].y += 5;
			}
			
		}
		
		if(this.player.jogador.y > 390 && this.fundoDisp.y >= -194)
		{
			this.player.jogador.y = 390;
			this.fundoDisp.y -= 5;
			this.seguranca.normal.y -= 5;
			this.luz.y -= 5;
			this.porta.y -= 5;
			this.botao.y -= 5;
			this.caixaMdCima.y -=5;
			for(var i = 0; i < this.listaBlocos.length; i++)
			{
			this.listaBlocos[i].y -= 5;
			}
		}
		/*
		if(this.fundoDisp.y > 0)
		{
			this.fundoDisp.y = 0;
			this.porta.vel_y = 0;
			this.caixaMdCima.vel_y = 0;
			
			for(var i = 0; i < this.listaBlocos.length; i++)
			{
				this.listaBlocos[i].vel_y = 0;
			}	
		}
		
		if(this.fundoDisp.y < -197)
		{
			this.fundoDisp.y = -197;
			this.porta.vel_y = 0;
			this.caixaMdCima.vel_y = 0;
			
			for(var i = 0; i < this.listaBlocos.length; i++)
			{
				this.listaBlocos[i].vel_y = 0;
			}	
		}
		*/
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
		this.player.AndarOn(tecla);
		
		if(tecla.keyCode == 32)
		{
			if(this.player.jogador.Collided(this.porta))
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
		}
		if(tecla.keyCode == 32)
		{
			if(this.player.jogador.Collided(this.botao))
			{
				finalBom = true;
				if(somGlobal == true)
				{
				this.botSong= new Audio();
				this.botSong.src = "AUDIO/interruptor2.wav";
				this.botSong.play();
				}
			}
		}
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}