function calcular(oper)
{
    var valor1 = document.calc.valor1.value;
    var valor2 = document.calc.valor2.value;

 if (oper == "1") {
    var res = parseInt(valor1) + parseInt(valor2);
 } else {
    if (oper == "2") {
       var res = valor1-valor2;
    } else {
       if (oper == "3") {
          var res = valor1*valor2;
       } else {
          var res = valor1/valor2;
       }
    }
 }

 document.calc.res.value = res;
}