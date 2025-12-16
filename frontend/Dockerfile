FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Chạy React ở chế độ dev
CMD ["npm", "start"]