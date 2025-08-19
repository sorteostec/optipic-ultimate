# OptiPic Ultimate — Publicación en GitHub Pages

Este paquete contiene los archivos *extra* para publicar tu app estática.
**Pon tu `index.html` final en la raíz** (sustituye el placeholder si hace falta).

## Publicar en GitHub Pages (usuario: `sorteostec`)
1. Crea el repo **optipic-ultimate** en tu cuenta: https://github.com/sorteostec/optipic-ultimate
2. Sube: `index.html`, `robots.txt`, `.nojekyll`, `LICENSE`, `README.md`, `privacy-policy.md`, `404.html`, `manifest.webmanifest`, `sw.js`, carpeta `assets/`.
3. Activa **Settings → Pages → Deploy from branch** → Branch: `main` y carpeta **/(root)**.
4. Tu web quedará en: https://sorteostec.github.io/optipic-ultimate/

### Opcional: PWA (instalable/offline)
En tu `index.html` añade en `<head>`:
```html
<link rel="manifest" href="./manifest.webmanifest">
```
y antes de `</body>`:
```html
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' });
}
</script>
```
> Ojo a los **paths relativos** (`./`) para que funcione en **/optipic-ultimate/**.

### Ajusta el botón de GitHub de tu UI
Si tu HTML tiene un botón/enlace a GitHub, cámbialo a:
```html
<a href="https://github.com/sorteostec/optipic-ultimate" target="_blank" rel="noopener">GitHub</a>
```

## Desarrollo local
Abre `index.html` con doble clic. Todo ocurre en el navegador.

## Contacto
sorteos.tecnologicos.sl@gmail.com
