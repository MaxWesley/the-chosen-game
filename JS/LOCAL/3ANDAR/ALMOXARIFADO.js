function Almoxarifado()
{
	//imagens e itens
	
	this.fundo = new MySprite("IMG/ALMOXARIFADO/almo.png",0,0,800,600,0,0,800,600,1,0);
	this.sombra = new MySprite("IMG/ALMOXARIFADO/almosombra.png",0,0,800,600,0,0,800,600,1,0);
	this.caixav = new MySprite("IMG/ALMOXARIFADO/caixav.png",0,0,36,33,430,195,36,33,1,0);
	
	// imagens invisiveis para a colisão
	this.armesq = new MySprite("",0,0,200,20,60,185,200,20,1,0);  	// colisao armario esquerdo
	this.armdir = new MySprite("",0,0,200,20,545,184,200,20,1,0);	//colisao armario direito
	this.baldes = new MySprite("",0,0,100,20,320,180,80,20,1,0);	//colisao com baldes
	this.caixa = new MySprite("",0,0,20,20,453,180,10,10,1,0);		//colisao com a caixa de ferramentas
	this.acao = new MySprite("",0,0,40,36,430,195,40,36,1,0);		//colisao para pegar a caixa de ferramentas 
	this.armarios = new Array();
	this.armarios.push(this.armdir,this.armesq,this.baldes,this.caixa);	//vetor para os armarios e o balde
	
	this.pegar = false;  //boleana para pegar a caixa
	
	//Sair do quarto
	this.porta = new MySprite("",0,0,24,20,750,270,50,50,1,0);
	this.abrir = false;
	
	//pessoas e hud
	this.player = new Jogador (715,256);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	
	
	this.Draw= function()	//Draw 			--------------------
	{
		this.fundo.Draw();
		this.caixav.Draw();
		this.caixa.Draw();
		this.armesq.Draw();
		this.acao.Draw();
		this.armdir.Draw();
		this.baldes.Draw();
		this.player.Draw();
		this.sombra.Draw();
		this.hudOptions.Draw();
		this.porta.Draw();
	}
	this.Update= function()
	{
		// Funcao UPDATE                   -----------------------
		this.player.Update();
		this.fundo.Update();
		this.armesq.Update();
		this.armdir.Update();
		this.baldes.Update();
		this.acao.Update();
		
		
		// Colisao com os armarios e os baldes e itens ----------------
		ColisaoL(this.player, this.armarios);
		
		if(this.player.jogador.Collided(this.acao)&& caixaDeFerramenta == false){			//se ficar true, posso pegar a caixa 
			this.pegar = true;
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala8";
		}
		else{
			this.pegar = false;
			this.hudOptions.falar.mostrar = false;
		}
		
					
		//COLISÃO COM A PAREDE              -------------------
			
			
		if(this.player.jogador.x <= 35){
			this.player.jogador.x = 35;
		}
		
		if(this.player.jogador.x >= 715){
			this.player.jogador.x = 715;
		}
		
		if(this.player.jogador.y >= 313){
			this.player.jogador.y = 313;
		}
		
		if(this.player.jogador.y <= 170){
			this.player.jogador.y = 170;
		}
		if(this.player.jogador.Collided(this.porta) && this.abrir == true)
		{
			sAlmoxarifado = true;
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.CORREDOR3;
			this.abrir = false;
		}
		
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
		
		if(tecla.keyCode == 32 && this.pegar){		//ao apertar espaço a caixa some, e muda de lugar para a colisao nao funcionar
			this.caixav.visible = false;
			this.caixav.y = 100;
			this.caixa.y =95;
			caixaDeFerramenta = true;	//a caixa foi pro inventario
		}
		if(tecla.keyCode == 32)
		{
			this.abrir = true;
		}
		
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
		if(tecla.keyCode == 32)
		{
			this.abrir = false;
		}
		
	}
}
