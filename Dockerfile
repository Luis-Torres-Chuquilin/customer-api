FROM node:12.18.1-alpine              

WORKDIR /usr/src/app                  

COPY /app/package*.json ./                 

RUN npm install --only=production     

COPY /app ./                      

CMD npm start 

#  COPY /app ./ will copy all the files inside app into the current directoty. It could be COPY /app .