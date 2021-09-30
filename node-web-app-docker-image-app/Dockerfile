# Specify base image
# alpine in docker means as small as possible image
FROM node:alpine

# Create default Work directory
WORKDIR /usr/app

# #Copy dependencies to the docker image
# COPY ./ ./

# Install some dependencies

#Only copy package.json
# Did this because we only want to reinstall if package.json file is changed (cache)
COPY ./package.json ./
RUN npm install

#Copy everything else
COPY ./ ./

# Default command
CMD ["npm","run","start"]