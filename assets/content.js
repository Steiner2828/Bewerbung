// Zentrale Inhalte – gelten für alle Bewerbungen.
// Alles in [eckigen Klammern] ist ein Platzhalter und muss ersetzt werden.
// In Chat-Antworten: bilder: [{ src, alt }] zeigt Bilder unter der Antwort. karten: "projekte" | "kontakt" zeigt Karten im Chat. **fett** und [Linktext](#bereich) – Bereiche: erfahrung, ausbildung, projekte, kenntnisse, kontakt
window.BEWERBUNG = {
  person: {
    name: "Marcel Steiner",
    titel: "", // Untertitel unter dem Namen – leer = keiner
    kurz: "Seit Jahren bewege ich mich zwischen Vertrieb und Marketing – mit Strategie, Umsetzung und echtem Kundenkontakt.",
    foto: "assets/bilder/marcel_avatar.jpg",
    unterschrift: "assets/bilder/unterschrift.png", // im Anschreiben – leer lassen = Name in Handschrift-Schrift // runder Avatar (Gesichtsausschnitt) – leer lassen = Initialen
    ort: "Handewitt",
    email: "marcel_steiner28@web.de",
    telefon: "0162 6314757",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/marcel-steiner-914704241/", logo: "assets/logos/tools/linkedin-ads.png", anzeige: "marcel-steiner" }
    ]
  },

  chat: {
    name: "Frag Marcel",
    begruessung: "Was möchtest du über Marcel wissen?",
    platzhalter: "Frage zu Marcel stellen …",
    vorschlaege: [
      "Was war Marcels erfolgreichste Vertriebs-Aktion?",
      "Wie würden ehemalige Chefs Marcel beschreiben?",
      "Was können wir von Marcel über KI lernen?",
      "Ab wann ist Marcel verfügbar?"
    ],
    // Zusätzliche Fragen nur in der linken Leiste
    weitereFragen: [],
    // Jede Antwort wird über Stichworte gefunden (Kleinschreibung, Wortanfänge reichen).
    antworten: [
      {
        stichworte: ["chef", "chefs", "vorgesetzt", "referenz", "beschreiben", "ehemalig", "empfehl"],
        text: "Das fragst du am besten seine ehemaligen Vorgesetzten selbst.",
        nachtext: "Marcel pflegt bis heute zu allen ehemaligen Vorgesetzten einen guten Kontakt. Falls du eine Referenz einholen möchtest, leitet er dir die Kontaktdaten deshalb gern auf Anfrage weiter. [Kontakt aufnehmen](#kontakt)",
        referenzen: [
          { name: "Nicole Bitkin", logo: "assets/logos/emp.png", heute: "Managing Director, Contentway GmbH", damals: "CEO, European Media Partner Deutschland GmbH" },
          { name: "René Zankl", logo: "assets/logos/persona.png", heute: "Niederlassungsleiter, cleo Flensburg", damals: "Niederlassungsleiter, Persona Service Flensburg & Kiel" },
          { name: "Andreas Schmitzke", logo: "assets/logos/dvelop.png", heute: "Market Director Chambers, d.velop", damals: "CEO, d.velop digital solutions GmbH" },
          { name: "Ingmar Siebel", logo: "assets/logos/dvelop.png", heute: "CEO, aidia GmbH", damals: "CEO, d.velop digital solutions GmbH" }
        ]
      },
      {
        stichworte: ["lernen", "ki", "haltung", "boom", "agent", "hype"],
        text: "**KI nutzen, aber nicht um KI zu nutzen.** Das ist Marcels Grundsatz.\n\nGerade im aktuellen Boom lässt man sich leicht von Geschwindigkeit blenden. Nur weil KI in Minuten erledigt, was früher Tage gedauert hat, ist das noch kein Beleg für Qualität. Für Marcel soll KI operative Probleme lösen. Nicht Dashboards, KPIs und Dokumente produzieren, die gut aussehen, aber keinen Mehrwert schaffen.\n\nDeshalb steht bei ihm am Anfang nicht die Frage, wo man KI einsetzen kann, sondern welches Problem man eigentlich lösen will. Ein ineffizienter Prozess wird nicht besser, nur weil KI daraufgesetzt wird.\n\nUnd je mehr KI im Spiel ist, desto wichtiger wird der Mensch. Wenn alle mit denselben Werkzeugen arbeiten, gleichen sich Angebote immer mehr an: optisch, inhaltlich und bald auch funktional. Den Unterschied machen dann Haltung, Ideen, echte Beziehungen und Branchen-Know-how.\n\nMit KI lautet die Frage deshalb nicht mehr: **„Ist es möglich?“** Sondern: **„Ist es nötig?“**"
      },
      {
        stichworte: ["ki", "künstliche", "claude", "chatgpt", "prompt", "geo", "setzt", "einsetz"],
        text: "KI ist für Marcel kein Schlagwort, sondern fester Teil seiner Arbeitsweise. Angefangen hat es bei d.velop, wo er die ersten Tools für Texte, Workflows und Recherche genutzt hat.\n\nHeute setzt er KI täglich im Vertrieb, in der Beratung und im Coaching ein, unter anderem mit **Claude** und **Claude Code**, **Higgsfield** und **ElevenLabs**. Auch **GEO**, also die Sichtbarkeit in KI-Suchmaschinen, gehört zu seinen Themen.\n\nÜbrigens: Diese Bewerbungsseite hat er selbst mit KI gebaut. [Skills ansehen](#kenntnisse)"
      },
      {
        stichworte: ["team", "zusammenarbeit", "arbeitsweise", "kultur", "kollegen", "tickt", "arbeitet er"],
        text: "Marcel mag **klare, empathische Kommunikation**, schnelle Entscheidungen und ehrliche Zusammenarbeit. Eins seiner Learnings aus der Zeit bei d.velop: **Teamchemie is key.**\n\nAm liebsten arbeitet er dort, wo Marketing und Vertrieb nicht nebeneinander, sondern gemeinsam arbeiten. Wissen gibt er gern weiter: Bei der collana apps coacht er Kolleginnen und Kollegen in der ganzen Gruppe. [Mehr über Marcel](#ueber-mich)"
      },
      {
        stichworte: ["sucht", "suche", "nächste", "wunsch", "erwart", "wichtig", "motiv"],
        text: "Marcel sucht eine Aufgabe, bei der er **Dinge aktiv mitgestalten** kann. Ihm ist wichtig, dass Marketing und Vertrieb an einem Strang ziehen und Entscheidungen schnell und ehrlich getroffen werden.\n\nWarum er sich gerade bei euch bewirbt, steht im Anschreiben. [Zum Anschreiben](#anschreiben)"
      },
      {
        stichworte: ["aktuell", "derzeit", "momentan", "heute", "job", "position", "stelle", "collana", "macht", "tätig", "arbeitet"],
        text: "Marcel ist seit 06/2023 **Head of Sales and Marketing bei collana apps** in Flensburg / Hamburg – einem Unternehmen der collana Gruppe, das E-Commerce-Software für Händler entwickelt.\n\nZu Beginn hat er Marketing und Vertrieb komplett aufgebaut – inklusive Cold Calling, Partnernetzwerk, Direktkundenvertrieb, Demos und Team-Coaching. Heute liegt sein Schwerpunkt klar im **Sales**: Deals und Vertriebsthemen, auch gruppenweit mit Cross-Selling und dem Coaching von Kolleginnen und Kollegen in der collana Gruppe. [Zum Lebenslauf](#erfahrung)"
      },
      {
        stichworte: ["gearbeitet", "stationen", "werdegang", "lebenslauf", "erfahrung", "berufserfahrung", "firmen", "vorher", "bisher"],
        text: "Seine Stationen:\n\n**European Media Partner**, Hamburg – Campaign Manager (2017–2019)\n**Persona Service**, Flensburg – Abteilungsleiter (2020–2022)\n**d.velop**, Kiel – Marketing Manager (2022–2023)\n**collana apps**, Flensburg / Hamburg – Head of Sales and Marketing (seit 2023)\n\n[Zum Lebenslauf](#erfahrung)"
      },
      {
        stichworte: ["stärke", "stark", "persönlich", "charakter", "eigenschaft", "typ", "wie ist"],
        text: "Marcel beschreibt sich als **außergewöhnlich kreativ**, **klar und direkt**, mit einem **guten Gespür für Zwischentöne** – dazu **flexibel**, **abschlussstark**, **führungsstark**, **humorvoll** und **unternehmerisch denkend**.\n\nEr mag klare, empathische Kommunikation, schnelle Entscheidungen und ehrliche Zusammenarbeit. [Mehr über Marcel](#ueber-mich)"
      },
      {
        stichworte: ["warum", "grund", "gründe", "einladen", "einstellen", "besonders", "überzeug", "mitbringt", "bringt"],
        text: "Drei gute Gründe:\n\n1. **Marketing und Vertrieb aus einer Hand** – er kennt beide Seiten aus eigener Verantwortung.\n2. **Aufbau von Null** – bei collana apps hat er Marketing und Vertrieb ohne bestehende Strukturen mit aufgebaut.\n3. **Führungserfahrung** – als Abteilungsleiter war er für über 30 Mitarbeitende verantwortlich.\n\n[Kontakt aufnehmen](#kontakt)",
        karten: "kontakt"
      },
      {
        stichworte: ["vertrieb", "sales", "verkauf", "akquise", "kaltakquise", "abschluss", "verhandl"],
        text: "Vertrieb zieht sich durch Marcels ganzen Werdegang: Kaltakquise bei European Media Partner, Kundengewinnung und Account-Betreuung als Abteilungsleiter bei Persona Service und heute Deals, Cross-Selling und Sales-Coaching bei collana apps und in der collana Gruppe.\n\nSein Fazit: **Ohne aktiven Vertrieb funktioniert auch das beste Marketing nicht.** [Zum Lebenslauf](#erfahrung)"
      },
      {
        stichworte: ["marketing", "kampagne", "seo", "content", "social", "werbung", "ads", "automatis"],
        text: "Im Marketing deckt Marcel die ganze Bandbreite ab: **Strategie und Konzeption**, WordPress, SEO, Blog, Social Media, Google Ads und Eventmanagement – mit starkem Fokus auf **Automatisierung in HubSpot**.\n\nGerade im Marketing geht er gern neue, kreative Wege – nicht um anders zu sein, sondern um wirksamer zu sein. [Skills ansehen](#kenntnisse)"
      },
      {
        stichworte: ["tool", "software", "programm", "hubspot", "salesforce", "sap", "adobe", "photoshop", "indesign", "illustrator", "davinci", "premiere", "ableton", "claude", "github", "kenntnis", "skill", "kann", "können", "technisch", "technik"],
        text: "Marcel arbeitet sicher mit **HubSpot**, **Salesforce**, **Microsoft Dynamics 365 Business Central** und **SAP**. Er gestaltet mit **Photoshop, InDesign und Illustrator**, schneidet in **DaVinci Resolve** und **Premiere Pro**, produziert Musik in **Ableton Live** – und nutzt KI-Tools wie **Claude**, **Higgsfield** und **ElevenLabs** täglich. [Alle Skills](#kenntnisse)"
      },
      {
        stichworte: ["führung", "team", "mitarbeiter", "leitung", "leiter", "personal"],
        text: "Als **Abteilungsleiter bei Persona Service** war Marcel für über 30 Mitarbeitende und deren Disposition verantwortlich – inklusive aller internen HR-Prozesse von Bewerbungsgesprächen bis zu Gehaltsverhandlungen. Auch bei collana apps gehört Mitarbeiterführung zu seinen Aufgaben. [Zum Lebenslauf](#erfahrung)"
      },
      {
        stichworte: ["ausbildung", "studium", "studiert", "uni", "hochschule", "abschluss", "bachelor", "schule", "dänemark", "sdu"],
        text: "Marcel hat von 2012 bis 2017 an der **Syddansk Universitet** in Dänemark studiert und mit dem **B.A. International Management** abgeschlossen. [Zur Ausbildung](#ausbildung)"
      },
      {
        stichworte: ["sprache", "englisch", "dänisch", "spricht"],
        text: "Marcel spricht **Deutsch und Dänisch auf Muttersprachniveau** – er war auf der dänischen Duborg-Skolen in Flensburg und hat in Dänemark studiert. Dazu kommt **sehr gutes Englisch**. [Alle Skills](#kenntnisse)"
      },
      {
        stichworte: ["e-commerce", "ecommerce", "commerce", "shop", "händler", "online"],
        text: "Bei collana apps vertreibt Marcel E-Commerce-Software für Händler und ist dadurch tief in der E-Commerce-Welt unterwegs: Er kennt Shops, Tools und Stolperstellen, spricht regelmäßig mit Kunden und weiß aus dem Austausch mit Partnern, wo die typischen Schmerzpunkte liegen."
      },
      {
        stichworte: ["hobby", "hobbys", "freizeit", "privat", "sport", "interessen", "fußball", "discgolf", "musik"],
        text: "Marcel spielt seit seiner Jugend **Fußball**, heute bei den Alten Herren. Außerdem spielt er **Discgolf** und **Golf**, klopft gern eine Runde **Skat**, **produziert Musik** und **liest** viel. [Mehr über Marcel](#ueber-mich)"
      },
      {
        stichworte: ["kontakt", "erreich", "mail", "telefon", "anruf", "nummer", "melden", "gespräch", "termin"],
        text: "Am besten per E-Mail an **marcel_steiner28@web.de** oder telefonisch unter **0162 6314757**. [Alle Kontaktdaten](#kontakt)",
        karten: "kontakt"
      },
      {
        stichworte: ["alt", "alter", "jahre alt", "geboren", "geburtstag", "herkunft", "woher", "verheiratet", "familie", "hund", "katze", "haustier", "persönlich"],
        text: "Marcel ist am 29.12.1990 in **Flensburg** geboren und lebt bis heute im Norden. Er ist **verheiratet** und hat einen **Hund** und eine **Katze**. [Mehr über Marcel](#ueber-mich)"
      },
      {
        stichworte: ["erfolgreich", "aktion", "wd-40", "wd40", "mailing", "paket", "maintool", "beste", "highlight", "stolz"],
        text: "Seine erfolgreichste Aktion: Für **maintool**, eine Software für Wartung und Instandhaltung, hat Marcel Entscheidern aus der Zielgruppe ein echtes Paket per Post geschickt, mit einer Dose **WD-40** darin. Die Botschaft dahinter: maintool ist das digitale WD-40 für die Instandhaltung.\n\nIn einer Zeit, in der Postfächer mit KI-generierten E-Mails und LinkedIn-Nachrichten überlaufen, war ein Paket auf dem Schreibtisch eine erfrischende Abwechslung für die Zielgruppe.\n\nDas Ergebnis: **9 Demo-Termine aus 100 Paketen**, also eine **Demo-Booking-Rate von 9 %**. Oder anders gesagt: Fast jedes elfte Paket wurde zum Termin.",

        bildTrenner: "=",
        bilder: [
          { src: "assets/bilder/aktionen/maintool.png", alt: "maintool" },
          { src: "assets/bilder/aktionen/wd40.jpg", alt: "WD-40 Dose aus dem Mailing" }
        ]
      },
      {
        stichworte: ["warum diese", "diese bewerbung", "warum die", "form", "chat", "seite", "webseite", "website", "word", "klassisch", "pdf"],
        text: "Weil die Entscheidung für einen neuen Job eine echte Zukunftsentscheidung ist – und Marcel findet, dass man das auch in der Bewerbung zeigen sollte. Eine Standard-Bewerbung, die für jede Firma fast gleich aussieht, wird dem aus seiner Sicht nicht gerecht. [Warum diese Bewerbung?](#warum)"
      },
      {
        stichworte: ["verfügbar", "wann", "kündigungsfrist", "start", "anfangen", "eintritt", "frei"],
        text: "Marcel hat eine **Kündigungsfrist von 3 Monaten**. [Kontakt aufnehmen](#kontakt)"
      },
      {
        stichworte: ["gehalt", "vorstellung", "verdien", "geld", "vergütung"],
        text: "Seine Gehaltsvorstellung bespricht Marcel gern persönlich. [Kontakt aufnehmen](#kontakt)"
      },
      {
        stichworte: ["projekt", "umgesetzt", "gebaut", "berater", "ki", "beispiel"],
        text: "Ein Beispiel ist der **KI-Sales-Berater** – ein Web-Tool auf Basis von Next.js, das Vertriebsmitarbeitende mit HubSpot-Daten bei der Gesprächsvorbereitung unterstützt. Und diese Bewerbungsseite hat Marcel natürlich auch selbst gebaut. [Alle Projekte](#projekte)",
        karten: "projekte"
      }
    ],
    // Antworten, wenn keine passende gefunden wird – wechseln sich ab
    unbekannt: [
      "Gute Frage – da muss ich leider passen.\n\nMarcel kennt sich mit KI wirklich gut aus, aber hinter diesem Chat steckt **kein ausgewachsenes Sprachmodell**, sondern eine Handvoll gut vorbereiteter Antworten. (Eine echte KI-Anbindung kostet pro Frage Geld – und Marcel hat gelernt, Budgets ernst zu nehmen.)\n\nStell die Frage am besten direkt im Gespräch. Darauf freut er sich. [Kontakt aufnehmen](#kontakt)",
      "Da bin ich überfragt – und das ist ehrlich gesagt Absicht.\n\nDieser Chat ist **bewusst ohne echte KI** gebaut: kein API-Schlüssel, keine laufenden Kosten, keine erfundenen Antworten. Was du hier liest, hat Marcel selbst geschrieben.\n\nFür alles andere gibt es das Original – persönlich und garantiert ohne Halluzinationen. [Kontakt aufnehmen](#kontakt)",
      "Auch beim dritten Versuch bleibe ich ehrlich: Darauf habe ich keine Antwort.\n\nVersuch es gern mit diesen Themen: **aktuelle Position, Stationen, Stärken, Vertrieb, Marketing oder Hobbys** – oder frag Marcel direkt. [Kontakt aufnehmen](#kontakt)"
    ]
  },

  // Allgemeines Anschreiben – in Firmenordnern wird es durch window.FIRMA ersetzt
  anschreiben: {
    betreff: "Meine Bewerbung",
    absaetze: [
      "Normalerweise stehen an dieser Stelle Floskeln. Lass uns lieber direkt sprechen.",
      "Seit fast zehn Jahren bewege ich mich zwischen Vertrieb und Marketing. Angefangen habe ich in der Kaltakquise bei European Media Partner. Später habe ich als Abteilungsleiter bei Persona Service ein Team von bis zu 30 Mitarbeitenden geführt und bei d.velop das Marketing mit HubSpot automatisiert.",
      "Heute bin ich Head of Sales and Marketing bei der collana apps, einer Einheit der collana Gruppe, die Software für Händler entwickelt. Wir haben dort bei null angefangen. Ich habe Marketing und Vertrieb von Grund auf aufgebaut, vom ersten Cold Call über das Partnernetzwerk bis zur Demo. Inzwischen liegt mein Schwerpunkt klar im Sales: Ich verantworte Deals, treibe das Cross-Selling in der Gruppe voran und coache Kolleginnen und Kollegen.",
      "Ein großer Teil meiner Arbeit ist heute KI. Nicht als Schlagwort, sondern als fester Bestandteil unserer Arbeitsweise. Ich setze sie täglich im Vertrieb, in der Beratung und im Coaching ein und habe mir dabei ein umfangreiches Wissen aufgebaut.",
      "Ich gehe gern neue Wege. Nicht um anders zu sein, sondern um wirksamer zu sein. Was ich mitbringe: Umsatzverantwortung, Führungserfahrung, ein gutes Gespür für Menschen und den Blick fürs große Ganze. Ich denke in KPIs, arbeite hands-on und mag es, wenn Marketing und Vertrieb an einem Strang ziehen. Wichtig sind mir klare, empathische Kommunikation, schnelle Entscheidungen und ehrliche Zusammenarbeit.",
      "Ich freue mich, wenn wir ins Gespräch kommen."
    ],
    gruss: "Viele Grüße"
  },

  // Lebenslauf zum Download (Dateien in assets/downloads/ ablegen)
  downloads: {
    text: "Passt nicht in dein System? Hier gibt es den Lebenslauf zum Download:",
    dateien: [
      { label: "PDF", datei: "assets/downloads/Lebenslauf_Marcel_Steiner.pdf" },
      { label: "Word", datei: "assets/downloads/Lebenslauf_Marcel_Steiner.docx" }
    ]
  },

  // Lebenslauf von oben nach unten. Beim Öffnen ist die letzte Station ausgewählt (oder die mit start: true).
  // id: Adresse der Detailseite (#station-<id>), erreichbar über „Mehr Details“.
  // details: false = kein „Mehr Details“-Button; sonst Abschnitte der Detailseite [{ titel, text: [Absätze] }] – ohne Angabe erscheinen Platzhalter.
  // Icons statt Kästchen: icon: "person" | "firma", spalten = Kästchen pro Zeile. vonLabel/bisLabel ersetzen „von – bis“ (z. B. „Ø 25 · Spitze 30“).
  // typ: "chips" zeigt statt Raster eine Liste von Begriffen (items).
  // kennzahlen: Ergebnisse [{ label, von, bis, einheit, raster, start, ende, schraffiert }] als Kästchen-Raster.
  //   raster = Anzahl Kästchen (Standard 20), start/ende = erstes/letztes orange Kästchen, schraffiert = „bis zu“-Kästchen am Ende.
  // firma, branche, ort: stehen in der Box untereinander unter dem Titel.
  // parallel: true = läuft parallel zur vorherigen Station (kleinerer Punkt).
  // anteil: { vertrieb, marketing } in Prozent – wird als Balken angezeigt.
  // note: Abschlussnote, wird in der Box angezeigt.
  // dauer: überschreibt die automatisch berechnete Dauer (z. B. "7 Jahre").
  // logoHoehe: optionale maximale Logohöhe in px (Standard 46) – für sehr breite/wuchtige Logos.
  // logo: Bild in assets/logos/ – ersetzt in der Box das Label (Job 1 …). Die Dauer wird aus dem Zeitraum berechnet.
  stationen: [
    {
      id: "schule", details: false, typ: "Schule", logo: "assets/logos/duborg.png", zeitraum: "2005 – 2011", dauer: "7 Jahre", note: "3,5", titel: "Abitur", firma: "Duborg-Skolen", branche: "Gymnasium", ort: "Flensburg"
    },
    {
      id: "studium", details: false, typ: "Studium", logo: "assets/logos/sdu.png", logoHoehe: 28, ausbildung: true, zeitraum: "2012 – 2017", note: "2,9", titel: "B.A. International Management", firma: "Syddansk Universitet", branche: "Universität", ort: "Dänemark"
    },
    {
      id: "ffg", details: false, typ: "Werkstudent", logo: "assets/logos/ffg.png", logoHoehe: 24, parallel: true, zeitraum: "03/2013 – 01/2016", titel: "Werkstudent Technische Redaktion", firma: "FFG Flensburger Fahrzeugbau Gesellschaft", branche: "Wehrtechnik", ort: "Flensburg",
      text: [
        "Parallel zum Studium habe ich bei der FFG in der technischen Redaktion gearbeitet. Dort habe ich meine ersten Schritte in der Grafikbearbeitung gemacht und Schulungsunterlagen mit erstellt.",
        "Außerdem habe ich Daten in SAP eingepflegt – meine ersten Erfahrungen in der Arbeit mit einem ERP-System. Meine Dänischkenntnisse konnte ich bei Übersetzungen direkt einsetzen."
      ],
      punkte: ["Übersetzung Dänisch", "Grafiken bearbeiten", "Schulungsunterlagen erstellen", "Datenpflege in SAP"]
    },
    {
      id: "european-media-partner", typ: "Job 1", logo: "assets/logos/emp.png", zeitraum: "10/2017 – 10/2019", titel: "Campaign Manager", firma: "European Media Partner", branche: "Content-Marketing-Agentur", ort: "Hamburg",
      text: [
        "Nach dem Studium war ich bei EMP im Bereich Print- und Onlinekampagnen tätig. Wir haben redaktionelle Inhalte zu Themen wie IT, E-Commerce, Trends oder Reisen erstellt, die in Medien wie der WELT, FAZ und ZEIT erschienen sind.",
        "Hauptaufgabe war der telefonische Vertrieb der dazugehörigen Werbeanzeigen – größtenteils Kaltakquise, mit hohem Zeitdruck und klaren Umsatzzielen. Gerade deshalb habe ich dort in kurzer Zeit viel übers Verhandeln, Gesprächsführung und Menschen gelernt.",
        "Neben der Akquise lag auch die Projektverantwortung bei mir: von der Bedarfsanalyse über Preisverhandlung und Budgetplanung bis zur Umsetzung der Kampagne. Die einzelnen Deals bewegten sich zwischen 1.000 und 30.000 €, die Projekte insgesamt zwischen 30.000 und 200.000 € – bei einem Sales Cycle von meist zwei bis drei Monaten.",
        "Mitgenommen habe ich vor allem drei Dinge: Humor öffnet im Vertrieb Türen, Fleiß zahlt sich aus – und wer klar und direkt ist, gewinnt."
      ],
      punkte: ["Telefonischer Vertrieb", "Vermarktung", "Projektmanagement", "Budgetmanagement", "Preisverhandlungen"],
      anteil: { vertrieb: 80, marketing: 20 },
      learnings: ["Humor im Vertrieb", "Viel hilft viel", "Klar und direkt gewinnt"],
      kennzahlen: [
        { label: "Deal-Size", von: 1000, bis: 30000, einheit: "€", start: 3, ende: 6 },
        { label: "Projektgröße", von: 30000, bis: 200000, einheit: "€", start: 7, ende: 16 },
        { label: "Sales Cycle", von: 2, bis: 3, einheit: "Monate", raster: 12, start: 1, ende: 3, schraffiert: 1 }
      ]
    },
    {
      id: "persona-service", typ: "Job 2", logo: "assets/logos/persona.png", logoHoehe: 33, zeitraum: "01/2020 – 05/2022", titel: "Abteilungsleiter", firma: "Persona Service", branche: "Personalvermittlung", ort: "Flensburg",
      text: [
        "In der Personalvermittlung war ich sowohl in der direkten Vermittlung als auch in der Arbeitnehmerüberlassung tätig. Der Schwerpunkt lag klar im Vertrieb: Akquise neuer Kunden, Betreuung bestehender Accounts und das Halten von Kundenbeziehungen trotz oft schwieriger Rahmenbedingungen.",
        "Im Schnitt hatte ich rund 25 Mitarbeitende im Einsatz, in Spitzenzeiten bis zu 30, verteilt auf 15 bis 20 Kundenunternehmen. Die Einsätze reichten von wenigen Tagen bis zu mehreren Monaten – entsprechend flexibel mussten Disposition und Planung sein. Neben dem Telefon war ich viel im Außendienst unterwegs, direkt bei den Kunden vor Ort.",
        "Daneben habe ich alle internen HR-Prozesse verantwortet – von Bewerbungsgesprächen über Gehaltsverhandlungen bis zur Unterzeichnung von Arbeitsverträgen. Geprägt hat mich ein Vorgesetzter, der auch in kritischen Situationen vor den Kunden getreten ist: Er hat mir gezeigt, wie starke Führung wirkt."
      ],
      punkte: ["Telefonischer Vertrieb", "Budgetmanagement", "Preisverhandlungen", "Mitarbeiterführung (30+) und Disposition", "Außendienst", "Lohn- und Gehaltsverhandlungen"],
      anteil: { vertrieb: 100, marketing: 0 },
      learnings: ["Gesicht zeigen", "Menschenführung", "Kundenbeziehungen ausbauen"],
      kennzahlen: [
        { label: "Mitarbeitende im Einsatz", von: 25, bis: 30, vonLabel: "Ø", bisLabel: "Spitze", icon: "person", raster: 30, spalten: 15, start: 1, ende: 30, schraffiert: 5 },
        { label: "Betreute Kundenunternehmen", von: 15, bis: 20, einheit: "Firmen", icon: "firma", raster: 20, spalten: 10, start: 1, ende: 20, schraffiert: 5 },
        { typ: "chips", label: "Einsatzbereiche", items: ["[Produktion]", "[Lager & Logistik]", "[Handwerk]", "[Büro & Verwaltung]"] }
      ]
    },
    {
      id: "dvelop", typ: "Job 3", logo: "assets/logos/dvelop.png", logoHoehe: 26, zeitraum: "06/2022 – 05/2023", titel: "Marketing Manager", firma: "d.velop", branche: "Softwareentwicklung", ort: "Kiel",
      text: [
        "Bei d.velop war ich im Marketing tätig, mit einem starken Fokus auf Automatisierung und HubSpot. Ich habe einen tiefen Einblick in alle Bereiche des Marketings bekommen – von Leadgenerierung und CRM bis zur engen Abstimmung mit dem Vertrieb.",
        "Dabei habe ich die gesamte Bandbreite des Marketings verantwortet: Strategie und Konzeption, die Website in WordPress, SEO und Blogartikel, Social Media, bezahlte Werbung und Events. Gemeinsam mit externen Dienstleistern haben wir Kampagnen umgesetzt und in HubSpot so automatisiert, dass Leads vom ersten Kontakt bis zur Übergabe an den Vertrieb sauber begleitet wurden.",
        "In diese Zeit fiel auch der Durchbruch der generativen KI. Ich habe die neuen Tools früh im Marketing ausprobiert – für Texte, Workflows und Recherche – und damit den Grundstein für meinen heutigen KI-Schwerpunkt gelegt.",
        "Besonders prägend war die gute Chemie zwischen Marketing und Vertrieb, die der CEO mit seinem vertrieblichen Hintergrund aktiv gefördert hat."
      ],
      punkte: ["Strategie und Konzeption", "Budgetmanagement", "Preisverhandlungen", "WordPress", "SEO", "Blog", "Social Media", "Werbung", "Koordination mit externen Dienstleistern", "Eventmanagement"],
      anteil: { vertrieb: 10, marketing: 90 },
      learnings: ["Automatisierung leben", "Teamchemie is key", "Kontakte über den Job hinaus"]
    },
    {
      id: "collana-apps", typ: "Job 4", logo: "assets/logos/collana.png", zeitraum: "seit 06/2023", titel: "Head of Sales and Marketing", firma: "collana apps", branche: "Softwareentwicklung", ort: "Flensburg / Hamburg",
      text: [
        "Bei der collana apps bin ich von Anfang an dabei. Das Unternehmen wurde als neue Einheit innerhalb der collana Gruppe gegründet, sämtliche Strukturen mussten von Grund auf entstehen. Zu Beginn war ich für den kompletten Aufbau der Marketing- und Sales-Struktur verantwortlich und habe im Vertrieb alles selbst übernommen: Cold Calling, den Aufbau eines Partnernetzwerks, Direktkundenvertrieb, Demos und das Coaching des Teams.",
        "Im Laufe der Zeit sind wir immer stärker in die Strukturen der Holding übergegangen. Das Marketing ist heute fast vollständig in der collana Gruppe angesiedelt – mein Schwerpunkt liegt klar im Sales. Ich kümmere mich um Deals und Vertriebsthemen, auch gruppenweit: beim Cross-Selling und im Coaching von Kolleginnen und Kollegen aus der Gruppe.",
        "Ein großer Schwerpunkt ist für mich außerdem KI geworden. Nicht als Schlagwort, sondern fest verankert in unserer Arbeitsstruktur und Kultur. Ich habe mir dabei ein umfangreiches Wissen aufgebaut, das ich täglich im Vertrieb, in der Beratung und im Coaching einsetze."
      ],
      punkte: ["Cold Calling", "Partnernetzwerk", "Direktkundenvertrieb", "Demos", "Preisverhandlungen", "Team-Coaching", "Cross-Selling", "Strategie und Konzeption", "Consulting", "KI", "GEO", "Claude Code"],
      anteil: { vertrieb: 80, marketing: 20 },
      learnings: ["KI sinnvoll einsetzen", "Visionen durch- und umsetzen", "Unternehmerisches Denken"],
      kennzahlen: [
        { label: "SaaS-Lizenzwerte", von: 3000, bis: 100000, einheit: "€", start: 3, ende: 11 },
        { label: "Projektvolumen", von: 10000, bis: 500000, einheit: "€", start: 5, ende: 19 },
        { label: "Sales Cycle", von: 2, bis: 24, einheit: "Monate", raster: 24, start: 1, ende: 24, schraffiert: 22 }
      ]
    }
  ],

  // Reiter „Warum diese Bewerbung?“
  warum: {
    titel: "Warum diese Bewerbung?",
    lead: "Weil ein neuer Job mehr ist als ein neuer Arbeitsvertrag.",
    absaetze: [
      "Die Entscheidung für einen neuen Job gehört für die meisten Menschen zu den einschneidendsten überhaupt. Im besten Fall legt man damit für die nächsten Jahre fest, womit man den Großteil seiner Tage verbringt: welche Aufgaben man übernimmt, mit welchen Menschen man arbeitet – und natürlich auch, wie man finanziell dasteht. Es ist eine echte Zukunftsentscheidung.",
      "Gerade deshalb vertrete ich eine einfache Haltung: Wer eine so wichtige Entscheidung trifft, sollte sich gründlich Gedanken machen – und das auch zeigen. Für mich ist eine Bewerbung keine Formalität, sondern das erste Signal, dass ich mich ganz bewusst für ein Unternehmen entschieden habe.",
      "Eine klassische Word-Bewerbung, die bis auf zwei, drei Nebensätze im Anschreiben für jede Firma gleich aussieht, wird dem aus meiner Sicht nicht gerecht. Sie ist meist unpersönlich, sagt wenig über mich – und noch weniger darüber, warum ich mich gerade für euch entschieden habe.",
      "Diese Seite ist meine Antwort darauf: persönlich und so gebaut, dass du genau die Fragen stellen kannst, die dich wirklich interessieren."
    ]
  },

  // Reiter „Über mich“
  ueberMich: {
    bild: "assets/bilder/marcel.jpg", // leer lassen = Initialen
    titel: "Über mich",
    intro: [
      "Geboren und zu Hause in Flensburg. Ich bin verheiratet mit meiner Frau Pia und wir teilen unser Zuhause mit unserem Hund Atlas und unserem Kater Agu."
    ],
    // Steckbrief – das Alter wird aus dem Geburtsdatum berechnet
    geburtsdatum: "1990-12-29",
    steckbrief: [
      { label: "Geboren", wert: "29.12.1990 in Flensburg" },
      { label: "Alter", wert: "{alter} Jahre" },
      { label: "Familienstand", wert: "Verheiratet" },
      { label: "Wohnort", wert: "Handewitt" },
      { label: "Telefon", wert: "0162 6314757", link: "tel:01626314757" },
      { label: "E-Mail", wert: "marcel_steiner28@web.de", link: "mailto:marcel_steiner28@web.de" }
    ],
    staerken: ["Außergewöhnlich kreativ", "Klar und direkt", "Gutes Gespür für Zwischentöne", "Flexibel", "Abschlussstark", "Führungsstark", "Humorvoll", "Unternehmerisch denkend"],
    hobbys: [
      { name: "Fußball", text: "" },
      { name: "Discgolf", text: "" },
      { name: "Golf", text: "" },
      { name: "Skat", text: "" },
      { name: "Musikproduktion", text: "" },
      { name: "Lesen", text: "" }
    ],
    // Bücher – cover: Bild in assets/bilder/buecher/
    buecher: {
      titel: "Bücher, die mich geprägt haben",
      liste: [
        { titel: "Many Lives, Many Masters", autor: "Brian L. Weiss", cover: "assets/bilder/buecher/many-lives-many-masters.jpg" },
        { titel: "Essentialismus", autor: "Greg McKeown", cover: "assets/bilder/buecher/essentialismus.jpg" },
        { titel: "Atomic Habits", autor: "James Clear", cover: "assets/bilder/buecher/atomic-habits.jpg" }
      ]
    },
    // Eigene Musikproduktionen – cover: Bild in assets/bilder/ (leer = Platzhalter). Spotify-Track-ID aus dem Link (open.spotify.com/track/<ID>)
    musik: {
      titel: "Meine Musik",
      text: "Zwei Tracks, die ich produziert habe",
      tracks: [
        { id: "5KVyrxu3M8Mij4botSyAOu", titel: "Sola", kuenstler: "Sophie Alice", cover: "assets/bilder/cover-sola.jpg" },
        { id: "4qS2EU8SuIGyW4P9V8G4K4", titel: "No Strings", kuenstler: "Guacáyo", cover: "assets/bilder/cover-no-strings.jpg" }
      ]
    }
  },

  projekte: [
    {
      titel: "KI-Sales-Berater",
      text: "Web-Tool, das Vertriebsmitarbeitende auf Basis von HubSpot-Daten bei der Gesprächsvorbereitung unterstützt.",
      tags: ["Next.js", "HubSpot", "KI"],
      link: ""
    },
    {
      titel: "Diese Bewerbungsseite",
      text: "Lebenslauf als Chat – konzipiert, gestaltet und umgesetzt in HTML, CSS und JavaScript.",
      tags: ["Konzept", "Design", "Web"],
      link: "https://github.com/Steiner2828/Bewerbung"
    }
  ],

  // Reiter „Skills“. logo: Bild in assets/logos/tools/ (leer = neutrales Icon der Kategorie)
  skills: {
    sprachen: [
      { name: "Deutsch", flagge: "de", wert: 10 },
      { name: "Dänisch", flagge: "dk", wert: 10 },
      { name: "Englisch", flagge: "gb", wert: 8 }
    ],
    // Hard Skills
    gruppen: [
      { titel: "CRM & ERP", icon: "crm", tools: [
        { name: "HubSpot", logo: "assets/logos/tools/hubspot.png" }, { name: "Salesforce", logo: "assets/logos/tools/salesforce.png" }, { name: "Business Central", logo: "assets/logos/tools/business-central.png" }, { name: "SAP", logo: "assets/logos/tools/sap.png" }
      ] },
      { titel: "KI & Workflow", icon: "ki", tools: [
        { name: "Claude", logo: "assets/logos/tools/claude.png" }, { name: "Higgsfield", logo: "assets/logos/tools/higgsfield.png" }, { name: "ElevenLabs", logo: "assets/logos/tools/elevenlabs.png", icon: "audio" },
        { name: "Obsidian", logo: "assets/logos/tools/obsidian.png", icon: "notiz" }, { name: "GitHub", logo: "assets/logos/tools/github.png", icon: "code" }
      ] },
      { titel: "Design & Web", icon: "design", tools: [
        { name: "Photoshop", logo: "assets/logos/tools/photoshop.png" }, { name: "InDesign", logo: "assets/logos/tools/indesign.png" }, { name: "Illustrator", logo: "assets/logos/tools/illustrator.png" }, { name: "WordPress", logo: "assets/logos/tools/wordpress.png", icon: "code" }
      ] },
      { titel: "Video & Audio", icon: "video", tools: [
        { name: "DaVinci Resolve", logo: "assets/logos/tools/davinci-resolve.png" }, { name: "Premiere Pro", logo: "assets/logos/tools/premiere-pro.png" }, { name: "Ableton Live", logo: "assets/logos/tools/ableton-live.png", icon: "audio" }
      ] },
      { titel: "Online-Werbung", icon: "werbung", tools: [
        { name: "Google Ads", logo: "assets/logos/tools/google-ads.png" }, { name: "LinkedIn Ads", logo: "assets/logos/tools/linkedin-ads.png" }
      ] }
    ]
  }
};
