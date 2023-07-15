FROM stefanscherer/node-windows AS build

WORKDIR /website 

# COPY  package.json package-lock.json ./ 

# RUN dir 

COPY . .

# RUN  npm install

RUN npm install -g npx

RUN npm install

RUN npm start 

EXPOSE 3001