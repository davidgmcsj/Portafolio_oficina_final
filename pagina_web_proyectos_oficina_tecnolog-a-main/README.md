# Portal Web — Oficina de Tecnología
## Corte Suprema de Justicia de Colombia

---

## Cómo abrir el proyecto

1. Descomprime la carpeta `portal-tecnologia`
2. Abre `index.html` directamente en Chrome, Edge o Firefox
3. No se necesita servidor, instalaciones ni internet (Google Fonts requiere conexión la primera vez)

---

## Estructura del proyecto

```
portal-tecnologia/
│
├── index.html               ← Página principal (no modificar estructura)
│
├── css/
│   └── estilos.css          ← Todos los estilos: colores, tipografías, layout
│
├── js/
│   ├── datos.js             ← TODO el contenido editable: proyectos, textos, equipo
│   └── app.js               ← Lógica: navegación, filtros, modales, organigrama
│
├── assets/
│   └── imagenes/            ← Imágenes de proyectos, organigrama y fotos del equipo
│
└── README.md                ← Esta guía
```

---

## Navegación del sitio (SPA)

El portal funciona como una SPA (Single Page Application): todo corre en `index.html` sin recargar la página.

| Vista | Contenido | Cómo llegar |
|---|---|---|
| **Inicio** | Hero, estadísticas, Misión/Visión/Valores, Equipo, Organigrama | Logo o enlaces Inicio / Direccionamiento / Equipo en el menú |
| **Proyectos** | Grid de los 43 proyectos con filtros y paginación | Botón "Ver Proyectos" o enlace "Proyectos" en el menú |

Desde la vista Proyectos, el botón **← Volver al Inicio** regresa a la vista principal.

---

## Guía de edición — `js/datos.js`

> **Este es el único archivo que necesitas tocar para cambiar contenido.**

---

### 1. Textos del inicio — `OFICINA_INFO`

Controla el hero, las estadísticas y la sección de Direccionamiento Estratégico.

```js
const OFICINA_INFO = {
  titulo:    "Oficina de Tecnología",
  subtitulo: "Corte Suprema de Justicia — República de Colombia",
  mision:    "...",   // texto de la misión
  vision:    "...",   // texto de la visión
  valores: [
    { icono: "⚖️", nombre: "Transparencia", descripcion: "..." },
    // agregar o quitar valores aquí
  ],
  stats: [
    { numero: "43", label: "Proyectos" },
    { numero: "14", label: "Profesionales TI" },
    { numero: "2026", label: "Año en curso" }
    // las tres cifras que aparecen en el hero
  ]
};
```

---

### 2. Equipo — `EQUIPO`

Lista de las 14 personas. Cada entrada aparece como tarjeta en la sección "Nuestro Equipo".

```js
{
  nombre:  "David Alzate Gómez",          // nombre completo visible
  grado:   "Técnico grado 13",            // grado/categoría
  cargo:   "Ingeniero de desarrollo",     // cargo (opcional, puede quedar "")
  funcion: "Descripción de su función",   // texto del tooltip al pasar el cursor
  foto:    "assets/imagenes/david.jpg"    // ruta a foto; deja "" si no hay
}
```

**Para agregar foto:** copia el archivo JPG/PNG a `assets/imagenes/` y escribe la ruta en `foto`.

> **Importante:** los nombres en `EQUIPO` son los que aparecen en el selector de filtro de ingenieros en la vista de Proyectos. Si agregas una persona nueva al equipo, también debes agregar su alias en `ALIAS_INGENIEROS` dentro de `js/app.js` (ver sección más abajo).

---

### 3. Proyectos — `PROYECTOS`

Array con los 43 proyectos. Cada proyecto tiene estos campos:

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | número | Identificador único — **no cambiar** |
| `titulo` | texto | Nombre visible en la tarjeta y el modal |
| `subtitulo` | texto | Descripción corta que aparece en la tarjeta |
| `descripcion` | texto | Texto largo visible al abrir el modal |
| `estado` | texto | Estado del proyecto (ver valores válidos abajo) |
| `categorias` | array | Una o varias categorías: `["ESAV"]` o `["Automatización", "Web"]` |
| `enlace` | URL | URL del sistema. Usa `"#"` si no hay enlace disponible |
| `imagen` | ruta | Ruta a imagen local: `"assets/imagenes/mi-imagen.jpg"` — deja `""` si no hay |
| `video` | URL | URL de YouTube: `"https://www.youtube.com/watch?v=ID"` — deja `""` si no hay |
| `liderTecnico` | texto | Nombre corto del líder de proceso (ej: `"Emirt A."`) |
| `equipo` | texto | Nombres cortos del equipo de desarrollo separados por ` / ` (ej: `"Juan V / Steven O"`) |
| `equipoApoyo` | texto | Nombres cortos del equipo de soporte/apoyo separados por ` / ` |
| `avance` | número | Porcentaje de avance del `0` al `100` |

#### Valores válidos para `estado`

| Valor en código | Etiqueta visible | Color |
|---|---|---|
| `"entregado"` | Entregado | Azul |
| `"mantenimiento"` | Mantenimiento y Evolución | Verde |
| `"inicio-construccion"` | Inicio y Construcción | Naranja |
| `"en-analisis"` | En Análisis | Morado |

#### Nombres cortos de ingenieros (para `liderTecnico`, `equipo`, `equipoApoyo`)

Usa siempre estos alias exactos al escribir nombres en los proyectos:

| Alias en proyectos | Nombre completo |
|---|---|
| `Emirt A.` | Emirt Lorenzo Adams Saenz |
| `Alejandro G` | David Alejandro González Mateus |
| `Jhulieth E` | Ingrid Jhulieth Estacio Carvajal |
| `Alvaro B` | Álvaro Antonio Baena Rubio |
| `Brayan R` | Brayan Jair Robayo Vera |
| `Juan V` | Juan Carlos Verano Estrada |
| `Steven O` | Steven Osorio Tipan |
| `Cristian O` | Cristian Mauricio Ortegón Martínez |
| `Moises S` | Moisés Bernardo Suárez Gámez |
| `John S` | John Ervey Sánchez Velandia |
| `David A` | David Alzate Gómez |
| `Andres R` | Andrés Esteban Romero Romero |
| `Oscar M` | Oscar Andrés Mancera Garzón |

#### Ejemplo completo de proyecto

```js
{
  id: 5,
  titulo: "Automatización del reparto de procesos disciplinarios",
  subtitulo: "Sistema automático de distribución de procesos disciplinarios.",
  descripcion: "Descripción detallada del proyecto...",
  estado: "entregado",
  categorias: ["Automatización"],
  enlace: "#",
  imagen: "",
  video: "",
  liderTecnico: "Emirt A.",
  equipo: "David A",
  equipoApoyo: "Jhulieth E",
  avance: 100
}
```

#### Agregar un proyecto nuevo

1. Copia el bloque de un proyecto existente al final del array `PROYECTOS`
2. Cambia el `id` al siguiente número disponible (actualmente 45)
3. Rellena todos los campos
4. Si usas una categoría nueva, agrégala también en `CATEGORIAS` (ver sección 5)

---

### 4. Estados — colores y etiquetas — `ESTADOS`

Controla los colores de los badges de estado. Puedes cambiar textos y colores sin tocar `app.js`.

```js
const ESTADOS = {
  "entregado": { label: "Entregado", color: "#1565C0", bg: "#E3F2FD" },
  // color = color del texto, bg = color de fondo del badge
};
```

---

### 5. Categorías del filtro — `CATEGORIAS`

Lista de categorías que aparecen como botones de filtro en la vista de Proyectos.

```js
const CATEGORIAS = ["Todas", "ESAV", "Interoperabilidad", ...];
```

Si agregas una categoría nueva a un proyecto, inclúyela aquí también para que aparezca en el filtro.

---

## Guía de edición — `css/estilos.css`

### Cambiar colores principales

Edita las variables en la sección `:root { }` al inicio del archivo:

| Variable | Controla |
|---|---|
| `--azul-oscuro` | Navbar, fondo hero, botones primarios, badges activos |
| `--dorado` | Acentos, botón "Ver Proyectos", paginación "Ver todos" |
| `--teal` | Acentos secundarios |
| `--texto-primario` | Color del texto principal |
| `--texto-secundario` | Textos de apoyo, subtítulos, labels |
| `--fondo-pagina` | Fondo general de la página |
| `--blanco` | Fondos de tarjetas y modales |
| `--borde` | Color de bordes y separadores |

### Cambiar tipografía

```css
--fuente-titulo: 'Playfair Display', serif;   /* títulos y encabezados */
--fuente-cuerpo: 'Inter', sans-serif;         /* texto normal */
```

Cambia la fuente aquí y en el `<link>` de Google Fonts en `index.html`.

---

## Guía de edición — `js/app.js`

Solo es necesario editar este archivo en los siguientes casos:

### Cambiar proyectos destacados del footer

Busca el array `[9, 12, 13, 20, 21]` dentro de `renderFooter()` y reemplaza los IDs con los proyectos que quieras destacar:

```js
${[9, 12, 13, 20, 21].map(id => { ... })
//  ↑ cambia estos IDs por los que quieras mostrar en el footer
```

### Cambiar datos de contacto del footer

Dentro de `renderFooter()`, edita los enlaces de la Columna 3:

```js
<a href="mailto:tecnologia@cortesuprema.gov.co">✉️ tecnologia@...</a>
<a href="https://maps.app.goo.gl/...">📍 Dirección</a>
```

### Agregar un ingeniero nuevo al filtro de búsqueda

Cuando agregues una persona nueva al equipo en `datos.js`, registra sus alias en el objeto `ALIAS_INGENIEROS` de `app.js`:

```js
const ALIAS_INGENIEROS = {
  // ...entradas existentes...
  "nombre completo en minúsculas": ["alias corto", "otra variante"],
  // Ejemplo:
  "pedro pablo garcia lopez": ["pedro g", "pedro"],
};
```

El alias corto debe coincidir exactamente con lo que escribes en los campos `liderTecnico`, `equipo` o `equipoApoyo` de los proyectos.

### Ajustar el organigrama interactivo

Las constantes al inicio de `renderOrganigramaInteractivo()` controlan el tamaño visual:

```js
const U        = 108;   // tamaño de celda de la cuadrícula en px
const NW       = 86;    // ancho de cada nodo en px
const NH       = 74;    // alto de cada nodo en px
const ZOOM_MIN = 0.30;  // zoom mínimo (30%)
const ZOOM_MAX = 1.4;   // zoom máximo (140%)
const ZOOM_INI = 0.52;  // zoom al cargar (52%)
```

Los nodos se posicionan en coordenadas de cuadrícula `[gridX, gridY]` dentro del array `nodes`.

---

## Actualizar imagen del organigrama estático

Reemplaza el archivo en:
```
assets/imagenes/organigrama_2026_oficina_tecnologia.png
```
La imagen se escala automáticamente al ancho disponible.

---

## Vista de Proyectos — Filtros disponibles

| Filtro | Cómo funciona |
|---|---|
| **Buscador de texto** | Busca en título, subtítulo, descripción, líder, equipo y apoyo. También acepta el nombre completo del ingeniero (ej: "David Alzate") |
| **Categoría** | Botones de filtro por categoría. Un proyecto puede pertenecer a varias |
| **Profesional** | Selector con todos los miembros del equipo. Busca en líder de proceso, equipo de desarrollo y equipo de apoyo |
| **Estado** | Filtra por estado del proyecto |
| **Mostrar** | Controla cuántos proyectos se muestran por página: 6, 10, 20, 30, 40 o 50 |

---

## Despliegue en el servidor de la Corte

1. Comprime la carpeta `portal-tecnologia/`
2. Sube al servidor web (Apache o IIS)
3. Apunta el dominio o subdominio a la carpeta raíz
4. No requiere base de datos ni lenguaje de servidor — es HTML/CSS/JS puro
