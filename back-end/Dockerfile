FROM node:20 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env .env

# Install dependencies and generate Prisma client
RUN npm ci
RUN npx prisma generate

COPY . .
RUN npm run build

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.env ./.env
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/prisma ./prisma

# Generate Prisma client for the target platform
RUN npx prisma generate

EXPOSE 8080

CMD ["node", "dist/main.js"]