function mediaDasNotas() {
    var notaElemento = document.getElementById("nota1");
    var nota1 = notaElemento.value;
    var notaElementoNumerico1 = parseFloat(nota1);

    var notaElemento = document.getElementById("nota2");
    var nota2 = notaElemento.value;
    var notaElementoNumerico2 = parseFloat(nota2);

    var notaElemento = document.getElementById("nota3");
    var nota3 = notaElemento.value;
    var notaElementoNumerico3 = parseFloat(nota3);

    var notaElemento = document.getElementById("nota4");
    var nota4 = notaElemento.value;
    var notaElementoNumerico4 = parseFloat(nota4);

    var calculoDaMedia = (notaElementoNumerico1 + notaElementoNumerico2 + notaElementoNumerico3 + notaElementoNumerico4) /4;
    
    var notaFinal = document.getElementById("notaFinal");

    if (calculoDaMedia > 6.9 || calculoDaMedia == 10.0) {
        notaFinal.innerHTML = "Sua média é " + calculoDaMedia.toFixed(1) + "<br>Parabéns, você foi aprovado!";
    } if (calculoDaMedia < 7){
        notaFinal.innerHTML = "Sua média é " + calculoDaMedia.toFixed(1) + "<br>Infelizmente, você foi reprovado!";
    } if (calculoDaMedia > 10.0){
        notaFinal.innerHTML = "Nota inválida! <br> Entre com notas de 0 a 10!"
    } 
  }