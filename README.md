# Institution Le Saint Justien (ISAJ) — site web

Site de l'Institution Le Saint Justien, établissement scolaire privé situé à
Bon-Repos, Croix-des-Bouquets, Haïti. Astro + React + Tailwind, généré en
statique.

## Commandes

| Commande                   | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `npm install`              | Installe les dépendances                          |
| `npm run dev`              | Serveur local sur `localhost:4321`                |
| `npm run build`            | Génère le site dans `./dist/`                     |
| `npm run preview`          | Prévisualise la version générée                   |
| `npm run validate:content` | Vérifie qu'aucun placeholder ne subsiste          |

`validate:content` échoue si un texte temporaire (« à confirmer », « à venir »,
« brouillon Gmail », « Académie des Petits Isajiens »…) réapparaît dans `src/`.
À exécuter avant chaque mise en ligne.

## Hébergement — Cloudflare Pages

Le site est un build statique : Cloudflare Pages le sert depuis son CDN mondial,
avec bande passante illimitée sur le plan gratuit et HTTPS inclus.

Configuration du projet Pages :

| Réglage                  | Valeur          |
| :----------------------- | :-------------- |
| Framework preset         | Astro           |
| Build command            | `npm run build` |
| Build output directory   | `dist`          |

Le fichier `public/_headers` définit la politique de cache et les en-têtes de
sécurité ; Cloudflare le lit automatiquement dans le dossier de sortie.

- `/_astro/*` — noms de fichiers hachés par Astro, donc mis en cache **un an**
  en `immutable`. Un visiteur qui revient ne retélécharge aucune image.
- `/favicon.svg` et `/og-isaj.jpg` — noms fixes : cache d'un jour avec
  revalidation en arrière-plan.
- HTML — jamais mis en cache durablement : c'est lui qui pointe vers les
  nouveaux noms hachés après un déploiement.

**Ne jamais remettre d'image dans `public/`** : les fichiers y sont servis bruts,
sans recompression ni variantes de taille. Les photos vivent dans
`src/assets/photos/` et passent par `src/data/photos.ts`.

## Variables d'environnement

À définir dans Cloudflare Pages (Settings → Environment variables), puis
redéployer.

| Variable                | Rôle                                                                 |
| :---------------------- | :------------------------------------------------------------------- |
| `PUBLIC_WEB3FORMS_KEY`  | **Requis pour l'envoi réel des formulaires.** Clé d'accès gratuite obtenue sur [web3forms.com](https://web3forms.com) avec l'adresse officielle de l'école. |
| `PUBLIC_FORM_ENDPOINT`  | Alternative : URL d'un autre service de formulaire (Formspree, etc.). Ignorée si `PUBLIC_WEB3FORMS_KEY` est définie. |
| `PUBLIC_SITE_URL`       | Domaine du site, utilisé pour les URL canoniques et l'aperçu des liens (Open Graph). Défaut : `https://isaj.pages.dev`. À changer lors du passage au domaine officiel. |

### Formulaires

Les pages **Contact** et **Préinscription** envoient un vrai message à l'adresse
officielle de l'établissement, sans obliger le visiteur à posséder un compte
Gmail. Chaque formulaire est protégé par un champ piège (honeypot) et un délai
minimum de remplissage.

Tant qu'aucune clé n'est configurée, les formulaires restent utilisables : le
message est remis au logiciel de messagerie du visiteur, avec un message de
confirmation adapté. **Configurez `PUBLIC_WEB3FORMS_KEY` avant la mise en ligne
officielle** pour que les demandes arrivent directement dans la boîte de l'école.

## Images

Les photographies sont dans `src/assets/photos/` et décrites une seule fois dans
`src/data/photos.ts`. Au build, Astro génère pour chacune plusieurs largeurs en
WebP (qualité 85) : une vignette de galerie reçoit une image de 400 ou 800 px au
lieu de l'original de 1600 px, sans perte visible.

Résultat mesuré sur mobile : galerie 9,7 Mo → 0,3 Mo avant défilement, et
11,3 Mo → 1,5 Mo page entière.

## Informations institutionnelles

Toutes les informations publiées (identité, adresse, téléphones, e-mail,
sections, équipe, projets, besoins) sont centralisées dans
`src/data/site-content.ts`. Le détail de chaque section scolaire se trouve dans
`src/data/grade-profiles.ts`.

**Une seule adresse e-mail officielle** est utilisée sur tout le site
(`officialEmail` dans `src/data/site-content.ts`) : contact, footer,
formulaires, partenariat et admissions.

## Points à valider avec l'administration

- Adresse e-mail officielle définitive (actuellement
  `institutionlesaintjustien2000@gmail.com`).
- Nom de domaine professionnel, avant tout achat ou raccordement.
- Réseaux sociaux officiels : aucune section n'est affichée tant qu'aucun compte
  vérifié n'existe.
- Partenaires : aucun logo ni nom d'organisation n'est présenté comme partenaire
  confirmé.
- Pourcentages de réussite aux examens : aucun chiffre n'est publié tant qu'il
  n'est pas officiellement vérifié.
