# Deployment Guide för SkönhetsKlinik

Denna guide förklarar hur du distribuerar SkönhetsKlinik-webbplatsen till Vercel och konfigurerar databasen.

## Förutsättningar

- Ett [GitHub](https://github.com/)-konto
- Ett [Vercel](https://vercel.com/)-konto (du kan skapa ett gratis konto med din GitHub-inloggning)

## Steg 1: Förbered koden för distribution

1. Se till att din kod är sparad i ett Git-repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Skapa ett nytt repository på GitHub och ladda upp din kod:
   ```bash
   git remote add origin https://github.com/ditt-användarnamn/skonhetsklinik.git
   git push -u origin main
   ```

## Steg 2: Konfigurera Vercel Postgres

1. Logga in på ditt [Vercel Dashboard](https://vercel.com/dashboard)
2. Klicka på "Storage" i vänstermenyn
3. Välj "Postgres" och klicka på "Create Database"
4. Välj den närmaste regionen (t.ex. "Stockholm")
5. Namnge din databas (t.ex. "skonhetsklinik-db")
6. Klicka på "Create"

När databasen har skapats, klicka på den för att se anslutningsuppgifterna. Du behöver dessa för nästa steg.

## Steg 3: Distribuera till Vercel

1. Gå till [Vercel Dashboard](https://vercel.com/dashboard)
2. Klicka på "Add New" > "Project"
3. Importera ditt GitHub-repository
4. Konfigurera projektet:
   - Framework Preset: Next.js
   - Under "Environment Variables", lägg till följande:
     ```
     POSTGRES_URL=(värdet från .env.production.local)
     ```
   - Du kan också lägga till andra miljövariabler som behövs för ditt projekt
5. Klicka på "Deploy"

Vercel kommer nu att bygga och distribuera din webbplats. När det är klart får du en URL där din webbplats är tillgänglig.

## Steg 4: Initiera databasen

När din webbplats är distribuerad behöver du initiera databasen med tabeller och grunddata.

1. Gå till Deployment-sidan för ditt projekt i Vercel Dashboard
2. Klicka på "Functions" för att se alla API-rutter
3. Leta rätt på funktionen "api/init-db"
4. Öppna ett webbläsarfönster och gå till den URL:en för att initiera databasen:
   ```
   https://din-sida.vercel.app/api/init-db
   ```

Detta kommer att skapa nödvändiga tabeller och lägga till grundläggande tjänstedata.

## Steg 5: Anpassning av domännamn (valfritt)

Om du vill använda ett eget domännamn:

1. Gå till ditt projekt i Vercel Dashboard
2. Klicka på "Settings" > "Domains"
3. Skriv in ditt domännamn och klicka på "Add"
4. Följ instruktionerna för att konfigurera DNS för ditt domännamn

## Felsökning

Om du stöter på problem under distributionen:

1. Kontrollera "Deployments" i Vercel Dashboard
2. Klicka på den senaste distributionen för att se byggloggar
3. Om det finns något fel i byggprocessen, visa loggarna för att se detaljerad information

För databasfel:

1. Kontrollera att miljövariablerna är korrekt konfigurerade
2. Verifiera att API-rutterna för databasen fungerar som förväntat
3. Använd Vercel Dashboard för att inspektera databasloggar

## Uppdatering av webbplatsen

När du gör ändringar i din kod:

1. Commita och pusha dina ändringar till GitHub:
   ```bash
   git add .
   git commit -m "Beskrivning av ändringar"
   git push
   ```

2. Vercel kommer automatiskt att upptäcka ändringarna och distribuera en ny version av din webbplats.

## Lokal utveckling med produktionsdatabas

Om du vill använda produktionsdatabasen under lokal utveckling:

1. Gå till din databasinformation i Vercel Dashboard
2. Kopiera innehållet i ".env.local"-fliken
3. Skapa en ny fil ".env.local" i projektets rot och klistra in innehållet
4. Starta om utvecklingsservern:
   ```bash
   npm run dev
   ```

Detta låter dig ansluta till produktionsdatabasen under lokal utveckling. 