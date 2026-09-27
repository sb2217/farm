// KisanMart — Inline Edit Mode (CMS)
// Press Ctrl+Shift+E or click the Edit button to toggle edit mode

let editModeActive = false;
const EDIT_PASSWORD = "kisan2025"; // Change this password!
const STORAGE_KEY = "kisanmart_edits";

function toggleEditMode() {
  if (!editModeActive) {
    const pw = prompt("Enter admin password to enable Edit Mode:");
    if (pw !== EDIT_PASSWORD) {
      alert("❌ Wrong password!");
      return;
    }
  }
  editModeActive = !editModeActive;
  document.body.classList.toggle('edit-mode', editModeActive);
  const btn = document.getElementById('edit-mode-btn');
  if (btn) {
    btn.textContent = editModeActive ? '💾 Save & Exit' : '✏️ Edit Mode';
    btn.classList.toggle('active', editModeActive);
  }

  if (editModeActive) {
    enableEditing();
    showEditBar();
  } else {
    saveEdits();
    disableEditing();
    hideEditBar();
    showToast('✅ Changes saved!');
  }
}

function enableEditing() {
  // Make all editable text nodes contenteditable
  document.querySelectorAll('.editable-text').forEach(el => {
    el.setAttribute('contenteditable', 'true');
    el.setAttribute('spellcheck', 'false');
    el.classList.add('edit-highlight');
  });

  // Make prices editable
  document.querySelectorAll('.editable-price').forEach(el => {
    el.setAttribute('contenteditable', 'true');
    el.classList.add('edit-highlight-price');
  });
}

function disableEditing() {
  document.querySelectorAll('[contenteditable="true"]').forEach(el => {
    el.removeAttribute('contenteditable');
    el.classList.remove('edit-highlight', 'edit-highlight-price');
  });
}

function saveEdits() {
  const edits = {};
  document.querySelectorAll('.editable-text[data-edit-key], .editable-price[data-edit-key]').forEach(el => {
    const key = el.getAttribute('data-edit-key');
    edits[key] = el.innerHTML;
  });
  // Save product data if changed
  const savedEdits = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  Object.assign(savedEdits, edits);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedEdits));
}

function loadEdits() {
  const edits = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  Object.keys(edits).forEach(key => {
    const el = document.querySelector(`[data-edit-key="${key}"]`);
    if (el) el.innerHTML = edits[key];
  });
}

function showEditBar() {
  const bar = document.getElementById('edit-toolbar');
  if (bar) {
    bar.style.display = 'flex';
    bar.classList.add('slide-in');
  }
}

function hideEditBar() {
  const bar = document.getElementById('edit-toolbar');
  if (bar) {
    bar.classList.remove('slide-in');
    setTimeout(() => bar.style.display = 'none', 300);
  }
}

function resetEdits() {
  if (!confirm("Reset ALL content to default? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// Keyboard shortcut: Ctrl+Shift+E
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'E') {
    e.preventDefault();
    toggleEditMode();
  }
});

// Load saved edits on page ready
document.addEventListener('DOMContentLoaded', () => {
  // Add edit mode button to page
  const btn = document.createElement('button');
  btn.id = 'edit-mode-btn';
  btn.textContent = '✏️ Edit Mode';
  btn.title = 'Toggle Edit Mode (Ctrl+Shift+E)';
  btn.onclick = toggleEditMode;
  document.body.appendChild(btn);

  // Add edit toolbar
  const toolbar = document.createElement('div');
  toolbar.id = 'edit-toolbar';
  toolbar.innerHTML = `
    <span class="edit-toolbar-title">✏️ Edit Mode Active — Click any text to edit</span>
    <button onclick="saveEdits(); showToast('Saved!')" class="toolbar-btn save-btn">💾 Save</button>
    <button onclick="resetEdits()" class="toolbar-btn reset-btn">🔄 Reset All</button>
    <button onclick="toggleEditMode()" class="toolbar-btn exit-btn">✕ Exit Edit</button>
  `;
  toolbar.style.display = 'none';
  document.body.appendChild(toolbar);

  // Load any saved edits
  setTimeout(loadEdits, 500);
});
