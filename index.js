//variaveis de data
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

//variaveis do evento
let dataEvento = "19/09/2021"
let QuantPalestrantes = 5
let QuantParticipantes = 85
let totalpublico = QuantPalestrantes + QuantParticipantes

//solicitar data do evento()
console.log("Qual a data do Evento?")
console.log(dataEvento)

//solicitar idade
console.log("Qual sua idade?")
console.log (parseInt(Idade(1982)))

//participantes
console.log("Informe a quantidade de palestrantes e convidados?")
console.log(`${QuantPalestrantes} Palestrantes e ${QuantParticipantes} Participantes(total:${totalpublico})`)

function Idade(ano) {
    return new Date().getFullYear() - ano;
 }

//verificacoes
if (dataEvento < dataAtual){
    console.log("Evento não poderá ser cadastrado")
    console.log("Motivo: Data Inválida")
}  
else if (Idade(1982) < 18){
    console.log("Evento não poderá ser cadastrado")
    console.log("Motivo: Cadasdtro não permitido para menores de 18 anos")
}
else if (totalpublico > 100){
    console.log("Evento não poderá ser cadastrado")
    console.log("Motivo: Limite de 100 pessoas excedido")
}
else{console.log("Cadastro efetuado com sucesso!")

}
