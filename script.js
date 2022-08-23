function calculaMedia(a , b ,c ){
    let resultado = (a, b, c)/3;
    return resultado;

}
 function calculaExame(nota){
     let resultado = 10 - nota ;
     return resultado ;
 }


 function calculardelta ( a, b ,c  ){
     let delta = b*b - (4*a*c );
     return delta;
 }



function calcularx1(a , b ,delta ){
    let x1 = (-1*b + Math.sqrt (delta)) / 2 * a
    return x1;
} 


function calcularx2(a , b , delta){
    let x2 = (-1*b - Math.sqrt(delta )) / 2 * a;
    return x2;
}

$('#inputola').click(
    function(){
        // cadastro =
        // {
        //     'nome' :document.getElementById('inputNome').value, 
        //     'endereco':document.getElementById('inputendereco').value,
        //     'email':document.getElementById('inputemail').value

        // }
                  
        //           alert('meu nome é: ' +cadastro.nome + 'sou de '+  cadastro.endereco+'meu email' + cadastro.email);
        //           alert(cadastro.endereco);
        //           alert(cadastro.email);

        calculo=
        {  
        'a':document.getElementById('inputA').value,
        'b':document.getElementById('inputB').value,
        'c':document.getElementById('inputC').value
          }
     

         //  let media = calculaMedia(
            //  parseInt(calculo.a),
              //parseInt(calculo.b),
              // parseInt(calculo.c)
         //  );

         //  let exame = calculaExame(media)
          



     // let media =(parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) /3;
     // let exame = (10-media);

      if (media >= 7) {
          alert('voce foi aprovado!')
      } else {
          alert('a nota que vc precisa é :'+exame);
      }
     
        
})