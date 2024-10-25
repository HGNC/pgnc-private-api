# See https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b
# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app


RUN npm install nodemon -g
RUN npm install typeorm -g


# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

# the command that starts our app
ENTRYPOINT ["/usr/src/app/start.sh"]