function clock() {
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date(); // informaçoes referente a tempo//
    const horas = horaAgora.getHours(); //banco horas que esta no pacote//
    const minutos = horaAgora.getMinutes(); //banco de minutos que está no pacote//
    const segundos = horaAgora.getSeconds(); //banco de segundos que está no pacote//
    const formatoHoras = horas.toString().padStart(2, "0"); //transformou meu numero em string(cadeia de caracteres)// //star define o começo da string// //(2) define quantas caracteres vai ter ("0") como termina//
  
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    areaDoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`; //`${}` place Holders//

    //constante para colocar a nossa frase no html//
    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'); //uma variavel onde guardamos uma informação que contem varias informaçoes ou dados//Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos// 

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date() //variaçoes relacionadas a tempo//

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2.0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`;  //contagem sempre começa do zero////

    if (15 <formatoHoras> 14){
    document.getElementById(formatoHoras).src='https://ohhappyway.com/wp-content/uploads/2022/03/por-do-sol-brasilia-1.jpg'
   
    }



}

setInterval(clock, 1000)