function limpar(){
    document.getElementById('num1').value = ""
    document.getElementById('num2').value = ""
    document.getElementById('res').value = ""

}



function calcular(){

    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var operacao = document.getElementById('operacao').value;
    var resultado
//    alert("numero1: " + numero1 + " numero2: " + numero2)


    if(numero1 == ""){
        alert("Favor insira um número válido");
        return false;
    }


    if(numero2 == ""){
        alert("Favor insira um número válido");
        return false;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);



    switch(operacao){
        case "1": resultado = numero1-numero2;
            break;
        case "2": resultado = numero1+numero2;
            break;
        case "3": resultado = numero1*numero2;
            break;
        case "4": 
        
        if(numero2 == 0){
            alert("Não é possível dividir por 0")
            return false;        
        }
        resultado = numero1/numero2;

            break;
        default: alert("Escolha uma operação válida");
            return false
    }


    document.getElementById("res").value = resultado;


}
