// ---- Workout-Karten (aufklappbar mit Übungstabelle) ----

function buildPaceChart(intervalChart) {
  // Segmente aus der Konfiguration in eine flache Liste auflösen (Wiederholungen expandieren)
  const flat = [];
  intervalChart.segments.forEach(seg => {
    if (seg.repeat) {
      for (let i = 0; i < seg.repeat; i++) {
        flat.push({ label: seg.label, min: seg.min, mode: seg.mode });
        if (seg.repeatWith) flat.push({ label: seg.repeatWith.label, min: seg.repeatWith.min, mode: seg.repeatWith.mode });
      }
    } else {
      flat.push(seg);
    }
  });

  const totalMin = flat.reduce((sum, s) => sum + s.min, 0);
  const W = 600, H = 120, baseline = 100, top = 14;
  const pxPerMin = W / totalMin;
  const modeHeight = { walk: 0.28, run: 0.85 };
  const modeColor = { walk: "#9cb8d6", run: "#d9542a" };

  let x = 0;
  const bars = flat.map(seg => {
    const w = seg.min * pxPerMin;
    const h = (baseline - top) * modeHeight[seg.mode];
    const y = baseline - h;
    const rect = `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${Math.max(w - 1, 0).toFixed(1)}" height="${h.toFixed(1)}" fill="${modeColor[seg.mode]}" rx="2"/>`;
    x += w;
    return rect;
  }).join('');

  return `
    <div class="pace-chart">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
        <line x1="0" y1="${baseline}" x2="${W}" y2="${baseline}" stroke="var(--border)" stroke-width="1.5"/>
        ${bars}
      </svg>
      <div class="pace-chart-legend">
        <span><i style="background:#9cb8d6"></i>Gehen</span>
        <span><i style="background:#d9542a"></i>Laufen</span>
        <span class="pace-chart-total">${totalMin} Min gesamt</span>
      </div>
    </div>
  `;
}

function workoutCard(workout, expanded) {
  const cfg = typeConfig[workout.type] || typeConfig.strength;
  const key = 'workout-' + workout.id;
  const isOpen = localStorage.getItem('open-' + key) === 'true' || expanded;

  let bodyContent = '';
  if (workout.exercises) {
    bodyContent = `
      <table class="exercise-table">
        <thead>
          <tr><th>Übung</th><th>Sätze × Wdh.</th><th></th></tr>
        </thead>
        <tbody>
          ${workout.exercises.map((ex) => `
            <tr>
              <td>${ex.name}</td>
              <td>${ex.sets}</td>
              <td class="exercise-img-cell">${
                ex.img
                  ? `<img src="${ex.img}" alt="${ex.name}" class="exercise-photo" loading="lazy">`
                  : (ex.icon && exerciseIcons[ex.icon] ? exerciseIcons[ex.icon] : '')
              }</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } else if (workout.sections) {
    bodyContent = `
      ${workout.intervalChart ? buildPaceChart(workout.intervalChart) : ''}
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
            <span class="mobility-name">${item.name}</span>
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
