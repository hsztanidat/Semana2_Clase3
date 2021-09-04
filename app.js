const mystring = "Bienvenido al curso de React Native en PachaQtec"
const transLang = "Ingles"
const mylang =
    [
        {
            idioma: "Español",
            texto: "Bienvenido al curso de React Native en PachaQtec", id_idioma: 1,
        },
        {
            idioma: "Ingles",
            texto: "Welcome to the React Native course at PachaQtec", id_idioma: 2,
        },
        {
            idioma: "Francés",
            texto: "Bienvenue dans le cours React Native chez PachaQtec", id_idioma: 3,
        },
        {
            idioma: "Italiano",
            texto: "Benvenuti al corso React Native presso PachaQtec", id_idioma: 4,
        },
        {
            idioma: "Portugués",
            texto: "Bem-vindo ao curso React Native na PachaQtec", id_idioma: 5,
        }
    ]
const findLang = function () {
    for (let key in mylang) {
        if (mylang[key].texto === mystring) {

            return mylang[key].idioma
        }
    }
}
const translate = function () {
    for (let key in mylang) {
        if (mylang[key].idioma === transLang) {

            return `${mylang[key].idioma}: ${mylang[key].texto}`
        }
    }
}



console.log(`${mystring}: ${findLang()} \n${translate()}`)