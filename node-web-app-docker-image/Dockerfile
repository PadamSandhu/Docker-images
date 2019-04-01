# Specify base image
# alpine in docker means as small as possible image
FROM node:alpine

# Create default Work directory
WORKDIR /usr/app

#Copy dependencies to the docker image
COPY ./ ./

# Install some dependencies
RUN npm install


# Default command
CMD ["npm","run","start"]