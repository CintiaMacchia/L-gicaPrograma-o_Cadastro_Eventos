//variaveis de data
var dataAtual = new Date();
var dia = String(dataAtual.getDate()).padStart(2, '0');
var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
var ano = dataAtual.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

//variaveis do evento

let QuantPalestrantes = 5
let QuantParticipantes = 85
let totalpublico = QuantPalestrantes + QuantParticipantes

//solicitar data do evento()
let dataEvento = window.prompt("Qual a data do Evento?")
if (dataEvento < dataAtual){
    window.alert("Evento não poderá ser cadastrado")
    window.alert("Motivo: Data Inválida")
}else{
let anoNasc = window.prompt("Qual seu ano de nascimento?")
let idade = ano - anoNasc
if (idade < 18){
    window.alert("Evento não poderá ser cadastrado")
    window.alert("Motivo: Cadasdtro não permitido para menores de 18 anos")
}else{
window.alert(`${QuantPalestrantes} Palestrantes e ${QuantParticipantes} Participantes = total ${totalpublico}`)

if (totalpublico > 100){
    window.alert("Evento não poderá ser cadastrado")
    window.alert("Motivo: Limite de 100 pessoas excedido")
}
    else{
        window.alert("Cadastro efetuado com sucesso!")
    }
}
}