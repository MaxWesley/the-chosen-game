function Falas(tag,language)
{
	this.language = language;
	this.tag = tag;
	this.img = new MySprite("IMG/Diag.png",0,0,800,600,0,100,800,500,1,0);
	this.mostrar = false;
	this.Draw = function()
	{
		if (this.mostrar == true)
		{
			this.img.visible = true;
		}
		else
		{
			this.img.visible = false;
		}
		this.img.Draw();
		screen.font = "30px Arial MS";
		screen.fillStyle = "#000000";
		if(this.img.visible == true)
		{
			if(this.language == "pt")
			{	
			if(this.tag == "fala1")
			{
				screen.fillText("-Arg, que dor... O que está acontecendo aqui?",150,480);
				screen.fillText("Que símbolos estranhos... E todo esse sangue...",150,510);
			}
			else if(this.tag == "fala2")
			{
				screen.fillText("-E esse livro? Todo banhado de sangue. ",150,480);
				screen.fillText("Alguém pode me dizer o que diabos",150,510);
				screen.fillText("aconteceu aqui?!",150,540);
			}
			else if(this.tag == "fala3")
			{
				screen.fillText("-Tem alguém vivo por aqui?",150,480);
				screen.fillText("Preciso saber o que está acontecendo...",150,510);
			}
			else if(this.tag == "fala4")
			{
				screen.fillText("-Não lembro desta lâmpada ter ficado",150,480);
				screen.fillText("ruim uma vez sequer...",150,510);
			}
			else if(this.tag == "fala5")
			{
				screen.fillText("-Droga, está trancada. O que eu faço?...",150,480);
			}
			else if(this.tag == "fala6")
			{
				screen.fillText("-Nada além de chuveiros e paredes sujas...",150,480);
			}
			else if(this.tag == "fala7")
			{
				screen.fillText("-Uma lanterna. Acho que a lâmpada queimou.",150,480);
			}
			else if(this.tag == "fala8")
			{
				screen.fillText("-Espero que isso seja o suficiente para ",150,480);
				screen.fillText("abrir aquela grade...",150,510);
				screen.fillText("*Aperte espaço para pegar...",150,540);
			}
			else if(this.tag == "fala9")
			{
				screen.fillText("-É melhor eu arranjar uma lâmpada para ",150,480);
				screen.fillText("a lanterna primeiro.",150,510);
			}
			else if(this.tag == "fala10")
			{
				screen.fillText("-Por que há um projetor ligado se não ",150,480);
				screen.fillText("tem ninguém aqui?",150,510);
			}
			else if(this.tag == "fala11")
			{
				screen.fillText("-Não consigo ver absolutamente nada com ",150,480);
				screen.fillText("esta maldita luz acesa.",150,510);
			}
			else if(this.tag == "fala12")
			{
				screen.fillText("-Droga, a lanterna apagou, ainda bem ",150,480);
				screen.fillText("que estou perto do interruptor .",150,510);
			}
			
			else if(this.tag == "fala13")
			{
				screen.fillText("-Nossa, quanto sangue! Preciso sair daqui.  ",150,480);
				screen.fillText("Quem poderia ter feito isso?",150,510);
			}
			
			else if(this.tag == "fala14")
			{
				screen.fillText("-Uma trilha de sangue...talvez eu devesse ",150,480);
				screen.fillText("segui-la para ver se acho algo.",150,510);
			}
			else if(this.tag == "fala15")
			{
				screen.fillText("-Nossa, o que houve aqui?",150,480);
				screen.fillText("O que está acontecendo?",150,510);
			}
			else if(this.tag == "fala16")
			{
				screen.fillText("-Meu deus!!! Que merda foi essa?!!!",150,480);
				screen.fillText("Tenho que fugir daqui! Eu posso ser o próximo",150,510);
			}
			else if(this.tag == "fala17")
			{
				screen.fillText("-Esse lugar está cada vez pior...",150,480);
			}
			else if(this.tag == "fala18")
			{
				screen.fillText("-Um ritual... Demônios... Parece algum tipo de",150,480);
				screen.fillText("invocação demoníaca.",150,510);
			}
			else if(this.tag == "fala18.1")
			{
				screen.fillText("...",150,480);
			}
			else if(this.tag == "fala19")
			{
				screen.fillText("-AHHHHH! GRITOS?!",150,480);
			}
			else if(this.tag == "fala20")
			{
				screen.fillText("-Vivos! Ainda tem gente viva. O que houve com eles?",150,480,570);
				screen.fillText("Estão mais agitados do que o normal.",150,510);
			}
			else if(this.tag == "fala21")
			{
				screen.fillText("-A saída deve ser lá embaixo.",150,480);
			}
			else if(this.tag == "fala22")
			{
				screen.fillText("-Que merda... Que inferno de lugar!",150,480);
			}
			else if(this.tag == "fala23")
			{
				screen.fillText("-Um cartão de acesso...",150,480);
				screen.fillText("Acho que posso usá-lo no elevador.",150,510);
				screen.fillText("*Aperte espaço para pegar...",150,540);
			}
			else if(this.tag == "fala24")
			{
				screen.fillText("-Estou com medo... Não aguento essa loucura...",150,480);
				screen.fillText("...Devo acabar com tudo isso. AHHHHH!",150,510);
			}
			else if(this.tag == "fala25")
			{
				screen.fillText("-Mas que merda de lugar, merda de emprego!",150,480,570);
				screen.fillText("Sabia que não era uma boa ideia trabalhar em um manicômio!",150,510,570);
			}
			
			else if(this.tag == "fala26")
			{
				screen.fillText("-Preciso sair daqui antes que eles me peguem,",150,480,570);
				screen.fillText("mas essa maldita porta não abre!",150,510,570);
			}
			
			else if(this.tag == "fala27")
			{
				screen.fillText("-Agora estou livre...",150,480);
				screen.fillText("Não importa o que aconteceu aqui. Vou embora!",150,510);
			}
			else if(this.tag == "fala28")
			{
				screen.fillText("John: Então você é Deimos?!",150,480);
			}
			
			else if(this.tag == "fala29")
			{
				screen.fillText("Deimos: Você... O demônio está em você!",150,480);
			}
			
			else if(this.tag == "fala30")
			{
				screen.fillText("John: Me diga o que aconteceu comigo.Todos aqui estão mortos.",150,480,570);
				screen.fillText("Coisas estranhas estão acontecendo. Sei que pode me explicar.",150,510,570);
			}
			
			else if(this.tag == "fala31")
			{
				screen.fillText("Deimos: Eu sou o criador do manicômio e também",150,480,570);
				screen.fillText("o criador da seita da qual você provavelmente participava.",150,510,570);
			}
			
			else if(this.tag == "fala32")
			{
				screen.fillText("Você deveria estar morto.",150,480);
				screen.fillText("É o que acontece com o receptáculo do demônio.",150,510);
			}
			
			else if(this.tag == "fala33")
			{
				screen.fillText("-John: Demônio?!",150,480,570);
			}
			
			else if(this.tag == "fala34")
			{
				screen.fillText("Deimos: Você participou do ritual para invocação do demônio Mammon, mas não",150,480,570);
				screen.fillText("saiu como o esperado. O demônio atacou os membros da seita, fomos",150,510,570);
				screen.fillText("obrigados a tentar controlá-lo, até que a tempestade nos atrapalhou. ",150,540,570);
			}
			
			else if(this.tag == "fala35")
			{
				screen.fillText("Sem saber quem você era, tivemos que fugir. Você deveria morrer para o",150,480,570);
				screen.fillText("o dêmonio viver, mas, já que está vivo, deve ser algum tipo de escolhido.",150,510,570);
				screen.fillText("Um ser capaz de sobreviver mesmo com o demônio em seu corpo?",150,540,570);
			
			}
			
			else if(this.tag == "fala36")
			{
				screen.fillText("John: O que devo fazer?! Como posso me livrar?",150,480);
			}
			
			else if(this.tag == "fala37")
			{
				screen.fillText("Deimos: Posso ajudá-lo no ritual de reversão,",150,480);
				screen.fillText("mas não é garantido...",150,510);
			}
			
			else if(this.tag == "fala38")
			{
				screen.fillText("-Vocês são loucos!!! Demônios? Rituais?",150,480);
				screen.fillText("Eu que não vou participar dessa loucura! Adeus.",150,510);
			}
			else if(this.tag == "fala39")
			{
				screen.fillText("-Me ajude! Eu quero minha vida de volta!",150,480);
			}
			else if(this.tag == "falaE1")
			{
				screen.fillText("-Uma mochila. Será que tem algo útil?",150,480);
			}
			else if(this.tag == "falaE2")
			{
				screen.fillText("-Trancada... Preciso da chave...",150,480);
			}
			else if(this.tag == "falaE3")
			{
				screen.fillText("-Uma chave. Pode ser útil.",150,480);
			}
			else if(this.tag == "falaE4")
			{
				screen.fillText("-Melhor ver se há alguem neste andar primeiro...",150,480);
			}
			else if(this.tag == "falaE5")
			{
				screen.fillText("-Que vídeo é esse? Demônio? Sacrifício? Que macabro!",150,480,570);
				screen.fillText("Não estou entendendo nada. Será que essa lâmpada",150,510,570);
				screen.fillText("funciona na lanterna?...",150,540);
			}
			else if(this.tag == "falaE6")
			{
				screen.fillText("-Droga... A luz apagou de vez...",150,480);
				screen.fillText("Ainda bem que a lampada funcionou na",150,510);
				screen.fillText("lanterna...",150,540);
			}
			else if(this.tag == "falaE7")
			{
				screen.fillText("Continua...",150,480);
			}
			}
			else if (this.language == "en")
			{
				if(this.tag == "fala1")
				{
					screen.fillText("-Arg, it hurts?... What's going on?",150,480);
					screen.fillText("These strange symbols... all full of blood",150,510);
				}
				else if(this.tag == "fala2")
				{
					screen.fillText("-A book? Full of blood too",150,480);
					screen.fillText("Can anyone say me what the hell is going on?.",150,510);
				}
				else if(this.tag == "fala3")
				{
					screen.fillText("-IS THERE ANYONE ALIVE?...",150,480);
					screen.fillText("I need to know what is happening.",150,510);
				}
				else if(this.tag == "fala4")
				{
					screen.fillText("-I don’t remember to see this lamp like that",150,480);
					screen.fillText("even once...",150,510);
				}
				else if(this.tag == "fala5")
				{
					screen.fillText("-Damn, locked! What should I do?",150,480);
				}
				else if(this.tag == "fala6")
				{
					screen.fillText("-Only showers and dirty walls...",150,480);
				}
				else if(this.tag == "fala7")
				{
					screen.fillText("-A flashlight. The lamp is broken. Fuck!",150,480);
				}
				else if(this.tag == "fala8")
				{
					screen.fillText("-I hope it would be enough to open that grid.",150,480);
					screen.fillText("*Press SPACE to pick it up.",150,510);
				}
				else if(this.tag == "fala9")
				{
					screen.fillText("-Let´s find a lamp to my flashlight first.",150,480);
				}
				else if(this.tag == "fala10")
				{
					screen.fillText("-Why is this projector on? There’s nobody",150,480);
					screen.fillText("here but me...",150,510);
				}
				else if(this.tag == "fala11")
				{
					screen.fillText("-I can’t see anything with this",150,480);
					screen.fillText("fucking light on.",150,510);
				}
				else if(this.tag == "fala12")
				{
					screen.fillText("-Shit, the flashlight broke once more. I think",150,480);
					screen.fillText("there was a switch near here",150,510);
				}
				else if(this.tag == "fala13")
				{
					screen.fillText("-Oh, So much blood, I  need to get out of here",150,480);
					screen.fillText("Who is responsible for this carnage here?",150,510);
				}
				else if(this.tag == "fala14")
				{
					screen.fillText("-A trail of blood...maybe I should ",150,480);
					screen.fillText("follow it to see if I find something.",150,510);
				}
				else if(this.tag == "fala15")
				{
					screen.fillText("-Oh my God, what happened here?",150,480);
					screen.fillText("What is happening?",150,510);
				}
				else if(this.tag == "fala16")
				{
					screen.fillText("-Og my God!!! What was that shit?!!!",150,480);
					screen.fillText("I have to get out of here. I can be the next!",150,510);
				}
				else if(this.tag == "fala17")
				{
					screen.fillText("-This place is becoming worse and worse...",150,480);
				}
				else if(this.tag == "fala18")
				{
					screen.fillText("-A ritual... Demons... Looks like some",150,480);
					screen.fillText("kind of summon ritual...",150,510);
				}
				else if(this.tag == "fala18.1")
				{
					screen.fillText("...",150,480);
				}
				else if(this.tag == "fala19")
				{
					screen.fillText("-OHHHHHHH! SCREAMS?",150,480);
				}
				else if(this.tag == "fala20")
				{
					screen.fillText("-They are still alive. What happened to them?",150,480,570);
					screen.fillText("They are more agitated than normal.", 150,510);
				}
				else if(this.tag == "fala21")
				{
					screen.fillText("-The exit must be downstairs.",150,480);
				}
				else if(this.tag == "fala22")
				{
					screen.fillText("-What the fuck... This place is like hell!",150,480);
				}
				else if(this.tag == "fala23")
				{
					screen.fillText("-An access card...",150,480);
					screen.fillText("Maybe i can use it on the lift.",150,510);
					screen.fillText("*Press SPACE to pick it up...",150,540);
				}
				else if(this.tag == "fala24")
				{
					screen.fillText("-I'm afraid... cant't live with this madness...",150,480);
					screen.fillText("... Maybe I should end this shit. Enough! AHH!",150,510);
				}
				else if(this.tag == "fala25")
				{
					screen.fillText("-Fucking place, fucking job!",150,480,570);
					screen.fillText("I knew that wasn't a good ideia to work at a asylum!",150,510,570);
				}
				
				else if(this.tag == "fala26")
				{
					screen.fillText("I need to get out of here before they catch me,",150,480,570);
					screen.fillText("but this fucking door doesn't open!",150,510,570);
				}
				
				else if(this.tag == "fala27")
				{
					screen.fillText("-Now I'm free...",150,480);
					screen.fillText("It doesn't matter what happened here, I'll leave this place!",150,510,570);
				}
				else if(this.tag == "fala28")
				{
					screen.fillText("John: So, are you Deimos?!",150,480);
				}
				
				else if(this.tag == "fala29")
				{
					screen.fillText("Deimos: You... The demon is inside you!",150,480);
				}
				
				else if(this.tag == "fala30")
				{
					screen.fillText("John: Tell me what happened with me. Everyone is dead.",150,480,570);
					screen.fillText("Strange things are happening. I know that you can explain to me",150,510,570);
				}
				
				else if(this.tag == "fala31")
				{
					screen.fillText("Deimos: I am the creator of the aylum and",150,480);
					screen.fillText("also the ritual that you probably participated",150,510,570);
				}
				
				else if(this.tag == "fala32")
				{
					screen.fillText("But you should be dead. It happens to the receptacle ",150,480);
					screen.fillText("of the demon.",150,510);
				}
				
				else if(this.tag == "fala33")
				{
					screen.fillText("-John: Demon?!",150,480,570);
				}
				
				else if(this.tag == "fala34")
				{
					screen.fillText("Deimos: You participated of the ritual to summon the demon called",150,480,570);
					screen.fillText("Mammon, but it ended not as expected. The demon attacked the ritual",150,510,570);
					screen.fillText("members. We were forced to control you until the storm harmed us. ",150,540,570);
				}
				
				else if(this.tag == "fala35")
				{
					screen.fillText("Without knowing who you were, we had to run away. You should die so",150,480,570);
					screen.fillText("the demon could live. But, as you're still alive, you must be some",150,510,570);
					screen.fillText("kind of chosen one. A creature capable of surviving with the demon in your body?",150,540,570);
				
				}
				
				else if(this.tag == "fala36")
				{
					screen.fillText("John: What should I do?! How can I free myself of this?",150,480);
				}
				
				else if(this.tag == "fala37")
				{
					screen.fillText("Deimos: I can help you in the reversion ritual,",150,480);
					screen.fillText("but there is no guarantee...",150,510);
				}
				
				else if(this.tag == "fala38")
				{
					screen.fillText("-You are crazy!!! All of you! Demons? Rituals? ",150,480);
					screen.fillText("I will not take place on this madness. Fuck off! Farewell!",150,510);
				}
				else if(this.tag == "fala39")
				{
					screen.fillText("-Help me! I want my ordinary life back!",150,480);
				}
				else if(this.tag == "falaE1")
				{
					screen.fillText("-A bag. Is there anything useful?",150,480);
				}
				else if(this.tag == "falaE2")
				{
					screen.fillText("-Locked... I need a key...",150,480);
				}
				else if(this.tag == "falaE3")
				{
					screen.fillText("-A key. It could be useful.",150,480);
				}
				else if(this.tag == "falaE4")
				{
					screen.fillText("-I should look for someone in this floor, first...",150,480);
				}
				else if(this.tag == "falaE5")
				{
					screen.fillText("-What is this video? Demons? Sacrifices? How demonic!",150,480,570);
					screen.fillText("I can't figure it out. And this lamp? Does it work",150,510,570);
					screen.fillText("on my flashlight?...",150,540);
				}
			}
		}
	}
	
}