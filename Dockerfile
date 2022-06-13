FROM node:lts-alpine AS ts-sample-builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-alpine AS ts-sample-prod
WORKDIR /app
COPY --from=ts-sample-builder ./app/dist ./dist
COPY package* ./
RUN npm install --production
EXPOSE 5001

CMD npm start
