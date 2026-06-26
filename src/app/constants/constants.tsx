export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  secondaryColor: false,
  objectCover: '50%',
  id: 'argemotors',
  name: 'ArgeMotors',
  adress: 'Av. Nazca 1487',
  city: 'Villa Del Parque',
  email: 'argemotors@gmail.com',
  instagram: 'argemotors',
  facebook: 'https://www.facebook.com/p/argemotors-100064369890273/',
  whatsapp: ['1139006610', '1168509992'],
  googlemapsLink: 'https://maps.app.goo.gl/AiMtsEh1rLktqdCaA',
  googlemaps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5133607997764!2d-58.47951372307988!3d-34.616465172949674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc90047a10277%3A0xb13be49a62813dc0!2sArgemotors!5e0!3m2!1ses-419!2sar!4v1763065454996!5m2!1ses-419!2sar',
  openDays: ['Lunes a Viernes 09:30 a 19:00hs', 'Sábado 10:00 a 17:00hs'],
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const sedes = [
  {
    id: 1,
    name: 'ArgeMotors Villa Del Parque',
    adress: 'Av. Nazca 1487',
    city: 'Villa Del Parque',
    image: '/assets/sedes/sede-1.webp',
    schedule: ['Lunes a Viernes 09:30 a 19:00hs', 'Sábado 10:00 a 17:00hs'],
    googlemapsLink: 'https://maps.app.goo.gl/AiMtsEh1rLktqdCaA',
  },
  {
    id: 2,
    name: 'ArgeMotors San Fernando',
    adress: 'Av. Hipólito Yrigoyen (Ruta 202) N° 2135',
    city: 'San Fernando',
    image: '/assets/sedes/sede-2.webp',
    schedule: ['Lunes a Viernes 09:30 a 19:00hs', 'Sábado 10:00 a 17:00hs'],
    googlemapsLink:
      'https://www.google.com/maps/search/?api=1&query=Av.+Hip%C3%B3lito+Yrigoyen+2135+San+Fernando',
  },
];

export const API_BASE_URL = 'https://dealership.agenciagrvity.com';
export const TENANT = 'null';
export const TENANT_PUBLIC = 'null';

export const BASE_URL_MELI = 'https://onlymotors-ml.agenciagrvity.com';
export const TENANT_MELI = '65a61dbd-8fa1-4b2b-acad-946c07a2fae1';

export const metadataCompany = {
  metadataBase: 'https://argemotors.com.ar/',
  title: 'ArgeMotors - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Los vehículos están en condiciones de circular?',
    answer:
      'Todos nuestros vehículos son revisados antes de la venta. Consultanos sobre el estado específico del vehículo de tu interés para brindarte información detallada.',
  },
  {
    id: 'preg-2',
    question: '¿Puedo ver el vehículo antes de comprarlo?',
    answer:
      'Por supuesto, podés coordinar una visita para ver el vehículo personalmente, realizar pruebas de manejo y verificar todos los detalles que necesites.',
  },
  {
    id: 'preg-3',
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Consultanos por los métodos de pago disponibles. Nos adaptamos a diferentes modalidades según cada operación para facilitar tu compra.',
  },
  {
    id: 'preg-4',
    question: '¿Los precios publicados son finales?',
    answer:
      'Los precios pueden variar según la forma de pago y condiciones de la operación. Te recomendamos contactarnos directamente para confirmar el valor actualizado.',
  },
  {
    id: 'preg-5',
    question: '¿Cómo puedo obtener más información sobre un vehículo?',
    answer:
      'Podés comunicarte con nosotros por WhatsApp, visitarnos en nuestro local o consultarnos a través de nuestras redes sociales. Estamos para ayudarte.',
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
