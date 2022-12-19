

function hora(inteiro_para_avancar_ou_voltar_hora) {

    //console.log("funcao kwl hora ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_hora);



    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var hora = data.getHours(); // 0-23


    //se tiver um numero para voltar ou adicionar dia
    if (inteiro_para_avancar_ou_voltar_hora != null && inteiro_para_avancar_ou_voltar_hora != "") {

        inteiro_para_avancar_ou_voltar_hora = parseInt(inteiro_para_avancar_ou_voltar_hora);

        if (inteiro_para_avancar_ou_voltar_hora != NaN) {


            // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

            hora = (parseInt(hora) + 1) + inteiro_para_avancar_ou_voltar_hora


        }

    } else {
        hora = parseInt(hora) + 1 //janeiro 1 && dezembro 12 
    }





    return hora



}

































//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================




function minuto(inteiro_para_avancar_ou_voltar_minuto) {

   // console.log("funcao kwl minuto ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_minuto);



    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var minuto = data.getMinutes(); // 0-59

    //se tiver um numero para voltar ou adicionar dia
    if (inteiro_para_avancar_ou_voltar_minuto != null && inteiro_para_avancar_ou_voltar_minuto != "") {

        inteiro_para_avancar_ou_voltar_minuto = parseInt(inteiro_para_avancar_ou_voltar_minuto);

        if (inteiro_para_avancar_ou_voltar_minuto != NaN) {


            // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

            minuto = (parseInt(minuto) + 1) + inteiro_para_avancar_ou_voltar_minuto


        }

    } else {
        minuto = parseInt(minuto) + 1 //janeiro 1 && dezembro 12 
    }





    return minuto



}

























//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================




function segundo(inteiro_para_avancar_ou_voltar_segundo) {

    //console.log("funcao kwl segundo ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_segundo);



    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var segundo = data.getSeconds(); // 0-59


    //se tiver um numero para voltar ou adicionar dia
    if (inteiro_para_avancar_ou_voltar_segundo != null && inteiro_para_avancar_ou_voltar_segundo != "") {

        inteiro_para_avancar_ou_voltar_segundo = parseInt(inteiro_para_avancar_ou_voltar_segundo);

        if (inteiro_para_avancar_ou_voltar_segundo != NaN) {


            // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

            segundo = (parseInt(segundo) + 1) + inteiro_para_avancar_ou_voltar_segundo


        }

    } else {
        segundo = parseInt(segundo) + 1 //janeiro 1 && dezembro 12 
    }





    return segundo



}

setInterval(() => {
    

console.log(`${hora()}:${minuto()}:${segundo()}`)


}, 1000);

