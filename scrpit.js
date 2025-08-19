alert("PARA ESTUDOS!")

//hello world
alert("Olá mundo")

//programa q exibi numeros
let numero = parseInt(prompt("digite um numero"))
alert(`o numero informado foi ${numero}`)

//programa q soma
let num1 = parseInt(prompt("digite um numero!"))
let num2 = parseInt(prompt("digite outro numero!"))

let soma = num1 + num2
alert(`a soma dos dois numeros é ${soma}`)

//programa de media
let notaDeMatematica = parseFloat(prompt("qual sua nota de matematica?"))
let notaDePortugues = parseFloat(prompt("qual sua nota de portugues?"))
let notaDeCiencias = parseFloat(prompt("qual sua nota de ciencias?"))
let notaDeArtes = parseFloat(prompt("qual sua nota de artes?"))

let mediaDasNotas = (notaDeMatematica + notaDePortugues + notaDeCiencias + notaDeArtes) / 4
alert(`a media das suas notas foi ${mediaDasNotas.toFixed(1)}`)

//progama de conversão de metros para centimetros 
let metros = parseFloat(prompt("vc tem quantos metros?"))
let converterParaCentimetros = metros * 100

alert(`ent vc tem ${converterParaCentimetros} centimetros`)

//programa q calcule a  area de um circulo
let pi = 3.14
let raioDoCirculo = parseFloat(prompt("qual o raio do seu circulo?"))

let areaDoCirculo = pi * (raioDoCirculo * raioDoCirculo)
alert(`a área do circulo é ${areaDoCirculo.toFixed(1)}`)

//calcular area do quadrado e mostrar o dobro
let ladoDoQuadrado = parseFloat(prompt("qual o comprimento do lado do seu quadrado?"))

let areaDoQuadrado = ladoDoQuadrado * ladoDoQuadrado
let dobroDaArea = areaDoQuadrado * 2
alert(`a area do seu quadrado é de ${areaDoQuadrado.toFixed(1)} e seu dobro é ${dobroDaArea.toFixed(1)}`)

//programa q mostra oq quando vc ganha no mes por hora
let quantoGanhaPorHora = parseFloat(prompt("Quanto vc ganha por hora?"))
let horasTrabalhadas = parseInt(prompt("Quantas horas vc trabalha por mes?"))

let ganhoDoMes = quantoGanhaPorHora * horasTrabalhadas
alert(`ent seu salario foi de R$${ganhoDoMes}`)

//progrma de conversão de fahrenheit para graus celcius
let grausEmFahrenheit = parseFloat(prompt("quantos graus fahrenheit esta ai?"))

let conversãoParaCelsius = 5 * ((grausEmFahrenheit-32) / 9)
alert(`ent a temperatura esta ${conversãoParaCelsius.toFixed(1)} graus celsius`)

//programa de conversão de graus celsius para fahrenheit
let grausEmCelsius = parseFloat(prompt("quantos graus celsius esta ai?"))

let conversãoParaFahrenheit = (grausEmCelsius * 9/5) + 32
alert(`ent ai esta ${conversãoParaFahrenheit} fahrenheit`)

//progrma de calculadora louca
let numeroint1 = parseInt(prompt("me diga um numero inteiro"))
let numeroint2 = parseInt(prompt("me diga outro numero inteiro"))
let numeroReal = parseFloat(prompt("agr me diga um numero qualquer"))

let calculo1 = (numeroint1*2) * (numeroint2.toFixed(0) / 2)
let calculo2 = (numeroint1*3) + numeroReal
let calculo3 = numeroReal ** 3
alert(`
    O produto do dobro do primeiro(${numeroint1}) com metade do segundo(${numeroint2.toFixed(0) / 2}) é ${calculo1} 
    A soma do triplo do primeiro(${numeroint1}) com o terceiro(${numeroReal}) é ${calculo2}
    O terceiro(${numeroReal}) elevado ao cubo é ${calculo3.toFixed(1)}
    `)

//progrma de converão de gigas para megas
let gigas = parseFloat(prompt("quantos gigas vc precisa converter?"))

let conversaoParaMegas = gigas * 1024
alert(`o seu arquivo em megas é ${conversaoParaMegas}`)


// progrma de conversão de gigas para megas e kilo
let tamnhoDoArquivoEmGigas = parseFloat(prompt("qual o tamnho do arquivo em gigas?"))

let tamnhoDoArquivoEmMegas = tamnhoDoArquivoEmGigas * 1024
let tamnhoDoArquivoEmKilo = tamnhoDoArquivoEmGigas * 1024 * 1024
alert(`o tamanho do seu arquivo em megabytes é ${tamnhoDoArquivoEmMegas}
    o tamanho do seu arquivo em kilobytes é ${tamnhoDoArquivoEmKilo}
    `)

// joão o pescador
let pesoDosPeixes = parseFloat(prompt("qual kilos de peixe vc pegou hj"))

let execeso = pesoDosPeixes - 50
let multa = execeso * 4
alert(`
    vc pescou ${pesoDosPeixes}kg
    vc exedeu ${execeso}kg
    vc precisar pagar ${multa}R$
    `)

// INSS
let salarioBruto = parseInt(prompt("qual o seu salario bruto(sem impostos)?"))

let ir = salarioBruto * 0.11
let inss = salarioBruto * (8 / 100)
let sindicato = salarioBruto * (5 / 100)
let total = salarioBruto - ir - inss - sindicato
alert(`
    + Salário Bruto : ${salarioBruto}R$
    - IR (11%) : ${ir}R$
    - INSS (8%) : ${inss}R$
    - Sindicato ( 5%) : ${sindicato}R$
    = Salário Liquido : ${total}R$
    `)

// lojas de tintas
let tamnhoDaParede = parseInt(prompt("qual o tamanho da parede q vc quer pintar? (em metro quadrados)"))
let litrosDeTinta = tamnhoDaParede / 6

let latas = litrosDeTinta / 18
let precoLatas = latas * 80

let galoes = litrosDeTinta / 3.6
let precoGaloes = galoes * 25

let misturaLatas = litrosDeTinta % 18
let resto = litrosDeTinta - (mistura * 18)
let misturaGaloes = resto / 3.6
let precoMistura = (misturaLatas * 18) + (misturaGaloes * 25)

alert(`
    apenas latas de 18L: precisa de ${latas} e custara R$${precoLatas}
    apenas galões de 3,6L: precisa de ${galoes} e custara R$${precoGaloes}
    se misturase eles seria: ${misturaLatas} latas e ${misturaGaloes} galões e custara R$${precoMistura}
    `)


//programa q calcula o tempo de dowload
let tmnDoArquivo = parseFloat(prompt("qual o tamanho do seu arquivo para dowload (em MB)"))
let velocidadeDoLink = parseFloat(prompt("qual a velocidade do link (em Mbps)"))

let velocidadeEmSegundo = tmnDoArquivo / velocidadeDoLink
let conversaoParaMinutos = velocidadeEmSegundo / 60
alert(`seu aquivo levara aproximadamente ${conversaoParaMinutos} minutos para carregar`)
