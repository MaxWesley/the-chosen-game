var entra1 = true;
var mluz = true;
function SProjecao()
{
	//HUDs Player e Inventario-------------------
	this.player = new Jogador (690,280);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	/*IMG/bloco2.png*/
	this.fundo = new MySprite("IMG/SPROJECAO/SalaDeProjecao2.png",0,0,800,900,0,0,800,900,2,0);
	this.porta = new MySprite("",0,0,50,50,730,285,50,110,1,0);
	this.interruptor = new MySprite("",0,0,50,50,730,355,50,50,1,0);
	this.luzImg = new MySprite("IMG/SPROJECAO/luz.png",0,0,800,900,0,0,800,900,2,0);
	this.luzImg.visible = false;
	this.interLuz = false;
	this.luzIntSong = new Audio();
	this.luzIntSong.src = "AUDIO/interruptor.wav";
	this.timer = 10;
	this.delay = 10;
	this.passar = false;
	
	this.colisao = new Array();
	this.colP = new MySprite("",0,0,24,20,209,405,70,70,1,0);
	this.colT = new MySprite("",0,0,24,20,50,265,30,340,1,0);
	this.cadeira1 = new MySprite("",0,0,24,20,335,140,52,63,1,0);
	this.cadeira2 = new MySprite("",0,0,24,20,465,140,52,63,1,0);
	this.cadeira3 = new MySprite("",0,0,24,20,610,140,52,63,1,0);
	this.cadeira4 = new MySprite("",0,0,24,20,335,275,52,63,1,0);
	this.cadeira5 = new MySprite("",0,0,24,20,465,275,52,63,1,0);
	this.cadeira6 = new MySprite("",0,0,24,20,610,275,52,63,1,0);
	this.cadeira7 = new MySprite("",0,0,24,20,335,410,52,63,1,0);
	this.cadeira8 = new MySprite("",0,0,24,20,465,410,52,63,1,0);
	this.cadeira9 = new MySprite("",0,0,24,20,610,410,52,63,1,0);
	this.cadeira10 = new MySprite("",0,0,24,20,335,565,52,63,1,0);
	this.cadeira11 = new MySprite("",0,0,24,20,465,565,52,63,1,0);
	this.cadeira12 = new MySprite("",0,0,24,20,610,565,52,63,1,0);
	this.cadeira13 = new MySprite("",0,0,24,20,335,720,52,63,1,0);
	this.cadeira14 = new MySprite("",0,0,24,20,465,720,52,63,1,0);
	this.cadeira15 = new MySprite("",0,0,24,20,610,720,52,63,1,0);
	this.colisao.push(this.colP,this.colT,this.cadeira1,this.cadeira2,this.cadeira3,this.cadeira4,this.cadeira5,this.cadeira6,this.cadeira7,this.cadeira8,this.cadeira9,this.cadeira10,this.cadeira11,this.cadeira12,this.cadeira13,this.cadeira14,this.cadeira15);
	
	
	this.Draw= function()
	{
		this.fundo.Draw();
		this.player.Draw();
		this.interruptor.Draw();
		this.porta.Draw();
		this.luzImg.Draw();
		this.hudOptions.Draw();
		for(var i = 0; i < this.colisao.length; i++)
		{
			this.colisao[i].Draw();
		}
		if(lampada == true)
		{
			this.luzImg.img.src = "IMG/SPROJECAO/luz2.png";
		}
	}
	this.Update= function()
	{
		this.timer --;
		this.player.Update();
		this.fundo.Update();
		this.interruptor.Update();
		this.porta.Update();
		if(this.luzImg.visible == true && lampada == false)
		{
			this.luzImg.setFPS(10);
		}
		else
		{
			this.luzImg.setFPS(0);
			this.luzImg.current_frame = 0;
		}
		for(var i = 0; i < this.colisao.length; i++)
		{
			this.colisao[i].Update();
		}
		//Colisao com as paredes ------------------
		
		if(this.player.jogador.y <= 65){
			this.player.jogador.y = 65
		}
		
		if(this.player.jogador.y >= 495){
			this.player.jogador.y = 495
		}
		
		if(this.player.jogador.x <= 45){
			this.player.jogador.x = 45
		}
		
		if(this.player.jogador.x >= 705){
			this.player.jogador.x = 705
		}
		//movimento da sala ------------------
		
		if(this.player.jogador.y < 150 && this.fundo.y <= -5)
		{
			this.player.jogador.y = 150;
			this.fundo.y -= -5;
			this.interruptor.y -= -5;
			this.porta.y -= -5;
			this.luzImg.y-= -5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].y -= -5;
			}
			
		}
		
		if(this.player.jogador.y > 390 && this.fundo.y >= -295)
		{
			this.player.jogador.y = 390;
			this.fundo.y -= 5;
			this.interruptor.y -=5;
			this.porta.y -= 5;
			this.luzImg.y -= 5;
			for(var i = 0; i < this.colisao.length; i++)
			{
			this.colisao[i].y -= 5;
			}
		}
		//Colisao com objetos
		ColisaoL(this.player , this.colisao);
		if(this.player.jogador.Collided(this.interruptor) && this.interLuz == true && this.timer< 0)
		{
			//this.luzImg.setFPS(10);
			//this.luzImg.visible = true;
			this.luzImg.visible = !this.luzImg.visible;
			this.interLuz = !this.interLuz;
			this.luzIntSong.play();
			this.timer = 10;
			//console.log("oi")
		}
		//Dialogo
		if(entra1 == true)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala10";
			jogadorStop = true;
		}
		else if (this.player.jogador.Collided(this.colisao[0]) && this.luzImg.visible == false && lampada == false)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "fala11";
		}
		else if (this.player.jogador.Collided(this.colisao[0]) && this.luzImg.visible == true && lampada == false)
		{
			this.hudOptions.falar.mostrar = true;
			this.hudOptions.falar.tag = "falaE5";
			if(this.fundo.current_frame == 0)
			{
				this.fundo.current_frame = 1;
			}
			jogadorStop = true;
			if(this.passar == true)
			{
				lampada = true;
				lampadaON = true;
				jogadorStop = false;
			}
		}
		else
		{
			this.hudOptions.falar.mostrar = false;
			jogadorStop = false;
		}
		if(this.delay > -1 && entra1 == false)
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
	}
	this.key_down= function(tecla)
	{
		this.player.AndarOn(tecla);
		if(tecla.keyCode == 32 && this.player.jogador.Collided(this.interruptor))
		{
			this.interLuz = !this.interLuz;
		}
		else if(tecla.keyCode == 32 && this.player.jogador.Collided(this.porta))
		{
			//console.log("trocar map");
			if(this.delay == -1)
			{
			sProjecao = true;
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.CORREDOR3;
			}
			entra1 = false;
		}
		if(tecla.keyCode == 32)
		{
			this.passar = true;
		}
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
		if(tecla.keyCode == 32)
		{
			this.passar = false;
		}
		/*if(tecla.keyCode == 32)
		{
			this.interLuz = false;
		}*/
	}
}