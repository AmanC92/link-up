# Base image for nginx
FROM nginx

# Documenting we are using port 80
EXPOSE 80

# Delete the default welcome to nginx page
RUN rm /usr/share/nginx/html/*

# Copy over the custom default configs.
COPY configs/default.conf /etc/nginx/conf.d/default.conf

# Start the nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]