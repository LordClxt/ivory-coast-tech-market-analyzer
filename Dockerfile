# Stage 1: Build Vite Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Express Server + Production Production Bundle
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package*.json ./
RUN npm ci --only=production

# Copy built frontend assets to dist/ and server files
COPY --from=frontend-builder /app/dist ./dist
COPY server ./server

EXPOSE 3000

CMD ["node", "server/index.js"]
