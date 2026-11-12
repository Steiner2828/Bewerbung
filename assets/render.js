// „Frag Marcel“: Chat-Lebenslauf aus window.BEWERBUNG (Inhalte) und window.FIRMA (optional).
(function () {
  // Basis-Pfad des Projekts aus der Lage von assets/render.js ableiten
  const BASIS = (document.currentScript && document.currentScript.src || "").replace(/assets\/render\.js.*$/, "");
  const pfad = (x) => (!x || /^(https?:|data:|\/|\.\.\/)/.test(x) ? x : BASIS + x);
  const B = window.BEWERBUNG;
  const F = window.FIRMA || null;
  // Firmenspezifische Anpassungen: Stationen (z. B. anderer Vertrieb/Marketing-Anteil) und Chat-Antworten
  if (F && F.stationen) {
    B.stationen.forEach((st) => { if (F.stationen[st.id]) Object.assign(st, F.stationen[st.id]); });
  }
  if (F && F.antworten) {
    Object.entries(F.antworten).forEach(([stichwort, text]) => {
      const a = B.chat.antworten.find((x) => (x.stichworte || []).includes(stichwort));
      if (a) a.text = text;
    });
  }
  if (F && F.fragen) {
    B.chat.vorschlaege = B.chat.vorschlaege.map((f) => F.fragen[f] || f);
  }
  const p = B.person;
  const C = B.chat;
  // Firmenspezifische Frage „Warum Marcel und die <Firma>?“
  const direkt = {};
  if (F && F.warumWir && F.warumWir.length) {
    const frageFirma = F.frage || `Warum Marcel und ${F.artikel === undefined ? "die " : F.artikel ? F.artikel + " " : ""}${F.name}?`;
    direkt[frageFirma] = { text: F.warumWir.join("\n\n") + " [Zum Anschreiben](#anschreiben)" };
    C.vorschlaege = [frageFirma].concat(C.vorschlaege);
    C.antworten = [{ stichworte: ["warum marcel", "warum sie", "warum er", "warum wir", "zu uns", "passt"].concat(F.name.toLowerCase().split(/\s+/).filter((w) => w.length > 3)), text: direkt[frageFirma].text }].concat(C.antworten);
  }
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const initialen = (n) => n.split(/\s+/).map((w) => w[0]).filter((c) => c && /[A-ZÄÖÜ]/i.test(c)).slice(0, 2).join("").toUpperCase();

  document.title = F ? `${p.name} – Bewerbung für ${F.name}` : `${p.name} – Bewerbung`;

  const h = new Date().getHours();
  const tagesgruss = h < 11 ? "Guten Morgen" : h < 18 ? "Guten Tag" : "Guten Abend";
  const anrede = F && F.ansprechpartner ? `${tagesgruss}, ${F.ansprechpartner}!` : `${tagesgruss}!`;

  // --- Icons ---
  const icon = {
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    telefon: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    ort: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    pfeil: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    person: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
    neu: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    job: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    folder: '<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    spark: '<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    brief: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7M9 7h3"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
    frage: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.7"/><path d="M12 17h.01"/>',
    senden: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    zurueck: '<path d="M15 18l-6-6 6-6"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
  };
  const ico = (n) => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${icon[n]}</svg>`;

  // --- Lebenslauf-Bereiche (Absprungpunkte) ---
  const chips = (arr) => `<div class="chips">${arr.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;
  const kontaktLinks = [
    p.email && `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>`,
    p.telefon && `<a href="tel:${esc(p.telefon.replace(/\s/g, ""))}">${esc(p.telefon)}</a>`,
    p.ort && `<span>${esc(p.ort)}</span>`,
    ...(p.links || []).map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
  ].filter(Boolean);

  // Dauer aus „10/2017 – 10/2019“, „2012 – 2017“ oder „seit 06/2023“ berechnen
  function dauer(z) {
    const t = String(z).match(/(\d{1,2}\/)?\d{4}/g);
    if (!t || /\[/.test(z)) return "";
    const monat = (x) => { const [m, j] = x.includes("/") ? x.split("/") : ["1", x]; return +j * 12 + (+m - 1); };
    const jetzt = new Date();
    const von = monat(t[0]);
    const bis = t[1] ? monat(t[1]) : /seit|heute/i.test(z) ? jetzt.getFullYear() * 12 + jetzt.getMonth() : null;
    if (bis === null || bis <= von) return "";
    // Monate inklusive Start- und Endmonat zählen (06/2022 – 05/2023 = 12 Monate); reine Jahresangaben nicht
    const n = bis - von + (t[0].includes("/") ? 1 : 0), j = Math.floor(n / 12), m = n % 12;
    const tj = j ? `${j} ${j === 1 ? "Jahr" : "Jahre"}` : "", tm = m ? `${m} ${m === 1 ? "Monat" : "Monate"}` : "";
    return [tj, tm].filter(Boolean).join(", ");
  }

  // Ergebnisse/Kennzahlen als Spannen-Grafik
  const zahl = (v) => Number(v).toLocaleString("de-DE");
  function kennzahlenHtml(st) {
    if (!st.kennzahlen || !st.kennzahlen.length) return "";
    // Kästchen-Raster: raster = Anzahl Kästchen, start/ende = erstes/letztes orange Kästchen (1-basiert),
    // schraffiert = wie viele der letzten orangen Kästchen schraffiert sind („bis zu“)
    const symbol = {
      person: '<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="4.2"/><path d="M3.5 22c.6-5 4.2-8 8.5-8s7.9 3 8.5 8z"/></svg>',
      firma: '<svg viewBox="0 0 24 24"><path d="M3 22V8l7-4v5l7-4v17z"/><rect x="18" y="11" width="3" height="11"/></svg>'
    };
    return `<div class="kz">${st.kennzahlen.map((k, z) => {
      // Kennzahl als Chips (z. B. Einsatzbereiche)
      if (k.typ === "chips") return `
        <div class="kz__zeile">
          <span class="kz__label">${esc(k.label)}</span>
          <span class="kz__chips">${chips(k.items)}</span>
        </div>`;
      const n = k.raster || 20, start = k.start || 1, ende = k.ende || n, schraffiert = k.schraffiert || 0;
      const felder = Array.from({ length: n }, (_, i) => {
        const nr = i + 1;
        const cls = nr >= start && nr <= ende ? (nr > ende - schraffiert ? "h" : "f") : "";
        return `<i style="--k:${i + z * 4}" class="${cls}">${k.icon ? symbol[k.icon] : ""}</i>`;
      }).join("");
      const von = `<span class="kz__zahl" data-ziel="${k.von}">${zahl(k.von)}</span>`;
      const bis = `<span class="kz__zahl" data-ziel="${k.bis}">${zahl(k.bis)}</span>`;
      const wert = k.vonLabel || k.bisLabel
        ? `${esc(k.vonLabel || "")} ${von} · ${esc(k.bisLabel || "")} ${bis}`
        : `${von} – ${bis} ${esc(k.einheit || "")}`;
      return `
        <div class="kz__zeile">
          <span class="kz__label">${esc(k.label)}</span>
          <span class="kz__wert">${wert}</span>
          <span class="kz__felder${k.icon ? " kz__felder--icons" : ""}" style="--n:${k.spalten || n}">${felder}</span>
        </div>`;
    }).join("")}</div>`;
  }
  // Zahlen hochzählen, sobald eine Kennzahl sichtbar wird
  function zaehleHoch(root) {
    root.querySelectorAll(".kz:not(.gezaehlt)").forEach((kz) => {
      kz.classList.add("gezaehlt");
      kz.querySelectorAll(".kz__zahl").forEach((el) => {
        const ziel = +el.dataset.ziel, t0 = performance.now(), d = 1100;
        (function tick(t) {
          const f = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - f, 3);
          el.textContent = zahl(Math.round(ziel * e));
          if (f < 1) requestAnimationFrame(tick);
        })(t0);
      });
    });
  }

  // Länderflaggen für die Sprachen
  const flagge = {
    de: '<svg viewBox="0 0 5 3"><rect width="5" height="3" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg>',
    dk: '<svg viewBox="0 0 37 28"><rect width="37" height="28" fill="#C8102E"/><rect x="12" width="4" height="28" fill="#fff"/><rect y="12" width="37" height="4" fill="#fff"/></svg>',
    gb: '<svg viewBox="0 0 60 30"><clipPath id="gb-s"><path d="M0,0v30h60V0z"/></clipPath><clipPath id="gb-t"><path d="M30,15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#gb-s)"><path d="M0,0v30h60V0z" fill="#012169"/><path d="M0,0L60,30M60,0L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0L60,30M60,0L0,30" clip-path="url(#gb-t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/><path d="M30,0v30M0,15h60" stroke="#C8102E" stroke-width="6"/></g></svg>'
  };
  const toolIcon = {
    design: '<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"/><circle cx="11" cy="11" r="2"/></svg>',
    video: '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/></svg>',
    audio: '<svg viewBox="0 0 24 24"><path d="M3 12h2M7 8v8M11 4v16M15 7v10M19 10v4M21 12h0"/></svg>',
    crm: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    ki: '<svg viewBox="0 0 24 24"><path d="M12 3l2 5.5L19.5 10 14 12l-2 5.5L10 12 4.5 10 10 8.5z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
    werbung: '<svg viewBox="0 0 24 24"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 9a3 3 0 0 1 0 6M18 6a7 7 0 0 1 0 12"/></svg>',
    notiz: '<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7M9 7h3"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>'
  };

  const bereiche = [];
  const A = F && F.anschreiben
    ? { betreff: F.betreff || `Bewerbung bei ${F.name}`, anrede: F.anrede, absaetze: F.anschreiben, gruss: F.gruss, logo: F.logo }
    : B.anschreiben;
  const heuteLang = new Date().toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
  const anschreibenBereich = A && { id: "anschreiben", label: "Anschreiben", icon: "brief", nav: true, html: `
      <article class="brief">
        <header class="brief__kopf">
          <div class="brief__absender">
            ${p.foto ? `<img class="brief__foto" src="${esc(pfad(p.foto))}" alt="">` : ""}
            <div><strong>${esc(p.name)}</strong>${p.titel ? `<span>${esc(p.titel)}</span>` : ""}</div>
          </div>
        </header>
        <div class="brief__zeile">
          ${A.logo ? `<img class="firmenlogo" src="${esc(A.logo)}" alt="${esc(F ? F.name : "")}">` : `<span></span>`}
          <span class="brief__datum">${esc(p.ort ? p.ort + ", " : "")}${esc(heuteLang)}</span>
        </div>
        <h1 class="brief__betreff">${esc(A.betreff)}</h1>
        <div class="brief__text">
          ${A.anrede ? `<p class="brief__anrede">${esc(A.anrede)}</p>` : ""}
          ${A.absaetze.map((t, i) => `<p${i === 0 ? ' class="brief__einstieg"' : ""}>${esc(t)}</p>`).join("")}
        </div>
        <footer class="brief__schluss">
          ${A.gruss ? `<p>${esc(A.gruss)}</p>` : ""}
          ${p.unterschrift
            ? `<img class="brief__unterschrift-bild" src="${esc(pfad(p.unterschrift))}" alt="Unterschrift ${esc(p.name)}">`
            : `<span class="brief__unterschrift">${esc(p.name)}</span>`}
        </footer>
      </article>` };
  bereiche.push(
    { id: "erfahrung", label: "Lebenslauf", icon: "job", nav: true, html: `
      <div class="cv__kopf">
        <h1>Lebenslauf</h1>
        ${B.downloads ? `
          <div class="download">
            <span>${esc(B.downloads.text)}</span>
            <span class="download__knoepfe">${B.downloads.dateien.map((d) => `<a class="download__knopf" href="${esc(pfad(d.datei))}" download>${ico("download")}${esc(d.label)}</a>`).join("")}</span>
          </div>` : ""}
      </div>
      <div class="cv">
        <div class="slider">
          <button type="button" class="slider__pfeil slider__pfeil--zurueck" aria-label="Vorherige Station">${ico("zurueck")}</button>
          <div class="slider__fenster">
            <div class="slider__spur">
        <ol class="zeitleiste">
          <span class="zeitleiste__strich" aria-hidden="true"></span>
          <span class="zeitleiste__marker" aria-hidden="true"></span>
          ${B.stationen.map((st, i) => `
            <li class="halt${st.parallel ? " halt--parallel" : ""}" style="--i:${i}">
              <button type="button" class="halt__knopf" data-i="${i}">
                <span class="halt__punkt"></span>
                ${(st.dauer || dauer(st.zeitraum)) ? `<span class="halt__dauer">${esc(st.dauer || dauer(st.zeitraum))}</span>` : ""}
                <span class="halt__zeit">${esc(st.zeitraum)}</span>
                <strong>${esc(st.titel)}</strong>
                <span class="halt__ort">${esc(st.firma)}</span>
              </button>
            </li>`).join("")}
        </ol>
              <div class="boxreihe">
              ${B.stationen.map((st, i) => `
                <article class="box" data-i="${i}">
                  <div class="box__kopf">
                    ${st.logo ? `<div class="box__logo"><img src="${esc(pfad(st.logo))}" alt="${esc(st.firma)}"${st.logoHoehe ? ` style="max-height:${+st.logoHoehe}px"` : ""}></div>` : `<span class="cv__typ">${esc(st.typ)}</span>`}

                  </div>
                  <h2>${esc(st.titel)}</h2>
                  <p class="box__meta">
                    <strong>${esc(st.firma)}</strong>
                    ${st.branche ? `<span>${esc(st.branche)}</span>` : ""}
                    ${st.ort ? `<span>${esc(st.ort)}</span>` : ""}
                  </p>
                  ${st.note ? `<p class="box__note"><span>Abschlussnote</span><strong>${esc(st.note)}</strong></p>` : ""}
                  ${(st.text || []).map((t) => `<p class="cv__text">${esc(t)}</p>`).join("")}
                  ${st.anteil ? `
                    <div class="anteil" style="--v:${st.anteil.vertrieb}">
                      <div class="anteil__balken"><span></span></div>
                      <div class="anteil__legende"><span>${st.anteil.vertrieb} % Vertrieb</span><span>${st.anteil.marketing} % Marketing</span></div>
                    </div>` : ""}
                  ${st.punkte && st.punkte.length ? `<h3 class="cv__zwischen">Aufgaben</h3>${chips(st.punkte)}` : ""}
                  ${st.learnings ? `<h3 class="cv__zwischen">Top 3 Learnings</h3><ol class="learnings">${st.learnings.map((l) => `<li>${esc(l)}</li>`).join("")}</ol>` : ""}
                  ${st.kennzahlen ? `<h3 class="cv__zwischen">Ergebnisse</h3>${kennzahlenHtml(st)}` : ""}
                  ${st.tags ? chips(st.tags) : ""}
                </article>`).join("")}
              </div>
            </div>
          </div>
          <button type="button" class="slider__pfeil slider__pfeil--vor" aria-label="Nächste Station">${ico("zurueck")}</button>
        </div>
      </div>` },
    { id: "projekte", label: "Projekte", icon: "folder", html: `
      <h1>Projekte</h1>
      <div class="raster">${B.projekte.map((pr) => `
        <div class="block">
          <h2>${esc(pr.titel)}</h2><p>${esc(pr.text)}</p>${chips(pr.tags)}
          ${pr.link ? `<p><a class="btn" href="${esc(pr.link)}" target="_blank" rel="noopener">Ansehen ${ico("ext")}</a></p>` : ""}
        </div>`).join("")}</div>` },
    { id: "kenntnisse", label: "Skills", icon: "spark", nav: true, html: `
      <div class="skills">
        <h1>Skills</h1>
        <h2 class="cv__zwischen">Sprachen</h2>
        <div class="sprachen">${B.skills.sprachen.map((sp) => `
          <div class="sprache">
            <span class="sprache__ring">
              <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="ring__grund" cx="50" cy="50" r="46"/><circle class="ring__wert" cx="50" cy="50" r="46" pathLength="100" data-wert="${(sp.wert / (sp.max || 10)) * 100}"/></svg>
              <span class="sprache__flagge">${flagge[sp.flagge] || ""}</span>
            </span>
            <span class="sprache__text"><strong>${esc(sp.name)}</strong><span><span class="kz__zahl" data-ziel="${sp.wert}">${sp.wert}</span> / ${sp.max || 10}</span></span>
          </div>`).join("")}
        </div>
        <div class="skills__spalten">
          <section class="skills__hard">
            <h2 class="skills__titel">${B.skills.soft ? "Hard Skills" : "Programme"}</h2>
            ${B.skills.gruppen.map((g) => `
              <h3 class="skills__gruppe">${esc(g.titel)}</h3>
              <div class="tools">${g.tools.map((t) => `
                <div class="tool">
                  <span class="tool__logo">${t.logo ? `<img src="${esc(pfad(t.logo))}" alt="">` : toolIcon[t.icon || g.icon] || ""}</span>
                  <span class="tool__name">${esc(t.name)}${t.zusatz ? `<small>${esc(t.zusatz)}</small>` : ""}</span>
                </div>`).join("")}
              </div>`).join("")}
          </section>
          ${B.skills.soft ? `
          <section class="skills__soft">
            <h2 class="skills__titel">Soft Skills</h2>
            <ol class="soft">${B.skills.soft.map((k, i) => `
              <li class="soft__punkt"><span class="soft__nr">${String(i + 1).padStart(2, "0")}</span><span><strong>${esc(k.titel)}</strong><span>${esc(k.text)}</span></span></li>`).join("")}
            </ol>
          </section>` : ""}
        </div>
      </div>` },
    { id: "kontakt", label: "Kontakt", icon: "mail", html: `
      <div class="kontakt-seite">
        <div class="kontakt-seite__kopf">
          ${avatarHtml("kontakt")}
          <div><h1>${esc(p.name)}</h1><p class="leise">Ich freue mich auf deine Nachricht.</p></div>
        </div>
        <div class="kontakt-karten">
          ${p.email ? `<a class="kontakt-karte" href="mailto:${esc(p.email)}"><span class="kontakt-karte__icon">${ico("mail")}</span><span><small>E-Mail</small><strong>${esc(p.email)}</strong></span></a>` : ""}
          ${p.telefon ? `<a class="kontakt-karte" href="tel:${esc(p.telefon.replace(/\s/g, ""))}"><span class="kontakt-karte__icon">${ico("telefon")}</span><span><small>Telefon</small><strong>${esc(p.telefon)}</strong></span></a>` : ""}
          ${p.ort ? `<div class="kontakt-karte"><span class="kontakt-karte__icon">${ico("ort")}</span><span><small>Wohnort</small><strong>${esc(p.ort)}</strong></span></div>` : ""}
          ${(p.links || []).map((l) => `<a class="kontakt-karte" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="kontakt-karte__icon kontakt-karte__icon--logo">${l.logo ? `<img src="${esc(pfad(l.logo))}" alt="">` : ico("ext")}</span><span><small>${esc(l.label)}</small><strong>${esc(l.anzeige || l.label)}</strong></span></a>`).join("")}
        </div>
      </div>` }
  );
  if (anschreibenBereich) bereiche.splice(1, 0, anschreibenBereich);
  const U = B.ueberMich;
  function alterVon(datum) {
    if (!datum) return "";
    const g = new Date(datum), h = new Date();
    let a = h.getFullYear() - g.getFullYear();
    if (h.getMonth() < g.getMonth() || (h.getMonth() === g.getMonth() && h.getDate() < g.getDate())) a--;
    return String(a);
  }
  const W = B.warum;
  // Letzter Absatz pro Firma: F.warumSchluss, sonst automatisch mit Firmenname
  if (W && F) {
    const zuschnitt = F.frage ? "auf diese Rolle" : `auf ${F.artikel === undefined ? "die " : F.artikel ? F.artikel + " " : ""}${F.name}`;
    W.absaetze[W.absaetze.length - 1] = F.warumSchluss ||
      `Diese Seite ist meine Antwort darauf: persönlich, ${zuschnitt} zugeschnitten und so gebaut, dass du genau die Fragen stellen kannst, die dich wirklich interessieren.`;
  }
  const warumBereich = W && { id: "warum", label: "Warum diese Bewerbung?", icon: "frage", nav: true, html: `
      <article class="warum">
        <h1>${esc(W.titel)}</h1>
        ${W.lead ? `<p class="warum__lead">${esc(W.lead)}</p>` : ""}
        ${W.absaetze.map((t) => `<p class="cv__text">${esc(t)}</p>`).join("")}
        ${W.zitat ? `<blockquote class="warum__zitat">${esc(W.zitat)}<cite>${esc(p.name)}</cite></blockquote>` : ""}
        ${W.hinweis && B.downloads ? `<p class="warum__hinweis">${esc(W.hinweis)} <a href="#erfahrung">Lebenslauf als PDF oder Word herunterladen ${ico("pfeil")}</a></p>` : ""}
      </article>` };
  if (U) bereiche.splice(anschreibenBereich ? 2 : 1, 0, { id: "ueber-mich", label: "Über mich", icon: "person", nav: true, html: `
      <div class="ueber">
        <div class="ueber__kopf">
          ${U.bild ? `<img class="ueber__bild" src="${esc(pfad(U.bild))}" alt="${esc(p.name)}">` : `<div class="ueber__bild ueber__bild--leer">${esc(initialen(p.name))}</div>`}
          <div>
            <h1>${esc(U.titel || "Über mich")}</h1>
            ${U.intro.map((t) => `<p class="cv__text">${esc(t)}</p>`).join("")}
          </div>
        </div>
        ${U.steckbrief ? `<dl class="steckbrief">${U.steckbrief.map((z) => `<div><dt>${esc(z.label)}</dt><dd>${z.link ? `<a href="${esc(z.link)}">${esc(z.wert)}</a>` : esc(z.wert.replace("{alter}", alterVon(U.geburtsdatum)))}</dd></div>`).join("")}</dl>` : ""}
        ${U.staerken ? `<h2 class="cv__zwischen">Meine Stärken</h2>${chips(U.staerken)}` : ""}
        ${U.hobbys ? `<h2 class="cv__zwischen">Hobbys</h2>
          <div class="ueber__hobbys">${U.hobbys.map((h) => `
            <div class="hobby"><strong>${esc(h.name)}</strong>${h.text ? `<span>${esc(h.text)}</span>` : ""}</div>`).join("")}
          </div>` : ""}
        ${U.buecher ? `<h2 class="cv__zwischen">${esc(U.buecher.titel)}</h2>
          <div class="buecher">${U.buecher.liste.map((b) => `
            <figure class="buch">
              <span class="buch__cover">${b.cover ? `<img src="${esc(pfad(b.cover))}" alt="Cover: ${esc(b.titel)}" loading="lazy">` : ""}</span>
              <figcaption><strong>${esc(b.titel)}</strong><span>${esc(b.autor)}</span></figcaption>
            </figure>`).join("")}
          </div>` : ""}
        ${U.musik ? `<h2 class="cv__zwischen">${esc(U.musik.titel)}</h2>
          ${U.musik.text ? `<p class="leise">${esc(U.musik.text)}</p>` : ""}
          <div class="musik">${U.musik.tracks.map((t) => `
            <a class="song" href="https://open.spotify.com/track/${esc(t.id)}" target="_blank" rel="noopener">
              <span class="song__cover">
                ${t.cover ? `<img src="${esc(pfad(t.cover))}" alt="Cover ${esc(t.titel)}">` : `<span class="song__note">♪</span>`}
                <span class="song__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
              </span>
              <span class="song__text">
                <strong>${esc(t.titel)}</strong>
                <span>${esc(t.kuenstler)}</span>
                <span class="song__cta">Auf Spotify anhören ${ico("ext")}</span>
              </span>
            </a>`).join("")}
          </div>` : ""}
        ${U.vorlieben ? `<h2 class="cv__zwischen">Was ich mag</h2>${chips(U.vorlieben)}` : ""}
      </div>` });
  if (warumBereich) { const k = bereiche.findIndex((b) => b.id === "ueber-mich"); bereiche.splice(k >= 0 ? k + 1 : bereiche.length, 0, warumBereich); }
  { const k = bereiche.findIndex((b) => b.id === "kenntnisse"); const sk = bereiche.splice(k, 1)[0]; bereiche.splice(bereiche.findIndex((b) => b.id === "erfahrung") + 1, 0, sk); }
  const bereichById = Object.fromEntries(bereiche.map((b) => [b.id, b]));

  function avatarHtml(groesse) {
    return p.foto
      ? `<img class="avatar avatar--${groesse}" src="${esc(pfad(p.foto))}" alt="">`
      : `<span class="avatar avatar--${groesse}">${esc(initialen(p.name))}</span>`;
  }

  // --- Grundgerüst ---
  const fragenListe = C.vorschlaege.concat(C.weitereFragen || []);
  document.getElementById("app").innerHTML = `
    <div class="shell">
      <aside class="sidebar" id="sidebar">
        <div class="sidebar__kopf">
          <a class="sidebar__profil" href="#chat" data-ziel="neu">
            ${avatarHtml("profil")}
            <strong>${esc(p.name)}</strong>
          </a>
        </div>
        <nav class="nav">
          <a href="#chat" data-ziel="chat" data-neu>${ico("chat")}<span>Chat</span></a>
          ${bereiche.filter((b) => b.nav).map((b) => `<a href="#${b.id}" data-ziel="${b.id}">${ico(b.icon)}<span>${b.label}</span></a>`).join("")}
        </nav>
        <p class="nav__titel">Häufige Fragen</p>
        <nav class="nav nav--fragen">
          ${fragenListe.map((f) => `<button type="button" data-frage="${esc(f)}">${esc(f)}</button>`).join("")}
        </nav>
        ${F ? `
        <div class="sidebar__firma">
          <span class="sidebar__firma-label">Bewerbung für</span>
          <div class="sidebar__firma-inhalt">
            ${F.logo ? `<img src="${esc(F.logo)}" alt="">` : ""}
            <strong>${esc(F.name)}</strong>
          </div>
        </div>` : ""}
      </aside>
      <div class="overlay" id="overlay"></div>

      <main class="haupt">
        <header class="mobilkopf">
          <button class="iconbtn" id="menuBtn" aria-label="Menü">${ico("menu")}</button>
          <a class="marke" href="#chat">${ico("person")}<span>${esc(p.name)}</span></a>
          ${F ? `<span class="badge">für ${esc(F.name)}</span>` : ""}
        </header>

        <section class="chat" id="chat" data-leer="true">
          <div class="verlauf" id="verlauf"></div>
          <div class="start">
            <h1 class="start__titel">${esc(C.begruessung)}</h1>
          </div>
          <form class="eingabe" id="eingabe" autocomplete="off">
            <textarea id="frage" rows="1" placeholder="${esc(F ? `Deine Frage als ${F.name} …` : C.platzhalter)}" aria-label="Frage"></textarea>
            <button class="senden" type="submit" aria-label="Senden">${ico("senden")}</button>
          </form>
          <div class="vorschlaege">
            ${C.vorschlaege.map((f) => `<button type="button" data-frage="${esc(f)}">${esc(f)}</button>`).join("")}
          </div>
        </section>

        <section class="dokument" id="dokument" hidden>
          <a class="zurueck" href="#chat">${ico("zurueck")} Zurück zum Chat</a>
          <div id="dokumentInhalt"></div>
        </section>

        <div class="druck">${bereiche.map((b) => `<section>${b.html}</section>`).join("")}</div>
      </main>
    </div>`;

  // --- Chat-Logik ---
  const chat = document.getElementById("chat");
  const verlauf = document.getElementById("verlauf");
  const input = document.getElementById("frage");
  let beschaeftigt = false;

  const md = (t) =>
    t.split(/\n{2,}/).map((abs) => "<p>" + esc(abs)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\((#[a-z-]+)\)/g, '<a class="sprung" href="$2">$1 →</a>')
      .replace(/\n/g, "<br>") + "</p>").join("");

  const norm = (s) => s.toLowerCase().replace(/[^a-zäöüß0-9 ]/g, " ");
  let unbekanntZaehler = 0;
  function finde(frage) {
    // Umbenannte Fragen (F.fragen: { alt: neu }) liefern die Antwort der alten Frage
    const alias = F && F.fragen && Object.keys(F.fragen).find((k) => F.fragen[k] === frage.trim());
    if (alias) frage = alias;
    if (direkt[frage.trim()]) return direkt[frage.trim()];
    const text = " " + norm(frage) + " ";
    const woerter = text.split(/\s+/).filter(Boolean);
    let beste = null, max = 0;
    for (const a of C.antworten) {
      const punkte = a.stichworte.reduce((n, s) => n + (woerter.some((w) => w.startsWith(s)) || text.includes(" " + s) ? 1 : 0), 0);
      if (punkte > max) { max = punkte; beste = a; }
    }
    if (beste) return beste;
    const liste = [].concat(C.unbekannt);
    return { text: liste[unbekanntZaehler++ % liste.length] };
  }

  // Karten, die unter einer Antwort im Chat erscheinen können (antwort.karten)
  const kartenHtml = {
    projekte: () => `<div class="inline-karten">${B.projekte.map((pr) => `
      <a class="inline-karte" href="#projekte"><strong>${esc(pr.titel)}</strong><span>${esc(pr.text)}</span>${chips(pr.tags)}</a>`).join("")}</div>`,
    kontakt: () => `<div class="inline-karten"><div class="inline-karte inline-karte--kontakt">
      <div class="profil">${avatarHtml("klein")}<div><strong>${esc(p.name)}</strong>${p.titel ? `<span>${esc(p.titel)}</span>` : ""}</div></div>
      ${p.email ? `<a class="btn btn--voll" href="mailto:${esc(p.email)}">${ico("mail")} E-Mail schreiben</a>` : ""}</div></div>`
  };

  function nachricht(rolle, html) {
    const el = document.createElement("div");
    el.className = `msg msg--${rolle}`;
    el.innerHTML = rolle === "bot" ? `${avatarHtml("klein")}<div class="msg__text">${html}</div>` : `<div class="msg__text">${html}</div>`;
    verlauf.appendChild(el);
    el.scrollIntoView({ block: "end", behavior: "smooth" });
    return el.querySelector(".msg__text");
  }

  async function frage(text) {
    text = text.trim();
    if (!text || beschaeftigt) return;
    beschaeftigt = true;
    if (location.hash && location.hash !== "#chat") location.hash = "chat";
    chat.dataset.leer = "false";
    schliesseMenue();
    nachricht("user", esc(text));
    input.value = "";
    const ziel = nachricht("bot", '<span class="tippt"><i></i><i></i><i></i></span>');
    await warte(550);
    // Antwort Wort für Wort einblenden
    const antwort = finde(text);
    const html = md(antwort.text)
      + (antwort.bilder ? `<div class="chat-bilder">${antwort.bilder.map((b) => `<img src="${esc(pfad(b.src))}" alt="${esc(b.alt || "")}">`).join(antwort.bildTrenner ? `<span class="chat-bilder__trenner">${esc(antwort.bildTrenner)}</span>` : "")}</div>` : "")
      + (antwort.referenzen ? `<div class="referenzen">${antwort.referenzen.map((r) => `
          <div class="referenz">
            ${r.logo ? `<span class="referenz__logo"><img src="${esc(pfad(r.logo))}" alt=""></span>` : `<span class="referenz__initialen">${esc(initialen(r.name))}</span>`}
            <span><strong>${esc(r.name)}</strong><span class="referenz__heute">${esc(r.heute)}</span><span class="referenz__damals">damals: ${esc(r.damals)}</span></span>
          </div>`).join("")}</div>` : "")
      + (antwort.nachtext ? `<div class="nachtext">${md(antwort.nachtext)}</div>` : "")
      + (antwort.karten && kartenHtml[antwort.karten] ? kartenHtml[antwort.karten]() : "");
    const nurText = md(antwort.text);
    const tmp = document.createElement("div");
    tmp.innerHTML = nurText;
    const woerter = tmp.textContent.split(/(\s+)/);
    let sichtbar = "";
    for (let i = 0; i < woerter.length; i += 2) {
      sichtbar += woerter[i] + (woerter[i + 1] || "");
      ziel.textContent = sichtbar;
      if (i % 6 === 0) ziel.parentElement.scrollIntoView({ block: "end" });
      await warte(18);
    }
    ziel.innerHTML = html;
    ziel.parentElement.scrollIntoView({ block: "end", behavior: "smooth" });
    beschaeftigt = false;
    input.focus();
  }
  const warte = (ms) => new Promise((r) => setTimeout(r, ms));

  document.getElementById("eingabe").addEventListener("submit", (e) => { e.preventDefault(); frage(input.value); input.style.height = ""; });
  // Enter sendet, Shift+Enter macht Zeilenumbruch; Feld wächst mit
  input.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); frage(input.value); input.style.height = ""; } });
  input.addEventListener("input", () => { input.style.height = "auto"; input.style.height = Math.min(input.scrollHeight, 160) + "px"; });
  document.querySelectorAll("[data-frage]").forEach((b) => b.addEventListener("click", () => frage(b.dataset.frage)));

  // --- Navigation ---
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  function schliesseMenue() { sidebar.classList.remove("offen"); overlay.classList.remove("offen"); }
  document.getElementById("menuBtn").addEventListener("click", () => { sidebar.classList.add("offen"); overlay.classList.add("offen"); });
  overlay.addEventListener("click", schliesseMenue);
  // Name oben links und „Chat“ in der Navigation: zurück zum leeren Ausgangschat
  document.querySelectorAll('[data-ziel="neu"], [data-neu]').forEach((el) => el.addEventListener("click", () => {
    verlauf.innerHTML = ""; chat.dataset.leer = "true"; input.value = "";
  }));

  const dokument = document.getElementById("dokument");
  let letzteStation = null; // zuletzt geöffnete Detailseite – der Lebenslauf öffnet wieder dort

  // Detailseite einer Station
  function stationsSeite(st) {
    const abschnitte = st.details || [
      { titel: "Ausgangslage", text: ["[Wie war die Situation, als du angefangen hast? Team, Markt, Ziele.]"] },
      { titel: "Meine Aufgaben im Detail", text: ["[Was genau hast du gemacht? Gern mit konkreten Beispielen, Projekten und Tools.]"] },
      { titel: "Ergebnisse", text: st.kennzahlen ? [] : ["[Was hast du erreicht? Zahlen, Erfolge, Dinge, auf die du stolz bist.]"], grafik: true }
    ];
    return `
      <div class="station-seite">
        <div class="station-seite__kopf">
          ${st.logo ? `<img class="station-seite__logo" src="${esc(pfad(st.logo))}" alt="${esc(st.firma)}"${st.logoHoehe ? ` style="max-height:${Math.round(st.logoHoehe * 1.4)}px"` : ""}>` : `<span class="cv__typ">${esc(st.typ)}</span>`}
          <div>
            <h1>${esc(st.titel)}</h1>
            <p class="box__meta"><strong>${esc(st.firma)}</strong>${st.branche ? `<span>${esc(st.branche)}</span>` : ""}${st.ort ? `<span>${esc(st.ort)}</span>` : ""}</p>
          </div>
          <div class="station-seite__zeit">
            ${(st.dauer || dauer(st.zeitraum)) ? `<strong>${esc(st.dauer || dauer(st.zeitraum))}</strong>` : ""}
            <span>${esc(st.zeitraum)}</span>
          </div>
        </div>
        <div class="station-seite__raster">
          <div class="station-seite__haupt">
            ${(st.text || []).map((t) => `<p class="cv__text">${esc(t)}</p>`).join("")}
            ${abschnitte.map((a) => `<h2 class="cv__zwischen">${esc(a.titel)}</h2>${a.grafik || /ergebnis/i.test(a.titel) ? kennzahlenHtml(st) : ""}${a.text.map((t) => `<p class="cv__text">${esc(t)}</p>`).join("")}`).join("")}
          </div>
          <aside class="station-seite__seite">
            ${st.anteil ? `
              <h2 class="cv__zwischen">Schwerpunkt</h2>
              <div class="anteil anteil--fest" style="--v:${st.anteil.vertrieb}">
                <div class="anteil__balken"><span></span></div>
                <div class="anteil__legende"><span>${st.anteil.vertrieb} % Vertrieb</span><span>${st.anteil.marketing} % Marketing</span></div>
              </div>` : ""}
            ${st.punkte && st.punkte.length ? `<h2 class="cv__zwischen">Aufgaben</h2>${chips(st.punkte)}` : ""}
            ${st.learnings ? `<h2 class="cv__zwischen">Top 3 Learnings</h2><ol class="learnings">${st.learnings.map((l) => `<li>${esc(l)}</li>`).join("")}</ol>` : ""}
          </aside>
        </div>
      </div>`;
  }

  function zeige() {
    let id = location.hash.slice(1), ziel = null;
    if (id === "ausbildung") { id = "erfahrung"; ziel = "ausbildung"; }
    if (id === "erfahrung" && letzteStation !== null) ziel = letzteStation;
    let b = bereichById[id];
    if (id.startsWith("station-")) {
      const k = B.stationen.findIndex((st, i) => String(st.id || i) === id.slice(8));
      if (k >= 0) { b = { id: "station", html: stationsSeite(B.stationen[k]) }; letzteStation = k; id = "erfahrung"; }
    }
    chat.hidden = !!b;
    dokument.hidden = !b;
    if (b) {
      document.getElementById("dokumentInhalt").innerHTML = b.html;
      const zurueck = document.querySelector(".zurueck");
      zurueck.innerHTML = `${ico("zurueck")} ${b.id === "station" ? "Zurück zum Lebenslauf" : "Zurück zum Chat"}`;
      zurueck.setAttribute("href", b.id === "station" ? "#erfahrung" : "#chat");
      window.scrollTo(0, 0);
      if (b.id === "erfahrung") lebenslauf(document.getElementById("dokumentInhalt"), ziel);
      if (b.id === "station") setTimeout(() => zaehleHoch(document.getElementById("dokumentInhalt")), 150);
      if (b.id === "kenntnisse") {
        const sk = document.querySelector("#dokumentInhalt .sprachen"); sk.classList.add("kz");
        setTimeout(() => {
          zaehleHoch(document.getElementById("dokumentInhalt"));
          sk.querySelectorAll(".ring__wert").forEach((c) => (c.style.strokeDasharray = `${c.dataset.wert} 100`));
        }, 150);
      }
    }
    const aktivId = b ? id : "chat";
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("aktiv", a.dataset.ziel === aktivId));
    schliesseMenue();
  }
  // Lebenslauf: waagerechte Linie, darunter eine Box-Reihe, die beim Weitergehen nachrückt
  function lebenslauf(root, ziel) {
    const leiste = root.querySelector(".zeitleiste");
    const marker = root.querySelector(".zeitleiste__marker");
    const knoepfe = [...root.querySelectorAll(".halt__knopf")];
    const fenster = root.querySelector(".slider__fenster");
    const spur = root.querySelector(".slider__spur");
    const boxen = [...root.querySelectorAll(".box")];
    const n = boxen.length;
    let aktiv = 0;
    const sichtbar = () => (innerWidth <= 820 ? 1 : innerWidth <= 1180 ? 2 : 3);

    function ausrichten(sanft) {
      const k = sichtbar();
      const gap = 16;
      const breite = (fenster.clientWidth - 4 - gap * (k - 1)) / k; // 4 = Innenabstand des Fensters
      boxen.forEach((b) => (b.style.width = breite + "px"));
      knoepfe.forEach((k) => (k.parentElement.style.width = breite + "px"));
      // Fenster so schieben, dass die aktive Station sichtbar ist (möglichst in der Mitte)
      const start = Math.max(0, Math.min(n - k, aktiv - Math.floor((k - 1) / 2)));
      spur.style.transition = sanft ? "" : "none";
      spur.style.transform = `translateX(${-start * (breite + gap)}px)`;
      boxen.forEach((b, i) => b.classList.toggle("sichtbar", i >= start && i < start + k));
      knoepfe.forEach((kn, i) => kn.parentElement.classList.toggle("sichtbar", i >= start && i < start + k));
      // Linie von der ersten bis zur letzten Station, Marker auf der aktiven
      const strich = leiste.querySelector(".zeitleiste__strich");
      strich.style.left = breite / 2 + "px";
      strich.style.width = (n - 1) * (breite + gap) + "px";
      marker.style.transition = sanft ? "" : "none";
      marker.style.transform = `translateX(${aktiv * (breite + gap) + breite / 2}px)`;
      root.querySelector(".slider__pfeil--zurueck").disabled = aktiv === 0;
      root.querySelector(".slider__pfeil--vor").disabled = aktiv === n - 1;
    }
    function waehle(i, sanft = true) {
      aktiv = Math.max(0, Math.min(n - 1, i));
      knoepfe.forEach((k, j) => k.parentElement.classList.toggle("aktiv", j === aktiv));
      boxen.forEach((b, j) => b.classList.toggle("aktiv", j === aktiv));
      ausrichten(sanft);
      setTimeout(() => boxen.filter((b) => b.classList.contains("sichtbar")).forEach(zaehleHoch), sanft ? 250 : 900);
    }
    knoepfe.forEach((k) => k.addEventListener("click", () => waehle(+k.dataset.i)));
    boxen.forEach((b) => b.addEventListener("click", () => { if (!b.classList.contains("aktiv")) waehle(+b.dataset.i); }));
    root.querySelector(".slider__pfeil--zurueck").addEventListener("click", () => waehle(aktiv - 1));
    root.querySelector(".slider__pfeil--vor").addEventListener("click", () => waehle(aktiv + 1));
    // Wischen auf dem Handy
    let x0 = null;
    fenster.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    fenster.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) waehle(aktiv + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    window.onresize = () => ausrichten(false);

    let start = typeof ziel === "number" ? ziel : B.stationen.findIndex((st) => (ziel === "ausbildung" ? st.ausbildung : st.start));
    if (start < 0) start = B.stationen.length - 1; // Standard: aktuelle (letzte) Station
    leiste.classList.remove("an");
    requestAnimationFrame(() => {
      waehle(start < 0 ? 0 : start, false);
      requestAnimationFrame(() => leiste.classList.add("an"));
    });
  }

  window.addEventListener("hashchange", zeige);
  zeige();
})();
