# Image de build + preview du site statique ABCA Beauvais.
# (Le deploiement de production se fait sur Vercel, cf. vercel.json.)
FROM node:lts-alpine
WORKDIR /usr/src/app

# Les dependances de dev (vite, typescript) sont necessaires pour construire
# le site : on ne peut donc pas installer en --production avant le build.
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci

COPY . .
RUN npm run build && chown -R node /usr/src/app

ENV NODE_ENV=production
EXPOSE 3000
USER node

# "npm start" n'existe pas dans package.json : on sert le build via vite preview.
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
