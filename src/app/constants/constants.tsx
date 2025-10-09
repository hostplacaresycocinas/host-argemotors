export const company = {
  dark: true,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  secondaryColor: false,
  objectCover: '50%',
  id: 'franchecars',
  name: 'Franche Cars',
  adress: 'Av. Gaona 1745',
  city: 'Moreno',
  email: null,
  instagram: 'franchecars',
  facebook: 'https://www.facebook.com/p/Franche-Cars-61572978636399/',
  whatsapp: ['1181076187'],
  googlemapsLink: 'https://maps.app.goo.gl/L4R1t4z69jhAqQX77',
  googlemaps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31230.796310778325!2d-58.827708974462205!3d-34.63618489833592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc91451707ed2f%3A0xf92cdf0b5f538435!2sAv.%20Gaona%201745%2C%20C1744%20La%20Reja%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1759971148735!5m2!1ses!2sar',
  openDays: ['Lunes a Sábado', 'Con cita Previa'],
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://dealership.agenciagrvity.com';
export const TENANT = 'accotto-automotores';

export const metadataCompany = {
  metadataBase: 'https://franchecars.vercel.app/',
  title: 'Franche Cars - Compra y Venta de Autos',
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
