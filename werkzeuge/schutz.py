#!/usr/bin/env python3
"""Passwortschutz für die Bewerbungsseiten.

Verschlüsseln (Klartext aus <ordner>/firma.js, wird NICHT eingecheckt):
  python3 werkzeuge/schutz.py zu <ordner> <passwort>
Entschlüsseln (zum Bearbeiten, schreibt <ordner>/firma.js):
  python3 werkzeuge/schutz.py auf <ordner> <passwort>

Ergebnis: <ordner>/schutz.js mit window.SCHUTZ = {salz, iv, runden, daten}.
Für die Hauptseite (ohne Firmeninhalt) einfach eine leere firma.js verwenden.
"""
import base64, json, os, re, sys
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

RUNDEN = 250000
b64 = lambda b: base64.b64encode(b).decode()

def schluessel(pw, salz, runden):
    return PBKDF2HMAC(hashes.SHA256(), 32, salz, runden).derive(pw.encode())

def zu(ordner, pw):
    klar = open(os.path.join(ordner, "firma.js"), encoding="utf-8").read()
    salz, iv = os.urandom(16), os.urandom(12)
    daten = AESGCM(schluessel(pw, salz, RUNDEN)).encrypt(iv, klar.encode(), None)
    s = {"salz": b64(salz), "iv": b64(iv), "runden": RUNDEN, "daten": b64(daten)}
    open(os.path.join(ordner, "schutz.js"), "w").write("window.SCHUTZ = " + json.dumps(s) + ";\n")

def auf(ordner, pw):
    t = open(os.path.join(ordner, "schutz.js")).read()
    s = json.loads(re.search(r"=\s*(\{.*\})", t, re.S).group(1))
    klar = AESGCM(schluessel(pw, base64.b64decode(s["salz"]), s["runden"])).decrypt(
        base64.b64decode(s["iv"]), base64.b64decode(s["daten"]), None)
    open(os.path.join(ordner, "firma.js"), "w", encoding="utf-8").write(klar.decode())

if __name__ == "__main__":
    {"zu": zu, "auf": auf}[sys.argv[1]](sys.argv[2], sys.argv[3])
