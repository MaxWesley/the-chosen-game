var semBolsa = true;
var chave = true;
var cartaoAcesso = false;
var kitDeLife = true;
var lanterna = true;
var lampada = false;
var caixaDeFerramenta = false;
var kitUsado = false;
function Inventario()
{
	this.inventhud = new MySprite("IMG/inventhud.png",0,0,630,470,100,60,630,470,1,0);
	this.ico1 = new Button("IMG/INVENTARIO/caixa2.png",150,90,this.inventhud.x+39,this.inventhud.y+65);
	this.ico2 = new Button("IMG/INVENTARIO/LamparinaS.png",150,90,this.inventhud.x+241,this.inventhud.y+65);
	this.ico3 = new Button("IMG/INVENTARIO/cartao.png",150,90,this.inventhud.x+444,this.inventhud.y+65);
	this.ico4 = new Button("IMG/INVENTARIO/key2.png",150,90,this.inventhud.x+39,this.inventhud.y+205);
	this.ico5 = new Button("IMG/INVENTARIO/kitS.png",150,90,this.inventhud.x+241,this.inventhud.y+205);
	
	this.Draw= function()
	{
		this.inventhud.Draw();
		if(caixaDeFerramenta == true)
		{	
			this.ico1.Draw();
		}
		if(lanterna == true)
		{
			this.ico2.Draw();
		}
		if(cartaoAcesso == true)
		{
			this.ico3.Draw();
		}
		if(chave == true)
		{
			this.ico4.Draw();
		}
		if(kitDeLife == true)
		{
			this.ico5.Draw();
		}
	}
	this.Update= function()
	{}
	this.mouse_move= function(mouse)
	{
		this.ico1.Over(mouse);
		this.ico2.Over(mouse);
		this.ico3.Over(mouse);
		this.ico4.Over(mouse);
		this.ico5.Over(mouse);
	}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{
		if(this.ico1.Clicked(mouse) && this.inventhud.visible == true && caixaDeFerramenta == true)
		{
			console.log("Item1");
		}
		if(this.ico2.Clicked(mouse) && this.inventhud.visible == true && lanterna == true)
		{
			console.log("Item2");
		}
		if(this.ico3.Clicked(mouse) && this.inventhud.visible == true && cartaoAcesso == true)
		{
			console.log("Item3");
		}
		if(this.ico4.Clicked(mouse) && this.inventhud.visible == true && chave == true)
		{
			console.log("Item4");
		}
		if(this.ico5.Clicked(mouse) && this.inventhud.visible == true && kitDeLife == true)
		{
			console.log("Item5");
			kitUsado = true;
			kitDeLife = false;
		}
	}
	this.key_down= function(tecla)
	{}
	this.key_up= function(mouse)
	{}
}