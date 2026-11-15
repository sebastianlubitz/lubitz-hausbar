// Erzeugt aus index.html eine eigenständige Demo-Datei ohne Firebase.
// Bestand und Vorrat werden nur im Browser des Testers gespeichert (localStorage).
// Aufruf: node tools/export-demo.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let html = readFileSync(join(root, 'index.html'), 'utf8');
const seed = readFileSync(join(root, 'seed.js'), 'utf8').replace(/^export /gm, '');

const importBlock = /<script type="module">[\s\S]*?from '\.\/seed\.js(?:\?v=\d+)?';\r?\n/;
if (!importBlock.test(html)) throw new Error('Import-Block in index.html nicht gefunden.');
html = html.replace(importBlock, () => `<script>\n/* ---------- Startbestand (aus seed.js) ---------- */\n${seed}\n`);

const fbStart = html.indexOf('/* ---------- Firebase ---------- */');
const scriptEnd = html.lastIndexOf('</script>');
if (fbStart < 0 || scriptEnd < fbStart) throw new Error('Firebase-Abschnitt in index.html nicht gefunden.');

const demo = String.raw`/* ---------- Demo-Speicher: nur in diesem Browser ---------- */
const STORE_KEY = 'lubitz-hausbar-demo';
const freshStore = () => ({
  bottles: Object.fromEntries(SEED_BOTTLES.map(({ id, ...d }) => [id, d])),
  pantry: { fresh: { items: { ...SEED_PANTRY } } }
});
let store = null;
try { store = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { store = null; }
if (!store || !store.bottles) store = freshStore();
const listeners = new Set();
function persist() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ohne Speicher: nur bis zum Neuladen */ }
  listeners.forEach((fn) => fn());
}
const meta = { fromCache: false, hasPendingWrites: false };
const coll = (name) => (store[name] = store[name] || {});
db = {
  doc(path) {
    const [col, id] = path.split('/');
    return {
      update: async (d) => { if (!coll(col)[id]) throw { code: 'invalid_argument' }; coll(col)[id] = { ...coll(col)[id], ...d }; persist(); },
      set: async (d) => { coll(col)[id] = { ...d }; persist(); },
      delete: async () => { delete coll(col)[id]; persist(); },
      onSnapshot(next) {
        const fire = () => next({ id, exists: !!coll(col)[id], data: () => coll(col)[id], metadata: meta });
        listeners.add(fire); setTimeout(fire);
        return () => listeners.delete(fire);
      }
    };
  },
  collection(col) {
    return {
      add: async (d) => { const id = 'b' + Date.now().toString(36); coll(col)[id] = { ...d }; persist(); return { id }; },
      onSnapshot(next) {
        const fire = () => next({ docs: Object.entries(coll(col)).map(([id, d]) => ({ id, data: () => d })), metadata: meta });
        listeners.add(fire); setTimeout(fire);
        return () => listeners.delete(fire);
      }
    };
  }
};
function renderAuth() { /* Demo: keine Anmeldung */ }

role = 'host';
canWrite = true;
$('setup').innerHTML = '<strong>Demo-Version.</strong> Alles funktioniert wie im Original, aber Änderungen werden nur in diesem Browser gespeichert. <button class="link-btn" type="button" id="demo-reset">Demo zurücksetzen</button>';
$('setup').hidden = false;
$('setup').addEventListener('click', (e) => {
  if (e.target.id !== 'demo-reset') return;
  store = freshStore();
  persist();
  toast('Demo auf den Startbestand zurückgesetzt.');
});
$('b-list').addEventListener('click', (e) => {
  if (!e.target.closest('[data-act="seed"]')) return;
  store.bottles = freshStore().bottles;
  persist();
  toast(SEED_BOTTLES.length + ' Flaschen importiert.');
});
db.doc('pantry/fresh').onSnapshot((snap) => {
  pantry = snap.exists ? { ...((snap.data() || {}).items || {}) } : {};
  renderAll();
});
db.doc('pantry/plan').onSnapshot((snap) => {
  plan = snap.exists ? { ...((snap.data() || {}).items || {}) } : {};
  renderAll();
});
db.collection('bottles').onSnapshot((snap) => {
  bottles = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  dbState = 'ready';
  renderAll();
});
applyRole();
`;
html = html.slice(0, fbStart) + demo + html.slice(scriptEnd);
html = html.replace('<title>Lubitz Hausbar</title>', '<title>Lubitz Hausbar (Demo)</title>');

const out = join(root, 'Lubitz-Hausbar-Demo.html');
writeFileSync(out, html);
console.log('Geschrieben:', out, Math.round(html.length / 1024) + ' KB');
