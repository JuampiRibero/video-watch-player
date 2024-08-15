# Reproductor de Videos

## Introducción

Aplicación web, realizada como parte de una prueba técnica, que une en un reproductor de vídeos las siguientes tecnologías: Next.js, Tailwind CSS, Shadcn y tRPC. Los usuarios pueden reproducir cualquier video individualmente, viendo una lista de todos ellos, contabilizando sus vistas, likes y dislikes.

## Tecnologías Utilizadas

- **Next.js** [Documentación de Next.js](https://nextjs.org/docs)
- **Tailwind CSS** [Documentación de Tailwind CSS](https://tailwindcss.com/docs/installation)
- **Shadcn** [Documentación de Shadcn](https://ui.shadcn.com/docs)
- **tRPC** [Documentación de tRPC](https://trpc.io/docs/quickstart)
- **TypeScript** [Documentación de TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Otras Librerías Utilizadas

- **Lucide Icons**
- **React Hot Toast**
- **React Icons**

## Estructura del Proyecto

video-watch-player/
│
├── public/
│ ├── gif/
│ │ └── under-construction.gif
│ │
│ ├── images/
│ │ ├── dislikeVideo.png
│ │ ├── getVideos.png
│ │ ├── incrementWatchCount.png
│ │ └── likeVideo.png
│ │
│ ├── next.svg
│ └── vercel.svg
│
├── src/
│ │
│ ├── app/
│ │ │
│ │ ├── _trpc/
│ │ │ ├── client.ts
│ │ │ ├── Provider.tsx
│ │ │ └── serverClient.ts
│ │ │
│ │ ├── about/
│ │ │ └── page.tsx
│ │ │
│ │ ├── api/
│ │ │ └── trpc
│ │ │ └── [trpc]
│ │ │ └── route.ts
│ │ │
│ │ ├── contact/
│ │ │ └── page.tsx
│ │ │
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx
│ │
│ ├── components/
│ │ ├── ui/
│ │ │ ├── avatar.tsx
│ │ │ ├── button.tsx
│ │ │ ├── navigation-menu.tsx
│ │ │ ├── select.tsx
│ │ │ ├── sheet.tsx
│ │ │ └── skeleton.tsx
│ │ │
│ │ ├── Footer.tsx
│ │ ├── LanguageSelector.tsx
│ │ ├── Navbar.tsx
│ │ ├── Topbar.tsx
│ │ ├── UnderConstruction.tsx
│ │ ├── VideoList.tsx
│ │ ├── VideoListSkeleton.tsx
│ │ ├── VideoPlayer.tsx
│ │ └── VideoPlayerSkeleton.tsx
│ │
│ ├── context/
│ │ └── LanguageContext.tsx
│ │
│ ├── lib/
│ │ └── utils.ts
│ │
│ ├── server/
│ │ ├── index.ts
│ │ └── trpc.ts
│ │
│ └── context/
│ ├── LanguageContext.tsx
│ └── ThemeContext.tsx
│
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.msj
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

## Instrucciones para Instalación

1. Clona el repositorio:

```
git clone https://github.com/JuampiRibero/video-watch-player.git
```

2. Accede a la raíz del del proyecto:

```
cd video-watch-player
```

2. Instala todas las dependencias:

```
npm install
```

3. Corre el servidor de desarrollo:

```
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) con tu navegador.

## API Endpoints

- GET /api/trpc/getVideos → Recupera lista de videos con todos los datos.
  <img src="public/images/getVideos.png" alt="Captura de pantalla mostrando el GET a 'http://localhost:3000/api/trpc/getVideos' en Postman" title="Imagen GET URL" />
- POST /api/trpc/incrementWatchCount → Incrementa el contador de vistas de un video.
  <img src="public/images/incrementWatchCount.png" alt="Captura de pantalla mostrando el POST a 'http://localhost:3000/api/trpc/incrementWatchCount' en Postman" title="Imagen POST URL" />
- POST /api/trpc/likeVideo → Incrementa el contador de likes de un video.
  <img src="public/images/likeVideo.png" alt="Captura de pantalla mostrando el POST a 'http://localhost:3000/api/trpc/likeVideo' en Postman" title="Imagen POST URL" />
- POST /api/trpc/dislikeVideo → Incrementa el contador de dislikes de un video.
  <img src="public/images/dislikeVideo.png" alt="Captura de pantalla mostrando el POST a 'http://localhost:3000/api/trpc/dislikeVideo' en Postman" title="Imagen POST URL" />

### Autor

Juan Pablo Ribero Mazzoni