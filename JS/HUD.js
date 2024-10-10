//----------VALORES GLOBAIS | COMEÇO --------------------------//
var cont1 = 0;
//-----------------------
var pngMusic = new Button("IMG/HUD/song.png", 37, 37, 680, 20);
var cont2 = 0;
//-----------------------
var pngSong = new Button("IMG/HUD/music.png", 37, 37, 635, 21);
var cont3 = 0;
//-----------------------
var ptBr = new Button("IMG/HUD/ptbr.png", 37, 37, 585, 20);
var cont4 = 0;
var ativa;
//----------VALORES GLOBAIS | FIM --------------------------//


function Hud() {
    //-----------------------------------COMEÇO-------------------------------------//
    //Declara o botão de Opções do jogo
    this.hud = new Array();
    //------------------------------------------------------------------------
    this.options = new Button("IMG/HUD/options.png", 42, 41, 730, 20);
    ativa = false; //Define se a variável está ativa ou não;
    cont1 = 0; //Conta os clicks em cima do button options;
    //----------------------------------------------------------------
    pngMusic.button.visible = false;
    cont2 = 0;
    //----------------------------------------------------------------
    pngSong.button.visible = false;
    cont3 = 0;
    //----------------------------------------------------------------
    ptBr.button.visible = false;
    cont4 = 0;
    //-----------------------IDIOMAS | VARIÁVEIS | COMEÇO-------------------------------------//
    this.falar = new Falas();
    this.falar.mostrar = false;
    //-----------------------IDIOMAS | VARIÁVEIS | FIM-------------------------------------//
    this.tradution = new MySprite("", 0, 0, 800, 100, 0, 500, 800, 100, 0, 0);
    //------------------------------------FIM-----------------------------------------//
    //-----------------------------------COMEÇO-------------------------------------//
    this.Draw = function () //$() Responsável por desenhar
    {
        this.options.Draw(); //Desenha o botão de opções do HUD
        pngMusic.Draw(); //Desenha o botão de musica do HUD
        pngSong.Draw(); //Desenha o botão de som do HUD
        ptBr.Draw();

        //---------------------MUDAR IDIOMA | COMEÇO ----------------------------------------------//
        this.falar.Draw(); //Definir no Draw
        if (ptBr.button.current_frame == 0) {
            this.falar.language = "en";
        }

        if (ptBr.button.current_frame == 1) {
            this.falar.language = "pt";
        }
		//Parte de Audio-------------------------------------------------------------------------//
		if (pngSong.button.current_frame == 0) {
            somGlobal = true;
        }

        if (pngSong.button.current_frame == 1) {
            somGlobal = false;
        }
		if (pngMusic.button.current_frame == 0) {
            musicaGlobal = true;
        }

        if (pngMusic.button.current_frame == 1) {
            musicaGlobal = false;
        }
        //---------------------MUDAR IDIOMA | FIM ----------------------------------------------//
        //-------------------------------------------------------------------------------
        //Se o botão for clicado 2 ou mais vezes, desativa
        if (cont1 >= 2) {
            ativa = false;
        }
        //------------------------------------------------------
        //Se for verdade, desenha frame 1 de this.options, e deixa true a visibilidade de pngMusic ...Song;
        if (ativa) {
            this.options.button.current_frame = 1;
            pngMusic.button.visible = true;
            pngSong.button.visible = true;
            ptBr.button.visible = true;
        }
        //------------------------------------------------------
        //Se for false, desenha frame inicial (0), e volta o contador pra 0;
        if (!ativa) {
            this.options.button.current_frame = 0;
            pngMusic.button.visible = false;
            pngSong.button.visible = false;
            ptBr.button.visible = false;
            cont1 = 0;
        }
    }
    //------------------------------------FIM-----------------------------------------//


    //-----------------------------------COMEÇO-------------------------------------//
    this.mouse_down = function (mouse) {
        //Se o botão for clicado, ativa a variável e som +1 no contador
        if (this.options.Clicked(mouse)) {
            //console.log(cont1);
            ativa = true;
            cont1++;
        }

        if (pngMusic.Clicked(mouse)) {
            //console.log("clicouNaMusica");
            cont2++;
            pngMusic.button.current_frame = 1;
            if (cont2 >= 2 && pngMusic.button.current_frame == 1) {
                pngMusic.button.current_frame = 0;
                cont2 = 0;
            }
        }

        if (pngSong.Clicked(mouse)) {
            //console.log("clicouNoSom");
            cont3++;
            pngSong.button.current_frame = 1;
            if (cont3 >= 2 && pngSong.button.current_frame == 1) {
                pngSong.button.current_frame = 0;
                cont3 = 0;
            }
        }

        if (ptBr.Clicked(mouse)) {
            //console.log("clicou");
            cont4++;
            ptBr.button.current_frame = 1;
            if (cont4 >= 2 && ptBr.button.current_frame == 1) {
                ptBr.button.current_frame = 0;
                cont4 = 0;
            }
        }
        //------------------------------------------------------

    }
    //------------------------------------FIM-----------------------------------------//
}
