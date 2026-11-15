# Lubitz Hausbar

Cocktailkarte und Barverwaltung als Web-App. Gäste sehen die Karte mit allen Drinks, die gerade gehen. Du meldest dich mit Google an und pflegst Bestand, frische Zutaten und Einkaufsliste – live auf allen Geräten.

- **Datenbank & Login:** Firebase (Firestore + Authentication mit Google)
- **Hosting:** GitHub Pages
- **Kein Build-Schritt:** reine HTML/JS-Dateien, Firebase wird direkt im Browser geladen

## Dateien

| Datei | Wofür |
|---|---|
| `index.html` | Die komplette App (Karte, Rezepte, Bestand, Einkauf) |
| `config.js` | Firebase-Projektdaten und deine Nutzer-ID – **musst du ausfüllen** |
| `seed.js` | Dein bisheriger Bestand, einmalig importierbar |
| `firestore.rules` | Zugriffsregeln: alle lesen, nur du schreibst |

## Einrichtung (einmalig, ca. 20 Minuten)

### 1. Firebase-Projekt anlegen
1. Auf <https://console.firebase.google.com> mit deinem Google-Konto ein neues Projekt anlegen, z. B. `lubitz-hausbar`. Google Analytics brauchst du nicht.
2. Im Projekt auf **Web** (Symbol `</>`) klicken, App registrieren (Name egal, **kein** Firebase Hosting ankreuzen).
3. Den angezeigten `firebaseConfig`-Block in `config.js` übernehmen (die Werte bei `apiKey`, `authDomain` usw. ersetzen).

### 2. Login aktivieren
**Build → Authentication → Jetzt starten → Anmeldemethode → Google** aktivieren und speichern.

### 3. Datenbank anlegen
**Build → Firestore Database → Datenbank erstellen**, Standort z. B. `europe-west3 (Frankfurt)`, im **Produktionsmodus** starten.

### 4. Auf GitHub Pages hochladen
1. Auf GitHub ein neues **öffentliches** Repository anlegen, z. B. `lubitz-hausbar`.
2. **Add file → Upload files**: `index.html`, `config.js`, `seed.js` hochladen und committen.
3. **Settings → Pages → Build and deployment**: Source „Deploy from a branch“, Branch `main`, Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten läuft die Seite unter `https://DEIN-GITHUB-NAME.github.io/lubitz-hausbar/`.

### 5. Domain für den Login freigeben
In Firebase: **Authentication → Einstellungen → Autorisierte Domains → Domain hinzufügen** → `DEIN-GITHUB-NAME.github.io`.

### 6. Dich als Besitzer eintragen
1. Seite öffnen, ganz unten auf **Anmelden** tippen, mit Google anmelden.
2. Oben erscheint deine **Nutzer-ID**. Kopieren.
3. In `config.js` bei `OWNER_UID` eintragen und die Datei auf GitHub neu hochladen (Upload überschreibt).
4. In Firebase: **Firestore Database → Regeln** – den Inhalt von `firestore.rules` einfügen, `DEINE_UID` (zweimal) durch deine ID ersetzen, **Veröffentlichen**.

### 7. Bestand übernehmen
Seite neu laden (angemeldet). Reiter **Bestand → Startbestand importieren**. Fertig.

## Alltag
- **Gäste:** Link teilen oder Gerät im **Gastmodus** herumreichen. Ohne Anmeldung sieht man nur die Karte.
- **Du:** auf jedem Gerät mit Google anmelden. Änderungen erscheinen sofort überall.
- **Änderungen am Code:** geänderte Datei auf GitHub neu hochladen, nach ein bis zwei Minuten ist sie live.

## Lokal testen
Die Seite braucht einen kleinen Webserver (wegen der JavaScript-Module), ein Doppelklick auf `index.html` reicht nicht. Am einfachsten direkt über GitHub Pages testen.
