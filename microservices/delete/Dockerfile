FROM node:12
WORKDIR /app 
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 
EXPOSE 3334
CMD node index.js 
