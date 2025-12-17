FROM node:20-bookworm-slim AS build-app

WORKDIR /app
COPY . .
# Убедитесь, что установлены все необходимые для сборки зависимости
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
RUN npm ci --no-audit
RUN npm run build

# Финальный этап
FROM node:20-bookworm-slim
WORKDIR /app
# Настройте non-root пользователя для безопасности
RUN chown -R node:node /app
USER node

COPY --from=build-app /app/build ./build
COPY --from=build-app /app/package.json ./package.json
COPY --from=build-app /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "build"]
