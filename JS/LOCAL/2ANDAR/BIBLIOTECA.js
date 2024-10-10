var gritosB = false;
var bibliotecaGatilho = false;
var febiblioteca = true;
function Biblioteca()
{
	//cenario
	this.fundo = new MySprite("IMG/BIBLIOTECA/biblioteca - original2.png",0,0,800,700,0,0,800,700,1,0);
	this.iluminacao = new MySprite("IMG/BIBLIOTECA/biblioteca - iluminacao2.png",0,0,800,700,0,0,800,700,1,0);
	this.relampago = new MySprite("IMG/BIBLIOTECA/biblioteca - relampago.png",0,0,800,700,0,0,800,700,60,5);
	this.relampagoSom = new Audio();
	this.relampagoSom.src = "AUDIO/trovao1.wav";
	
	//player e hud
	this.player = new Jogador (50,300);
	this.hudGame = new Vida();
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	
	//objetos e outros
	this.porta = new MySprite("IMG/BIBLIOTECA/portaesq.png",0,0,36,66,18,318,36,66,2,0);
	this.porta.current_frame = 1;
	this.listaEstantes = new Array();
	this.listaBlocos = new Array();
	this.gritoSong = new Audio();
	this.gritoSong.src = "AUDIO/gritoBisonho.wav";
	this.livroSong = new Audio();
	this.livroSong.src = "AUDIO/foleandoPagina.wav";
	this.livro = new MySprite("",0,0,55,38,109,222,50,35,1,0);
	
	
	//variaveis das partes de cima (que aparecem na frente do personagem)
	//primeira estante de cima
	this.estanteParteCima = new MySprite("IMG/BIBLIOTECA/estantemeiocima.png",0,0,167,25,316,179,167,25,1,0);
	this.listaEstantes.push(this.estanteParteCima);
	//segunda estante de cima
	this.estanteParteCima = new MySprite("IMG/BIBLIOTECA/estantemeiocima2.png",0,0,169,25,573,178,169,25,1,0);
	this.listaEstantes.push(this.estanteParteCima);
	//primeira estante de baixo
	this.estanteParteCima = new MySprite("IMG/BIBLIOTECA/estantemeiobaixo.png",0,0,169,25,303,493,169,25,1,0);
	this.listaEstantes.push(this.estanteParteCima);
	//segunda estante de baixo
	this.estanteParteCima = new MySprite("IMG/BIBLIOTECA/estantemeiobaixo2.png",0,0,169,25,562,493,169,25,1,0);
	this.listaEstantes.push(this.estanteParteCima);
	//balcao
	this.estanteParteCima = new MySprite("IMG/BIBLIOTECA/balcaocima.png",0,0,95,25,45,399,95,25,1,0);
	this.listaEstantes.push(this.estanteParteCima);
	
	
	
	//bloco para colisao com as estantes
	//bloco primeira estante de cima
	this.blocoColisao = new MySprite("",0,0,169,20,58,35,160,61,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco segunda estante de cima
	this.blocoColisao = new MySprite("",0,0,169,20,322,35,155,61,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco terceira estante de cima
	this.blocoColisao = new MySprite("",0,0,169,20,579,35,155,61,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco primeira estante do meio-cima
	this.blocoColisao = new MySprite("",0,0,169,20,322,200,154,21,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco segunda estante do meio-cima
	this.blocoColisao = new MySprite("",0,0,169,20,579,200,155,21,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco primeira estante do meio-baixo
	this.blocoColisao = new MySprite("",0,0,169,20,309,446,155,52,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco segunda estante do meio-baixo
	this.blocoColisao = new MySprite("",0,0,169,20,569,446,155,52,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco primeira estante de baixo
	this.blocoColisao = new MySprite("",0,0,169,20,324,582,152,60,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco segunda estante de baixo
	this.blocoColisao = new MySprite("",0,0,169,20,583,582,152,60,1,0);
	this.listaBlocos.push(this.blocoColisao);
	//bloco balcao
	this.blocoColisao = new MySprite("",0,0,169,20,45,413,88,151,1,0);
	this.listaBlocos.push(this.blocoColisao);
	
	
	this.Draw= function()
	{
		this.fundo.Draw();
		this.porta.Draw();
		this.player.Draw();
		
		//parte da estante que aparece na frente do personagem
		for(var i = 0; i < this.listaEstantes.length; i++)
		{
			this.listaEstantes[i].Draw();
		}
		this.iluminacao.Draw();
		
		//for(var i = 0; i < this.listaBlocos.length; i++)
		//	{
		//	this.listaBlocos[i].Draw();
		//	}
		
		this.relampago.Draw();
		
		this.hudGame.Draw();
		this.hudOptions.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
		this.hudGame.Update();
		this.livro.Update();
		this.porta.Update();
		this.fundo.Update();
		ColisaoL(this.player,this.listaBlocos);
		
		if(this.relampago.current_frame == 0)
		{
			this.relampagoSom.play();
		}
		
		for(var i = 0; i < this.listaEstantes.length; i++)
		{
			this.listaEstantes[i].Update();
		}
		for(var i = 0; i < this.listaBlocos.length; i++)
		{
			this.listaBlocos[i].Update();
		}
		
		if(this.player.jogador.y > 475)
		{
			this.player.jogador.y = 475;
		}
		
		if(this.player.jogador.y < 35)
		{
		this.player.jogador.y = 35;
		}
			
		if(this.player.jogador.x < 40)
		{
			this.player.jogador.x = 40;
		}
		
		if(this.player.jogador.x > 710)
		{
			this.player.jogador.x = 710;
		}
		
		
		if(this.player.jogador.y < 254 && this.fundo.y <= -5)
		{
			this.player.jogador.y = 254;
			this.fundo.y += 5;
			this.iluminacao.y += 5;
			this.porta.y += 5;
			this.livro.y += 5;
			for(var i = 0; i < this.listaBlocos.length; i++)
			{
			this.listaBlocos[i].y += 5;
			}	
			for(var i = 0; i < this.listaEstantes.length; i++)
			{
				this.listaEstantes[i].y += 5;
			}
			
		}
		
		if(this.player.jogador.y > 310 && this.fundo.y >= -99)
		{
			this.player.jogador.y = 310;
			this.fundo.y -= 5;
			this.iluminacao.y -= 5;
			this.porta.y -= 5;
			this.livro.y -= 5;
			for(var i = 0; i < this.listaBlocos.length; i++)
			{
			this.listaBlocos[i].y -= 5;
			}
			for(var i = 0; i < this.listaEstantes.length; i++)
			{
				this.listaEstantes[i].y -= 5;
			}
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
		this.hudOptions.mouse_down(mouse);
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
		
		if(tecla.keyCode == 32)
		{//abre comandos da tecla espaco
			if(this.livro.visible == true)
			{
				//pega o livro
				if(this.player.jogador.Collided(this.livro))
				{
					this.livro.visible = false;
					this.hudOptions.falar.mostrar = true;
					this.hudOptions.falar.tag = "fala18";
					jogadorStop = true;
					if(somGlobal == true)
					{
					this.livroSong.play();
					}
				}
			}
		
			//passando dialogos
			else if(this.hudOptions.falar.mostrar == true && this.hudOptions.falar.tag == "fala18")
			{
				this.apagou = true;
				this.hudOptions.falar.tag = "fala18.1";
				if(somGlobal == true)
				{
				this.gritoSong.play();
				}
			}
			
			else if(this.hudOptions.falar.mostrar == true && this.hudOptions.falar.tag == "fala18.1")
			{
				this.hudOptions.falar.tag = "fala19";
				gritosB = true;
				bibliotecaGatilho = true;
			}
			
			else if(this.hudOptions.falar.mostrar == true && this.hudOptions.falar.tag == "fala19")
			{
				this.hudOptions.falar.mostrar = false;
				jogadorStop = false;
			}
			
			//personagem só sai da sala quando não ha dialogo
			if(this.player.jogador.Collided(this.porta))
			{
				{
					sbiblioteca = true;
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
		
		}//fecha comandos da tecla espaco
		
		
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}