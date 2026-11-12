# Bewerbung

„Frag Marcel“ – Bewerbungsseite als Chat: Besucher stellen Fragen zu Marcel, links geht es direkt zu Lebenslauf, Projekten & Co. Schlichtes HTML, gehostet über GitHub Pages.

## Aufbau

```
index.html              allgemeine Bewerbung
assets/content.js       ALLE Inhalte (Chat-Antworten, Lebenslauf, Projekte, Skills) – nur hier pflegen
assets/style.css        Layout
assets/render.js        baut die Seite aus den Inhalten
firmen/_vorlage/        Vorlage für eine firmenspezifische Bewerbung
firmen/<firma>/         je Firma ein Ordner mit eigener CI + Anschreiben
```

## Neue Firma anlegen

1. Ordner `firmen/_vorlage` kopieren und umbenennen, z. B. `firmen/musterfirma`.
2. In `index.html` den Block `window.FIRMA` ausfüllen (Name, Betreff, Anschreiben).
3. In `theme.css` die CI-Farben (und ggf. Schrift) eintragen.
4. Optional: Logo in den Ordner legen und unter `logo` eintragen.

Link für die Firma: `https://steiner2828.github.io/Bewerbung/firmen/musterfirma/`

## PDF

Auf der Seite „Als PDF speichern“ klicken (Druckdialog → „Als PDF speichern“).

## Chat-Antworten

In `assets/content.js` unter `chat.antworten`: jede Antwort hat Stichworte und einen Text.
Im Text gehen `**fett**` und Sprunglinks wie `[Zum Lebenslauf](#erfahrung)`.
