// Passwortschutz: entschlüsselt window.SCHUTZ (AES-GCM, Schlüssel per PBKDF2 aus dem Passwort)
// und lädt danach content.js und render.js. Ohne richtiges Passwort bleibt der Inhalt verschlüsselt.
(function () {
  const BASIS = (document.currentScript && document.currentScript.src || "").replace(/assets\/gate\.js.*$/, "");
  const S = window.SCHUTZ;
  const SPEICHER = "pw:" + location.pathname;
  const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

  async function entschluesseln(passwort) {
    const roh = await crypto.subtle.importKey("raw", new TextEncoder().encode(passwort), "PBKDF2", false, ["deriveKey"]);
    const schluessel = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: b64(S.salz), iterations: S.runden, hash: "SHA-256" },
      roh, { name: "AES-GCM", length: 256 }, false, ["decrypt"]
    );
    const klar = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64(S.iv) }, schluessel, b64(S.daten));
    return new TextDecoder().decode(klar);
  }

  function lade(src) {
    return new Promise((ok, fehler) => {
      const s = document.createElement("script");
      s.src = BASIS + src; s.onload = ok; s.onerror = fehler;
      document.body.appendChild(s);
    });
  }

  async function freischalten(code) {
    if (code) { const s = document.createElement("script"); s.textContent = code; document.body.appendChild(s); }
    const g = document.getElementById("gate"); if (g) g.remove();
    await lade("assets/content.js");
    await lade("assets/render.js");
  }

  function zeigeFormular() {
    const app = document.getElementById("app");
    app.insertAdjacentHTML("beforebegin", `
      <main id="gate" class="gate">
        <form class="gate__karte" autocomplete="off">
          ${window.GATE_LOGO ? `<img class="gate__logo" src="${window.GATE_LOGO}" alt="">` : ""}
          <img class="gate__bild" src="${BASIS}assets/bilder/marcel_avatar.jpg" alt="">
          <h1 class="gate__titel">Bewerbung von Marcel Steiner</h1>
          <p class="gate__text">Diese Seite ist passwortgeschützt.</p>
          <div class="gate__zeile">
            <input class="gate__feld" type="password" placeholder="Passwort" aria-label="Passwort" required>
            <button class="gate__knopf" type="submit" aria-label="Öffnen">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>
          <p class="gate__fehler" hidden>Das Passwort stimmt leider nicht.</p>
        </form>
      </main>`);
    const form = document.querySelector("#gate form");
    const feld = form.querySelector("input");
    const fehler = form.querySelector(".gate__fehler");
    feld.focus();
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const code = await entschluesseln(feld.value);
        try { sessionStorage.setItem(SPEICHER, feld.value); } catch (_) {}
        freischalten(code);
      } catch (_) {
        fehler.hidden = false; feld.select();
        form.classList.remove("gate__karte--wackeln"); void form.offsetWidth; form.classList.add("gate__karte--wackeln");
      }
    });
  }

  (async function start() {
    let gemerkt = null;
    try { gemerkt = sessionStorage.getItem(SPEICHER); } catch (_) {}
    if (gemerkt) {
      try { return freischalten(await entschluesseln(gemerkt)); } catch (_) {}
    }
    zeigeFormular();
  })();
})();
