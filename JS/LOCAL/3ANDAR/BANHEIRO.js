function Banheiro()
{
	this.player = new Jogador (151,435);
	this.fundo = new MySprite("IMG/BANHEIRO/banheiro.png",0,0,800,600,0,0,800,600,1,0);
	this.parede = new MySprite("IMG/BANHEIRO/parede1.png",0,0,471,199,165,50,471,199,1,0);
	this.porta = new MySprite("IMG/BANHEIRO/porta.png",0,0,471,199,165,50,471,199,1,0);
	this.sair = new MySprite("",0,0,24,20,151,485,50,10,1,0);
	this.ativ = false;
	this.bloco = new MySprite("",0,0,435,177,183,50,435,177,1,0);
	this.hudOptions = new Hud();
	this.hudOptions.tradution.visible = false;
	this.luz = new MySprite("IMG/BANHEIRO/luz.png",0,0,800,600,0,0,800,600,2,5);
	
	this.Draw= function()
	{
		this.fundo.Draw();
		this.porta.Draw();
		this.player.Draw();
		this.parede.Draw();
		this.luz.Draw();
		this.hudOptions.Draw();
		/*screen.fillStyle = "#f00";
		screen.font = "32px Tahoma";
		screen.fillText("Posição X do player: "+ this.player.jogador.x, 400, 420);
		screen.fillText("Posição Y do player: "+ this.player.jogador.y, 400, 460);*/
		//this.sair.Draw();
	}
	this.Update= function()
	{
		this.player.Update();
		Colisao(this.player,this.bloco);
		
		if(this.player.jogador.x < 40){
			this.player.jogador.x = 40;
		}else if(this.player.jogador.x > 700){
			this.player.jogador.x = 700;
		}
		
		if(this.player.jogador.y < 80){
			this.player.jogador.y = 80;
		}else if(this.player.jogador.y > 440){
			this.player.jogador.y = 440;
		}
		if(this.player.jogador.Collided(this.sair) && this.ativ == true)
		{
			sBanheiro = true;
			this.player.jogador.vel_x = 0;
			this.player.jogador.vel_y = 0;
			this.player.moveD = false;
			this.player.moveE = false;
			this.player.baixo = false;
			this.player.cima = false;
			this.player.jogador.setFPS(0);
			currentScene = scene.CORREDOR3;
			this.ativ = false;
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
		if(tecla.keyCode == 32)
		{
			this.ativ = true;
		}
	}
	this.key_up= function(tecla)
	{
		this.player.AndarOff(tecla);
	}
}