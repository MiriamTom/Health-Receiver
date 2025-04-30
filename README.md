# Health Receiver – Webová aplikácia na vizualizáciu zdravotných údajov

**Health Receiver** je webová aplikácia slúžiaca na zobrazovanie zdravotných a polohových údajov používateľov získaných z cloudu. Údaje sú zbierané z nositeľných zariadení (napr. Huawei hodinky) a posielané cez MQTT protokol.

---

## 🏠 Hlavná stránka – **Dashboard**

- Zobrazuje **mapu všetkých pripojených používateľov**.
- Ak používateľ **používa Huawei hodinky** a zdieľa svoj **srdcový tep**, zobrazí sa aj jeho **aktuálny tep**.
- Správy sú posielané cez MQTT server [`test.mosquitto.org`](https://test.mosquitto.org).
- Nie všetci používatelia majú Huawei zariadenia – ak nie, zobrazuje sa aspoň ich **poloha**.

---

## 📈 Stránka **Charts** – Grafy historických údajov

- Údaje sa načítavajú **z cloudu** (napr. Firebase).
- Používateľ si vyberie:
  1. **Zariadenie**, ktorého údaje chce zobraziť.
  2. **Dátum** v kalendári.
- Po výbere sa zobrazia **interaktívne grafy** pre nasledujúce metriky (ak sú dostupné):
  - **HR** (srdcový tep)
  - **SpO₂** (okysličenie krvi)
  - **Kroky**
  - **Stres**
- Nie všetky zariadenia poskytujú všetky metriky, preto sa niektoré grafy nemusia zobraziť.
- Grafy sú implementované pomocou knižnice **Plotly** – umožňujú **zoomovanie**, **posúvanie**, **screenshoty** aj **export**.

---

## 🧭 Navigačný panel – Ďalšie funkcie

- **Components > Data Schema**  
  - Zobrazí **schému dát**, ktoré sú posielané do cloudu – vrátane štruktúry tabuliek a polí.
- **Raw Data**  
  - Zobrazuje **všetky dekomprimované dáta** buď vo forme **tabuľky**, alebo ako **JSON**.

---

## 🧩 Použité technológie

- **MQTT** na získavanie živých údajov zo zariadení
- **Firebase** ako cloudové úložisko historických dát
- **Plotly.js** na tvorbu interaktívnych grafov
- **JavaScript/HTML/CSS** pre frontend
---

## 🚀 Spustenie projektu

1. **Naklonuj repozitár**:
   ```bash
   git clone https://github.com/MiriamTom/Health-Receiver.git
   cd health-receiver
   ```

2. **Nainštaluj závislosti**:
   ```bash
   npm install
   ```

3. **Spusti vývojový server**:
   ```bash
   npm run dev
   ```

4. **Otvori si aplikáciu v prehliadači**:
   ```
   http://localhost:5173
   ```
   (alebo iný port, podľa výpisu v termináli)

---

## 📦 Požiadavky

- Node.js (odporúčaná verzia: 18+)
- NPM alebo Yarn
- Internetové pripojenie (kvôli MQTT a Firebase)

