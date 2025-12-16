# Sử dụng Node.js bản nhẹ (Alpine)
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package để cài thư viện trước
COPY package*.json ./
RUN npm install

# Copy toàn bộ code vào
COPY . .

# Mở cổng 3000 (Mặc dù server chạy port nào thì mình map port đó sau)
EXPOSE 3000

# Lệnh chạy server
CMD ["node", "index.js"]