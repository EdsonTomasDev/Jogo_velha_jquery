let rodada = 1;
const matriz_jogo = [];


$(document).ready(function(){
    
    //INÍCIO FUNÇÃO CLICK INICIAR JOGO
    $("#btn_iniciar_jogo").click(function(){

        //VALIDA A DIGITAÇÃO DOS APELIDOS

        if($("#apelido_jogador1").val() != ""){

            if ($("#apelido_jogador2").val() != ""){
                //INSERIR O NOME DIGITADO NOS CAMPOS NOMES
                $("#nome_jogador1").html($("#apelido_jogador1").val());
                $("#nome_jogador2").html($("#apelido_jogador2").val());

                //CONTROLA A VISUALIZAÇÃO DAS DIVS
                $("#pagina_inicial").hide();
                $("#palco_jogo").show();

            }else{
                alert("Por favor, digite o apelido do Jogador 2!");

            }

        }else{
            alert("Por favor, digite o apelido do Jogador 1!");
        }
        
       


    });
    //FIM FUNÇÃO CLICK INICIAR JOGO

    //INÍCIO FUNÇÃO CLICK NOS CAMPOS JOGO DA VELHA
    $(".palco_jogo--casa").click(function(){
       
        let id_campo_clicado = this.id;
        jogada(id_campo_clicado);
    });

    function jogada(id){
        let icone = "";
        let ponto = 0;

        //QUANDO O RESTO DA DIVISÃO FOR 1 É A VEZ DO JOGADOR 1 SE 0 É A VEZ DO JOGADOR 2

        if ((rodada % 2) == 1){
            alert("É a vez do jogador 1");
            icone = 'url("./imagens/marcacao_1.png")';
            ponto = -1;

        }else{
            alert("É a vez do jogador 2");
            icone = 'url("./imagens/marcacao_2.png")';
            ponto = 1;

        }

        rodada ++;

        //EXIBE A IMAGEM DENTRO DA DIV COM O ID RECUPERADO
        $('#' + id).css('background',icone);

    }


});