
//statement
function createPhrases(){
    console.log('ERR BLOCKED_BY_USER')   
}
createPhrases()
createPhrases()
createPhrases()
createPhrases()
createPhrases()

console.log('finn')

let sum = function(funny, ohwoeisme){
    let total = funny + ohwoeisme
    return total
}

let funny = 23
let ohwoeisme = 23

console.log(`funny é ${funny}`)
console.log(`ohwoeisme é ${ohwoeisme}`)
console.log(`a soma é ${sum(funny, ohwoeisme)}`)
//let sum = function(funny, ohwoeisme){
//    console.log(funny + ohwoeisme)
//}
//sum(569, 74343) somente sum funciona

//hoist so funciona com function sozinho


function amem(soldierofgod){
    console.log("minecraft")
}
//                         |
//arrow function           V
const asvozes = (amem) => {
    console.log(amem)
}
//callback
function thevoice(voices){
    console.log('as vozes')
    
    voices()

    console.log('im out of your walls')
}

thevoice(
    () => {
        console.log('im in your walls im in your walls im in your walls')
    }
)
function Pmaiusculo(letra){
    this.letra = letra
    this.vendo = function(){
        return this.letra + "the"
    }
}
const menusculo = new Pmaiusculo('sese')
const ouvindo = new Pmaiusculo('adadada')
console.log(menusculo)
console.log(ouvindo)
