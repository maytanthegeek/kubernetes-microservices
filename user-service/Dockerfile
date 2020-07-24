FROM alpine
EXPOSE 8000
RUN wget -qO- https://github.com/danielgtaylor/apisprout/releases/download/v1.3.0/apisprout-v1.3.0-linux.tar.xz | tar xJ -C /usr/local/bin/
COPY openapi.yml /opt
CMD apisprout --validate-server /opt/openapi.yml