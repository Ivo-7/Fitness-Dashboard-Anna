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
  const modeColor = { walk: "#a9c9dd", run: "#3d94c9" };

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
        <span><i style="background:#a9c9dd"></i>Gehen</span>
        <span><i style="background:#3d94c9"></i>Laufen</span>
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
      ${workout.intervalChart ? buildPaceChart(workout.intervalChart) : ''}
    `;
  } else if (workout.list) {
    bodyContent = `
      <ul class="mobility-list">
        ${workout.list.map(item => `
          <li>
            <span class="mobility-name">${item.name}</span>
            ${item.duration ? `<span class="mobility-duration">${item.duration}</span>` : ''}
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

function supplementGroupCard(group, expanded) {
  const key = 'supplement-group-' + group.time.toLowerCase();
  const isOpen = localStorage.getItem('open-' + key) === 'true' || expanded;
  const count = group.items.length;

  const body = count
    ? group.items.map(item => `
        <div class="supplement-item">
          <div class="supplement-item-title">${item.title}</div>
          <ul class="session-details">
            ${item.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      `).join('')
    : `<p class="empty-state">Keine Supplements in diesem Zeitfenster.</p>`;

  return `
    <div class="session c-blue ${isOpen ? 'open' : ''}" data-session-key="${key}">
      <button class="session-head" data-toggle="${key}">
        <span class="session-icon">${icons.supplement}</span>
        <span class="session-main">
          <span class="session-time">${count} Supplement${count === 1 ? '' : 's'}</span>
          <span class="session-title">${group.time}</span>
        </span>
        <span class="session-chevron">${icons.chevron}</span>
      </button>
      <div class="session-body">
        ${body}
      </div>
    </div>
  `;
}

function renderSupplementGroups(groups, listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  list.innerHTML = groups.map(g => supplementGroupCard(g, false)).join('');
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
      const container = card.parentElement;
      const exclusive = container.id !== 'supplements-list';

      // Andere offene Karten im selben Container schliessen (ausser bei den Supplements,
      // dort duerfen mehrere Zeitfenster gleichzeitig offen sein)
      if (exclusive) {
        container.querySelectorAll('.session.open').forEach(other => {
          if (other !== card) {
            other.classList.remove('open');
            localStorage.setItem('open-' + other.dataset.sessionKey, 'false');
          }
        });
      }

      const isOpen = card.classList.toggle('open');
      localStorage.setItem('open-' + btn.dataset.toggle, isOpen);
    });
  });
}

function enforceSingleOpenPerContainer() {
  document.querySelectorAll('#workout-list').forEach(container => {
    const openCards = container.querySelectorAll('.session.open');
    openCards.forEach((card, i) => {
      if (i > 0) {
        card.classList.remove('open');
        localStorage.setItem('open-' + card.dataset.sessionKey, 'false');
      }
    });
  });
}

renderWorkouts(workouts, 'workout-list');
renderSupplementGroups(supplementGroups, 'supplements-list');
enforceSingleOpenPerContainer();
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
