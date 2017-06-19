FROM php:7.0-apache


RUN apt-get update && apt-get install -y vim


COPY apache2-foreground /usr/local/bin/
COPY conf/ /etc/apache2/
COPY templates/ /var/apache2/templates/

RUN mkdir /var/www/load-balancer
RUN a2enmod proxy proxy_http proxy_balancer lbmethod_byrequest
RUN a2ensite 000-* 001-*
RUN service apache2 restart
