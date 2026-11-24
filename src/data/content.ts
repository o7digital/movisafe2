export type Lang = 'es' | 'en' | 'fr';
export const languages: Lang[] = ['es', 'en', 'fr'];
export const home = (lang: Lang) => lang === 'es' ? '/' : `/${lang}/`;
export const serviceIds = ['prevencion', 'proteccion', 'capacitacion'] as const;
export const serviceImages = ['prevencion', 'proteccion', 'capacitacion'];
export const serviceIcons = ['radar', 'shield', 'people'];
export const servicePath = (lang: Lang, i: number) => `${home(lang)}${({es:'soluciones', en:'services', fr:'services'})[lang]}/${slugs[lang][i]}/`;
const slugs = {
  es: ['prevencion', 'proteccion', 'asesoria-y-capacitacion'],
  en: ['prevention', 'protection', 'consulting-and-training'],
  fr: ['prevention', 'protection', 'conseil-et-formation']
};

export const copy = {
  es: {
    meta: 'Prevención de riesgos, protección ejecutiva y capacitación para empresas y familias en México.',
    nav: ['Soluciones', 'Quiénes somos', 'Clientes'], contact: 'Contactar', menu: 'Menú', language: 'Idioma', skip: 'Ir al contenido', start: 'Inicio',
    kicker: 'Seguridad integral · Desde 2002', hero: ['Protegemos lo', 'que importa.'],
    lead: 'Seguridad a la medida para las personas, los activos y las operaciones de su empresa en México.',
    consult: 'Hablar con un asesor', discover: 'Conocer soluciones', habitat: 'Ciudad de México', place: 'Paseo de la Reforma',
    stats: ['Clientes atendidos', 'Misiones realizadas', 'Oficinas en el mundo', 'Centro de reacción'],
    section: 'Nuestras soluciones', servicesTitle: ['Tres formas de', 'protegerle.'],
    servicesIntro: 'Desde el análisis de un riesgo hasta el acompañamiento en campo, elija el apoyo que necesita.',
    read: 'Explorar servicio', scope: 'Cómo podemos apoyarle', back: 'Todas las soluciones',
    services: [
      {name:'Prevención', short:'Información y análisis para tomar decisiones antes de que un riesgo afecte su operación.', intro:'Conozca el entorno en el que trabaja su equipo y prepare cada decisión con información local.', items:[['Inteligencia de riesgos','Reportes sobre las condiciones de seguridad por país, estado o ciudad para quienes evalúan una inversión o un proyecto.'],['Acompañamiento a expatriados','Orientación a la llegada, apoyo en la elección de vivienda y asistencia para colaboradores que se instalan en México.'],['Evaluación de personal','Verificación de referencias laborales y estudios socioeconómicos para apoyar los procesos de selección.']]},
      {name:'Protección',short:'Acompañamiento ejecutivo y seguimiento de personas, traslados y mercancías.',intro:'Coordine sus desplazamientos y su cadena logística con un equipo que conoce el terreno.',items:[['Transporte ejecutivo','Traslados privados organizados según el itinerario, los acompañantes y las necesidades de cada visita.'],['Seguridad logística','Evaluación de rutas y acompañamiento de mercancías entre centros de distribución, puertos y destinos finales.'],['Centro de reacción 24/7','Seguimiento de operaciones y dispositivos GPS, atención de solicitudes de asistencia y coordinación ante incidentes.']]},
      {name:'Asesoría y capacitación',short:'Preparación práctica para que sus equipos sepan cómo responder ante un incidente.',intro:'Ayude a sus colaboradores a reconocer riesgos y a coordinarse cuando una situación exige actuar.',items:[['Sensibilización al riesgo','Sesiones para responsables de sitio, recursos humanos y seguridad, adaptadas al contexto mexicano.'],['Gestión de crisis','Preparación de los equipos encargados de tomar decisiones y coordinar la respuesta durante un incidente.'],['Formación especializada','Programas de protección civil, conducción defensiva y protección ejecutiva mediante alianzas con capacitadores.']]}
    ],
    firm:'Quiénes somos', firmTitle:['Criterio local.', 'Alcance internacional.'], firmBody:'Movisafe nació en la Ciudad de México en 2002. Acompañamos a empresas y familias que necesitan trasladarse, instalarse u operar en el país con seguridad y discreción.', firmSecond:'Nuestros equipos atienden en español, francés, inglés y portugués.', firmImage:'Equipo de protección ejecutiva', trust:'Nuestros clientes', trustTitle:'Empresas que han confiado en Movisafe',
    contactLabel:'Contacto', contactTitle:['Hablemos de', 'su seguridad.'], contactText:'Cuéntenos a quién necesita proteger, dónde y en qué momento. Un asesor podrá orientarle sobre el servicio adecuado.', write:'Escribir a Movisafe', call:'Llamar', hours:'Oficina comercial · Lun–vie, 9:00–18:00', location:'Oficina en México', privacy:'Aviso de privacidad', news:'Noticias', careers:'Únase al equipo', emailSubject:'Consulta de seguridad', related:'Explorar también', from:'Desde', clientAlt:'Clientes de Movisafe'
  },
  en: {
    meta:'Risk prevention, executive protection and training for businesses and families in Mexico.',
    nav:['Services','About us','Clients'], contact:'Contact us', menu:'Menu', language:'Language', skip:'Skip to content', start:'Home',
    kicker:'Integrated security · Since 2002', hero:['Protecting what','matters.'],
    lead:'Tailored security for your people, assets and business operations in Mexico.',
    consult:'Speak with an advisor',discover:'Explore our services',habitat:'Mexico City',place:'Paseo de la Reforma',stats:['Clients served','Missions completed','Offices worldwide','Response centre'],
    section:'Our services',servicesTitle:['Three ways to','protect you.'],servicesIntro:'From assessing a risk to providing support on the ground, find the right service for your needs.',read:'Explore service',scope:'How we can help',back:'All services',
    services:[
      {name:'Prevention',short:'Local intelligence and analysis to inform decisions before a risk affects your operations.',intro:'Understand the environment your team works in and plan each decision with local intelligence.',items:[['Risk intelligence','Security reports by country, state or city for teams assessing an investment or project.'],['Expatriate support','Arrival briefings, housing guidance and assistance for employees settling in Mexico.'],['Personnel screening','Employment reference checks and socioeconomic studies to support recruitment.']]},
      {name:'Protection',short:'Executive support and monitoring for people, transport and goods in transit.',intro:'Coordinate travel and logistics with a team that knows the local environment.',items:[['Executive transport','Private transfers planned around the itinerary, passengers and requirements of each visit.'],['Supply chain security','Route assessments and support for goods moving between distribution centres, ports and their destination.'],['24/7 response centre','Operations and GPS monitoring, assistance calls and incident coordination.']]},
      {name:'Consulting and training',short:'Practical preparation so your teams know how to respond to an incident.',intro:'Help your staff recognise risks and coordinate a response when a situation demands action.',items:[['Risk awareness','Briefings for site, HR and security managers, tailored to the Mexican context.'],['Crisis management','Preparation for teams responsible for decisions and coordination during an incident.'],['Specialist training','Civil protection, defensive driving and executive protection programmes through training partners.']]}
    ],
    firm:'About us',firmTitle:['Local knowledge.','International reach.'],firmBody:'Founded in Mexico City in 2002, Movisafe supports businesses and families who need to travel, settle or operate in Mexico with security and discretion.',firmSecond:'Our teams work in Spanish, French, English and Portuguese.',firmImage:'Executive protection team',trust:'Our clients',trustTitle:'Companies that have placed their trust in Movisafe',
    contactLabel:'Contact',contactTitle:['Let’s talk about','your security.'],contactText:'Tell us who needs protection, where and when. An advisor can help you choose the right service.',write:'Email Movisafe',call:'Call',hours:'Business office · Mon–Fri, 9 am–6 pm',location:'Mexico office',privacy:'Privacy notice',news:'News',careers:'Join our team',emailSubject:'Security enquiry',related:'Also explore',from:'Since',clientAlt:'Movisafe clients'
  },
  fr:{
    meta:'Prévention des risques, protection des dirigeants et formation pour les entreprises et les familles au Mexique.',
    nav:['Solutions','Qui sommes-nous','Clients'],contact:'Contact',menu:'Menu',language:'Langue',skip:'Accéder au contenu',start:'Accueil',
    kicker:'Sécurité globale · Depuis 2002',hero:['Protéger ce','qui compte.'],
    lead:'Une sécurité sur mesure pour vos collaborateurs, vos biens et vos activités au Mexique.',
    consult:'Parler à un conseiller',discover:'Découvrir nos solutions',habitat:'Mexico',place:'Paseo de la Reforma',stats:['Clients accompagnés','Missions réalisées','Bureaux dans le monde','Centre de réponse'],
    section:'Nos solutions',servicesTitle:['Trois façons de','vous protéger.'],servicesIntro:'De l’analyse des risques à l’accompagnement sur le terrain, choisissez le soutien adapté à votre situation.',read:'Découvrir le service',scope:'Notre accompagnement',back:'Toutes les solutions',
    services:[
      {name:'Prévention',short:'Des informations de terrain pour décider avant qu’un risque ne perturbe vos activités.',intro:'Comprenez l’environnement dans lequel évoluent vos équipes et préparez vos décisions grâce à des informations locales.',items:[['Veille sur les risques','Rapports de sécurité par pays, État ou ville pour les équipes qui évaluent un investissement ou un projet.'],['Accompagnement des expatriés','Accueil, aide au choix du logement et assistance aux collaborateurs qui s’installent au Mexique.'],['Évaluation du personnel','Vérification des références professionnelles et études socio-économiques pour éclairer les recrutements.']]},
      {name:'Protection',short:'Protection des dirigeants et suivi des personnes, des déplacements et des marchandises.',intro:'Organisez vos déplacements et votre logistique avec une équipe qui connaît le terrain.',items:[['Transport de dirigeants','Transferts privés organisés selon l’itinéraire, les passagers et les besoins de chaque visite.'],['Sécurité logistique','Évaluation des itinéraires et accompagnement des marchandises entre ports, centres de distribution et destinataires.'],['Centre de réponse 24 h/24','Suivi des opérations et des dispositifs GPS, réception des appels d’assistance et coordination en cas d’incident.']]},
      {name:'Conseil et formation',short:'Une préparation concrète pour que vos équipes sachent réagir en cas d’incident.',intro:'Aidez vos collaborateurs à reconnaître les risques et à coordonner leurs actions lorsqu’un incident survient.',items:[['Sensibilisation aux risques','Sessions adaptées au contexte mexicain pour les responsables de site, des ressources humaines et de la sécurité.'],['Gestion de crise','Préparation des équipes qui prennent les décisions et coordonnent la réponse en cas d’incident.'],['Formations spécialisées','Modules de protection civile, de conduite défensive et de protection rapprochée avec des organismes partenaires.']]}
    ],
    firm:'Qui sommes-nous',firmTitle:['Une expertise locale.','Une portée internationale.'],firmBody:'Fondée à Mexico en 2002, Movisafe accompagne les entreprises et les familles qui souhaitent se déplacer, s’installer ou exercer leurs activités au Mexique en toute discrétion.',firmSecond:'Nos équipes travaillent en espagnol, en français, en anglais et en portugais.',firmImage:'Équipe de protection rapprochée',trust:'Nos clients',trustTitle:'Des entreprises qui ont fait confiance à Movisafe',
    contactLabel:'Contact',contactTitle:['Parlons de','votre sécurité.'],contactText:'Dites-nous qui vous souhaitez protéger, où et quand. Un conseiller vous orientera vers le service adapté.',write:'Écrire à Movisafe',call:'Appeler',hours:'Bureau commercial · Lun–ven, 9 h–18 h',location:'Bureau au Mexique',privacy:'Politique de confidentialité',news:'Actualités',careers:'Rejoindre l’équipe',emailSubject:'Demande de conseil en sécurité',related:'À découvrir également',from:'Depuis',clientAlt:'Clients de Movisafe'
  }
};
