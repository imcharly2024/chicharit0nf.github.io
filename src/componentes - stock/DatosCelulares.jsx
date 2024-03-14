
const celulares =[
    {
        id: '0001',
        nombre: 'IPhone 15 PRO MAX',
        descripcion: 'El iPhone 15 Pro Max es la última joya tecnológica de Apple, diseñado para ofrecer una experiencia incomparable. Con una pantalla Super Retina XDR de 6.9 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el potente chip A17 Bionic, este dispositivo ofrece un rendimiento excepcional y una eficiencia energética impresionante. Su sistema de cámaras revolucionario te permite capturar fotos y videos de calidad profesional, incluso en condiciones de poca luz. Con una batería de larga duración y una carga ultrarrápida, el iPhone 15 Pro Max está diseñado para acompañarte durante todo el día.',
        precio: '$1300 USD',
        stock: '17 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone15pm',
    },
    {
        id: '0002',
        nombre: 'IPhone 15',
        descripcion: 'El iPhone 15 es la elección perfecta para aquellos que buscan un equilibrio entre rendimiento y tamaño. Con una pantalla Super Retina XDR de 6.1 pulgadas, este dispositivo ofrece una experiencia visual envolvente. Equipado con el chip A17 Bionic, el iPhone 15 ofrece un rendimiento increíblemente rápido y una eficiencia energética excepcional. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes con facilidad. Con una batería de larga duración y una carga rápida, el iPhone 15 es el compañero ideal para tu día a día.',
        precio: '$1200 USD',
        stock: '41 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone15',
    },
    {
        id: '0003',
        nombre: 'IPhone 15 PRO',
        descripcion: 'El iPhone 15 Pro es la última joya tecnológica de Apple, diseñado para ofrecer un rendimiento excepcional y una experiencia de usuario incomparable. Con una pantalla Super Retina XDR de 6.1 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el potente chip A18 Bionic, este dispositivo ofrece un rendimiento increíblemente rápido y una eficiencia energética impresionante. Su sistema de cámaras revolucionario te permite capturar fotos y videos de calidad profesional en cualquier situación. Con una batería de larga duración y una carga ultrarrápida, el iPhone 15 Pro está diseñado para superar todas tus expectativas.',
        precio: '$1250 USD',
        stock: '41 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone15p',
    },
    {
        id: '0004',
        nombre: 'IPhone 14 PRO MAX',
        descripcion: 'El iPhone 14 Pro Max es la próxima generación de dispositivos móviles de Apple, diseñado para superar todas tus expectativas. Con una pantalla Super Retina XDR de 6.7 pulgadas, disfrutarás de colores vivos y detalles nítidos en cada imagen. Equipado con el chip A16 Bionic, este dispositivo ofrece un rendimiento excepcional y una eficiencia energética impresionante. Su sistema de cámaras avanzado te permite capturar fotos y videos de calidad profesional con facilidad. Con una batería de larga duración y una carga ultrarrápida, el iPhone 14 Pro Max está diseñado para ser tu compañero ideal en cualquier situación.',
        stock: '20 Celulares Disponibles',
        precio: '$1000 USD',
        colores: 'Negro, Rojo, Gris, Amarillo, Azul',
        imagen: 'iphone14pm',
    },
    {
        id: '0005',
        nombre: 'IPhone 14',
        descripcion: 'El iPhone 14 es la opción perfecta para aquellos que buscan un dispositivo potente y compacto. Con una pantalla Super Retina XDR de 6.1 pulgadas, este dispositivo ofrece una experiencia visual increíble. Equipado con el chip A16 Bionic, el iPhone 14 ofrece un rendimiento excepcional y una eficiencia energética impresionante. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes con facilidad. Con una batería de larga duración y una carga rápida, el iPhone 14 es el compañero perfecto para tu día a día.',
        precio: '$900 USD',
        stock: '47 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone14',
    },
    {
        id: '0006',
        nombre: 'IPhone 14 PRO',
        descripcion: 'El iPhone 14 Pro es la próxima generación de dispositivos móviles de Apple, diseñado para ofrecer un rendimiento excepcional y una experiencia de usuario incomparable. Con una pantalla Super Retina XDR de 6.1 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el potente chip A17 Bionic, este dispositivo ofrece un rendimiento increíblemente rápido y una eficiencia energética impresionante. Su sistema de cámaras avanzado te permite capturar fotos y videos de calidad profesional con facilidad. Con una batería de larga duración y una carga ultrarrápida, el iPhone 14 Pro está diseñado para ser tu compañero ideal en cualquier situación.',
        precio: '$950 USD',
        stock: '47 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone14p',
    },
    {
        id: '0007',
        nombre: 'IPhone 13 PRO MAX',
        descripcion: 'El iPhone 13 Pro Max es el buque insignia de la línea iPhone 13, diseñado para ofrecer el máximo rendimiento y una experiencia de usuario excepcional. Con una pantalla Super Retina XDR de 6.7 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el chip A15 Bionic, este dispositivo ofrece un rendimiento increíblemente rápido y una eficiencia energética impresionante. Su sistema de cámaras profesionales te permite capturar fotos y videos de calidad cinematográfica con facilidad. Con una batería de larga duración y una carga ultrarrápida, el iPhone 13 Pro Max es el compañero perfecto para los usuarios más exigentes.',
        precio: '$800 USD',
        stock: '14 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone13pm',
    },
    {
        id: '0008',
        nombre: 'IPhone 13',
        descripcion: 'El iPhone 13 es la última incorporación a la familia de smartphones de Apple, diseñado para ofrecer un rendimiento excepcional y una experiencia de usuario incomparable. Con una pantalla Super Retina XDR de 6.1 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el chip A15 Bionic, este dispositivo ofrece un rendimiento rápido y eficiente, perfecto para todas tus necesidades diarias. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes con facilidad. Con una batería de larga duración y una carga rápida, el iPhone 13 está diseñado para mantenerte conectado durante todo el día.',
        precio: '700 USD',
        stock: '14 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone13',
    },
    {
        id: '0009',
        nombre: 'IPhone 13 Mini',
        descripcion: 'El iPhone 13 Mini es un smartphone compacto y potente, diseñado para ofrecer un rendimiento excepcional en un tamaño reducido. Con una pantalla Super Retina XDR de 5.4 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el chip A15 Bionic, el iPhone 13 Mini ofrece un rendimiento increíblemente rápido y una eficiencia energética impresionante. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes con facilidad. Con una batería de larga duración y carga rápida, el iPhone 13 Mini es el compañero perfecto para quienes buscan un dispositivo potente en un formato más pequeño.',
        precio: '680 USD',
        stock: '14 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone13mini',
    },
    {
        id: '0010',
        nombre: 'IPhone SE',
        descripcion: 'El iPhone SE es el smartphone compacto de Apple, diseñado para aquellos que buscan un dispositivo potente en un formato más pequeño. Con una pantalla Retina HD de 4.7 pulgadas, disfrutarás de una experiencia visual nítida y brillante. Equipado con el chip A15 Bionic, el iPhone SE ofrece un rendimiento rápido y eficiente, perfecto para todas tus necesidades diarias. Su cámara avanzada te permite capturar fotos y videos de alta calidad con facilidad. Con una batería de larga duración y una carga rápida, el iPhone SE es el compañero perfecto para mantenerte conectado en movimiento.',
        precio: '700 USD',
        stock: '16 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphonese',
    },
    {
        id: '0011',
        nombre: 'IPhone SE 2',
        descripcion: 'El iPhone SE 2da Generación combina el diseño clásico del iPhone con un rendimiento potente y características modernas. Con una pantalla Retina HD de 4.7 pulgadas, disfrutarás de una experiencia visual nítida y brillante. Equipado con el chip A13 Bionic, el iPhone SE ofrece un rendimiento rápido y eficiente, perfecto para todas tus necesidades diarias. Su cámara avanzada te permite capturar fotos de alta calidad y videos en 4K. Con Touch ID integrado en el botón de inicio, el iPhone SE ofrece seguridad y conveniencia. Con una batería de larga duración y carga rápida, el iPhone SE es el compañero perfecto para mantenerte conectado en movimiento.',
        precio: '750 USD',
        stock: '16 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphonese2',
    },
    {
        id: '0012',
        nombre: 'IPhone 12 PRO MAX',
        descripcion: 'El iPhone 12 Pro Max es el buque insignia de la línea iPhone 12, diseñado para ofrecer el máximo rendimiento y una experiencia de usuario excepcional. Con una pantalla Super Retina XDR de 6.7 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el chip A14 Bionic, este dispositivo ofrece un rendimiento increíblemente rápido y una eficiencia energética impresionante. Su sistema de cámaras profesionales te permite capturar fotos y videos de calidad cinematográfica con facilidad. Con una batería de larga duración y una carga ultrarrápida, el iPhone 12 Pro Max es el compañero perfecto para los usuarios más exigentes.',
        precio: '650 USD',
        stock: '16 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone12pm',
    },
    {
        id: '0013',
        nombre: 'IPhone 12',
        descripcion: 'El iPhone 12 es un smartphone versátil y potente, diseñado para ofrecer un rendimiento excepcional en un diseño elegante y compacto. Con una pantalla Super Retina XDR de 6.1 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el chip A14 Bionic, el iPhone 12 ofrece un rendimiento increíblemente rápido y una eficiencia energética impresionante. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes con facilidad. Con una batería de larga duración y una carga rápida, el iPhone 12 es el compañero ideal para tu día a día.',
        precio: '600 USD',
        stock: '11 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone12',
    },
    {
        id: '0014',
        nombre: 'IPhone 11 PRO MAX',
        descripcion: 'El iPhone 11 Pro Max es un smartphone premium diseñado para ofrecer un rendimiento excepcional y una experiencia de usuario incomparable. Con una pantalla Super Retina XDR de 6.5 pulgadas, disfrutarás de colores vibrantes y detalles nítidos en cada imagen. Equipado con el chip A13 Bionic, este dispositivo ofrece un rendimiento rápido y eficiente, perfecto para todas tus necesidades diarias. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes con facilidad. Con una batería de larga duración y una carga rápida, el iPhone 11 Pro Max está diseñado para mantenerte conectado durante todo el día.',
        precio: '550 USD',
        stock: '13 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone11pm',
    },
    {
        id: '0015',
        nombre: 'IPhone 11',
        descripcion: 'El iPhone 11 es un smartphone versátil y potente diseñado para ofrecer un rendimiento excepcional en un diseño elegante y compacto. Con una pantalla Liquid Retina HD de 6.1 pulgadas, disfrutarás de una experiencia visual envolvente. Equipado con el chip A13 Bionic, el iPhone 11 ofrece un rendimiento rápido y eficiente, perfecto para todas tus necesidades diarias. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes con facilidad. Con una batería de larga duración y una carga rápida, el iPhone 11 es el compañero ideal para tu día a día.',
        precio: '500 USD',
        stock: '13 Celulares Disponibles',
        colores: 'Negro, Rojo, Amarillo, Azul',
        imagen: 'iphone11',
    },
    
];


export default celulares;
