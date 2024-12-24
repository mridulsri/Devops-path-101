# Nginx 101





### Create self signed certificate
    - open GitBash and run below command
        ```
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
        ```
