// ---- Workout-Karten (aufklappbar mit Übungstabelle) ----

function workoutCard(workout, expanded) {
  const cfg = typeConfig[workout.type] || typeConfig.strength;
  const key = 'workout-' + workout.id;
  const isOpen = localStorage.getItem('open-' + key) === 'true' || expanded;

  let bodyContent = '';
  if (workout.exercises) {
    bodyContent = `
      <table class="exercise-table">
        <thead>
          <tr><th></th><th>Übung</th><th>Sätze × Wdh.</th></tr>
        </thead>
        <tbody>
          ${workout.exercises.map((ex) => `
            <tr>
              <td class="exercise-img-cell">${ex.icon && exerciseIcons[ex.icon] ? exerciseIcons[ex.icon] : ''}</td>
              <td>${ex.name}</td>
              <td>${ex.sets}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } else if (workout.sections) {
    bodyContent = `
      <table class="exercise-table section-table">
        <tbody>
          ${workout.sections.map(s => `
            <tr>
              <td class="section-label">${s.label}</td>
              <td>${s.content}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } else if (workout.list) {
    bodyContent = `
      <ul class="mobility-list">
        ${workout.list.map(item => `
          <li>
            <span class="mobility-img">${item.icon && exerciseIcons[item.icon] ? exerciseIcons[item.icon] : ''}</span>
            <span>${item.name}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  return `
    <div class="session c-${cfg.color} ${isOpen ? 'open' : ''}" data-session-key="${key}">
      <button class="session-head" data-toggle="${key}">
        <span class="session-icon">${icons[workout.type] || icons.strength}</span>
        <span class="session-main">
          <span class="session-time">${workout.subtitle || ''}</span>
          <span class="session-title">${workout.title}</span>
        </span>
        <span class="session-chevron">${icons.chevron}</span>
      </button>
      <div class="session-body">
        ${bodyContent}
      </div>
    </div>
  `;
}

function renderWorkouts(workoutList, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!workoutList.length) {
    container.innerHTML = `<p class="empty-state">Noch nichts hinterlegt.</p>`;
    return;
  }
  container.innerHTML = workoutList.map(w => workoutCard(w, false)).join('');
}

// ---- Einfache aufklappbare Themen-Karten (z.B. Supplements) ----

function sessionCard(session, expanded) {
  const cfg = typeConfig[session.type];
  const key = session.time.replace(/\s+/g, '-').toLowerCase() + '-' + session.title.slice(0, 20).replace(/\s+/g, '-').toLowerCase();
  const isOpen = localStorage.getItem('open-' + key) === 'true' || expanded;
  return `
    <div class="session c-${cfg.color} ${isOpen ? 'open' : ''}" data-session-key="${key}">
      <button class="session-head" data-toggle="${key}">
        <span class="session-icon">${icons[session.type]}</span>
        <span class="session-main">
          <span class="session-time">${session.time}</span>
          <span class="session-title">${session.title}</span>
        </span>
        <span class="session-chevron">${icons.chevron}</span>
      </button>
      <div class="session-body">
        <div class="session-meta">
          ${session.duration ? `<span class="meta-item">${icons.clock}${session.duration}</span>` : ''}
          ${session.target ? `<span class="meta-item">${icons.target}${session.target}</span>` : ''}
        </div>
        ${session.details.length ? `<ul class="session-details">${session.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  `;
}

function renderTopics(topics, listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  if (!topics.length) {
    list.innerHTML = `<p class="empty-state">Noch nichts hinterlegt.</p>`;
    return;
  }
  list.innerHTML = topics.map(t => sessionCard(t, false)).join('');
}

function attachSessionToggles() {
  document.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.session');
      const isOpen = card.classList.toggle('open');
      localStorage.setItem('open-' + btn.dataset.toggle, isOpen);
    });
  });
}

renderWorkouts(workouts, 'workout-list');
renderTopics(supplementRoutine, 'supplements-list');
attachSessionToggles();

// Tab-Wechsel
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    localStorage.setItem('activeTab', btn.dataset.tab);
  });
});

const savedTab = localStorage.getItem('activeTab');
if (savedTab) {
  const btn = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
  if (btn) btn.click();
}
