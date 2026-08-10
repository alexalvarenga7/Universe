// scalesData.js
// Datos de las escalas del universo, ordenadas de más cercana a más lejana (efecto "zoom out")

const scalesData = [
    {
        id: "tierra",
        orden: 1,
        nombre: "Tierra",
        categoria: "Planeta",
        escalaKm: 12742, // diámetro aproximado
        distanciaDesdeAnterior: "0 km (punto de partida)",
        descripcion:
            "Nuestro planeta, el único conocido con vida. Tiene un diámetro de aproximadamente 12,742 km y está compuesto en un 71% por agua.",
        datoCurioso:
            "La Tierra no es una esfera perfecta: está ligeramente achatada en los polos debido a su rotación.",
        imagen: "/images/tierra.jpg"
    },
    {
        id: "luna",
        orden: 2,
        nombre: "Sistema Tierra-Luna",
        categoria: "Sistema planetario",
        escalaKm: 384400, // distancia promedio Tierra-Luna
        distanciaDesdeAnterior: "384,400 km desde la Tierra",
        descripcion:
            "La Luna es el único satélite natural de la Tierra. Juntos forman un sistema que afecta las mareas y estabiliza la inclinación del eje terrestre.",
        datoCurioso:
            "La Luna se aleja de la Tierra unos 3.8 cm cada año.",
        imagen: "/images/luna.jpg"
    },
    {
        id: "sistema-solar",
        orden: 3,
        nombre: "Sistema Solar",
        categoria: "Sistema estelar",
        escalaKm: 11800000000, // aprox. hasta la órbita de Neptuno
        distanciaDesdeAnterior: "~4,500 millones de km hasta Neptuno",
        descripcion:
            "Formado por el Sol, 8 planetas, planetas enanos, lunas, asteroides y cometas, todos unidos por la gravedad del Sol.",
        datoCurioso:
            "El Sol contiene más del 99.8% de la masa total del Sistema Solar.",
        imagen: "/images/sistema-solar.jpg"
    },
    {
        id: "nube-oort",
        orden: 4,
        nombre: "Nube de Oort",
        categoria: "Límite del Sistema Solar",
        escalaKm: 15000000000000, // aprox 1 año luz
        distanciaDesdeAnterior: "~1 año luz desde el Sol",
        descripcion:
            "Una capa esférica de cuerpos helados que rodea el Sistema Solar y se considera su límite exterior, origen de muchos cometas.",
        datoCurioso:
            "Aunque nunca la hemos visto directamente, su existencia se infiere por las órbitas de los cometas de largo periodo.",
        imagen: "/images/nube-oort.jpg"
    },
    {
        id: "estrellas-cercanas",
        orden: 5,
        nombre: "Estrellas Vecinas",
        categoria: "Vecindario estelar",
        escalaKm: 40000000000000, // ~4.24 años luz a Próxima Centauri
        distanciaDesdeAnterior: "4.24 años luz hasta Próxima Centauri",
        descripcion:
            "El sistema estelar más cercano al nuestro es Alfa Centauri, que incluye a Próxima Centauri, la estrella más próxima al Sol.",
        datoCurioso:
            "Aun viajando a la velocidad de la luz, tardaríamos más de 4 años en llegar a Próxima Centauri.",
        imagen: "/images/estrellas-cercanas.jpg"
    },
    {
        id: "via-lactea",
        orden: 6,
        nombre: "Vía Láctea",
        categoria: "Galaxia",
        escalaKm: 946000000000000000, // ~100,000 años luz de diámetro
        distanciaDesdeAnterior: "Nuestro Sistema Solar está a ~26,000 años luz del centro",
        descripcion:
            "Nuestra galaxia, una galaxia espiral con cientos de miles de millones de estrellas, de las cuales el Sol es solo una más.",
        datoCurioso:
            "El Sistema Solar completa una órbita alrededor del centro de la Vía Láctea cada 225-250 millones de años.",
        imagen: "/images/via-lactea.jpg"
    },
    {
        id: "grupo-local",
        orden: 7,
        nombre: "Grupo Local",
        categoria: "Grupo de galaxias",
        escalaKm: 9.5e18, // aprox 10 millones de años luz de diámetro
        distanciaDesdeAnterior: "Andrómeda está a 2.5 millones de años luz",
        descripcion:
            "Un conjunto de más de 80 galaxias, dominado por la Vía Láctea y la galaxia de Andrómeda, unidas por la gravedad.",
        datoCurioso:
            "La galaxia de Andrómeda se dirige hacia la Vía Láctea y se espera que colisionen en unos 4,500 millones de años.",
        imagen: "/images/grupo-local.jpg"
    },
    {
        id: "laniakea",
        orden: 8,
        nombre: "Supercúmulo de Laniakea",
        categoria: "Supercúmulo de galaxias",
        escalaKm: 4.7e21, // ~500 millones de años luz de diámetro
        distanciaDesdeAnterior: "El Grupo Local es solo una pequeña parte de Laniakea",
        descripcion:
            "Una estructura masiva que contiene alrededor de 100,000 galaxias, incluyendo nuestro Grupo Local, extendiéndose por cientos de millones de años luz.",
        datoCurioso:
            "El nombre 'Laniakea' significa 'cielo inmenso' en hawaiano.",
        imagen: "/images/laniakea.jpg"
    },
    {
        id: "universo-observable",
        orden: 9,
        nombre: "Universo Observable",
        categoria: "Universo",
        escalaKm: 8.8e23, // ~93,000 millones de años luz de diámetro
        distanciaDesdeAnterior: "El límite de lo que podemos observar desde la Tierra",
        descripcion:
            "La porción del universo que podemos observar desde la Tierra, con un diámetro estimado de 93,000 millones de años luz, conteniendo billones de galaxias.",
        datoCurioso:
            "El universo observable no es todo el universo: es solo la parte de la que nos ha llegado luz desde el Big Bang.",
        imagen: "/images/universo-observable.jpg"
    }
];

export default scalesData;