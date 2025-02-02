// ================================================
// BUBBLY ANIMATED BACKGROUND
// ================================================
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

// ================================================
// TABS
// ================================================
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

// ================================================
// TRANSLATIONS & LANGUAGE HANDLING
// ================================================
const translations = {
  fr: {
    meditationTab: "Méditation",
    pomodoroTab: "Pomodoro",
    tasksTab: "Tâches",
    statisticsTab: "Statistiques",
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
    pomodoroSettings: "Paramètres du Pomodoro",
    workDuration: "Durée de travail (minutes)",
    shortBreak: "Pause courte (minutes)",
    longBreak: "Pause longue (minutes)",
    sessionsBeforeLong: "Sessions avant longue pause",
    endSound: "Son de fin",
    workLabel: "Travail",
    shortBreakLabel: "Pause courte",
    longBreakLabel: "Pause longue",
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
    startBtn: "Démarrer",
    pauseBtn: "Pause",
    resumeBtn: "Reprendre",
    resetBtn: "Réinitialiser",
    resetStats: "Réinitialiser stats",
    appSettings: "Paramètres de l'application",
    themeLabel: "Thème",
    languageLabel: "Langue",
  },
  en: {
    meditationTab: "Meditation",
    pomodoroTab: "Pomodoro",
    tasksTab: "Tasks",
    statisticsTab: "Statistics",
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
    pomodoroSettings: "Pomodoro Settings",
    workDuration: "Work Duration (minutes)",
    shortBreak: "Short Break (minutes)",
    longBreak: "Long Break (minutes)",
    sessionsBeforeLong: "Sessions Before Long Break",
    endSound: "End Sound",
    workLabel: "Work",
    shortBreakLabel: "Short Break",
    longBreakLabel: "Long Break",
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
    startBtn: "Start",
    pauseBtn: "Pause",
    resumeBtn: "Resume",
    resetBtn: "Reset",
    resetStats: "Reset Stats",
    appSettings: "App Settings",
    themeLabel: "Theme",
    languageLabel: "Language",
  },
  es: {
    meditationTab: "Meditación",
    pomodoroTab: "Pomodoro",
    tasksTab: "Tareas",
    statisticsTab: "Estadísticas",
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
    pomodoroSettings: "Configuración de Pomodoro",
    workDuration: "Duración de trabajo (minutos)",
    shortBreak: "Pausa corta (minutos)",
    longBreak: "Pausa larga (minutos)",
    sessionsBeforeLong: "Sesiones antes de la pausa larga",
    endSound: "Sonido al terminar",
    workLabel: "Trabajo",
    shortBreakLabel: "Pausa corta",
    longBreakLabel: "Pausa larga",
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
    startBtn: "Iniciar",
    pauseBtn: "Pausar",
    resumeBtn: "Reanudar",
    resetBtn: "Reiniciar",
    resetStats: "Reiniciar Stats",
    appSettings: "Configuración de la App",
    themeLabel: "Tema",
    languageLabel: "Idioma",
  },
  de: {
    meditationTab: "Meditation",
    pomodoroTab: "Pomodoro",
    tasksTab: "Aufgaben",
    statisticsTab: "Statistiken",
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
    pomodoroSettings: "Pomodoro-Einstellungen",
    workDuration: "Arbeitsdauer (Minuten)",
    shortBreak: "Kurze Pause (Minuten)",
    longBreak: "Lange Pause (Minuten)",
    sessionsBeforeLong: "Sessions vor langer Pause",
    endSound: "End-Sound",
    workLabel: "Arbeit",
    shortBreakLabel: "Kurze Pause",
    longBreakLabel: "Lange Pause",
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
    startBtn: "Starten",
    pauseBtn: "Pause",
    resumeBtn: "Fortsetzen",
    resetBtn: "Zurücksetzen",
    resetStats: "Statistiken zurücksetzen",
    appSettings: "App-Einstellungen",
    themeLabel: "Thema",
    languageLabel: "Sprache",
  }
};

let currentLang = 'fr';
let currentTheme = 'light';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('appLang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  updateMeditationDynamicTexts();
  updatePomodoroDynamicTexts();
}

function applyTheme(theme) {
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

const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const lang = btn.getAttribute('data-lang');
    applyLanguage(lang);
  });
});

const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const theme = btn.getAttribute('data-theme');
    applyTheme(theme);
  });
});

// ================================================
// MEDITATION
// ================================================
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

function updateMeditationParams() {
  inhaleValue.textContent = inhaleSlider.value;
  holdValue.textContent = holdSlider.value;
  exhaleValue.textContent = exhaleSlider.value;
  cyclesValue.textContent = cyclesSlider.value;

  localStorage.setItem('inhale-time', inhaleSlider.value);
  localStorage.setItem('hold-time', holdSlider.value);
  localStorage.setItem('exhale-time', exhaleSlider.value);
  localStorage.setItem('cycles-count', cyclesSlider.value);
}

[inhaleSlider, holdSlider, exhaleSlider, cyclesSlider].forEach((slider) => {
  slider.addEventListener('input', updateMeditationParams);
});
updateMeditationParams();

function loadMeditationSounds() {
  const backgroundValue = localStorage.getItem('background-sound') || backgroundSelect.value;
  const breatheValue = localStorage.getItem('breathe-sound') || breatheSelect.value;

  if (backgroundValue === 'none') {
    backgroundAudio.src = '';
    backgroundAudio.pause();
  } else {
    backgroundAudio.src = `assets/sounds/${backgroundValue}`;
  }
  
  if (breatheValue === 'none') {
    breatheAudio.src = '';
    breatheAudio.pause();
  } else {
    breatheAudio.src = `assets/sounds/${breatheValue}`;
  }
}
backgroundSelect.addEventListener('change', () => {
  localStorage.setItem('background-sound', backgroundSelect.value);
  loadMeditationSounds();
});
breatheSelect.addEventListener('change', () => {
  localStorage.setItem('breathe-sound', breatheSelect.value);
  loadMeditationSounds();
});
loadMeditationSounds();

function getTranslation(key) {
  const langDict = translations[currentLang];
  return (langDict && langDict[key]) ? langDict[key] : key;
}

function updateMeditationDynamicTexts() {
  if (!medIsRunning && currentCycle === 0 && !isPreparing) {
    phaseText.textContent = getTranslation('prepare');
  }
}

function runMeditationCycle() {
  if (!medIsRunning || isPreparing) return;

  const inhaleTime = parseInt(localStorage.getItem('inhale-time') || inhaleSlider.value);
  const holdTime = parseInt(localStorage.getItem('hold-time') || holdSlider.value);
  const exhaleTime = parseInt(localStorage.getItem('exhale-time') || exhaleSlider.value);
  const totalCycles = parseInt(localStorage.getItem('cycles-count') || cyclesSlider.value);

  if (currentCycle >= totalCycles) {
    stopMeditation();
    incrementStats('meditation-sessions');
    return;
  }
  currentCycle++;

  phaseText.textContent = getTranslation('inhale');
  breatheCircle.style.transition = `transform ${inhaleTime}s ease-in-out`;
  breatheCircle.style.transform = 'scale(1.6)';
  if (breatheAudio.src) {
    breatheAudio.currentTime = 0;
    breatheAudio.play();
  }

  medTimeoutId = setTimeout(() => {
    phaseText.textContent = getTranslation('hold');
    breatheCircle.style.transition = `transform ${holdTime}s ease-in-out`;
    breatheCircle.style.transform = 'scale(1.6)';

    medTimeoutId = setTimeout(() => {
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
  phaseText.textContent = getTranslation('prepare');
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
      phaseText.textContent = getTranslation('prepare');
      prepareCountdown(3);
    } else {
      runMeditationCycle();
    }
  } else {
    medIsRunning = false;
    startMeditationBtn.textContent = getTranslation('resumeBtn');
    clearTimeout(medTimeoutId);
    backgroundAudio.pause();
    breatheAudio.pause();
  }
});
resetMeditationBtn.addEventListener('click', stopMeditation);

// ================================================
// POMODORO
// ================================================
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

function updatePomodoroParams() {
  workValue.textContent = workSlider.value;
  shortBreakValue.textContent = shortBreakSlider.value;
  longBreakValue.textContent = longBreakSlider.value;
  sessionsValue.textContent = sessionsSlider.value;

  localStorage.setItem('work-duration', workSlider.value);
  localStorage.setItem('short-break', shortBreakSlider.value);
  localStorage.setItem('long-break', longBreakSlider.value);
  localStorage.setItem('sessions', sessionsSlider.value);
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
  const backgroundValue = localStorage.getItem('pomodoro-background-sound') || pomodoroBackgroundSelect.value;
  const endValue = localStorage.getItem('pomodoro-end-sound') || pomodoroEndSelect.value;

  if (backgroundValue === 'none') {
    pomodoroBackgroundAudio.src = '';
    pomodoroBackgroundAudio.pause();
  } else {
    pomodoroBackgroundAudio.src = `assets/sounds/${backgroundValue}`;
  }
  
  if (endValue === 'none') {
    pomodoroEndAudio.src = '';
    pomodoroEndAudio.pause();
  } else {
    pomodoroEndAudio.src = `assets/sounds/${endValue}`;
  }
}
pomodoroBackgroundSelect.addEventListener('change', () => {
  localStorage.setItem('pomodoro-background-sound', pomodoroBackgroundSelect.value);
  loadPomodoroSounds();
});
pomodoroEndSelect.addEventListener('change', () => {
  localStorage.setItem('pomodoro-end-sound', pomodoroEndSelect.value);
  loadPomodoroSounds();
});
loadPomodoroSounds();

function updatePomodoroDynamicTexts() {
  if (isWorkPhase) {
    pomodoroStepLabel.textContent = getTranslation('workLabel');
  }
  else {
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

      if (pomodoroEndAudio.src) {
        pomodoroEndAudio.currentTime = 0;
        pomodoroEndAudio.play();
      }

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
    pomodoroRunning = false;
    clearInterval(pomodoroInterval);
    pomodoroBackgroundAudio.pause();
    pomodoroStartBtn.textContent = getTranslation('startBtn');
    pomodoroStartBtn.classList.remove('active');
  }
});

pomodoroResetBtn.addEventListener('click', () => {
  pomodoroRunning = false;
  clearInterval(pomodoroInterval);
  pomodoroBackgroundAudio.pause();
  pomodoroBackgroundAudio.currentTime = 0;
  isWorkPhase = true;
  sessionsCompleted = 0;
  
  const savedWorkDuration = localStorage.getItem('work-duration') || workSlider.value;
  timeLeft = parseInt(savedWorkDuration) * 60;
  
  pomodoroStepLabel.textContent = getTranslation('workLabel');
  updatePomodoroDisplay();
  pomodoroStartBtn.textContent = getTranslation('startBtn');
  pomodoroStartBtn.classList.remove('active');
});

function initPomodoroDisplay() {
  updatePomodoroDisplay();
}

// ================================================
// TASKS
// ================================================
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

colorDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    colorDots.forEach((d) => d.classList.remove('selected'));
    dot.classList.add('selected');
    selectedColor = dot.getAttribute('data-color');
  });
});

function loadTasks() {
  const data = localStorage.getItem('tasksData');
  tasks = data ? JSON.parse(data) : [];
}

function saveTasks() {
  localStorage.setItem('tasksData', JSON.stringify(tasks));
}

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

  const checkbox = document.createElement('div');
  checkbox.classList.add('task-checkbox');
  checkbox.addEventListener('click', () => toggleTaskCompletion(task.id));
  li.appendChild(checkbox);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('task-title');
  const inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.value = task.text;
  inputTitle.readOnly = true;

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

  const trashBtn = document.createElement('button');
  trashBtn.classList.add('trash-btn');
  trashBtn.innerHTML = '🗑';
  trashBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  });
  li.appendChild(trashBtn);

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

loadTasks();
renderTasks();

// ================================================
// STATISTICS
// ================================================
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

function loadStats() {
  const data = localStorage.getItem('appStats');
  return data ? JSON.parse(data) : {};
}

function saveStats(s) {
  localStorage.setItem('appStats', JSON.stringify(s));
}

resetStatsBtn.addEventListener('click', () => {
  localStorage.removeItem('appStats');
  updateStatsDisplay();
});

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
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - dayNum + 3);
  const firstThursday = date.getTime();
  date.setUTCMonth(0, 1);
  const startYear = date.getTime();
  return Math.floor((firstThursday - startYear) / (7 * 24 * 3600 * 1000)) + 1;
}

// ================================================
// MOBILE SETTINGS MODAL & UTILITY FUNCTIONS
// ================================================
function init() {
  loadPreferences();
  loadSoundPreferences();
  loadMeditationPreferences();
  loadPomodoroPreferences();
  
  const soundSelectors = {
    'background-sound': backgroundSelect,
    'breathe-sound': breatheSelect,
    'pomodoro-background-sound': pomodoroBackgroundSelect,
    'pomodoro-end-sound': pomodoroEndSelect
  };

  Object.entries(soundSelectors).forEach(([key, selector]) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      selector.value = savedValue;
    }
  });

  loadMeditationSounds();
  loadPomodoroSounds();

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

function updateThemeColor(theme) {
  let color;
  switch (theme) {
    case 'dark':
      color = '#121212';
      break;
    case 'nature':
      color = '#56ab2f';
      break;
    case 'abstract':
      color = '#ff8673';
      break;
    default:
      color = '#009688';
  }
  document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
}

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-theme');
    updateThemeColor(theme);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  updateThemeColor(localStorage.getItem('appTheme') || 'light');
});

document.addEventListener('DOMContentLoaded', init);

let wakeLock = null;

async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        console.log('Wake Lock released');
      });
    } catch (err) {
      console.error(`Wake Lock error: ${err.name}, ${err.message}`);
    }
  }
}

function releaseWakeLock() {
  if (wakeLock) {
    wakeLock.release();
    wakeLock = null;
  }
}

document.getElementById('start-meditation-btn').addEventListener('click', () => {
  if (!medIsRunning) {
    requestWakeLock();
  } else {
    releaseWakeLock();
  }
});

document.getElementById('pomodoro-start-btn').addEventListener('click', () => {
  if (!pomodoroRunning) {
    requestWakeLock();
  } else {
    releaseWakeLock();
  }
});

document.getElementById('reset-meditation-btn').addEventListener('click', releaseWakeLock);
document.getElementById('pomodoro-reset-btn').addEventListener('click', releaseWakeLock);

function initMobileUI() {
  const settingsModal = document.getElementById('settings-modal');
  const closeModalBtn = document.querySelector('.close-modal-btn');
  const settingsModalBody = document.querySelector('.settings-modal-body');

  const mobileTabs = document.querySelectorAll('.mobile-tab-button');
  const sections = {
    'meditation': document.getElementById('meditation-section'),
    'pomodoro': document.getElementById('pomodoro-section'),
    'tasks': document.getElementById('tasks-section'),
    'stats': document.getElementById('stats-section')
  };
  
  const controls = {
    'meditation': document.getElementById('meditation-controls-mobile'),
    'pomodoro': document.getElementById('pomodoro-controls-mobile'),
    'tasks': document.getElementById('tasks-controls-mobile'),
    'stats': document.getElementById('stats-controls-mobile')
  };

  mobileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');
      
      mobileTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      Object.values(sections).forEach(section => {
        if(section) section.classList.add('hidden');
      });
      Object.values(controls).forEach(control => {
        if(control) control.classList.add('hidden');
      });
      
      if (sections[tabName]) sections[tabName].classList.remove('hidden');
      if (controls[tabName]) controls[tabName].classList.remove('hidden');

      const desktopTab = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
      if(desktopTab) {
        desktopTab.click();
      }
    });
  });

  function syncButtonStates() {
    const buttonPairs = [
      ['start-meditation-btn-mobile', 'start-meditation-btn'],
      ['reset-meditation-btn-mobile', 'reset-meditation-btn'],
      ['pomodoro-start-btn-mobile', 'pomodoro-start-btn'],
      ['pomodoro-reset-btn-mobile', 'pomodoro-reset-btn']
    ];

    buttonPairs.forEach(([mobileId, desktopId]) => {
      const mobileBtn = document.getElementById(mobileId);
      const desktopBtn = document.getElementById(desktopId);
      
      if (mobileBtn && desktopBtn) {
        mobileBtn.textContent = desktopBtn.textContent;
        
        mobileBtn.addEventListener('click', () => {
          desktopBtn.click();
          setTimeout(() => {
            mobileBtn.textContent = desktopBtn.textContent;
          }, 50);
        });

        new MutationObserver(() => {
          mobileBtn.textContent = desktopBtn.textContent;
        }).observe(desktopBtn, {
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    });
  }

  const originalHandleSettingsClone = handleSettingsClone;
  handleSettingsClone = function(settingsClone) {
    const taskSettingsSection = settingsClone.querySelector('.setting-group:has(#task-text)');
    if (taskSettingsSection) {
      taskSettingsSection.remove();
    }
    const taskColorSection = settingsClone.querySelector('.color-palette');
    if (taskColorSection) {
      taskColorSection.parentElement.remove();
    }
    const addTaskButton = settingsClone.querySelector('#add-task-btn');
    if (addTaskButton) {
      addTaskButton.remove();
    }
    originalHandleSettingsClone(settingsClone);
  };

  function handleSettingsClone(settingsClone) {
    settingsClone.querySelectorAll('input[type="range"]').forEach(slider => {
      const originalSlider = document.querySelector(`#${slider.id}`);
      if (originalSlider) {
        slider.value = originalSlider.value;
        slider.nextElementSibling.textContent = slider.value;
        
        slider.addEventListener('input', () => {
          originalSlider.value = slider.value;
          slider.nextElementSibling.textContent = slider.value;
          
          const event = new Event('input', {
            bubbles: true,
            cancelable: true,
          });
          originalSlider.dispatchEvent(event);

          switch(slider.id) {
            case 'inhale-time':
              timeLeft = parseInt(slider.value) * 60;
              break;
            case 'hold-time':
              timeLeft = parseInt(slider.value) * 60;
              break;
            case 'exhale-time':
              timeLeft = parseInt(slider.value) * 60;
              break;
            case 'cycles-count':
              currentCycle = 0;
              break;
            case 'work-duration':
              if (!pomodoroRunning) {
                timeLeft = parseInt(slider.value) * 60;
                updatePomodoroDisplay();
              }
              break;
            case 'short-break':
            case 'long-break':
            case 'sessions':
              if (!pomodoroRunning) {
                updatePomodoroDisplay();
              }
              break;
          }
        });
      }
    });

    settingsClone.querySelectorAll('select').forEach(select => {
      const originalSelect = document.querySelector(`#${select.id}`);
      if (originalSelect) {
        const savedValue = localStorage.getItem(select.id);
        select.value = savedValue || originalSelect.value;
        
        select.addEventListener('change', () => {
          originalSelect.value = select.value;
          localStorage.setItem(select.id, select.value);
          
          const event = new Event('change', {
            bubbles: true,
            cancelable: true,
          });
          originalSelect.dispatchEvent(event);

          switch(select.id) {
            case 'background-sound':
            case 'breathe-sound':
              loadMeditationSounds();
              break;
            case 'pomodoro-background-sound':
            case 'pomodoro-end-sound':
              loadPomodoroSounds();
              break;
          }
        });
      }
    });

    settingsClone.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.getAttribute('data-theme') === localStorage.getItem('appTheme')) {
        btn.classList.add('active');
      }
      
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        settingsClone.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.theme-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-theme') === theme);
        });
        
        document.body.className = `theme-${theme}`;
        localStorage.setItem('appTheme', theme);
        updateThemeColor(theme);
      });
    });

    settingsClone.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === currentLang) {
        btn.classList.add('active');
      }
      
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        
        settingsClone.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.lang-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
        
        handleLanguageChange(lang);
      });
    });

    const clearAllBtn = settingsClone.querySelector('#clear-all-tasks-btn');
    const clearCompletedBtn = settingsClone.querySelector('#clear-completed-tasks-btn');
    const undoTaskBtn = settingsClone.querySelector('#undo-btn');

    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        pushUndoState();
        tasks = [];
        saveTasks();
        renderTasks();
        closeSettingsModal();
      });
    }

    if (clearCompletedBtn) {
      clearCompletedBtn.addEventListener('click', () => {
        pushUndoState();
        tasks = tasks.filter(t => !t.completed);
        saveTasks();
        renderTasks();
        closeSettingsModal();
      });
    }

    if (undoTaskBtn) {
      undoTaskBtn.addEventListener('click', () => {
        undo();
        closeSettingsModal();
      });
    }

    const addTaskBtn = settingsClone.querySelector('#add-task-btn');
    const taskInput = settingsClone.querySelector('#task-text');
    const colorPalette = settingsClone.querySelector('#task-color-palette');
    
    if (addTaskBtn && taskInput) {
      addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
          const selectedColor = colorPalette.querySelector('.color-dot.selected')?.getAttribute('data-color') || '#FFE0B2';
          
          const task = {
            id: Date.now(),
            text: taskInput.value,
            completed: false,
            color: selectedColor
          };
          
          tasks.push(task);
          saveTasks();
          renderTasks();
          
          taskInput.value = '';
        }
      });

      colorPalette.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          colorPalette.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
          dot.classList.add('selected');
        });
      });
    }

    const resetStatsBtn = settingsClone.querySelector('#reset-stats-btn');
    if (resetStatsBtn) {
      resetStatsBtn.addEventListener('click', () => {
        localStorage.removeItem('appStats');
        updateStatsDisplay();
      });
    }
  }

  const settingsButtons = document.querySelectorAll('[id$="-settings-toggle"]');
  settingsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const controlsContainer = btn.closest('.controls-mobile');
      if (!controlsContainer) return;
      
      const tab = controlsContainer.id.replace('-controls-mobile', '');
      const currentSettings = document.querySelector(`#${tab}-settings`);
      
      if (currentSettings) {
        const settingsClone = currentSettings.cloneNode(true);
        settingsModalBody.innerHTML = '';
        settingsModalBody.appendChild(settingsClone);
        
        handleSettingsClone(settingsClone);
        
        settingsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeSettingsModal() {
    const settingsModal = document.getElementById('settings-modal');
    if (!settingsModal) return;
    
    const settingsClone = settingsModal.querySelector('.settings-modal-body > *');
    if (settingsClone) {
      settingsClone.querySelectorAll('select').forEach(select => {
        const originalSelect = document.querySelector(`#${select.id}`);
        if (originalSelect) {
          originalSelect.value = select.value;
          localStorage.setItem(select.id, select.value);
          
          if (select.id.includes('sound')) {
            if (select.id.includes('pomodoro')) {
              loadPomodoroSounds();
            } else {
              loadMeditationSounds();
            }
          }
        }
      });

      settingsClone.querySelectorAll('input[type="range"]').forEach(slider => {
        const originalSlider = document.querySelector(`#${slider.id}`);
        if (originalSlider) {
          originalSlider.value = slider.value;
          
          switch(slider.id) {
            case 'inhale-time':
              inhaleValue.textContent = slider.value;
              break;
            case 'hold-time':
              holdValue.textContent = slider.value;
              break;
            case 'exhale-time':
              exhaleValue.textContent = slider.value;
              break;
            case 'cycles-count':
              cyclesValue.textContent = slider.value;
              break;
            case 'work-duration':
              workValue.textContent = slider.value;
              if (!pomodoroRunning) {
                timeLeft = parseInt(slider.value) * 60;
                updatePomodoroDisplay();
              }
              break;
            case 'short-break':
              shortBreakValue.textContent = slider.value;
              break;
            case 'long-break':
              longBreakValue.textContent = slider.value;
              break;
            case 'sessions':
              sessionsValue.textContent = slider.value;
              break;
          }

          localStorage.setItem(slider.id, slider.value);

          const event = new Event('input', { bubbles: true });
          originalSlider.dispatchEvent(event);
        }
      });

      if (settingsClone.id === 'meditation-settings') {
        if (!medIsRunning) {
          currentCycle = 0;
          isPreparing = false;
          phaseText.textContent = getTranslation('prepare');
          breatheCircle.style.transform = 'scale(1)';
        }
      }
    }

    settingsModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeSettingsModal();
    });
  }

  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) {
        closeSettingsModal();
      }
    });
  }

  const modalContent = document.querySelector('.settings-modal-content');
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  syncButtonStates();

  const tasksControlsMobile = document.getElementById('tasks-controls-mobile');
  if (tasksControlsMobile) {
    tasksControlsMobile.innerHTML = `
      <button id="tasks-settings-toggle" class="btn settings-btn">
        <i class="fas fa-cog"></i>
      </button>
      <button id="add-task-btn-mobile" class="btn">
        <i class="fas fa-plus"></i>
        ${getTranslation('addTaskBtn')}
      </button>
    `;

    const settingsBtn = tasksControlsMobile.querySelector('#tasks-settings-toggle');
    settingsBtn.addEventListener('click', () => {
      const modalContent = `
        <div class="settings">
          <h2 data-i18n="manageTasks">${getTranslation('manageTasks')}</h2>
          <div class="tasks-manage">
            <button id="clear-all-tasks-btn" class="btn btn-block" data-i18n="clearAllTasks">${getTranslation('clearAllTasks')}</button>
            <button id="clear-completed-tasks-btn" class="btn btn-block" data-i18n="clearCompletedTasks">${getTranslation('clearCompletedTasks')}</button>
            <button id="undo-btn" class="btn btn-block" data-i18n="undoLastAction">${getTranslation('undoLastAction')}</button>
          </div>
        </div>
      `;
      settingsModalBody.innerHTML = modalContent;
      settingsModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const clearAllBtn = settingsModalBody.querySelector('#clear-all-tasks-btn');
      const clearCompletedBtn = settingsModalBody.querySelector('#clear-completed-tasks-btn');
      const undoTaskBtn = settingsModalBody.querySelector('#undo-btn');

      if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
          pushUndoState();
          tasks = [];
          saveTasks();
          renderTasks();
          closeSettingsModal();
        });
      }

      if (clearCompletedBtn) {
        clearCompletedBtn.addEventListener('click', () => {
          pushUndoState();
          tasks = tasks.filter(t => !t.completed);
          saveTasks();
          renderTasks();
          closeSettingsModal();
        });
      }

      if (undoTaskBtn) {
        undoTaskBtn.addEventListener('click', () => {
          undo();
          closeSettingsModal();
        });
      }
    });

    const addTaskBtnMobile = tasksControlsMobile.querySelector('#add-task-btn-mobile');
    addTaskBtnMobile.addEventListener('click', () => {
      const modalContent = `
        <div class="settings">
          <h2 data-i18n="createNewTask">${getTranslation('createNewTask')}</h2>
          <div class="setting-group">
            <input type="text" id="task-text-modal" placeholder="${getTranslation('taskPlaceholder')}" />
          </div>
          <label data-i18n="colorLabel">${getTranslation('colorLabel')}</label>
          <div class="color-palette" id="task-color-palette-modal">
            <div class="color-dot selected" data-color="#FFE0B2" style="background-color: #FFE0B2;"></div>
            <div class="color-dot" data-color="#C8E6C9" style="background-color: #C8E6C9;"></div>
            <div class="color-dot" data-color="#BBDEFB" style="background-color: #BBDEFB;"></div>
            <div class="color-dot" data-color="#E1BEE7" style="background-color: #E1BEE7;"></div>
            <div class="color-dot" data-color="#FFCCBC" style="background-color: #FFCCBC;"></div>
            <div class="color-dot" data-color="#D7CCC8" style="background-color: #D7CCC8;"></div>
          </div>
          <button id="add-task-modal-btn" class="btn" data-i18n="addTaskBtn">${getTranslation('addTaskBtn')}</button>
        </div>
      `;
      settingsModalBody.innerHTML = modalContent;
      settingsModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const colorPalette = settingsModalBody.querySelector('#task-color-palette-modal');
      let selectedColor = '#FFE0B2';
      colorPalette.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          colorPalette.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
          dot.classList.add('selected');
          selectedColor = dot.getAttribute('data-color');
        });
      });

      const addTaskModalBtn = settingsModalBody.querySelector('#add-task-modal-btn');
      const taskInput = settingsModalBody.querySelector('#task-text-modal');
      
      addTaskModalBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
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
          closeSettingsModal();
        }
      });

      taskInput.focus();
    });
  }

  const statsControlsMobile = document.getElementById('stats-controls-mobile');
  if (statsControlsMobile) {
    statsControlsMobile.innerHTML = `
      <button id="stats-settings-toggle" class="btn settings-btn-large">
        <i class="fas fa-cog"></i>
        <span data-i18n="appSettings">${getTranslation('appSettings')}</span>
      </button>
    `;

    const settingsBtn = statsControlsMobile.querySelector('#stats-settings-toggle');
    settingsBtn.addEventListener('click', () => {
      const currentSettings = document.querySelector('#stats-settings');
      if (currentSettings) {
        const settingsClone = currentSettings.cloneNode(true);
        settingsModalBody.innerHTML = '';
        settingsModalBody.appendChild(settingsClone);
        
        handleSettingsClone(settingsClone);
        
        settingsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  initMobileUI();
});

function updateSoundPreferences() {
  const backgroundSound = document.getElementById('background-sound').value;
  const breatheSound = document.getElementById('breathe-sound').value;
  updateMeditationSounds(backgroundSound, breatheSound);

  const pomodoroBackgroundSound = document.getElementById('pomodoro-background-sound').value;
  const pomodoroEndSound = document.getElementById('pomodoro-end-sound').value;
  updatePomodoroSounds(pomodoroBackgroundSound, pomodoroEndSound);
}

function loadSoundPreferences() {
  const soundSelectors = [
    'background-sound',
    'breathe-sound',
    'pomodoro-background-sound',
    'pomodoro-end-sound'
  ];

  soundSelectors.forEach(id => {
    const savedValue = localStorage.getItem(id);
    const selector = document.getElementById(id);
    if (savedValue && selector) {
      selector.value = savedValue;
      const event = new Event('change');
      selector.dispatchEvent(event);
    }
  });
}

function handleLanguageChange(lang) {
  currentLang = lang;
  localStorage.setItem('appLang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.title = translations[currentLang][key];
    }
  });

  const addTaskBtnMobile = document.getElementById('add-task-btn-mobile');
  if (addTaskBtnMobile) {
    addTaskBtnMobile.innerHTML = `
      <i class="fas fa-plus"></i>
      ${translations[currentLang]['addTaskBtn']}
    `;
  }
}

function loadMeditationPreferences() {
  const meditationParams = [
    'inhale-time',
    'hold-time',
    'exhale-time',
    'cycles-count'
  ];

  meditationParams.forEach(id => {
    const savedValue = localStorage.getItem(id);
    const slider = document.getElementById(id);
    if (savedValue && slider) {
      slider.value = savedValue;
      const valueDisplay = document.getElementById(`${id.replace('-time', '')}-value`);
      if (valueDisplay) {
        valueDisplay.textContent = savedValue;
      }
    }
  });
}

function loadPomodoroPreferences() {
  const pomodoroParams = [
    'work-duration',
    'short-break',
    'long-break',
    'sessions'
  ];

  pomodoroParams.forEach(id => {
    const savedValue = localStorage.getItem(id);
    const slider = document.getElementById(id);
    if (savedValue && slider) {
      slider.value = savedValue;
      const valueDisplay = document.getElementById(`${id}-value`);
      if (valueDisplay) {
        valueDisplay.textContent = savedValue;
      }
    }
  });

  const savedWorkDuration = localStorage.getItem('work-duration');
  if (savedWorkDuration) {
    timeLeft = parseInt(savedWorkDuration) * 60;
    updatePomodoroDisplay();
  }
}
