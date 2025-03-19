# SkönhetsKlinik

En modern, responsiv webbplats för en skönhetsklinik med bokningssystem, byggd med Next.js, React, Tailwind CSS och PostgreSQL.

## Funktioner

- 🌟 Modern och lyxig design med fokus på användarupplevelse
- 📱 Fullt responsiv för alla enheter (mobil, surfplatta, desktop)
- 🇸🇪 Komplett innehåll på svenska anpassat för den svenska marknaden
- 📅 Enkelt bokningssystem utan inloggning
- 🔍 SEO-optimerad
- 🔒 Backendlösning med API-rutter och databas
- 🖼️ Optimerade högkvalitetsbilder

## Webbplatssidor

- **Hem** - Herosection, tjänsteöversikt och kundrecensioner
- **Tjänster** - Detaljerad information om alla behandlingar
- **Boka tid** - Enkelt flöde för att boka behandlingar
- **Om oss** - Information om kliniken och teamet
- **Kontakta oss** - Kontaktformulär, karta och kontaktinformation

## Teknisk stack

- **Frontend**:
  - [Next.js](https://nextjs.org/) (v15) - React framework
  - [React](https://reactjs.org/) (v19) - JavaScript-bibliotek
  - [Tailwind CSS](https://tailwindcss.com/) (v4) - CSS-ramverk
  - [React Calendar](https://www.npmjs.com/package/react-calendar) - För datumväljare

- **Backend**:
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Serverless funktioner
  - [PostgreSQL](https://www.postgresql.org/) - Relationsdatabas
  - [Vercel Postgres](https://vercel.com/storage/postgres) - Databashosting

- **Hosting**:
  - [Vercel](https://vercel.com/) - För webbplats och API-rutter

## Komma igång

### Förutsättningar

- Node.js (v18 eller senare)
- npm eller yarn
- Git

### Installation

1. Klona projektet:
   ```bash
   git clone https://github.com/ditt-användarnamn/skonhetsklinik.git
   cd skonhetsklinik
   ```

2. Installera beroenden:
   ```bash
   npm install
   # eller
   yarn install
   ```

3. Konfigurera miljövariabler:
   Skapa en fil med namnet `.env.local` i projektets rot och lägg till följande:
   ```
   # För lokal utveckling med PostgreSQL
   POSTGRES_USER=din_postgres_användare
   POSTGRES_PASSWORD=ditt_postgres_lösenord
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_DATABASE=skonhetsklinik
   ```

4. Starta utvecklingsservern:
   ```bash
   npm run dev
   # eller
   yarn dev
   ```

5. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare för att se resultatet.

### Skript för att ladda ner bilder

För att ladda ner bildresurserna:

```bash
node scripts/download-images.js
```

### Databas

För att initiera databasen, kör:

```bash
# Se till att databasen körs lokalt först
curl http://localhost:3000/api/init-db
```

## Distribution

Se [DEPLOYMENT.md](./DEPLOYMENT.md) för en detaljerad guide om hur du distribuerar denna webbplats till Vercel.

## Projektstruktur

```
skonhetsklinik/
├── app/                # Next.js App Router
│   ├── api/            # API-rutter (serverless funktioner)
│   ├── boka-tid/       # Bokningstidssida
│   ├── components/     # React-komponenter
│   ├── kontakta-oss/   # Kontaktsida
│   ├── lib/            # Bibliotekshjälpfunktioner
│   ├── om-oss/         # Om oss-sida
│   ├── tjanster/       # Tjänstesida
│   ├── globals.css     # Globala CSS-stilar
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Hemsida
├── public/             # Statiska filer
│   └── images/         # Bildresurser
├── scripts/            # Skript för bildnedladdning, etc.
├── .env.local          # Lokala miljövariabler (skapa denna fil själv)
├── package.json        # Projektberoenden
├── tailwind.config.js  # Tailwind-konfiguration
└── tsconfig.json       # TypeScript-konfiguration
```

## Underhåll

För att hålla webbplatsen uppdaterad:

1. Uppdatera beroenden regelbundet:
   ```bash
   npm update
   # eller
   yarn upgrade
   ```

2. Testa webbplatsen noggrant efter uppdateringar.

## Licens

Detta projekt är tillgängligt under MIT-licensen. Se LICENSE-filen för mer information.
