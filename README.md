# Jean-Jacques Soleil y las pastillas negras

Landing page oficial del proyecto — built with Jekyll, deployed on GitHub Pages.

---

## Setup local

```bash
# 1. Instala dependencias
bundle install

# 2. Corre el servidor de desarrollo
bundle exec jekyll serve

# 3. Abre http://localhost:4000
```

---

## Deploy en GitHub Pages

### Primera vez

1. Crea un repositorio en GitHub (ej. `jean-jacques-soleil`)
2. Sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU-USUARIO/jean-jacques-soleil.git
   git push -u origin main
   ```
3. Ve a **Settings → Pages** en tu repositorio
4. En **Source**, selecciona **GitHub Actions**
5. El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente

Tu sitio quedará en: `https://TU-USUARIO.github.io/jean-jacques-soleil/`

> Si usas un repositorio con el nombre exacto `TU-USUARIO.github.io`, el sitio queda en la raíz y el `baseurl` en `_config.yml` debe ser `""`.

---

## Configuración

Edita `_config.yml`:
- `url`: tu dominio o URL de GitHub Pages
- `baseurl`: `/nombre-del-repo` si no es tu sitio raíz, o `""` si sí lo es

---

## Conectar Substack

En `assets/js/main.js`, reemplaza:
```js
const SUBSTACK_URL = 'https://lacourt.substack.com/subscribe';
```
con tu URL real de Substack.

Alternativamente, reemplaza el bloque `.newsletter__embed` en `index.html` con el iframe embed oficial de Substack (Settings → Publication details → Embed).

---

## Estructura

```
├── _config.yml          # Configuración Jekyll
├── _layouts/
│   └── default.html     # Layout base con <head> y fonts
├── _includes/
│   ├── nav.html          # Barra de navegación
│   └── footer.html       # Footer
├── assets/
│   ├── css/main.css      # Todos los estilos
│   └── js/main.js        # Scroll reveal + form Substack
├── index.html            # Página principal
├── Gemfile               # Dependencias Ruby
└── .github/workflows/
    └── deploy.yml        # CI/CD automático
```

---

*Lacourt & Company · Santiago*
