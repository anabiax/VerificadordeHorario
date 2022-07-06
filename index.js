/*const anoAtual = new Date()
const idade = anoAtual.getFullYear() - anoNascimento

 const nome =  prompt('Informe seu nome')
const idade = prompt ('Informe sua idade') 
const campoNome = document.querySelector('#nome')
campoNome.innerHTML += nome

const campoIdade = document.querySelector('#idade')
campoIdade.innerHTML += idade */



/* pegando o valor que o usuário está dando */
let hora 
const verificador = document.querySelector("#verificador")


function clicar (){       /*responsável por conectar esse meu botão ao html e executa uma função qnd clico nesse botão */
    const horaInput = document.querySelector("#hora")
    hora = horaInput.value /* se eu estou trabalhando com o input, tudo o que é digitado é o valor digitado nele, por isso o "value"*/
    
    const separador = hora.indexOf(":") // indexOf retorna um valor numérico e não um booleano

    if(separador !==1 || separador !== 2){
        verificador.innerHTML = "Horário inválido"
    }

    const arrayHora = hora.split(":") /* a hora é o meu array, pq é uma string. P/ dividir um array usamos a função "split" */
    const valorHora = arrayHora[0] // 1ª posição do array
    const valorMinuto = arrayHora[1].split("", 2).toString()  // 2ª posição do array
    
    console.log(valorMinuto)

    if(valorMinuto >= 60) {
        verificador.innerHTML = "Horário inválido"
    } else {
        hora = valorHora
    }

    console.log(valorMinuto)
    console.log(hora)


        if(hora >= 6 && hora < 12){
            verificador.innerHTML = "Manhã"
        } else if (hora >= 12 && hora < 18){
            verificador.innerHTML = "Tarde"
        } else if (hora >= 18 && hora < 24 || hora === 0){  /* delimitar p/ ele n ultrapassar 24h */
        verificador.innerHTML = "Noite"
        } else if (hora > 0 && hora < 6) {
            verificador.innerHTML = "Madrugada"
        } else {
            verificador.innerHTML = "Horário inválido"
        }      
    }


