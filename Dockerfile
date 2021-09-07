# This stage builds the application.
FROM mhart/alpine-node:14 AS build-app
WORKDIR /app
COPY . .
RUN npm install --no-audit --unsafe-perm
RUN npm run build

# This stage installs the runtime dependencies.
FROM mhart/alpine-node:14 AS build-runtime
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production --unsafe-perm

# This stage only needs the compiled application
# and the runtime dependencies.
FROM mhart/alpine-node:slim-14
WORKDIR /app
COPY --from=build-app /app/build ./build
COPY --from=build-runtime /app/package.json ./package.json
COPY --from=build-runtime /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "build"]