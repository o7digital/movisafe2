# Movisafe · Maqueta premium

## Abrir la propuesta

Descomprima el ZIP completo y abra `ABRIR-MAQUETA.html` en su navegador para recorrer las 12 páginas. Esta copia funciona sin instalar dependencias y conserva el diseño adaptable. Noticias, empleo y privacidad enlazan al sitio oficial. Los enlaces de contacto abren la aplicación de teléfono o correo del visitante.

## Trabajar con Astro

Use Node.js 22.12 o superior. Desde la carpeta que contiene `package.json`, ejecute:

```sh
npm ci
npm run dev
```

Abra la dirección local que muestre Astro. Para generar y revisar la versión estática:

```sh
npm run build
npm run preview
```

La carpeta de publicación es `dist/`. En Vercel, seleccione el preset Astro, el comando `npm run build` y la salida `dist`. Este proyecto no necesita claves ni variables de entorno.

## Archivos de edición

| Archivo | Contenido |
| --- | --- |
| `src/data/content.ts` | Textos en español, inglés y francés, servicios y rutas |
| `src/components/Home.astro` | Portada, cifras, servicios, empresa y clientes |
| `src/components/Service.astro` | Plantilla de las nueve fichas de servicio |
| `src/components/Layout.astro` | Cabecera, idioma, menú móvil, metadatos y pie |
| `src/components/Contact.astro` | Correo, teléfonos, dirección y horario comercial |
| `src/styles/site.css` | Paleta, tipografía, composición y adaptación móvil |
| `public/media/` | Logotipo oficial, fotografías, logotipos de clientes y portada |
| `public/fonts/` | Fuentes locales y licencias OFL |

## Instruction à donner à Codex

> Ouvre ce projet Astro, installe les dépendances avec npm ci et lance la prévisualisation. Utilise la maquette fournie comme référence, conserve le logo officiel Movisafe et les trois langues. Applique les modifications demandées dans les composants et le fichier de contenu. Vérifie les 12 pages, les liens de contact, la navigation mobile et le changement de langue au même emplacement. Termine par npm run build.

## Alcance de la maqueta

La portada y las tres fichas por idioma son parte del proyecto. El correo y los teléfonos utilizan los datos publicados por Movisafe. La portada de Reforma es una imagen conceptual creada para esta propuesta. Las fotografías de servicios y los logotipos provienen del sitio del cliente. La maqueta incluye `noindex,nofollow` en Layout.astro, pensado para la fase de revisión. Para una migración al dominio oficial, acuerde primero las rutas históricas y redirecciones, los idiomas de las páginas externas y la indexación.

Las imágenes oficiales utilizadas se identifican en `CREDITOS.md`.
