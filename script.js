const statData = [
  { label: 'Active employees', value: '1,284', trend: '+12.4%', type: 'purple', icon: '◎' },
  { label: 'Avg. productivity', value: '86%', trend: '+4.9%', type: 'blue', icon: '↗' },
  { label: 'On-time rate', value: '94.2%', trend: '+1.8%', type: 'green', icon: '✓' },
  { label: 'Travel coverage', value: '72%', trend: '-2.1%', type: 'orange', icon: '◌' },
];

const chartData = [
  { label: 'Mon', value: 64 },
  { label: 'Tue', value: 82 },
  { label: 'Wed', value: 72 },
  { label: 'Thu', value: 94 },
  { label: 'Fri', value: 88 },
  { label: 'Sat', value: 70 },
];

const progressData = [
  { name: 'Sales goals', value: 81 },
  { name: 'Retention', value: 72 },
  { name: 'Training', value: 96 },
  { name: 'Project delivery', value: 88 },
];

const activityData = [
  { name: 'Nadia Shah', task: 'Completed site inspection and uploaded report.', time: '4 min ago', status: 'positive', team: 'purple', initials: 'NS' },
  { name: 'Martin Cole', task: 'Team review scheduled for field operations.', time: '17 min ago', status: 'neutral', team: 'blue', initials: 'MC' },
  { name: 'Alicia James', task: 'Shift coverage updated for logistics desk.', time: '32 min ago', status: 'positive', team: 'green', initials: 'AJ' },
  { name: 'Daniel Wu', task: 'Customer call score improved by 9%.', time: '56 min ago', status: 'neutral', team: 'orange', initials: 'DW' },
];

const statsGrid = document.getElementById('statsGrid');
const chartBars = document.getElementById('chartBars');
const progressList = document.getElementById('progressList');
const activityList = document.getElementById('activityList');

function renderStats() {
  statsGrid.innerHTML = statData
    .map(
      (item) => `
        <article class="stat-card">
          <div class="stat-top">
            <h3>${item.label}</h3>
            <div class="stat-icon ${item.type}">${item.icon}</div>
          </div>
          <div class="stat-value">
            <strong>${item.value}</strong>
            <span class="${item.trend.startsWith('-') ? 'stat-negative' : 'stat-positive'}">${item.trend}</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderBars() {
  const max = Math.max(...chartData.map((d) => d.value));

  chartBars.innerHTML = chartData
    .map(
      (item) => `
        <div class="bar-column">
          <div class="bar-track">
            <div class="bar-fill" style="height: ${(item.value / max) * 100}%"></div>
          </div>
          <span class="bar-label">${item.label}</span>
        </div>
      `
    )
    .join('');
}

function renderProgress() {
  progressList.innerHTML = progressData
    .map(
      (item) => `
        <div class="progress-item">
          <div class="progress-meta">
            <strong>${item.name}</strong>
            <span>${item.value}%</span>
          </div>
          <div class="bar-track-outer">
            <div class="bar-track-inner" style="width: ${item.value}%"></div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderActivity() {
  activityList.innerHTML = activityData
    .map(
      (item) => `
        <li class="activity-item">
          <div class="avatar ${item.team}">${item.initials}</div>
          <div class="activity-text">
            <p><strong>${item.name}</strong> ${item.task}</p>
            <small>${item.time}</small>
          </div>
          <span class="activity-status ${item.status === 'positive' ? 'positive' : 'neutral'}">${item.status === 'positive' ? 'Done' : 'Review'}</span>
        </li>
      `
    )
    .join('');
}

renderStats();
renderBars();
renderProgress();
renderActivity();
