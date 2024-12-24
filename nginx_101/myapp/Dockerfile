# Stage 1: Build the application
FROM node:20.15.0-alpine As Build
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
# RUN yarn build

# Stage 2: Run the application
ARG APP_VERSION=1.0
RUN echo "Building version $APP_VERSION"
EXPOSE 3000
CMD [ "node", "./src/app.js" ]