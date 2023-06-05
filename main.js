
// Ejercicio 1
let arrayNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

// Ejercicio 2
const contar = (array) => {
    for (let i = 0; i < array.length; i++){
    console.log(array[i])
}}
// Ejercicio 3
const mayorDe = (array) => {
    let arrayMayor = []
    for (let i = 0; i < array.length; i++){
        if (array[i] > 18) {
            arrayMayor.push(array[i])
        }
    }
    return arrayMayor
}
// Ejercicio 4
const buscarP = (palabra, array) => {
    for (let pal of array) {
            if (pal.toLowerCase() == palabra.toLowerCase()){
                return true
            }
    }
    return false
}
// Ejercicio 5
const asterisco = (palabra) => {
    return '*'.repeat(palabra.length)
}

// Ejercicio 6
const censurarFrase = (frase, arPalabras) => {
    let arrFrase = frase.toLowerCase().split(' ')
    for (let pal of arPalabras){
        for (let index in arrFrase) {
            if (arrFrase[index].toLowerCase() == pal.toLowerCase()){
                arrFrase[index] = asterisco(pal)
            }
        }
    }
    return arrFrase.join(' ')
    
}

let frase = 'Hola que tal'
let palabras = ['hola', 'adios']

console.log(censurarFrase(frase, palabras))