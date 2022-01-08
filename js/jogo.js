let rodada = 1;
const matriz_jogo = [];
matriz_jogo['a'] = [];
matriz_jogo['b'] = [];
matriz_jogo['c'] = [];
matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;


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
        //NÃO PERMITIR OUTRO CLIQUE NA MESMA CASA
        $("#" + id_campo_clicado).off();
        jogada(id_campo_clicado);

       
    });

    function jogada(id){
        let icone = "";
        let ponto = 0;

        //QUANDO O RESTO DA DIVISÃO FOR 1 É A VEZ DO JOGADOR 1 SE 0 É A VEZ DO JOGADOR 2

        if ((rodada % 2) == 1){
            //alert("É a vez do jogador 1");
            icone = 'url("./imagens/marcacao_1.png")';
            ponto = -1;

        }else{
            //alert("É a vez do jogador 2");
            icone = 'url("./imagens/marcacao_2.png")';
            ponto = 1;

        }

        rodada ++;

        //EXIBE A IMAGEM DENTRO DA DIV COM O ID RECUPERADO
        $('#' + id).css('background',icone);

         //SEPARAR O ID LETRA E NÚMERO
         const lista_id = id.split("");
         let linha = lista_id[0];
         let coluna = lista_id[1];
         //ATRIBUI VALOR PARA O ARRAY COM A LETRA CORRESPONDENTE
         matriz_jogo[linha][coluna] = ponto;
        //  alert(matriz_jogo[linha][coluna]);

         verifica_combinacao()
      

    }
    //VERIFICA SE A COMBINAÇÃO GANHA O JOGO
    // SE DER -3 O JOGADOR 1 VENCE
    // SE DER 3 O JOGADOR 2 VENCE
    function verifica_combinacao(){

        let pontos = 0;

        //VERIFICA NA HORIZONTAL
        for(let i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['a'][i];
            
        }

        ganhador(pontos);

        pontos = 0;

        for(let i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['b'][i];
            
        }

        ganhador(pontos);

        pontos = 0;

        for(let i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['c'][i];
            
        }

        ganhador(pontos);

        //VERIFICA NA VERTICAL
           
        for(let l = 1; l <= 3; l++){
            pontos = 0;
            pontos = pontos +  matriz_jogo['a'][l];
            pontos = pontos +  matriz_jogo['b'][l];
            pontos = pontos +  matriz_jogo['c'][l];

            ganhador(pontos);

        }

        //VERIFICA NA DIAGONAL
        pontos = 0;

        pontos = pontos + matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];

        ganhador(pontos);

        pontos = 0;

        pontos = pontos + matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];

        ganhador(pontos);
      

        
    }

    function ganhador(pontos){

        if (pontos == -3){
            let jogadores = $("#apelido_jogador1").val();
            alert("O jogador " + jogadores + " venceu!");
            $(".palco_jogo--casa").off();
        }

        if (pontos == 3){
            let jogadores = $("#apelido_jogador2").val();
            alert("O jogador " + jogadores + " venceu!");
            $(".palco_jogo--casa").off();
        }
    }


});