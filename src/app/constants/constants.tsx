export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  secondaryColor: false,
  objectCover: '50%',
  id: 'pescemotors',
  name: 'Pesce Motors',
  adress: 'Tres Arroyos 387',
  city: 'Cipolletti',
  email: 'pescemotors@gmail.com',
  instagram: 'pescemotors',
  facebook: 'https://www.facebook.com/pescemotors',
  whatsapp: ['2996375406'],
  googlemapsLink: 'https://maps.app.goo.gl/q1LcEnWXhakaw2B76',
  googlemaps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.170298736416!2d-67.99988412321908!3d-38.942937699414315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a314553f039bb%3A0xc8f5533bef6710e6!2sPesce%20Motors!5e0!3m2!1sen!2sar!4v1758385013443!5m2!1sen!2sar',
  openDays: [
    { title: 'Lunes a Viernes', time: '8:30 a 13 y 16 a 19:30hs' },
    { title: 'Sábados', time: '9:30 a 13hs' },
  ],
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://dealership.agenciagrvity.com';
export const TENANT = 'accotto-automotores';

export const metadataCompany = {
  metadataBase: 'https://pescemotors.vercel.app/',
  title: 'Pesce Motors - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Qué documentación necesito para comprar un vehículo?',
    answer:
      'Para la compra de un vehículo necesitás DNI, comprobante de ingresos y domicilio. Te asesoramos sobre todos los requisitos específicos según tu situación particular.',
  },
  {
    id: 'preg-2',
    question: '¿Hacen transferencias de dominio?',
    answer:
      'Sí, nos encargamos de todos los trámites de transferencia de dominio. Te acompañamos en el proceso para que sea lo más simple posible.',
  },
  {
    id: 'preg-3',
    question: '¿Qué servicios adicionales ofrecen?',
    answer:
      'Además de la venta de vehículos, brindamos asesoramiento personalizado, financiación y acompañamiento en todos los trámites necesarios para tu compra.',
  },
  {
    id: 'preg-4',
    question: '¿Aceptan vehículos como parte de pago?',
    answer:
      'Sí, evaluamos tu vehículo actual como parte de pago. Contactanos para coordinar una tasación y conocer las condiciones.',
  },
  {
    id: 'preg-5',
    question: '¿Cómo puedo contactarlos?',
    answer:
      'Podés contactarnos por WhatsApp, visitarnos en nuestro local o a través de nuestras redes sociales. Estamos disponibles para resolver todas tus consultas.',
  },
];

export const navigation = [
  {
    id: '0',
    title: 'Inicio',
    url: '/',
  },
  {
    id: '1',
    title: 'Catálogo',
    url: '/catalogo',
  },
  {
    id: '2',
    title: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: '3',
    title: 'Contacto',
    url: '/contacto',
    button: true,
  },
];
