# Use am exosotomg docker image as a base
# This step is same as installing operating system on your computer
FROM alpine  

#Download and install a dependency
# This step is same as run commands to install additional programs (After Os is installed)
RUN apk add --update redis

# Tell the image what to do when it starts as a container
# Command to run on startup
CMD ["redis-server"]