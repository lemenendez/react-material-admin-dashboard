FROM node:10

COPY ["package.json","/usr/app/"]
RUN npm install

COPY [".","/usr/app"]

WORKDIR /usr/app

EXPOSE 3000:3000