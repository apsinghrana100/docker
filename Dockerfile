# Use official Node.js image
FROM node:18

#set working directory
WORKDIR /app

#Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon


#Copy rest of code
COPY . .

#expose 
EXPOSE 5000

#start the apps

CMD [ "node","index.js" ]