FROM node:alpine3.20 AS base

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install

RUN npm i sharp

COPY . .

ENV NEXT_PUBLIC_CONTACT_API_ENDPOINT=https://api.enemy.sh/contact/

RUN npm run build

FROM node:alpine3.20 AS serve

WORKDIR /app

COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs \
    && chown -R nextjs:nodejs /app

USER nextjs

CMD ["npm", "run", "start"]