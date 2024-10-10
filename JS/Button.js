function Button(file, tam_x, tam_y, x, y)
{
	this.button = new MySprite(file, 0, 0, tam_x, tam_y, x, y, tam_x, tam_y, 2, 0);

    
    this.Draw=function()
    {   
        this.button.Draw();
    };
    
    this.Clicked = function(mouse)
    {
        this.test = new MySprite("", 0, 0, 1, 1, mouse.x - canvas.offsetLeft, mouse.y - canvas.offsetTop, 1, 1, 1, 1);

        if(this.button.Collided(this.test))
        {
            return true;
			//this.sx = sw;
        }
		else 
		{
			return false;
			//this.sx = 0;
		}
    };
        this.Over = function(mouse)
    {
        this.test = new MySprite("", 0, 0, 1, 1, mouse.x - canvas.offsetLeft, mouse.y - canvas.offsetTop, 1, 1, 1, 1);

        if(this.button.Collided(this.test))
        {
            this.button.sy = tam_y;
        }
        else 
        {
             this.button.sy = 0;
        }
    };
}