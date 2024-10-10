function ColisaoL(obj1,lista)
{
	this.listaC = lista;
	this.obj1 = obj1;
		for(var i = 0; i < this.listaC.length; i++)
		{
			if(this.listaC.length != null)//se a lista nao estiver vazia
			{
				//Anderson-----------------------------------------------------
				//Chamei o Update
				this.listaC[i].Update();
				//Anderson-----------------------------------------------------
				if(this.obj1.jogador.Collided(this.listaC[i]))
				{
					//Largura DIREITA
					if(this.obj1.jogador.last_x + this.obj1.jogador.w <= this.listaC[i].x )
					this.obj1.jogador.x = this.listaC[i].x - this.obj1.jogador.w;
					//Largura ESQUERDA
					else if(this.obj1.jogador.last_x >= this.listaC[i].x + this.listaC[i].w)
					this.obj1.jogador.x = this.listaC[i].x + this.listaC[i].w;
					//ALTURA CIMA
					else if(this.obj1.jogador.last_y < this.listaC[i].y)
					this.obj1.jogador.y = this.listaC[i].y - this.obj1.jogador.h;
					//ALTURA BAIXO
					else if(this.obj1.jogador.last_y > this.listaC[i].y)
					this.obj1.jogador.y = this.listaC[i].y + this.listaC[i].h;
					return true;
				}
		
			}
		}
	this.obj1.jogador.LateUpdate();
}

function Colisao(obj1,obj2)
{
	this.obj2 = obj2;
	this.obj1 = obj1;
				//Anderson-----------------------------------------------------
				//Chamei o Update
				this.obj2.Update();
				//Anderson-----------------------------------------------------
				if(this.obj1.jogador.Collided(this.obj2))
				{
					//Largura DIREITA
					if(this.obj1.jogador.last_x + this.obj1.jogador.w <= this.obj2.x )
					this.obj1.jogador.x = this.obj2.x - this.obj1.jogador.w;
					//Largura ESQUERDA
					else if(this.obj1.jogador.last_x >= this.obj2.x + this.obj2.w)
					this.obj1.jogador.x = this.obj2.x + this.obj2.w;
					//ALTURA CIMA
					else if(this.obj1.jogador.last_y < this.obj2.y)
					this.obj1.jogador.y = this.obj2.y - this.obj1.jogador.h;
					//ALTURA BAIXO
					else if(this.obj1.jogador.last_y > this.obj2.y)
					this.obj1.jogador.y = this.obj2.y + this.obj2.h;
					return true;
				}
	this.obj1.jogador.LateUpdate();
}

function ColisaoObj(obj1,obj2)
{
	this.obj2 = obj2;
	this.obj1 = obj1;
				//Anderson-----------------------------------------------------
				//Chamei o Update
				this.obj2.Update();
				//Anderson-----------------------------------------------------
				if(this.obj1.Collided(this.obj2))
				{
					//Largura DIREITA
					if(this.obj1.last_x + this.obj1.w <= this.obj2.x )
					this.obj1.x = this.obj2.x - this.obj1.w;
					//Largura ESQUERDA
					else if(this.obj1.last_x >= this.obj2.x + this.obj2.w)
					this.obj1.x = this.obj2.x + this.obj2.w;
					//ALTURA CIMA
					else if(this.obj1.last_y < this.obj2.y)
					this.obj1.y = this.obj2.y - this.obj1.h;
					//ALTURA BAIXO
					else if(this.obj1.last_y > this.obj2.y)
					this.obj1.y = this.obj2.y + this.obj2.h;
					return true;
				}
	this.obj1.LateUpdate();
}

function ColisaoObjL(obj1,lista)
{
	this.listaC = lista;
	this.obj1 = obj1;
		for(var i = 0; i < this.listaC.length; i++)
		{
			if(this.listaC.length != null)//se a lista nao estiver vazia
			{
				//Anderson-----------------------------------------------------
				//Chamei o Update
				//this.listaC[i].Update();
				//Anderson-----------------------------------------------------
				if(this.obj1.Collided(this.listaC[i]))
				{
					//Largura DIREITA
					if(this.obj1.last_x + this.obj1.w <= this.listaC[i].x )
					this.obj1.x = this.listaC[i].x - this.obj1.w;
					//Largura ESQUERDA
					else if(this.obj1.last_x >= this.listaC[i].x + this.listaC[i].w)
					this.obj1.x = this.listaC[i].x + this.listaC[i].w;
					//ALTURA CIMA
					else if(this.obj1.last_y < this.listaC[i].y)
					this.obj1.y = this.listaC[i].y - this.obj1.h;
					//ALTURA BAIXO
					else if(this.obj1.last_y > this.listaC[i].y)
					this.obj1.y = this.listaC[i].y + this.listaC[i].h;
					return true;
				}
		
			}
		}
	this.obj1.LateUpdate();
}