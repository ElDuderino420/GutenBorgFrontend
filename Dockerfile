FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY build /usr/src/app
RUN npm install -g serve-https

EXPOSE 5000
CMD [ "serve-https" ]