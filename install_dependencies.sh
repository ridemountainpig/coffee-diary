#!/bin/sh
apt-get update && \
apt-get install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0 libxshmfence1 libglu1 && \
ENV PUPPETEER_CACHE_DIR=/src/.cache/puppeteer && \
COPY package.json* tsconfig.json* .npmrc* . && \
COPY pnpm-lock.yaml* . && \
pnpm install
