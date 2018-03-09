FROM teamcio/docker-nginx-static:latest

COPY ./examples/tmconsulting-ui /usr/share/nginx/html

USER root
RUN chown -R www-data:www-data /usr/share/nginx/html
USER www-data