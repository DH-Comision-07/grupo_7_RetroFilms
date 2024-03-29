let nextProductId = 1;
const producto = {   
    products: [
        {
            id: nextProductId++,
            name: 'El Padrino',
            image: 'img/Home/movieGrid/elPadrino.jpg',
            price: 4.99,
            description: 'Un clásico del cine criminal dirigido por Francis Ford Coppola.',
          },
          {
            id: nextProductId++,
            name: 'Breakfast at Tiffany\'s',
            image: 'IMAGENES/carpetadeimgenes/breakFast_at_Tiffanys.jpg',
            price: 3.49,
            description: 'Una comedia romántica basada en la novela de Truman Capote.',
          },
          {
            id: nextProductId++,
            name: 'Amores Perros',
            image: 'IMAGENES/carpetadeimgenes/amores_perros.jpg',
            price: 2.99,
            description: 'Un thriller dramático mexicano dirigido por Alejandro González Iñárritu.',
          },
          {
            id: nextProductId++,
            name: 'Ben-Hur',
            image: 'IMAGENES/carpetadeimgenes/Ben-hurd.webp',
            price: 5.49,
            description: 'Una épica película histórica dirigida por William Wyler.',
          },
          {
            id: nextProductId++,
            name: 'Gone with the Wind',
            image: 'IMAGENES/carpetadeimgenes/gone_with_the_wind.jpg',
            price: 4.79,
            description: 'Una clásica película romántica ambientada durante la Guerra Civil Americana.',
          },
          {
            id: nextProductId++,
            name: 'La Dolce Vita',
            image: 'IMAGENES/carpetadeimgenes/La_dolce_vita.jpg',
            price: 3.99,
            description: 'Una película italiana dirigida por Federico Fellini.',
          },
          {
            id: nextProductId++,
            name: 'Metropolis',
            image: 'IMAGENES/carpetadeimgenes/metropolis.jpg',
            price: 5.29,
            description: 'Una película alemana expressionista de ciencia ficción dirigida por Fritz Lang.',
          },
          {
            id: nextProductId++,
            name: 'Seven Samurai',
            image: 'IMAGENES/carpetadeimgenes/Seven_Samurai_poster.jpg',
            price: 6.49,
            description: 'Una épica película samurái japonesa dirigida por Akira Kurosawa.',
          },
          {
            id: nextProductId++,
            name: 'Tiempos Modernos',
            image: 'IMAGENES/carpetadeimgenes/tiempos_modernos.jpg',
            price: 3.89,
            description: 'Una película cómica dirigida e interpretada por Charlie Chaplin.',
          },
          {
            id: nextProductId++,
            name: 'Fitzcarraldo',
            image: 'IMAGENES/carpetadeimgenes/Fitzcarraldo_Web.jpg',
            price: 4.69,
            description: 'Una película de aventuras y drama dirigida por Werner Herzog.',
          },
          {
            id: nextProductId++,
            name: 'La tumba de las luciérnagas',
            image: 'IMAGENES/carpetadeimgenes/La tumba_de_las_liciernagas..webp',
            price: 3.59,
            description: 'Una película japonesa de animación sobre la guerra dirigida por Isao Takahata.',
          },
          {
            id: nextProductId++,
            name: 'Mi Vecino Totoro',
            image: 'IMAGENES/carpetadeimgenes/MiVecino_TOTORO.webp',
            price: 4.29,
            description: 'Una película japonesa de fantasía animada dirigida por Hayao Miyazaki.',
          },
          {
            id: nextProductId++,
            name: 'Robocop',
            image: 'IMAGENES/carpetadeimgenes/Robocop.jpg',
            price: 5.09,
            description: 'Una película de acción cyberpunk dirigida por Paul Verhoeven.',
          },
          {
            id: nextProductId++,
            name: 'Ciudadano Kane',
            image: 'IMAGENES/carpetadeimgenes/Ciudano_KANE.jpg',
            price: 4.49,
            description: 'Una película de misterio y drama dirigida, producida y coescrita por Orson Welles.',
          },
          {
            id: nextProductId++,
            name: 'El Gran Dictador',
            image: 'IMAGENES/carpetadeimgenes/El_gran_dictador-348479670-large.jpg',
            price: 4.39,
            description: 'Una comedia satírica política dirigida, escrita y protagonizada por Charlie Chaplin.',
          },
          {
            id: nextProductId++,
            name: '2001: A Space Odyssey',
            image: 'IMAGENES/carpetadeimgenes/61dOQvYDC5L.AC_UF894,1000_QL80.jpg',
            price: 5.79,
            description: 'Una película de ciencia ficción dirigida por Stanley Kubrick.',
          },
          {
            id: nextProductId++,
            name: 'Top Gun',
            image: 'IMAGENES/carpetadeimgenes/Top_gun.webp',
            price: 5.99,
            description: 'Una clásica película de acción protagonizada por Tom Cruise como piloto de combate.',
          },
        ],

        getAll: function () {
          return this.products;
        },

        getOneBy: function (id) {
          return this.products.find(product => product.id == id);
        }
}

module.exports = producto;