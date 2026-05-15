// ============================================================
//  ARCHIVO PRINCIPAL DE DATOS — js/datos.js
//  Aquí editas TODO el contenido de la página:
//  - Información de la oficina
//  - Los 35 proyectos
//  - El organigrama
// ============================================================

// ------------------------------------------------------------
//  SECCIÓN 1 — INFORMACIÓN GENERAL DE LA OFICINA
//  Edita el texto que aparece en la página de Inicio (Home)
// ------------------------------------------------------------
const OFICINA_INFO = {
  titulo: "Oficina de Tecnología",
  subtitulo: "Corte Suprema de Justicia — República de Colombia",
  mision: "Liderar la innovación tecnológica de la Corte Suprema de Justicia mediante el diseño, desarrollo e implementación de soluciones tecnológicas innovadoras que optimicen los procesos judiciales, garanticen la seguridad de la información y mejoren el acceso a la justicia para todos los colombianos.",
  vision: "Consolidarse como la Oficina de Tecnología de referencia para las altas cortes, reconocida por liderar la innovación y la transformación tecnológica y digital continua, orientada a la optimización de procesos y al fortalecimiento de una justicia democratizada y abierta, mediante la excelencia técnica y la gestión estratégica de proyectos de Tecnologías de la Información.",
  valores: [
    { icono: "⚖️", nombre: "Transparencia", descripcion: "Gestión abierta y trazable de todos los proyectos tecnológicos." },
    { icono: "🔒", nombre: "Seguridad", descripcion: "Protección de la información judicial como prioridad absoluta." },
    { icono: "🚀", nombre: "Innovación", descripcion: "Adopción continua de tecnologías que mejoren la justicia." },
    { icono: "🤝", nombre: "Servicio", descripcion: "Compromiso con las necesidades de magistrados, jueces y ciudadanos." }
  ],
  stats:    [
    { numero: "43", label: "Proyectos" },
    { numero: "14", label: "Profesionales TI" },
    { numero: "2026", label: "Año en curso" }
  ]
  };

// ------------------------------------------------------------
//  SECCIÓN 2 — EQUIPO (14 personas)
//  Campos: nombre, grado, cargo, funcion (tooltip al pasar el cursor), foto
//  Para agregar foto: foto: "assets/imagenes/nombre.jpg"
// ------------------------------------------------------------
const EQUIPO = [
  // ── Columna 1 (personas 1–7) ────────────────────────────
  {
    nombre: "Aseneth Quintero Bernate",
    grado: "Profesional Especializado",
    cargo: "Coordinadora Oficina de Tecnología",
    funcion: "Dirección y coordinación estratégica de la Oficina de Tecnología de la Corte Suprema de Justicia.",
    foto: ""
  },
  {
    nombre: "Emirt Lorenzo Adams Saenz",
    grado: "Profesional grado 20",
    cargo: "Líder tecnologías y aplicaciones",
    funcion: "Liderazgo técnico de plataformas y aplicaciones institucionales. Coordinación de los proyectos de desarrollo de software.",
    foto: ""
  },
  {
    nombre: "David Alejandro González Mateus",
    grado: "Profesional grado 18",
    cargo: "",
    funcion: "Ingeniero de gestión de proyectos e infraestructura",
    foto: ""
  },
  {
    nombre: "Ingrid Jhulieth Estacio Carvajal",
    grado: "Auxiliar judicial grado 3",
    cargo: "",
    funcion: "Ingeniera de infraestructura, solicitudes transversales y enlace directo con la Sala Penal, Sala Civil, Secretaria General",
    foto: ""
  },
  {
    nombre: "Álvaro Antonio Baena Rubio",
    grado: "Profesional grado 20",
    cargo: "",
    funcion: "Ingeniero de desarrollo ",
    foto: ""
  },
  {
    nombre: "Brayan Jair Robayo Vera",
    grado: "Técnico grado 13",
    cargo: "",
    funcion: "Ingeniero de desarrollo ",
    foto: ""
  },
  {
    nombre: "Juan Carlos Verano Estrada",
    grado: "Profesional grado 20",
    cargo: "",
    funcion: "Función",
    foto: ""
  },
  // ── Columna 2 (personas 8–14) ───────────────────────────
  {
    nombre: "Steven Osorio Tipan",
    grado: "Profesional grado 18",
    cargo: "",
    funcion: "Ingeniero de desarrollo y soporte",
    foto: ""
  },
  {
    nombre: "Cristian Mauricio Ortegón Martínez",
    grado: "Profesional grado 18",
    cargo: "",
    funcion: "Ingeniero de desarrollo y datos",
    foto: ""
  },
  {
    nombre: "Moisés Bernardo Suárez Gámez",
    grado: "Profesional grado 18",
    cargo: "",
    funcion: "Ingeniero de desarrollo",
    foto: ""
  },
  {
    nombre: "John Ervey Sánchez Velandia",
    grado: "Operador Sistemas grado 18",
    cargo: "",
    funcion: "Operador de Sistemas e Ingeniero de enlace directo con la Sala Laboral y Oficina de Comunicaciones",
    foto: ""
  },
  {
    nombre: "David Alzate Gómez",
    grado: "Técnico grado 13",
    cargo: "",
    funcion: "Ingeniero de desarrollo",
    foto: ""
  },
  {
    nombre: "Andrés Esteban Romero Romero",
    grado: "Técnico grado 13",
    cargo: "",
    funcion: "Ingeniero de desarrollo e integración",
    foto: ""
  },
  {
    nombre: "Oscar Andrés Mancera Garzón",
    grado: "Técnico grado 13",
    cargo: "",
    funcion: "Ingeniero de desarrollo",
    foto: ""
  }
];
// ------------------------------------------------------------
//  SECCIÓN 3 — LOS 35 PROYECTOS
//  Cada proyecto tiene estos campos editables:
//
//  id:          Número del proyecto (no cambiar)
//  titulo:      Nombre del proyecto
//  subtitulo:   Descripción corta (aparece en la tarjeta)
//  descripcion: Texto largo para la página de detalle
//  estado:      "en-curso" | "planificacion" | "completado" | "pendiente"
//  categoria:   Categoría del proyecto (para filtros)
//  enlace:      URL del sistema o desarrollo (pon "#" si no hay)
//  imagen:      Ruta a imagen local o URL externa (pon "" si no hay)
//  video:       URL de YouTube o Vimeo embed (pon "" si no hay)
//  liderTecnico: Nombre del líder técnico
//  fechaInicio: "YYYY-MM-DD" o texto como "Enero 2025"
//  avance:      Número del 0 al 100 (porcentaje de avance)
// ------------------------------------------------------------
const PROYECTOS = [
    { id: 1, titulo: "Modernización Base de datos ESAV", subtitulo: "Actualización y optimización de la base de datos del Ecosistema Digital de Acciones Virtuales.", descripcion: "Proceso de migración de la base de datos de ESAV desde SQL Server 2008 hacia Azure SQL Database (versión 2022), mejorando el rendimiento, seguridad y disponibilidad del sistema.", estado: "entregado", categorias: ["Infraestructura"], enlace: "", imagen: "assets/imagenes/PRO_01_Migracion_Base_datos.png", video: "", liderTecnico: "Emirt A.", equipo: "Steven O / Juan V", equipoApoyo: "", avance: 100 },
    { id: 2, titulo: "Gestor solicitudes", subtitulo: "Gestión y seguimiento de solicitudes internas.", descripcion: "Herramienta digital diseñada para automatizar la recepción, gestión y control de solicitudes internas dirigidas a la Oficina de Tecnología, permitiendo un manejo organizado y trazable de los requerimientos técnicos.", estado: "mantenimiento", categorias: ["Gestión"], enlace: "", imagen: "assets/imagenes/PRO_02_gestor_solicitudes.png", video: "", liderTecnico: "Emirt A.", equipo: "Cristian O / Alvaro B", equipoApoyo: "", avance: 100 },
    { id: 3, titulo: "Interoperabilidad entre Salas especializadas de la corporación", subtitulo: "Integración de sistemas entre las diferentes salas de la Corte.", descripcion: "Este proyecto surge como respuesta a la necesidad técnica de optimizar el intercambio de información entre las salas de la Corporación ante trámites de impugnación. Mediante una integración directa en la plataforma ESAV, se habilitó el envío digital de expedientes entre las distintas salas, sustituyendo los flujos de trabajo manuales que históricamente generaban una alta carga de reproceso.\n La automatización de esta funcionalidad garantiza una transición ágil de los procesos, reduciendo tiempos de espera y asegurando la integridad de la información judicial en el entorno digital.", estado: "entregado", categorias: ["Interoperabilidad"], enlace: "", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "Moises S", equipoApoyo: "", avance: 100 },
    { id: 4, titulo: "Modulo de Alertas de procesos Previamente Radicados en Esav (Alerta Radicado Cuestionado)", subtitulo: "Proyecto Alerta Radicado Cuestionado.", descripcion: "Sistema desarrollado sobre la plataforma ESAV, orientado a la gestión, control y seguimiento de procesos previamente radicados. Este módulo permite identificar y generar alertas automáticas sobre radicados que presentan inconsistencias o requieren validación adicional, optimizando la trazabilidad y reduciendo riesgos operativos. \n La solución está diseñada específicamente para la Sala Civil (Secretaría), facilitando la supervisión continua de los procesos y mejorando la eficiencia en la toma de decisiones. A través de la automatización de alertas, se fortalece la gestión documental y se garantiza un control más riguroso sobre el estado de los radicados.", estado: "entregado", categorias: ["ESAV"], enlace: "", imagen: "assets/imagenes/PRO_04_modulo_alerta.png", video: "", liderTecnico: "Emirt A.", equipo: "Juan V", equipoApoyo: "", avance: 100 },
    { id: 5, titulo: "Automatización del reparto de procesos disciplinarios contra procurador", subtitulo: "Sistema automático de distribución de procesos disciplinarios.", descripcion: "Desarrollo e implementación de un módulo especializado para la automatización del reparto y asignación de procesos disciplinarios dirigidos contra el Procurador General de la Nación. Integrado directamente al ecosistema ESAV, el sistema utiliza algoritmos de selección aleatoria para designar a los Magistrados encargados de la evaluación y conducción de las etapas procesales. Esta solución elimina la discrecionalidad en la asignación, garantizando la transparencia, la equidad en la carga prestacional y el estricto cumplimiento de los términos legales mediante una trazabilidad digital inalterable de cada sorteo.", estado: "entregado", categorias: ["Automatización"], enlace: "", imagen: "assets/imagenes/PRO_05_reparto.png", video: "", liderTecnico: "Emirt A.", equipo: "David A", equipoApoyo: "Jhulieth E", avance: 100 },
    { id: 6, titulo: "CLID (Conservación y localización de la Información Digital)", subtitulo: "Sistema Automatizado para la Gestión de la Información Documental.", descripcion: "Automatizar la gestión documental electrónica en sincronía con las tablas de retención documental, el portal institucional y los aplicativos que manejan las diferentes dependencias de la Corte Suprema de Justicia. Gestiona la Información Electronica que Nace y se Archiva en Corte Suprema.", estado: "mantenimiento", categorias: ["Gestión Documental"], enlace: "#", imagenes: ["assets/imagenes/PRO_06_CLID.png", "assets/imagenes/PRO_06_CLID1.png", "assets/imagenes/PRO_06_CLID2.png"], video: "", liderTecnico: "Emirt A.", equipo: "Andrés R", equipoApoyo: "John S", avance: 61 },
    { id: 7, titulo: "Factor Calidad", subtitulo: "Proceso de calificaciones a Magistrados y Jueces.", descripcion: "Solución digital institucional diseñada para operacionalizar el mecanismo de evaluación interna de la Corte Suprema de Justicia, enfocado en medir el desempeño cualitativo de los despachos judiciales, magistrados y dependencias a nivel nacional. Superando el enfoque tradicional de medición por volumen de procesos, la plataforma permite estructurar, registrar y consultar la calificación de la excelencia jurídica mediante criterios técnicos específicos, facilitando la firma electrónica de las evaluaciones y garantizando la trazabilidad del proceso. Esta herramienta transforma la evaluación del Factor Calidad en un activo de información estratégica para fortalecer la carrera judicial y la mejora continua de la función jurisdiccional en Colombia.", estado: "entregado", categorias: ["Gestión","Automatización"], enlace: "https://ecosistemadigitalsso.cortesuprema.gov.co/Identity/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DFactorCalidadFrontProd%26redirect_uri%3Dhttps%253A%252F%252Ffactorcalidad.cortesuprema.gov.co%252F%2523%252Fauthentication%252Flogin-callback%26response_type%3Dcode%26scope%3DArchivoCentralAPIResource%2520ESDAVAPIResource%2520FactorCalidadAPIResource%2520FirmaElectronicaAPIResource%2520GestorTalentoHumanoAPIResource%2520notificaciones%2520CSJSSOAPI%2520openid%2520profile%26state%3Daa44f8a1f9384558a0719025982b1a66%26code_challenge%3DnwIsdA_P-Kbxnysht7neKFL66nFmbPeTEe5_PoPcEbI%26code_challenge_method%3DS256%26response_mode%3Dquery", imagenes: ["assets/imagenes/PRO_07_Procurador.png"], video: "", liderTecnico: "Emirt A.", equipo: "David A", equipoApoyo: "Jhulieth E", avance: 100 },
    { id: 8, titulo: "Migración y robustecimiento en la nube de la arquitectura de software para el sitio web", subtitulo: "Modernización del sitio web institucional en la nube.", descripcion: "Este proyecto tuvo como enfoques principales mejorar y estabilizar el sitio web de la Corte Suprema de Justicia, el cual inicialmente se encontraba alojado en una infraestructura local. Incluye el fortalecimiento de la postura de seguridad mediante la identificación y remediación de vulnerabilidades.", estado: "entregado", categorias: ["Web","Infraestructura"], enlace: "https://cortesuprema.gov.co/", imagen: "assets/imagenes/PRO_8_migracion_web_nube.png", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 95 },
    { id: 9, titulo: "Notificaciones electrónicas automatizadas ESAV (notificaciones automáticas sala civil)", subtitulo: "Notificaciones Automáticas Sala Civil.", descripcion: "Solución desarrollada sobre la plataforma ESAV para la automatización del envío de notificaciones electrónicas asociadas a providencias en procesos de impugnación de tutela. El sistema programa de manera automática el envío de correos electrónicos a los sujetos procesales intervinientes, una vez se consolida la providencia, garantizando oportunidad y consistencia en la comunicación.\n Este módulo, implementado para la Sala Civil (Secretaría), elimina la dependencia de procesos manuales, reduce tiempos operativos y minimiza errores en la gestión de notificaciones. Como resultado, se mejora significativamente la agilidad en la administración de los procesos y se fortalece el cumplimiento de los tiempos procesales.", estado: "entregado", categorias: ["ESAV"], enlace: "", imagen: "assets/imagenes/PRO_09_notificaciones.png", video: "", liderTecnico: "Emirt A.", equipo: "Juan V", equipoApoyo: "", avance: 100 },
    { id: 10, titulo: "GTH (Gestor de talento humano)", subtitulo: "Sistema de gestión del talento humano de la Corte.", descripcion: "GTH es una aplicación web desarrollada para modernizar y optimizar la gestión del archivo digital de historias laborales en la Corte Suprema de Justicia. Esta herramienta centraliza el registro, consulta y trazabilidad de los documentos laborales de los servidores judiciales y magistrados del país, automatizando procesos clave como nombramientos, licencias, comisiones, desvinculaciones y otras novedades administrativas. Entre sus funcionalidades destacan: generación de certificados laborales firmadas electrónicamente verificadas con código QR, reportes interactivos, organigrama actualizado de la planta de personal, creación y control de cargos y dependencias, así como la visualización estructurada de documentos históricos, alineadas con las políticas de gestión documental. Es una solución tecnológica impulsada por la Secretaría General y desarrollada por la Oficina de Tecnología como parte del compromiso con la transformación digital institucional.", estado: "mantenimiento", categorias: ["Gestión"], enlace: "https://gestortalentohumano.cortesuprema.gov.co/", imagenes: ["assets/imagenes/PRO_10_GTH.png", "assets/imagenes/PRO_10_GTH_2.png"], video: "", liderTecnico: "Emirt A.", equipo: "David A", equipoApoyo: "Jhulieth E", avance: 65 },
    { id: 11, titulo: "Voto electrónico", subtitulo: "Sistema de votación electrónica para procesos internos.", descripcion: "Aplicativo interno desarrollado para la gestión y ejecución de procesos de votación en la corte, orientado a la toma de decisiones estratégicas como la elección de magistrados, candidatos a procurador, entre otros procesos institucionales de alta relevancia.\n El sistema opera bajo un esquema de roles diferenciados: un rol administrador (Secretaría General), encargado de la configuración del proceso —incluyendo la definición de candidatos, votantes y rondas de votación—, y un rol de votante, que permite el acceso controlado al sistema para la emisión del voto de manera segura y estructurada.\n La solución incorpora capacidades de actualización automática y seguimiento en tiempo real, lo que garantiza transparencia, trazabilidad y eficiencia en cada etapa del proceso. Este enfoque digital reduce la carga operativa, minimiza errores y fortalece la confiabilidad en los mecanismos de decisión institucional.", estado: "mantenimiento", categorias: ["Gestión"], enlace: "", imagenes: ["assets/imagenes/PRO_11_voto1.png", "assets/imagenes/PRO_11_voto2.png", "assets/imagenes/PRO_11_voto3.png"], video: "", liderTecnico: "Emirt A.", equipo: "Steven O", equipoApoyo: "Alvaro B", avance: 60 },
    { id: 12, titulo: "Firma electrónica de documentos para todas las dependencias", subtitulo: "Firma digital institucional.", descripcion: "Servicio que permite a los funcionarios de la Corte firmar electrónicamente documentos institucionales, garantizando seguridad, trazabilidad y eficiencia en la gestión documental.", estado: "mantenimiento", categorias: ["Seguridad"], enlace: "", imagen: "assets/imagenes/PRO_12_firma.png", video: "", liderTecnico: "Emirt A.", equipo: "Steven O", equipoApoyo: "Jhulieth E", avance: 100 },
    { id: 13, titulo: "Super Supremo para consulta de providencias", subtitulo: "Clasificación y búsqueda dentro del texto de las Providencias con I.A.", descripcion: "Solución avanzada de recuperación de información jurídica diseñada para centralizar, indexar y analizar la memoria jurisprudencial de la Corte Suprema de Justicia. Mediante la integración de Inteligencia Artificial y Procesamiento de Lenguaje Natural (NLP), el sistema trasciende la búsqueda por palabras clave para permitir consultas semánticas y estructuradas sobre las providencias. Su implementación optimiza los ciclos de investigación jurídica, garantiza la relevancia de los resultados y fortalece la seguridad jurídica, facilitando un acceso ágil y preciso al conocimiento judicial tanto para la Corporación como para la ciudadanía.", estado: "mantenimiento", categorias: ["Inteligencia Artificial","Servicios Ciudadanos", "Datos e IA"], enlace: "https://lexis.cortesuprema.gov.co/", imagen: "assets/imagenes/PRO_13_super_supremo.png", video: "", liderTecnico: "Emirt A.", equipo: "Cristian O / Moisés S", equipoApoyo: "", avance: 95 },
    { id: 14, titulo: "ESAV", subtitulo: "Ecosistema Digital Acciones Virtuales.", descripcion: "ESAV es el sistema de gestión procesal de la Corte Suprema de Justicia, diseñado para centralizar y optimizar la radicación y el reparto de los procesos judiciales de la Corporación. Esta plataforma permite la gestión integral de actuaciones, la notificación a sujetos procesales y la firma electrónica de documentos, culminando en la generación de sentencias y su correspondiente registro en relatoría.\n ESAV opera bajo un esquema de seguridad basado en roles, garantizando accesos y permisos diferenciados para Secretarías, Despachos, Magistrados y Relatoría.", estado: "mantenimiento", categorias: ["ESAV"], enlace: "", imagenes: ["assets/imagenes/PRO_14_ESAV1.png", "assets/imagenes/PRO_14_ESAV2.png", "assets/imagenes/PRO_14_ESAV3.png"], video: "", liderTecnico: "Emirt A.", equipo: "Juan V / Steven O", equipoApoyo: "Jhulieth E / John S", avance: 90 },
    { id: 15, titulo: "Interoperabilidad En ESAV con registraduría y RUES", subtitulo: "Integración con sistemas nacionales de identificación y registro.", descripcion: "Este proyecto establece un ecosistema de interoperabilidad técnica entre la Corporación, la Registraduría Nacional del Estado Civil y el RUES, mediante el desarrollo y despliegue de una API de integración diseñada para el consumo de datos desde aplicativos core como ESAV. La solución permite la consulta automatizada y en tiempo real de información ciudadana —incluyendo el estado de cédulas, registros civiles de nacimiento y actas de defunción—, con el propósito de centralizar el acceso a fuentes primarias, eliminar procesos manuales y garantizar una respuesta ágil y directa a los requerimientos de los usuarios de la institución.", estado: "entregado", categorias: ["Interoperabilidad"], enlace: "", imagen: "assets/imagenes/PRO_15_inter_registraduria.png", video: "", liderTecnico: "Emirt A.", equipo: "Cristian O", equipoApoyo: "Steven O / Juan V", avance: 90 },
    { id: 16, titulo: "Ciberseguridad de la información", subtitulo: "Seguridad de la información institucional.", descripcion: "Programa integral de ciberseguridad institucional.", estado: "mantenimiento", categorias: ["Seguridad"], enlace: "#", imagen: "assets/imagenes/PRO_16_seguridad.png", video: "", liderTecnico: "Emirt A.", equipo: "Alvaro B", equipoApoyo: "Jhulieth E", avance: 80 },
    { id: 17, titulo: "Ventanilla Virtual Penal", subtitulo: "Radicación de acciones de tutela a través de la web.", descripcion: "Este proyecto representa la transición de la recepción de acciones de tutela desde canales informales, como el correo electrónico, hacia una plataforma web institucional especializada. El aplicativo permite a los ciudadanos interponer acciones de tutela ante la Sala Penal de manera estructurada, capturando los datos mínimos necesarios para asegurar una radicación precisa.\n Esta modernización optimiza el punto de contacto inicial entre el usuario y la Corporación, garantizando que la información ingrese de forma organizada y agilizando el inicio del trámite judicial.", estado: "mantenimiento", categorias: ["Servicios Ciudadanos"], enlace: "#", imagenes: ["assets/imagenes/PRO_17_Ven_Penal_1.png", "assets/imagenes/PRO_17_Ven_Penal_2.png"], video: "", liderTecnico: "Emirt A.", equipo: "Moises S, Oscar M", equipoApoyo: "Steven O", avance: 80 },
    { id: 18, titulo: "Analizar la necesidad de mejorar métodos Encriptación Firma Electrónica", subtitulo: "Evaluación y mejoras criptográficas.", descripcion: "Análisis para fortalecer algoritmos y mecanismos de firma electrónica.", estado: "mantenimiento", categorias: ["Seguridad"], enlace: "#", imagen: "assets/imagenes/PRO_18_encriptacion.png", video: "", liderTecnico: "Emirt A.", equipo: "Alvaro", equipoApoyo: "", avance: 20 },
    { id: 19, titulo: "Modernización Chatbot \"LuCA\" Coordinación Administrativa", subtitulo: "Actualización del asistente virtual institucional.", descripcion: "LuCA es un chatbot institucional de la Coordinación Administrativa de la Corte Suprema de Justicia que automatiza la atención de consultas frecuentes, facilita el acceso a información y trámites administrativos, y mejora la eficiencia del servicio mediante atención disponible 24/7 a través de canales digitales, el número del chat bot es: 3014471317", estado: "mantenimiento", categorias: ["Inteligencia Artificial"], enlace: "#", imagen: "assets/imagenes/PRO_19_chatbot.png", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 20 },
    { id: 20, titulo: "Gestor Despacho", subtitulo: "Sistema de gestión integral de despachos judiciales.", descripcion: "Plataforma integral de gestión del flujo de trabajo judicial diseñada para automatizar y estandarizar el ciclo de vida de los proyectos de sentencia. La solución facilita el registro centralizado, la asignación estratégica y el monitoreo en tiempo real de los estados procesales, garantizando una trazabilidad técnica absoluta desde la radicación hasta la firma. Su implementación optimiza la coordinación operativa del despacho y asegura el cumplimiento de los principios de oportunidad y celeridad, fortaleciendo la organización institucional y el control sobre la producción jurídica.", estado: "mantenimiento", categorias: ["Gestión","Automatización"], enlace: "https://sso.cortesuprema.gov.co/Identity/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DGestorDespachosTest%26redirect_uri%3Dhttps%253A%252F%252Fgestordespachodev.cortesuprema.gov.co%252F%2523%252Fauthentication%252Flogin-callback%26response_type%3Dcode%26scope%3DArchivoCentralAPIResource%2520ESDAVAPIResource%2520FactorCalidadAPIResource%2520FirmaElectronicaAPIResource%2520GestorDespachosAPIResource%2520GestorTalentoHumanoAPIResource%2520notificaciones%2520CSJSSOAPI%2520openid%2520profile%26state%3Decc359aba1db4d479c331160758ca020%26code_challenge%3DsvL8Jt6gW3lziPm4xMvmNgTalxOjrWYw1IMn6GH4pHM%26code_challenge_method%3DS256", imagen: "assets/imagenes/PRO_20_Gestor_despacho.png", video: "", liderTecnico: "Emirt A.", equipo: "Cristian O / Moises S", equipoApoyo: "", avance: 80 },
    { id: 21, titulo: "Identidad Digital", subtitulo: "Fortalecimiento de la seguridad de ingreso.", descripcion: "1. Llave única de acceso\nIdentidad Digital es la llave única que permite a funcionarios y servidores judiciales acceder de forma segura a todos los aplicativos de la Rama Judicial (GestorRH, gestión documental, reportes, etc.) con un solo usuario corporativo. Adiós a las contraseñas duplicadas y a la fragmentación de credenciales.\n2. Gobierno y trazabilidad de accesos\nCentraliza la gobernanza mediante un modelo RBAC (control de acceso basado en roles) que permite saber en tiempo real quién puede hacer qué, en qué aplicativo y con qué alcance. Cada acción queda auditada, fortaleciendo el cumplimiento normativo y la rendición de cuentas.\n3. Modernización y ciberseguridad\nMigra la autenticación de soluciones legadas (IdentityServer4 / .NET Core 3.1) hacia Microsoft EntraID, el estándar empresarial de identidad en la nube. Habilita MFA, acceso condicional, detección de amenazas e integración nativa con Microsoft 365 — alineando a la Corte con las mejores prácticas internacionales.\n4. Habilitador estratégico de la transformación digital\nNo es solo autenticación: es la base sobre la que cada nuevo aplicativo de la Rama Judicial nace con identidad, roles y permisos consistentes desde el día uno. Acelera el desarrollo, reduce costos de integración y garantiza una experiencia uniforme para todos los usuarios institucionales.", estado: "inicio-construccion", categorias: ["Seguridad"], enlace: "#", imagenes: ["assets/imagenes/PRO_21_identidad.png", "assets/imagenes/PRO_21_identidad_2.png"], video: "", liderTecnico: "Emirt A.", equipo: "Alvaro / Brayan", equipoApoyo: "", avance: 50 },
    { id: 22, titulo: "Ventanilla Sala Civil", subtitulo: "Ventanilla virtual para la Sala Civil.", descripcion: "Ventanilla Sala Civil es el desarrollo tecnológico especializado en la recepción y gestión inicial de procesos judiciales. Su propósito principal es optimizar la labor de los radicadores mediante la entrega de información técnica estructurada, lo que agiliza significativamente las etapas de radicación y reparto.\n Al estandarizar los datos de entrada, el sistema garantiza una transición eficiente de los expedientes hacia las fases de gestión procesal de la Sala Civil.", estado: "inicio-construccion", categorias: ["Servicios Ciudadanos"], enlace: "#", imagen: "assets/imagenes/PRO_22_civil.png", video: "", liderTecnico: "Emirt A.", equipo: "Juan V / Steven O", equipoApoyo: "", avance: 80 },
    { id: 23, titulo: "Interoperabilidad envío de tutelas a Corte Constitucional", subtitulo: "Integración automática con la Corte Constitucional.", descripcion: "Interoperabilidad C.C. es un proyecto de transformación digital diseñado para automatizar el flujo de remisión de tutelas entre la Corte Suprema de Justicia y la Corte Constitucional. A través de la integración técnica de los sistemas ESAV y SICCOR, la plataforma simplifica el envío de expedientes mediante un proceso intuitivo de selección y transmisión directa.\n Esta iniciativa, desarrollada en colaboración por la Corte Suprema, la Corte Constitucional y la UTDI, reduce significativamente los tiempos de trámite y las cargas administrativas, fortaleciendo la eficiencia en la comunicación entre las altas cortes.", estado: "inicio-construccion", categorias: ["Interoperabilidad"], enlace: "#", imagen: "assets/imagenes/PRO_23_interoperabilidad.png", video: "", liderTecnico: "Emirt A.", equipo: "Juan V / Steven O / Luis Vargas", equipoApoyo: "Jhulieth E / John S", avance: 70 },
    { id: 24, titulo: "Automatización aplicativo de Consecutivos", subtitulo: "Gestión de consecutivos documentales.", descripcion: "El Aplicativo de Automatización de Consecutivos es una solución técnica integrada nativamente en la plataforma ESAV, diseñada para la generación sistemática de números consecutivos para oficios y telegramas. Este módulo permite a la Corporación realizar una gestión, seguimiento y control exhaustivo de la comunicación oficial desde una infraestructura centralizada.\n Actualmente, su implementación en las secretarías de las salas Penal y Laboral garantiza la integridad documental y optimiza la trazabilidad de los trámites administrativos.", estado: "inicio-construccion", categorias: ["Automatización"], enlace: "#", imagen: "assets/imagenes/PRO_24_consecutivos.png", video: "", liderTecnico: "Emirt A.", equipo: "Juan V / Steven O", equipoApoyo: "John", avance: 95 },
    { id: 25, titulo: "Analítica de datos con I.A.", subtitulo: "Inteligencia artificial para analizar documentación", descripcion: "Implementación de una solución de analítica predictiva y descriptiva basada en Inteligencia Artificial para la extracción de conocimiento desde datos no estructurados presentes en las providencias judiciales. El sistema utiliza modelos entrenados de Procesamiento de Lenguaje Natural (NLP) para identificar, extraer y estructurar variables críticas, las cuales son almacenadas en una base de datos centralizada. Actualmente, el proyecto es funcional para la casuística de delitos sexuales contra menores de 14 años, transformando textos complejos en tableros de control en Power BI que proporcionan a los Magistrados reportes estadísticos precisos para una toma de decisiones informada y basada en evidencia.", estado: "mantenimiento", categorias: ["Datos e IA"], enlace: "#", imagen: "assets/imagenes/PRO_25_datos_IA.png", video: "", liderTecnico: "Emirt A.", equipo: "Cristian O", equipoApoyo: "", avance: 80 },
    { id: 26, titulo: "Automatización procesos Coordinación Administrativa", subtitulo: "Digitalización de procesos administrativos internos.", descripcion: "Automatización y digitalización de procesos internos.", estado: "en-analisis", categorias: ["Automatización"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 10 },
    { id: 27, titulo: "Evolución y modernización Índice Electrónico", subtitulo: "Actualización del sistema de índice electrónico judicial.", descripcion: "Modernización del índice electrónico institucional.", estado: "en-analisis", categorias: ["Gestión Documental"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "David A", equipoApoyo: "Jhuliet E", avance: 10 },
    { id: 28, titulo: "Interoperabilidad ESAV - SGDE", subtitulo: "Integración entre ESAV y el Sistema de Gestión Documental Electrónica.", descripcion: "Este proyecto tiene como objetivo principal la integración técnica entre el sistema ESAV de la Corte Suprema de Justicia y el Sistema de Gestión Documental Electrónica (SGDE) del Consejo Superior de la Judicatura. A través de este desarrollo, se busca centralizar el repositorio de archivos de los procesos judiciales, garantizando la integridad y disponibilidad de la información en una plataforma única.\n Esta unificación facilita el flujo de retorno de los expedientes a los tribunales de origen, optimizando los tiempos de respuesta y asegurando una trazabilidad completa en la devolución de la información procesal.", estado: "en-analisis", categorias: ["Interoperabilidad"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "Juan V / Steven O", equipoApoyo: "Jhulieth E / John S / Andres R / Alvaro B", avance: 10 },
    { id: 29, titulo: "Migración Directorio Activo a Nube", subtitulo: "Modernización de la infraestructura de identidades.", descripcion: "Este proyecto busca eliminar la criticidad de los servicios de identidad mediante la implementación de un Directorio Activo moderno y redundante. La solución se basa en el despliegue de controladores de dominio bajo Windows Server 2022, distribuidos estratégicamente entre la infraestructura on-premise y máquinas virtuales en Azure.\n Este diseño permite que la nube funcione como un nodo de respaldo activo, asegurando que los servicios de autenticación, DNS y políticas de grupo permanezcan disponibles ante contingencias locales. La integración se completa con la sincronización hacia Microsoft Entra ID, optimizando la gestión de identidades tanto para cargas de trabajo tradicionales como para servicios en la nube.", estado: "inicio-construccion", categorias: ["Infraestructura"], enlace: "#", imagenes: ["assets/imagenes/PRO_29_migracion_directorio_activo.png", "assets/imagenes/PRO_29_migracion_directorio_activo_2.png"], video: "", liderTecnico: "Emirt A.", equipo: "Alejandro G / Jhulieth E", equipoApoyo: "", avance: 35 },
    { id: 30, titulo: "Interoperabilidad Firma Electrónica", subtitulo: "Conexiones y estandarización de firma electrónica.", descripcion: "Servicios de interoperabilidad relacionados con firma electrónica.", estado: "en-analisis", categorias: ["Seguridad"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 10 },
    { id: 31, titulo: "Chatbot", subtitulo: "Asistente virtual para atención ciudadana e institucional.", descripcion: "Desarrollo de un chatbot inteligente para atención automatizada.", estado: "en-analisis", categorias: ["Inteligencia Artificial"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 10 },
    { id: 32, titulo: "Software Convocatoria", subtitulo: "Sistema de gestión de convocatorias institucionales.", descripcion: "Plataforma para gestión de convocatorias y procesos de selección.", estado: "en-analisis", categorias: ["Gestión"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "Jhulieth E", avance: 10 },
    { id: 33, titulo: "Ventanilla PQRS Presidencia", subtitulo: "Sistema de Peticiones, Quejas, Reclamos y Sugerencias.", descripcion: "Portal de gestión de PQRS de la Presidencia.", estado: "inicio-construccion", categorias: ["Servicios Ciudadanos"], enlace: "#", imagen: "assets/imagenes/PRO_33_PQRS.png", video: "", liderTecnico: "Emirt A.", equipo: "Alvaro B / Brayan R", equipoApoyo: "", avance: 20 },
    { id: 34, titulo: "Actualización Tecnológica Inventarios GLPI", subtitulo: "Modernización del sistema de inventario tecnológico.", descripcion: "Actualización del sistema GLPI de inventario de activos TI.", estado: "en-analisis", categorias: ["Infraestructura"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "Alvaro B", equipoApoyo: "", avance: 10 },
    { id: 35, titulo: "Métricas con Inteligencia Artificial (Prueba piloto aplicativo copilot)", subtitulo: "Implementación piloto de Microsoft Copilot en la Corte.", descripcion: "Prueba piloto para generación de métricas y análisis con IA.", estado: "en-analisis", categorias: ["Inteligencia Artificial"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 10 },
    { id: 36, titulo: "Eventos y encuentros presidencia", subtitulo: "Aplicativo para la gestión de eventos y encuentros institucionales.", descripcion: "Aplicativo para planificación, organización y seguimiento de eventos.", estado: "inicio-construccion", categorias: ["Automatización","Web"], enlace: "#", imagen: "assets/imagenes/PRO_36_eventos.png", video: "", liderTecnico: "Emirt A.", equipo: "Oscar M", equipoApoyo: "John S", avance: 10 },
    { id: 37, titulo: "Administración y Monitoreo Infraestructura Nube Azure", subtitulo: "Operaciones y monitoreo de la infraestructura en Azure.", descripcion: "Implementación, administración y monitoreo de servicios en Azure para garantizar seguridad, alta disponibilidad y escalabilidad.", estado: "mantenimiento", categorias: ["Infraestructura"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 95 },
    { id: 38, titulo: "Gestión y Apoyo a Audiencias de la Corte Suprema de Justicia", subtitulo: "Soporte y herramientas para audiencias.", descripcion: "Agendamiento y seguimiento de audiencias presenciales y virtuales, asegurando el funcionamiento de equipos y el cargue de grabaciones.", estado: "mantenimiento", categorias: ["Servicios Ciudadanos","Automatización"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 95 },
    { id: 39, titulo: "JSReport – Generador de Reportes", subtitulo: "Motor de generación de reportes.", descripcion: "Solución técnica integrada para la producción dinámica de informes y plantillas editables. Esta funcionalidad permite transformar información estructurada en documentos finales en formato PDF y Microsoft Word, facilitando la estandarización de reportes en todas las áreas de la corporación.\n Gracias a su alta flexibilidad, el sistema puede ser empleado para cualquier tipo de requerimiento documental, optimizando los tiempos de respuesta y garantizando la precisión en la presentación de la información judicial y administrativa.", estado: "mantenimiento", categorias: ["Gestión"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "Juan V / Steven O / Luis Vargas", equipoApoyo: "", avance: 95 },
    { id: 40, titulo: "Firma Service", subtitulo: "Servicio central de firma digital.", descripcion: "Servicio en Python diseñado para insertar firmas digitales y validaciones en documentos PDF, integrado al flujo de ESAV.", estado: "en-analisis", categorias: ["Seguridad"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 95 },
    { id: 41, titulo: "Sitio Web Ambiente ON-Premise", subtitulo: "Despliegue y mantenimiento del sitio en entorno on-premise.", descripcion: "Este proyecto tuvo como enfoques principales mejorar y estabilizar el sitio web de la Corte Suprema de Justicia, el cual inicialmente se encontraba alojado en una infraestructura local (conocida como on-premise). Este término significa que los servidores y sistemas que soportaban el sitio web estaban físicamente instalados y gestionados dentro de las instalaciones de la institución, a diferencia de utilizar servicios en la nube.", estado: "entregado", categorias: ["Web"], enlace: "https://cortesuprema.gov.co/", imagen: "assets/imagenes/PRO_41_portal_web.png", video: "", liderTecnico: "Emirt A.", equipo: "John S / Andres R", equipoApoyo: "", avance: 95 },
    { id: 43, titulo: "Modelos de Inteligencia Artificial Aplicados a la Consulta de Jurisprudencia", subtitulo: "Modelos IA para búsqueda y consulta jurídica.", descripcion: "El Proyecto de extracción mediante Inteligencia Artificial consistió en el desarrollo y ejecución de un sistema de extracción automatizada de información a partir de providencias judiciales relacionadas con delitos contra menores de 14 años y casos de extradición, el objetivo fue entrenar y validar modelos de procesamiento de lenguaje natural (PLN) para identificar, estructurar y clasificar datos relevantes dentro de documentos judiciales no estructurados, optimizando así la búsqueda y el análisis de este tipo de providencias. .", estado: "entregado", categorias: ["Inteligencia Artificial"], enlace: "#", imagen: "", video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 95 },
    { id: 44, titulo: "Proyecto Transmedia – Presidencia", subtitulo: "Proyecto transmedia institucional.", descripcion: "Iniciativa multimedia desarrollada durante la presidencia del Magistrado Dr. Gerson Chaverra Castro, orientada a visibilizar el trabajo de los jueces en las zonas más apartadas del país, resaltando su labor y compromiso con la justicia.", estado: "en-analisis", categorias: ["Web"], enlace: "https://cortesuprema.gov.co/wp-content/themes/Transmedia/index.html", imagenes: ["assets/imagenes/PRO_44_transmedia_1.png", "assets/imagenes/PRO_44_transmedia_2.png"], video: "", liderTecnico: "Emirt A.", equipo: "", equipoApoyo: "", avance: 95 }
];

// ── Configuración de estados (colores y etiquetas) ──────────
// Valores válidos: "entregado" | "mantenimiento" | "inicio-construccion" | "en-analisis"
const ESTADOS = {
  "entregado":          { label: "Entregado",               color: "#1565C0", bg: "#E3F2FD" },
  "mantenimiento":      { label: "Mantenimiento y Evolución", color: "#2E7D32", bg: "#E8F5E9" },
  "inicio-construccion":{ label: "Inicio y Construcción",    color: "#E65100", bg: "#FFF3E0" },
  "en-analisis":        { label: "En Análisis",              color: "#6A1B9A", bg: "#F3E5F5" },
};

// ── Categorías disponibles ───────────────────────────────────
const CATEGORIAS = [
  "Todas",
  "ESAV",
  "Interoperabilidad",
  "Infraestructura",
  "Seguridad",
  "Automatización",
  "Inteligencia Artificial",
  "Datos e IA",
  "Servicios Ciudadanos",
  "Gestión Documental",
  "Gestión",
  "Web"
];

