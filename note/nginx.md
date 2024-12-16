  GNU nano 4.8                                                                             /etc/nginx/sites-enabled/fe-erp                                                                                       server {
    listen 8080;
    listen 80;
    server_name erp.itmv.vn 192.168.60.50 14.241.39.158;

    client_max_body_size 100M;

    # Root domain (/) to backend at localhost:5000
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
 location /app1 {
  proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Remove /app3 when sending request to backend
        rewrite ^/app1(.*) $1 break;



    }

    # Route for /app3 to backend at localhost:5050
    location /app3 {
        proxy_pass http://localhost:5050;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Remove /app3 when sending request to backend
        rewrite ^/app3(.*) $1 break;
    }

    # Route for /app2 to backend at localhost:4000
    location /app2 {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
          proxy_set_header X-Forwarded-Proto $scheme;

        # Remove /app2 when sending request to backend
        rewrite ^/app2(.*) $1 break;
    }


# DU AN ERP WAREHOUSE
 location /3030 {
        proxy_pass http://localhost:3030;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
       rewrite ^/3030(.*) $1 break;

}
# SSL Configuration
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/erp.itmv.vn/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/erp.itmv.vn/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

