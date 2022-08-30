//__proto__
let word = "agamanagamanokoxixi"
console.log(word.length)
let number = 123342.3213403223040503403040003040030003030003030303040030030403044232342343243242343
console.log(String(number).length)
console.log(number.toFixed(9).replace(".",","))

let nombero = 345.20422420143112343123
console.log(number)
//to lower case
//to upper case
//phrase.split() corta
let phrase = "sometimes i dream about cheese"
console.log (phrase.includes("sometimes"))
let array = new Array('a', 'b', 'c')
console.log(array)  

let wheni = 'funny'
console.log(Array.from(wheni))

let dores = ['html,','css','js']
//tell adicionar no fim do array
dores.push('nodejs')
//adicionar no começo
dores.unshift('sql')
//remover do começo
dores.shift()
//remover do fim
dores.pop()
//pegar algum elemento do array
console.log(dores.slices(1,3))
//remover 1 ou  mais items em qualquer posição do array
dores.splice(1,3)
//encontrar a posição de um elemento no arry
let index = dores.indexOf('cs')
//index contem resultado da posição de cs
