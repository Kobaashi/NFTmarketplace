FROM node:18-alpine AS build

WORKDIR /nftMarketFront
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM node:18-alpine

RUN npm install -g serve

WORKDIR /app
COPY --from=build /nftMarketFront/dist/nft-market/browser /app

EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]
