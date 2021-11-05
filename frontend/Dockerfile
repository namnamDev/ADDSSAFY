FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

FROM node:16.13-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/out ./out
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

# EXPOSE 80 443 3000
FROM nginx
COPY ./nginx/homepage.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# stage1 as builder



# FROM node:16.13-alpine as builder

# # copy the package.json to install dependencies
# COPY package.json package.json ./

# # Install the dependencies and make the folder
# RUN yarn install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui
# # RUN npm install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui

# WORKDIR /nextjs-ui

# COPY . .

# # Build the project and copy the files
# RUN yarn run build
# # RUN npm run build

# FROM nginx:alpine

# #!/bin/sh

# COPY ./nginx/homepage.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
# COPY --from=builder /nextjs-ui/builder /usr/share/nginx/html

# EXPOSE 3000 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]