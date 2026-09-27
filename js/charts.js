// KisanMart — Charts (Chart.js)

let chartsInitialized = false;

function initCharts() {
  if (chartsInitialized) return;
  chartsInitialized = true;

  // --- Chart 1: Yield Improvement Bar Chart ---
  const yieldCtx = document.getElementById('yieldChart');
  if (yieldCtx) {
    new Chart(yieldCtx, {
      type: 'bar',
      data: {
        labels: ['Premium\nCompost', 'Vermicompost', 'Neem Cake', 'Bio-Fertilizer', 'Seaweed\nExtract'],
        datasets: [{
          label: 'Yield Improvement (%)',
          data: [32, 41, 28, 38, 45],
          backgroundColor: [
            'rgba(45, 106, 79, 0.85)',
            'rgba(116, 198, 157, 0.85)',
            'rgba(92, 61, 17, 0.85)',
            'rgba(27, 122, 107, 0.85)',
            'rgba(10, 110, 138, 0.85)'
          ],
          borderColor: [
            '#2D6A4F', '#74C69D', '#5C3D11', '#1B7A6B', '#0A6E8A'
          ],
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1800, easing: 'easeOutBounce' },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` +${ctx.raw}% yield improvement`
            },
            backgroundColor: '#2D6A4F',
            titleColor: '#F5F0E8',
            bodyColor: '#F5F0E8',
            padding: 12
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 60,
            ticks: {
              callback: val => val + '%',
              color: '#5C3D11',
              font: { size: 13 }
            },
            grid: { color: 'rgba(92,61,17,0.1)' }
          },
          x: {
            ticks: {
              color: '#2D6A4F',
              font: { size: 12, weight: 'bold' }
            },
            grid: { display: false }
          }
        }
      }
    });
  }

  // --- Chart 2: Farmer Growth Line Chart ---
  const growthCtx = document.getElementById('growthChart');
  if (growthCtx) {
    new Chart(growthCtx, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'Farmers Served',
          data: [1200, 2800, 4500, 6200, 8400, 10800],
          borderColor: '#2D6A4F',
          backgroundColor: 'rgba(45, 106, 79, 0.15)',
          pointBackgroundColor: '#D4A017',
          pointBorderColor: '#2D6A4F',
          pointBorderWidth: 3,
          pointRadius: 7,
          pointHoverRadius: 10,
          borderWidth: 3,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 2000, easing: 'easeInOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.raw.toLocaleString('en-IN')} farmers`
            },
            backgroundColor: '#2D6A4F',
            titleColor: '#F5F0E8',
            bodyColor: '#F5F0E8',
            padding: 12
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: val => val >= 1000 ? (val/1000) + 'K' : val,
              color: '#5C3D11',
              font: { size: 13 }
            },
            grid: { color: 'rgba(92,61,17,0.1)' }
          },
          x: {
            ticks: { color: '#2D6A4F', font: { size: 13, weight: 'bold' } },
            grid: { display: false }
          }
        }
      }
    });
  }

  // --- Chart 3: Product Sales Doughnut ---
  const shareCtx = document.getElementById('shareChart');
  if (shareCtx) {
    new Chart(shareCtx, {
      type: 'doughnut',
      data: {
        labels: ['Premium Compost', 'Vermicompost', 'Neem Cake', 'Bio-Fertilizer', 'Seaweed Extract'],
        datasets: [{
          data: [28, 34, 18, 12, 8],
          backgroundColor: ['#2D6A4F', '#74C69D', '#5C3D11', '#D4A017', '#0A6E8A'],
          hoverBackgroundColor: ['#1A4D35', '#52A87D', '#3E2A0B', '#B08010', '#075470'],
          borderWidth: 3,
          borderColor: '#F5F0E8',
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1800, animateRotate: true, animateScale: true },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#5C3D11',
              font: { size: 12 },
              padding: 15,
              usePointStyle: true,
              pointStyleWidth: 12
            }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw}% of sales`
            },
            backgroundColor: '#2D6A4F',
            titleColor: '#F5F0E8',
            bodyColor: '#F5F0E8',
            padding: 12
          }
        },
        cutout: '65%'
      }
    });
  }
}

// --- Animated Stat Counters ---
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = prefix + Math.floor(current).toLocaleString('en-IN') + suffix;
    }, 16);
  });
}

// Use IntersectionObserver to trigger charts and counters when visible
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initCharts();
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
});
