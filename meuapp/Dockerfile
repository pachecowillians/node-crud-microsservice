FROM node:12
WORKDIR /meuapp 
COPY package.json /meuapp 
COPY yarn.lock /meuapp
RUN yarn install 
COPY . /meuapp 
EXPOSE 3000
CMD node index.js 
