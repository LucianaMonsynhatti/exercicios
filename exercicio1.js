let idade = prompt("Qual a sua idade?");


if (idade < 21) {
    alert("Espere mais até poder fazer um emprestimo");
}
else if (idade > 55) {
    alert("você não pode fazer um emprestimo");
}
else {
    let emprestimo = Number(prompt("quanto você quer emprestado?"));
        if(emprestimo< 1000) {
            alert("não aceito")
        }
        else{
    let ganho = Number(prompt("Quanto você ganha por mês?"));
    
    if (emprestimo > (15*ganho)) {
        alert("não aceito");
    }
    else if (emprestimo < 15*ganho ) {
        alert( "aceito");
    }
}}