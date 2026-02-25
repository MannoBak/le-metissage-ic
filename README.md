# Le Métissage — Site vitrine (CI/CD)

Site statique (HTML/CSS/JS léger) présentant le restaurant **Le Métissage**.
Déploiement automatique via **GitHub Actions** sur **GitHub Pages**.

## Pages
- Accueil (index.html)
- Menu (pages/menu.html)
- Galerie (pages/galerie.html)
- À propos (pages/apropos.html)
- Contact (pages/contact.html)

## Équipe (trinôme) & rôles
- Membre A : Accueil + composants communs (Navbar/Footer) + responsive global
- Membre B : Menu + composants “carte”
- Membre C : Galerie + Contact + carte + formulaire

## CI/CD
- Lint HTML (htmlhint)
- Lint CSS (stylelint)
- Déploiement GitHub Pages (GitHub Actions)

## Lancer le lint en local
```bash
npm install
npm run lint