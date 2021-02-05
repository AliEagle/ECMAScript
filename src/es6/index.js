function newFunction(name, age, country) {
    var name = 'ali'
    var age = 30
    var country = 'MX'
    console.log(name, age, country)
}

newFunction()

// es6 -- Default Params

const newFunctionES6 = (name = 'ali', age = 32, country = 'MX') => console.log(name, age, country)

newFunctionES6()
newFunctionES6('richi', 35, 'CA')

//----------------------------------------------------------------------------------------------

//Concatenación

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)


// es6 -- Template Literals
let hola = 'Hola'
let mundo = 'Mundo'
let epicPhrase2 = `${hola} ${mundo}`
console.log(epicPhrase2)

//----------------------------------------------------------------------------------------------

let lorem = 'Esta es mi super frase\n'
    + 'otra frase que necesito '
console.log(lorem)


// es6 -- Multilinea
let lorem2 = `Esta es mi otra frase epica,
esta permite enter para espacio y crear otra
frase!!!!`

console.log(lorem2)

//----------------------------------------------------------------------------------------------

let persone = {
    'nombre': 'ali',
    'age': '30',
    'country': 'MX',
}
console.log(persone.nombre, persone.age, persone.country)

// es6 -- Desestructuración De Objetos

let persone2 = {
    'nombre': 'ali2',
    'age': '30',
    'country': 'MX2',
}
let { nombre, country } = persone2
console.log(nombre, country)

//Exc.
let band1 = {
    bandName: 'pink floyd',
    country: 'london',
    members: 5
}
console.log(band1.bandName, band1.country, band1.members)

let band2 = {
    bandName: 'ledZepp',
    country: 'london',
    members: 4,
}

let { bandName, country, members } = band2
console.log(bandName, country, members)

let band3 = {
    bandName: 'blackSabbath',
    country: 'london',
    members: 4
}

let { bandName, country, members } = band3
console.log(bandName, country, members)


let band4 = {
    bandName: 'theBeatles',
    country: 'london',
    members: 4,
}

let { bandName, country } = band4
console.log(bandName, country)

//-----------------------------------------------------------------------------------------

// es6 -- Spread Operator

let team = ['ali', 'dona']
let team2 = ['arantza', 'panfi']
let team3 = ['filo', 'caracolA']

let equipos = [[...team], [...team2], [...team3, 'CaracolB', 'CaracolC']]
let equiposJuntos = [[...team], [...team2], [...team3]]
console.log(equiposJuntos)

//------------------------------------------------------------------------------------------

// es6 -- LET VS VAR - CONST
{
    var globalVar = 'Global Var'
}

{
    let globallet = 'Global Let'
    console.log(globallet)
}

console.log(globalVar)

const a = 'b'
a = 'a'
console.log(a) // Assignment Error

//---------------------------------------------------------------------------------------

// PARAMETROS DE OBJETOS

let nombre = 'ali'
let edad = 32
let edad2 = 35
// es5 ---------------------------------
let obj = { nombre: nombre, edad: edad };
// es6 ---------------------------------
let obj2 = { nombre, edad2 }
console.log(obj)
console.log(obj2)

//--------------------------------------------------------------------------------------

// ARROW FUNCTIONS

const empleados = [
    { nombre: 'ali', edad: 30 },
    { nombre: 'arantza', edad: 26 },
    { nombre: 'Dona', edad: 4 },
]

// REGULAR FUNCTION DECLARATION
let listaNombres = empleados.map(function (item) {
    console.log(`${item.nombre},tiene ${item.edad} años`)
})
// es6 - ARROW FUNCTION
let listaNombresArrow = empleados.map(item => console.log(item.nombre))
// es6 - ARROW FUNCTION
const square = num => num * num
console.log(square(5))

//-----------------------------------------------------------------------------------

// es6 -- PROMESAS

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        (false) ? resolve('Hey!') : reject('Ups!!')
    })
}

helloPromise()
    .then(respuesta => console.log(respuesta))
    .then(() => console.log('Ali'))
    .catch(error => console.log(error))

//-------------------------------------------------------------------------------------

class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    suma(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.suma(5, 89))


//Exc.

class Mascota {
    constructor(nombre, edad,) {
        this.nombre = nombre
        this.edad = edad
        this.agregarAArray()
        this.arregloArray()
    }

    agregarAArray(nombre, edad) {
        return misMascotas.push(this.nombre, this.edad)
    }

    arregloArray() {
        if (agregarAArray()) {
            misMascotas.map()
        }
    }


}

let misMascotas = []
const dona = new Mascota('Dona', 3)
const panfi = new Mascota('Panfilo', 1)
console.log(misMascotas)

//---------------------------------------------------------------------------------

// es6 -- Import Export Modules
import { hello } from './modules'

hello()

//--------------------------------------------------------------------------------

function* helloWorld() {
    if (true) {
        yield 'Hola, '
    }
    if (true) {
        yield 'Mundo!!!'
    }
    if (true) {
        yield ' Como estan?'
    }
}