FROM node:20-alpine

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy dependency files first (better caching)
COPY package*.json ./

RUN npm ci

# Copy source code
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Run Angular using ng CLI
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
