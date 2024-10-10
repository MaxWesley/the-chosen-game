function Intro()
{
	this.video = document.getElementById("intro");
	
	if(currentScene == scene.INTRO)
	{
		this.video.play();
	}
	else
	{
		this.video.pause();
	}
	
	this.timer = 350;
	this.Draw= function()
	{
		screen.drawImage(this.video,0,0,800,600);
	}
	this.Update= function()
	{
		this.timer --;
		if(this.timer < 0)
		{
			currentScene = scene.MENU;
		}
	}
	this.mouse_move= function(mouse)
	{}
	this.mouse_up= function(mouse)
	{}
	this.mouse_down= function(mouse)
	{}
	this.key_down= function(tecla)
	{}
	this.key_up= function(tecla)
	{}
}