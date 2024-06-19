# AWS

- EC2:
  - Elastic Compute 2
  - Can increase/ decrease size of
  - Create an EC2 instance through AWS GUI
  - Connect it through SSH
  - Clone some node git repo
  - install node
  - run node application
  - check if server is working through opening the site from browser
  - If not configure port of the application for v4 and v6

- Reverse Proxy:
  - Problem: Suppose your machine/ EC2 instance is running 3 node processes or applications, then how to use same port(https port) for all so that we don't need to include :port in url. 
	- We can do it using reverse proxy, that is machine will have reverse proxy running on port (https port), and other 3 applications will run on different ports suppose 3000, 3001, and 3002. If any request comes onto the machine it will first reach the reverse proxy of port (https port), then the reverse proxy will direct the request to appropriate application based on factors like url and other things.

- Proxy: 
	- A VPN is a proxy.
	- That means your request to sent to the target server via a intermediate server. Here intermediate server is the proxy

## How to achieve reverse proxy:
- Nginx: Open source software for web serving, reverse proxing, caching, load balancing, media streaming and more.

- Install: sudo apt update
	- sudo apt install nginx
- After installation it automatically starts and listens of port 80
- Point ip's of applications to sub/ different domains
- Configure nginx for directing request to appropriate application process (create reverse proxy):



