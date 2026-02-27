// ================================================================
//  MOTORA — autos.js
//  Editá este archivo para agregar, modificar o sacar autos.
//
//  FOTOS:
//  Crea una carpeta "fotos/" en tu proyecto con subcarpetas por auto.
//  Ejemplo de estructura:
//    fotos/
//      corolla-2020/
//        1.jpg
//        2.jpg
//        3.jpg
//      hilux-2019/
//        1.jpg
//        2.jpg
//
//  Luego en el campo "fotos" pones los paths así:
//    fotos: ["fotos/corolla-2020/1.jpg", "fotos/corolla-2020/2.jpg"]
//
//  CAMPOS:
//  marca, modelo, anio, tipo (Sedan|SUV|Pickup|Hatchback|Coupe|Van)
//  km, combustible (Nafta|Diesel|GNC|Hibrido), trans (Automatico|Manual|CVT)
//  precio (solo numeros, en USD), color, badge (Oportunidad|Nuevo|Premium|vacio)
//  sede: "bsas" para Buenos Aires | "srm" para San Rafael Mendoza
//  desc: descripcion larga del auto
//  fotos: array con los paths de las fotos (minimo 1, sin limite maximo)
// ================================================================

var AUTOS = [

  // ── AUTO 1 ──────────────────────────────────────────────────────
  {
    marca: "Nissan",
    modelo: "Sentra",
    anio: "2020",
    tipo: "Sedan",
    km: "140.000",
    combustible: "Nafta",
    trans: "Manual",
    precio: 18500,
    color: "Gris",
    badge: "En Stock",
    sede: "bsas",
    desc:        "Un solo dueno. Service al dia, cubiertas nuevas, interior impecable. Cuero y pantalla con CarPlay.",
    fotos: [
      "fotos/Sentra/1.jpg",
      "fotos/Sentra/2.jpg",
      "fotos/Sentra/3.jpg",
      "fotos/Sentra/4.jpg",
      "fotos/Sentra/5.jpg",
      "fotos/Sentra/6.jpg"
    ]
  },

  // ── AUTO 2 ──────────────────────────────────────────────────────
  {
    marca: "Alfa Romeo",
    modelo: "Giulietta",
    anio: "2015",
    tipo: "Hatchback",
    km: "147.500",
    combustible: "Nafta",
    trans: "Automatico",
    precio: 16500,
    color: "Blanco",
    badge: "En Stock",
    sede: "bsas",
    desc:        "Version tope de gama.",
    fotos: [
      "fotos/Giulietta/1.jpg",
      "fotos/Giulietta/2.jpg",
      "fotos/Giulietta/3.jpg",
      "fotos/Giulietta/4.jpg",
      "fotos/Giulietta/5.jpg",
      "fotos/Giulietta/6.jpg",
      "fotos/Giulietta/7.jpg",
      "fotos/Giulietta/8.jpg",
      "fotos/Giulietta/9.jpg"
    ]
  },

  // ── AUTO 3 ──────────────────────────────────────────────────────
  {
    marca: "Peugeot",
    modelo: "208 GT",
    anio: "2019",
    tipo: "Hatchback",
    km: "90.000",
    combustible: "Nafta",
    trans: "Manual",
    precio: 17000,
    color: "Gris Plata",
    badge: "en Stock",
    sede: "bsas",
    desc:        "Motor 2.8 turbodiesel impecable. Cuero, pantalla 8 pulgadas, camara 360.",
    fotos: [
      "fotos/hilux-2019/1.jpg",
      "fotos/hilux-2019/2.jpg",
      "fotos/hilux-2019/3.jpg",
      "fotos/hilux-2019/4.jpg",
      "fotos/hilux-2019/5.jpg"
    ]
  },

  // ── AUTO 4 ──────────────────────────────────────────────────────
  {
    marca: "Peugeot",
    modelo: "408 HDI Allure",
    anio: "2016",
    tipo: "Sedan",
    km: "195.000",
    combustible: "Diesel",
    trans: "Automatico",
    precio: 13500,
    color: "Taxi",
    badge: "Oportunidad",
    sede: "bsas",
    desc:        "Motor 1.6. Economico, ideal para ciudad. Documentacion completa. Permuta posible.",
    fotos: [
      "fotos/gol-2019/1.jpg",
      "fotos/gol-2019/2.jpg"
    ]
  },

  {
    marca: "Volswagen",
    modelo: "Polo Classic",
    anio: "2003",
    tipo: "Sedan",
    km: "411.000",
    combustible: "Nafta/GNC",
    trans: "Manual",
    precio: 4000,
    color: "Gris",
    badge: "Oportunidad",
    sede: "bsas",
    desc:        "Motor 1.6. Economico, ideal para ciudad. Documentacion completa. Permuta posible.",
    fotos: [
      "fotos/gol-2019/1.jpg",
      "fotos/gol-2019/2.jpg"
    ]
  },

  {
    marca: "Peugeot",
    modelo: "208 Feline",
    anio: "2024",
    tipo: "Hatchback",
    km: "25.000",
    combustible: "Nafta",
    trans: "Automatico",
    precio: 20000,
    color: "Azul",
    badge: "En Stock",
    sede: "bsas",
    desc:        "Motor 1.6. Economico, ideal para ciudad. Documentacion completa. Permuta posible.",
    fotos: [
      "fotos/gol-2019/1.jpg",
      "fotos/gol-2019/2.jpg"
    ]
  },

  {
    marca: "Audi",
    modelo: "A5 V6 3.2 Quattro",
    anio: "2011",
    tipo: "Sedan",
    km: "180.000",
    combustible: "Nafta",
    trans: "Automatico",
    precio: 24000,
    color: "Negro",
    badge: "En Stock",
    sede: "srm",
    desc:        "Motor 1.6. Economico, ideal para ciudad. Documentacion completa. Permuta posible.",
    fotos: [
      "fotos/gol-2019/1.jpg",
      "fotos/gol-2019/2.jpg"
    ]
  },


  {
    marca: "Volkswagen",
    modelo: "Amarok",
    anio: "2011",
    tipo: "Pickup",
    km: "180.000",
    combustible: "Diesel",
    trans: "Automatico",
    precio: 17000,
    color: "blanco",
    badge: "En Stock",
    sede: "srm",
    desc:        "Motor 1.6. Economico, ideal para ciudad. Documentacion completa. Permuta posible.",
    fotos: [
      "fotos/gol-2019/1.jpg",
      "fotos/gol-2019/2.jpg"
    ]
  },

    {
    marca: "Toyota",
    modelo: "Land Cruiser Prado",
    anio: "2012",
    tipo: "Pickup",
    km: "280.000",
    combustible: "Nafta",
    trans: "Automatico",
    precio: 33000,
    color: "gris",
    badge: "En Stock",
    sede: "srm",
    desc:        "Motor 1.6. Economico, ideal para ciudad. Documentacion completa. Permuta posible.",
    fotos: [
      "fotos/gol-2019/1.jpg",
      "fotos/gol-2019/2.jpg"
    ]
  }

  // ── PLANTILLA PARA AUTO NUEVO ────────────────────────────────────
  // Copia este bloque y pegalo antes del ]; de arriba
  // ,{
  //   marca:       "",
  //   modelo:      "",
  //   anio:        "",
  //   tipo:        "",
  //   km:          "",
  //   combustible: "",
  //   trans:       "",
  //   precio:      0,
  //   color:       "",
  //   badge:       "",
  //   desc:        "",
  //   fotos: [
  //     "fotos/nombre-carpeta/1.jpg",
  //     "fotos/nombre-carpeta/2.jpg"
  //   ]
  // }

];
