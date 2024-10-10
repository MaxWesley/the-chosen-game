function Hud()
{
	//-----------------------------------COMEÇO-------------------------------------//
	//Declara o botão de Opções do jogo
	this.hud = new Array();
	//------------------------------------------------------------------------
		this.options = new Button("IMG/HUD/options.png", 42, 41, 730, 20);
			this.ativa = false;//Define se a variável está ativa ou não;
			this.cont1 = 0;	//Conta os clicks em cima do button options;
					//----------------------------------------------------------------
					this.pngMusic = new Button("IMG/HUD/song.png", 37, 37, 680, 20);
						this.pngMusic.button.visible = false;
						this.cont2 = 0;
					//----------------------------------------------------------------
					this.pngSong = new Button("IMG/HUD/music.png", 37, 37, 635, 21);
						this.pngSong.button.visible = false;
						this.cont3 = 0;
					//----------------------------------------------------------------
					this.ptBr = new Button("IMG/HUD/ptbr.png", 37, 37, 585, 20);
						this.ptBr.button.visible = false;
						this.cont4 = 0;
			//----------------------------------------------------------------
			this.hud.push(this.options, this.pngMusic, this.pngSong, this.ptBr);

			//-----------------------IDIOMAS | VARIÁVEIS | COMEÇO-------------------------------------//
			this.falar = new Falas();
			this.falar.mostrar = false;
			//-----------------------IDIOMAS | VARIÁVEIS | FIM-------------------------------------//

			this.tradution = new MySprite("IMG/HUD/teste.png", 0, 0, 800, 100, 0, 500, 800, 100, 0, 0);

	//------------------------------------FIM-----------------------------------------//

	//-----------------------------------COMEÇO-------------------------------------//
	this.Draw= function()//$() Responsável por desenhar
	{
		this.options.Draw();		//Desenha o botão de opções do HUD
		this.pngMusic.Draw();		//Desenha o botão de musica do HUD
		this.pngSong.Draw();		//Desenha o botão de som do HUD
		this.ptBr.Draw();
		this.tradution.Draw();

		//---------------------MUDAR IDIOMA | COMEÇO ----------------------------------------------//
		this.falar.Draw();			//Definir no Draw
		if(this.ptBr.button.current_frame == 0)
		{
			this.falar.language	= "en";
		}

		if(this.ptBr.button.current_frame == 1)
		{
			this.falar.language = "pt";
		}
		//---------------------MUDAR IDIOMA | FIM ----------------------------------------------//

		//-------------------------------------------------------------------------------
		//Se o botão for clicado 2 ou mais vezes, desativa
			if(this.cont1 >=2)
			{
				this.ativa = false;
			}
			//------------------------------------------------------

			//Se for verdade, desenha frame 1 de this.options, e deixa true a visibilidade de pngMusic ...Song;
				if(this.ativa)
				{
					this.options.button.current_frame = 1;
					this.pngMusic.button.visible = true;
					this.pngSong.button.visible = true;
					this.ptBr.button.visible = true;
				}
				//------------------------------------------------------
			//Se for false, desenha frame inicial (0), e volta o contador pra 0;
			if(!this.ativa)
			{
				this.options.button.current_frame = 0;
				this.pngMusic.button.visible = false;
				this.pngSong.button.visible = false;
				this.ptBr.button.visible = false;
				this.cont1 = 0;
			}
	}
	//------------------------------------FIM-----------------------------------------//

	//-----------------------------------COMEÇO-------------------------------------//
	this.Update= function()
	{}
	//------------------------------------FIM-----------------------------------------//

	//-----------------------------------COMEÇO-------------------------------------//
	this.mouse_down= function(mouse)
	{
		//Se o botão for clicado, ativa a variável e som +1 no contador
			if(this.options.Clicked(mouse))
			{
				console.log(this.cont1);
				this.ativa = true;
				this.cont1++;
			}

			if(this.pngMusic.Clicked(mouse))
			{
				console.log("clicou");
				this.cont2++;
				this.pngMusic.button.current_frame = 1;
					if(this.cont2 >=2 && this.pngMusic.button.current_frame == 1)
					{
						this.pngMusic.button.current_frame = 0;
						this.cont2 = 0;
					}
			}

			if(this.pngSong.Clicked(mouse))
			{
				console.log("clicou");
				this.cont3++;
				this.pngSong.button.current_frame = 1;
					if(this.cont3 >=2 && this.pngSong.button.current_frame == 1)
					{
						this.pngSong.button.current_frame = 0;
						this.cont3 = 0;
					}
			}

			if(this.ptBr.Clicked(mouse))
			{
				console.log("clicou");
				this.cont4++;
				this.ptBr.button.current_frame = 1;
				if(this.cont4 >=2 && this.ptBr.button.current_frame == 1)
				{
					this.ptBr.button.current_frame = 0;
					this.cont4 = 0;
				}
			}
		//------------------------------------------------------


	}
	//------------------------------------FIM-----------------------------------------//
}
