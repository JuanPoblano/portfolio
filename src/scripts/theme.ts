import { editorial } from '../i18n/editorial';

export function syncThemeControl(): void {
  const button = document.querySelector<HTMLButtonElement>('.theme-toggle');
  if (!button) return;
  const light = document.documentElement.dataset.theme === 'light';
  const key = light ? 'theme.dark' : 'theme.light';
  const label = editorial[document.documentElement.lang]?.[key] ?? (light ? 'Dark mode' : 'Light mode');
  button.setAttribute('aria-pressed', String(light));
  button.setAttribute('aria-label', label);
  button.title = label;
  const text = button.querySelector<HTMLElement>('[data-i18n]');
  if (text) { text.dataset.i18n = key; text.textContent = label; }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f7f6fb' : '#0d0c11');
}

export function initializeTheme(): void {
  syncThemeControl();
  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('juan-theme', next); } catch { /* The control also works without storage. */ }
    syncThemeControl();
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'juan-theme') return;
    document.documentElement.dataset.theme = event.newValue === 'light' ? 'light' : 'dark';
    syncThemeControl();
  });
}
