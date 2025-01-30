/************************************************
 * BUBBLY ANIMATED BACKGROUND
 ************************************************/
bubbly({
  canvas: document.getElementById("bubbly-bg"),
  colorStart: "transparent",
  colorStop: "transparent",
  bubbles: {
    count: 30,
    fill: () => `hsla(${Math.random() * 60 + 180}, 100%, 80%, 0.3)`,
    shadow: () => ({ blur: 2, color: "#ffffff" }),
  }
});

/************************************************
 * TABS
 ************************************************/
const tabButtons = document.querySelectorAll('.tab-button');

const meditationSection = document.getElementById('meditation-section');
const pomodoroSection = document.getElementById('pomodoro-section');
const tasksSection = document.getElementById('tasks-section');
const statsSection = document.getElementById('stats-section');

const meditationSettings = document.getElementById('meditation-settings');
const pomodoroSettings = document.getElementById('pomodoro-settings');
const tasksSettings = document.getElementById('tasks-settings');
const statsSettings = document.getElementById('stats-settings');

const meditationControls = document.getElementById('meditation-controls');
const pomodoroControls = document.getElementById('pomodoro-controls');
const tasksControls = document.getElementById('tasks-controls');
const statsControls = document.getElementById('stats-controls');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Reset classes
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    [meditationSection, pomodoroSection, tasksSection, statsSection].forEach(s => s.classList.add('hidden'));
    [meditationSettings, pomodoroSettings, tasksSettings, statsSettings].forEach(s => s.classList.add('hidden'));
    [meditationControls, pomodoroControls, tasksControls, statsControls].forEach(s => s.classList.add('hidden'));

    const tab = button.getAttribute('data-tab');
    switch (tab) {
      case 'meditation':
        meditationSection.classList.remove('hidden');
        meditationSettings.classList.remove('hidden');
        meditationControls.classList.remove('hidden');
        break;
      case 'pomodoro':
        pomodoroSection.classList.remove('hidden');
        pomodoroSettings.classList.remove('hidden');
        pomodoroControls.classList.remove('hidden');
        break;
      case 'tasks':
        tasksSection.classList.remove('hidden');
        tasksSettings.classList.remove('hidden');
        tasksControls.classList.remove('hidden');
        break;
      case 'stats':
        statsSection.classList.remove('hidden');
        statsSettings.classList.remove('hidden');
        statsControls.classList.remove('hidden');
        updateStatsDisplay();
        break;
    }
  });
});

/************************************************
 * TRANSLATIONS & LANGUAGE HANDLING
 ************************************************/

const translations = {
  fr: {
    // -- Onglets --
    meditationTab: "Méditation",
    pomodoroTab: "Pomodoro",
    tasksTab: "Tâches",
    statisticsTab: "Statistiques",
    
    // -- Méditation --
    meditationSettings: "Paramètres de méditation",
    inhaleLabel: "Inspiration (secondes)",
    holdLabel: "Pause (secondes)",
    exhaleLabel: "Expiration (secondes)",
    numBreaths: "Nombre de respirations",
    selectSounds: "Sélection des sons",
    backgroundSound: "Son de fond",
    stepSound: "Son de l'étape",
    noSound: "Aucun son",
    ocean: "Océan",
    rain: "Pluie",
    forest1: "Forêt 1",
    forest2: "Forêt 2",
    countryside: "Campagne",
    tibetanBowl: "Bol tibétain",
    bell: "Clochette",
    toc: "Toc",
    tic: "Tic",
    pwiut: "Pwiut",
    prepare: "Préparez-vous",
    inhale: "Inspirez",
    hold: "Retenez",
    exhale: "Expirez",
    
    // -- Pomodoro --
    pomodoroSettings: "Paramètres du Pomodoro",
    workDuration: "Durée de travail (minutes)",
    shortBreak: "Pause courte (minutes)",
    longBreak: "Pause longue (minutes)",
    sessionsBeforeLong: "Sessions avant longue pause",
    endSound: "Son de fin",
    workLabel: "Travail",
    shortBreakLabel: "Pause courte",
    longBreakLabel: "Pause longue",
    
    // -- Tâches --
    taskSettings: "Paramètres des tâches",
    createNewTask: "Créer une nouvelle tâche",
    taskPlaceholder: "Nouvelle tâche...",
    colorLabel: "Couleur",
    addTaskBtn: "Ajouter",
    manageTasks: "Gérer les tâches",
    clearAllTasks: "Tout effacer",
    clearCompletedTasks: "Effacer tâches terminées",
    undoLastAction: "Annuler la dernière action",
    taskListTitle: "Liste de tâches",
    
    // -- Statistiques --
    globalStatsTitle: "Statistiques globales",
    pomodoroSessions: "Sessions de Pomodoro",
    completedTasks: "Tâches terminées",
    completedMeditations: "Méditations terminées",
    statsByPeriod: "Statistiques par période",
    today: "Aujourd'hui",
    thisWeek: "Cette semaine",
    thisMonth: "Ce mois-ci",
    pomodoroShort: "Pomodoro",
    tasksShort: "Tâches",
    meditationShort: "Méditation",
    
    // -- Boutons bas --
    startBtn: "Démarrer",
    pauseBtn: "Pause",
    resumeBtn: "Reprendre",
    resetBtn: "Réinitialiser",
    
    // -- Autres Stats --
    resetStats: "Réinitialiser stats",
    appSettings: "Paramètres de l'application",
    themeLabel: "Thème",
    languageLabel: "Langue",
    
    // -- Pomodoro dynamique --
    // (géré directement par script : 'Travail', 'Pause courte', 'Pause longue' etc.)
  },
  en: {
    // -- Tabs --
    meditationTab: "Meditation",
    pomodoroTab: "Pomodoro",
    tasksTab: "Tasks",
    statisticsTab: "Statistics",
    
    // -- Meditation --
    meditationSettings: "Meditation Settings",
    inhaleLabel: "Inhale (seconds)",
    holdLabel: "Hold (seconds)",
    exhaleLabel: "Exhale (seconds)",
    numBreaths: "Number of Breaths",
    selectSounds: "Select Sounds",
    backgroundSound: "Background Sound",
    stepSound: "Step Sound",
    noSound: "No sound",
    ocean: "Ocean",
    rain: "Rain",
    forest1: "Forest 1",
    forest2: "Forest 2",
    countryside: "Countryside",
    tibetanBowl: "Tibetan Bowl",
    bell: "Bell",
    toc: "Toc",
    tic: "Tic",
    pwiut: "Pwiut",
    prepare: "Prepare Yourself",
    inhale: "Inhale",
    hold: "Hold",
    exhale: "Exhale",
    
    // -- Pomodoro --
    pomodoroSettings: "Pomodoro Settings",
    workDuration: "Work Duration (minutes)",
    shortBreak: "Short Break (minutes)",
    longBreak: "Long Break (minutes)",
    sessionsBeforeLong: "Sessions Before Long Break",
    endSound: "End Sound",
    workLabel: "Work",
    shortBreakLabel: "Short Break",
    longBreakLabel: "Long Break",
    
    // -- Tasks --
    taskSettings: "Task Settings",
    createNewTask: "Create a New Task",
    taskPlaceholder: "New task...",
    colorLabel: "Color",
    addTaskBtn: "Add",
    manageTasks: "Manage Tasks",
    clearAllTasks: "Clear All Tasks",
    clearCompletedTasks: "Clear Completed Tasks",
    undoLastAction: "Undo Last Action",
    taskListTitle: "Task List",
    
    // -- Statistics --
    globalStatsTitle: "Global Statistics",
    pomodoroSessions: "Pomodoro Sessions",
    completedTasks: "Completed Tasks",
    completedMeditations: "Completed Meditations",
    statsByPeriod: "Statistics by Period",
    today: "Today",
    thisWeek: "This Week",
    thisMonth: "This Month",
    pomodoroShort: "Pomodoro",
    tasksShort: "Tasks",
    meditationShort: "Meditation",
    
    // -- Bottom Buttons --
    startBtn: "Start",
    pauseBtn: "Pause",
    resumeBtn: "Resume",
    resetBtn: "Reset",
    
    // -- Other Stats --
    resetStats: "Reset Stats",
    appSettings: "App Settings",
    themeLabel: "Theme",
    languageLabel: "Language",
  },
  es: {
    // -- Pestañas --
    meditationTab: "Meditación",
    pomodoroTab: "Pomodoro",
    tasksTab: "Tareas",
    statisticsTab: "Estadísticas",
    
    // -- Meditación --
    meditationSettings: "Configuración de Meditación",
    inhaleLabel: "Inhalar (segundos)",
    holdLabel: "Mantener (segundos)",
    exhaleLabel: "Exhalar (segundos)",
    numBreaths: "Número de Respiraciones",
    selectSounds: "Seleccionar Sonidos",
    backgroundSound: "Sonido de Fondo",
    stepSound: "Sonido de Paso",
    noSound: "Sin sonido",
    ocean: "Océano",
    rain: "Lluvia",
    forest1: "Bosque 1",
    forest2: "Bosque 2",
    countryside: "Campo",
    tibetanBowl: "Cuenco Tibetano",
    bell: "Campana",
    toc: "Toc",
    tic: "Tic",
    pwiut: "Pwiut",
    prepare: "Prepárate",
    inhale: "Inhala",
    hold: "Mantén",
    exhale: "Exhala",
    
    // -- Pomodoro --
    pomodoroSettings: "Configuración de Pomodoro",
    workDuration: "Duración de trabajo (minutos)",
    shortBreak: "Pausa corta (minutos)",
    longBreak: "Pausa larga (minutos)",
    sessionsBeforeLong: "Sesiones antes de la pausa larga",
    endSound: "Sonido al terminar",
    workLabel: "Trabajo",
    shortBreakLabel: "Pausa corta",
    longBreakLabel: "Pausa larga",
    
    // -- Tareas --
    taskSettings: "Configuración de Tareas",
    createNewTask: "Crear nueva tarea",
    taskPlaceholder: "Nueva tarea...",
    colorLabel: "Color",
    addTaskBtn: "Añadir",
    manageTasks: "Gestionar Tareas",
    clearAllTasks: "Borrar todas las tareas",
    clearCompletedTasks: "Borrar tareas completadas",
    undoLastAction: "Deshacer última acción",
    taskListTitle: "Lista de Tareas",
    
    // -- Estadísticas --
    globalStatsTitle: "Estadísticas Globales",
    pomodoroSessions: "Sesiones de Pomodoro",
    completedTasks: "Tareas Completadas",
    completedMeditations: "Meditaciones Completadas",
    statsByPeriod: "Estadísticas por Período",
    today: "Hoy",
    thisWeek: "Esta Semana",
    thisMonth: "Este Mes",
    pomodoroShort: "Pomodoro",
    tasksShort: "Tareas",
    meditationShort: "Meditación",
    
    // -- Botones Inferiores --
    startBtn: "Iniciar",
    pauseBtn: "Pausar",
    resumeBtn: "Reanudar",
    resetBtn: "Reiniciar",
    
    // -- Otras Stats --
    resetStats: "Reiniciar Stats",
    appSettings: "Configuración de la App",
    themeLabel: "Tema",
    languageLabel: "Idioma",
  },
  de: {
    // -- Tabs --
    meditationTab: "Meditation",
    pomodoroTab: "Pomodoro",
    tasksTab: "Aufgaben",
    statisticsTab: "Statistiken",
    
    // -- Meditation --
    meditationSettings: "Meditationseinstellungen",
    inhaleLabel: "Einatmen (Sekunden)",
    holdLabel: "Anhalten (Sekunden)",
    exhaleLabel: "Ausatmen (Sekunden)",
    numBreaths: "Anzahl der Atemzüge",
    selectSounds: "Sounds auswählen",
    backgroundSound: "Hintergrundton",
    stepSound: "Schritt-Sound",
    noSound: "Kein Ton",
    ocean: "Ozean",
    rain: "Regen",
    forest1: "Wald 1",
    forest2: "Wald 2",
    countryside: "Landschaft",
    tibetanBowl: "Tibetische Schale",
    bell: "Glocke",
    toc: "Toc",
    tic: "Tic",
    pwiut: "Pwiut",
    prepare: "Bereit machen",
    inhale: "Einatmen",
    hold: "Halten",
    exhale: "Ausatmen",
    
    // -- Pomodoro --
    pomodoroSettings: "Pomodoro-Einstellungen",
    workDuration: "Arbeitsdauer (Minuten)",
    shortBreak: "Kurze Pause (Minuten)",
    longBreak: "Lange Pause (Minuten)",
    sessionsBeforeLong: "Sessions vor langer Pause",
    endSound: "End-Sound",
    workLabel: "Arbeit",
    shortBreakLabel: "Kurze Pause",
    longBreakLabel: "Lange Pause",
    
    // -- Aufgaben --
    taskSettings: "Aufgaben-Einstellungen",
    createNewTask: "Neue Aufgabe erstellen",
    taskPlaceholder: "Neue Aufgabe...",
    colorLabel: "Farbe",
    addTaskBtn: "Hinzufügen",
    manageTasks: "Aufgaben verwalten",
    clearAllTasks: "Alle Aufgaben löschen",
    clearCompletedTasks: "Abgeschlossene löschen",
    undoLastAction: "Letzte Aktion rückgängig",
    taskListTitle: "Aufgabenliste",
    
    // -- Statistiken --
    globalStatsTitle: "Globale Statistiken",
    pomodoroSessions: "Pomodoro-Sitzungen",
    completedTasks: "Abgeschlossene Aufgaben",
    completedMeditations: "Abgeschlossene Meditationen",
    statsByPeriod: "Statistiken nach Zeitraum",
    today: "Heute",
    thisWeek: "Diese Woche",
    thisMonth: "Dieser Monat",
    pomodoroShort: "Pomodoro",
    tasksShort: "Aufgaben",
    meditationShort: "Meditation",
    
    // -- Unten Buttons --
    startBtn: "Starten",
    pauseBtn: "Pause",
    resumeBtn: "Fortsetzen",
    resetBtn: "Zurücksetzen",
    
    // -- Sonstiges --
    resetStats: "Statistiken zurücksetzen",
    appSettings: "App-Einstellungen",
    themeLabel: "Thema",
    languageLabel: "Sprache",
  }
};

let currentLang = 'fr';  // Valeur par défaut
let currentTheme = 'light'; // Thème clair par défaut

function applyLanguage(lang) {
  // Met à jour la langue courante
  currentLang = lang;
  localStorage.setItem('appLang', lang);

  // Sélectionne tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Si un placeholder est nécessaire
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Mettre à jour les boutons "Pause/Resume" si besoin, etc. (cas dynamiques)
  updateMeditationDynamicTexts(); 
  updatePomodoroDynamicTexts();
}

function applyTheme(theme) {
  // Retire toutes les classes de thème
  document.body.classList.remove('theme-light', 'theme-dark', 'theme-nature', 'theme-abstract');
  document.body.classList.add(`theme-${theme}`);
  localStorage.setItem('appTheme', theme);
}

function loadPreferences() {
  const savedLang = localStorage.getItem('appLang');
  const savedTheme = localStorage.getItem('appTheme');
  if (savedLang) currentLang = savedLang;
  if (savedTheme) currentTheme = savedTheme;
  applyTheme(currentTheme);
  applyLanguage(currentLang);
}

// Gestion des clics sur les boutons de langue
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const lang = btn.getAttribute('data-lang');
    applyLanguage(lang);
  });
});

// Gestion des clics sur les boutons de thème
const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const theme = btn.getAttribute('data-theme');
    applyTheme(theme);
  });
});

/************************************************
 * MEDITATION
 ************************************************/
const startMeditationBtn = document.getElementById('start-meditation-btn');
const resetMeditationBtn = document.getElementById('reset-meditation-btn');
const breatheCircle = document.getElementById('breathe-circle');
const phaseText = document.getElementById('phase-text');

const inhaleSlider = document.getElementById('inhale-time');
const holdSlider = document.getElementById('hold-time');
const exhaleSlider = document.getElementById('exhale-time');
const cyclesSlider = document.getElementById('cycles-count');

const inhaleValue = document.getElementById('inhale-value');
const holdValue = document.getElementById('hold-value');
const exhaleValue = document.getElementById('exhale-value');
const cyclesValue = document.getElementById('cycles-value');

const backgroundSelect = document.getElementById('background-sound');
const breatheSelect = document.getElementById('breathe-sound');

const backgroundAudio = document.getElementById('background-audio');
const breatheAudio = document.getElementById('breathe-audio');

let medIsRunning = false;
let medTimeoutId;
let currentCycle = 0;
let isPreparing = false;

// Mise à jour des paramètres de méditation (text affiché à droite)
function updateMeditationParams() {
  inhaleValue.textContent = inhaleSlider.value;
  holdValue.textContent = holdSlider.value;
  exhaleValue.textContent = exhaleSlider.value;
  cyclesValue.textContent = cyclesSlider.value;
}

[inhaleSlider, holdSlider, exhaleSlider, cyclesSlider].forEach((slider) => {
  slider.addEventListener('input', updateMeditationParams);
});
updateMeditationParams();

// Chargement des sons de méditation
function loadMeditationSounds() {
  if (backgroundSelect.value === 'none') {
    backgroundAudio.src = '';
    backgroundAudio.pause();
  } else {
    backgroundAudio.src = `assets/sounds/${backgroundSelect.value}`;
  }
  if (breatheSelect.value === 'none') {
    breatheAudio.src = '';
    breatheAudio.pause();
  } else {
    breatheAudio.src = `assets/sounds/${breatheSelect.value}`;
  }
}
backgroundSelect.addEventListener('change', loadMeditationSounds);
breatheSelect.addEventListener('change', loadMeditationSounds);
loadMeditationSounds();

function getTranslation(key) {
  // Retourne la traduction du mot-clé dans la langue courante
  const langDict = translations[currentLang];
  return (langDict && langDict[key]) ? langDict[key] : key;
}

function updateMeditationDynamicTexts() {
  // Par exemple, si on a besoin de changer le texte "Prepare Yourself"/"Inhale", etc.
  if (!medIsRunning && currentCycle === 0 && !isPreparing) {
    phaseText.textContent = getTranslation('prepare');
  }
}

function runMeditationCycle() {
  if (!medIsRunning || isPreparing) return;

  const inhaleTime = parseInt(inhaleSlider.value);
  const holdTime = parseInt(holdSlider.value);
  const exhaleTime = parseInt(exhaleSlider.value);
  const totalCycles = parseInt(cyclesSlider.value);

  if (currentCycle >= totalCycles) {
    stopMeditation();
    incrementStats('meditation-sessions');
    return;
  }
  currentCycle++;

  // Inhale
  phaseText.textContent = getTranslation('inhale');
  breatheCircle.style.transition = `transform ${inhaleTime}s ease-in-out`;
  breatheCircle.style.transform = 'scale(1.6)';
  if (breatheAudio.src) {
    breatheAudio.currentTime = 0;
    breatheAudio.play();
  }

  medTimeoutId = setTimeout(() => {
    // Hold
    phaseText.textContent = getTranslation('hold');
    breatheCircle.style.transition = `transform ${holdTime}s ease-in-out`;
    breatheCircle.style.transform = 'scale(1.6)';

    medTimeoutId = setTimeout(() => {
      // Exhale
      phaseText.textContent = getTranslation('exhale');
      breatheCircle.style.transition = `transform ${exhaleTime}s ease-in-out`;
      breatheCircle.style.transform = 'scale(1)';
      if (breatheAudio.src) {
        breatheAudio.currentTime = 0;
        breatheAudio.play();
      }

      medTimeoutId = setTimeout(() => {
        runMeditationCycle();
      }, exhaleTime * 1000);
    }, holdTime * 1000);
  }, inhaleTime * 1000);
}

function prepareCountdown(seconds) {
  breatheCircle.style.transition = `transform ${seconds}s ease-in-out`;
  breatheCircle.style.transform = 'scale(1)';

  let counter = seconds;
  const countdownInterval = setInterval(() => {
    if (!medIsRunning) {
      clearInterval(countdownInterval);
      return;
    }
    phaseText.textContent = String(counter);
    counter--;

    if (counter < 0) {
      clearInterval(countdownInterval);
      setTimeout(() => {
        isPreparing = false;
        runMeditationCycle();
      }, 200);
    }
  }, 1000);
}

function stopMeditation() {
  medIsRunning = false;
  isPreparing = false;
  clearTimeout(medTimeoutId);
  backgroundAudio.pause();
  backgroundAudio.currentTime = 0;
  breatheAudio.pause();
  breatheAudio.currentTime = 0;
  currentCycle = 0;
  phaseText.textContent = getTranslation('prepare'); // re-affiche "Préparez-vous" etc.
  startMeditationBtn.textContent = getTranslation('startBtn');
  breatheCircle.style.transform = 'scale(1.6)';
}

startMeditationBtn.addEventListener('click', () => {
  if (!medIsRunning) {
    medIsRunning = true;
    startMeditationBtn.textContent = getTranslation('pauseBtn');
    if (backgroundAudio.src) backgroundAudio.play();

    if (currentCycle === 0 && !isPreparing) {
      isPreparing = true;
      // "Prepare Yourself" 
      phaseText.textContent = getTranslation('prepare');
      prepareCountdown(3);
    } else {
      runMeditationCycle();
    }
  } else {
    // Pause
    medIsRunning = false;
    startMeditationBtn.textContent = getTranslation('resumeBtn');
    clearTimeout(medTimeoutId);
    backgroundAudio.pause();
    breatheAudio.pause();
  }
});

resetMeditationBtn.addEventListener('click', stopMeditation);

/************************************************
 * POMODORO
 ************************************************/
const pomodoroStartBtn = document.getElementById('pomodoro-start-btn');
const pomodoroResetBtn = document.getElementById('pomodoro-reset-btn');
const pomodoroTimer = document.getElementById('pomodoro-timer');
const pomodoroCircle = document.getElementById('pomodoro-circle');
const pomodoroStepLabel = document.getElementById('pomodoro-step-label');

const workSlider = document.getElementById('work-duration');
const shortBreakSlider = document.getElementById('short-break');
const longBreakSlider = document.getElementById('long-break');
const sessionsSlider = document.getElementById('sessions');

const workValue = document.getElementById('work-value');
const shortBreakValue = document.getElementById('short-break-value');
const longBreakValue = document.getElementById('long-break-value');
const sessionsValue = document.getElementById('sessions-value');

const pomodoroBackgroundSelect = document.getElementById('pomodoro-background-sound');
const pomodoroEndSelect = document.getElementById('pomodoro-end-sound');

const pomodoroBackgroundAudio = document.getElementById('pomodoro-background-audio');
const pomodoroEndAudio = document.getElementById('pomodoro-end-audio');

let pomodoroInterval;
let pomodoroRunning = false;
let isWorkPhase = true;
let sessionsCompleted = 0;
let timeLeft = parseInt(workSlider.value) * 60;

// Mise à jour Pomodoro (valeurs)
function updatePomodoroParams() {
  workValue.textContent = workSlider.value;
  shortBreakValue.textContent = shortBreakSlider.value;
  longBreakValue.textContent = longBreakSlider.value;
  sessionsValue.textContent = sessionsSlider.value;
}
[workSlider, shortBreakSlider, longBreakSlider, sessionsSlider].forEach((slider) => {
  slider.addEventListener('input', () => {
    updatePomodoroParams();

    if (!pomodoroRunning) {
      isWorkPhase = true;
      timeLeft = parseInt(workSlider.value) * 60;
      pomodoroStepLabel.textContent = getTranslation('workLabel');
      updatePomodoroDisplay();
    }
  });
});
updatePomodoroParams();

function loadPomodoroSounds() {
  if (pomodoroBackgroundSelect.value === 'none') {
    pomodoroBackgroundAudio.src = '';
    pomodoroBackgroundAudio.pause();
  } else {
    pomodoroBackgroundAudio.src = `assets/sounds/${pomodoroBackgroundSelect.value}`;
  }
  if (pomodoroEndSelect.value === 'none') {
    pomodoroEndAudio.src = '';
    pomodoroEndAudio.pause();
  } else {
    pomodoroEndAudio.src = `assets/sounds/${pomodoroEndSelect.value}`;
  }
}
pomodoroBackgroundSelect.addEventListener('change', loadPomodoroSounds);
pomodoroEndSelect.addEventListener('change', loadPomodoroSounds);
loadPomodoroSounds();

function updatePomodoroDynamicTexts() {
  // Actualise juste le label si besoin
  if (isWorkPhase) {
    pomodoroStepLabel.textContent = getTranslation('workLabel');
  }
  else {
    // On détermine si c'est short ou long
    if (sessionsCompleted % parseInt(sessionsSlider.value) === 0) {
      pomodoroStepLabel.textContent = getTranslation('longBreakLabel');
    } else {
      pomodoroStepLabel.textContent = getTranslation('shortBreakLabel');
    }
  }
}

function updatePomodoroDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  pomodoroTimer.textContent = `${minutes}:${seconds}`;

  const totalTime = isWorkPhase
    ? parseInt(workSlider.value) * 60
    : (sessionsCompleted % parseInt(sessionsSlider.value) === 0)
      ? parseInt(longBreakSlider.value) * 60
      : parseInt(shortBreakSlider.value) * 60;

  const ratio = timeLeft / totalTime;
  pomodoroCircle.style.transform = `scale(${1 + 0.6 * ratio})`;
}

function startPomodoro() {
  pomodoroRunning = true;
  pomodoroStartBtn.textContent = getTranslation('pauseBtn');
  pomodoroStartBtn.classList.add('active');
  if (pomodoroBackgroundAudio.src) {
    pomodoroBackgroundAudio.play();
  }

  pomodoroInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updatePomodoroDisplay();
    } else {
      clearInterval(pomodoroInterval);

      // End Sound
      if (pomodoroEndAudio.src) {
        pomodoroEndAudio.currentTime = 0;
        pomodoroEndAudio.play();
      }

      // Toggle between work and breaks
      if (isWorkPhase) {
        sessionsCompleted++;
        incrementStats('pomodoro-sessions');
        if (sessionsCompleted % parseInt(sessionsSlider.value) === 0) {
          isWorkPhase = false;
          timeLeft = parseInt(longBreakSlider.value) * 60;
          pomodoroStepLabel.textContent = getTranslation('longBreakLabel');
        } else {
          isWorkPhase = false;
          timeLeft = parseInt(shortBreakSlider.value) * 60;
          pomodoroStepLabel.textContent = getTranslation('shortBreakLabel');
        }
      } else {
        isWorkPhase = true;
        timeLeft = parseInt(workSlider.value) * 60;
        pomodoroStepLabel.textContent = getTranslation('workLabel');
      }
      
      // Redémarre automatiquement la phase suivante si toujours en mode running
      setTimeout(() => {
        if (pomodoroRunning) {
          startPomodoro();
        }
      }, 1000);
    }
  }, 1000);
}

pomodoroStartBtn.addEventListener('click', () => {
  if (!pomodoroRunning) {
    startPomodoro();
  } else {
    // Pause
    pomodoroRunning = false;
    clearInterval(pomodoroInterval);
    pomodoroBackgroundAudio.pause();
    pomodoroStartBtn.textContent = getTranslation('startBtn');
    pomodoroStartBtn.classList.remove('active');
  }
});

// Reset Pomodoro
pomodoroResetBtn.addEventListener('click', () => {
  pomodoroRunning = false;
  clearInterval(pomodoroInterval);
  pomodoroBackgroundAudio.pause();
  pomodoroBackgroundAudio.currentTime = 0;
  isWorkPhase = true;
  sessionsCompleted = 0;
  timeLeft = parseInt(workSlider.value) * 60;
  pomodoroStepLabel.textContent = getTranslation('workLabel');
  updatePomodoroDisplay();
  pomodoroStartBtn.textContent = getTranslation('startBtn');
  pomodoroStartBtn.classList.remove('active');
});

function initPomodoroDisplay() {
  updatePomodoroDisplay();
}

/************************************************
 * TASKS
 ************************************************/
const tasksList = document.getElementById('tasks-list');
const taskTextInput = document.getElementById('task-text');
const colorDots = document.querySelectorAll('.color-dot');
const addTaskBtn = document.getElementById('add-task-btn');
const clearAllTasksBtn = document.getElementById('clear-all-tasks-btn');
const clearCompletedTasksBtn = document.getElementById('clear-completed-tasks-btn');
const undoBtn = document.getElementById('undo-btn');

let tasks = [];
let selectedColor = '#FFE0B2';
let undoStack = [];

// Color Selection
colorDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    colorDots.forEach((d) => d.classList.remove('selected'));
    dot.classList.add('selected');
    selectedColor = dot.getAttribute('data-color');
  });
});

// Load/Save Tasks
function loadTasks() {
  const data = localStorage.getItem('tasksData');
  tasks = data ? JSON.parse(data) : [];
}

function saveTasks() {
  localStorage.setItem('tasksData', JSON.stringify(tasks));
}

// Render Tasks
function renderTasks() {
  tasksList.innerHTML = '';
  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  activeTasks.forEach((t) => tasksList.appendChild(createTaskElement(t)));
  completedTasks.forEach((t) => tasksList.appendChild(createTaskElement(t)));
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.classList.add('task-item');
  if (task.completed) {
    li.classList.add('completed');
  }
  li.draggable = true;
  li.style.backgroundColor = task.completed ? '#dcdcdc' : task.color;

  // Checkbox
  const checkbox = document.createElement('div');
  checkbox.classList.add('task-checkbox');
  checkbox.addEventListener('click', () => toggleTaskCompletion(task.id));
  li.appendChild(checkbox);

  // Title
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('task-title');
  const inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.value = task.text;
  inputTitle.readOnly = true;

  // Edit on Click
  titleDiv.addEventListener('click', () => {
    if (!inputTitle.readOnly) return;
    inputTitle.readOnly = false;
    inputTitle.focus();
  });
  inputTitle.addEventListener('blur', () => {
    pushUndoState();
    task.text = inputTitle.value.trim();
    inputTitle.readOnly = true;
    saveTasks();
    renderTasks();
  });
  titleDiv.appendChild(inputTitle);
  li.appendChild(titleDiv);

  // Delete Button
  const trashBtn = document.createElement('button');
  trashBtn.classList.add('trash-btn');
  trashBtn.innerHTML = '🗑';
  trashBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  });
  li.appendChild(trashBtn);

  // Drag and Drop for Reordering
  li.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', String(task.id));
  });
  li.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  li.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
    if (draggedId === task.id) return;
    reorderTasks(draggedId, task.id);
  });

  return li;
}

function reorderTasks(draggedId, targetId) {
  pushUndoState();
  const draggedIndex = tasks.findIndex((t) => t.id === draggedId);
  const targetIndex = tasks.findIndex((t) => t.id === targetId);
  if (draggedIndex === -1 || targetIndex === -1) return;

  const [draggedTask] = tasks.splice(draggedIndex, 1);
  tasks.splice(targetIndex, 0, draggedTask);

  saveTasks();
  renderTasks();
}

function toggleTaskCompletion(id) {
  const t = tasks.find((tk) => tk.id === id);
  if (!t) return;
  pushUndoState();
  t.completed = !t.completed;
  if (t.completed) {
    t.completedDate = new Date().toLocaleString('fr-FR');
    incrementStats('tasks-completed');
  } else {
    t.completedDate = null;
  }
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  pushUndoState();
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

// Undo Functionality
function pushUndoState() {
  undoStack.push(JSON.stringify(tasks));
}

function undo() {
  if (undoStack.length > 0) {
    tasks = JSON.parse(undoStack.pop());
    saveTasks();
    renderTasks();
  }
}

// Button Actions
addTaskBtn.addEventListener('click', () => {
  const text = taskTextInput.value.trim();
  if (text) {
    pushUndoState();
    tasks.push({
      id: Date.now(),
      text,
      color: selectedColor,
      completed: false,
      completedDate: null,
    });
    saveTasks();
    renderTasks();
    taskTextInput.value = '';
  }
});

clearAllTasksBtn.addEventListener('click', () => {
  pushUndoState();
  tasks = [];
  saveTasks();
  renderTasks();
});

clearCompletedTasksBtn.addEventListener('click', () => {
  pushUndoState();
  tasks = tasks.filter((t) => !t.completed);
  saveTasks();
  renderTasks();
});

undoBtn.addEventListener('click', undo);

// Drag to Drop at End of List
tasksList.addEventListener('dragover', (e) => {
  e.preventDefault();
});
tasksList.addEventListener('drop', (e) => {
  e.preventDefault();
  const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
  if (!draggedId) return;
  pushUndoState();
  const draggedIndex = tasks.findIndex((t) => t.id === draggedId);
  if (draggedIndex === -1) return;
  const [draggedTask] = tasks.splice(draggedIndex, 1);
  tasks.push(draggedTask);
  saveTasks();
  renderTasks();
});

// Initialize Tasks
loadTasks();
renderTasks();

/************************************************
 * STATISTICS
 ************************************************/
const statsPomodoroSessions = document.getElementById('stats-pomodoro-sessions');
const statsTasksCompleted = document.getElementById('stats-tasks-completed');
const statsMeditationSessions = document.getElementById('stats-meditation-sessions');

const statsPomodoroToday = document.getElementById('stats-pomodoro-today');
const statsTasksToday = document.getElementById('stats-tasks-today');
const statsMeditationToday = document.getElementById('stats-meditation-today');

const statsPomodoroWeek = document.getElementById('stats-pomodoro-week');
const statsTasksWeek = document.getElementById('stats-tasks-week');
const statsMeditationWeek = document.getElementById('stats-meditation-week');

const statsPomodoroMonth = document.getElementById('stats-pomodoro-month');
const statsTasksMonth = document.getElementById('stats-tasks-month');
const statsMeditationMonth = document.getElementById('stats-meditation-month');

const resetStatsBtn = document.getElementById('reset-stats-btn');

// Load/Save Statistics
function loadStats() {
  const data = localStorage.getItem('appStats');
  return data ? JSON.parse(data) : {};
}

function saveStats(s) {
  localStorage.setItem('appStats', JSON.stringify(s));
}

// Reset Statistics
resetStatsBtn.addEventListener('click', () => {
  localStorage.removeItem('appStats');
  updateStatsDisplay();
});

// Update Statistics Display
function updateStatsDisplay() {
  const stats = loadStats();
  statsPomodoroSessions.textContent = stats['pomodoro-sessions'] || 0;
  statsTasksCompleted.textContent = stats['tasks-completed'] || 0;
  statsMeditationSessions.textContent = stats['meditation-sessions'] || 0;

  statsPomodoroToday.textContent = getCountByPeriod(stats, 'pomodoro-sessions', 'day');
  statsTasksToday.textContent = getCountByPeriod(stats, 'tasks-completed', 'day');
  statsMeditationToday.textContent = getCountByPeriod(stats, 'meditation-sessions', 'day');

  statsPomodoroWeek.textContent = getCountByPeriod(stats, 'pomodoro-sessions', 'week');
  statsTasksWeek.textContent = getCountByPeriod(stats, 'tasks-completed', 'week');
  statsMeditationWeek.textContent = getCountByPeriod(stats, 'meditation-sessions', 'week');

  statsPomodoroMonth.textContent = getCountByPeriod(stats, 'pomodoro-sessions', 'month');
  statsTasksMonth.textContent = getCountByPeriod(stats, 'tasks-completed', 'month');
  statsMeditationMonth.textContent = getCountByPeriod(stats, 'meditation-sessions', 'month');
}

// Increment Statistics
function incrementStats(key) {
  const s = loadStats();
  s[key] = (s[key] || 0) + 1;
  s.history = s.history || [];
  s.history.push({
    type: key,
    timestamp: Date.now(),
  });
  saveStats(s);
  updateStatsDisplay();
}

// Filter by Period
function getCountByPeriod(stats, eventType, period) {
  if (!stats.history) return 0;
  const now = new Date();

  return stats.history.filter((ev) => {
    if (ev.type !== eventType) return false;
    const d = new Date(ev.timestamp);
    switch (period) {
      case 'day':
        return d.toDateString() === now.toDateString();
      case 'week':
        return getYearWeek(d) === getYearWeek(now) && d.getFullYear() === now.getFullYear();
      case 'month':
        return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
    }
    return false;
  }).length;
}

function getYearWeek(d) {
  // Renvoie le numéro de semaine (ISO) de l'année
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - dayNum + 3);
  const firstThursday = date.getTime();
  date.setUTCMonth(0, 1);
  const startYear = date.getTime();
  return Math.floor((firstThursday - startYear) / (7 * 24 * 3600 * 1000)) + 1;
}

// Initialisation
function init() {
  loadPreferences();
  langButtons.forEach(b => {
    if (b.getAttribute('data-lang') === currentLang) {
      b.classList.add('active');
    }
  });
  themeButtons.forEach(b => {
    if (b.getAttribute('data-theme') === currentTheme) {
      b.classList.add('active');
    }
  });

  initPomodoroDisplay();
  updateStatsDisplay();
  updateMeditationDynamicTexts();
}

document.addEventListener('DOMContentLoaded', init);
