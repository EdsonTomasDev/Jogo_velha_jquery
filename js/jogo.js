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
        alert(id_campo_clicado);
    });


});