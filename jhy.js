/*
expressão binaria => var+1 var/2 var^3
expressao unaria => ++var
terciario if statement > true salva false apaga
*/
//let number = 1
//console.log(false ? 'alo' : 'nada')

let name = new String('mais')
name.surName = 'minecraft'
let age = new Number(23)
console.log(name.surName, age)
//delete deleta propriedades!

//mult *
// divisão /
//exponencial **

// igual a ==
// estritamente gual a ===
// diferente de !=
//!== estritamente diferente de
 //"estritamente" olha pra o tipo, string ou numero ou função
 //assigment -=  (+)soma(=)resultado 
let one = 1
let two = 2

console.log(two == 1) //false statement
console.log(one == "1") //true statement

console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1") //false

console.log(one === "1")//false
console.log(one === 1)//true

console.log(two !=="2")//true
console.log(two !== 2)//false

//logic gates (&&)AND (||)OR (!)NOT ?(ENTÃO)
rue = true
alse = true

const asvozes = rue && alse ? 'bom' : 'ruim' 

console.log(asvozes)
