let tamanho = prompt("Qual o tamanho da escada?")

   // let tamanho = Number(prompt("qual o tamanho da escadinha"));
// let contador = 0;
// let escadinha = "";
// let simb = prompt("Qual o simbolo da escada?");

// while(contador < tamanho){
//     escadinha = escadinha + simb;
//     console.log(escadinha);
//     contador++;
// }


function escada (inicio, fim) {
    let simb = prompt("Qual o simbolo da escada?");
    let escadinha = "";
    for(let i =inicio; i<fim; i++){
    escadinha = escadinha +simb;
    console.log(escadinha);
    
    }
    return escada;
}
