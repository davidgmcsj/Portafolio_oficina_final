// ============================================================
//  LÓGICA PRINCIPAL — js/app.js
//  NOTA: El CONTENIDO (textos, proyectos) se edita en js/datos.js
// ============================================================

// ── Estado global de la aplicación ───────────────────────────
// Estos valores cambian cuando el usuario interactúa con los filtros
let categoriaActiva    = "Todas";   // categoría seleccionada en los botones de filtro
let busqueda           = "";        // texto ingresado en el buscador
let proyectoAbierto    = null;      // id del proyecto cuyo modal está abierto
let vistaActual        = "principal"; // "principal" | "proyectos"

// ── Inicialización ─────────────────────────────────────────
// Se ejecuta cuando el DOM está listo; construye todos los bloques de la página
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderHome();
  renderProyectos();
  renderOrganigrama();
  renderOrganigramaInteractivo();
  renderFooter();
  initScrollBehavior();
  initScrollTop();
  marcarNavActivo();

  // Si la URL tiene #proyectos (p.ej. al compartir el enlace), abre esa vista directamente
  if (window.location.hash === "#proyectos") {
    mostrarVista("proyectos");
  }
});

// ── CAMBIO DE VISTA (SPA) ───────────────────────────────────
// Alterna entre la vista principal (inicio/equipo) y la vista de proyectos
// sin recargar la página; actualiza el hash de la URL para que sea compartible
function mostrarVista(vista) {
  vistaActual = vista;
  const vPrincipal = document.getElementById("vista-principal");
  const vProyectos = document.getElementById("vista-proyectos");
  const footer     = document.getElementById("footer");

  if (vista === "proyectos") {
    vPrincipal.style.display = "none";
    vProyectos.style.display = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.hash = "proyectos";
    // Resalta el enlace "Proyectos" en la navbar
    document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("activo"));
    const lnk = document.querySelector('[data-seccion="proyectos"]');
    if (lnk) lnk.classList.add("activo");
  } else {
    vProyectos.style.display = "none";
    vPrincipal.style.display = "";
    footer.style.display = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.hash = "";
  }
}

// ── NAVBAR ─────────────────────────────────────────────────
// Inyecta la barra de navegación y enlaza los clics a las secciones o vistas
function renderNavbar() {
  const nav = document.getElementById("navbar");
  nav.innerHTML = `
    <nav class="navbar" id="navbar-barra">
      <img src="assets/imagenes/logo_institucional.png" alt="Logo Institucional"
           style="position: absolute; top: -40px; left: 10px; height: 230px; z-index: 1100; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">      <div class="navbar-inner">
        <a href="#inicio" class="navbar-brand" id="brand-inicio">
          <svg viewBox="0 0 40 40" width="38" height="38" style="flex-shrink:0">
            <circle cx="20" cy="20" r="18" fill="#1a2a5e"/>
            <path d="M10 12h20v12H10z M12 14v8h16v-8z M18 24h4v4h-4z M14 28h12v2H14z" fill="#c8972a"/>
          </svg>
          <div class="navbar-brand-text">
            <span>Oficina de Tecnología</span>
            <span>Corte Suprema de Justicia</span>
          </div>
        </a>
        <ul class="navbar-nav" id="nav-links">
          <li><a href="#inicio"      class="nav-link" data-seccion="inicio">Inicio</a></li>
          <li><a href="#mision"      class="nav-link" data-seccion="mision">Direccionamiento Estratégico</a></li>
          <li><a href="#organigrama" class="nav-link" data-seccion="organigrama">Equipo</a></li>
          <li><a href="#proyectos"   class="nav-link" data-seccion="proyectos">Proyectos</a></li>
        </ul>
      </div>
    </nav>
  `;

  // Logo/brand → siempre vuelve al inicio principal
  document.getElementById("brand-inicio").addEventListener("click", e => {
    e.preventDefault();
    mostrarVista("principal");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Navegación de los enlaces
  nav.querySelectorAll(".nav-link").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const seccion = a.dataset.seccion;

      if (seccion === "proyectos") {
        mostrarVista("proyectos");
        return;
      }

      // Para secciones del principal: asegurar que la vista sea la correcta y luego hacer scroll
      mostrarVista("principal");
      // Pequeño delay para que el DOM sea visible antes de hacer scroll
      setTimeout(() => {
        const target = document.getElementById(seccion);
        if (target) window.scrollTo({ top: target.offsetTop - 75, behavior: "smooth" });
      }, 50);
    });
  });
}

// ── MARCAR ENLACE ACTIVO EN NAVBAR ─────────────────────────
// Usa IntersectionObserver para resaltar el enlace del menú según la sección visible
function marcarNavActivo() {
  const secciones = ["inicio", "mision", "organigrama", "proyectos"];
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("activo"));
          const activo = document.querySelector(`[data-seccion="${entry.target.id}"]`);
          if (activo) activo.classList.add("activo");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  secciones.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ── HOME / INICIO ──────────────────────────────────────────
// Construye el hero con estadísticas y la sección de misión/visión/valores
// usando los datos de OFICINA_INFO definidos en datos.js
function renderHome() {
  const hero = document.getElementById("hero");
  const { titulo, subtitulo, stats } = OFICINA_INFO;

  hero.innerHTML = `
    <section class="hero" id="inicio" style="position: relative;">
      
      <div class="hero-inner">
        <div class="hero-badge">República de Colombia</div>
        <h1 class="hero-titulo-corte">Corte Suprema de Justicia</h1>
        <div class="hero-bandera" aria-hidden="true">
          <div class="hero-bandera-amarillo"></div>
          <div class="hero-bandera-azul"></div>
          <div class="hero-bandera-rojo"></div>
        </div>
        <p class="hero-subtitulo-oficina">Oficina de <em>Tecnología</em></p>
        <p class="hero-tagline">Innovación Tecnológica al servicio de la Justicia</p>
        <div class="hero-stats">
          ${stats.map(s => `
            <div class="hero-stat">
              <div class="hero-stat-numero">${s.numero}</div>
              <div class="hero-stat-label">${s.label}</div>
            </div>
          `).join("")}
        </div>
        <div class="hero-acciones">
          <a href="#proyectos" class="btn btn-primario" onclick="event.preventDefault();mostrarVista('proyectos')">
            📋 Ver Proyectos
          </a>
          <a href="#organigrama" class="btn btn-secundario" onclick="event.preventDefault();document.getElementById('organigrama').scrollIntoView({behavior:'smooth',block:'start'})">
            👥 Nuestro Equipo
          </a>
        </div>
      </div>
    </section>
  `;

  // Sección misión/visión/valores
  const mision = document.getElementById("mision-section");
  mision.innerHTML = `
    <section class="seccion seccion--fondo" id="mision">
      <div class="seccion-titulo">Direccionamiento Estratégico</div>
      
      <!-- Misión y Visión en dos columnas -->
      <div class="mision-vision-grid" style="margin-top: 32px;">
        <div>
          <div class="seccion-titulo" style="font-size: 1.5rem;">Misión</div>
          <p class="seccion-subtitulo">${OFICINA_INFO.mision}</p>
        </div>
        <div>
          <div class="seccion-titulo" style="font-size: 1.5rem;">Visión</div>
          <p class="seccion-subtitulo">${OFICINA_INFO.vision}</p>
        </div>
      </div>

      <div style="margin-top:48px">
        <div class="seccion-titulo" style="font-size: 1.5rem;">Valores</div>
        <div class="grid-valores">
          ${OFICINA_INFO.valores.map(v => `
            <div class="card-valor">
              <span class="card-valor-icono">${v.icono}</span>
              <h3>${v.nombre}</h3>
              <p>${v.descripcion}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

// ── PROYECTOS ──────────────────────────────────────────────
const PROY_POR_PAG = 6;         // valor por defecto de proyectos por página
let paginaActual      = 1;
let mostrarTodos      = false;
let proyPorPagActual  = PROY_POR_PAG; // cantidad activa: 6, 10, 20, 30, 40 o 50
let profesionalFiltro = "";           // nombre completo del profesional seleccionado
let estadoFiltroActivo = "todos";     // estado activo del filtro de estado

// Construye la estructura HTML de la vista de proyectos y enlaza todos los filtros
function renderProyectos() {
  const section = document.getElementById("proyectos-section");

  // Lista de profesionales: se extraen todos los nombres definidos en la constante EQUIPO
  const profesionales = EQUIPO.map(p => p.nombre).sort();

  section.innerHTML = `
    <section class="seccion" id="proyectos">
      <div style="margin-bottom:24px">
        <button onclick="mostrarVista('principal')" class="btn-volver">← Volver al Inicio</button>
      </div>
      <div class="seccion-titulo">Proyectos Tecnológicos</div>
      <p class="seccion-subtitulo">Gestión y seguimiento de los 43 proyectos de innovación tecnológica de la Corte Suprema de Justicia.</p>

      <!-- Controles principales -->
      <div class="proyectos-controles" style="margin-top:32px">
        <div class="buscador-wrap">
          <span class="buscador-icono">🔍</span>
          <input type="text" id="buscador" placeholder="Buscar proyecto, ingeniero, descripción..." autocomplete="off">
        </div>
        <div class="filtros-wrap" id="filtros-categoria">
          ${CATEGORIAS.map(c => `
            <button class="btn-filtro ${c === 'Todas' ? 'activo' : ''}" data-categoria="${c}">${c}</button>
          `).join("")}
        </div>
      </div>

      <!-- Fila: filtro profesional + filtro estado -->
      <div class="filtros-fila" style="margin-top:14px;margin-bottom:8px">
        <div class="filtro-profesional-wrap">
          <select id="filtro-profesional">
            <option value="">Todos los profesionales</option>
            ${profesionales.map(pr => `<option value="${pr}">${pr}</option>`).join("")}
          </select>
        </div>
        <div class="filtros-estado" id="filtros-estado">
          <span style="font-size:0.8rem;color:var(--texto-secundario);font-weight:600;align-self:center">Estado:</span>
          <button class="badge-estado activo" data-estado="todos" style="background:var(--azul-oscuro);color:white;border:1.5px solid var(--azul-oscuro)">Todos</button>
          ${Object.entries(ESTADOS).map(([k, v]) => `
            <button class="badge-estado" data-estado="${k}" style="background:${v.bg};color:${v.color};border:1.5px solid ${v.color}">${v.label}</button>
          `).join("")}
        </div>
      </div>

      <!-- Fila: cantidad por página -->
      <div class="filtros-fila" id="filtros-cantidad" style="margin-top:6px;margin-bottom:8px;align-items:center">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span style="font-size:0.8rem;color:var(--texto-secundario);font-weight:600">Mostrar:</span>
          ${[6,10,20,30,40,50].map(n => `
            <button class="btn-cantidad ${n === proyPorPagActual ? 'activo' : ''}" data-cantidad="${n}">${n}</button>
          `).join("")}
        </div>
      </div>

      <div id="paginacion" class="paginacion-wrap"></div>
      <p class="resultados-contador" id="contador-resultados"></p>
      <div id="grid-proyectos"></div>
    </section>
  `;

  // Buscador
  document.getElementById("buscador").addEventListener("input", e => {
    busqueda = e.target.value.toLowerCase();
    paginaActual = 1;
    filtrarYRenderCards();
  });

  // Filtro categoría
  document.getElementById("filtros-categoria").addEventListener("click", e => {
    if (e.target.classList.contains("btn-filtro")) {
      document.querySelectorAll(".btn-filtro").forEach(b => b.classList.remove("activo"));
      e.target.classList.add("activo");
      categoriaActiva = e.target.dataset.categoria;
      paginaActual = 1;
      filtrarYRenderCards();
    }
  });

  // Filtro profesional
  document.getElementById("filtro-profesional").addEventListener("change", e => {
    profesionalFiltro = e.target.value;
    paginaActual = 1;
    filtrarYRenderCards();
  });

  // Filtro estado
  document.getElementById("filtros-estado").addEventListener("click", e => {
    if (!e.target.classList.contains("badge-estado")) return;
    document.querySelectorAll(".badge-estado").forEach(b => {
      b.style.background = ESTADOS[b.dataset.estado]?.bg || "";
      b.style.color      = ESTADOS[b.dataset.estado]?.color || "";
      b.style.borderColor= ESTADOS[b.dataset.estado]?.color || "";
      b.classList.remove("activo");
    });
    e.target.classList.add("activo");
    estadoFiltroActivo = e.target.dataset.estado;
    if (estadoFiltroActivo === "todos") {
      e.target.style.background  = "var(--azul-oscuro)";
      e.target.style.color       = "white";
      e.target.style.borderColor = "var(--azul-oscuro)";
    }
    paginaActual = 1;
    filtrarYRenderCards(estadoFiltroActivo);
  });

  // Filtro cantidad por página
  document.getElementById("filtros-cantidad").addEventListener("click", e => {
    if (!e.target.classList.contains("btn-cantidad")) return;
    document.querySelectorAll(".btn-cantidad").forEach(b => b.classList.remove("activo"));
    e.target.classList.add("activo");
    proyPorPagActual = parseInt(e.target.dataset.cantidad, 10);
    mostrarTodos = false;
    paginaActual = 1;
    filtrarYRenderCards();
  });

  filtrarYRenderCards();
}

// ── MAPA DE ALIASES DE INGENIEROS ──────────────────────────
// Relaciona el nombre completo de cada ingeniero (tal como está en EQUIPO)
// con los alias cortos usados en los campos liderTecnico / equipo / equipoApoyo
// de cada proyecto. Permite que el filtro "buscar por profesional" funcione
// aunque los proyectos usen nombres abreviados como "David A" o "Alejandro G".
// Si se agrega una persona nueva: añadir aquí su entrada con todos sus alias.
const ALIAS_INGENIEROS = {
  "aseneth quintero bernate":          ["aseneth"],
  "emirt lorenzo adams saenz":         ["emirt a", "emirt"],
  "david alejandro gonzález mateus":   ["alejandro g", "alejandro"],
  "ingrid jhulieth estacio carvajal":  ["jhulieth e", "jhulieth", "jhuliet e", "jhuliet"],
  "álvaro antonio baena rubio":        ["alvaro b", "álvaro b", "alvaro"],
  "brayan jair robayo vera":           ["brayan r", "brayan"],
  "juan carlos verano estrada":        ["juan v", "juan"],
  "steven osorio tipan":               ["steven o", "steven"],
  "cristian mauricio ortegón martínez":["cristian o", "cristian"],
  "moisés bernardo suárez gámez":      ["moises s", "moisés s", "moises"],
  "john ervey sánchez velandia":       ["john s", "john"],
  "david alzate gómez":                ["david a", "david"],
  "andrés esteban romero romero":      ["andres r", "andrés r", "andres"],
  "oscar andrés mancera garzón":       ["oscar m", "oscar"],
};

// Busca en ALIAS_INGENIEROS el array de aliases que corresponde al nombre
// completo recibido (normalizando tildes para evitar fallos de comparación)
function aliasesDe(nombreCompleto) {
  const key = nombreCompleto.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  // quita tildes para comparar
    .trim();
  // Busca la entrada cuya clave normalizada coincida
  for (const [k, aliases] of Object.entries(ALIAS_INGENIEROS)) {
    const kNorm = k.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (kNorm === key || k === nombreCompleto.toLowerCase().trim()) {
      return aliases;
    }
  }
  // Fallback: coincidencia parcial por apellido o primer nombre
  const partes = key.split(/\s+/);
  for (const [k, aliases] of Object.entries(ALIAS_INGENIEROS)) {
    const kNorm = k.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (partes.some(p => p.length > 3 && kNorm.includes(p))) return aliases;
  }
  return [nombreCompleto.toLowerCase()];
}

// Compara un token individual (ej: "David A") contra la lista de aliases
// del ingeniero seleccionado, normalizando tildes y puntos
function tokenMatchAliases(token, aliases) {
  const t = token.replace(/\./g, "").toLowerCase().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return aliases.some(alias => {
    const a = alias.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return t === a;
  });
}

// Divide "Juan V / Steven O" → ["Juan V", "Steven O"] para comparar uno a uno
function tokenizarCampo(campo) {
  return (campo || "").split(/[/,]+/).map(s => s.trim()).filter(Boolean);
}

// Aplica los cuatro filtros activos y devuelve el subconjunto de proyectos que los cumple
function obtenerProyectosFiltrados() {
  return PROYECTOS.filter(p => {

    // 1. Buscador de texto: busca en título, subtítulo, descripción y campos de equipo
    const camposTexto = [
      p.titulo, p.subtitulo, p.descripcion,
      p.liderTecnico, p.equipo, p.equipoApoyo
    ].map(c => (c || "").toLowerCase()).join(" ");

    // Si no hay coincidencia directa, intenta resolver el texto escrito como nombre
    // completo de ingeniero y buscar sus proyectos via el mapa de aliases
    let matchBusqueda = !busqueda || camposTexto.includes(busqueda);
    if (!matchBusqueda && busqueda.length >= 3) {
      for (const [nombreCompleto, aliases] of Object.entries(ALIAS_INGENIEROS)) {
        const ncNorm = nombreCompleto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const bNorm  = busqueda.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (ncNorm.includes(bNorm)) {
          const inLider  = tokenizarCampo(p.liderTecnico).some(t => tokenMatchAliases(t, aliases));
          const inEquipo = tokenizarCampo(p.equipo).some(t => tokenMatchAliases(t, aliases));
          const inApoyo  = tokenizarCampo(p.equipoApoyo).some(t => tokenMatchAliases(t, aliases));
          if (inLider || inEquipo || inApoyo) { matchBusqueda = true; break; }
        }
      }
    }

    // 2. Filtro de categoría: un proyecto puede tener varias categorías (array)
    const cats = Array.isArray(p.categorias) ? p.categorias : [p.categorias];
    const matchCategoria = categoriaActiva === "Todas" || cats.includes(categoriaActiva);

    // 3. Filtro de estado
    const matchEstado = estadoFiltroActivo === "todos" || p.estado === estadoFiltroActivo;

    // 4. Filtro de profesional: resuelve el nombre completo a aliases y busca
    //    en líder de proceso, equipo de desarrollo y equipo de apoyo/soporte
    let matchProfesional = true;
    if (profesionalFiltro) {
      const aliases = aliasesDe(profesionalFiltro);
      const inLider  = tokenizarCampo(p.liderTecnico).some(t => tokenMatchAliases(t, aliases));
      const inEquipo = tokenizarCampo(p.equipo).some(t => tokenMatchAliases(t, aliases));
      const inApoyo  = tokenizarCampo(p.equipoApoyo).some(t => tokenMatchAliases(t, aliases));
      matchProfesional = inLider || inEquipo || inApoyo;
    }

    return matchBusqueda && matchCategoria && matchEstado && matchProfesional;
  });
}

// Recalcula los proyectos visibles según los filtros activos y repinta el grid y la paginación
function filtrarYRenderCards(estado) {
  if (estado !== undefined) estadoFiltroActivo = estado;

  const filtrados = obtenerProyectosFiltrados();
  const total     = filtrados.length;
  const totalPags = Math.ceil(total / proyPorPagActual);

  // Evita quedar en una página que ya no existe si los filtros reducen el total
  if (paginaActual > totalPags && totalPags > 0) paginaActual = totalPags;

  // Recorta el slice de la página actual, o muestra todo si está activado "Ver todos"
  const visibles = mostrarTodos
    ? filtrados
    : filtrados.slice((paginaActual - 1) * proyPorPagActual, paginaActual * proyPorPagActual);

  // Actualiza el contador "Mostrando X de Y proyectos"
  const contador = document.getElementById("contador-resultados");
  if (contador) {
    contador.innerHTML = `Mostrando <strong>${visibles.length}</strong> de <strong>${total}</strong> proyectos`;
  }

  // Pinta el grid de tarjetas
  const grid = document.getElementById("grid-proyectos");
  if (!grid) return;

  if (filtrados.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--texto-secundario)">
        <div style="font-size:3rem;margin-bottom:12px">🔍</div>
        <h3 style="margin-bottom:8px;color:var(--azul-oscuro)">No se encontraron proyectos</h3>
        <p>Intenta con otros filtros o términos de búsqueda.</p>
      </div>`;
    document.getElementById("paginacion").innerHTML = "";
    return;
  }

  grid.innerHTML = visibles.map((p, i) => {
    const est  = ESTADOS[p.estado] || { label: p.estado, color: "#616161", bg: "#F5F5F5" };
    const cats = Array.isArray(p.categorias) ? p.categorias : [p.categorias];
    return `
      <div class="card-proyecto" style="animation-delay:${i * 0.04}s" onclick="abrirModal(${p.id})">
        <div class="card-proyecto-header">
          <div class="card-numero">${String(p.id).padStart(2, "0")}</div>
          <h3>${p.titulo}</h3>
        </div>
        <p class="card-subtitulo-text">${p.subtitulo}</p>
        <div class="card-info-grid">
          <div class="card-info-row">
            <span class="card-info-label">Estado</span>
            <span class="badge" style="background:${est.bg};color:${est.color};font-size:0.72rem">${est.label}</span>
          </div>
          <div class="card-info-row">
            <span class="card-info-label">Líder proceso</span>
            <span class="card-info-valor">👤 ${p.liderTecnico || "—"}</span>
          </div>
          <div class="card-info-row">
            <span class="card-info-label">Equipo</span>
            <span class="card-info-valor">${p.equipo ? "👥 " + p.equipo : "—"}</span>
          </div>
          <div class="card-info-row">
            <span class="card-info-label">Categoría</span>
            <span class="card-info-valor">${cats.map(c => `<span class="badge" style="background:var(--fondo-pagina);color:var(--texto-secundario);font-size:0.7rem">${c}</span>`).join(" ")}</span>
          </div>
        </div>
        <div class="card-proyecto-footer">
          <div class="progreso-wrap">
            <div class="progreso-label"><span>Avance</span><span>${p.avance}%</span></div>
            <div class="progreso-barra"><div class="progreso-fill" style="width:${p.avance}%"></div></div>
          </div>
        </div>
      </div>`;
  }).join("");

  // Paginación
  renderPaginacion(total, totalPags);
}

// Dibuja los controles de paginación: botones de página, anterior/siguiente y "Ver todos"
function renderPaginacion(total, totalPags) {
  const container = document.getElementById("paginacion");
  if (!container) return;

  if (mostrarTodos) {
    container.innerHTML = `
      <button class="btn-pag btn-pag-todos activo" onclick="mostrarTodos=false;paginaActual=1;filtrarYRenderCards()">
        Paginar (${proyPorPagActual} por página)
      </button>`;
    return;
  }
  if (totalPags <= 1 && total <= proyPorPagActual) {
    container.innerHTML = "";
    return;
  }
  let html = `<button class="btn-pag" onclick="irPagina(${paginaActual - 1})" ${paginaActual === 1 ? "disabled" : ""}>‹</button>`;
  for (let i = 1; i <= totalPags; i++) {
    html += `<button class="btn-pag ${i === paginaActual ? "activo" : ""}" onclick="irPagina(${i})">${i}</button>`;
  }
  html += `<button class="btn-pag" onclick="irPagina(${paginaActual + 1})" ${paginaActual === totalPags ? "disabled" : ""}>›</button>`;
  html += `<button class="btn-pag btn-pag-todos" onclick="mostrarTodos=true;filtrarYRenderCards()">Ver todos (${total})</button>`;
  container.innerHTML = html;
}

// Navega a la página indicada; hace scroll suave hasta los controles de paginación
function irPagina(n) {
  const filtrados = obtenerProyectosFiltrados();
  const totalPags = Math.ceil(filtrados.length / proyPorPagActual);

  if (n < 1 || n > totalPags) return;
  paginaActual = n;
  filtrarYRenderCards();
  document.getElementById("paginacion")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ── MODAL DE PROYECTO ───────────────────────────────────────
// Abre el modal con el detalle completo del proyecto: metadatos, descripción,
// barra de avance, media (video o imagen) y enlace al sistema
function abrirModal(id) {
  const p = PROYECTOS.find(x => x.id === id);
  if (!p) return;
  proyectoAbierto = id;

  const estado = ESTADOS[p.estado] || { label: p.estado, color: "#616161", bg: "#F5F5F5" };
  const cats   = Array.isArray(p.categorias) ? p.categorias : [p.categorias];
  const overlay = document.getElementById("modal-overlay");

  // Decide qué mostrar en el bloque multimedia: video embed, imágenes (una o varias), o nada
  let mediaHTML = "";
  if (p.video) {
    const embedUrl = p.video.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/");
    mediaHTML = `
      <div class="modal-media">
        <iframe src="${embedUrl}" allowfullscreen loading="lazy" title="${p.titulo}"></iframe>
      </div>
    `;
  } else if (p.imagenes && Array.isArray(p.imagenes) && p.imagenes.length > 0) {
    mediaHTML = `
      <div class="modal-galeria">
        ${p.imagenes.map(img => `
          <div class="modal-media">
            <img src="${img}" alt="${p.titulo}" loading="lazy">
          </div>
        `).join("")}
      </div>
    `;
  } else if (p.imagen) {
    mediaHTML = `
      <div class="modal-media">
        <img src="${p.imagen}" alt="${p.titulo}" loading="lazy">
      </div>
    `;
  }

  const tieneEnlace = p.enlace && p.enlace !== "#";
  const btnEnlace = tieneEnlace
    ? `<a href="${p.enlace}" target="_blank" rel="noopener" class="modal-enlace">🔗 Ir al Sistema / Desarrollo ↗</a>`
    : ``;

  overlay.querySelector(".modal-content").innerHTML = `
  <div class="modal-header">
    <div class="modal-header-top">
      <span class="modal-numero">Proyecto ${String(p.id).padStart(2, "0")} — ${cats.join(" · ")}</span>
      <button class="modal-cerrar" onclick="cerrarModal()">✕</button>
    </div>
    <h2 class="modal-titulo">${p.titulo}</h2>
  </div>
  <div class="modal-body">
    <!-- Metadatos -->
    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Estado</span>
        <span class="badge" style="background:${estado.bg};color:${estado.color}">${estado.label}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Líder proceso</span>
        <span class="modal-meta-valor">👤 ${p.liderTecnico || '—'}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Equipo desarrollo</span>
        <span class="modal-meta-valor">👥 ${p.equipo || '—'}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Equipo soporte/apoyo</span>
        <span class="modal-meta-valor">🛠️ ${p.equipoApoyo || '—'}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Categoría</span>
        <span class="modal-meta-valor">🏷️ ${cats.join(" · ")}</span>
      </div>
    </div>
      <!-- Descripción -->
      <div>
        <h3 style="font-family:var(--fuente-titulo);font-size:1rem;color:var(--azul-oscuro);margin-bottom:10px">Descripción del proyecto</h3>
        <p class="modal-descripcion">${p.descripcion}</p>
      </div>

      <!-- Progreso -->
      <div class="modal-progreso">
        <div class="modal-progreso-header">
          <h4>Avance del proyecto</h4>
          <span class="modal-progreso-pct">${p.avance}%</span>
        </div>
        <div class="modal-progreso-barra">
          <div class="modal-progreso-fill" style="width:${p.avance}%"></div>
        </div>
      </div>

      <!-- Media -->
      ${mediaHTML}

      <!-- Enlace -->
      ${tieneEnlace ? `<div>${btnEnlace}</div>` : ""}
    </div>
  `;

  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

// Cierra el modal y restaura el scroll de la página
function cerrarModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
  proyectoAbierto = null;
}

// Permite cerrar el modal con la tecla Escape (el clic fuera está en el HTML del overlay)
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarModal(); });

// ── EQUIPO / ORGANIGRAMA ────────────────────────────────────
// Genera las tarjetas del equipo (con avatar o iniciales) y la imagen del organigrama estático
function renderOrganigrama() {
  const section = document.getElementById("organigrama-section");

  const tarjetas = EQUIPO.map(p => {
    const iniciales = p.nombre.split(" ").slice(0, 2).map(w => w[0]).join("");
    const avatarInner = p.foto
      ? `<img src="${p.foto}" alt="${p.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        + `<span style="display:none;align-items:center;justify-content:center;width:100%;height:100%">${iniciales}</span>`
      : `<span>${iniciales}</span>`;
    return `
      <div class="equipo-card">
        <div class="equipo-avatar">${avatarInner}</div>
        <div class="equipo-nombre">${p.nombre}</div>
        <div class="equipo-grado">${p.grado}</div>
        ${p.cargo ? `<div class="equipo-cargo">${p.cargo}</div>` : ""}
        <div class="equipo-overlay">
          <div class="equipo-overlay-nombre">${p.nombre}</div>
          <div class="equipo-overlay-funcion">${p.funcion}</div>
        </div>
      </div>
    `;
  }).join("");

  section.innerHTML = `
    <div class="seccion seccion--fondo" id="organigrama">
      <div class="seccion-titulo">Nuestro Equipo</div>
      <p class="seccion-subtitulo">Conoce a los 14 profesionales de la Oficina de Tecnología — pasa el cursor sobre cada persona para ver su función.</p>
      <div class="equipo-grid">
        ${tarjetas}
      </div>

      <div style="margin-top:56px">
        <div class="seccion-titulo" style="font-size:1.3rem">Organigrama</div>
        <p class="seccion-subtitulo">Estructura organizacional de la Oficina de Tecnología — Corte Suprema de Justicia.</p>
        <div class="organigrama-imagen-wrapper">
          <img
            src="assets/imagenes/organigrama_2026_oficina_tecnologia.png"
            alt="Organigrama Oficina de Tecnología 2026"
            class="organigrama-imagen"
          >
        </div>
      </div>
    </div>
  `;
}

// ── FOOTER ─────────────────────────────────────────────────
// Inyecta el footer con navegación, proyectos destacados e información de contacto
// Para cambiar proyectos destacados edita el array [9, 12, 13, 20, 21] dentro de esta función
function renderFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <footer>
      <div class="footer-inner">
        <!-- Columna 1: Identidad + navegación -->
        <div class="footer-col">
          <h4>Oficina de Tecnología</h4>
          <a href="#inicio"      onclick="event.preventDefault();mostrarVista('principal');setTimeout(()=>document.getElementById('inicio')?.scrollIntoView({behavior:'smooth'}),50)">Inicio</a>
          <a href="#mision"      onclick="event.preventDefault();mostrarVista('principal');setTimeout(()=>document.getElementById('mision')?.scrollIntoView({behavior:'smooth'}),50)">Direccionamiento Estratégico</a>
          <a href="#organigrama" onclick="event.preventDefault();mostrarVista('principal');setTimeout(()=>document.getElementById('organigrama')?.scrollIntoView({behavior:'smooth'}),50)">Nuestro Equipo</a>
          <a href="#proyectos"   onclick="event.preventDefault();mostrarVista('proyectos')">Proyectos</a>
        </div>
        <!-- Columna 2: Proyectos destacados -->
        <div class="footer-col">
          <h4>Proyectos Destacados</h4>
          ${[9, 12, 13, 20, 21].map(id => {
            const p = PROYECTOS.find(x => x.id === id);
            return p ? `<a href="#" onclick="event.preventDefault();mostrarVista('proyectos');setTimeout(()=>abrirModal(${p.id}),50)">${p.titulo}</a>` : "";
          }).join("")}
        </div>
        <!-- Columna 3: Información -->
        <div class="footer-col">
          <h4>Información</h4>
          <a href="https://cortesuprema.gov.co/" target="_blank" rel="noopener">Corte Suprema de Justicia</a>
          <a href="mailto:tecnologia@cortesuprema.gov.co" style="margin-top:6px">✉️ tecnologia@cortesuprema.gov.co</a>
          <a href="https://maps.app.goo.gl/csNwYwV3U7vRiUfg9" target="_blank" rel="noopener" style="margin-top:6px">📍 Cra. 7 #17-64, La Candelaria, Bogotá</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Oficina de Tecnología — Corte Suprema de Justicia. Todos los derechos reservados.</p>
        <p>Desarrollado internamente por la Oficina de Tecnología - Corte Suprema de Justicia</p>
      </div>
    </footer>
  `;

}

// ── SCROLL BEHAVIOR ─────────────────────────────────────────
// Agrega sombra a la navbar al hacer scroll para dar sensación de profundidad
function initScrollBehavior() {
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar-barra");
    if (navbar) {
      if (window.scrollY > 60) navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
      else navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.3)";
    }
  });
}

// Muestra u oculta el botón "↑ volver arriba" según la posición del scroll
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ── ORGANIGRAMA INTERACTIVO ─────────────────────────────────
// Construye el organigrama SVG con nodos arrastrables, zoom con rueda del ratón
// y tooltips al pasar el cursor. Los nodos y conexiones se definen en los arrays
// nodes y edges dentro de esta función — edítalos para cambiar la estructura.
function renderOrganigramaInteractivo() {
  const section = document.getElementById("org-interactivo-section");
  if (!section) return;

  // Ajustes visuales — modificar estos valores cambia el tamaño y zoom del diagrama
  const U        = 108;   // px por unidad de cuadrícula
  const NW       = 86;    // ancho de nodo px
  const NH       = 74;    // alto de nodo px
  const ZOOM_MIN = 0.30;  // zoom mínimo (30%)
  const ZOOM_MAX = 1.4;   // zoom máximo (140%)
  const ZOOM_INI = 0.52;  // zoom al cargar (52%)
  const HW = NW / 2, HH = NH / 2; // mitad de nodo para calcular centros

  // [id, gridX, gridY, tipo, nombre, cargo, funcion]
  const nodes = [
    // Cadena principal
    ["aseneth",    6,    0,    "coord",    "Aseneth",                  "Líder Oficina Tecnología",          "Dirección y coordinación estratégica de la Oficina de Tecnología"],
    ["emirt",      6,    1, "lider",    "Emirt A",                  "Líder Tecnologías y Aplic.\nProf. G.20","Liderazgo técnico de plataformas y aplicaciones institucionales. Coordinación de los proyectos de desarrollo de software"],
    ["alejandro",  6,    2,  "lider",    "Alejandro G",              "Ingeniero Proyectos TI\nProf. G.18","Ingeniero de Gestión de proyectos e infraestructura"],
    
    // Nivel 3 (Y=5.6) - Grupos y Equipos
    ["c-entraid",  1.25, 4,  "grupo",    "Célula EntraID", "Célula de Trabajo",                 "Gestión de identidades EntraID e interoperabilidad de sistemas"],
    ["c-esav",     3.45, 4,  "grupo",    "Célula ESAV",              "Célula de Trabajo",                 "Desarrollo del Ecosistema Digital de Acciones Virtuales"],
    ["c-super",    5.65, 4,  "grupo",    "Célula Super Supremo",     "Célula de Trabajo",                 "Desarrollo del sistema Super Supremo"],
    ["infra",      11 ,2,  "grpverde", "Equipo\nInfraestructura",  "Soporte Técnico",                   "Soporte técnico y gestión de infraestructura tecnológica"],
    ["transversal",14.5, 6,  "extNaran", "Equipo Transversal",       "Equipo de Apoyo",                   "Equipo de apoyo transversal a la Oficina de Tecnología"],
    
    // Nivel 4 (Y=7.5) - Ingenieros
    ["alvaro",     0.7,  6,  "prof",     "Álvaro B",                 "Profesional G.20",                  "Ingeniero de desarrollo"],
    ["brayan",     1.8,  6,  "prof",     "Brayan R",                 "Técnico G.13",                      "Ingeniero de desarrollo"],
    ["juan",       2.9,  6,  "prof",     "Juan V",                   "Profesional G.20",                  "Ingeniero de desarrollo y soporte"],
    ["steven",     4.0,  6,  "prof",     "Steven O",                 "Profesional G.18",                  "Ingeniero de desarrollo y soporte"],
    ["cristian",   5.1,  6,  "prof",     "Cristian O",               "Profesional G.18",                  "Ingeniero de desarrollo y datos"],
    ["moises",     6.2,  6,  "mojiRojo", "Moisés S",                 "Profesional G.18",                  "Ingeniero de desarrollo"],
    ["john",       7.4,  6,  "ind",      "John S",                   "Operador Sist. G.18",               "Operador de Sistemas e Ingeniero de enlace directo con la Sala Laboral y Oficina de Comunicaciones"],
    ["david",      8.5,  6,  "ind",      "David A",                  "Técnico G.13",                      "Ingeniero de desarrollo"],
    ["andres",     9.6,  6,  "ind",      "Andrés R",                 "Técnico G.13",                      "Ingeniero de diseño y desarrollo"],
    ["oscar",      10.7, 6,  "ind",      "Oscar M",                  "Técnico G.13",                      "Ingeniero de desarrollo"],
    ["jhulieth",   12.5, 6,  "mojiRojo", "Jhulieth E",               "Aux. Judicial G.03",                "Ingeniera de infraestructura, solicitudes transversales y enlace directo con la Sala Penal, Sala Civil, Secretaria General"],
    ["mesa",       12.5, 7,  "grpEsp",   "Mesa de Ayuda",            "Soporte a Usuarios",                "Atención y resolución de solicitudes de soporte tecnológico"],

    // Externo
    ["presidencia",9.5,  0,    "extRojo",  "Presidencia",              "",                   "Relación transversal con la Presidencia de la Corte Suprema de Justicia"],
    ];
  // ── Conexiones [from, to, estilo, color, flags] ──────────
  const edges = [
    // Cadena principal
    ["aseneth",    "emirt",        "s","#1a2a5e", ""],
    ["emirt",      "alejandro",    "s","#1a2a5e", ""],

    // Bus Left (Emirt & Alejandro → Células)
    ["emirt",      "c-entraid",    "d","#0e7490", "busC"],
    ["emirt",      "c-esav",       "d","#0e7490", "busC"],
    ["emirt",      "c-super",      "d","#0e7490", "busC"],
    ["alejandro",  "c-entraid",    "d","#0e7490", "busC"],
    ["alejandro",  "c-esav",       "d","#0e7490", "busC"],
    ["alejandro",  "c-super",      "d","#0e7490", "busC"],

    // Conexión Alejandro → Infraestructura (Derecha → Izquierda)
    ["alejandro",  "infra",        "s","#2E7D32", "stepRL"],

    // Conexión Infraestructura → Jhulieth (Derecha → Arriba)
    ["infra",      "jhulieth",     "s","#2E7D32", "stepRT"],

    // Conexión Jhulieth → Mesa (Abajo → Arriba)
    ["jhulieth",   "mesa",         "s","#4a5568", "stepBT"],

    // Conexión Jhulieth → Transversal (Derecha → Izquierda)
    ["jhulieth",   "transversal",  "s","#E65100", "stepRL"],

    // Bus Individuales (Emirt & Alejandro → John, David, Andres, Oscar)
    ["emirt",      "john",         "d","#c8972a", "busInd"],
    ["emirt",      "david",        "d","#c8972a", "busInd"],
    ["emirt",      "andres",       "d","#c8972a", "busInd"],
    ["emirt",      "oscar",        "d","#c8972a", "busInd"],
    ["alejandro",  "john",         "d","#c8972a", "busInd"],
    ["alejandro",  "david",        "d","#c8972a", "busInd"],
    ["alejandro",  "andres",       "d","#c8972a", "busInd"],
    ["alejandro",  "oscar",        "d","#c8972a", "busInd"],

    // Células → Miembros
    ["c-entraid",  "alvaro",       "d","#0e7490", "busG"],
    ["c-entraid",  "brayan",       "d","#0e7490", "busG"],
    ["c-esav",     "juan",         "d","#0e7490", "busG"],
    ["c-esav",     "steven",       "d","#0e7490", "busG"],
    ["c-super",    "cristian",     "d","#0e7490", "busG"],
    ["c-super",    "moises",       "d","#0e7490", "busG"],

    // Presidencia → Moises & Jhulieth (Rama recta)
    ["presidencia","moises",       "s","#c0392b", "branch"],
    ["presidencia","jhulieth",     "s","#c0392b", "branch"],
  ];

  const nodeColors = {
    coord:    { bg:"#fff",    bd:"#1a2a5e",               txt:"#1a1a2e" },
    lider:    { bg:"#fff",    bd:"#0e7490",               txt:"#1a1a2e" },
    grupo:    { bg:"#2b5faa", bd:"rgba(255,255,255,0.2)", txt:"#fff" },
    grpverde: { bg:"#2E7D32", bd:"rgba(255,255,255,0.2)", txt:"#fff" },
    grpEsp:   { bg:"#4a5568", bd:"rgba(255,255,255,0.2)", txt:"#fff" },
    prof:     { bg:"#fff",    bd:"#2b5faa",               txt:"#1a1a2e" },
    ind:      { bg:"#fff",    bd:"#c8972a",               txt:"#1a1a2e" },
    mojiRojo: { bg:"#fff",    bd:"#c0392b",               txt:"#1a1a2e" },
    aux:      { bg:"#fff",    bd:"#616161",               txt:"#1a1a2e" },
    extRojo:  { bg:"#c0392b", bd:"#fff",                  txt:"#fff" },
    extNaran: { bg:"#E65100", bd:"#fff",                  txt:"#fff" },
  };

  const darkTipos = ["grupo","grpverde","grpEsp","extRojo","extNaran"];
  const isGrp = t => ["grupo","grpverde","grpEsp","extRojo","extNaran"].includes(t);
  const personSVG = c => `<svg viewBox="0 0 40 34" fill="${c}" width="20" height="18"><circle cx="20" cy="12" r="9"/><path d="M4 34 C4 24 36 24 36 34"/></svg>`;
  const groupSVG  = c => `<svg viewBox="0 0 48 34" fill="${c}" width="24" height="18"><circle cx="15" cy="12" r="8" opacity="0.7"/><path d="M1 34 C1 24 29 24 29 34" opacity="0.7"/><circle cx="33" cy="12" r="8"/><path d="M19 34 C19 24 47 24 47 34"/></svg>`;

  // Convierte coordenadas de cuadrícula a píxeles y calcula el centro de cada nodo
  const pxF = x => x * U + 10;
  const pyF = y => y * U + 10;
  const cxN = n => pxF(n[1]) + HW;
  const cyN = n => pyF(n[2]) + HH;

  // Índice rápido id → nodo para resolver las conexiones del array edges
  const nmap = {};
  nodes.forEach(n => nmap[n[0]] = n);

  // ── Generación de paths SVG para las conexiones ────────────
  // Cada flag define el tipo de trazo: bus horizontal, paso en ángulo recto, rama, etc.
  const paths = edges.map(([fid, tid, style, color, flags]) => {
    const s = nmap[fid], t = nmap[tid];
    if (!s || !t) return "";
    const dash = style === "d" ? 'stroke-dasharray="6,4"' : "";
    let d;

    if (flags === "busC") {
      // Bus horizontal para células (Encuentro en la MITAD)
      const x1 = cxN(s) - HW, y1 = cyN(s);
      const yBusH = pyF(3.8);
      const nodesCell = nodes.filter(n => n[3] === "grupo");
      const minX = Math.min(...nodesCell.map(n => cxN(n)));
      const maxX = Math.max(...nodesCell.map(n => cxN(n)));
      const xMidBus = (minX + maxX) / 2;
      const x2 = cxN(t), y2 = pyF(t[2]);
      d = `M${x1} ${y1} H${xMidBus} V${yBusH} H${x2} V${y2}`;
    } else if (flags === "busInd") {
      // Bus horizontal para individuales (Encuentro en la MITAD)
      const x1 = cxN(s) + HW, y1 = cyN(s);
      const yBusH = pyF(5); 
      const nodesInd = nodes.filter(n => n[3] === "ind");
      const minX = Math.min(...nodesInd.map(n => cxN(n)));
      const maxX = Math.max(...nodesInd.map(n => cxN(n)));
      const xMidBus = (minX + maxX) / 2;
      const x2 = cxN(t), y2 = pyF(t[2]);
      d = `M${x1} ${y1} H${xMidBus} V${yBusH} H${x2} V${y2}`;
    } else if (flags === "busG") {
      // Bus de Célula a sus miembros (Encuentro en la MITAD de sus ingenieros)
      const x1 = cxN(s), y1 = pyF(s[2]) + NH;
      const yBusH = y1 + (pyF(t[2]) - y1) * 0.5;
      const siblings = edges.filter(e => e[0] === fid).map(e => nmap[e[1]]);
      const minX = Math.min(...siblings.map(n => cxN(n)));
      const maxX = Math.max(...siblings.map(n => cxN(n)));
      const xMidBus = (minX + maxX) / 2;
      const x2 = cxN(t), y2 = pyF(t[2]);
      // Bajamos verticalmente hasta el centro de los hijos (xMidBus) y luego repartimos
      d = `M${x1} ${y1} H${xMidBus} V${yBusH} H${x2} V${y2}`;
    } else if (flags === "stepRL") {
      // Derecha → Izquierda (Alejandro → Infra / Jhulieth → Transversal)
      const x1 = cxN(s) + HW, y1 = fid === "alejandro" ? cyN(s) + 15 : cyN(s);
      const x2 = cxN(t) - HW, y2 = fid === "alejandro" ? cyN(t) + 15 : cyN(t);
      const mx = (x1 + x2) / 2;
      d = `M${x1} ${y1} H${mx} V${y2} H${x2}`;
    } else if (flags === "stepRT") {
      // Conexión Infraestructura → Jhulieth
      const x1 = cxN(s) + HW, y1 = cyN(s) + 15; // Sale 20% más abajo del medio
      const x2 = cxN(t) + 17, y2 = pyF(t[2]); // 17px es aprox 20% de 86px (NW)
      d = `M${x1} ${y1} H${x2} V${y2}`;
    } else if (flags === "stepBT") {
      // Abajo → Arriba (Jhulieth → Mesa)
      const x1 = cxN(s), y1 = pyF(s[2]) + NH;
      const x2 = cxN(t), y2 = pyF(t[2]);
      d = `M${x1} ${y1} V${y2}`;
    } else if (flags === "branch") {
      // Rama de Presidencia
      const x1 = cxN(s), y1 = cyN(s) + HH;
      const yMid = pyF(3.7); 
      let x2 = cxN(t);
      const y2 = pyF(t[2]);
      // Si es Moisés, movemos la conexión un 20% a la derecha (aprox 17px de 86px)
      if (tid === "moises") x2 += 17;
      d = `M${x1} ${y1} V${yMid} H${x2} V${y2}`;
    } else if (flags === "step") {
      // Línea en ángulo recto
      const x1 = cxN(s), y1 = cyN(s) + HH, x2 = cxN(t), y2 = pyF(t[2]);
      const my = (y1 + y2) / 2;
      d = `M${x1} ${y1} V${my} H${x2} V${y2}`;
    } else if (flags === "stepV") {
      // Línea en ángulo recto vertical-horizontal-vertical
      const x1 = cxN(s), y1 = pyF(s[2]), x2 = cxN(t), y2 = pyF(t[2]) + NH;
      d = `M${x1} ${y1} V${(y1+y2)/2} H${x2} V${y2}`;
    } else {
      // Por defecto: Línea recta o con codo simple
      const x1 = cxN(s), y1 = pyF(s[2]) + NH, x2 = cxN(t), y2 = pyF(t[2]);
      if (Math.abs(x1 - x2) < 4) {
        d = `M${x1} ${y1} L${x2} ${y2}`;
      } else {
        const my = y1 + (y2 - y1) * 0.45;
        d = `M${x1} ${y1} V${my} H${x2} V${y2}`;
      }
    }
    return `<path d="${d}" stroke="${color}" stroke-width="1.8" fill="none" ${dash}/>`;
  }).join("");

  // ── Construcción del HTML de cada nodo del organigrama ──────
  // Asigna colores según tipo, elige ícono SVG de persona o grupo, y genera el tooltip
  const nodesHTML = nodes.map(([id, gx, gy, tipo, nombre, cargo, funcion]) => {
    const c = nodeColors[tipo] || nodeColors.prof;
    const svgClr = darkTipos.includes(tipo) ? "rgba(255,255,255,0.88)"
                 : tipo === "ind"      ? "#c8972a"
                 : tipo === "mojiRojo" ? "#c0392b"
                 : tipo === "aux"      ? "#616161"
                 : tipo === "coord"    ? "#1a2a5e"
                 : tipo === "lider"    ? "#0e7490"
                 : "#2b5faa";
    const avatar  = isGrp(tipo) ? groupSVG(svgClr) : personSVG(svgClr);
    const nHTML   = nombre.split("\n").map(l => `<div>${l}</div>`).join("");
    const cHTML   = cargo.split("\n").map(l => `<div>${l}</div>`).join("");
    const avBg    = darkTipos.includes(tipo) ? "rgba(255,255,255,0.14)" : "rgba(26,42,94,0.07)";
    return `<div class="org-nodo" style="left:${pxF(gx)}px;top:${pyF(gy)}px;background:${c.bg};border:2px solid ${c.bd};color:${c.txt}">
      <div class="org-nodo-av" style="background:${avBg}">${avatar}</div>
      <div class="org-nodo-name">${nHTML}</div>
      <div class="org-nodo-role">${cHTML}</div>
      <div class="org-nodo-tip"><b style="color:#c8972a">${nombre.replace(/\n/g," ")}</b><div style="margin-top:4px;line-height:1.45">${funcion}</div></div>
    </div>`;
  }).join("");

  const cW = Math.max(...nodes.map(n => pxF(n[1]) + NW)) + 30;
  const cH = Math.max(...nodes.map(n => pyF(n[2]) + NH)) + 30;

  section.innerHTML = `
    <div class="seccion seccion--fondo" id="org-interactivo">
      <div class="seccion-titulo">Organigrama Interactivo</div>
      <p class="seccion-subtitulo">Pasa el cursor sobre cada nodo para ver funciones · Scroll para zoom · Arrastra para navegar</p>
      <div class="org-controles">
        <button class="org-btn-zoom" id="org-btn-menos">−</button>
        <button class="org-btn-zoom org-btn-reset" id="org-btn-reset">↺ Reset</button>
        <button class="org-btn-zoom" id="org-btn-mas">+</button>
        <span class="org-zoom-label" id="org-zoom-label">${Math.round(ZOOM_INI*100)}%</span>
      </div>
      <div class="org-viewport" id="org-viewport">
        <div id="org-inner" style="position:absolute;top:0;left:0;width:${cW}px;height:${cH}px;transform-origin:0 0">
          <svg style="position:absolute;top:0;left:0;width:${cW}px;height:${cH}px;pointer-events:none;overflow:visible">${paths}</svg>
          ${nodesHTML}
        </div>
      </div>
    </div>`;

  // ── Zoom & Pan ────────────────────────────────────────────
  // Maneja el zoom con la rueda del ratón y el arrastre (pan) con clic sostenido
  const vp    = document.getElementById("org-viewport");
  const inner = document.getElementById("org-inner");
  const label = document.getElementById("org-zoom-label");

  let scale = ZOOM_INI;
  let tx    = (vp.clientWidth - (cW * scale)) / 2; // centra horizontalmente al cargar
  let ty    = 40;
  let drag  = false, lx = 0, ly = 0;

  function applyT() {
    inner.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
    label.textContent = `${Math.round(scale * 100)}%`;
  }
  applyT();

  function doZoom(delta, pivX, pivY) {
    const ns = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, scale + delta));
    if (pivX !== undefined) {
      tx = pivX - (pivX - tx) * (ns / scale);
      ty = pivY - (pivY - ty) * (ns / scale);
    }
    scale = ns;
    applyT();
  }

  document.getElementById("org-btn-mas").addEventListener("click",   () => doZoom(+0.1));
  document.getElementById("org-btn-menos").addEventListener("click", () => doZoom(-0.1));
  document.getElementById("org-btn-reset").addEventListener("click", () => {
    scale = ZOOM_INI; 
    tx = (vp.clientWidth - (cW * scale)) / 2;
    ty = 40; 
    applyT();
  });

  vp.addEventListener("wheel", e => {
    e.preventDefault();
    const r = vp.getBoundingClientRect();
    doZoom(e.deltaY > 0 ? -0.08 : 0.08, e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });

  vp.addEventListener("mousedown", e => {
    if (e.target.closest(".org-nodo")) return;
    drag = true; lx = e.clientX; ly = e.clientY;
    vp.style.cursor = "grabbing";
  });
  window.addEventListener("mousemove", e => {
    if (!drag) return;
    tx += e.clientX - lx; ty += e.clientY - ly;
    lx = e.clientX; ly = e.clientY;
    applyT();
  });
  window.addEventListener("mouseup", () => { drag = false; vp.style.cursor = "grab"; });
}
