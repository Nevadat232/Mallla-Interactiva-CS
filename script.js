
const malla = document.getElementById("malla-container");

const semestres = [
  {
    titulo: "Primer Semestre",
    ramos: [
      { nombre: "Estrategias para el Aprendizaje", id: "aprendizaje", abre: ["efi1"] },
      { nombre: "Fund. Biológicos del Comportamiento", id: "bio", abre: ["neuro"] },
      { nombre: "Fund. Filosóficos de la Psicología", id: "filo" },
      { nombre: "Evolución Histórica de la Psicología", id: "historia" },
      { nombre: "Procesos Cognitivos", id: "cognitivo", abre: ["afectivos", "evolutiva1"] },
      { nombre: "Taller de Comunicación", id: "comunicacion", abre: ["trabajoGrupal"] },
      { nombre: "Antropología", id: "antro", abre: ["socioantro"] },
    ]
  },
  {
    titulo: "Segundo Semestre",
    ramos: [
      { nombre: "Ética", id: "etica" },
      { nombre: "Neuropsicología", id: "neuro", req: ["bio"] },
      { nombre: "Fund. Socioantropológicos del Comportamiento", id: "socioantro", req: ["antro"] },
      { nombre: "Intro. Metodología Investigación", id: "metodologia", abre: ["metodologiaAplicada"] },
      { nombre: "Procesos Afectivos", id: "afectivos", req: ["cognitivo"] },
      { nombre: "Taller de Trabajo Grupal", id: "trabajoGrupal", req: ["comunicacion"] },
    ]
  },
  {
    titulo: "Tercer Semestre",
    ramos: [
      { nombre: "Electivo Formación Integral I", id: "efi1", req: ["aprendizaje"], abre: ["efi2"] },
      { nombre: "Psicología Social I", id: "social1", req: ["socioantro"], abre: ["social2"] },
      { nombre: "Psicología Evolutiva I", id: "evolutiva1", req: ["cognitivo"], abre: ["evolutiva2"] },
      { nombre: "Metodología Aplicada a la Psicología", id: "metodologiaAplicada", req: ["metodologia"], abre: ["cuantitativo"] },
      { nombre: "Psicología de la Personalidad", id: "personalidad", abre: ["psicopatologia"] },
      { nombre: "Taller de Entrevista", id: "entrevista", req: ["trabajoGrupal"], abre: ["evaluacionCognitiva"] },
    ]
  },
  {
    titulo: "Cuarto Semestre",
    ramos: [
      { nombre: "Electivo Formación Integral II", id: "efi2", req: ["efi1"], abre: ["efi3"] },
      { nombre: "Psicología Social II", id: "social2", req: ["social1"] },
      { nombre: "Psicología Evolutiva II", id: "evolutiva2", req: ["evolutiva1"], abre: ["psicoInfantil"] },
      { nombre: "Análisis de Datos Cuantitativos", id: "cuantitativo", req: ["metodologiaAplicada"], abre: ["cualitativo"] },
      { nombre: "Psicopatología General", id: "psicopatologia", req: ["personalidad"], abre: ["psicoAdulto", "psicoInfantil"] },
      { nombre: "Evaluación Psicológica Cognitiva", id: "evaluacionCognitiva", req: ["entrevista", "cognitivo"], abre: ["evaluacionPersonalidad"] },
    ]
  },
  {
    titulo: "Quinto Semestre",
    ramos: [
      { nombre: "Electivo de Formación Integral III", id: "efi3", req: ["efi2"], abre: ["efi4"] },
      { nombre: "Teorías Psicológicas I", id: "teorias1" },
      { nombre: "Psicopatología y Psiquiatría Infantil", id: "psiInfantil", req: ["psicopatologia", "evolutiva2"] },
      { nombre: "Análisis de Datos Cualitativos", id: "cualitativo", req: ["cuantitativo"] },
      { nombre: "Políticas Públicas", id: "politicas" },
      { nombre: "Evaluación Psicológica de la Personalidad", id: "evalPersonalidad", req: ["evaluacionCognitiva"], abre: ["evalIntegrada"] }
    ]
  },
  {
    titulo: "Sexto Semestre",
    ramos: [
      { nombre: "Electivo de Formación Integral IV", id: "efi4", req: ["efi3"] },
      { nombre: "Teorías Psicológicas II", id: "teorias2", req: ["teorias1"] },
      { nombre: "Psicopatología y Psiquiatría Adulto", id: "psiAdulto", req: ["psicopatologia"] },
      { nombre: "Taller Persona del Psicólogo", id: "tallerPersona" },
      { nombre: "Intro. Formulación y Evaluación de Proyectos Sociales", id: "proyectosSociales" },
      { nombre: "Evaluación Psicológica Integrada", id: "evalIntegrada", req: ["evaluacionCognitiva", "evalPersonalidad"] }
    ]
  },
  {
    titulo: "Séptimo Semestre",
    ramos: [
      { nombre: "Intro. Psicoterapia Psicoanalítica", id: "psicoanalitica", req: ["teorias1", "teorias2"] },
      { nombre: "Intro. Psicoterapia Sistémica", id: "sistemica", req: ["teorias1", "teorias2"] },
      { nombre: "Comportamiento Organizacional", id: "organizacional" },
      { nombre: "Factores Psicológicos en Procesos Educativos", id: "educativos" },
      { nombre: "Problemas Psicosociales Actuales", id: "psicosociales" },
      { nombre: "Integración en Psicología", id: "integracion" }
    ]
  },
  {
    titulo: "Octavo Semestre",
    ramos: [
      { nombre: "Intro. Psicoterapia Cognitiva", id: "cognitiva", req: ["teorias1", "teorias2"] },
      { nombre: "Intro. Psicoterapia Humanista", id: "humanista", req: ["teorias1", "teorias2"] },
      { nombre: "Gestión de Personas y Organizaciones", id: "gestionPersonas" },
      { nombre: "Gestión Escolar", id: "gestionEscolar" },
      { nombre: "Psicología Comunitaria", id: "comunitaria" },
      { nombre: "Electivo de Especialización I", id: "especializacion1" }
    ]
  },
  {
    titulo: "Noveno Semestre",
    ramos: [
      { nombre: "Electivo Diseño e Intervención", id: "intervencion" },
      { nombre: "Electivo Diseño en Contextos", id: "contextos" },
      { nombre: "Proyecto de Investigación", id: "proyectoInvestigacion" },
      { nombre: "Electivo de Especialización II", id: "especializacion2", req: ["especializacion1"] }
    ]
  },
  {
    titulo: "Décimo Semestre",
    ramos: [
      { nombre: "Seminario de Investigación", id: "seminario", req: ["proyectoInvestigacion"] },
      { nombre: "Práctica Profesional", id: "practica" },
      { nombre: "Electivo de Especialización III", id: "especializacion3", req: ["especializacion2"] }
    ]
  }

]

const estado = {};

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = ramo.nombre;
  div.id = ramo.id;

  if (ramo.req) {
    div.classList.add("bloqueado");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("completado")) {
      div.classList.remove("completado");
      estado[ramo.id] = false;
    } else {
      div.classList.add("completado");
      estado[ramo.id] = true;
    }

    document.querySelectorAll(".ramo").forEach(el => {
      const id = el.id;
      const r = findRamoById(id);
      if (r.req) {
        const cumplidos = r.req.every(pr => estado[pr]);
        el.classList.toggle("bloqueado", !cumplidos);
      }
    });
  });

  return div;
}

function findRamoById(id) {
  for (const semestre of semestres) {
    for (const ramo of semestre.ramos) {
      if (ramo.id === id) return ramo;
    }
  }
}

semestres.forEach((semestre) => {
  const div = document.createElement("div");
  div.className = "semestre";

  const h2 = document.createElement("h2");
  h2.textContent = semestre.titulo;
  div.appendChild(h2);

  semestre.ramos.forEach((ramo) => {
    div.appendChild(crearRamo(ramo));
  });

  malla.appendChild(div);
});


document.addEventListener("DOMContentLoaded", function () {
  function lanzarConfettiRosa() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff66cc', '#ff99cc', '#ffb6c1']
    });
  }

  function revisarSemestreCompleto(semestreElement) {
    const checkboxes = semestreElement.querySelectorAll('input[type="checkbox"]');
    const todosMarcados = Array.from(checkboxes).every(cb => cb.checked);
    if (todosMarcados && !semestreElement.classList.contains('celebrado')) {
      lanzarConfettiRosa();
      semestreElement.classList.add('celebrado'); // evita múltiples celebraciones
    }
  }

  function iniciarObservadores() {
    document.querySelectorAll('.semestre input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', function () {
        const semestre = this.closest('.semestre');
        if (semestre) {
          revisarSemestreCompleto(semestre);
        }
      });
    });
  }

  // Esperar a que el DOM cargue completamente y la malla se construya
  setTimeout(() => {
    iniciarObservadores();
  }, 500); // tiempo suficiente para generar dinámicamente
});
