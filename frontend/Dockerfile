# FROM node:alpine AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install

# FROM node:16.13-alpine AS builder
# WORKDIR /app
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# # Production image, copy all the files and run next
# FROM node:alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/out ./out
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# USER nextjs

# # EXPOSE 80 443 3000
# FROM nginx
# COPY ./nginx/homepage.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/out /usr/share/nginx/html
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN yarn add --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN yarn add --production

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3000 80

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "yarn", "--", "start" ]

# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]